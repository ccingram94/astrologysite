import data from 'astronomia/data';
import { Planet, toFK5 } from 'astronomia/planetposition';
import moonposition from 'astronomia/moonposition';
import solar from 'astronomia/solar';
import base from 'astronomia/base';
import elliptic from 'astronomia/elliptic';
import coord from 'astronomia/coord';
import * as plutoCalc from 'astronomia/pluto'; 
import elp from 'astronomia/elp';
import nutation from 'astronomia/nutation';
import apparent from 'astronomia/apparent';
import calculateLocalSiderealTime from './calculateLocalSiderealTime';

// Initialize planets (Moon to Neptune) with VSOP87B data
const mercury = new Planet(data.vsop87Bmercury);
const venus = new Planet(data.vsop87Bvenus);
const earth = new Planet(data.vsop87Bearth);
const mars = new Planet(data.vsop87Bmars);
const jupiter = new Planet(data.vsop87Bjupiter);
const saturn = new Planet(data.vsop87Bsaturn);
const uranus = new Planet(data.vsop87Buranus);
const neptune = new Planet(data.vsop87Bneptune);
const moon = new elp.Moon(data.elpMppDe);
// Initialize Pluto
const pluto = {
  position: function(jde) {
    const pos = plutoCalc.heliocentric(jde);
    return {
      lon: pos.lon,
      lat: pos.lat,
      range: pos.range
    };
  }
};


/**
 * Calculates heliocentric positions for all planets and converts to geocentric
 * @param {number} jd - Julian Day
 * @returns {Object} Planetary positions in degrees
 */

export const calculatePlanetaryPositions = (jde) => {
  // Get mean obliquity of ecliptic
  const ε = nutation.meanObliquity(jde);
  const [Δψ, Δε] = nutation.nutation(jde);
  const trueε = ε + Δε;

  // Calculate positions
  const positions = {};

  // Sun
  const sunPos = solar.apparentVSOP87(earth, jde);
  positions.sun = sunPos.lon;

  // Moon - using similar pattern to other planets
  const moonPos = moonposition.position(jde);
  // Convert to equatorial coordinates
  const moonEq = new coord.Ecliptic(moonPos.lon, moonPos.lat).toEquatorial(trueε);
  // Convert back to ecliptic with proper corrections
  const moonEcl = new coord.Equatorial(moonEq.ra, moonEq.dec).toEcliptic(trueε);
  // Apply nutation correction
  positions.moon = moonEcl.lon + Δψ;

  // Inner planets (Mercury & Venus)
  const mercuryPos = elliptic.position(mercury, earth, jde);
  const venusPos = elliptic.position(venus, earth, jde);
  
  // Convert from equatorial to ecliptic
  positions.mercury = new coord.Equatorial(mercuryPos.ra, mercuryPos.dec).toEcliptic(trueε).lon;
  positions.venus = new coord.Equatorial(venusPos.ra, venusPos.dec).toEcliptic(trueε).lon;

  // Outer planets
  const marsPos = elliptic.position(mars, earth, jde);
  const jupiterPos = elliptic.position(jupiter, earth, jde);
  const saturnPos = elliptic.position(saturn, earth, jde);
  const uranusPos = elliptic.position(uranus, earth, jde);
  const neptunePos = elliptic.position(neptune, earth, jde);

  positions.mars = new coord.Equatorial(marsPos.ra, marsPos.dec).toEcliptic(trueε).lon;
  positions.jupiter = new coord.Equatorial(jupiterPos.ra, jupiterPos.dec).toEcliptic(trueε).lon;
  positions.saturn = new coord.Equatorial(saturnPos.ra, saturnPos.dec).toEcliptic(trueε).lon;
  positions.uranus = new coord.Equatorial(uranusPos.ra, uranusPos.dec).toEcliptic(trueε).lon;
  positions.neptune = new coord.Equatorial(neptunePos.ra, neptunePos.dec).toEcliptic(trueε).lon;

// Pluto calculation
// Pluto calculation using plutoCalc directly
const plutoPos = plutoCalc.heliocentric(jde);
const plutoAstro = plutoCalc.astrometric(jde, earth);
const plutoEcl = new coord.Equatorial(plutoAstro.ra, plutoAstro.dec).toEcliptic(trueε);
// Apply corrections:
// Nutation correction
const plutoLon = plutoEcl.lon + Δψ;
// Aberration correction
const [Δλ, Δβ] = apparent.eclipticAberration(plutoLon, plutoEcl.lat, jde);
// FK5 coordinate system correction
const fk5 = toFK5(plutoLon + Δλ, plutoEcl.lat + Δβ, jde);
// Final longitude with all corrections
positions.pluto = plutoLon;

  // Convert all positions to degrees and normalize to 0-360
  const planetaryPositions = {};
  Object.entries(positions).forEach(([planet, lon]) => {
    planetaryPositions[planet] = base.pmod(lon * 180 / Math.PI, 360);
  });

  return planetaryPositions;
};

/**
 * Calculates speed of planets to determine if retrograde
 * @param {number} jd - Julian Day
 * @returns {Object} Motion states for each planet ('direct', 'retrograde', or 'stationary')
 */
export const calculatePlanetaryMotions = (jd) => {
  try {
    const timeStep = 1;
    const positions1 = calculatePlanetaryPositions(jd);
    const positions2 = calculatePlanetaryPositions(jd + timeStep);

    const motions = {};
    Object.keys(positions1).forEach(planet => {
      let speed = positions2[planet] - positions1[planet];
      // Handle cases where the position crosses 0/360 boundary
      if (speed > 180) speed -= 360;
      if (speed < -180) speed += 360;

      // More precise retrograde thresholds
      motions[planet] = {
        speed,
        state: speed < -0.0033 ? 'retrograde' : 
               speed > 0.0033 ? 'direct' : 
               'stationary'
      };
    });

    return motions;
  } catch (error) {
    console.error('Error calculating planetary motions:', error);
    throw error;
  }
};

/**
 * Gets zodiac sign and degree for a given longitude
 * @param {number} longitude - Celestial longitude in degrees
 * @returns {Object} Zodiac sign information
 */
export const getZodiacPosition = (longitude) => {
  const signs = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 
    'Leo', 'Virgo', 'Libra', 'Scorpio', 
    'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  const signIndex = Math.floor(longitude / 30);
  const degree = longitude % 30;
  
  // Calculate degrees, minutes, and seconds
  const degrees = Math.floor(degree);
  const minutesTotal = (degree - degrees) * 60;
  const minutes = Math.floor(minutesTotal);
  const seconds = Math.floor((minutesTotal - minutes) * 60);

  // Format degreeInSign as string with degrees, minutes, seconds
  const degreeInSign = `${degrees}° ${minutes}' ${seconds}"`;

  return {
    sign: signs[signIndex],
    degree: degree,
    degreeInSign: degreeInSign,
    degrees: degrees,
    minutes: minutes,
    seconds: seconds
  };
};

export default {
  calculatePlanetaryPositions,
  calculatePlanetaryMotions,
  getZodiacPosition
};

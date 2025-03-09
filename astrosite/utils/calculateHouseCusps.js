import modulo from './modulo';
import degreesToRadians from './degreesToRadians';
import radiansToDegrees from './radiansToDegrees';
import getDegreesInSign from './getDegreesInSign';
import decimalDegreesToDMS from './decimalDegreesToDMS';
import getZodiacSign from './getZodiacSign';
import coord from 'astronomia/coord';
import base from 'astronomia/base';

const calculateHouseCusps = (houseSystem, ascDegree, mcDegree, latitude, lst, planets) => {
  switch (houseSystem) {
    case 'whole-sign':
      return calculateWholeSignHouses(ascDegree);
    case 'equal-house':
      return calculateEqualHouses(ascDegree);
    case 'placidus':
      return calculatePlacidusHouses(ascDegree, mcDegree, latitude, lst);
    default:
      return calculateWholeSignHouses(ascDegree);
  }
};

const names = [
  'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth',
  'Seventh', 'Eighth', 'Ninth', 'Tenth', 'Eleventh', 'Twelfth'
]

const formatHouseCusp = (degree, houseNumber) => ({
  label: `${names[houseNumber - 1]}`,
  key: `${houseNumber}`,
  degree: degree,
  sign: getZodiacSign(degree),
  degreeInSign: decimalDegreesToDMS(getDegreesInSign(degree)),
  planetsInHouse: [],
});

const calculateWholeSignHouses = (ascDegree) => {
  const ascSignStart = Math.floor(ascDegree / 30) * 30;
  return Array.from({ length: 12 }, (_, i) => {
    const degree = modulo(ascSignStart + (i * 30), 360);
    return formatHouseCusp(degree, i + 1);
  });
};

const calculateEqualHouses = (ascDegree) => {
  return Array.from({ length: 12 }, (_, i) => {
    const degree = modulo(ascDegree + (i * 30), 360);
    return formatHouseCusp(degree, i + 1);
  });
};

const addPlanetsToHouseCusps = (houseCusps, planets) => {
  if (!planets || Object.keys(planets).length === 0) {
    return houseCusps;
  }
  
  // Create a deep copy of the houseCusps array to avoid mutating the original
  const houseCuspsWithPlanets = houseCusps.map(cusp => ({
    ...cusp,
    planetsInHouse: [] // Initialize or reset planetsInHouse array
  }));
  
  // Populate the planetsInHouse arrays based on each planet's house property
  Object.entries(planets).forEach(([planetName, planetData]) => {
    if (planetData && planetData.house) {
      const houseNumber = planetData.house;
      
      if (houseNumber >= 1 && houseNumber <= 12) {
        const houseIndex = houseNumber - 1; // Convert house number (1-12) to array index (0-11)
        houseCuspsWithPlanets[houseIndex].planetsInHouse.push(planetName);
      }
    }
  });
  
  return houseCuspsWithPlanets;
};


const calculatePlacidusHouses = (ascDegree, mcDegree, latitude, lst) => {
  // Convert degrees to radians for calculations
  const latRad = degreesToRadians(latitude);
  const obliquityRad = degreesToRadians(23.4367); // Obliquity of the ecliptic (J2000)
  
  const houseCusps = new Array(12);
  
  // Set angular houses directly
  houseCusps[0] = formatHouseCusp(ascDegree, 1);  // Ascendant (1st house cusp)
  houseCusps[9] = formatHouseCusp(mcDegree, 10);  // Midheaven (10th house cusp)
  houseCusps[6] = formatHouseCusp(modulo(ascDegree + 180, 360), 7);  // Descendant (7th house cusp)
  houseCusps[3] = formatHouseCusp(modulo(mcDegree + 180, 360), 4);   // IC (4th house cusp)
  
  // Calculate intermediate houses using semiarcs
  // Calculate houses 11 and 12 (between MC and ASC)
  calculateIntermediateHouses(10, 1, houseCusps, latRad, obliquityRad, lst);
  
  // Calculate houses 2 and 3 (between ASC and IC)
  calculateIntermediateHouses(1, 4, houseCusps, latRad, obliquityRad, lst);
  
  // Calculate houses 5 and 6 (between IC and DESC)
  calculateIntermediateHouses(4, 7, houseCusps, latRad, obliquityRad, lst);
  
  // Calculate houses 8 and 9 (between DESC and MC)
  calculateIntermediateHouses(7, 10, houseCusps, latRad, obliquityRad, lst);
  
  return houseCusps;
};

const calculateIntermediateHouses = (startHouse, endHouse, houseCusps, latRad, obliquityRad, lst) => {
  // Indices for array access (0-based, but houses are 1-based)
  const startIdx = startHouse - 1;
  const endIdx = (endHouse - 1) % 12;
  
  // Get RA (Right Ascension) of the angular houses
  const raStart = getSiderealAngle(houseCusps[startIdx].degree, obliquityRad);
  const raEnd = getSiderealAngle(houseCusps[endIdx].degree, obliquityRad);
  
  // Calculate the semiarc distance
  let raDiff = raEnd - raStart;
  if (raDiff < 0) raDiff += 360;
  
  // The two intermediate houses divide the arc into three equal parts
  const step = raDiff / 3;
  
  // Calculate RA for the intermediate houses
  const ra1 = modulo(raStart + step, 360);
  const ra2 = modulo(raStart + 2 * step, 360);
  
  // Convert RA back to ecliptic longitude for the intermediate houses
  const house1 = getEclipticLongitude(ra1, obliquityRad, latRad);
  const house2 = getEclipticLongitude(ra2, obliquityRad, latRad);
  
  // Assign to the correct house cusps
  const house1Idx = startIdx === 9 ? 10 : (startIdx + 1) % 12;
  const house2Idx = startIdx === 9 ? 11 : (startIdx + 2) % 12;
  
  houseCusps[house1Idx] = formatHouseCusp(house1, house1Idx + 1);
  houseCusps[house2Idx] = formatHouseCusp(house2, house2Idx + 1);
};

// Helper function to convert ecliptic longitude to right ascension
const getSiderealAngle = (eclipticLongitude, obliquityRad) => {
  const eclipticRad = degreesToRadians(eclipticLongitude);
  const ra = Math.atan2(
    Math.sin(eclipticRad) * Math.cos(obliquityRad),
    Math.cos(eclipticRad)
  );
  return radiansToDegrees(ra < 0 ? ra + 2 * Math.PI : ra);
};

// Helper function to convert right ascension to ecliptic longitude
const getEclipticLongitude = (ra, obliquityRad, latRad) => {
  // This is a simplified version and may need refinement for accuracy
  const raRad = degreesToRadians(ra);
  
  // Iterative process to find the ecliptic longitude
  let approxLong = ra;
  let delta = 1;
  let iteration = 0;
  
  // Use iterative approach to find the longitude that gives the desired RA
  while (Math.abs(delta) > 0.001 && iteration < 20) {
    const longRad = degreesToRadians(approxLong);
    const calcRA = Math.atan2(
      Math.sin(longRad) * Math.cos(obliquityRad),
      Math.cos(longRad)
    );
    const calcRADeg = radiansToDegrees(calcRA < 0 ? calcRA + 2 * Math.PI : calcRA);
    
    delta = modulo(calcRADeg - ra + 180, 360) - 180;
    approxLong = modulo(approxLong - delta, 360);
    iteration++;
  }
  
  return approxLong;
};



export { addPlanetsToHouseCusps };
export default calculateHouseCusps;

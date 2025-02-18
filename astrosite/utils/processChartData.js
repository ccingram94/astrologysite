import { getZodiacPosition } from './calculatePlanetaryPositions';

/**
 * Calculates house cusps based on the selected house system
 * @param {Object} angles - The angles of the chart (asc, mc, dsc, ic)
 * @param {string} houseSystem - The selected house system (e.g., 'whole-sign', 'placidus', etc.)
 * @returns {Object} - Object containing house positions
 */
const calculateHouses = (angles, houseSystem) => {
  // Start with whole sign houses as default
  const houses = {};
  const ascDegree = Math.floor(angles.asc / 30) * 30;

  for (let i = 1; i <= 12; i++) {
    houses[i] = {
      cusp: (ascDegree + ((i - 1) * 30)) % 360,
      sign: getZodiacPosition((ascDegree + ((i - 1) * 30)) % 360).sign
    };
  }

  // Add other house systems here as needed
  if (houseSystem === 'placidus') {
    // Implement Placidus house calculation
  } else if (houseSystem === 'koch') {
    // Implement Koch house calculation
  }

  return houses;
};

/**
 * Processes raw astronomical data into astrological chart data
 * @param {Object} angles - The angles of the chart (asc, mc, dsc, ic)
 * @param {Object} planetaryPositions - The positions of the planets
 * @param {Object} planetaryMotions - The motions/speeds of the planets
 * @param {string} houseSystem - The selected house system
 * @returns {Object} - Processed chart data
 */
export const processChartData = (birthData, angles, planetaryPositions, planetaryMotions) => {
  try {
    const chart = {
      birthData,
      angles: {
        ascendant: {
          ...getZodiacPosition(angles.asc),
          degree: angles.asc
        },
        midheaven: {
          ...getZodiacPosition(angles.mc),
          degree: angles.mc
        },
        descendant: {
          ...getZodiacPosition(angles.dsc),
          degree: angles.dsc
        },
        imumCoeli: {
          ...getZodiacPosition(angles.ic),
          degree: angles.ic
        }
      },
      planets: {},
      houses: {}
    };

    // Process planetary positions
    Object.entries(planetaryPositions).forEach(([planet, position]) => {
      chart.planets[planet] = {
        ...getZodiacPosition(position),
        degree: position,
        motion: planetaryMotions[planet]
      };
    });

    // Calculate houses
    chart.houses = calculateHouses(angles, birthData.houseSystem);

    return chart;
  } catch (error) {
    console.error('Error processing chart data:', error);
    throw new Error('Failed to process chart data');
  }
};

/**
 * Gets the house number for a given celestial point
 * @param {number} degree - The celestial point's degree
 * @param {Object} houses - The house cusps
 * @returns {number} - The house number (1-12)
 */
export const getHousePlacement = (degree, houses) => {
  for (let i = 1; i <= 12; i++) {
    const nextHouse = i === 12 ? 1 : i + 1;
    const start = houses[i].cusp;
    const end = houses[nextHouse].cusp;

    if (end > start) {
      if (degree >= start && degree < end) return i;
    } else {
      if (degree >= start || degree < end) return i;
    }
  }
  return 1; // Default to first house if not found
};

/**
 * Determines if a planet is in its domicile, exaltation, fall, or detriment
 * @param {string} planet - The planet name
 * @param {string} sign - The zodiac sign
 * @returns {string|null} - The dignity status or null
 */
export const getPlanetaryDignity = (planet, sign) => {
  const dignities = {
    sun: { domicile: ['Leo'], exaltation: ['Aries'], fall: ['Libra'], detriment: ['Aquarius'] },
    moon: { domicile: ['Cancer'], exaltation: ['Taurus'], fall: ['Scorpio'], detriment: ['Capricorn'] },
    // Add other planets...
  };

  if (!dignities[planet]) return null;

  if (dignities[planet].domicile.includes(sign)) return 'domicile';
  if (dignities[planet].exaltation.includes(sign)) return 'exaltation';
  if (dignities[planet].fall.includes(sign)) return 'fall';
  if (dignities[planet].detriment.includes(sign)) return 'detriment';

  return null;
};

export default processChartData;

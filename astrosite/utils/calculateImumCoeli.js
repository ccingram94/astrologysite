import modulo from "./modulo";
import getZodiacSign from "./getZodiacSign";
import getDegreesInSign from "./getDegreesInSign";
import decimalDegreesToDMS from "./decimalDegreesToDMS";

/**
 * Calculate the Imum Coeli (IC) using the Midheaven value
 * @param {number} midheaven - Midheaven in degrees (0-360)
 * @returns {Object} IC information
 */
export default function calculateImumCoeli(midheavenDegree) {
  try {
    // Handle both object and number inputs
    const mcDegree = Number(midheavenDegree);
    
    // Check if the input is valid
    if (typeof mcDegree !== 'number' || isNaN(mcDegree)) {
      throw new Error('Invalid input for IC calculation');
    }

    // IC is always 180° from the Midheaven
    let ic = modulo(mcDegree + 180, 360);
    
    // Only get the degree within the sign (0-30) for display
    const degreeInSign = getDegreesInSign(ic);

    return {
      label: 'Imum Coeli',
      key: 'ic',
      degree: ic,
      sign: getZodiacSign(ic),
      degreeInSign: decimalDegreesToDMS(degreeInSign)
    };
  } catch (error) {
    console.error('Error calculating Imum Coeli:', error);
    throw error;
  }
}
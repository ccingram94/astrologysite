import modulo from "./modulo";
import getZodiacSign from "./getZodiacSign";
import getDegreesInSign from "./getDegreesInSign";
import decimalDegreesToDMS from "./decimalDegreesToDMS";

/**
 * Calculate the Descendant using the Ascendant value
 * @param {number} ascendant - Ascendant in degrees (0-360)
 * @returns {Object} Descendant information
 */
export default function calculateDescendant(ascendantDegree) {
  try {
    // Handle both object and number inputs
    const ascDegree = Number(ascendantDegree);
    
    // Check if the input is valid
    if (typeof ascDegree !== 'number' || isNaN(ascDegree)) {
      throw new Error('Invalid input for Descendant calculation');
    }

    // Descendant is always 180° from the Ascendant
    let descendant = modulo(ascDegree + 180, 360);
    
    // Only get the degree within the sign (0-30) for display
    const degreeInSign = getDegreesInSign(descendant);

    return {
      label: 'Descendant',
      key: 'descendant',
      degree: descendant,
      sign: getZodiacSign(descendant),
      degreeInSign: decimalDegreesToDMS(degreeInSign)
    };
  } catch (error) {
    console.error('Error calculating Descendant:', error);
    throw error;
  }
}
import SIGNS from './constants';

/**
 * Calculates the zodiac sign based on a decimal degree
 * @param {number} decimalDegrees - Decimal degrees (0-360)
 * @returns {Object} Sign object containing sign information
 */
export function getSignFromDD(decimalDegrees) {
  const normalizedDegree = (decimalDegrees % 360 + 360) % 360;
  
  // Handle 360° == 0° (Aries)
  if (normalizedDegree === 360) return SIGNS;

  // Find matching sign
  const sign = SIGNS.find(sign => 
    normalizedDegree >= sign.zodiacStart && 
    normalizedDegree < sign.zodiacEnd
  );

  if (!sign) {
    console.error(`No sign found for ${normalizedDegree}`);
    return SIGNS;
  }

  return sign;
}

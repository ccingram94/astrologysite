import sidereal from 'astronomia/sidereal';

/**
 * Calculate Local Sidereal Time
 * @param {number} julianDate - Julian Ephemeris Date
 * @param {number|string} longitude - Geographic longitude in degrees (East positive)
 * @returns {number} Local Sidereal Time in degrees (0-360)
 */
export default function calculateLocalSiderealTime(julianDate, longitude) {
  try {
    // Convert longitude to number if it's a string
    const longNum = Number(longitude);
    
    // Get Greenwich Mean Sidereal Time in seconds
    const gmst = sidereal.mean(julianDate);
    
    // Convert GMST from seconds to degrees
    const gmstDegrees = (gmst / 86400) * 360;
    
    // Add longitude to get Local Sidereal Time
    let lst = (gmstDegrees + longNum) % 360;
    
    // Ensure positive result
    if (lst < 0) {
      lst += 360;
    }

    console.log({
      gmst,
      gmstDegrees,
      longitude: longNum,
      finalLST: lst
    });

    return lst;
  } catch (error) {
    console.error('Error calculating Local Sidereal Time:', error);
    throw error;
  }
}

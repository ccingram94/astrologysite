import julian from 'astronomia/julian';

/**
 * Calculate the Julian Ephemeris Date from a UTC ISO string
 * @param {string} utcDate - UTC date in ISO format (e.g., "2025-02-23T17:51:00.000Z")
 * @returns {number} Julian Ephemeris Date (JDE)
 */
export default function calculateJulianDate(utcDate) {
  try {
    // Convert ISO string to Date object
    const date = new Date(utcDate);
    
    // Convert UTC date to Julian Ephemeris Date
    const jde = julian.DateToJD(date);

    return jde;

  } catch (error) {
    console.error('Error calculating Julian Ephemeris Date:', error);
    throw error;
  }
}

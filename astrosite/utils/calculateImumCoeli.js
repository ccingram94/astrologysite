import base from 'astronomia/base';
import calculateMidheaven from './calculateMidheaven';

/**
 * Calculates the Imum Coeli (IC) angle for a given time and location
 * @param {Date} dateObj - JavaScript Date object of birth date and time
 * @param {number} lat - Latitude of birth location
 * @param {number} lon - Longitude of birth location
 * @param {number} jd - Julian Day
 * @returns {number} Imum Coeli angle in degrees (0-360)
 */
export const calculateImumCoeli = (dateObj, lat, lon, jd) => {
  const mc = calculateMidheaven(dateObj, lat, lon, jd);
  return base.pmod(mc + 180, 360);
};

export default calculateImumCoeli;

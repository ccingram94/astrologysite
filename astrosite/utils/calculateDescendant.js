import base from 'astronomia/base';
import calculateAscendant from './calculateAscendant';

/**
 * Calculates the Descendant (DSC) angle for a given time and location
 * @param {Date} dateObj - JavaScript Date object of birth date and time
 * @param {number} lat - Latitude of birth location
 * @param {number} lon - Longitude of birth location
 * @param {number} jd - Julian Day
 * @returns {number} Descendant angle in degrees (0-360)
 */
export const calculateDescendant = (dateObj, lat, lon, jd) => {
  const asc = calculateAscendant(dateObj, lat, lon, jd);
  return base.pmod(asc + 180, 360);
};

export default calculateDescendant;

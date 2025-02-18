import base from 'astronomia/base';
import sidereal from 'astronomia/sidereal';

/**
 * Calculates the Ascendant (ASC) angle for a given time and location
 * @param {Date} dateObj - JavaScript Date object of birth date and time
 * @param {number} lat - Latitude of birth location
 * @param {number} lon - Longitude of birth location
 * @param {number} jd - Julian Day
 * @returns {number} Ascendant angle in degrees (0-360)
 */
export const calculateAscendant = (dateObj, lat, lon, jd) => {
  // Calculate Local Sidereal Time
  const [century, dayFrac] = sidereal.JDToCFrac(jd);
  const gmst = sidereal.mean(jd); // Greenwich Mean Sidereal Time in seconds
  const lst = (gmst / 3600 + lon / 15) % 24; // Convert to hours and adjust for longitude
  const lstRad = (lst * 15) * Math.PI / 180; // Convert to radians

  // Earth's obliquity
  const obliquity = 23.4393 * Math.PI / 180;
  
  const [sinLat, cosLat] = base.sincos(lat * Math.PI / 180);
  const [sinObl, cosObl] = base.sincos(obliquity);
  
  // Calculate Ascendant
  const tanAsc = -Math.cos(lstRad) / (Math.sin(lstRad) * cosObl + Math.tan(lat * Math.PI / 180) * sinObl);
  const asc = Math.atan(tanAsc);
  const ascDeg = base.pmod(asc * 180 / Math.PI + 360, 360);

  return ascDeg;
};

export default calculateAscendant;

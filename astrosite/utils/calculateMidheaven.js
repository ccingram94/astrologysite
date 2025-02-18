import base from 'astronomia/base';
import sidereal from 'astronomia/sidereal';

/**
 * Calculates the Midheaven (MC) angle for a given time and location
 * @param {Date} dateObj - JavaScript Date object of birth date and time
 * @param {number} lat - Latitude of birth location
 * @param {number} lon - Longitude of birth location
 * @param {number} jd - Julian Day
 * @returns {number} Midheaven angle in degrees (0-360)
 */
export const calculateMidheaven = (dateObj, lat, lon, jd) => {
  // Calculate Local Sidereal Time
  const [century, dayFrac] = sidereal.JDToCFrac(jd);
  const gmst = sidereal.mean(jd);
  const lst = (gmst / 3600 + lon / 15) % 24;
  const lstRad = (lst * 15) * Math.PI / 180;

  // Earth's obliquity
  const obliquity = 23.4393 * Math.PI / 180;
  const [sinObl, cosObl] = base.sincos(obliquity);

  // Calculate Midheaven
  const mc = Math.atan2(Math.sin(lstRad) * cosObl, Math.cos(lstRad));
  const mcDeg = base.pmod(mc * 180 / Math.PI + 360, 360);

  return mcDeg;
};

export default calculateMidheaven;

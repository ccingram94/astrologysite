import base from 'astronomia/base';
import sidereal from 'astronomia/sidereal';
import { DateToJD } from 'astronomia/julian';
import modulo from './modulo';
import degreesToRadians from './degreesToRadians';
import radiansToDegrees from './radiansToDegrees';
import { getSignFromDD } from './getSignFromDD';
import getDegreesInSign from './getDegreesInSign';
import decimalDegreesToDMS from './decimalDegreesToDMS';
import getZodiacSign from './getZodiacSign';

/**
 * Calculates the Midheaven (MC) angle for a given time and location
 * @param {Date} dateObj - JavaScript Date object of birth date and time
 * @param {number} lat - Latitude of birth location
 * @param {number} lon - Longitude of birth location
 * @returns {number} Midheaven angle in degrees (0-360)
 */

const cosFromDegrees = (degrees) => Math.cos(degreesToRadians(degrees));

const tanFromDegrees = (degrees) => Math.tan(degreesToRadians(degrees));


export default function calculateMidheaven(lst) {
  try {
    // Earth's obliquity
    const obliquity = 23.4367;

    const tanLST = tanFromDegrees(lst);
    const cosOE = cosFromDegrees(obliquity);
    let midheaven = radiansToDegrees(Math.atan(tanLST/cosOE));

  // Correcting for quadrant
  if (midheaven < 0) {
    midheaven += 360;
  }

  if (midheaven > lst) {
    midheaven -= 180;
  }

  if (midheaven < 0) {
    midheaven += 180;
  }

  if (midheaven < 180 && lst >= 180) {
    midheaven += 180;
  }

  const mcDeg = modulo(midheaven, 360);

    return {
      label: 'Midheaven',
      key: 'midheaven',
      degree: mcDeg,
      sign: getZodiacSign(mcDeg),
      degreeInSign: decimalDegreesToDMS(getDegreesInSign(mcDeg))
    };
  } catch (error) {
    console.error('Error calculating Midheaven:', error);
    throw error;
  }
}

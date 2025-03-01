import base from 'astronomia/base';
import moonposition from 'astronomia/moonposition';
import apparent from 'astronomia/apparent';
import modulo from './modulo';
import degreesToRadians from './degreesToRadians';
import radiansToDegrees from './radiansToDegrees';
import getDegreesInSign from './getDegreesInSign';
import decimalDegreesToDMS from './decimalDegreesToDMS';
import dmsString from './dmsString';
import getZodiacSign from './getZodiacSign';

export default function calculateMoon(jde) {
  try {
    // Get moon's position (returns longitude, latitude, and distance)
    const { lon, lat, range } = moonposition.position(jde);

    // Convert longitude from radians to degrees
    let moonLongitude = radiansToDegrees(lon);

    // Ensure result is between 0 and 360 degrees
    moonLongitude = modulo(moonLongitude, 360);

    return {
      label: 'Moon',
      key: 'moon',
      degree: moonLongitude,
      sign: getZodiacSign(moonLongitude),
      degreeInSign: decimalDegreesToDMS(getDegreesInSign(moonLongitude)),
      degreeFormatted: dmsString(decimalDegreesToDMS(getDegreesInSign(moonLongitude)))
    };
  } catch (error) {
    console.error('Error calculating Moon position:', error);
    throw error;
  }
}

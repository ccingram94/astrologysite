import base from 'astronomia/base';
import * as sidereal from 'astronomia/sidereal';
import * as nutation from 'astronomia/nutation';
import modulo from './modulo';
import degreesToRadians from './degreesToRadians';
import radiansToDegrees from './radiansToDegrees';
import getDegreesInSign from './getDegreesInSign';
import decimalDegreesToDMS from './decimalDegreesToDMS';
import getZodiacSign from './getZodiacSign';

/**
 * Calculate the Ascendant (rising sign) using pre-calculated Julian Date and Local Sidereal Time
 * @param {number} julianDate - Julian Date
 * @param {number} lst - Local Sidereal Time in hours (0-24)
 * @param {number} lat - Latitude in decimal degrees (North positive)
 * @returns {number} Ascendant in degrees (0-360)
 */

const sinFromDegrees = (degrees) => Math.sin(degreesToRadians(degrees));
const cosFromDegrees = (degrees) => Math.cos(degreesToRadians(degrees));
const tanFromDegrees = (degrees) => Math.tan(degreesToRadians(degrees));

export default function calculateAscendant(lst, latitude) {
  try {
    // LST is already in degrees (0-360), no need to multiply by 15
    const lstDegrees = lst;
    
    // Obliquity of the ecliptic
    const obliquity = 23.4367;
    
    // Convert to radians
    const lstRad = degreesToRadians(lstDegrees);
    const latRad = degreesToRadians(latitude);

    // Calculate ascendant using the correct formula
    const ascRad = Math.atan2(
      Math.cos(lstRad),
      -(Math.sin(lstRad) * Math.cos(degreesToRadians(obliquity)) + 
        Math.tan(latRad) * Math.sin(degreesToRadians(obliquity)))
    );

    // Convert to degrees
    let ascendant = radiansToDegrees(ascRad);

    // Ensure result is between 0 and 360 degrees
    if (ascendant < 0) {
      ascendant += 360;
    }

    return {
      label: 'Ascendant',
      key: 'ascendant',
      degree: ascendant,
      sign: getZodiacSign(ascendant),
      degreeInSign: decimalDegreesToDMS(getDegreesInSign(ascendant))
    };
  } catch (error) {
    console.error('Error calculating Ascendant:', error);
    throw error;
  }
}

import base from 'astronomia/base';
import solar from 'astronomia/solar';
import modulo from './modulo';
import degreesToRadians from './degreesToRadians';
import radiansToDegrees from './radiansToDegrees';
import getDegreesInSign from './getDegreesInSign';
import decimalDegreesToDMS from './decimalDegreesToDMS';
import dmsString from './dmsString';
import getZodiacSign from './getZodiacSign';
import getHousePlacement from './getHousePlacement';

export default function calculateSun(jde, cusps) {
  try {
    // Calculate Sun's position
    const T = base.J2000Century(jde);
    const lon = solar.apparentLongitude(T);
    
    // Convert longitude from radians to degrees
    let sunLongitude = radiansToDegrees(lon);
    
    // Ensure result is between 0 and 360 degrees
    sunLongitude = modulo(sunLongitude, 360);

    // Get house placement if house cusps are provided
    const house = cusps ? getHousePlacement(sunLongitude, cusps) : null;

    return {
      label: 'Sun',
      key: 'sun',
      degree: sunLongitude,
      sign: getZodiacSign(sunLongitude),
      degreeInSign: decimalDegreesToDMS(getDegreesInSign(sunLongitude)),
      degreeFormatted: dmsString(decimalDegreesToDMS(getDegreesInSign(sunLongitude))),
      house: house
    };
  } catch (error) {
    console.error('Error calculating Sun position:', error);
    throw error;
  }
}

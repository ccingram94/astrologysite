import base from 'astronomia/base';
import solar from 'astronomia/solar';
import modulo from './modulo';
import degreesToRadians from './degreesToRadians';
import radiansToDegrees from './radiansToDegrees';
import getDegreesInSign from './getDegreesInSign';
import decimalDegreesToDMS from './decimalDegreesToDMS';
import dmsString from './dmsString';
import getZodiacSign from './getZodiacSign';

export default function calculateSun(jde) {
  try {
    // Calculate Sun's position
    const T = base.J2000Century(jde);
    console.log(T)
    const lon = solar.apparentLongitude(T);
    console.log(lon)
    
    // Convert longitude from radians to degrees
    let sunLongitude = radiansToDegrees(lon);
    console.log(sunLongitude)
    
    // Ensure result is between 0 and 360 degrees
    sunLongitude = modulo(sunLongitude, 360);

    return {
      label: 'Sun',
      key: 'sun',
      degree: sunLongitude,
      sign: getZodiacSign(sunLongitude),
      degreeInSign: decimalDegreesToDMS(getDegreesInSign(sunLongitude)),
      degreeFormatted: dmsString(decimalDegreesToDMS(getDegreesInSign(sunLongitude)))
    };
  } catch (error) {
    console.error('Error calculating Sun position:', error);
    throw error;
  }
}

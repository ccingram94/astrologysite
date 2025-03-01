import base from 'astronomia/base';
import planetposition from 'astronomia/planetposition';
import vsop87Bjupiter from 'astronomia/data/vsop87Bjupiter';
import vsop87Bearth from 'astronomia/data/vsop87Bearth';
import elliptic from 'astronomia/elliptic';
import coord from 'astronomia/coord';
import modulo from './modulo';
import radiansToDegrees from './radiansToDegrees';
import getDegreesInSign from './getDegreesInSign';
import dmsString from './dmsString';
import decimalDegreesToDMS from './decimalDegreesToDMS';
import getZodiacSign from './getZodiacSign';

export default function calculateJupiter(jde) {
  try {
    // Create Jupiter and Earth instances
    const jupiter = new planetposition.Planet(vsop87Bjupiter);
    const earth = new planetposition.Planet(vsop87Bearth);
    
    // Get geocentric equatorial coordinates
    const { ra, dec } = elliptic.position(jupiter, earth, jde);
    
    // Create Equatorial coordinates object
    const eqCoords = new coord.Equatorial(ra, dec);
    
    // Standard obliquity of the ecliptic
    const obliquity = 23.4367 * Math.PI / 180; // convert to radians
    
    // Convert to ecliptic coordinates
    const eclCoords = eqCoords.toEcliptic(obliquity);
    
    // Convert longitude from radians to degrees
    let jupiterLongitude = radiansToDegrees(eclCoords.lon);
    
    // Ensure result is between 0 and 360 degrees
    jupiterLongitude = modulo(jupiterLongitude, 360);

    return {
      label: 'Jupiter',
      key: 'jupiter',
      degree: jupiterLongitude,
      sign: getZodiacSign(jupiterLongitude),
      degreeInSign: decimalDegreesToDMS(getDegreesInSign(jupiterLongitude)),
      degreeFormatted: dmsString(decimalDegreesToDMS(getDegreesInSign(jupiterLongitude)))
    };
  } catch (error) {
    console.error('Error calculating Jupiter position:', error);
    throw error;
  }
}

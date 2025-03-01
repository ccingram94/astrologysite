import base from 'astronomia/base';
import planetposition from 'astronomia/planetposition';
import vsop87Bneptune from 'astronomia/data/vsop87Bneptune';
import vsop87Bearth from 'astronomia/data/vsop87Bearth';
import elliptic from 'astronomia/elliptic';
import coord from 'astronomia/coord';
import modulo from './modulo';
import radiansToDegrees from './radiansToDegrees';
import getDegreesInSign from './getDegreesInSign';
import dmsString from './dmsString';
import decimalDegreesToDMS from './decimalDegreesToDMS';
import getZodiacSign from './getZodiacSign';

export default function calculateNeptune(jde) {
  try {
    // Create Neptune and Earth instances
    const neptune = new planetposition.Planet(vsop87Bneptune);
    const earth = new planetposition.Planet(vsop87Bearth);
    
    // Get geocentric equatorial coordinates
    const { ra, dec } = elliptic.position(neptune, earth, jde);
    
    // Create Equatorial coordinates object
    const eqCoords = new coord.Equatorial(ra, dec);
    
    // Standard obliquity of the ecliptic
    const obliquity = 23.4367 * Math.PI / 180; // convert to radians
    
    // Convert to ecliptic coordinates
    const eclCoords = eqCoords.toEcliptic(obliquity);
    
    // Convert longitude from radians to degrees
    let neptuneLongitude = radiansToDegrees(eclCoords.lon);
    
    // Ensure result is between 0 and 360 degrees
    neptuneLongitude = modulo(neptuneLongitude, 360);

    return {
      label: 'Neptune',
      key: 'neptune',
      degree: neptuneLongitude,
      sign: getZodiacSign(neptuneLongitude),
      degreeInSign: decimalDegreesToDMS(getDegreesInSign(neptuneLongitude)),
      degreeFormatted: dmsString(decimalDegreesToDMS(getDegreesInSign(neptuneLongitude)))
    };
  } catch (error) {
    console.error('Error calculating Neptune position:', error);
    throw error;
  }
}

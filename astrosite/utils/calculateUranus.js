import base from 'astronomia/base';
import planetposition from 'astronomia/planetposition';
import vsop87Buranus from 'astronomia/data/vsop87Buranus';
import vsop87Bearth from 'astronomia/data/vsop87Bearth';
import elliptic from 'astronomia/elliptic';
import coord from 'astronomia/coord';
import modulo from './modulo';
import radiansToDegrees from './radiansToDegrees';
import getDegreesInSign from './getDegreesInSign';
import dmsString from './dmsString';
import decimalDegreesToDMS from './decimalDegreesToDMS';
import getZodiacSign from './getZodiacSign';

export default function calculateUranus(jde) {
  try {
    // Create Uranus and Earth instances
    const uranus = new planetposition.Planet(vsop87Buranus);
    const earth = new planetposition.Planet(vsop87Bearth);
    
    // Get geocentric equatorial coordinates
    const { ra, dec } = elliptic.position(uranus, earth, jde);
    
    // Create Equatorial coordinates object
    const eqCoords = new coord.Equatorial(ra, dec);
    
    // Standard obliquity of the ecliptic
    const obliquity = 23.4367 * Math.PI / 180; // convert to radians
    
    // Convert to ecliptic coordinates
    const eclCoords = eqCoords.toEcliptic(obliquity);
    
    // Convert longitude from radians to degrees
    let uranusLongitude = radiansToDegrees(eclCoords.lon);
    
    // Ensure result is between 0 and 360 degrees
    uranusLongitude = modulo(uranusLongitude, 360);

    return {
      label: 'Uranus',
      key: 'uranus',
      degree: uranusLongitude,
      sign: getZodiacSign(uranusLongitude),
      degreeInSign: decimalDegreesToDMS(getDegreesInSign(uranusLongitude)),
      degreeFormatted: dmsString(decimalDegreesToDMS(getDegreesInSign(uranusLongitude)))
    };
  } catch (error) {
    console.error('Error calculating Uranus position:', error);
    throw error;
  }
}

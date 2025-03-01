import base from 'astronomia/base';
import planetposition from 'astronomia/planetposition';
import vsop87Bmars from 'astronomia/data/vsop87Bmars';
import vsop87Bearth from 'astronomia/data/vsop87Bearth';
import elliptic from 'astronomia/elliptic';
import coord from 'astronomia/coord';
import modulo from './modulo';
import radiansToDegrees from './radiansToDegrees';
import getDegreesInSign from './getDegreesInSign';
import dmsString from './dmsString';
import decimalDegreesToDMS from './decimalDegreesToDMS';
import getZodiacSign from './getZodiacSign';

export default function calculateMars(jde) {
  try {
    // Create Mars and Earth instances
    const mars = new planetposition.Planet(vsop87Bmars);
    const earth = new planetposition.Planet(vsop87Bearth);
    
    // Get geocentric equatorial coordinates
    const { ra, dec } = elliptic.position(mars, earth, jde);
    
    // Create Equatorial coordinates object
    const eqCoords = new coord.Equatorial(ra, dec);
    
    // Standard obliquity of the ecliptic
    const obliquity = 23.4367 * Math.PI / 180; // convert to radians
    
    // Convert to ecliptic coordinates
    const eclCoords = eqCoords.toEcliptic(obliquity);
    
    // Convert longitude from radians to degrees
    let marsLongitude = radiansToDegrees(eclCoords.lon);
    
    // Ensure result is between 0 and 360 degrees
    marsLongitude = modulo(marsLongitude, 360);

    return {
      label: 'Mars',
      key: 'mars',
      degree: marsLongitude,
      sign: getZodiacSign(marsLongitude),
      degreeInSign: decimalDegreesToDMS(getDegreesInSign(marsLongitude)),
      degreeFormatted: dmsString(decimalDegreesToDMS(getDegreesInSign(marsLongitude)))
    };
  } catch (error) {
    console.error('Error calculating Mars position:', error);
    throw error;
  }
}

import base from 'astronomia/base';
import planetposition from 'astronomia/planetposition';
import vsop87Bvenus from 'astronomia/data/vsop87Bvenus';
import vsop87Bearth from 'astronomia/data/vsop87Bearth';
import elliptic from 'astronomia/elliptic';
import coord from 'astronomia/coord';
import modulo from './modulo';
import radiansToDegrees from './radiansToDegrees';
import getDegreesInSign from './getDegreesInSign';
import dmsString from './dmsString';
import decimalDegreesToDMS from './decimalDegreesToDMS';
import getZodiacSign from './getZodiacSign';

export default function calculateVenus(jde) {
  try {
    // Create Venus and Earth instances
    const venus = new planetposition.Planet(vsop87Bvenus);
    const earth = new planetposition.Planet(vsop87Bearth);
    
    // Get geocentric equatorial coordinates
    const { ra, dec } = elliptic.position(venus, earth, jde);
    
    // Create Equatorial coordinates object
    const eqCoords = new coord.Equatorial(ra, dec);
    
    // Standard obliquity of the ecliptic
    const obliquity = 23.4367 * Math.PI / 180; // convert to radians
    
    // Convert to ecliptic coordinates
    const eclCoords = eqCoords.toEcliptic(obliquity);
    
    // Convert longitude from radians to degrees
    let venusLongitude = radiansToDegrees(eclCoords.lon);
    
    // Ensure result is between 0 and 360 degrees
    venusLongitude = modulo(venusLongitude, 360);

    return {
      label: 'Venus',
      key: 'venus',
      degree: venusLongitude,
      sign: getZodiacSign(venusLongitude),
      degreeInSign: decimalDegreesToDMS(getDegreesInSign(venusLongitude)),
      degreeFormatted: dmsString(decimalDegreesToDMS(getDegreesInSign(venusLongitude)))
    };
  } catch (error) {
    console.error('Error calculating Venus position:', error);
    throw error;
  }
}

import base from 'astronomia/base';
import planetposition from 'astronomia/planetposition';
import vsop87Bmercury from 'astronomia/data/vsop87Bmercury';
import vsop87Bearth from 'astronomia/data/vsop87Bearth';
import elliptic from 'astronomia/elliptic';
import coord from 'astronomia/coord';
import modulo from './modulo';
import radiansToDegrees from './radiansToDegrees';
import getDegreesInSign from './getDegreesInSign';
import dmsString from './dmsString';
import decimalDegreesToDMS from './decimalDegreesToDMS';
import getZodiacSign from './getZodiacSign';

export default function calculateMercury(jde) { 
  try {
    // Create Mercury and Earth instances
    const mercury = new planetposition.Planet(vsop87Bmercury);
    const earth = new planetposition.Planet(vsop87Bearth);
    
    // Get geocentric equatorial coordinates
    const { ra, dec } = elliptic.position(mercury, earth, jde);
    
    // Create Equatorial coordinates object
    const eqCoords = new coord.Equatorial(ra, dec);
    
    // Standard obliquity of the ecliptic
    const obliquity = 23.4367 * Math.PI / 180; // convert to radians
    
    // Convert to ecliptic coordinates
    const eclCoords = eqCoords.toEcliptic(obliquity);
    
    // Convert longitude from radians to degrees
    let mercuryLongitude = radiansToDegrees(eclCoords.lon);
    
    // Ensure result is between 0 and 360 degrees
    mercuryLongitude = modulo(mercuryLongitude, 360);

    return {
      label: 'Mercury',
      key: 'mercury',
      degree: mercuryLongitude,
      sign: getZodiacSign(mercuryLongitude),
      degreeInSign: decimalDegreesToDMS(getDegreesInSign(mercuryLongitude)),
      degreeFormatted: dmsString(decimalDegreesToDMS(getDegreesInSign(mercuryLongitude)))
    };
  } catch (error) {
    console.error('Error calculating Mercury position:', error);
    throw error;
  }
}

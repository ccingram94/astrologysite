import base from 'astronomia/base';
import pluto from 'astronomia/pluto';
import coord from 'astronomia/coord';
import vsop87Bearth from 'astronomia/data/vsop87Bearth';
import planetposition from 'astronomia/planetposition';
import nutation from 'astronomia/nutation';
import modulo from './modulo';
import radiansToDegrees from './radiansToDegrees';
import getDegreesInSign from './getDegreesInSign';
import dmsString from './dmsString';
import decimalDegreesToDMS from './decimalDegreesToDMS';
import getZodiacSign from './getZodiacSign';

export default function calculatePluto(jde) {
  try {
    
    // Get astrometric coordinates (this returns RA and Dec)
    const earth = new planetposition.Planet(vsop87Bearth);
    const plutoCoord = pluto.astrometric(jde, earth);
    
    // Create Equatorial coordinates object
    const eqCoords = new coord.Equatorial(plutoCoord.ra, plutoCoord.dec);
    
    // Standard obliquity of the ecliptic
    const obliquity = 23.4367 * Math.PI / 180; // convert to radians
    
    // Convert to ecliptic coordinates
    const eclCoords = eqCoords.toEcliptic(obliquity);
    
    // Convert longitude from radians to degrees
    let plutoLongitude = radiansToDegrees(eclCoords.lon);
    
    // Ensure result is between 0 and 360 degrees
    plutoLongitude = modulo(plutoLongitude, 360);

    return {
      label: 'Pluto',
      key: 'pluto',
      degree: plutoLongitude,
      sign: getZodiacSign(plutoLongitude),
      degreeInSign: decimalDegreesToDMS(getDegreesInSign(plutoLongitude)),
      degreeFormatted: dmsString(decimalDegreesToDMS(getDegreesInSign(plutoLongitude)))
    };
  } catch (error) {
    console.error('Error calculating Pluto position:', error);
    throw error;
  }
}

import base from 'astronomia/base';
import planetposition from 'astronomia/planetposition';
import vsop87Bsaturn from 'astronomia/data/vsop87Bsaturn';
import vsop87Bearth from 'astronomia/data/vsop87Bearth';
import elliptic from 'astronomia/elliptic';
import coord from 'astronomia/coord';
import modulo from './modulo';
import radiansToDegrees from './radiansToDegrees';
import getDegreesInSign from './getDegreesInSign';
import dmsString from './dmsString';
import decimalDegreesToDMS from './decimalDegreesToDMS';
import getZodiacSign from './getZodiacSign';
import getHousePlacement from './getHousePlacement';

export default function calculateSaturn(jde, houseCusps) {
  try {
    // Create Saturn and Earth instances
    const saturn = new planetposition.Planet(vsop87Bsaturn);
    const earth = new planetposition.Planet(vsop87Bearth);
    
    // Get geocentric equatorial coordinates
    const { ra, dec } = elliptic.position(saturn, earth, jde);
    
    // Create Equatorial coordinates object
    const eqCoords = new coord.Equatorial(ra, dec);
    
    // Standard obliquity of the ecliptic
    const obliquity = 23.4367 * Math.PI / 180; // convert to radians
    
    // Convert to ecliptic coordinates
    const eclCoords = eqCoords.toEcliptic(obliquity);
    
    // Convert longitude from radians to degrees
    let saturnLongitude = radiansToDegrees(eclCoords.lon);
    
    // Ensure result is between 0 and 360 degrees
    saturnLongitude = modulo(saturnLongitude, 360);

    // Get house placement if house cusps are provided
    const house = houseCusps ? getHousePlacement(saturnLongitude, houseCusps) : null;

    return {
      label: 'Saturn',
      key: 'saturn',
      degree: saturnLongitude,
      sign: getZodiacSign(saturnLongitude),
      degreeInSign: decimalDegreesToDMS(getDegreesInSign(saturnLongitude)),
      degreeFormatted: dmsString(decimalDegreesToDMS(getDegreesInSign(saturnLongitude))),
      house: house
    };
  } catch (error) {
    console.error('Error calculating Saturn position:', error);
    throw error;
  }
}

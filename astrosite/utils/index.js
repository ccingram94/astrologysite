import houses from '../data/houses';
import zodiacSigns from '../data/zodiacsigns';
import SIGNS from './constants';

// Function for location searching via Nominatim API (free)
export async function searchLocation(inputValue) {
    if (!inputValue) return [];
    
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(inputValue)}`
      );
      
      const data = await response.json();
      
      return data.map((result) => ({
        value: result.display_name,
        label: result.display_name,
        coordinates: { lat: result.lat, lon: result.lon },
      }));
    } catch (error) {
      console.error('Error searching for location:', error);
      return [];
    }
  }

  export const planetaryDignityRules = {
    sun: { domicile: 'Leo', exaltation: 'Aries', detriment: 'Aquarius', fall: 'Libra' },
    moon: { domicile: 'Cancer', exaltation: 'Taurus', detriment: 'Capricorn', fall: 'Scorpio' },
    mercury: { domicile: ['Gemini', 'Virgo'], exaltation: 'Aquarius', detriment: ['Sagittarius', 'Pisces'], fall: 'Leo' },
    venus: { domicile: ['Taurus', 'Libra'], exaltation: 'Pisces', detriment: ['Scorpio', 'Aries'], fall: 'Virgo' },
    mars: { domicile: ['Aries', 'Scorpio'], exaltation: 'Capricorn', detriment: ['Libra', 'Taurus'], fall: 'Cancer' },
    jupiter: { domicile: ['Sagittarius', 'Pisces'], exaltation: 'Cancer', detriment: ['Gemini', 'Virgo'], fall: 'Capricorn' },
    saturn: { domicile: ['Capricorn', 'Aquarius'], exaltation: 'Libra', detriment: ['Cancer', 'Leo'], fall: 'Aries' },
    uranus: { domicile: 'Aquarius', detriment: 'Leo' },
    neptune: { domicile: 'Pisces', detriment: 'Virgo' },
    pluto: { domicile: 'Scorpio', detriment: 'Taurus' }
  };
  
  export function evaluatePlanetaryDignity(planet, sign) {
    const planetRules = planetaryDignityRules[planet.toLowerCase()];
  
    if (!planetRules) return null;
  
    if (Array.isArray(planetRules.domicile) && planetRules.domicile.includes(sign) || planetRules.domicile === sign) {
      return 'Domicile';
    } else if (Array.isArray(planetRules.exaltation) && planetRules.exaltation.includes(sign) || planetRules.exaltation === sign) {
      return 'Exaltation';
    } else if (Array.isArray(planetRules.detriment) && planetRules.detriment.includes(sign) || planetRules.detriment === sign) {
      return 'Detriment';
    } else if (Array.isArray(planetRules.fall) && planetRules.fall.includes(sign) || planetRules.fall === sign) {
      return 'Fall';
    }
  
    return null;
  }
  
  // Function for house system display name (dropdown menu)
  export const houseSystemOptions = [
    { value: 'whole-sign', label: 'Whole Sign' },
    { value: 'equal-house', label: 'Equal House' },
    { value: 'placidus', label: 'Placidus' },
  ];
  
  // Function for house system display name (short)
  export function getHouseSystemName(system) {
    const systemMap = {
      'whole-sign': 'Whole Sign',
      'equal-house': 'Equal',
      'placidus': 'Placidus'
    };
    return systemMap[system] || system;
  }


  // Math Section (modulo, degreesToRadians, radiansToDegrees, arccot, decimalDegreesToDMS,
  // sinFromDegrees, cosFromDegrees, tanFromDegrees)

  export function modulo(number, mod) {
    return (number % mod + mod) % mod;
  }

  export function degreesToRadians(degrees) {
    return degrees * (Math.PI/180);
  }

  export function radiansToDegrees(radians) {
    return radians * (180/Math.PI);
  }

  export function arccot(x) {
    return Math.PI/2 - Math.atan(x);
  }

  export function decimalDegreesToDMS(decimalDegrees) {
    let degrees = Math.floor(decimalDegrees);
    const minfloat = (decimalDegrees - degrees) * 60;
    let minutes = Math.floor(minfloat);
    const secfloat = (minfloat - minutes) * 60;
    let seconds = Math.round(secfloat);
  
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
  
    if (minutes === 60) {
      degrees++;
      minutes = 0;
    }
  
    return {
      degrees,
      minutes,
      seconds,
    };
  }

  export function sinFromDegrees(degrees) {
    return Math.sin(degreesToRadians(degrees));
  }

  export function cosFromDegrees(degrees) {
    return Math.cos(degreesToRadians(degrees));
  }

  export function tanFromDegrees(degrees) {
    return Math.tan(degreesToRadians(degrees));
  }

  // Time and Location Calculations

  export function hourTimeToDecimal(hour, minute) {
    return 
  }

  export function getJulianDate(year, month, date, ut = 0) {
    const step1 = (367 * year);
    const step2 = step1 - Math.floor(7 * (year + Math.floor((month + 9) / 12)) / 4);
    const step3 = step2 - Math.floor(3 * (Math.floor((year + (month - 9) / 7) / 100) + 1) / 4);
    const step4 = step3 + Math.floor((275 * month) / 9);
    const step5 = step4 + date;
    const step6 = step5 + 1721028.5;
    const step7 = step6 + (ut / 24);
    return step7;
  }

  export function getSiderealTime( julianDate, longitude) {
    const julianDaysJan1st2000 = 2451545.0;
    const julianDaysSince2000 = julianDate - julianDaysJan1st2000;
    const tFactor = (julianDaysSince2000) / 36525; 
    const degreesRotationInSiderealDay = 360.98564736629;
    const lst = 280.46061837
    + (degreesRotationInSiderealDay * (julianDaysSince2000))
    + 0.000387933 * Math.pow(tFactor, 2)
    - (Math.pow(tFactor, 3) / 38710000)
    + longitude;
    const modLst = modulo(parseFloat(lst), 360);
    return modLst;
  }

  // Astrological Calculations (getMidheaven, getAscendant)

  export function getMidheaven(localSiderealTime) {
    const obliquityEcliptic = 23.4367;
    const tanLST = tanFromDegrees(localSiderealTime);
    const cosOE = cosFromDegrees(obliquityEcliptic);
    let midheaven = radiansToDegrees(Math.atan(tanLST/cosOE));
  
    if (midheaven < 0) {
      midheaven += 360;
    }
  
    if (midheaven > localSiderealTime) {
      midheaven -= 180;
    }
  
    if (midheaven < 0) {
      midheaven += 180;
    }
  
    if (midheaven < 180 && localSiderealTime >= 180) {
      midheaven += 180;
    }
  
    return modulo(midheaven, 360);
  }

  export function getAscendant(latitude, localSiderealTime) {
    let myLatitude = parseFloat(latitude);
    let obliquityEcliptic = parseFloat(23.4367);
    let myLST = parseFloat(localSiderealTime);
    
    const a = -cosFromDegrees(myLST);
    const b = sinFromDegrees(23.4367) * tanFromDegrees(myLatitude);
    const c = cosFromDegrees(23.4367) * sinFromDegrees(myLST);
    const d = b + c;
    const e = a / d;
    const f = Math.atan(e);
    let ascendant = radiansToDegrees(f);
  
    if (d < 0) {
      ascendant += 180;
    } else {
      ascendant += 360;
    }
  
    if (ascendant >= 180) {
      ascendant -= 180;
    } else {
      ascendant += 180;
    }
  
    return modulo(ascendant, 360);
  }

  export function getSignFromDD(decimalDegrees) {
    return SIGNS.find(sign => sign.zodiacStart <= decimalDegrees && sign.zodiacEnd > decimalDegrees);
  }

  export function applyZodiacOffsetClockwise(tropicalLongitude) {
    let myLongitude = parseFloat(tropicalLongitude);
    return modulo(parseFloat(tropicalLongitude), 360);
  }

  export function applyZodiacOffsetCounter(tropicalLongitude) {
    let myLongitude = parseFloat(tropicalLongitude);
    return modulo(parseFloat(tropicalLongitude), 360);
  }
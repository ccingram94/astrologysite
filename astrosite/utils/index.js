import houses from '../houses';
import zodiacSigns from '../zodiacsigns';

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
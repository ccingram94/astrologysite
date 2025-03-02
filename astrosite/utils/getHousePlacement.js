import modulo from './modulo';

/**
 * Determines which house a celestial body is in based on its longitude
 * @param {number} longitude - The longitude of the celestial body in degrees
 * @param {Array|Object} houseCusps - An array of house cusps or object containing cusp data
 * @returns {number} The house number (1-12)
 */
export default function getHousePlacement(longitude, houseCusps) {
  // Ensure we have cusps to work with
  if (!houseCusps) {
    console.error("House cusps not provided for house placement calculation");
    return null;
  }
  
  // Extract the degrees from houseCusps, regardless of format
  let cuspsArray = [];
  
  if (Array.isArray(houseCusps)) {
    // If it's already an array, use it directly
    cuspsArray = houseCusps.map(cusp => 
      typeof cusp === 'object' && 'degree' in cusp ? cusp.degree : cusp
    );
  } else if (typeof houseCusps === 'object') {
    // If it's an object, try to convert it to an array of degrees
    cuspsArray = Object.values(houseCusps).map(cusp => 
      typeof cusp === 'object' && 'degree' in cusp ? cusp.degree : cusp
    );
  } else {
    console.error("Invalid house cusps format", houseCusps);
    return null;
  }
  
  // Check if we have 12 house cusps
  if (cuspsArray.length !== 12) {
    console.warn(`Expected 12 house cusps but got ${cuspsArray.length}`);
  }
  
  // Ensure longitude is between 0 and 360
  longitude = modulo(longitude, 360);
  
  // Loop through house cusps to find which house the planet is in
  for (let i = 0; i < cuspsArray.length; i++) {
    const currentCusp = modulo(cuspsArray[i], 360);
    const nextCusp = modulo(cuspsArray[(i + 1) % cuspsArray.length], 360);
    
    // Check if planet is between current cusp and next cusp
    if (nextCusp > currentCusp) {
      // Simple case: current < longitude < next
      if (longitude >= currentCusp && longitude < nextCusp) {
        return i + 1;
      }
    } else {
      // Case where house spans 0° (e.g., from 350° to 10°)
      if (longitude >= currentCusp || longitude < nextCusp) {
        return i + 1;
      }
    }
  }
  
  // Fallback - should not reach here if cusps are properly defined
  console.error("Could not determine house placement", { longitude, houseCusps });
  return null;
}

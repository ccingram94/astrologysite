/**
 * Calculates the sect of a birth chart and related planetary roles
 * @param {number} sunDegree - The absolute degree position of the Sun (0-359)
 * @param {number} ascendantDegree - The absolute degree position of the Ascendant (0-359)
 * @param {number} mercuryDegree - The absolute degree position of Mercury (0-359)
 * @returns {Object} An object containing sect information and planetary roles
 */
function calculateSect(sunDegree, ascendantDegree, mercuryDegree) {
  if (sunDegree === undefined || ascendantDegree === undefined) {
    throw new Error("Both sunDegree and ascendantDegree must be provided");
  }

  // Normalize degrees to 0-359 range
  sunDegree = ((sunDegree % 360) + 360) % 360;
  ascendantDegree = ((ascendantDegree % 360) + 360) % 360;
  
  if (mercuryDegree !== undefined) {
    mercuryDegree = ((mercuryDegree % 360) + 360) % 360;
  }

  // Calculate the diurnal/nocturnal status
  // If the Sun is above the horizon (in houses 7-12), the chart is diurnal
  // If the Sun is below the horizon (in houses 1-6), the chart is nocturnal

  // Calculate the distance between the Sun and the Ascendant
  let distanceFromAsc = (sunDegree - ascendantDegree + 360) % 360;
  
  // If the Sun is in houses 7-12 (180-360 degrees from Ascendant), it's diurnal
  const isDiurnal = distanceFromAsc >= 180 && distanceFromAsc < 360;

  // Create the sect object with all required information
  const sect = {
    // Sect type
    sect: isDiurnal ? 'Diurnal' : 'Nocturnal',
    
    // Sect light (luminary)
    luminary: isDiurnal ? 'Sun' : 'Moon',
    
    // Benefics
    greaterBenefic: isDiurnal ? 'Jupiter' : 'Venus', // Benefic of sect
    lesserBenefic: isDiurnal ? 'Venus' : 'Jupiter',  // Benefic out of sect
    
    // Malefics
    greaterMalefic: isDiurnal ? 'Mars' : 'Saturn',   // Malefic out of sect
    lesserMalefic: isDiurnal ? 'Saturn' : 'Mars',    // Malefic of sect
  };

  // Calculate Mercury's sect status if Mercury's position is provided
  if (mercuryDegree !== undefined) {
    // Calculate Mercury's position relative to the Sun
    const mercuryToSun = (mercuryDegree - sunDegree + 360) % 360;
    const sunToMercury = (sunDegree - mercuryDegree + 360) % 360;
    
    // Calculate if Mercury is occidental or oriental to the Sun
    // Mercury is oriental (morning star) when it rises before the Sun (east of Sun)
    // Mercury is occidental (evening star) when it sets after the Sun (west of Sun)
    
    // Mercury is considered a morning star (oriental) when it's ahead of the Sun in zodiacal order
    const isMorningStarOriental = mercuryToSun <= 180;
    
    // Mercury is considered an evening star (occidental) when it's behind the Sun in zodiacal order
    const isEveningStarOccidental = !isMorningStarOriental;
    
    // Determine Mercury's sect based on its position relative to the Sun
    sect.mercury = {
      position: isMorningStarOriental ? 'Morning Star' : 'Evening Star',
      sect: isMorningStarOriental ? 'Diurnal' : 'Nocturnal',
      degreesFromSun: Math.min(mercuryToSun, sunToMercury)
    };
  }

  return sect;
}

export default calculateSect;

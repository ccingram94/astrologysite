/**
 * Calculates the aspect between two celestial points
 * 
 * @param {Object} point1 - First celestial point (planet or angle)
 * @param {Object} point2 - Second celestial point (planet or angle)
 * @param {Object} customOrbs - Optional custom orbs for specific aspects
 * @returns {Object|null} - The aspect details or null if no aspect is found
 */
export default function calculateAspect(point1, point2, customOrbs = {}) {
  // Aspect definitions
  const ASPECTS = {
    'conjunction': {
      symbol: '☌',
      level: 'major',
      angle: 0,
      defaultOrb: 8
    },
    'opposition': {
      symbol: '☍',
      level: 'major',
      angle: 180,
      defaultOrb: 8
    },
    'trine': {
      symbol: '△',
      level: 'major',
      angle: 120,
      defaultOrb: 8
    },
    'square': {
      symbol: '□',
      level: 'major',
      angle: 90,
      defaultOrb: 7
    },
    'sextile': {
      symbol: '*',
      level: 'major',
      angle: 60,
      defaultOrb: 6
    },
    'quincunx': {
      symbol: 'Qx',
      level: 'minor',
      angle: 150,
      defaultOrb: 5
    },
    'quintile': {
      symbol: 'Q',
      level: 'minor',
      angle: 72,
      defaultOrb: 1
    },
    'septile': {
      symbol: 'S',
      level: 'minor',
      angle: 51.5,
      defaultOrb: 1
    },
    'semi-square': {
      symbol: '∠',
      level: 'minor',
      angle: 45,
      defaultOrb: 1
    },
    'semi-sextile': {
      symbol: '⊊',
      level: 'minor',
      angle: 30,
      defaultOrb: 1
    }
  };

  // Make sure we have valid points to compare
  if (!point1?.degree || !point2?.degree) {
    return null;
  }

  // Calculate the angular distance between the two points
  let angle = Math.abs(point1.degree - point2.degree);
  
  // Ensure the shortest arc distance (should be ≤ 180°)
  if (angle > 180) {
    angle = 360 - angle;
  }

  // Check each aspect
  for (const [aspectName, aspectData] of Object.entries(ASPECTS)) {
    // Get orb for this aspect (use custom orb if specified)
    const orb = customOrbs[aspectName] || aspectData.defaultOrb;
    
    // Calculate the difference between the actual angle and the aspect angle
    const difference = Math.abs(angle - aspectData.angle);
    
    // If within orb, we've found an aspect
    if (difference <= orb) {
      // Calculate applying/separating and exact status
      let applying = false;
      let exact = false;
      let orbalDistance = difference;

      // More details about the orb
      if (difference < 0.5) {
        exact = true;
      } else {
        // This is a simplification - for more accurate applying/separating calculation
        // we would need to consider the planet speeds and directions
        // This assumes point2 is typically faster than point1
        // For a more accurate calculation in a real system, 
        // you'd need to check actual planet directions and speeds
        const point1InZodiacOrder = point1.degree;
        let point2InZodiacOrder = point2.degree;
        
        // Adjust for 0° crossing
        if (aspectData.angle === 0 && 
            Math.abs(point1InZodiacOrder - point2InZodiacOrder) > 180) {
          if (point2InZodiacOrder < point1InZodiacOrder) {
            point2InZodiacOrder += 360;
          } else {
            point2InZodiacOrder -= 360;
          }
        }
        
        applying = point2InZodiacOrder < point1InZodiacOrder;
      }

      return {
        name: aspectName,
        symbol: aspectData.symbol,
        level: aspectData.level,
        angle: aspectData.angle,
        orb: difference,
        maxOrb: orb,
        applying: applying,
        separating: !applying && !exact,
        exact: exact,
        point1: {
          name: point1.label,
          degree: point1.degree,
          sign: point1.sign
        },
        point2: {
          name: point2.label,
          degree: point2.degree,
          sign: point2.sign
        }
      };
    }
  }

  // No aspect found
  return null;
}

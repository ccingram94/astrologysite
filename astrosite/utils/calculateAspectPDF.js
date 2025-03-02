/**
 * Calculates aspects between celestial points for PDF chart generation
 */

// Define aspect configurations
export const ASPECTS = {
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

/**
 * Calculate aspect between two celestial points
 */
export const calculateAspectPDF = (point1, point2, customOrbs = {}) => {
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
          name: point1.key || point1.label || 'Unknown',
          degree: point1.degree,
          sign: point1.sign
        },
        point2: {
          name: point2.key || point2.label || 'Unknown',
          degree: point2.degree,
          sign: point2.sign
        },
        point1Label: point1.label || point1.key || 'Unknown',
        point2Label: point2.label || point2.key || 'Unknown'
      };
    }
  }

  // No aspect found
  return null;
};

/**
 * Find all aspects between celestial bodies for PDF chart
 */
export const findAspectsPDF = (celestialBodies) => {
  if (!celestialBodies || !Array.isArray(celestialBodies)) {
    return [];
  }

  const aspects = [];
  const aspectsByType = {
    major: {},
    minor: {}
  };

  // Initialize aspectsByType structure
  Object.entries(ASPECTS).forEach(([name, data]) => {
    const level = data.level;
    if (!aspectsByType[level][name]) {
      aspectsByType[level][name] = [];
    }
  });

  // Compare each body with every other body
  for (let i = 0; i < celestialBodies.length; i++) {
    for (let j = i + 1; j < celestialBodies.length; j++) {
      const point1 = celestialBodies[i];
      const point2 = celestialBodies[j];
      
      if (!point1 || !point2 || !point1.key || !point2.key) continue;
      
      const aspect = calculateAspectPDF(point1, point2);
      
      if (aspect) {
        aspects.push(aspect);
        
        // Add to the appropriate type group
        if (aspectsByType[aspect.level] && aspectsByType[aspect.level][aspect.name]) {
          aspectsByType[aspect.level][aspect.name].push(aspect);
        }
      }
    }
  }
  
  // Add the grouped aspects to the result
  aspects.byType = aspectsByType;
  
  return aspects;
};

/**
 * Get aspects grouped by major and minor type
 */
export const getAspectsByMajorMinorType = (aspects) => {
  const result = {
    major: {},
    minor: {}
  };

  if (!aspects || !Array.isArray(aspects)) {
    return result;
  }

  // Initialize all known aspect types
  Object.entries(ASPECTS).forEach(([name, data]) => {
    const level = data.level;
    if (!result[level][name]) {
      result[level][name] = [];
    }
  });

  // Group aspects by their type
  aspects.forEach(aspect => {
    if (aspect && aspect.name && aspect.level) {
      if (result[aspect.level] && result[aspect.level][aspect.name]) {
        result[aspect.level][aspect.name].push(aspect);
      }
    }
  });

  return result;
};

/**
 * Group aspects by their types
 */
export const groupAspectsByType = (aspects) => {
  const result = {};

  if (!aspects || !Array.isArray(aspects)) {
    return result;
  }

  // Initialize all known aspect types
  Object.keys(ASPECTS).forEach(name => {
    result[name] = [];
  });

  // Group aspects by their name
  aspects.forEach(aspect => {
    if (aspect && aspect.name) {
      if (!result[aspect.name]) {
        result[aspect.name] = [];
      }
      result[aspect.name].push(aspect);
    }
  });

  return result;
};

/**
 * Generate aspect lines for the chart SVG
 */
export const generateAspectLines = (aspects) => {
  const lines = [];
  const isValidAspect = (aspect) => 
    aspect && aspect.point1 && aspect.point2 && 
    aspect.point1.degree !== undefined && aspect.point2.degree !== undefined;
  
  // Process all aspects to generate SVG lines coordinates
  if (aspects && Array.isArray(aspects)) {
    aspects.forEach((aspect, index) => {
      if (!isValidAspect(aspect)) return;
      
      const planet1Degree = aspect.point1.degree;
      const planet2Degree = aspect.point2.degree;
      
      // Calculate positions at inner radius (for aspects)
      const radius = 100; // Use the same radius as house circle
      
      // Calculate raw coordinates (we'll apply rotation later in the chart component)
      const angle1 = (planet1Degree * Math.PI) / 180;
      const angle2 = (planet2Degree * Math.PI) / 180;
      
      const x1 = 250 + Math.cos(angle1) * radius;
      const y1 = 250 - Math.sin(angle1) * radius;
      const x2 = 250 + Math.cos(angle2) * radius;
      const y2 = 250 - Math.sin(angle2) * radius;
      
      // Set stroke width based on aspect importance
      let strokeWidth;
      
      if (aspect.name === "conjunction" || aspect.name === "opposition") {
        strokeWidth = 1.0;
      } else if (aspect.name === "square" || aspect.name === "trine") {
        strokeWidth = 0.5;
      } else if (aspect.name === "sextile") {
        strokeWidth = 0.25;
      } else {
        strokeWidth = 0.25;
      }
      
      // Always use dashed lines for minor aspects, solid for major
      let strokeDasharray = aspect.level === "minor" ? "3,3" : "none";
      
      // Assign colors based on aspect type
      let stroke;
      
      switch (aspect.name) {
        // Positive aspects with harmonizing blue variations
        case "trine":
          stroke = "#D2AE3C"; // Gold color matching the theme
          break;
        case "sextile":
          stroke = "#D2AE3C"; // Gold color
          break;
        case "quintile":
          stroke = "#2A4C7A"; // Darker blue
          break;
        case "semi-sextile":
          stroke = "#30578C"; // Between medium and dark blue
          break;
          
        // Negative aspects with variations of red
        case "opposition":
          stroke = "#C13030"; // Bright red complementing gold theme
          break;
        case "square":
          stroke = "#A82828"; // Medium red
          break;
        case "semi-square":
          stroke = "#872020"; // Darker red
          break;
        case "quincunx":
          stroke = "#941F1F"; // Between medium and dark red
          break;
          
        // Neutral aspects
        case "conjunction":
          stroke = "#D2AE3C"; // Using theme color for conjunction
          break;
        case "septile":
          stroke = "#8F7A31"; // Darker variant of theme color
          break;
        default:
          stroke = "#A6915A"; // Neutral variant of the theme color
      }
      
      lines.push({
        key: `aspect-${index}`,
        x1,
        y1,
        x2,
        y2,
        stroke,
        strokeWidth,
        strokeDasharray,
        // Store raw angles for rotation calculation
        angle1,
        angle2, 
        // Store aspect data for reference
        aspectName: aspect.name,
        level: aspect.level,
        point1: aspect.point1.name,
        point2: aspect.point2.name
      });
    });
  }
  
  return lines;
};



// Aspect data with visual properties for PDF
const ASPECTS_PDF = {
  'conjunction': {
    symbol: '☌',
    level: 'major',
    angle: 0,
    defaultOrb: 8,
    color: '#D2AE3C', // gold
    strokeWidth: 1.5
  },
  'opposition': {
    symbol: '☍',
    level: 'major',
    angle: 180,
    defaultOrb: 8,
    color: '#E74C3C', // red
    strokeWidth: 1.5
  },
  'trine': {
    symbol: '△',
    level: 'major',
    angle: 120,
    defaultOrb: 8,
    color: '#D2AE3C', // green
    strokeWidth: 1.3
  },
  'square': {
    symbol: '□',
    level: 'major',
    angle: 90,
    defaultOrb: 7,
    color: '#E74C3C', // red
    strokeWidth: 1.3
  },
  'sextile': {
    symbol: '*',
    level: 'major',
    angle: 60,
    defaultOrb: 6,
    color: '#95A5A6', // green
    strokeWidth: 1.2
  },
  'quincunx': {
    symbol: 'Qx',
    level: 'minor',
    angle: 150,
    defaultOrb: 5,
    color: '#95A5A6', // grey
    strokeWidth: 0.75
  },
  'quintile': {
    symbol: 'Q',
    level: 'minor',
    angle: 72,
    defaultOrb: 1,
    color: '#95A5A6',
    strokeWidth: 0.75
  },
  'septile': {
    symbol: 'S',
    level: 'minor',
    angle: 51.5,
    defaultOrb: 1,
    color: '#95A5A6',
    strokeWidth: 0.75
  },
  'semi-square': {
    symbol: '∠',
    level: 'minor',
    angle: 45,
    defaultOrb: 1,
    color: '#95A5A6',
    strokeWidth: 0.75
  },
  'semi-sextile': {
    symbol: '⊊',
    level: 'minor',
    angle: 30,
    defaultOrb: 1,
    color: '#95A5A6',
    strokeWidth: 0.75
  }
};

// Calculate the shortest angular distance between two points
const getOrb = (angle1, angle2, aspectAngle) => {
  const diff = Math.abs(angle2 - angle1);
  const orb = Math.abs(diff - aspectAngle);
  return Math.min(orb, 360 - orb);
};

// Check if two positions form a specific aspect
const checkAspect = (pos1, pos2, aspectAngle, maxOrb) => {
  const orb = getOrb(pos1, pos2, aspectAngle);
  return orb <= maxOrb ? orb : false;
};

// Calculate coordinates for aspect lines
const calculateAspectLineCoordinates = (angle1, angle2) => {
  // Convert angles to radians and adjust to start from left (180 degrees)
  const rad1 = ((angle1 + 180) * Math.PI) / 180;
  const rad2 = ((angle2 + 180) * Math.PI) / 180;

  // Use the house circle radius (100)
  const radius = 100;

  // Calculate coordinates
  const x1 = 250 + Math.cos(rad1) * radius;
  const y1 = 250 - Math.sin(rad1) * radius;
  const x2 = 250 + Math.cos(rad2) * radius;
  const y2 = 250 - Math.sin(rad2) * radius;

  return { x1, y1, x2, y2 };
};

// Find all aspects between planets for PDF visualization
export const findAspects = (planets) => {
  const aspects = [];

  // Loop through all planet pairs
  for (let i = 0; i < planets.length; i++) {
    for (let j = i + 1; j < planets.length; j++) {
      const pos1 = planets[i].ChartPosition.Ecliptic.DecimalDegrees;
      const pos2 = planets[j].ChartPosition.Ecliptic.DecimalDegrees;

      // Check each aspect type
      Object.entries(ASPECTS_PDF).forEach(([name, aspect]) => {
        const orb = checkAspect(pos1, pos2, aspect.angle, aspect.defaultOrb);

        if (orb !== false) {
          // Calculate line coordinates for the aspect
          const coords = calculateAspectLineCoordinates(pos1, pos2);

          aspects.push({
            planet1: planets[i],
            planet2: planets[j],
            type: name,
            orb: Number(orb.toFixed(2)),
            ...aspect,
            ...coords
          });
        }
      });
    }
  }

  // Sort aspects by level (major first) and orb (most exact first)
  return aspects.sort((a, b) => {
    if (a.level === b.level) {
      return a.orb - b.orb;
    }
    return a.level === 'major' ? -1 : 1;
  });
};

// Generate aspect lines for PDF
export const generateAspectLines = (aspects) => {
  return aspects.map((aspect, index) => ({
    key: `aspect-${index}`,
    x1: aspect.x1,
    y1: aspect.y1,
    x2: aspect.x2,
    y2: aspect.y2,
    stroke: aspect.color,
    strokeWidth: aspect.strokeWidth
  }));
};

// Group aspects by type for the aspect table
export const groupAspectsByType = (aspects) => {
  const grouped = {};
  aspects.forEach(aspect => {
    if (!grouped[aspect.type]) {
      grouped[aspect.type] = [];
    }
    grouped[aspect.type].push(aspect);
  });
  return grouped;
};

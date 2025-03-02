// calculateAspectPDF.js

// Import the base aspect calculation function
import calculateAspect from './calculateAspect';

// Aspect data with visual properties for PDF - updated to match the original component
const ASPECTS_PDF = {
  'conjunction': {
    color: '#5d9df5', // Blue for conjunction
    strokeWidth: 1,
    strokeDasharray: 'none',
    type: 'major'
  },
  'opposition': {
    color: '#f55d5d', // Red for opposition
    strokeWidth: 1,
    strokeDasharray: 'none',
    type: 'major'
  },
  'trine': {
    color: '#5df55d', // Green for trine
    strokeWidth: 1,
    strokeDasharray: 'none',
    type: 'major'
  },
  'square': {
    color: '#f5b95d', // Orange for square
    strokeWidth: 1,
    strokeDasharray: 'none',
    type: 'major'
  },
  'sextile': {
    color: '#b95df5', // Purple for sextile
    strokeWidth: 1,
    strokeDasharray: 'none',
    type: 'major'
  },
  'quincunx': {
    color: '#F3EBCD', // Light color for minor aspects
    strokeWidth: 0.75,
    strokeDasharray: '3,3',
    type: 'minor'
  },
  'quintile': {
    color: '#F3EBCD',
    strokeWidth: 0.75,
    strokeDasharray: '3,3',
    type: 'minor'
  },
  'septile': {
    color: '#F3EBCD',
    strokeWidth: 0.75,
    strokeDasharray: '3,3',
    type: 'minor'
  },
  'semi-square': {
    color: '#F3EBCD',
    strokeWidth: 0.75,
    strokeDasharray: '3,3',
    type: 'minor'
  },
  'semi-sextile': {
    color: '#F3EBCD',
    strokeWidth: 0.75,
    strokeDasharray: '3,3',
    type: 'minor'
  }
};

// Calculate coordinates for aspect lines
const calculateAspectLineCoordinates = (angle1, angle2) => {
  // Convert angles to radians and adjust to start from left (180 degrees)
  const rad1 = ((angle1 + 180) * Math.PI) / 180;
  const rad2 = ((angle2 + 180) * Math.PI) / 180;

  // Use the inner radius of 90 to match the original component
  const radius = 90;

  // Calculate coordinates
  const x1 = 250 + Math.cos(rad1) * radius;
  const y1 = 250 - Math.sin(rad1) * radius;
  const x2 = 250 + Math.cos(rad2) * radius;
  const y2 = 250 - Math.sin(rad2) * radius;

  return { x1, y1, x2, y2 };
};

// Find all aspects between planets for PDF visualization
export const findAspectsPDF = (celestialBodies) => {
  if (!celestialBodies || !Array.isArray(celestialBodies) || celestialBodies.length === 0) {
    return [];
  }
  
  const aspectsList = []; // Flat list of all aspects
  const aspectsByName = {}; // Object to store aspects grouped by name
  const aspectsByType = { major: {}, minor: {} }; // Object to store aspects by type (major/minor)

  // Loop through all celestial body pairs
  for (let i = 0; i < celestialBodies.length; i++) {
    for (let j = i + 1; j < celestialBodies.length; j++) {
      const body1 = celestialBodies[i];
      const body2 = celestialBodies[j];
      
      // Skip if either body is missing required data
      if (!body1 || !body2 || !body1.degree || !body2.degree) {
        continue;
      }
      
      // Format for calculateAspect
      const point1 = {
        label: body1.key || body1.Name || 'Unknown',
        degree: body1.degree,
        sign: body1.sign
      };
      
      const point2 = {
        label: body2.key || body2.Name || 'Unknown',
        degree: body2.degree,
        sign: body2.sign
      };
      
      // Calculate aspect using the base function
      const aspect = calculateAspect(point1, point2);
      
      if (aspect) {
        // Add PDF-specific visual properties
        const pdfProps = ASPECTS_PDF[aspect.name] || { 
          color: '#F3EBCD', // Default color
          strokeWidth: 0.75,  // Default stroke width
          strokeDasharray: '3,3', // Default dash pattern
          type: 'minor' // Default type
        };
        
        // Calculate line coordinates for the aspect
        const coords = calculateAspectLineCoordinates(
          body1.degree, 
          body2.degree
        );

        // Create enhanced aspect with required properties
        const enhancedAspect = {
          ...aspect,
          planet1: point1.label,
          planet2: point2.label,
          point1Label: point1.label,
          point2Label: point2.label,
          level: pdfProps.type,
          ...pdfProps,
          ...coords
        };

        // Add to flat list
        aspectsList.push(enhancedAspect);
        
        // Group by aspect name
        if (!aspectsByName[aspect.name]) {
          aspectsByName[aspect.name] = [];
        }
        aspectsByName[aspect.name].push(enhancedAspect);
        
        // Group by type (major/minor)
        const aspectType = pdfProps.type;
        if (!aspectsByType[aspectType][aspect.name]) {
          aspectsByType[aspectType][aspect.name] = [];
        }
        aspectsByType[aspectType][aspect.name].push(enhancedAspect);
      }
    }
  }

  // Sort aspects within each group by orb (most exact first)
  Object.keys(aspectsByName).forEach(aspectName => {
    aspectsByName[aspectName].sort((a, b) => a.orb - b.orb);
  });
  
  // Sort aspects by type and name
  Object.keys(aspectsByType).forEach(type => {
    Object.keys(aspectsByType[type]).forEach(aspectName => {
      aspectsByType[type][aspectName].sort((a, b) => a.orb - b.orb);
    });
  });
  
  return {
    aspects: aspectsList,
    byName: aspectsByName,
    byType: aspectsByType
  };
};

// Generate aspect lines for PDF
export const generateAspectLines = (aspects) => {
  // Handle different formats of the aspects data
  let flatAspects = [];
  
  if (aspects.aspects && Array.isArray(aspects.aspects)) {
    // New format with aspects property
    flatAspects = aspects.aspects;
  } else if (aspects.byName) {
    // Format with byName property
    flatAspects = Object.values(aspects.byName).flat();
  } else if (!Array.isArray(aspects) && typeof aspects === 'object') {
    // Object of arrays (grouped by name)
    flatAspects = Object.values(aspects).flat();
  } else if (Array.isArray(aspects)) {
    // Legacy format (array)
    flatAspects = aspects;
  }
  
  if (!flatAspects || flatAspects.length === 0) {
    return [];
  }
  
  return flatAspects.map((aspect, index) => ({
    key: `aspect-${index}`,
    x1: aspect.x1,
    y1: aspect.y1,
    x2: aspect.x2,
    y2: aspect.y2,
    stroke: aspect.color,
    strokeWidth: aspect.strokeWidth,
    strokeDasharray: aspect.strokeDasharray || 'none',
    strokeOpacity: 0.7
  }));
};

// Group aspects by type for the aspect table
export const groupAspectsByType = (aspects) => {
  // If already in the new format, return the byName grouping
  if (aspects.byName) {
    return aspects.byName;
  }
  
  // If aspects is already grouped, return it
  if (!Array.isArray(aspects) && typeof aspects === 'object') {
    return aspects;
  }
  
  const grouped = {};
  
  if (!aspects || !Array.isArray(aspects)) {
    return grouped;
  }
  
  aspects.forEach(aspect => {
    if (!grouped[aspect.name]) {
      grouped[aspect.name] = [];
    }
    grouped[aspect.name].push(aspect);
  });
  
  return grouped;
};

// Get aspects grouped by major and minor types
export const getAspectsByMajorMinorType = (aspects) => {
  // If already in the new format, return the byType grouping
  if (aspects.byType) {
    return aspects.byType;
  }
  
  // Create structure for grouping if not already in the right format
  const groupedByType = {
    major: {},
    minor: {}
  };
  
  // If we have an array of aspects
  if (Array.isArray(aspects)) {
    aspects.forEach(aspect => {
      const aspectType = ASPECTS_PDF[aspect.name]?.type || 'minor';
      if (!groupedByType[aspectType][aspect.name]) {
        groupedByType[aspectType][aspect.name] = [];
      }
      groupedByType[aspectType][aspect.name].push(aspect);
    });
  } 
  // If we have aspects grouped by name
  else if (typeof aspects === 'object' && !aspects.byType) {
    Object.keys(aspects).forEach(aspectName => {
      const aspectType = ASPECTS_PDF[aspectName]?.type || 'minor';
      groupedByType[aspectType][aspectName] = aspects[aspectName];
    });
  }
  
  return groupedByType;
};

export default findAspectsPDF;

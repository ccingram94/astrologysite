

// data for calculating aspects
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
}


// Calculate the shortest angular distance between two points on a 360° circle
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

// Main function to find all aspects between two positions
export const findAspects = (transitPlanet, natalPlanet) => {
  const aspects = [];
  const transitDegrees = transitPlanet.ChartPosition.Ecliptic.DecimalDegrees;
  const natalDegrees = natalPlanet.ChartPosition.Ecliptic.DecimalDegrees;

  Object.entries(ASPECTS).forEach(([name, aspect]) => {
    const orb = checkAspect(transitDegrees, natalDegrees, aspect.angle, aspect.defaultOrb);
    
    if (orb !== false) {
      aspects.push({
        name,
        ...aspect,
        orb: Number(orb.toFixed(2)),
        transitPlanet,
        natalPlanet
      });
    }
  });

  // Sort aspects by orb (most exact first)
  return aspects.sort((a, b) => a.orb - b.orb);
};

// Function to get all aspects between transit and natal planets
export const getAllTransitAspects = (transitPlanets, birthPlanets) => {
  const aspectList = [];

  transitPlanets.forEach((transitPlanet, transitIndex) => {
    birthPlanets.forEach((natalPlanet, natalIndex) => {
      const aspects = findAspects(transitPlanet, natalPlanet);
      
      if (aspects.length > 0) {
        aspects.forEach(aspect => {
          aspectList.push({
            transitIndex,
            natalIndex,
            ...aspect
          });
        });
      }
    });
  });
  console.log(aspectList);
  return aspectList;
};

// Function to find only conjunctions between two positions
export const findConjunctions = (transitPlanet, natalPlanet) => {
  const transitDegrees = transitPlanet.ChartPosition.Ecliptic.DecimalDegrees;
  const natalDegrees = natalPlanet.ChartPosition.Ecliptic.DecimalDegrees;
  const conjunctionAspect = ASPECTS['conjunction'];
  
  const orb = checkAspect(transitDegrees, natalDegrees, conjunctionAspect.angle, conjunctionAspect.defaultOrb);
  
  if (orb !== false) {
    return {
      name: 'conjunction',
      ...conjunctionAspect,
      orb: Number(orb.toFixed(2)),
      transitPlanet,
      natalPlanet
    };
  }
  
  return null;
};

// Function to get all conjunctions between transit and natal planets
export const getAllConjunctions = (transitPlanets, birthPlanets) => {
  const conjunctionList = [];

  transitPlanets.forEach((transitPlanet, transitIndex) => {
    birthPlanets.forEach((natalPlanet, natalIndex) => {
      const conjunction = findConjunctions(transitPlanet, natalPlanet);
      
      if (conjunction) {
        conjunctionList.push({
          transitIndex,
          natalIndex,
          ...conjunction
        });
      }
    });
  });

  // Sort conjunctions by orb (most exact first)
  return conjunctionList.sort((a, b) => a.orb - b.orb);
};
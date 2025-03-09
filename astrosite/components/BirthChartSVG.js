'use client'
import React, { useMemo, useEffect } from 'react';

// Function to calculate the rotation offset needed to position the Ascendant at the left (9 o'clock)
const calculateChartRotation = (horoscope) => {
  if (!horoscope || !horoscope.angles || !horoscope.angles.Ascendant) {
    return 0; // Default rotation if no Ascendant is available
  }

  // Get the Ascendant's degree
  const ascendantDegree = horoscope.angles.Ascendant.degree;
  
  // In SVG coordinates, 0° is at the right (3 o'clock), 90° is at the bottom (6 o'clock),
  // 180° is at the left (9 o'clock), and 270° is at the top (12 o'clock)
  
  // To place Ascendant at the left (180° in SVG), we calculate how much to rotate
  // We need to rotate so that ascendantDegree aligns with 180° in SVG
  const rotationOffset = 180 - ascendantDegree;
  
  return rotationOffset;
};

const BirthChartSVG = ({ horoscope, newHoroscope }) => {
  // For debugging
  useEffect(() => {
    if (horoscope) {
      console.log("ANGLES:", horoscope.angles);
      console.log("HOUSE CUSPS:", horoscope.houseCusps);
    }
  }, [horoscope]);

  const chartRotation = useMemo(() => {
    return calculateChartRotation(horoscope);
  }, [horoscope]);
  
  // Calculate adjusted planet and angle positions to prevent collisions
  const celestialPositions = useMemo(() => {
    if (!horoscope || !horoscope.planets) return [];
    
    // First, create objects for the planets
    const planets = Object.entries(horoscope.planets)
      .filter(([key]) => key !== 'all' && key !== 'true' && key !== 'false')
      .map(([key, data]) => ({
        key: data.key,
        originalDegree: data.degree,
        degree: data.degree,
        // Calculate original x,y from degree (no offset needed, will center later)
        originalX: 250 + Math.cos((data.degree * Math.PI) / 180) * 170,
        originalY: 250 - Math.sin((data.degree * Math.PI) / 180) * 170,
        radius: 170,
        type: 'planet'
      }));
      
    // Add major angles
    const angles = [];
    
    // Use the angles object directly instead of houseCusps
    if (horoscope.angles) {
      // Ascendant
      if (horoscope.angles.Ascendant) {
        angles.push({
          key: 'ascendantgold',
          imageName: 'ascendantgold',
          originalDegree: horoscope.angles.Ascendant.degree,
          degree: horoscope.angles.Ascendant.degree,
          radius: 170,
          type: 'angle'
        });
      }
      
      // Descendant
      if (horoscope.angles.Descendant) {
        angles.push({
          key: 'descendantgold',
          imageName: 'descendantgold',
          originalDegree: horoscope.angles.Descendant.degree,
          degree: horoscope.angles.Descendant.degree,
          radius: 170,
          type: 'angle'
        });
      }
      
      // Midheaven
      if (horoscope.angles.Midheaven) {
        angles.push({
          key: 'midheavengold',
          imageName: 'midheavengold',
          originalDegree: horoscope.angles.Midheaven.degree,
          degree: horoscope.angles.Midheaven.degree,
          radius: 170,
          type: 'angle'
        });
      }
      
      // Imum Coeli
      if (horoscope.angles.ImumCoeli) {
        angles.push({
          key: 'imumcoeligold',
          imageName: 'imumcoeligold',
          originalDegree: horoscope.angles.ImumCoeli.degree,
          degree: horoscope.angles.ImumCoeli.degree,
          radius: 170,
          type: 'angle'
        });
      }
    }
    
    // Combine planets and angles 
    const allPositions = [...planets, ...angles];
    
    // Sort all positions by degree for collision detection
    allPositions.sort((a, b) => a.originalDegree - b.originalDegree);
    
    // Adjust positions to prevent collisions
    const minDistance = 28; // Minimum distance between objects
    const adjustedPositions = [...allPositions];
    
    // Multiple passes to resolve all collisions
    for (let pass = 0; pass < 5; pass++) {
      let collisionResolved = false;
      
      for (let i = 0; i < adjustedPositions.length; i++) {
        for (let j = 0; j < adjustedPositions.length; j++) {
          if (i !== j) {
            const p1 = adjustedPositions[i];
            const p2 = adjustedPositions[j];
            
            // Calculate distance between objects using adjusted positions
            const x1 = 250 + Math.cos((p1.degree * Math.PI) / 180) * p1.radius;
            const y1 = 250 - Math.sin((p1.degree * Math.PI) / 180) * p1.radius;
            const x2 = 250 + Math.cos((p2.degree * Math.PI) / 180) * p2.radius;
            const y2 = 250 - Math.sin((p2.degree * Math.PI) / 180) * p2.radius;
            
            const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            
            // If objects are too close
            if (distance < minDistance) {
              collisionResolved = true;
              
              // Calculate degree difference and adjust
              const angleDiff = (p2.degree - p1.degree + 360) % 360;
              
              // If objects are within 15 degrees, adjust their radiuses
              if (angleDiff < 15 || angleDiff > 345) {
                // Radial adjustment - move one object inward and one outward
                if (i < j) {
                  adjustedPositions[i].radius = Math.max(140, adjustedPositions[i].radius - 5);
                  adjustedPositions[j].radius = Math.min(190, adjustedPositions[j].radius + 5);
                } else {
                  adjustedPositions[j].radius = Math.max(140, adjustedPositions[j].radius - 5);
                  adjustedPositions[i].radius = Math.min(190, adjustedPositions[i].radius + 5);
                }
              } else {
                // Angular adjustment - push objects apart
                const pushAmount = 1.5; // degrees
                
                // Don't adjust angles too much from their true position
                if (p1.type === 'angle' && p2.type === 'angle') {
                  // If both are angles, use smaller adjustment
                  adjustedPositions[i].degree = (p1.degree - pushAmount * 0.5 + 360) % 360;
                  adjustedPositions[j].degree = (p2.degree + pushAmount * 0.5) % 360;
                } else if (p1.type === 'angle') {
                  // If p1 is an angle, move p2 (planet) more
                  adjustedPositions[i].degree = (p1.degree - pushAmount * 0.3 + 360) % 360;
                  adjustedPositions[j].degree = (p2.degree + pushAmount * 1.7) % 360;
                } else if (p2.type === 'angle') {
                  // If p2 is an angle, move p1 (planet) more
                  adjustedPositions[i].degree = (p1.degree - pushAmount * 1.7 + 360) % 360;
                  adjustedPositions[j].degree = (p2.degree + pushAmount * 0.3) % 360;
                } else {
                  // Both are planets, adjust equally
                  adjustedPositions[i].degree = (p1.degree - pushAmount + 360) % 360;
                  adjustedPositions[j].degree = (p2.degree + pushAmount) % 360;
                }
              }
            }
          }
        }
      }
      
      if (!collisionResolved) break;
    }
    
    return adjustedPositions;
  }, [horoscope]);

  // SVG-based zodiac sign renderer instead of div+Image approach
  const renderZodiacSign = (index) => {
    const signs = [
      'signs/ariesgold', 'signs/taurusgold', 'signs/geminigold', 'signs/cancergold', 'signs/leogold', 'signs/virgogold',
      'signs/libragold', 'signs/scorpiogold', 'signs/sagittariusgold', 'signs/capricorngold', 'signs/aquariusgold', 'signs/piscesgold'
    ];
    
    const angle = (((index * 30 + 15) * Math.PI) / 180) + (chartRotation * Math.PI / 180);
    const radius = 220;
    
    const exactX = Number.isFinite(angle) ? 250 + Math.cos(angle) * radius : 250;
    const exactY = Number.isFinite(angle) ? 250 - Math.sin(angle) * radius : 250;
    
    const verticalCorrectionFactor = Math.abs(Math.sin(angle));
    const adjustedY = exactY > 250 
      ? exactY - verticalCorrectionFactor
      : exactY + verticalCorrectionFactor;
    
    if (!Number.isFinite(exactX) || !Number.isFinite(adjustedY)) {
      return null;
    }
    
    // Size based on viewport - same relative sizes as before
    const iconSize = 24;
    
    return (
      <image
        key={`zodiac-${index}`}
        href={`/${signs[index]}.png`}
        x={exactX - (iconSize/2)}
        y={adjustedY - (iconSize/2)}
        width={iconSize}
        height={iconSize}
        preserveAspectRatio="xMidYMid meet"
      />
    );
  };

  const renderPositionLines = () => {
    if (!celestialPositions.length) return null;
    
    return celestialPositions.map(object => {
      // Calculate position for the original degree (point on the degree circle)
      // Apply chart rotation to the original degree position
      const originalAngle = ((object.originalDegree + chartRotation) * Math.PI) / 180;
      const degreeRadius = 200; // The radius where the degree marks are
      const x1 = 250 + Math.cos(originalAngle) * degreeRadius;
      const y1 = 250 - Math.sin(originalAngle) * degreeRadius;
      
      // Calculate adjusted object position with rotation
      const adjustedAngle = ((object.degree + chartRotation) * Math.PI) / 180;
      const objectRadius = object.radius;
      
      // For angles, we'll make the line shorter - have it go halfway
      let x2, y2;
      
      if (object.type === 'angle') {
        // Calculate a point midway between the degree circle and the icon position
        const midwayRadius = (degreeRadius + objectRadius) / 2;
        x2 = 250 + Math.cos(adjustedAngle) * midwayRadius;
        y2 = 250 - Math.sin(adjustedAngle) * midwayRadius;
      } else {
        // For planets, use the normal position
        x2 = 250 + Math.cos(adjustedAngle) * objectRadius;
        y2 = 250 - Math.sin(adjustedAngle) * objectRadius;
      }
      
      return (
        <line
          key={`position-line-${object.key}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#D2AE3C"
          strokeWidth={0.75}
          strokeDasharray="2,2"
        />
      );
    });
  };   
  
  // SVG-based celestial object renderer
  const renderCelestialObject = (celestialObj) => {
    const { degree, radius, key, type, imageName } = celestialObj;
    
    const angle = ((degree * Math.PI) / 180) + (chartRotation * Math.PI / 180);
    const exactX = 250 + Math.cos(angle) * radius;
    const exactY = 250 - Math.sin(angle) * radius;
    
    const verticalCorrectionFactor = Math.abs(Math.sin(angle));
    const adjustedY = exactY > 250 
      ? exactY - verticalCorrectionFactor
      : exactY + verticalCorrectionFactor;
    
    if (!Number.isFinite(exactX) || !Number.isFinite(adjustedY)) {
      return null;
    }

    const imageFileName = type === 'angle' ? (imageName || key) : key;
    
    // Determine the correct subdirectory based on object type
    const subDir = type === 'angle' ? 'angles' : 'planets';
    
    // Size based on viewport - same relative sizes as before
    const iconSize = 24;
    
    return (
      <image
        key={`celestial-${key}`}
        href={`/${subDir}/${imageFileName}.png`}
        x={exactX - (iconSize/2)}
        y={adjustedY - (iconSize/2)}
        width={iconSize}
        height={iconSize}
        preserveAspectRatio="xMidYMid meet"
      />
    );
  };

  const renderDegreeMarkers = () => {
    const markers = [];
    for (let i = 0; i < 360; i++) {
      // Apply chart rotation to align with zodiac signs
      const angle = ((i + chartRotation) * Math.PI) / 180;
      
      // Determine marker length and width based on position within zodiac sign
      let length = 5; // Default small tick
      let strokeWidth = 0.5;
      
      // Calculate position within the current sign (0-29)
      const positionInSign = i % 30;
      
      // Larger markers for:
      if (positionInSign === 0) {
        // Sign boundaries (0° of each sign)
        length = 20;
        strokeWidth = 1.5;
      } else if (positionInSign % 10 === 0) {
        // Decans (10° and 20° within each sign)
        length = 15;
        strokeWidth = 1;
      } else if (positionInSign % 5 === 0) {
        // Terms/bounds divisions (5°, 15°, 25° within each sign)
        length = 10;
        strokeWidth = 1;
      }
      
      const innerRadius = 200;
      const x1 = 250 + Math.cos(angle) * innerRadius;
      const y1 = 250 - Math.sin(angle) * innerRadius;
      const x2 = 250 + Math.cos(angle) * (innerRadius - length);
      const y2 = 250 - Math.sin(angle) * (innerRadius - length);
      
      markers.push(
        <line
          key={`degree-${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#F3EBCD"
          strokeWidth={strokeWidth}
        />
      );
    }
    return markers;
  };  

  // Calculate aspect lines between planets
  const renderAspectLines = () => {
    if (!horoscope || !horoscope.aspects) return null;
    
    return horoscope.aspects.map((aspect, index) => {
      // Skip if aspect doesn't have the required properties
      if (!aspect.point1?.name || !aspect.point2?.name) return null;
      
      // Get planet names from the aspect data
      const planet1Name = aspect.point1.name;
      const planet2Name = aspect.point2.name;
      
      // Get degrees directly from aspect data
      const planet1Degree = aspect.point1.degree;
      const planet2Degree = aspect.point2.degree;
      
      if (planet1Degree === undefined || planet2Degree === undefined) {
        return null;
      }
      
      // Apply chart rotation for proper positioning
      const angle1 = ((planet1Degree + chartRotation) * Math.PI) / 180;
      const angle2 = ((planet2Degree + chartRotation) * Math.PI) / 180;
      
      // Use the full radius of the inner circle
      const radius = 100;
      
      const x1 = 250 + Math.cos(angle1) * radius;
      const y1 = 250 - Math.sin(angle1) * radius;
      const x2 = 250 + Math.cos(angle2) * radius;
      const y2 = 250 - Math.sin(angle2) * radius;
      
      // Set stroke width based on aspect importance
      let strokeWidth;
      
      // Graduated boldness by importance level
      if (aspect.name === "conjunction" || aspect.name === "opposition") {
        // Level 1: Most important - conjunction and opposition
        strokeWidth = 1.0;
      } else if (aspect.name === "square" || aspect.name === "trine") {
        // Level 2: Second most important - square and trine
        strokeWidth = 0.5;
      } else if (aspect.name === "sextile") {
        // Level 3: Third most important - sextile
        strokeWidth = 0.25;
      } else {
        // Level 4: Least important - all minor aspects
        strokeWidth = 0.25;
      }
      
      // Always use dashed lines for minor aspects, solid for major
      let strokeDasharray = aspect.level === "minor" ? "3,3" : "none";
      
      // Assign colors based on aspect type
      let strokeColor;
      
      switch (aspect.name) {
        // Positive aspects with harmonizing blue variations
        case "trine":
          strokeColor = "#D2AE3C"; // Brightest royal blue that complements gold
          break;
        case "sextile":
          strokeColor = "#D2AE3C"; // Medium blue
          break;
        case "quintile":
          strokeColor = "#2A4C7A"; // Darker blue
          break;
        case "semi-sextile":
          strokeColor = "#30578C"; // Between medium and dark blue
          break;
          
        // Negative aspects with variations of red that complement the theme
        case "opposition":
          strokeColor = "#C13030"; // Bright red complementing gold theme
          break;
        case "square":
          strokeColor = "#A82828"; // Medium red
          break;
        case "semi-square":
          strokeColor = "#872020"; // Darker red
          break;
        case "quincunx":
          strokeColor = "#941F1F"; // Between medium and dark red
          break;
          
        // Neutral aspects
        case "conjunction":
          strokeColor = "#D2AE3C"; // Using theme color for conjunction
          break;
        case "septile":
          strokeColor = "#8F7A31"; // Darker variant of theme color
          break;
        default:
          strokeColor = "#A6915A"; // Neutral variant of the theme color
      }
      
      return (
        <line
          key={`aspect-${index}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeOpacity={0.7}
        />
      );
    });
  };
  
  return (
    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] overflow-hidden">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 500 500" 
        preserveAspectRatio="xMidYMid meet"
        className="absolute z-[1]"
      >
        {/* Aspect lines between planets */}
        {renderAspectLines()}

        {/* Outer circle */}
        <circle
          cx={250}
          cy={250}
          r={240}
          stroke="#D2AE3C"
          strokeWidth={1}
          fill="none"
        />

        {/* Inner circle */}
        <circle
          cx={250}
          cy={250}
          r={200}
          stroke="#F3EBCD"
          strokeWidth={1}
          fill="none"
        />

        {/* House circle */}
        <circle
          cx={250}
          cy={250}
          r={100}
          stroke="#F3EBCD"
          strokeWidth={1}
          fill="none"
        />

        {/* House lines */}
        {horoscope && horoscope.houseCusps && Object.entries(horoscope.houseCusps).map(([key, house]) => {
          // Skip if not a valid house object or has no key or degree
          if (!house || !house.key || house.degree === undefined || house.degree === null) {
            console.log(`Skipping house line for invalid house:`, house);
            return null;
          }
          
          // Make sure we're working with a number
          let houseDegree = typeof house.degree === 'string' ? parseFloat(house.degree) : house.degree;
          
          // Calculate angle with chart rotation
          const angle = ((houseDegree + chartRotation) % 360) * Math.PI / 180;
          
          // Inner circle radius is 100, zodiac sign section inner radius is 200
          const x1 = 250 + Math.cos(angle) * 100;
          const y1 = 250 - Math.sin(angle) * 100;
          const x2 = 250 + Math.cos(angle) * 200; // Changed from 240 to 200 to stop at zodiac inner edge
          const y2 = 250 - Math.sin(angle) * 200; // Changed from 240 to 200

          return (
            <line
              key={`house-line-${house.key}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#F3EBCD"
              strokeWidth={1}
            />
          );
        })}

        <g>{renderDegreeMarkers()}</g>

        {/* Zodiac sections */}
        {Array.from({ length: 12 }).map((_, index) => {
        // Calculate angles with chart rotation
        // Each sign is 30 degrees
        const startDegree = index * 30;
        const endDegree = (index + 1) * 30;
        
        // Apply chart rotation to both start and end angles
        const rotatedStartAngle = ((startDegree + chartRotation) * Math.PI) / 180;
        const rotatedEndAngle = ((endDegree + chartRotation) * Math.PI) / 180;
        
        const outerX1 = 250 + Math.cos(rotatedStartAngle) * 240;
        const outerY1 = 250 - Math.sin(rotatedStartAngle) * 240;
        const outerX2 = 250 + Math.cos(rotatedEndAngle) * 240;
        const outerY2 = 250 - Math.sin(rotatedEndAngle) * 240;
        
        const innerX1 = 250 + Math.cos(rotatedStartAngle) * 200;
        const innerY1 = 250 - Math.sin(rotatedStartAngle) * 200;
        const innerX2 = 250 + Math.cos(rotatedEndAngle) * 200;
        const innerY2 = 250 - Math.sin(rotatedEndAngle) * 200;
        
        // Optional: We can add a thin line to separate zodiac sections if needed
        return (
          <line
            key={`zodiac-divider-${index}`}
            x1={outerX1}
            y1={outerY1}
            x2={innerX1}
            y2={innerY1}
            stroke="#F3EBCD"
            strokeWidth={0.5}
          />
        );
      })}
        
        {/* Position lines for planets and angles */}
        {renderPositionLines()}

        {/* House numbers */}
        {horoscope && horoscope.houseCusps && 
          Array.from({length: 12}, (_, i) => i + 1).map(houseNumber => {
            // Find the corresponding house in the houseCusps object
            const houseKey = houseNumber.toString();
            const house = Object.values(horoscope.houseCusps).find(h => h.key === houseKey);
            
            if (!house || house.degree === undefined || house.degree === null) {
              console.log(`Missing house ${houseKey} data:`, house);
              return null;
            }
            
            // Get next house (or wrap to house 1)
            const nextHouseKey = ((houseNumber % 12) + 1).toString();
            const nextHouse = Object.values(horoscope.houseCusps).find(h => h.key === nextHouseKey);
            
            if (!nextHouse || nextHouse.degree === undefined || nextHouse.degree === null) {
              console.log(`Missing next house ${nextHouseKey} data:`, nextHouse);
              return null;
            }
            
            // Convert to numbers and ensure they're normalized
            let houseDegree = typeof house.degree === 'string' ? parseFloat(house.degree) : house.degree;
            let nextHouseDegree = typeof nextHouse.degree === 'string' ? parseFloat(nextHouse.degree) : nextHouse.degree;
            
            // Calculate middle position accounting for 0° crossing
            let middlePosition;
            // If next house degree is smaller, we're crossing 0°
            if (nextHouseDegree < houseDegree) {
              nextHouseDegree += 360; // Add 360 to make it greater
            }
            
            // Calculate the middle
            middlePosition = (houseDegree + nextHouseDegree) / 2;
            // Normalize back to 0-360 range
            middlePosition = middlePosition % 360;
            
            // Calculate display angle with chart rotation
            const displayAngle = ((middlePosition + chartRotation) % 360) * Math.PI / 180;
            
            // Position for house number
            const radius = 110; // Distance from center
            const x = 250 + Math.cos(displayAngle) * radius;
            const y = 250 - Math.sin(displayAngle) * radius;

            // Use SVG image instead of foreignObject
            return (
              <image
                key={`house-number-${houseKey}`}
                href={`/housenumbers/${houseKey}gold.jpg`}
                x={x - 8} // Offset by half the width
                y={y - 8} // Offset by half the height
                width={16}
                height={16}
                preserveAspectRatio="xMidYMid meet"
              />
            );
          })
        }
      
        {/* Zodiac signs - now inside SVG */}
        {Array.from({ length: 12 }).map((_, index) => renderZodiacSign(index))}

        {/* Render all celestial objects - now inside SVG */}
        {celestialPositions.map(obj => renderCelestialObject(obj))}
      </svg>
    </div>
  );
};

export default BirthChartSVG;

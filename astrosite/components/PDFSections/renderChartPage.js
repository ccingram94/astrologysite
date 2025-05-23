// components/PDFSections/renderChartPage.js
import React from 'react';
import { View, Text, Image, Svg, Circle, Line, Path, G, Text as SvgText } from '@react-pdf/renderer';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

// Icon collections
const zodiacIcons = {
  Aries: `${baseUrl}/signs/ariesgold.jpg`,
  Taurus: `${baseUrl}/signs/taurusgold.jpg`,
  Gemini: `${baseUrl}/signs/geminigold.jpg`,
  Cancer: `${baseUrl}/signs/cancergold.jpg`,
  Leo: `${baseUrl}/signs/leogold.jpg`,
  Virgo: `${baseUrl}/signs/virgogold.jpg`,
  Libra: `${baseUrl}/signs/libragold.jpg`,
  Scorpio: `${baseUrl}/signs/scorpiogold.jpg`,
  Sagittarius: `${baseUrl}/signs/sagittariusgold.jpg`,
  Capricorn: `${baseUrl}/signs/capricorngold.jpg`,
  Aquarius: `${baseUrl}/signs/aquariusgold.jpg`,
  Pisces: `${baseUrl}/signs/piscesgold.jpg`,
};

const planetIcons = {
  sun: `${baseUrl}/planets/sun.jpg`,
  moon: `${baseUrl}/planets/moon.jpg`,
  mercury: `${baseUrl}/planets/mercury.jpg`,
  venus: `${baseUrl}/planets/venus.jpg`,
  mars: `${baseUrl}/planets/mars.jpg`,
  jupiter: `${baseUrl}/planets/jupiter.jpg`,
  saturn: `${baseUrl}/planets/saturn.jpg`,
  uranus: `${baseUrl}/planets/uranus.jpg`,
  neptune: `${baseUrl}/planets/neptune.jpg`,
  pluto: `${baseUrl}/planets/pluto.jpg`,
};

const angleIcons = {
  ascendantgold: `${baseUrl}/angles/ascendantgold.jpg`,
  descendantgold: `${baseUrl}/angles/descendantgold.jpg`,
  midheavengold: `${baseUrl}/angles/midheavengold.jpg`,
  imumcoeligold: `${baseUrl}/angles/imumcoeligold.jpg`,
  // Add lowercase versions that match exact keys
  ascendant: `${baseUrl}/angles/ascendantgold.jpg`,
  descendant: `${baseUrl}/angles/descendantgold.jpg`,
  midheaven: `${baseUrl}/angles/midheavengold.jpg`,
  imumcoeli: `${baseUrl}/angles/imumcoeligold.jpg`,
};

// Styles
const styles = {
  chartContainer: {
    width: '100%',
    marginVertical: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  svgText: {
    fontFamily: 'IM Fell English SC',
    fontSize: 12,
  },
};

const renderChartPage = ({ sectionRefs, horoscope }) => {
  // Return early if data is missing
  if (!horoscope || !horoscope.angles || !horoscope.planets) {
    return null;
  }

  const ascendantDegree = horoscope.angles?.Ascendant?.degree || 0;
  const chartRotation = 180 - ascendantDegree;

  return (
    <View style={styles.chartContainer}>
      <Text
        id="birthChart" 
        style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
        render={({ pageNumber }) => {
          if (sectionRefs?.birthChart?.current !== undefined) {
            sectionRefs.birthChart.current = pageNumber;
          }
          return null;
        }}
      />
      <Svg width={500} height={500} viewBox="0 0 500 500" style={{ fontFamily: 'IM Fell English SC' }}>
        {/* Aspect lines between planets */}
        {horoscope.aspects?.map((aspect, index) => {
          // Skip if aspect doesn't have the required properties
          if (!aspect.point1?.name || !aspect.point2?.name) return null;
          
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
            <Line
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
        })}

        {/* Outer circle */}
        <Circle cx={250} cy={250} r={240} stroke="#D2AE3C" strokeWidth={1} fill="none" />
        
        {/* Inner circle */}
        <Circle cx={250} cy={250} r={200} stroke="#F3EBCD" strokeWidth={1} fill="none" />
        
        {/* House circle */}
        <Circle cx={250} cy={250} r={100} stroke="#F3EBCD" strokeWidth={1} fill="none" />

        {/* House lines */}
        {horoscope?.houseCusps && Object.entries(horoscope.houseCusps)
          .filter(([key, house]) => house && house.key && house.degree !== undefined && house.degree !== null)
          .map(([key, house]) => {
            const houseDegree = typeof house.degree === 'string' ? parseFloat(house.degree) : house.degree;
            const angle = ((houseDegree + chartRotation) * Math.PI) / 180;
            
            // Start from the house circle (inner) at r=100
            const x1 = 250 + Math.cos(angle) * 100;
            const y1 = 250 - Math.sin(angle) * 100; 
            
            // End at the inner boundary of the zodiac section
            const x2 = 250 + Math.cos(angle) * 200;
            const y2 = 250 - Math.sin(angle) * 200;

            return (
              <Line
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

        {/* Degree markers with proper rotation and formatting */}
        <G>
          {Array.from({ length: 360 }).map((_, i) => {
            const angle = ((i + chartRotation) * Math.PI) / 180;
            
            // Determine marker length and width based on position within zodiac sign
            let length = 5; 
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
        
            return (
              <Line
                key={`degree-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#F3EBCD"
                strokeWidth={strokeWidth}
              />
            );
          })}
        </G>

        {/* Zodiac section dividers */}
        {Array.from({ length: 12 }).map((_, index) => {
          // Calculate angles with chart rotation
          const startDegree = index * 30;
          const startAngle = ((startDegree + chartRotation) * Math.PI) / 180;
          
          const outerX1 = 250 + Math.cos(startAngle) * 240;
          const outerY1 = 250 - Math.sin(startAngle) * 240;
          const innerX1 = 250 + Math.cos(startAngle) * 200;
          const innerY1 = 250 - Math.sin(startAngle) * 200;
          
          return (
            <Line
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
        {(() => {
          // Prepare celestial positions
          const planets = Object.entries(horoscope.planets || {})
            .filter(([key]) => key !== 'all' && key !== 'true' && key !== 'false')
            .map(([key, data]) => ({
              key: data.key,
              originalDegree: data.degree,
              degree: data.degree,
              originalX: 250 + Math.cos((data.degree * Math.PI) / 180) * 170,
              originalY: 250 - Math.sin((data.degree * Math.PI) / 180) * 170,
              radius: 170,
              type: 'planet'
            }));
            
          // Add major angles
          const angles = [];
          
          if (horoscope.angles) {
            // Ascendant
            if (horoscope.angles.Ascendant) {
              angles.push({
                key: 'ascendant', 
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
                key: 'descendant',
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
                key: 'midheaven',
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
                key: 'imumcoeli',
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

          // Draw position lines
          return adjustedPositions.map(object => {
            // Calculate position for the original degree (point on the degree circle)
            // Apply chart rotation to the original degree position
            const originalAngle = ((object.originalDegree + chartRotation) * Math.PI) / 180;
            const degreeRadius = 200; // The radius where the degree marks are
            const x1 = 250 + Math.cos(originalAngle) * degreeRadius;
            const y1 = 250 - Math.sin(originalAngle) * degreeRadius;
            
            // Calculate adjusted object position with rotation
            const adjustedAngle = ((object.degree + chartRotation) * Math.PI) / 180;
            const objectRadius = object.radius;
            
            // For angles, make the line shorter (halfway)
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
              <Line
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
        })()}

        {/* House numbers with proper placement */}
        {(() => {
          if (!horoscope || !horoscope.houseCusps) return null;
          
          return Array.from({length: 12}, (_, i) => i + 1).map(houseNumber => {
            // Find the corresponding house in the houseCusps object
            const houseKey = houseNumber.toString();
            const house = Object.values(horoscope.houseCusps).find(h => h.key === houseKey);
            
            if (!house || house.degree === undefined || house.degree === null) {
              return null;
            }
            
            // Get next house (or wrap to house 1)
            const nextHouseKey = ((houseNumber % 12) + 1).toString();
            const nextHouse = Object.values(horoscope.houseCusps).find(h => h.key === nextHouseKey);
            
            if (!nextHouse || nextHouse.degree === undefined || nextHouse.degree === null) {
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

            return (
              <SvgText
                key={`house-number-${houseKey}`}
                x={x}
                y={y}
                style={styles.svgText}
                fontSize="12"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#D2AE3C"
              >
                {houseKey}
              </SvgText>
            );
          });
        })()}
      </Svg>

      {/* Position celestial objects absolutely over the SVG */}
      <View style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        {/* Zodiac signs */}
        {Array.from({ length: 12 }).map((_, index) => {
          const signs = [
            'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
            'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
          ];
          
          // Apply chart rotation
          const angle = (((index * 30 + 15) * Math.PI) / 180) + (chartRotation * Math.PI / 180);
          const radius = 220;
          
          // Calculate exact position on circle with vertical correction
          const exactX = 250 + Math.cos(angle) * radius - 8;
          const exactY = 250 - Math.sin(angle) * radius - 8;
          
          // Apply vertical correction
          const verticalCorrectionFactor = Math.abs(Math.sin(angle)) * 6;
          const adjustedY = exactY > 250 
            ? exactY - verticalCorrectionFactor 
            : exactY + verticalCorrectionFactor;
          
          // Ensure we have a valid sign and a valid icon
          const signName = signs[index];
          const iconSource = zodiacIcons[signName];
          
          return iconSource ? (
            <Image
              key={`zodiac-${index}`}
              style={{
                position: 'absolute',
                width: 16, 
                height: 16,
                left: (exactX/500)*100 + '%',
                top: (adjustedY/500)*100 + '%',
              }}
              src={iconSource}
            />
          ) : null;
        })}
        
        {/* Planet and angle icons */}
        {(() => {
          // Similar to celestialPositions
          const planets = Object.entries(horoscope.planets || {})
            .filter(([key]) => key !== 'all' && key !== 'true' && key !== 'false')
            .map(([key, data]) => ({
              key: data.key,
              originalDegree: data.degree,
              degree: data.degree,
              radius: 170,
              type: 'planet'
            }));
            
          // Add angles
          const angles = [];
          
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
          
          // Combine and adjust positions
          const allPositions = [...planets, ...angles];
          allPositions.sort((a, b) => a.originalDegree - b.originalDegree);
          
          // Adjust positions to prevent collisions
          const minDistance = 28; 
          const adjustedPositions = [...allPositions];
          
          for (let pass = 0; pass < 5; pass++) {
            let collisionResolved = false;
            
            for (let i = 0; i < adjustedPositions.length; i++) {
              for (let j = 0; j < adjustedPositions.length; j++) {
                if (i !== j) {
                  const p1 = adjustedPositions[i];
                  const p2 = adjustedPositions[j];
                  
                  // Calculate positions with rotation
                  const x1 = 250 + Math.cos(((p1.degree + chartRotation) * Math.PI) / 180) * p1.radius;
                  const y1 = 250 - Math.sin(((p1.degree + chartRotation) * Math.PI) / 180) * p1.radius;
                  const x2 = 250 + Math.cos(((p2.degree + chartRotation) * Math.PI) / 180) * p2.radius;
                  const y2 = 250 - Math.sin(((p2.degree + chartRotation) * Math.PI) / 180) * p2.radius;
                  
                  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                  
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
          
          // Render objects with adjusted positions
          return adjustedPositions.map(obj => {
            // Calculate adjusted position with rotation
            const angle = ((obj.degree + chartRotation) * Math.PI) / 180;
            const radius = obj.radius;
            
            // Calculate exact position
            const exactX = 250 + Math.cos(angle) * radius - 8;
            const exactY = 250 - Math.sin(angle) * radius - 8;
            
            // Apply vertical correction
            const verticalCorrectionFactor = Math.abs(Math.sin(angle)) * 6;
            const adjustedY = exactY > 250 
              ? exactY - verticalCorrectionFactor 
              : exactY + verticalCorrectionFactor;
            
            let iconSource = null;
            
            // Select the correct icon source based on object type
            if (obj.type === 'angle') {
              // Convert the key to lowercase for consistency
              const lowerKey = obj.key.toLowerCase();
              
              // Try different possible key formats to find the right icon
              if (angleIcons[lowerKey]) {
                iconSource = angleIcons[lowerKey];
              } else if (angleIcons[lowerKey + 'gold']) {
                iconSource = angleIcons[lowerKey + 'gold'];
              } else if (obj.imageName && angleIcons[obj.imageName.toLowerCase()]) {
                iconSource = angleIcons[obj.imageName.toLowerCase()];
              } else {
                // Map from angle name to icon name as a fallback
                const angleToIconMap = {
                  'ascendant': 'ascendantgold',
                  'descendant': 'descendantgold', 
                  'midheaven': 'midheavengold',
                  'imumcoeli': 'imumcoeligold'
                };
                
                if (angleToIconMap[lowerKey]) {
                  iconSource = angleIcons[angleToIconMap[lowerKey]];
                }
              }
            } else if (obj.type === 'planet') {
              iconSource = planetIcons[obj.key.toLowerCase()];
            }
            
            if (!iconSource) return null;
            
            return (
              <Image
                key={`celestial-${obj.key}`}
                style={{
                  position: 'absolute',
                  width: 16,
                  height: 16,
                  left: (exactX/500)*100 + '%', 
                  top: (adjustedY/500)*100 + '%',
                }}
                src={iconSource}
              />
            );
          });
        })()}
      </View>
    </View>
  );
};

export default renderChartPage;

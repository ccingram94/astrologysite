'use client'
import React, { useMemo, useEffect } from 'react';
import Image from 'next/image';

const BirthChartSVG = ({ horoscope, newHoroscope }) => {
  // For debugging
  useEffect(() => {
    if (horoscope) {
      console.log("ANGLES:", horoscope.angles);
      console.log("HOUSE CUSPS:", horoscope.houseCusps);
    }
  }, [horoscope]);
  
  // Use the provided horoscope.planets data
  const renderZodiacSign = (index) => {
    const signs = [
      'ariesgold', 'taurusgold', 'geminigold', 'cancergold', 'leogold', 'virgogold',
      'libragold', 'scorpiogold', 'sagittariusgold', 'capricorngold', 'aquariusgold', 'piscesgold'
    ];
    
    // Rotate 90° counterclockwise - with Ascendant at the left (180° in SVG coordinates)
    const angle = (((index * 30 + 15) * Math.PI) / 180);
    const radius = 220;
    
    // Calculate exact position on circle
    const exactX = Number.isFinite(angle) ? 250 + Math.cos(angle) * radius : 250;
    const exactY = Number.isFinite(angle) ? 250 - Math.sin(angle) * radius : 250;
    
    // Apply vertical correction - pull in towards center slightly
    // Apply more correction at the top and bottom, less at the sides
    const verticalCorrectionFactor = Math.abs(Math.sin(angle)) * 6; // 0-6px varying by position
    
    // Adjust y position based on position (pull toward center)
    const adjustedY = exactY > 250 
      ? exactY - verticalCorrectionFactor  // Below center, pull up
      : exactY + verticalCorrectionFactor; // Above center, pull down
    
    if (!Number.isFinite(exactX) || !Number.isFinite(adjustedY)) {
      return null;
    }
    
    return (
      <div
        key={`zodiac-${index}`}
        className="absolute z-[10] transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${(exactX/500)*100}%`,
          top: `${(adjustedY/500)*100}%`,
        }}
      >
        <Image
          src={`/${signs[index]}.png`}
          alt={signs[index]}
          width={24}
          height={24}
          priority
          className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px]"
        />
      </div>
    );
  };
  
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

  const renderPositionLines = () => {
    if (!celestialPositions.length) return null;
    
    return celestialPositions.map(object => {
      // Calculate position for the original degree (point on the degree circle)
      const originalAngle = (object.originalDegree * Math.PI) / 180;
      const degreeRadius = 200; // The radius where the degree marks are
      const x1 = 250 + Math.cos(originalAngle) * degreeRadius;
      const y1 = 250 - Math.sin(originalAngle) * degreeRadius;
      
      // Calculate adjusted object position
      const adjustedAngle = (object.degree * Math.PI) / 180;
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
      
      // Always draw lines for angles, and for planets that moved from original position
      if (object.type === 'angle' || 
          Math.abs(object.originalDegree - object.degree) > 0.1 || 
          Math.abs(object.radius - 170) > 0.1) {
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
      }
      return null;
    });
  };
  
  const renderCelestialObject = (celestialObj) => {
    // Use adjusted position
    const { degree, radius, key, type, imageName } = celestialObj;
    
    // Calculate position from adjusted degree and radius
    const angle = (degree * Math.PI) / 180;
    const exactX = 250 + Math.cos(angle) * radius;
    const exactY = 250 - Math.sin(angle) * radius;
    
    // Apply vertical correction - pull in towards center slightly
    // Apply more correction at the top and bottom, less at the sides
    const verticalCorrectionFactor = Math.abs(Math.sin(angle)) * 6; // 0-6px varying by position
    
    // Adjust y position based on position (pull toward center)
    const adjustedY = exactY > 250 
      ? exactY - verticalCorrectionFactor  // Below center, pull up
      : exactY + verticalCorrectionFactor; // Above center, pull down
    
    if (!Number.isFinite(exactX) || !Number.isFinite(adjustedY)) {
      return null;
    }

    // For planets, use key as the image name
    // For angles, use the explicit imageName (or fallback to key)
    const imageFileName = type === 'angle' ? (imageName || key) : key;
    
    return (
      <div
        key={`celestial-${key}`}
        className="absolute z-[10] transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${(exactX/500)*100}%`,
          top: `${(adjustedY/500)*100}%`,
        }}
      >
        <Image
          src={`/${imageFileName}.png`}
          alt={key}
          width={24}
          height={24}
          priority
          className="z-[2] w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px]"
        />
      </div>
    );
  };

  const renderDegreeMarkers = () => {
    const markers = [];
    for (let i = 0; i < 360; i++) {
      // Adjust degree markers to match new orientation
      const angle = ((i) * Math.PI) / 180;
      let length = 10;
      let strokeWidth = 0.5;
      
      if (i % 10 === 0) {
        length = 20;
        strokeWidth = 1;
      } else if (i % 5 === 0) {
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
      // Check if aspect has the required properties
      if (!aspect.planet1 || !aspect.planet2) return null;
      
      // Get the planets involved in the aspect
      const planet1Key = aspect.planet1.toLowerCase();
      const planet2Key = aspect.planet2.toLowerCase();
      
      // Get planet data
      const planet1 = horoscope.planets[planet1Key];
      const planet2 = horoscope.planets[planet2Key];
      
      if (!planet1 || !planet2) return null;
      
      // Modified angle calculations for aspects
      const angle1 = ((planet1.degree) * Math.PI) / 180;
      const angle2 = ((planet2.degree) * Math.PI) / 180;
      
      const radius = 90; // Inside the house circle
      
      const x1 = 250 + Math.cos(angle1) * radius;
      const y1 = 250 - Math.sin(angle1) * radius;
      const x2 = 250 + Math.cos(angle2) * radius;
      const y2 = 250 - Math.sin(angle2) * radius;

      // Set style based on aspect type
      let strokeDasharray = "none";
      let strokeWidth = 1;
      let strokeColor = "#F3EBCD";
      
      if (aspect.level === "minor") {
        strokeDasharray = "3,3";
        strokeWidth = 0.75;
      }
      
      switch (aspect.name) {
        case "conjunction":
          strokeColor = "#5d9df5"; // Blue
          break;
        case "opposition":
          strokeColor = "#f55d5d"; // Red
          break;
        case "trine":
          strokeColor = "#5df55d"; // Green
          break;
        case "square":
          strokeColor = "#f5b95d"; // Orange
          break;
        case "sextile":
          strokeColor = "#b95df5"; // Purple
          break;
        default:
          strokeColor = "#F3EBCD"; // Light color for other aspects
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
        {horoscope && horoscope.houseCusps && Object.entries(horoscope.houseCusps).map(([key, house], index) => {
          if (!house.degree) return null;
          
          // Modified angle calculation for house lines
          const angle = (house.degree) * Math.PI / 180;
          const x1 = 250 + Math.cos(angle) * 100;
          const y1 = 250 - Math.sin(angle) * 100;
          const x2 = 250 + Math.cos(angle) * 240;
          const y2 = 250 - Math.sin(angle) * 240;

          return (
            <line
              key={`house-line-${index}`}
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
          const getModality = (index) => {
            if (index % 3 === 0) return "#2A303C";
            if (index % 3 === 1) return "#2A303C";
            return "#2A303C";
          };

          // Modified angle calculation for zodiac sections
          // Start with Ascendant at the left (0° = left side)
          const startAngle = ((-index * 30) * Math.PI) / 180; // +90 degrees from previous
          const endAngle = ((-(index + 1) * 30) * Math.PI) / 180; // +90 degrees from previous
          
          const outerX1 = 250 + Math.cos(startAngle) * 240;
          const outerY1 = 250 + Math.sin(startAngle) * 240;
          const outerX2 = 250 + Math.cos(endAngle) * 240;
          const outerY2 = 250 + Math.sin(endAngle) * 240;
          
          const innerX1 = 250 + Math.cos(startAngle) * 200;
          const innerY1 = 250 + Math.sin(startAngle) * 200;
          const innerX2 = 250 + Math.cos(endAngle) * 200;
          const innerY2 = 250 + Math.sin(endAngle) * 200;
          
          const pathData = `
            M ${outerX1} ${outerY1}
            A 240 240 0 0 0 ${outerX2} ${outerY2}
            L ${innerX2} ${innerY2}
            A 200 200 0 0 1 ${innerX1} ${innerY1}
            Z
          `;

          return (
            <path
              key={`zodiac-section-${index}`}
              d={pathData}
              fill={getModality(index)}
              stroke="none"
            />
          );
        })}
        
        {/* Position lines for planets and angles */}
        {renderPositionLines()}

        {/* House numbers */}
        {horoscope && horoscope.houseCusps && Object.entries(horoscope.houseCusps).map(([key, house], index) => {
          if (!house.degree) return null;
          
          // Get the next house's degree
          const houseKeys = Object.keys(horoscope.houseCusps);
          const nextHouseKey = houseKeys[(index + 1) % houseKeys.length];
          const nextHouse = horoscope.houseCusps[nextHouseKey];
          
          if (!nextHouse || !nextHouse.degree) return null;

          // Calculate middle position
          let middlePosition;
          if (nextHouse.degree < house.degree) {
            middlePosition = (house.degree + (nextHouse.degree + 360)) / 2;
            if (middlePosition >= 360) middlePosition -= 360;
          } else {
            middlePosition = (house.degree + nextHouse.degree) / 2;
          }
          
          // Modified angle calculation for house numbers
          const middleAngle = ((middlePosition) * Math.PI) / 180;
          
          const radius = 110;
          const x = 250 + Math.cos(middleAngle) * radius;
          const y = 250 - Math.sin(middleAngle) * radius;

          return (
            <text
              key={`house-number-${index}`}
              x={x}
              y={y}
              fontSize="12"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#D2AE3C"
              className="font-semibold"
            >
              {house.key}
            </text>
          );
        })}

        {/* Add Horizon Line (Ascendant-Descendant axis) */}
        <line
          x1={250}
          y1={10}
          x2={250}
          y2={490}
          stroke="#D2AE3C"
          strokeWidth={1}
          strokeDasharray="5,5"
          strokeOpacity={0.7}
        />
        
        {/* Add Meridian Line (MC-IC axis) */}
        <line
          x1={10}
          y1={250}
          x2={490}
          y2={250}
          stroke="#D2AE3C"
          strokeWidth={1}
          strokeDasharray="5,5"
          strokeOpacity={0.7}
        />
      </svg>

      {/* Zodiac signs */}
      {Array.from({ length: 12 }).map((_, index) => renderZodiacSign(index))}

      {/* Render all celestial objects (planets and angles) with adjusted positions */}
      {celestialPositions.map(obj => renderCelestialObject(obj))}
    </div>
  );
};

export default BirthChartSVG;

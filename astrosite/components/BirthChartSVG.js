'use client'
import React from 'react';
import Image from 'next/image';
import { findAspects, generateAspectLines } from '../utils/calculateAspectChart';

const findAspectsSVG = (celestialBodies) => {  
  return findAspects(celestialBodies); // Use the existing findAspects function
};

const BirthChartSVG = ({ horoscope }) => {

  const celestialBodies = Object.entries(horoscope.CelestialBodies)
  .filter(([key]) => key !== 'all')
  .map(([_, data]) => data);

  // Calculate aspects
  const aspects = findAspectsSVG(celestialBodies);

  // Generate aspect lines
  const aspectLines = generateAspectLines(aspects);
  
  const renderZodiacSign = (index) => {
    const signs = [
      'ariesgold', 'taurusgold', 'geminigold', 'cancergold', 'leogold', 'virgogold',
      'libragold', 'scorpiogold', 'sagittariusgold', 'capricorngold', 'aquariusgold', 'piscesgold'
    ];
    
    const angle = (((index * 30 + 180 + 15) * Math.PI) / 180);
    const radius = 220;
    const x = Number.isFinite(angle) ? 250 + Math.cos(angle) * radius - 12 : 250;
    const y = Number.isFinite(angle) ? 250 - Math.sin(angle) * radius - 12 : 250;
    
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      return null;
    }
    
    return (
      <div
        key={`zodiac-${index}`}
        className="absolute z-[10]"
        style={{
          left: `${(x/500)*100}%`,
          top: `${(y/500)*100}%`,
        }}
      >
        <Image
          src={`/${signs[index]}.png`}
          alt={signs[index]}
          width={24}
          height={24}
          className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px]"
        />
      </div>
    );
  };
  
  const renderPlanet = (planet, data) => {
    if (!data?.ChartPosition?.Ecliptic?.DecimalDegrees) {
      return null;
    }
    
    const angle = ((data.ChartPosition.Ecliptic.DecimalDegrees + 180) * Math.PI) / 180;
    const radius = 170;
    const x = Number.isFinite(angle) ? 250 + Math.cos(angle) * radius - 12 : 250;
    const y = Number.isFinite(angle) ? 250 - Math.sin(angle) * radius - 12 : 250;
    
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      return null;
    }
    
    return (
      <div
        key={`planet-${planet}`}
        className="absolute z-[10]"
        style={{
          left: `${(x/500)*100}%`,
          top: `${(y/500)*100}%`,
        }}
      >
        <Image
          src={`/${planet}.png`}
          alt={planet}
          width={24}
          height={24}
          className="z-[2] w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px]"
        />
      </div>
    );
  };
  

  const renderDegreeMarkers = () => {
    const markers = [];
    for (let i = 0; i < 360; i++) {
      const angle = ((i + 180) * Math.PI) / 180;
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

  return (
    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] overflow-hidden">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 500 500" 
        preserveAspectRatio="xMidYMid meet"
        className="absolute z-[1]"
      >
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
        {horoscope.Houses.map((house, index) => {
          const angle = (house.ChartPosition.StartPosition.Ecliptic.DecimalDegrees + 180) * Math.PI / 180;
          const x1 = 250 + Math.cos(angle) * 100;
          const y1 = 250 - Math.sin(angle) * 100;
          const x2 = 250 + Math.cos(angle) * 240;
          const y2 = 250 - Math.sin(angle) * 240;

          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#F3EBCD"
              strokeWidth={1}
            />
          );
        })}

        {/* Aspect lines */}
        {aspectLines.map((line) => (
        <line
          key={line.key}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke={line.stroke}
          strokeWidth={line.strokeWidth}
        />
      ))}

        <g>{renderDegreeMarkers()}</g>

        {/* Zodiac sections */}
        {Array.from({ length: 12 }).map((_, index) => {
          const getModality = (index) => {
            if (index % 3 === 0) return "#183242";
            if (index % 3 === 1) return "#183242";
            return "#183242";
          };

          const startAngle = ((-index * 30 + 90) * Math.PI) / 180;
          const endAngle = ((-(index + 1) * 30 + 90) * Math.PI) / 180;
          
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
          {/* House numbers */}
        {horoscope.Houses.map((house, index) => {
          // Get the start position of the current house and the next house
          const currentHouseStart = house.ChartPosition.StartPosition.Ecliptic.DecimalDegrees;
          const nextHouseStart = horoscope.Houses[(index + 1) % 12]?.ChartPosition.StartPosition.Ecliptic.DecimalDegrees;
          
          // Calculate the middle position
          let middlePosition;
          if (nextHouseStart < currentHouseStart) {
            middlePosition = (currentHouseStart + (nextHouseStart + 360)) / 2;
            if (middlePosition >= 360) middlePosition -= 360;
          } else {
            middlePosition = (currentHouseStart + nextHouseStart) / 2;
          }
          
          let middleAngle = -(((middlePosition + 30) * Math.PI) / 180);
          
          // Position the numbers slightly inside the inner circle
          const radius = 110;
          const x = 250 + Math.cos(middleAngle) * radius;
          const y = 250 + Math.sin(middleAngle) * radius;

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
              {index + 1}
            </text>
          );
        })}
      </svg>

      {/* Zodiac signs */}
      {Array.from({ length: 12 }).map((_, index) => renderZodiacSign(index))}

      {/* Planets */}
      {Object.entries(horoscope.CelestialBodies)
        .slice(0, 11)
        .filter(([key]) => key !== 'all' && horoscope.CelestialBodies[key]?.ChartPosition?.Ecliptic)
        .map(([planet, data]) => renderPlanet(planet, data))}
    </div>
  );
};

export default BirthChartSVG;

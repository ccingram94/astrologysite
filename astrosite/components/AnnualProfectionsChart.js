import React from 'react';
import { format, differenceInYears } from 'date-fns';

const planetSymbols = {
  'Sun': '☉',
  'Moon': '☽',
  'Mercury': '☿',
  'Venus': '♀',
  'Mars': '♂',
  'Jupiter': '♃',
  'Saturn': '♄'
};

const AnnualProfectionsChart = ({
  width = 800,
  height = 800,
  outerColor = 'white',
  innerColor = 'white',
  strokeColor = 'black',
  strokeWidth = 1,
  ascendantSign,
  zodiacSigns,
  birthDate,
  profectedSign,
  profectedHouse,
  profectedRuler
}) => {
  // Basic dimensions
  const centerX = width / 2;
  const centerY = height / 2;
  const outerRadius = (Math.min(width, height) / 2) - 30;
  const innerRadius = outerRadius * 0.65;

  // Create distinct sections for zodiac signs and houses
  const zodiacSectionWidth = (outerRadius - innerRadius) * 0.3;
  const houseSectionWidth = (outerRadius - innerRadius) * 0.3;
  const spacingWidth = (outerRadius - innerRadius) * 0.4;

  // Calculate the radii for each section
  const zodiacOuterRadius = outerRadius;
  const zodiacInnerRadius = zodiacOuterRadius - zodiacSectionWidth;
  const houseOuterRadius = zodiacInnerRadius - spacingWidth;
  const houseInnerRadius = houseOuterRadius - houseSectionWidth;

  // Text radius calculations
  const zodiacTextRadius = zodiacOuterRadius - (zodiacSectionWidth / 2);
  const houseTextRadius = zodiacOuterRadius - spacingWidth;

  // Age circle calculations
  const totalSpace = innerRadius * 0.75;
  const spacing = totalSpace / 10;

  // Current Age calculation
  const currentAge = differenceInYears(new Date(), birthDate);
  

  // Section calculations
  const SECTION_RATIOS = {
    zodiac: 0.3,
    spacing: 0.4,
    house: 0.3
  };

  // Radius calculations for main sections
const radii = {
  zodiac: {
    outer: outerRadius,
    inner: outerRadius * 0.9,
    text: outerRadius * 0.95
  },
  house: {
    outer: outerRadius * 0.9,
    inner: outerRadius * 0.8,
    text: outerRadius * 0.85
  },
  ages: {
    start: outerRadius * 0.3, // Starting radius for age circles
    spacing: outerRadius * 0.05 // Spacing between age circles
  }
};

  // Age circle calculations
  const baseSpacing = (radii.house.inner * 0.75) / 10;


  const houses = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'];

  const getOrderedSigns = () => {
    if (!ascendantSign || !zodiacSigns) return [];
    
    const orderedSignNames = [
      'Aries', 'Taurus', 'Gemini', 'Cancer', 
      'Leo', 'Virgo', 'Libra', 'Scorpio', 
      'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
    ];

    const ascIndex = orderedSignNames.findIndex(name => name === ascendantSign);
    const reorderedNames = [
      ...orderedSignNames.slice(ascIndex),
      ...orderedSignNames.slice(0, ascIndex)
    ];

    return reorderedNames.map(name => 
      Object.values(zodiacSigns).find(sign => sign.name === name)
    );
  };

  const calculatePosition = (radius, index, offset = -195) => {
    const angle = ((-index * 30) + offset) * (Math.PI / 180); // Added negative sign
    return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle)
    };
};

  // Generate components functions remain the same but use the new radius calculations
  const generateHouseNames = () => {
    return houses.map((house, i) => {
      const pos = calculatePosition(radii.house.text, i);
      return (
        <text
          key={`house-${i}`}
          x={pos.x}
          y={pos.y}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="12"
          className='font-semibold'
          fill='fill-neutral'
        >
          {house}
        </text>
      );
    });
  };

  const generateAges = () => {
    const ages = [];
    const numberOfCircles = 7;
    const spacing = radii.house.inner * 0.1;
    const startRadius = radii.house.inner * 0.3;
  
    for (let circle = 0; circle < numberOfCircles; circle++) {
        const currentRadius = startRadius + (circle * spacing);
        
        for (let i = 0; i < 12; i++) {
            const ageNum = i + (circle * 12);
            
            const angle = ((-i * 30) - 195) * (Math.PI / 180); // Added negative sign
            const textX = centerX + (currentRadius + 10) * Math.cos(angle);
            const textY = centerY + (currentRadius + 10) * Math.sin(angle);
            
            ages.push(
                <text
                    key={`age-${circle}-${i}`}
                    x={textX}
                    y={textY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="10"
                    fill={strokeColor}
                >
                    {ageNum}
                </text>
            );
    
            const lineAngle = ((-i * 30) - 90) * (Math.PI / 180); // Added negative sign
            const nextRadius = circle < numberOfCircles - 1 
                ? startRadius + ((circle + 1) * spacing)
                : currentRadius + spacing;
    
            ages.push(
                <line
                    key={`age-line-${circle}-${i}`}
                    x1={centerX + currentRadius * Math.cos(lineAngle)}
                    y1={centerY + currentRadius * Math.sin(lineAngle)}
                    x2={centerX + nextRadius * Math.cos(lineAngle)}
                    y2={centerY + nextRadius * Math.sin(lineAngle)}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                />
            );
        }
    
        ages.push(
            <circle
                key={`age-circle-${circle}`}
                cx={centerX}
                cy={centerY}
                r={currentRadius}
                fill="none"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
            />
        );
    }
    
    return ages;
};

  

  const generateSegments = () => {
    const segments = [];
    const orderedSigns = getOrderedSigns();
  
    for (let i = 0; i < 12; i++) {
        const angle = ((-i * 30) - 90) * (Math.PI / 180); // Added negative sign
        
        // Draw lines for zodiac section
        segments.push(
            <line
                key={`zodiac-segment-${i}`}
                x1={centerX + radii.zodiac.outer * Math.cos(angle)}
                y1={centerY + radii.zodiac.outer * Math.sin(angle)}
                x2={centerX + radii.zodiac.inner * Math.cos(angle)}
                y2={centerY + radii.zodiac.inner * Math.sin(angle)}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
            />
        );

        // Draw lines for house section
        segments.push(
            <line
                key={`house-segment-${i}`}
                x1={centerX + radii.house.outer * Math.cos(angle)}
                y1={centerY + radii.house.outer * Math.sin(angle)}
                x2={centerX + radii.house.inner * Math.cos(angle)}
                y2={centerY + radii.house.inner * Math.sin(angle)}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
            />
        );

        if (orderedSigns.length === 12) {
            const textAngle = ((-i * 30) - 195) * (Math.PI / 180); // Added negative sign
            const textX = centerX + radii.zodiac.text * Math.cos(textAngle);
            const textY = centerY + radii.zodiac.text * Math.sin(textAngle);
            
            segments.push(
                <text
                    key={`sign-${i}`}
                    x={textX}
                    y={textY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="13"
                    fill="fill-neutral"
                    dangerouslySetInnerHTML={{ __html: orderedSigns[i].symbol }}
                />
            );
        }
    }
    return segments;
};

  
const generatePlanetaryRulers = () => {
  const rulers = [];
  const orderedSigns = getOrderedSigns();
  const rulerRadius = radii.house.inner * 1.35;
  
  for (let i = 0; i < 12; i++) {
      const currentSign = orderedSigns[i];
      const rulingPlanet = Array.isArray(currentSign.rulingPlanet) 
          ? currentSign.rulingPlanet[1]
          : currentSign.rulingPlanet;
      
      const angle = ((-i * 30) - 195) * (Math.PI / 180); // Added negative sign
      const textX = centerX + (rulerRadius - 10) * Math.cos(angle);
      const textY = centerY + (rulerRadius - 10) * Math.sin(angle);
      
      rulers.push(
          <text
              key={`ruler-${i}`}
              x={textX}
              y={textY}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="18"
              fill="fill-neutral"
          >
              {planetSymbols[rulingPlanet]}
          </text>
      );
  
      const lineAngle = ((-i * 30) - 90) * (Math.PI / 180); // Added negative sign
      rulers.push(
          <line
              key={`ruler-line-${i}`}
              x1={centerX + rulerRadius * Math.cos(lineAngle)}
              y1={centerY + rulerRadius * Math.sin(lineAngle)}
              x2={centerX + (rulerRadius * 0.85) * Math.cos(lineAngle)}
              y2={centerY + (rulerRadius * 0.85) * Math.sin(lineAngle)}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
          />
      );
  }

  rulers.push(
      <circle
          key="ruler-circle"
          cx={centerX}
          cy={centerY}
          r={rulerRadius}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
      />
  );
  
  return rulers;
};

  

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', aspectRatio: '1 / 1' }}>
      <svg 
        width={width} 
        height={height} 
        viewBox={`0 0 ${width} ${height}`}
        style={{ backgroundColor: 'transparent' }}
      >
        {/* Main circles */}
        {Object.values(radii).map((section, i) => (
          <React.Fragment key={i}>
            <circle cx={centerX} cy={centerY} r={section.outer} 
                    fill={outerColor} stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx={centerX} cy={centerY} r={section.inner} 
                    fill={innerColor} stroke={strokeColor} strokeWidth={strokeWidth} />
          </React.Fragment>
        ))}


        {/* Rest of the elements */}
        <g>{generateSegments()}</g>
        <g>{generateHouseNames()}</g>
        <g>{generatePlanetaryRulers()}</g>
        <g>{generateAges()}</g>
        
      {/* Center text for profected sign and ruler */}
      <text
        x={centerX}
        y={centerY - 30} 
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="16"
        fill="text-neutral"
        fontWeight="bold"
      >
        {profectedSign}
      </text>
      <text
        x={centerX}
        y={centerY} 
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="24"
        fill={strokeColor}
        fontWeight="bold"
      >
        {planetSymbols[profectedRuler] || profectedRuler}
      </text>
      <text
        x={centerX}
        y={centerY + 25}  // Positioned below other elements
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="12"
        fill="text-neutral"
        fontWeight="bold"
      >
        {profectedHouse} House
      </text>
      <text
        x={centerX}
        y={centerY + 40}  // Positioned above other elements
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="12"
        fill="text-neutral"
        fontWeight="bold"
      >
        Age {differenceInYears(new Date(), birthDate)}
      </text>
      </svg>
    </div>
  );
};

export default AnnualProfectionsChart;
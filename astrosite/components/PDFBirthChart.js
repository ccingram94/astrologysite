'use client'
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image, Svg, Circle, Line, Path, G, Text as SvgText } from '@react-pdf/renderer';
import { format } from 'date-fns';
import zodiacSigns from '../data/zodiacsigns';
import { getDescendant, getImumCoeli, getSignFromDD, modulo } from '../utils';
import { findAspectsPDF, generateAspectLines, groupAspectsByType } from '../utils/calculateAspectPDF';


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

const zodiacIcons = {
  aries: { uri: `${baseUrl}/aries.png` },
  taurus: { uri: `${baseUrl}/taurus.png` },
  gemini: { uri: `${baseUrl}/gemini.png` },
  cancer: { uri: `${baseUrl}/cancer.png` },
  leo: { uri: `${baseUrl}/leo.png` },
  virgo: { uri: `${baseUrl}/virgo.png` },
  libra: { uri: `${baseUrl}/libra.png` },
  scorpio: { uri: `${baseUrl}/scorpio.png` },
  sagittarius: { uri: `${baseUrl}/sagittarius.png` },
  capricorn: { uri: `${baseUrl}/capricorn.png` },
  aquarius: { uri: `${baseUrl}/aquarius.png` },
  pisces: { uri: `${baseUrl}/pisces.png` },
};

const planetIcons = {
  sun: { uri: `${baseUrl}/sun.png` },
  moon: { uri: `${baseUrl}/moon.png` },
  mercury: { uri: `${baseUrl}/mercury.png` },
  venus: { uri: `${baseUrl}/venus.png` },
  mars: { uri: `${baseUrl}/mars.png` },
  jupiter: { uri: `${baseUrl}/jupiter.png` },
  saturn: { uri: `${baseUrl}/saturn.png` },
  uranus: { uri: `${baseUrl}/uranus.png` },
  neptune: { uri: `${baseUrl}/neptune.png` },
  pluto: { uri: `${baseUrl}/pluto.png` },
};

// Montserrat for primary text
Font.register({
  family: 'Montserrat',
  fonts: [
    { src: '/fonts/Montserrat-Regular.ttf' },
    { src: '/fonts/Montserrat-Bold.ttf', fontWeight: 700 },
    { src: '/fonts//Montserrat-Light.ttf', fontWeight: 300 },
  ],
});

// Lato for normal text 
Font.register({
  family: 'Lato',
  fonts: [
    { src: '/fonts/Lato-Regular.ttf' },
    { src: '/fonts/Lato-Bold.ttf', fontWeight: 700 },
  ],
});


const styles = StyleSheet.create({
  chartContainer: {
    width: '100%',
    marginVertical: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  zodiacIcon: {
    width: 24,
    height: 24,
  },
  planetIcon: {
    width: 16,
    height: 16,
  },
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 40,
    fontFamily: 'Lato',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  titleSection: {
    margin: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',    
    justifyContent: 'center' 
  },
  placementsSection: {
    margin: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',    
    justifyContent: 'center' 
  },
  reportTitle: {
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 20,
    color: '#D2AE3C',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: 1,
  },
  reportSubtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    maxWidth: '75%',
    color: 'rgba(210, 174, 60, 0.8)',
    fontFamily: 'Montserrat',
    fontWeight: 300,
    letterSpacing: 0.5,
  },
  placementsTitle: {
    fontSize: 36,
    marginBottom: 15,
    color: '#D2AE3C',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: 0.5,
  },
  placementsText: {
    fontSize: 16,
    marginBottom: 12,
    color: '#2A303C',
    lineHeight: 1.5,
  },
  sectionTitle: {
    fontSize: 18,
    marginTop: 15,
    marginBottom: 15,
    color: '#D2AE3C',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: 0.5,
  },
  text: {
    fontSize: 13,
    marginBottom: 8,
    color: '#2A303C',
    lineHeight: 1.4,
  },
  table: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F3EACE',
    minHeight: 35,
    alignItems: 'center',
  },
  tableHeader: {
    backgroundColor: '#F3EACE',
  },
  tableHeaderCell: {
    padding: 8,
    fontSize: 14,
    fontWeight: 700,
    color: '#D2AE3C',
    fontFamily: 'Montserrat',
  },
  tableCell: {
    padding: 8,
    fontSize: 13,
    color: '#2A303C',
  },
  columnPlanet: {
    width: '25%',
  },
  columnPosition: {
    width: '40%',
  },
  columnHouse: {
    width: '35%',
  },
  columnHouseCusp: {
    width: '40%',
  },
  columnSign: {
    width: '60%',
  },
});


const PDFBirthChart = ({ horoscope, chartData }) => {
  const planets = Object.entries(horoscope.CelestialBodies)
    .filter(([key]) => key !== 'all')
    .slice(0, 11); 

  const celestialBodies = Object.entries(horoscope.CelestialBodies)
  .filter(([key]) => key !== 'all')
  .map(([_, data]) => data);
  
  const aspects = findAspectsPDF(celestialBodies);
  const aspectLines = generateAspectLines(aspects);

    const renderZodiacSign = (index) => {
      const signs = [
        'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
        'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'
      ];
      
    // Start at 180 degrees (left side) and rotate counterclockwise
    const angle = (((index * 30 + 180 + 15) * Math.PI) / 180);
    const radius = 220;
    const x = Number.isFinite(angle) ? 250 + Math.cos(angle) * radius - 12 : 250;
    const y = Number.isFinite(angle) ? 250 - Math.sin(angle) * radius - 12 : 250; // Note the negative
      
      if (!Number.isFinite(x) || !Number.isFinite(y)) {
        console.warn(`Invalid coordinates for zodiac sign ${signs[index]}`);
        return null;
      }
    
      return (
        <Image
          style={styles.zodiacIcon}
          key={`zodiac-${index}`}
          source={zodiacIcons[signs[index]]}
          x={x}
          y={y}
          width={24}
          height={24}
          cache={true}
        />
      );
    };

    const renderDegreeMarkers = () => {
      const markers = [];
      for (let i = 0; i < 360; i++) {
        // Convert degree to radians, adjust by 180 to start from left
        const angle = ((i + 180) * Math.PI) / 180;
        
        // Determine marker properties based on position
        let length = 10; // Default length for normal degree markers
        let strokeWidth = 0.5; // Default stroke width
        
        // Check if it's a decan marker (every 10 degrees within each sign)
        if (i % 10 === 0) {
          length = 20; // Twice as long as term markers
          strokeWidth = 1; // Twice the stroke width
        }
        // Check if it's a term marker (every 5 degrees)
        else if (i % 5 === 0) {
          length = 10; // Same as normal markers but thicker
          strokeWidth = 1; // Twice the stroke width
        }
    
        // Calculate start and end points for the marker
        const innerRadius = 200; // Radius of inner circle
        const x1 = 250 + Math.cos(angle) * innerRadius;
        const y1 = 250 - Math.sin(angle) * innerRadius;
        const x2 = 250 + Math.cos(angle) * (innerRadius - length);
        const y2 = 250 - Math.sin(angle) * (innerRadius - length);
    
        markers.push(
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
      }
      return markers;
    };    
    
    const renderPlanet = (planet, data) => {
      if (!data?.ChartPosition?.Ecliptic?.DecimalDegrees) {
        console.warn(`Missing position data for planet ${planet}`);
        return null;
      }
    
       // Adjust angle calculation to start from left and go counterclockwise
      const angle = ((data.ChartPosition.Ecliptic.DecimalDegrees + 180) * Math.PI) / 180;
      const radius = 170;
      const x = Number.isFinite(angle) ? 250 + Math.cos(angle) * radius - 12 : 250;
      const y = Number.isFinite(angle) ? 250 - Math.sin(angle) * radius - 12 : 250; // Note the negative
    
      if (!Number.isFinite(x) || !Number.isFinite(y)) {
        console.warn(`Invalid coordinates for planet ${planet}`);
        return null;
      }
    
      return (
        <Image
          style={styles.planetIcon}
          key={`planet-${planet}`}
          source={planetIcons[planet]}
          x={x}
          y={y}
          width={24}
          height={24}
          cache={true}
        />
      );
    };
    
    

  return (
    <Document>
    <Page size="A4" style={styles.page}>
      {/* Title section remains the same */}
      <View style={styles.titleSection}>
        <Text style={styles.reportTitle}>Birth Chart</Text>
        <Text style={styles.reportSubtitle}>
          {format(horoscope.origin.utcTimeFormatted, 'PPP')} at {chartData.birthTime}
        </Text>
        <Text style={styles.reportSubtitle}>{chartData.birthLocation.label}</Text>
      </View>
      {/* Chart SVG Section */}
      <View style={styles.chartContainer}>
      <Svg width={500} height={500} viewBox="0 0 500 500">
        {/* Outer circle - #D2AE3C */}
        <Circle
          cx={250}
          cy={250}
          r={240}
          stroke="#D2AE3C"
          strokeWidth={1}
          fill="none"
        />

        {/* Inner circle - #F3EBCD */}
        <Circle
          cx={250}
          cy={250}
          r={200}
          stroke="#F3EBCD"
          strokeWidth={1}
          fill="none"
        />

        {/* House circle - #F3EBCD */}
        <Circle
          cx={250}
          cy={250}
          r={100}
          stroke="#F3EBCD"
          strokeWidth={1}
          fill="none"
        />

        {/* Draw house lines - #F3EBCD */}
        {horoscope.Houses.map((house, index) => {
          const angle = (house.ChartPosition.StartPosition.Ecliptic.DecimalDegrees + 180) * Math.PI / 180;
          const x1 = 250 + Math.cos(angle) * 100;
          const y1 = 250 - Math.sin(angle) * 100; // Note the negative 
          const x2 = 250 + Math.cos(angle) * 240;
          const y2 = 250 - Math.sin(angle) * 240; // Note the negative 

          return (
            <Line
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

        {/* aspect lines here */}
        {aspectLines.map((line) => (
          <Line
            key={line.key}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={line.stroke}
            strokeWidth={line.strokeWidth}
          />
        ))}

        <G>{renderDegreeMarkers()}</G>

        {/* Add house numbers */}
        {horoscope.Houses.map((house, index) => {
          // Get the start position of the current house and the next house
          const currentHouseStart = house.ChartPosition.StartPosition.Ecliptic.DecimalDegrees;
          const nextHouseStart = horoscope.Houses[(index + 1) % 12]?.ChartPosition.StartPosition.Ecliptic.DecimalDegrees;
          
          // Calculate the middle position
          // Adjust the angle by adding 180 to match traditional chart layout
          // Handle the case where we cross over 360 degrees
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
          const y = 250 + Math.sin(middleAngle) * radius + 5; // Removed the negative

          return (
            <SvgText
              key={`house-number-${index}`}
              x={x}
              y={y}
              fontSize={12}
              textAnchor="middle"
              alignmentBaseline="middle"
              fill="#D2AE3C"
            >
              {index + 1}
            </SvgText>
          );
        })}

        {/* For planet symbols */}
        {Object.entries(horoscope.CelestialBodies)
              .slice(0, 11)
              .filter(([key]) => key !== 'all' && horoscope.CelestialBodies[key]?.ChartPosition?.Ecliptic)
              .map(([planet, data]) => renderPlanet(planet, data))}

          {/* Add zodiac sign background sections */}
          {Array.from({ length: 12 }).map((_, index) => {
            const getModality = (index) => {
              if (index % 3 === 0) return "#E7D79C";
              if (index % 3 === 1) return "#EBDEAD";
              return "#EFE4BD";
            };

            const startAngle = ((-index * 30 + 90) * Math.PI) / 180;
            const endAngle = ((-(index + 1) * 30 + 90) * Math.PI) / 180;
            
            // Points for outer arc (r=240)
            const outerX1 = 250 + Math.cos(startAngle) * 240;
            const outerY1 = 250 + Math.sin(startAngle) * 240;
            const outerX2 = 250 + Math.cos(endAngle) * 240;
            const outerY2 = 250 + Math.sin(endAngle) * 240;
            
            // Points for inner arc (r=200)
            const innerX1 = 250 + Math.cos(startAngle) * 200;
            const innerY1 = 250 + Math.sin(startAngle) * 200;
            const innerX2 = 250 + Math.cos(endAngle) * 200;
            const innerY2 = 250 + Math.sin(endAngle) * 200;
            
            // Create the path for the section between the two circles
            const pathData = `
              M ${outerX1} ${outerY1}
              A 240 240 0 0 0 ${outerX2} ${outerY2}
              L ${innerX2} ${innerY2}
              A 200 200 0 0 1 ${innerX1} ${innerY1}
              Z
            `;

            return (
              <Path
                key={`zodiac-section-${index}`}
                d={pathData}
                fill={getModality(index)}
                stroke="none"
              />
            );
          })}


          {/* Add zodiac symbols */}
          {Array.from({ length: 12 }).map((_, index) => renderZodiacSign(index))}

          {/* Add planets */}
          {Object.entries(horoscope.CelestialBodies)
            .slice(0, 11)
            .filter(([key]) => key !== 'all' && horoscope.CelestialBodies[key]?.ChartPosition?.Ecliptic)
            .map(([planet, data]) => renderPlanet(planet, data))}

        </Svg>
      </View>
      <View style={styles.placementsSection}>
        <Text style={styles.placementsTitle}>Angles</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={[styles.tableHeaderCell, styles.columnHouseCusp]}>Angle</Text>
            <Text style={[styles.tableHeaderCell, styles.columnSign]}>Position</Text>
          </View>
          {[
            { key: 'Ascendant', label: 'Ascendant (ASC)' },
            { key: 'Midheaven', label: 'Midheaven (MC)' },
          ].map((angle) => (
            <View style={styles.tableRow} key={angle.key}>
              <Text style={[styles.tableCell, styles.columnHouseCusp]}>
                {angle.label}
              </Text>
              <Text style={[styles.tableCell, styles.columnSign]}>
                {angle.getPosition 
                  ? angle.getPosition()
                  : `${horoscope[angle.key].ChartPosition.Ecliptic.ArcDegreesFormatted30} ${horoscope[angle.key].Sign.label}`
                }
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.placementsSection}>
        <Text style={styles.placementsTitle}>Big Three</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={[styles.tableHeaderCell, styles.columnHouseCusp]}>Point</Text>
            <Text style={[styles.tableHeaderCell, styles.columnSign]}>Position</Text>
          </View>
          {[
            { key: 'Sun Sign', icon: '/sun.svg', data: `${horoscope.CelestialBodies.sun.ChartPosition.Ecliptic.ArcDegreesFormatted30} ${horoscope.CelestialBodies.sun.Sign.label} ` },
            { key: 'Moon Sign', icon: '/sun.svg', data: `${horoscope.CelestialBodies.moon.ChartPosition.Ecliptic.ArcDegreesFormatted30} ${horoscope.CelestialBodies.moon.Sign.label} ` },
            { key: 'Rising Sign', icon: '/sun.svg', data: `${horoscope.Ascendant.ChartPosition.Ecliptic.ArcDegreesFormatted30}  ${ horoscope.Ascendant.Sign.label }` },
          ].map((placement) => (
            <View style={styles.tableRow} key={placement.key}>
              <Text style={[styles.tableCell, styles.columnHouseCusp]}>
                {placement.key}
              </Text>
              <Text style={[styles.tableCell, styles.columnSign]}>
                {placement.data}
              </Text>
          </View>
          ))}
        </View>
      </View>
    </Page>
    
    <Page size="A4" style={styles.page}>
      <View style={styles.placementsSection}>
        <Text style={styles.placementsTitle}>Planets</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={[styles.tableHeaderCell, styles.columnPlanet]}>Planet</Text>
            <Text style={[styles.tableHeaderCell, styles.columnPosition]}>Sign</Text>
            <Text style={[styles.tableHeaderCell, styles.columnPosition]}>Degree</Text>
            <Text style={[styles.tableHeaderCell, styles.columnHouse]}>House</Text>
          </View>
          {[
            'sun',
            'moon',
            'mercury',
            'venus',
            'mars',
            'jupiter',
            'saturn',
            'uranus',
            'neptune',
            'pluto'
          ].map((planet) => (
            <View style={styles.tableRow} key={planet}>
              <Text style={[styles.tableCell, styles.columnPlanet]}>
                {planet.charAt(0).toUpperCase() + planet.slice(1)}
              </Text>
              <Text style={[styles.tableCell, styles.columnPosition]}>
                {`${horoscope.CelestialBodies[planet].Sign.label}`}
              </Text>
              <Text style={[styles.tableCell, styles.columnPosition]}>
                {`${horoscope.CelestialBodies[planet].ChartPosition.Ecliptic.ArcDegreesFormatted30}`}
              </Text>
              <Text style={[styles.tableCell, styles.columnHouse]}>
                {horoscope.CelestialBodies[planet].House?.label}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      <View style={styles.placementsSection}>
        <Text style={styles.placementsTitle}>Houses</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={[styles.tableHeaderCell, styles.columnHouseCusp]}>House</Text>
            <Text style={[styles.tableHeaderCell, styles.columnSign]}>Cusp</Text>
            <Text style={[styles.tableHeaderCell, styles.columnSign]}>Ruler</Text>
          </View>
          {horoscope.Houses.map((house, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={[styles.tableCell, styles.columnHouseCusp]}>{house.label} House</Text>
              <Text style={[styles.tableCell, styles.columnSign]}>
                {`${house.ChartPosition.StartPosition.Ecliptic.ArcDegreesFormatted30} ${house.Sign.label}`}
              </Text>
              <Text style={[styles.tableCell, styles.columnSign]}>
                { Array.isArray(zodiacSigns[house.Sign.key].rulingPlanet) ? `${zodiacSigns[house.Sign.key].rulingPlanet[1]} (Traditional), ${zodiacSigns[house.Sign.key].rulingPlanet[0]} (Modern)` : zodiacSigns[house.Sign.key].rulingPlanet }
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      <View style={styles.placementsSection}>
        <Text style={styles.placementsTitle}>Major Aspects</Text>
      </View>
    </Page>

    {/* Major Aspects */}
    {['conjunction', 'opposition', 'square', 'trine', 'sextile'].map((aspectType, index) => (
      horoscope.Aspects.types[aspectType]?.length > 0 && (
        <Page size="A4" style={styles.page} key={index}>
          <View style={styles.placementsSection}>
            <Text style={styles.sectionTitle}>
              {aspectType.charAt(0).toUpperCase() + aspectType.slice(1)}
            </Text>
            <View style={styles.table}>
              <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={[styles.tableHeaderCell, styles.columnHouseCusp]}>Point 1</Text>
                <Text style={[styles.tableHeaderCell, styles.columnSign]}>Aspect</Text>
                <Text style={[styles.tableHeaderCell, styles.columnSign]}>Point 2</Text>
                <Text style={[styles.tableHeaderCell, styles.columnSign]}>Orb</Text>
              </View>
              {horoscope.Aspects.types[aspectType].map((aspect, index) => (
                <View style={styles.tableRow} key={index}>
                  <Text style={[styles.tableCell, styles.columnHouseCusp]}>{aspect.point1Label}</Text>
                  <Text style={[styles.tableCell, styles.columnSign]}>{aspectType}</Text>
                  <Text style={[styles.tableCell, styles.columnSign]}>{aspect.point2Label}</Text>
                  <Text style={[styles.tableCell, styles.columnSign]}>{aspect.orb.toFixed(1)}°</Text>
                </View>
              ))}
            </View>
          </View>
        </Page>
      )
    ))}   

    <Page size="A4" style={styles.page}>
      <View style={styles.placementsSection}>
        <Text style={styles.placementsTitle}>Minor Aspects</Text>
      </View>
    </Page>

    {/* Minor Aspects */}
    {['quincunx', 'quintile', 'semi-square', 'semi-sextile', 'septile'].map((aspectType, index) => (
      horoscope.Aspects.types[aspectType]?.length > 0 && (
        <Page size="A4" style={styles.page} key={index}>
          <View style={styles.placementsSection}>
            <Text style={styles.sectionTitle}>
              {aspectType.charAt(0).toUpperCase() + aspectType.slice(1).replace('-', ' ')}s
            </Text>
            <View style={styles.table}>
              <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={[styles.tableHeaderCell, styles.columnHouseCusp]}>Point 1</Text>
                <Text style={[styles.tableHeaderCell, styles.columnSign]}>Aspect</Text>
                <Text style={[styles.tableHeaderCell, styles.columnSign]}>Point 2</Text>
                <Text style={[styles.tableHeaderCell, styles.columnSign]}>Orb</Text>
              </View>
              {horoscope.Aspects.types[aspectType].map((aspect, index) => (
                <View style={styles.tableRow} key={index}>
                  <Text style={[styles.tableCell, styles.columnHouseCusp]}>{aspect.point1Label}</Text>
                  <Text style={[styles.tableCell, styles.columnSign]}>{aspectType.replace('-', ' ')}</Text>
                  <Text style={[styles.tableCell, styles.columnSign]}>{aspect.point2Label}</Text>
                  <Text style={[styles.tableCell, styles.columnSign]}>{aspect.orb.toFixed(1)}°</Text>
                </View>
              ))}
            </View>
          </View>
        </Page>
      )
    ))}

  </Document>
  )
};

export default PDFBirthChart;
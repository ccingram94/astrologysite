'use client'
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image, Svg, Circle, Line, Path, G, Text as SvgText } from '@react-pdf/renderer';
import { format } from 'date-fns';
import zodiacSigns from '../data/zodiacsigns';
import { getSignFromDD, modulo } from '../utils';
import calculateDescendant from '../utils/calculateDescendant';
import calculateImumCoeli from '../utils/calculateImumCoeli';
import { findAspectsPDF, generateAspectLines, groupAspectsByType } from '../utils/calculateAspectPDF';


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

const zodiacIcons = {
  aries: { uri: `${baseUrl}/ariesgold.png` },
  taurus: { uri: `${baseUrl}/taurusgold.png` },
  gemini: { uri: `${baseUrl}/geminigold.png` },
  cancer: { uri: `${baseUrl}/cancergold.png` },
  leo: { uri: `${baseUrl}/leogold.png` },
  virgo: { uri: `${baseUrl}/virgogold.png` },
  libra: { uri: `${baseUrl}/libragold.png` },
  scorpio: { uri: `${baseUrl}/scorpiogold.png` },
  sagittarius: { uri: `${baseUrl}/sagittariusgold.png` },
  capricorn: { uri: `${baseUrl}/capricorngold.png` },
  aquarius: { uri: `${baseUrl}/aquariusgold.png` },
  pisces: { uri: `${baseUrl}/piscesgold.png` },
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

const planetIconsGold = {
  sun: { uri: `${baseUrl}/sungold.png` },
  moon: { uri: `${baseUrl}/moongold.png` },
  mercury: { uri: `${baseUrl}/mercurygold.png` },
  venus: { uri: `${baseUrl}/venusgold.png` },
  mars: { uri: `${baseUrl}/marsgold.png` },
  jupiter: { uri: `${baseUrl}/jupitergold.png` },
  saturn: { uri: `${baseUrl}/saturngold.png` },
  uranus: { uri: `${baseUrl}/uranusgold.png` },
  neptune: { uri: `${baseUrl}/neptunegold.png` },
  pluto: { uri: `${baseUrl}/plutogold.png` },
};

const angleIcons = {
  ascendant: { uri: `${baseUrl}/ascendantgold.png` },
  descendant: { uri: `${baseUrl}/descendantgold.png` },
  midheaven: { uri: `${baseUrl}/midheavengold.png` },
  imumcoeli: { uri: `${baseUrl}/imumcoeligold.png` },
}

const aspectIcons = {
  conjunction: { uri: `${baseUrl}/conjunctiongold.png` },
  opposition: { uri: `${baseUrl}/oppositiongold.png` },
  square: { uri: `${baseUrl}/squaregold.png` },
  trine: { uri: `${baseUrl}/trinegold.png` },
  sextile: { uri: `${baseUrl}/sextilegold.png` },
  quincunx: { uri: `${baseUrl}/quincunxgold.png` },
  quintile: { uri: `${baseUrl}/quintilegold.png` },
  'semi-square': { uri: `${baseUrl}/semisquaregold.png` },
  'semi-sextile': { uri: `${baseUrl}/semisextilegold.png` },
  septile: { uri: `${baseUrl}/septilegold.png` },
}

'quincunx', 'quintile', 'semi-square', 'semi-sextile', 'septile'

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
  firstPage: {
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
  displayIconAndText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    borderCollapse: 'collapse',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F3EACE',
    minHeight: 35,
    alignItems: 'center',
    paddingVertical: 8,
  },
  tableCell: {
    fontSize: 10,
    color: '#2A303C',
    padding: 4,
  },
  planetColumn: {
    width: '25%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  signColumn: {
    width: '25%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  degreeColumn: {
    width: '30%',
  },
  houseColumn: {
    width: '20%',
  },
  houseNumberColumn: {
    width: '20%',
  },
  cuspColumn: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rulerColumn: {
    width: '40%',
  },
  iconContainer: {
    marginRight: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tableIcon: {
    width: 12,
    height: 12,
    marginRight: 4,
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
  // For the Planets table
  columnPlanet: {
    width: '25%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnSign: {
    width: '25%', // Increased from 25% to accommodate sign names
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnDegree: {
    width: '25%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnHouse: {
    width: '25%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  // For the Big Three table
  columnPoint: {
    width: '50%',
  },
  columnPosition: {
    width: '50%',
  },
  // For the Angles table
  columnHouseCusp: {
    width: '50%',
  },
  columnSign: {
    width: '50%',
  },
  // For the Houses table
  columnHouse: {
    width: '35%', // Increased from 25% to prevent wrapping
  },
  columnCusp: {
    width: '35%',
  },
  columnRuler: {
    width: '30%',
  },
});


const PDFBirthChart = ({ horoscope, chartData }) => {

  const birthDate = new Date(horoscope.origin.utcTimeFormatted);

  const descendant = calculateDescendant(
    birthDate,
    horoscope.origin.latitude,
    horoscope.origin.longitude,
  );
  
  const imumCoeli = calculateImumCoeli(
    birthDate,
    horoscope.origin.latitude,
    horoscope.origin.longitude,
  );

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
    <Page size="A4" style={styles.firstPage}>
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
              if (index % 3 === 0) return "#2A303C";
              if (index % 3 === 1) return "#2A303C";
              return "#2A303C";
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
    </Page>

    <Page size="A4" style={styles.page}>
    <View style={styles.placementsSection}>
      <Text style={styles.placementsTitle}>Angles</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableHeaderCell, styles.columnHouseCusp]}>Angle</Text>
          <Text style={[styles.tableHeaderCell, styles.columnSign]}>Position</Text>
        </View>
        {[
          { 
            key: 'Ascendant', 
            icon: angleIcons.ascendant, 
            label: 'Ascendant',
            useHoroscope: true 
          },
          { 
            key: 'Midheaven', 
            icon: angleIcons.midheaven, 
            label: 'Midheaven',
            useHoroscope: true 
          },
          { 
            key: 'Descendant', 
            icon: angleIcons.descendant, 
            label: 'Descendant',
            useHoroscope: false,
            getValue: () => descendant,
            getSign: () => getSignFromDD(descendant)
          },
          { 
            key: 'ImumCoeli', 
            icon: angleIcons.imumcoeli, 
            label: 'Imum Coeli',
            useHoroscope: false,
            getValue: () => imumCoeli,
            getSign: () => getSignFromDD(imumCoeli)
          },
        ].map((angle) => (
          <View style={styles.tableRow} key={angle.key}>
            <Image
              style={styles.tableIcon}
              source={angle.icon}
              cache={true}
            />
            <Text style={[styles.tableCell, styles.columnHouseCusp]}>
              {angle.label}
            </Text>
            <Image
              style={styles.tableIcon}
              source={zodiacIcons[
                angle.useHoroscope 
                  ? horoscope[angle.key].Sign.key
                  : angle.getSign().key.toLowerCase()
              ]}
              cache={true}
            />
            <Text style={[styles.tableCell, styles.columnSign]}>
              {angle.useHoroscope 
                ? `${horoscope[angle.key].ChartPosition.Ecliptic.ArcDegreesFormatted30} ${horoscope[angle.key].Sign.label}`
                : `${(angle.getValue() % 30).toFixed(2)}° ${getSignFromDD(angle.getValue())}`
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
            <Text style={[styles.tableHeaderCell, styles.columnPoint]}>Point</Text>
            <Text style={[styles.tableHeaderCell, styles.columnPosition]}>Position</Text>
          </View>
            {[
              { key: 'Sun Sign', icon: planetIconsGold.sun, sign: horoscope.CelestialBodies.sun.Sign.key, data: `${horoscope.CelestialBodies.sun.ChartPosition.Ecliptic.ArcDegreesFormatted30} ${horoscope.CelestialBodies.sun.Sign.label} ` },
              { key: 'Moon Sign', icon: planetIconsGold.moon, sign: horoscope.CelestialBodies.moon.Sign.key, data: `${horoscope.CelestialBodies.moon.ChartPosition.Ecliptic.ArcDegreesFormatted30} ${horoscope.CelestialBodies.moon.Sign.label} ` },
              { key: 'Rising (Ascendant)', icon: angleIcons.ascendant, sign: horoscope.Ascendant.Sign.key, data: `${horoscope.Ascendant.ChartPosition.Ecliptic.ArcDegreesFormatted30}  ${ horoscope.Ascendant.Sign.label }` },
            ].map((placement) => (
              <View style={styles.tableRow} key={placement.key}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%' }}>
                  <Image
                    style={styles.tableIcon}
                    source={placement.icon}
                    cache={true}
                  />
                  <Text style={styles.tableCell}>
                    {placement.key}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%' }}>
                  <Image
                    style={styles.tableIcon}
                    source={zodiacIcons[placement.sign]}
                    cache={true}
                  />
                  <Text style={[styles.tableCell, styles.columnSign]}>
                    {placement.data}
                  </Text>
                </View>
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
          <View style={{ width: '25%' }}>
            <Text style={[styles.tableHeaderCell]}>Planet</Text>
          </View>
          <View style={{ width: '25%' }}>
            <Text style={[styles.tableHeaderCell]}>Sign</Text>
          </View>
          <View style={{ width: '25%' }}>
            <Text style={[styles.tableHeaderCell]}>Degree</Text>
          </View>
          <View style={{ width: '30%' }}>
            <Text style={[styles.tableHeaderCell]}>House</Text>
          </View>
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
              <View style={{ flexDirection: 'row', alignItems: 'center', width: '25%' }}>
                <Image
                  style={styles.tableIcon}
                  source={planetIconsGold[planet]}
                  cache={true}
                />
                <Text style={styles.tableCell}>
                  {planet.charAt(0).toUpperCase() + planet.slice(1)}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', width: '25%' }}>
                <Image
                  style={styles.tableIcon}
                  source={zodiacIcons[horoscope.CelestialBodies[planet].Sign.key.toLowerCase()]}
                  cache={true}
                />
                <Text style={[styles.tableCell, styles.columnPosition]}>
                  {`${horoscope.CelestialBodies[planet].Sign.label}`}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', width: '25%' }}>
                <Text style={[styles.tableCell, styles.columnPosition]}>
                  {`${horoscope.CelestialBodies[planet].ChartPosition.Ecliptic.ArcDegreesFormatted30}`}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', width: '30%' }}>
                <Text style={[styles.tableCell, styles.columnHouse]}>
                  {horoscope.CelestialBodies[planet].House?.label}
                </Text>
              </View>
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
          <Text style={[styles.tableHeaderCell, styles.columnHouse]}>House</Text>
          <Text style={[styles.tableHeaderCell, styles.columnCusp]}>Cusp</Text>
          <Text style={[styles.tableHeaderCell, styles.columnRuler]}>Ruler</Text>
        </View>
          {horoscope.Houses.map((house, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={{ flexDirection: 'row', alignItems: 'center', width: '30%' }}>
                <Text style={[styles.tableCell, styles.columnHouseCusp]}>
                  {house.label}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', width: '30%' }}>
                <Image
                  style={styles.tableIcon}
                  source={zodiacIcons[house.Sign.key.toLowerCase()]}
                  cache={true}
                />
                <Text style={[styles.tableCell]}>
                  {`${house.ChartPosition.StartPosition.Ecliptic.ArcDegreesFormatted30} ${house.Sign.label}`}
                </Text>
              </View>
              <View style={{ width: '40%' }}>
                {Array.isArray(zodiacSigns[house.Sign.key].rulingPlanet) ? (
                  <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image
                        style={styles.tableIcon}
                        source={planetIconsGold[zodiacSigns[house.Sign.key].rulingPlanet[1].toLowerCase()]}
                        cache={true}
                      />
                      <Text style={[styles.tableCell]}>
                        {`${zodiacSigns[house.Sign.key].rulingPlanet[1]} (Traditional)`}
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image
                        style={styles.tableIcon}
                        source={planetIconsGold[zodiacSigns[house.Sign.key].rulingPlanet[0].toLowerCase()]}
                        cache={true}
                      />
                      <Text style={[styles.tableCell]}>
                        {`${zodiacSigns[house.Sign.key].rulingPlanet[0]} (Modern)`}
                      </Text>
                    </View>
                  </View>
                ) : (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                      style={styles.tableIcon}
                      source={planetIconsGold[zodiacSigns[house.Sign.key].rulingPlanet.toLowerCase()]}
                      cache={true}
                    />
                    <Text style={[styles.tableCell]}>
                      {zodiacSigns[house.Sign.key].rulingPlanet}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          ))}
        </View>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      <View style={styles.placementsSection}>
        <Text style={styles.placementsTitle}>Major Aspects</Text>
        {['conjunction', 'opposition', 'square', 'trine', 'sextile'].map((aspectType, index) => (
          horoscope.Aspects.types[aspectType]?.length > 0 && (
            <View style={styles.displayIconAndText} key={index}>
              <Image
                style={styles.tableIcon}
                source={aspectIcons[aspectType]}
                cache={true}
              />
              <Text style={styles.sectionTitle}>
                {horoscope.Aspects.types[aspectType].length} {aspectType.charAt(0).toUpperCase() + aspectType.slice(1)}s
              </Text>
            </View>
            )
        ))}   
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
                  <View style={[styles.tableCell, styles.columnSign]}>
                    <Image 
                      style={styles.tableIcon}
                      source={aspectIcons[aspectType]}
                      cache={true}
                    />
                  </View>
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
        {['quincunx', 'quintile', 'semi-square', 'semi-sextile', 'septile'].map((aspectType, index) => (
          horoscope.Aspects.types[aspectType]?.length > 0 && (
            <View style={styles.displayIconAndText} key={index}>
              <Image
                style={styles.tableIcon}
                source={aspectIcons[aspectType]}
                cache={true}
              />
              <Text style={styles.sectionTitle}>
                {horoscope.Aspects.types[aspectType].length} {aspectType.charAt(0).toUpperCase() + aspectType.slice(1)}s
              </Text>
            </View>
            )
        ))}   
      </View>
    </Page>

    {/* Minor Aspects */}
    {['quincunx', 'quintile', 'semi-square', 'semi-sextile', 'septile'].map((aspectType, index) => (
      horoscope.Aspects.types[aspectType]?.length > 0 && (
        <Page size="A4" style={styles.page} key={index}>
          <View style={styles.placementsSection}>
            <Text style={styles.sectionTitle}>
              {aspectType.charAt(0).toUpperCase() + aspectType.slice(1).replace('-', ' ')}
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
                  <View style={[styles.tableCell, styles.columnSign]}>
                    <Image 
                      style={styles.tableIcon}
                      source={aspectIcons[aspectType]}
                      cache={true}
                    />
                  </View>
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
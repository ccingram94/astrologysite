'use client'
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image, Svg, Circle, Line, Path, G, Text as SvgText } from '@react-pdf/renderer';
import { format } from 'date-fns';
import zodiacSigns from '../data/zodiacsigns';
import { getSignFromDD, modulo } from '../utils';
import calculateDescendant from '../utils/calculateDescendant';
import calculateImumCoeli from '../utils/calculateImumCoeli';
import { findAspectsPDF, generateAspectLines, groupAspectsByType, getAspectsByMajorMinorType } from '../utils/calculateAspectPDF';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

// Define icon collections
const zodiacIcons = {
  Aries: { uri: `${baseUrl}/ariesgold.png` },
  Taurus: { uri: `${baseUrl}/taurusgold.png` },
  Gemini: { uri: `${baseUrl}/geminigold.png` },
  Cancer: { uri: `${baseUrl}/cancergold.png` },
  Leo: { uri: `${baseUrl}/leogold.png` },
  Virgo: { uri: `${baseUrl}/virgogold.png` },
  Libra: { uri: `${baseUrl}/libragold.png` },
  Scorpio: { uri: `${baseUrl}/scorpiogold.png` },
  Sagittarius: { uri: `${baseUrl}/sagittariusgold.png` },
  Capricorn: { uri: `${baseUrl}/capricorngold.png` },
  Aquarius: { uri: `${baseUrl}/aquariusgold.png` },
  Pisces: { uri: `${baseUrl}/piscesgold.png` },
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
};

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
};

// Register fonts
Font.register({
  family: 'Montserrat',
  fonts: [
    { src: '/fonts/Montserrat-Regular.ttf' },
    { src: '/fonts/Montserrat-Bold.ttf', fontWeight: 700 },
    { src: '/fonts//Montserrat-Light.ttf', fontWeight: 300 },
  ],
});

Font.register({
  family: 'Lato',
  fonts: [
    { src: '/fonts/Lato-Regular.ttf' },
    { src: '/fonts/Lato-Bold.ttf', fontWeight: 700 },
  ],
});

// Define styles
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
  columnPlanet: {
    width: '25%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnSign: {
    width: '25%',
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
  columnPoint: {
    width: '50%',
  },
  columnPosition: {
    width: '50%',
  },
  columnHouseCusp: {
    width: '50%',
  },
  columnHouse: {
    width: '35%',
  },
  columnCusp: {
    width: '35%',
  },
  columnRuler: {
    width: '30%',
  },
});

const PDFBirthChart = ({ horoscope, chartData }) => {
  // Early return for empty data to prevent errors
  if (!horoscope || !chartData) {
    return (
      <Document>
        <Page size="A4">
          <View style={styles.section}>
            <Text>No data available</Text>
          </View>
        </Page>
      </Document>
    );
  }

  try {
    const birthDate = new Date(chartData.birthDate || Date.now());
    const descendant = horoscope.angles?.Descendant || 0;
    const imumCoeli = horoscope.angles?.ImumCoeli || 0;

    // Safely extract planets data
    const planets = Object.entries(horoscope.planets || {})
      .filter(([key]) => key !== 'all')
      .slice(0, 11);

    const celestialBodies = Object.entries(horoscope.planets || {})
      .filter(([key]) => key !== 'all')
      .map(([_, data]) => data);
    
    // Calculate aspects data
    const aspects = findAspectsPDF(celestialBodies);
    const aspectLines = generateAspectLines(aspects);

    // Get aspects grouped by major/minor type
    const aspectsByType = aspects.byType || getAspectsByMajorMinorType(aspects);

    // Define major and minor aspect types
    const majorAspectTypes = ['conjunction', 'opposition', 'square', 'trine', 'sextile'];
    const minorAspectTypes = ['quincunx', 'quintile', 'septile', 'semi-square', 'semi-sextile'];

    // Helper functions
    const getSignName = signKey => {
      if (!signKey) return "";
      // Capitalize first letter and ensure consistent format
      return signKey.charAt(0).toUpperCase() + signKey.slice(1).toLowerCase();
    };

    const getIconSource = (iconSet, key) => {
      if (!key) return null;
      const normalizedKey = key.toLowerCase();
      return iconSet[normalizedKey] || null;
    };

    // Function to safely get angle data
    const getAngleData = (key) => {
      return horoscope.angles?.[key] || { sign: "", degreeFormatted: "0°", degreeInSign: { degrees: 0, minutes: 0, seconds: 0 } };
    };

    // Render the chart
    return (
      <Document>
        {/* Title Page */}
        <Page size="A4" style={styles.firstPage}>
          <View style={styles.titleSection}>
            <Text style={styles.reportTitle}>Birth Chart</Text>
            <Text style={styles.reportSubtitle}>
              {format(birthDate, 'PPP')} at {chartData.birthTime || "Unknown"}
            </Text>
            <Text style={styles.reportSubtitle}>{chartData.birthLocation?.label || "Unknown Location"}</Text>
          </View>

          {/* Chart SVG Section */}
          <View style={styles.chartContainer}>
          <Svg width={500} height={500} viewBox="0 0 500 500">
            {/* Aspect lines between planets */}
            {aspectLines.map((line) => (
              <Line
                key={line.key}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke={line.stroke}
                strokeWidth={line.strokeWidth}
                strokeDasharray={line.strokeDasharray || "none"}
                strokeOpacity={0.7}
              />
            ))}

            {/* Outer circle */}
            <Circle cx={250} cy={250} r={240} stroke="#D2AE3C" strokeWidth={1} fill="none" />
            
            {/* Inner circle */}
            <Circle cx={250} cy={250} r={200} stroke="#F3EBCD" strokeWidth={1} fill="none" />
            
            {/* House circle */}
            <Circle cx={250} cy={250} r={100} stroke="#F3EBCD" strokeWidth={1} fill="none" />

            {/* House lines */}
            {Object.values(horoscope.houseCusps || {}).map((house, index) => {
              if (!house?.degree) return null;
              
              const angle = (house.degree + 180) * Math.PI / 180;
              const x1 = 250 + Math.cos(angle) * 100;
              const y1 = 250 - Math.sin(angle) * 100; 
              const x2 = 250 + Math.cos(angle) * 240;
              const y2 = 250 - Math.sin(angle) * 240;

              return (
                <Line
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

            {/* Degree markers */}
            <G>
              {Array.from({ length: 360 }).map((_, i) => {
                const angle = ((i + 180) * Math.PI) / 180;
                
                let length = 10;
                let strokeWidth = 0.5;
                
                if (i % 10 === 0) {
                  length = 20;
                  strokeWidth = 1;
                }
                else if (i % 5 === 0) {
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

            {/* Zodiac background sections */}
            {Array.from({ length: 12 }).map((_, index) => {
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
                  fill="#2A303C"
                  stroke="none"
                />
              );
            })}

            {/* House numbers */}
            {Object.entries(horoscope.houseCusps || {}).map(([key, house], index) => {
              if (!house?.degree) return null;
              
              // Get the next house's degree
              const houseKeys = Object.keys(horoscope.houseCusps);
              const nextHouseKey = houseKeys[(index + 1) % houseKeys.length];
              const nextHouse = horoscope.houseCusps[nextHouseKey];
              
              // Calculate middle position
              let middlePosition;
              if (nextHouse.degree < house.degree) {
                middlePosition = (house.degree + (nextHouse.degree + 360)) / 2;
                if (middlePosition >= 360) middlePosition -= 360;
              } else {
                middlePosition = (house.degree + nextHouse.degree) / 2;
              }
              
              const middleAngle = ((middlePosition + 180) * Math.PI) / 180;
              
              const radius = 110;
              const x = 250 + Math.cos(middleAngle) * radius;
              const y = 250 - Math.sin(middleAngle) * radius;
              
              return (
                <SvgText
                  key={`house-number-${index}`}
                  x={x}
                  y={y}
                  fontSize={12}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#D2AE3C"
                >
                  {house.key}
                </SvgText>
              );
            })}
          </Svg>

          {/* Add Zodiac signs - these need to be rendered as Images outside the SVG */}
          <View style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            {Array.from({ length: 12 }).map((_, index) => {
              const signs = [
                'ariesgold', 'taurusgold', 'geminigold', 'cancergold', 'leogold', 'virgogold',
                'libragold', 'scorpiogold', 'sagittariusgold', 'capricorngold', 'aquariusgold', 'piscesgold'
              ];
              
              const angle = (((index * 30 + 180 + 15) * Math.PI) / 180);
              const radius = 220;
              const x = 250 + Math.cos(angle) * radius - 12;
              const y = 250 - Math.sin(angle) * radius - 12;
              
              return (
                <Image
                  key={`zodiac-${index}`}
                  style={{
                    position: 'absolute',
                    width: 24,
                    height: 24,
                    left: (x/500)*100 + '%',
                    top: (y/500)*100 + '%',
                  }}
                  src={zodiacIcons[Object.keys(zodiacIcons)[index]]}
                />
              );
            })}
            
            {/* Add Planet icons */}
            {Object.entries(horoscope.planets || {})
              .filter(([key]) => key !== 'all' && key !== 'true' && key !== 'false')
              .map(([key, data]) => {
                if (!data?.degree) return null;
                
                const angle = ((data.degree + 180) * Math.PI) / 180;
                const radius = 170;
                const x = 250 + Math.cos(angle) * radius - 12;
                const y = 250 - Math.sin(angle) * radius - 12;
                
                return (
                  <Image
                    key={`planet-${key}`}
                    style={{
                      position: 'absolute',
                      width: 24,
                      height: 24,
                      left: (x/500)*100 + '%',
                      top: (y/500)*100 + '%',
                    }}
                    src={planetIcons[data.key.toLowerCase()]}
                  />
                );
              })}
          </View>
          </View>
        </Page>

        {/* Angles Page */}
        <Page size="A4" style={styles.page}>
          <View style={styles.placementsSection}>
            <Text style={styles.placementsTitle}>Angles</Text>
            <View style={styles.table}>
              {/* Table header */}
              <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={[styles.tableHeaderCell, styles.columnHouseCusp]}>Angle</Text>
                <Text style={[styles.tableHeaderCell, styles.columnSign]}>Position</Text>
              </View>
              
              {/* Table rows */}
              {[
                { key: 'Ascendant', label: 'Ascendant' },
                { key: 'Midheaven', label: 'Midheaven' },
                { key: 'Descendant', label: 'Descendant' },
                { key: 'ImumCoeli', label: 'Imum Coeli' },
              ].map((angle) => {
                const angleData = getAngleData(angle.key);
                
                return (
                  <View style={styles.tableRow} key={angle.key}>
                    <Text style={[styles.tableCell, styles.columnHouseCusp]}>
                      {angle.label}
                    </Text>
                    <Text style={[styles.tableCell, styles.columnSign]}>
                      {`${angleData.degreeFormatted || `${angleData.degreeInSign?.degrees || 0}°`} ${angleData.sign || ""}`}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
          
          {/* Big Three Section */}
          <View style={styles.placementsSection}>
            <Text style={styles.placementsTitle}>Big Three</Text>
            <View style={styles.table}>
              {/* Table header */}
              <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={[styles.tableHeaderCell, styles.columnPoint]}>Point</Text>
                <Text style={[styles.tableHeaderCell, styles.columnPosition]}>Position</Text>
              </View>
              
              {/* Table rows */}
              {[
                { 
                  key: 'Sun Sign', 
                  data: `${horoscope.planets?.Sun?.degreeFormatted || "0°"} ${horoscope.planets?.Sun?.sign || ""}` 
                },
                { 
                  key: 'Moon Sign', 
                  data: `${horoscope.planets?.Moon?.degreeFormatted || "0°"} ${horoscope.planets?.Moon?.sign || ""}` 
                },
                { 
                  key: 'Rising (Ascendant)', 
                  data: `${horoscope.angles?.Ascendant?.degreeFormatted || "0°"} ${horoscope.angles?.Ascendant?.sign || ""}` 
                },
              ].map((placement) => (
                <View style={styles.tableRow} key={placement.key}>
                  <Text style={[styles.tableCell, styles.columnPoint]}>
                    {placement.key}
                  </Text>
                  <Text style={[styles.tableCell, styles.columnPosition]}>
                    {placement.data}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </Page>

        {/* Planets Page */}
        <Page size="A4" style={styles.page}>
          <View style={styles.placementsSection}>
            <Text style={styles.placementsTitle}>Planets</Text>
            <View style={styles.table}>
              {/* Table header */}
              <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={[styles.tableHeaderCell, { width: '25%' }]}>Planet</Text>
                <Text style={[styles.tableHeaderCell, { width: '25%' }]}>Sign</Text>
                <Text style={[styles.tableHeaderCell, { width: '25%' }]}>Degree</Text>
                <Text style={[styles.tableHeaderCell, { width: '25%' }]}>House</Text>
              </View>
              
              {/* Table rows */}
              {[
                'Sun',
                'Moon',
                'Mercury',
                'Venus',
                'Mars',
                'Jupiter',
                'Saturn',
                'Uranus',
                'Neptune',
                'Pluto'
              ].map((planet) => {
                const planetData = horoscope.planets[planet] || {};
                
                return (
                  <View style={styles.tableRow} key={planet}>
                    <Text style={[styles.tableCell, { width: '25%' }]}>
                      {planet}
                    </Text>
                    <Text style={[styles.tableCell, { width: '25%' }]}>
                      {planetData.sign || "N/A"}
                    </Text>
                    <Text style={[styles.tableCell, { width: '25%' }]}>
                      {planetData.degreeFormatted || "N/A"}
                    </Text>
                    <Text style={[styles.tableCell, { width: '25%' }]}>
                      {planetData.House || "N/A"}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </Page>

        {/* Houses Page */}
        <Page size="A4" style={styles.page}>
          <View style={styles.placementsSection}>
            <Text style={styles.placementsTitle}>Houses</Text>
            <View style={styles.table}>
              {/* Table header */}
              <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={[styles.tableHeaderCell, styles.columnHouse]}>House</Text>
                <Text style={[styles.tableHeaderCell, styles.columnCusp]}>Cusp</Text>
                <Text style={[styles.tableHeaderCell, styles.columnRuler]}>Ruler</Text>
              </View>
              
              {/* Table rows */}
              {Object.entries(horoscope.houseCusps || {}).map(([key, house], index) => {
                const sign = house?.sign || "";
                const rulingPlanet = sign ? (zodiacSigns[sign]?.rulingPlanet || "Unknown") : "Unknown";
                
                return (
                  <View style={styles.tableRow} key={key}>
                    <Text style={[styles.tableCell, styles.columnHouse]}>
                      {house?.label || `House ${index + 1}`}
                    </Text>
                    <Text style={[styles.tableCell, styles.columnCusp]}>
                      {`${house?.degreeInSign?.degrees || 0}° ${sign}`}
                    </Text>
                    <Text style={[styles.tableCell, styles.columnRuler]}>
                      {Array.isArray(rulingPlanet) 
                        ? `${rulingPlanet[1]} (Trad.), ${rulingPlanet[0]} (Modern)` 
                        : rulingPlanet}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </Page>

        {/* Major Aspects Summary Page */}
        <Page size="A4" style={styles.page}>
          <View style={styles.placementsSection}>
            <Text style={styles.placementsTitle}>Major Aspects</Text>
            {majorAspectTypes.map((aspectType, index) => {
              const aspectCount = aspectsByType?.major?.[aspectType]?.length || 
                               horoscope.Aspects?.types?.[aspectType]?.length || 0;
              
              return aspectCount > 0 && (
                <View style={styles.displayIconAndText} key={index}>
                  <Text style={styles.sectionTitle}>
                    {aspectCount} {aspectType.charAt(0).toUpperCase() + aspectType.slice(1)}
                    {aspectType !== 'opposition' && 's'}
                  </Text>
                </View>
              );
            })}   
          </View>
        </Page>

        {/* Major Aspects Detail Pages */}
        {majorAspectTypes.map((aspectType, index) => {
          const aspectsOfType = aspectsByType?.major?.[aspectType] || 
                             horoscope.Aspects?.types?.[aspectType] || [];
          
          return aspectsOfType.length > 0 && (
            <Page size="A4" style={styles.page} key={`major-${index}`}>
              <View style={styles.placementsSection}>
                <Text style={styles.sectionTitle}>
                  {aspectType.charAt(0).toUpperCase() + aspectType.slice(1).replace('-', ' ')}
                </Text>
                <View style={styles.table}>
                  <View style={[styles.tableRow, styles.tableHeader]}>
                    <Text style={[styles.tableHeaderCell, { width: '30%' }]}>Point 1</Text>
                    <Text style={[styles.tableHeaderCell, { width: '30%' }]}>Point 2</Text>
                    <Text style={[styles.tableHeaderCell, { width: '40%' }]}>Orb</Text>
                  </View>
                  {aspectsOfType.map((aspect, idx) => (
                    <View style={styles.tableRow} key={idx}>
                      <Text style={[styles.tableCell, { width: '30%' }]}>
                        {aspect.point1Label}
                      </Text>
                      <Text style={[styles.tableCell, { width: '30%' }]}>
                        {aspect.point2Label}
                      </Text>
                      <Text style={[styles.tableCell, { width: '40%' }]}>
                        {aspect.orb?.toFixed(1) || "0"}°
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </Page>
          );
        })}

        {/* Minor Aspects Summary Page */}
        <Page size="A4" style={styles.page}>
          <View style={styles.placementsSection}>
            <Text style={styles.placementsTitle}>Minor Aspects</Text>
            {minorAspectTypes.map((aspectType, index) => {
              const aspectCount = aspectsByType?.minor?.[aspectType]?.length || 
                                horoscope.Aspects?.types?.[aspectType]?.length || 0;
              
              return aspectCount > 0 && (
                <View style={styles.displayIconAndText} key={index}>
                  <Text style={styles.sectionTitle}>
                    {aspectCount} {aspectType.charAt(0).toUpperCase() + aspectType.slice(1).replace('-', ' ')}
                    {aspectType !== 'semi-square' && aspectType !== 'semi-sextile' && 's'}
                  </Text>
                </View>
              );
            })}   
          </View>
        </Page>

        {/* Minor Aspects Detail Pages */}
        {minorAspectTypes.map((aspectType, index) => {
          const aspectsOfType = aspectsByType?.minor?.[aspectType] || 
                              horoscope.Aspects?.types?.[aspectType] || [];
          
          return aspectsOfType.length > 0 && (
            <Page size="A4" style={styles.page} key={`minor-${index}`}>
              <View style={styles.placementsSection}>
                <Text style={styles.sectionTitle}>
                  {aspectType.charAt(0).toUpperCase() + aspectType.slice(1).replace('-', ' ')}
                </Text>
                <View style={styles.table}>
                  <View style={[styles.tableRow, styles.tableHeader]}>
                    <Text style={[styles.tableHeaderCell, { width: '30%' }]}>Point 1</Text>
                    <Text style={[styles.tableHeaderCell, { width: '30%' }]}>Point 2</Text>
                    <Text style={[styles.tableHeaderCell, { width: '40%' }]}>Orb</Text>
                  </View>
                  {aspectsOfType.map((aspect, idx) => (
                    <View style={styles.tableRow} key={idx}>
                      <Text style={[styles.tableCell, { width: '30%' }]}>
                        {aspect.point1Label}
                      </Text>
                      <Text style={[styles.tableCell, { width: '30%' }]}>
                        {aspect.point2Label}
                      </Text>
                      <Text style={[styles.tableCell, { width: '40%' }]}>
                        {aspect.orb?.toFixed(1) || "0"}°
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </Page>
          );
        })}
      </Document>
    );
  } catch (error) {
    console.error("Error rendering PDF:", error);
    return (
      <Document>
        <Page size="A4">
          <View style={styles.section}>
            <Text>Error rendering chart: {error.message}</Text>
          </View>
        </Page>
      </Document>
    );
  }
};

export default PDFBirthChart;

'use client'
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image, Svg, Circle, Line, Path, G, Text as SvgText } from '@react-pdf/renderer';
import { format } from 'date-fns';
import zodiacSigns from '../data/zodiacsigns';
import planets from '../data/planets';
import angles from '../data/angles';
import bigthree from '../data/bigthree';
import sect from '../data/sect';
import { getSignFromDD, modulo } from '../utils';
import calculateDescendant from '../utils/calculateDescendant';
import calculateImumCoeli from '../utils/calculateImumCoeli';
import { findAspectsPDF, generateAspectLines, groupAspectsByType, getAspectsByMajorMinorType } from '../utils/calculateAspectPDF';

// Define icon collections with baseUrl
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

const planetsData = planets;

// Preface all paths with baseUrl
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

const planetIconsGold = {
  sun: `${baseUrl}/planets/sungold.jpg`,
  moon: `${baseUrl}/planets/moongold.jpg`,
  mercury: `${baseUrl}/planets/mercurygold.jpg`,
  venus: `${baseUrl}/planets/venusgold.jpg`,
  mars: `${baseUrl}/planets/marsgold.jpg`,
  jupiter: `${baseUrl}/planets/jupitergold.jpg`,
  saturn: `${baseUrl}/planets/saturngold.jpg`,
  uranus: `${baseUrl}/planets/uranusgold.jpg`,
  neptune: `${baseUrl}/planets/neptunegold.jpg`,
  pluto: `${baseUrl}/planets/plutogold.jpg`,
};

const houseIcons = {
  First: `${baseUrl}/housenumbers/1gold.jpg`,
  Second: `${baseUrl}/housenumbers/2gold.jpg`,
  Third: `${baseUrl}/housenumbers/3gold.jpg`,
  Fourth: `${baseUrl}/housenumbers/4gold.jpg`,
  Fifth: `${baseUrl}/housenumbers/5gold.jpg`,
  Sixth: `${baseUrl}/housenumbers/6gold.jpg`,
  Seventh: `${baseUrl}/housenumbers/7gold.jpg`,
  Eighth: `${baseUrl}/housenumbers/8gold.jpg`,
  Ninth: `${baseUrl}/housenumbers/9gold.jpg`,
  Tenth: `${baseUrl}/housenumbers/10gold.jpg`,
  Eleventh: `${baseUrl}/housenumbers/11gold.jpg`,
  Twelfth: `${baseUrl}/housenumbers/12gold.jpg`,
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

const aspectIcons = {
  conjunction: `${baseUrl}/aspects/conjunctiongold.jpg`,
  opposition: `${baseUrl}/aspects/oppositiongold.jpg`,
  square: `${baseUrl}/aspects/squaregold.jpg`,
  trine: `${baseUrl}/aspects/trinegold.jpg`,
  sextile: `${baseUrl}/aspects/sextilegold.jpg`,
  quincunx: `${baseUrl}/aspects/quincunxgold.jpg`,
  quintile: `${baseUrl}/aspects/quintilegold.jpg`,
  'semi-square': `${baseUrl}/aspects/semisquaregold.jpg`,
  'semi-sextile': `${baseUrl}/aspects/semisextilegold.jpg`,
  septile: `${baseUrl}/aspects/septilegold.jpg`,
};


const houseNames = {
  1: 'First',
  2: 'Second',
  3: 'Third',
  4: 'Fourth',
  5: 'Fifth',
  6: 'Sixth',
  7: 'Seventh',
  8: 'Eighth',
  9: 'Ninth',
  10: 'Tenth',
  11: 'Eleventh',
  12: 'Twelfth',
};

// Register fonts with proper paths
Font.register({
  family: 'Montserrat',
  fonts: [
    { src: `${baseUrl}/fonts/Montserrat-Regular.ttf` },
    { src: `${baseUrl}/fonts/Montserrat-Bold.ttf`, fontWeight: 700 },
    { src: `${baseUrl}/fonts/Montserrat-Light.ttf`, fontWeight: 300 },
  ],
});

Font.register({
  family: 'Lato',
  fonts: [
    { src: `${baseUrl}/fonts/Lato-Regular.ttf` },
    { src: `${baseUrl}/fonts/Lato-Bold.ttf`, fontWeight: 700 },
  ],
});

// Add this function after your style definitions but before the component
const SafeImage = ({ src, style }) => {
  if (!src) return null;
  
  // Ensure style has width and height
  const safeStyle = {
    ...style,
    width: style.width || 16,
    height: style.height || 16,
  };
  
  return <Image src={src} style={safeStyle} />;
};


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
    fontSize: 10,
    marginBottom: 8,
    color: '#2A303C',
    lineHeight: 2,
    textAlign: 'justify',
  },
  // introduction sections: introIcon, textIntro, and introHeader
  introIcon: {
    width: 14,
    height: 14,
    marginRight: 8,
    marginBottom: 8,
    marginTop: 8,
  },
  introText: {
    fontSize: 10,
    marginBottom: 8,
    marginTop: 4,
    color: '#2A303C',
    letterSpacing: 0.5,
    lineHeight: 1.5,
  },
  introHeader: {
    fontSize: 14,
    marginBottom: 8,
    marginTop: 8,
    color: '#D2AE3C',
    fontWeight: 700,
    letterSpacing: 0.5,
    lineHeight: 1.5,
  },
  
  
  // table sections: planet page, house page, aspects pages, etc
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

const PDFBirthChartFree = ({ horoscope, chartData }) => {
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
    const birthDate = chartData.birthDate;
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
              {(() => {
                // Get rotation from Ascendant position using the same logic as BirthChartSVG
                const ascendantDegree = horoscope.angles?.Ascendant?.degree || 0;
                const chartRotation = 180 - ascendantDegree;
                
                return (
                  <>
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
                      
                      // Graduated boldness by importance level - identical to BirthChartSVG
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
                      
                      // Assign colors based on aspect type - identical to BirthChartSVG
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

                    {/* House lines with proper rotation */}
                    {Object.entries(horoscope.houseCusps || {})
                      .filter(([key, house]) => house && house.key && house.degree !== undefined && house.degree !== null)
                      .map(([key, house]) => {
                        const houseDegree = typeof house.degree === 'string' ? parseFloat(house.degree) : house.degree;
                        const angle = ((houseDegree + chartRotation) * Math.PI) / 180;
                        const x1 = 250 + Math.cos(angle) * 100;
                        const y1 = 250 - Math.sin(angle) * 100; 
                        const x2 = 250 + Math.cos(angle) * 240;
                        const y2 = 250 - Math.sin(angle) * 240;

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
                      // Prepare celestial positions similar to the original component
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
                      
                      // Multiple passes to resolve all collisions - identical to BirthChartSVG
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
                        // Apply chart rotation to the original degree position - identical to BirthChartSVG
                        const originalAngle = ((object.originalDegree + chartRotation) * Math.PI) / 180;
                        const degreeRadius = 200; // The radius where the degree marks are
                        const x1 = 250 + Math.cos(originalAngle) * degreeRadius;
                        const y1 = 250 - Math.sin(originalAngle) * degreeRadius;
                        
                        // Calculate adjusted object position with rotation
                        const adjustedAngle = ((object.degree + chartRotation) * Math.PI) / 180;
                        const objectRadius = object.radius;
                        
                        // For angles, make the line shorter (halfway) - identical to BirthChartSVG
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
                            fontSize="12"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="#D2AE3C"
                            fontWeight="semibold"
                          >
                            {houseKey}
                          </SvgText>
                        );
                      });
                    })()}
                  </>
                );
              })()}
            </Svg>

            {/* Position celestial objects absolutely over the SVG */}
            <View style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
              {(() => {
                // Get rotation from Ascendant position using same logic as BirthChartSVG
                const ascendantDegree = horoscope.angles?.Ascendant?.degree || 0;
                const chartRotation = 180 - ascendantDegree;
                
                return (
                  <>
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
                      
                      // Apply vertical correction like in the original
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
                    
                    {/* Planet and angle icons with collision adjustment */}
                    {(() => {
                      // Similar to celestialPositions in original BirthChartSVG
                      const planets = Object.entries(horoscope.planets || {})
                        .filter(([key]) => key !== 'all' && key !== 'true' && key !== 'false')
                        .map(([key, data]) => ({
                          key: data.key,
                          originalDegree: data.degree,
                          degree: data.degree,
                          radius: 170,
                          type: 'planet'
                        }));
                        
                      // Add angles - identical structure to BirthChartSVG
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
                      
                      // Combine and adjust positions - identical collision logic to BirthChartSVG
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
                      
                      // Render objects with adjusted positions - identical to BirthChartSVG
                      return adjustedPositions.map(obj => {
                        // Calculate adjusted position with rotation
                        const angle = ((obj.degree + chartRotation) * Math.PI) / 180;
                        const radius = obj.radius;
                        
                        // Calculate exact position - same as BirthChartSVG
                        const exactX = 250 + Math.cos(angle) * radius - 8; // Changed from 12 to 8 (half of icon width)
                        const exactY = 250 - Math.sin(angle) * radius - 8; // Changed from 12 to 8 (half of icon height)
                        
                        // Apply vertical correction - identical to BirthChartSVG
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
                  </>
                );
              })()}
            </View>
          </View>
          
        </Page>

        {/* Contents Page */}
        <Page size="A4" style={{ 
          ...styles.firstPage, 
          backgroundColor: '#F3EACE',
          paddingVertical: 60,
          paddingHorizontal: 50
        }}>
          <View style={styles.titleSection}>
            <Text style={{
              ...styles.reportTitle,
              marginBottom: 40,
              fontSize: 42,
              color: '#D2AE3C'
            }}>Contents</Text>
            
            {/* Table of Contents */}
            <View style={{
              width: '100%',
              marginTop: 20
            }}>
              {[
                { title: 'Birth Chart', page: '1' },
                { title: 'Big Three', page: '3' },
                { title: 'Angles', page: '3' },
                { title: 'Sect', page: '4' },
                { title: 'Planets', page: '5' },
                { title: 'Houses', page: '6' },
                { title: 'Major Aspects', page: '7' },
                { title: 'Minor Aspects', page: '' },
              ].map((item, index) => (
                <View key={index} style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 20,
                  width: '100%',
                }}>
                  <Text style={{
                    fontSize: 18,
                    fontFamily: 'Montserrat',
                    fontWeight: 700,
                    color: '#D2AE3C'
                  }}>{item.title}</Text>
                  
                  {/* Leader dots */}
                  <View style={{
                    flexGrow: 1,
                    marginHorizontal: 10,
                    height: 1,
                    borderBottomWidth: 1,
                    borderBottomColor: '#D2AE3C',
                    borderBottomStyle: 'dotted',
                    opacity: 0.6,
                  }} />
                  
                  <Text style={{
                    fontSize: 16,
                    fontFamily: 'Montserrat',
                    color: '#D2AE3C',
                    fontWeight: 400,
                  }}>{item.page}</Text>
                </View>
              ))}
            </View>
          </View>
        </Page>

        {/* Big Three Page */}
        <Page size="A4" style={styles.page}>
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
                  iconKey: 'sun',
                  data: horoscope.planets?.Sun || {},
                  sign: horoscope.planets?.Sun?.sign || ""
                },
                { 
                  key: 'Moon Sign', 
                  iconKey: 'moon',
                  data: horoscope.planets?.Moon || {},
                  sign: horoscope.planets?.Moon?.sign || ""
                },
                { 
                  key: 'Rising (Ascendant)', 
                  iconKey: 'ascendant',
                  data: horoscope.angles?.Ascendant || {},
                  sign: horoscope.angles?.Ascendant?.sign || ""
                },
              ].map((placement) => {
                // Format the position to include degrees, minutes, and seconds
                const formattedPosition = `${placement.data.degreeInSign?.degrees || 0}° ${placement.data.degreeInSign?.minutes || 0}' ${placement.data.degreeInSign?.seconds || 0}" ${placement.sign}`;
                
                return (
                  <View style={styles.tableRow} key={placement.key}>
                    <View style={[styles.tableCell, styles.columnPoint, { flexDirection: 'row', alignItems: 'center' }]}>
                      <Image 
                        src={placement.iconKey === 'ascendant' ? angleIcons[placement.iconKey] : planetIconsGold[placement.iconKey]} 
                        style={{ width: 16, height: 16, marginRight: 8 }} 
                      />
                      <Text>{placement.key}</Text>
                    </View>
                    <View style={[styles.tableCell, styles.columnPosition, { flexDirection: 'row', alignItems: 'center' }]}>
                      {placement.sign && (
                        <Image 
                          src={zodiacIcons[placement.sign]} 
                          style={{ width: 16, height: 16, marginRight: 8 }} 
                        />
                      )}
                      <Text>{formattedPosition}</Text>
                    </View>
                  </View>
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
                { key: 'Ascendant', label: 'Ascendant', iconKey: 'ascendant' },
                { key: 'Midheaven', label: 'Midheaven', iconKey: 'midheaven' },
                { key: 'Descendant', label: 'Descendant', iconKey: 'descendant' },
                { key: 'ImumCoeli', label: 'Imum Coeli', iconKey: 'imumcoeli' },
              ].map((angle) => {
                const angleData = getAngleData(angle.key);
                const signName = angleData.sign || "";
                
                // Format the position to include degrees, minutes, and seconds
                const formattedPosition = `${angleData.degreeInSign?.degrees || 0}° ${angleData.degreeInSign?.minutes || 0}' ${angleData.degreeInSign?.seconds || 0}" ${signName}`;
                
                return (
                  <View style={styles.tableRow} key={angle.key}>
                    <View style={[styles.tableCell, styles.columnHouseCusp, { flexDirection: 'row', alignItems: 'center' }]}>
                      <Image 
                        src={angleIcons[angle.iconKey]} 
                        style={{ width: 16, height: 16, marginRight: 8 }} 
                      />
                      <Text>{angle.label}</Text>
                    </View>
                    <View style={[styles.tableCell, styles.columnSign, { flexDirection: 'row', alignItems: 'center' }]}>
                      {signName && (
                        <Image 
                          src={zodiacIcons[signName]} 
                          style={{ width: 16, height: 16, marginRight: 8 }} 
                        />
                      )}
                      <Text>{formattedPosition}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </Page>



        {/* Sect Page */}
        <Page size="A4" style={styles.page}>
          <View style={styles.placementsSection}>
            <Text style={styles.placementsTitle}>Sect</Text>
            <View style={styles.table}>
              <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={[styles.tableHeaderCell, { width: '50%' }]}>Placement</Text>
                <Text style={[styles.tableHeaderCell, { width: '50%' }]}>Planet</Text>
              </View>
              
              {/* Sect */}
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, { width: '50%' }]}>
                  Chart Sect
                </Text>
                <Text style={[styles.tableCell, { width: '50%' }]}>
                  {horoscope.sect.sect} 
                </Text>
              </View>
              
              {/* Luminary */}
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, { width: '50%' }]}>
                  Luminary (Light of Sect)
                </Text>
                <View style={[styles.tableCell, { width: '50%', flexDirection: 'row', alignItems: 'center' }]}>
                  <Image 
                    src={planetIconsGold[horoscope.sect.luminary.toLowerCase()]} 
                    style={{ width: 16, height: 16, marginRight: 8 }} 
                  />
                  <Text>{horoscope.sect.luminary}</Text>
                </View>
              </View>
              
              {/* Greater Benefic */}
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, { width: '50%' }]}>
                  Greater Benefic (Benefic of Sect)
                </Text>
                <View style={[styles.tableCell, { width: '50%', flexDirection: 'row', alignItems: 'center' }]}>
                  <Image 
                    src={planetIconsGold[horoscope.sect.greaterBenefic.toLowerCase()]} 
                    style={{ width: 16, height: 16, marginRight: 8 }} 
                  />
                  <Text>{horoscope.sect.greaterBenefic}</Text>
                </View>
              </View>
              
              {/* Lesser Benefic */}
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, { width: '50%' }]}>
                  Lesser Benefic (Benefic out of Sect)
                </Text>
                <View style={[styles.tableCell, { width: '50%', flexDirection: 'row', alignItems: 'center' }]}>
                  <Image 
                    src={planetIconsGold[horoscope.sect.lesserBenefic.toLowerCase()]} 
                    style={{ width: 16, height: 16, marginRight: 8 }} 
                  />
                  <Text>{horoscope.sect.lesserBenefic}</Text>
                </View>
              </View>
              
              {/* Greater Malefic */}
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, { width: '50%' }]}>
                  Greater Malefic (Malefic out of Sect)
                </Text>
                <View style={[styles.tableCell, { width: '50%', flexDirection: 'row', alignItems: 'center' }]}>
                  <Image 
                    src={planetIconsGold[horoscope.sect.greaterMalefic.toLowerCase()]} 
                    style={{ width: 16, height: 16, marginRight: 8 }} 
                  />
                  <Text>{horoscope.sect.greaterMalefic}</Text>
                </View>
              </View>
              
              {/* Lesser Malefic */}
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, { width: '50%' }]}>
                  Lesser Malefic (Malefic of Sect)
                </Text>
                <View style={[styles.tableCell, { width: '50%', flexDirection: 'row', alignItems: 'center' }]}>
                  <Image 
                    src={planetIconsGold[horoscope.sect.lesserMalefic.toLowerCase()]} 
                    style={{ width: 16, height: 16, marginRight: 8 }} 
                  />
                  <Text>{horoscope.sect.lesserMalefic}</Text>
                </View>
              </View>

              {/* Mercury (Evening vs. Morning Star) */}
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, { width: '50%' }]}>
                  Mercury (Common)  
                </Text>
                <View style={[styles.tableCell, { width: '50%', flexDirection: 'row', alignItems: 'center' }]}>
                  <Image 
                    src={planetIconsGold.mercury} 
                    style={{ width: 16, height: 16, marginRight: 8 }} 
                  />
                  <Text>{sect.mercury[`${horoscope.sect.mercury.sect}`].name} { horoscope.sect.mercury.sect == horoscope.sect.sect ? '(of sect)' : '(out of sect)' }</Text>
                </View>
              </View>
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
                const signName = planetData.sign || "";
                
                // Format the degree to include degrees, minutes, and seconds
                const formattedDegree = planetData.degreeInSign ? 
                  `${planetData.degreeInSign.degrees || 0}° ${planetData.degreeInSign.minutes || 0}' ${planetData.degreeInSign.seconds || 0}"` : 
                  "N/A";
                
                // Get house number and convert to name using the provided houseNames object
                const houseName = houseNames[planetData.house];
                
                return (
                  <View style={styles.tableRow} key={planet}>
                    <View style={[styles.tableCell, { width: '25%', flexDirection: 'row', alignItems: 'center' }]}>
                      <Image 
                        src={planetIconsGold[planet.toLowerCase()]} 
                        style={{ width: 16, height: 16, marginRight: 8 }} 
                      />
                      <Text>{planet}</Text>
                    </View>
                    <View style={[styles.tableCell, { width: '25%', flexDirection: 'row', alignItems: 'center' }]}>
                      {signName && (
                        <Image 
                          src={zodiacIcons[signName]} 
                          style={{ width: 16, height: 16, marginRight: 8 }} 
                        />
                      )}
                      <Text>{signName || "N/A"}</Text>
                    </View>
                    <View style={[styles.tableCell, { width: '25%' }]}>
                      <Text>{formattedDegree}</Text>
                    </View>
                    <View style={[styles.tableCell, { width: '25%', flexDirection: 'row', alignItems: 'center' }]}>
                      {houseName && (
                        <Image 
                          src={houseIcons[houseName]} 
                          style={{ width: 16, height: 16, marginRight: 8 }} 
                        />
                      )}
                      <Text>{houseName}</Text>
                    </View>
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
              // Get lowercase sign name for looking up ruling planets
              const signLower = sign.toLowerCase();
              
              // Get ruling planet(s) - safely handle potential undefined
              let rulingPlanet = "Unknown";
              if (signLower && zodiacSigns[signLower] && zodiacSigns[signLower].rulingPlanet) {
                rulingPlanet = zodiacSigns[signLower].rulingPlanet;
              }
              
              // Format the degree to include degrees, minutes, and seconds
              const formattedDegree = house?.degreeInSign ? 
                `${house.degreeInSign.degrees || 0}° ${house.degreeInSign.minutes || 0}' ${house.degreeInSign.seconds || 0}"` : 
                "0°";
              
              // Get house name based on index+1
              const houseNumber = index + 1;
              const houseName = houseNames[houseNumber] || `House ${houseNumber}`;
              
              return (
                <View style={styles.tableRow} key={key}>
                  <View style={[styles.tableCell, styles.columnHouse, { flexDirection: 'row', alignItems: 'center' }]}>
                    {houseName && (
                      <Image 
                        src={houseIcons[houseName]} 
                        style={{ width: 16, height: 16, marginRight: 8 }} 
                      />
                    )}
                    <Text>{houseName}</Text>
                  </View>
                  <View style={[styles.tableCell, styles.columnCusp, { flexDirection: 'row', alignItems: 'center' }]}>
                    {sign && zodiacIcons[sign] ? (
                      <Image 
                        src={zodiacIcons[sign]} 
                        style={{ width: 16, height: 16, marginRight: 8 }} 
                      />
                    ) : null}
                    <Text>{`${formattedDegree} ${sign}`}</Text>
                  </View>
                  <View style={[styles.tableCell, styles.columnRuler]}>
                    {Array.isArray(rulingPlanet) ? (
                      <View>
                        {/* Traditional ruler first, with safety checks */}
                        {rulingPlanet[1] && planetIconsGold[rulingPlanet[1].toLowerCase()] ? (
                          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                            <Image 
                              src={planetIconsGold[rulingPlanet[1].toLowerCase()]} 
                              style={{ width: 16, height: 16, marginRight: 8 }} 
                            />
                            <Text>{rulingPlanet[1]} (Traditional)</Text>
                          </View>
                        ) : (
                          <Text style={{ marginBottom: 4 }}>{rulingPlanet[1] || ''} (Traditional)</Text>
                        )}
                        
                        {/* Modern ruler second, with safety checks */}
                        {rulingPlanet[0] && planetIconsGold[rulingPlanet[0].toLowerCase()] ? (
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image 
                              src={planetIconsGold[rulingPlanet[0].toLowerCase()]} 
                              style={{ width: 16, height: 16, marginRight: 8 }} 
                            />
                            <Text>{rulingPlanet[0]} (Modern)</Text>
                          </View>
                        ) : (
                          <Text>{rulingPlanet[0] || ''} (Modern)</Text>
                        )}
                      </View>
                    ) : (
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {typeof rulingPlanet === 'string' && 
                        rulingPlanet.toLowerCase() !== 'unknown' && 
                        planetIconsGold[rulingPlanet.toLowerCase()] ? (
                          <Image 
                            src={planetIconsGold[rulingPlanet.toLowerCase()]} 
                            style={{ width: 16, height: 16, marginRight: 8 }} 
                          />
                        ) : null}
                        <Text>{rulingPlanet}</Text>
                      </View>
                    )}
                  </View>
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
              
              // Only show aspects that exist
              if (aspectCount <= 0) return null;
              
              // Format the aspect name with proper capitalization
              const aspectName = aspectType.charAt(0).toUpperCase() + aspectType.slice(1).replace('-', ' ');
              // Add plural 's' for all aspect types except 'opposition'
              const formattedName = `${aspectName}${aspectType !== 'opposition' ? 's' : ''}`;
              
              // Check if aspect icon exists
              const aspectIcon = aspectIcons[aspectType] || null;
              
              return (
                <View style={[styles.displayIconAndText, { marginBottom: 12 }]} key={index}>
                  {aspectIcon ? (
                    <Image 
                      src={aspectIcon} 
                      style={{ width: 24, height: 24, marginRight: 12 }} 
                    />
                  ) : (
                    <View style={{ width: 24, height: 24, marginRight: 12 }}></View>
                  )}
                  <Text style={styles.sectionTitle}>
                    {aspectCount} {formattedName}
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
          
          // Skip if no aspects of this type
          if (aspectsOfType.length === 0) return null;
          
          // Format the aspect name with proper capitalization
          const aspectName = aspectType.charAt(0).toUpperCase() + aspectType.slice(1).replace('-', ' ');
          
          // Make sure we have the aspect icon
          const aspectIcon = aspectIcons[aspectType] || null;
          
          return (
            <Page size="A4" style={styles.page} key={`major-${index}`}>
              <View style={styles.placementsSection}>
                {/* Section title with aspect icon */}
                <View style={[styles.displayIconAndText, { marginBottom: 15 }]}>
                  {aspectIcon ? (
                    <Image 
                      src={aspectIcon} 
                      style={{ width: 24, height: 24, marginRight: 12 }} 
                    />
                  ) : null}
                  <Text style={styles.sectionTitle}>{aspectName}</Text>
                </View>
                
                <View style={styles.table}>
                  <View style={[styles.tableRow, styles.tableHeader]}>
                    <Text style={[styles.tableHeaderCell, { width: '25%' }]}></Text>
                    <Text style={[styles.tableHeaderCell, { width: '25%' }]}>Point 1</Text>
                    <Text style={[styles.tableHeaderCell, { width: '25%' }]}>Point 2</Text>
                    <Text style={[styles.tableHeaderCell, { width: '25%' }]}>Orb</Text>
                  </View>
                  
                  {aspectsOfType.map((aspect, idx) => {
                    if (!aspect || !aspect.point1 || !aspect.point2) return null;
                    
                    // IMPORTANT: Define ALL variables before using any of them
                    const point1Name = aspect.point1.name?.toLowerCase() || "";
                    const point2Name = aspect.point2.name?.toLowerCase() || "";
                    
                    // Format point names with capitalization
                    const formattedPoint1Name = aspect.point1.name ? 
                      aspect.point1.name.charAt(0).toUpperCase() + aspect.point1.name.slice(1) : 
                      "";
                    const formattedPoint2Name = aspect.point2.name ? 
                      aspect.point2.name.charAt(0).toUpperCase() + aspect.point2.name.slice(1) : 
                      "";
                    
                    // Function to get icon for a point - with better error handling
                    const getPointIcon = (pointName) => {
                      if (!pointName) return null;
                      
                      // Check the planet icons first
                      if (planetIconsGold[pointName]) {
                        return planetIconsGold[pointName];
                      }
                      
                      // Then check angle icons
                      if (angleIcons[pointName]) {
                        return angleIcons[pointName];
                      }
                      
                      // Try with 'gold' suffix
                      if (angleIcons[pointName + 'gold']) {
                        return angleIcons[pointName + 'gold'];
                      }
                      
                      // Return null if no matching icon is found
                      return null;
                    };
                    
                    // Get icons AFTER both point names are defined
                    const point1Icon = getPointIcon(point1Name);
                    const point2Icon = getPointIcon(point2Name);
                    
                    // Make sure we have the aspect icon
                    const aspectTypeIcon = aspectIcons[aspectType] || null;
                    
                    // All variables are now defined, safe to use in JSX
                    return (
                      <View style={styles.tableRow} key={idx}>
                        {/* Aspect visualization column */}
                        <View style={[styles.tableCell, { width: '25%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                          {point1Icon && <Image src={point1Icon} style={{ width: 14, height: 14 }} />}
                          {aspectTypeIcon && <Image src={aspectTypeIcon} style={{ width: 14, height: 14, marginHorizontal: 4 }} />}
                          {point2Icon && <Image src={point2Icon} style={{ width: 14, height: 14 }} />}
                        </View>
                        
                        {/* Point 1 column */}
                        <View style={[styles.tableCell, { width: '25%', flexDirection: 'row', alignItems: 'center' }]}>
                          {point1Icon && <Image src={point1Icon} style={{ width: 14, height: 14, marginRight: 6 }} />}
                          <Text>{formattedPoint1Name}</Text>
                        </View>
                        
                        {/* Point 2 column */}
                        <View style={[styles.tableCell, { width: '25%', flexDirection: 'row', alignItems: 'center' }]}>
                          {point2Icon && <Image src={point2Icon} style={{ width: 14, height: 14, marginRight: 6 }} />}
                          <Text>{formattedPoint2Name}</Text>
                        </View>
                        
                        {/* Orb column with power in parentheses - no colors */}
                        <Text style={[styles.tableCell, { width: '25%' }]}>
                          {aspect.orb?.toFixed(1) || "0"}° 
                          {aspect.power ? ` (${aspect.power})` : ''}
                        </Text>
                      </View>
                    );
                  })}
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
              
              // Only show aspects that exist
              if (aspectCount <= 0) return null;
              
              // Format the aspect name with proper capitalization and handle hyphens
              const aspectName = aspectType.charAt(0).toUpperCase() + aspectType.slice(1).replace('-', ' ');
              
              // Add plural 's' for all aspect types except 'semi-square' and 'semi-sextile'
              const formattedName = `${aspectName}${aspectType !== 'semi-square' && aspectType !== 'semi-sextile' ? 's' : ''}`;
              
              // Check if aspect icon exists
              const aspectIcon = aspectIcons[aspectType] || null;
              
              return (
                <View style={[styles.displayIconAndText, { marginBottom: 12 }]} key={index}>
                  {aspectIcon ? (
                    <Image 
                      src={aspectIcon} 
                      style={{ width: 24, height: 24, marginRight: 12 }} 
                    />
                  ) : (
                    <View style={{ width: 24, height: 24, marginRight: 12 }}></View>
                  )}
                  <Text style={styles.sectionTitle}>
                    {aspectCount} {formattedName}
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
          
          // Skip if no aspects of this type
          if (aspectsOfType.length === 0) return null;
          
          // Format the aspect name with proper capitalization
          const aspectName = aspectType.charAt(0).toUpperCase() + aspectType.slice(1).replace('-', ' ');
          
          // Make sure aspectIcons[aspectType] exists
          const aspectTypeIcon = aspectIcons[aspectType] || null;
          if (!aspectTypeIcon) {
            console.warn(`Aspect icon missing for: ${aspectType}`);
          }
          
          return (
            <Page size="A4" style={styles.page} key={`minor-${index}`}>
              <View style={styles.placementsSection}>
                {/* Section title with aspect icon */}
                <View style={[styles.displayIconAndText, { marginBottom: 15 }]}>
                  {aspectTypeIcon ? (
                    <Image 
                      src={aspectTypeIcon} 
                      style={{ width: 24, height: 24, marginRight: 12 }} 
                    />
                  ) : (
                    <View style={{ width: 24, height: 24, marginRight: 12 }}></View>
                  )}
                  <Text style={styles.sectionTitle}>{aspectName}</Text>
                </View>
                
                <View style={styles.table}>
                  <View style={[styles.tableRow, styles.tableHeader]}>
                    <Text style={[styles.tableHeaderCell, { width: '25%' }]}></Text>
                    <Text style={[styles.tableHeaderCell, { width: '25%' }]}>Point 1</Text>
                    <Text style={[styles.tableHeaderCell, { width: '25%' }]}>Point 2</Text>
                    <Text style={[styles.tableHeaderCell, { width: '25%' }]}>Orb</Text>
                  </View>
                  
                  {aspectsOfType.map((aspect, idx) => {
                    if (!aspect || !aspect.point1 || !aspect.point2) return null;
                    
                    // IMPORTANT: Define ALL variables before using any of them
                    const point1Name = aspect.point1.name?.toLowerCase() || "";
                    const point2Name = aspect.point2.name?.toLowerCase() || "";
                    
                    // Format point names with capitalization
                    const formattedPoint1Name = aspect.point1.name ? 
                      aspect.point1.name.charAt(0).toUpperCase() + aspect.point1.name.slice(1) : 
                      "";
                    const formattedPoint2Name = aspect.point2.name ? 
                      aspect.point2.name.charAt(0).toUpperCase() + aspect.point2.name.slice(1) : 
                      "";
                    
                    // Function to get icon for a point - with better error handling
                    const getPointIcon = (pointName) => {
                      if (!pointName) return null;
                      
                      // Check the planet icons first
                      if (planetIconsGold[pointName]) {
                        return planetIconsGold[pointName];
                      }
                      
                      // Then check angle icons
                      if (angleIcons[pointName]) {
                        return angleIcons[pointName];
                      }
                      
                      // Try with 'gold' suffix
                      if (angleIcons[pointName + 'gold']) {
                        return angleIcons[pointName + 'gold'];
                      }
                      
                      // Return null if no matching icon is found
                      return null;
                    };
                    
                    // Get icons AFTER both point names are defined
                    const point1Icon = getPointIcon(point1Name);
                    const point2Icon = getPointIcon(point2Name);
                    
                    // All variables are now defined, safe to use in JSX
                    return (
                      <View style={styles.tableRow} key={idx}>
                        {/* Aspect visualization column */}
                        <View style={[styles.tableCell, { width: '25%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                          {point1Icon && <Image src={point1Icon} style={{ width: 14, height: 14 }} />}
                          {aspectTypeIcon && <Image src={aspectTypeIcon} style={{ width: 14, height: 14, marginHorizontal: 4 }} />}
                          {point2Icon && <Image src={point2Icon} style={{ width: 14, height: 14 }} />}
                        </View>
                        
                        {/* Point 1 column */}
                        <View style={[styles.tableCell, { width: '25%', flexDirection: 'row', alignItems: 'center' }]}>
                          {point1Icon && <Image src={point1Icon} style={{ width: 14, height: 14, marginRight: 6 }} />}
                          <Text>{formattedPoint1Name}</Text>
                        </View>
                        
                        {/* Point 2 column */}
                        <View style={[styles.tableCell, { width: '25%', flexDirection: 'row', alignItems: 'center' }]}>
                          {point2Icon && <Image src={point2Icon} style={{ width: 14, height: 14, marginRight: 6 }} />}
                          <Text>{formattedPoint2Name}</Text>
                        </View>
                        
                        {/* Orb column with power in parentheses - no colors */}
                        <Text style={[styles.tableCell, { width: '25%' }]}>
                          {aspect.orb?.toFixed(1) || "0"}° 
                          {aspect.power ? ` (${aspect.power})` : ''}
                        </Text>
                      </View>
                    );
                  })}
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

export default PDFBirthChartFree;

'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image, Svg, Circle, Line, Path, G, Text as SvgText, Link, PDFViewer } from '@react-pdf/renderer';
import { format } from 'date-fns';
import zodiacSigns from '../data/zodiacsigns';
import planets from '../data/planets';
import angles from '../data/angles';
import bigthree from '../data/bigthree';
import sect from '../data/sect';
import renderChartPage from './PDFSections/renderChartPage';
import renderContentsPage from './PDFSections/renderContentsPage';
import renderAllBigThreePages from './PDFSections/renderAllBigThreePages';
import renderAllSectPages from './PDFSections/renderAllSectPages';
import renderAllAnglePages from './PDFSections/renderAllAnglePages';
import renderAllPlanetPages from './PDFSections/renderAllPlanetPages';
import renderAllHousePages from './PDFSections/renderAllHousePages';
import renderAllMajorAspectPages from './PDFSections/renderAllMajorAspectPages';
import renderAllMinorAspectPages from './PDFSections/renderAllMinorAspectPages';
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

Font.register({
  family: 'IM Fell English SC',
  src: `${baseUrl}/fonts/IMFellEnglishSC-Regular.ttf`,
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

// Page numbering component with updated style
const PageNumber = ({ page }) => (
  <Text
    style={{
      position: 'absolute',
      bottom: 40,
      right: 40,
      textAlign: 'right',
      fontSize: 10,
      color: '#D2AE3C',
      fontFamily: 'Montserrat',
      fontWeight: 'bold',
    }}
    render={({ pageNumber, totalPages }) => (
      `${pageNumber}`
    )}
    fixed
  />
);


// Define styles
const styles = StyleSheet.create({
  svgText: {
    fontFamily: 'IM Fell English SC',
    fontSize: 12,
  },
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
    fontSize: 12,
    marginBottom: 8,
    letterSpacing: 0.5,
    lineHeight: 1.5,
    color: '#2A303C',
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

  // Content container
  contentContainer: {
    width: '100%',
  },
  
  // Keyword badges styles
  keywordBadgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 20,
    width: '100%',
  },
  keywordBadge: {
    backgroundColor: '#D2AE3C',
    borderRadius: 50, // Fully rounded (pill shape)
    paddingVertical: 4,
    paddingHorizontal: 12,
    margin: 4,
  },
  keywordText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: 'Montserrat',
    fontWeight: 500,
  },
  
  // Key Traits - full width with wrapping
  traitsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  traitCard: {
    width: '48%', // Two cards per row with a small gap
    backgroundColor: '#F9F6EB',
    borderRadius: 8,
    marginBottom: 8,
    padding: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#D2AE3C',
  },
  
  // Two column layout for Strengths and Challenges
  twoColumnContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
  },
  columnContainer: {
    width: '48%',
    marginHorizontal: '1%',
    flexDirection: 'column',
  },
  
  // Vertical cards containers
  cardsContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  card: {
    backgroundColor: '#F9F6EB',
    borderRadius: 8,
    marginBottom: 8,
    padding: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#D2AE3C',
  },
  cardText: {
    fontSize: 10,
    color: '#2A303C',
    lineHeight: 1.5,
  },



});







const PDFBirthChart = ({ horoscope, chartData }) => {
  // Section ID references for the table of contents
  const sectionRefs = {
    birthChart: useRef(),
    bigThree: useRef(),
    bigThreeTitle: useRef(),
    angles: useRef(),
    anglesTitle: useRef(), 
    sect: useRef(),
    sectTitle: useRef(),
    planets: useRef(),
    planetsTitle: useRef(),
    houses: useRef(),
    housesTitle: useRef(),
    majorAspects: useRef(),
    majorAspectsTitle: useRef(),
    minorAspects: useRef(),
    minorAspectsTitle: useRef(),
    aboutAngles: useRef(),
    ascendant: useRef(),
    midheaven: useRef(),
    descendant: useRef(),
    imumCoeli: useRef(),
    aboutSect: useRef(null),
    luminary: useRef(null),
    greaterBenefic: useRef(null),
    lesserBenefic: useRef(null),
    greaterMalefic: useRef(null),
    lesserMalefic: useRef(null),
    mercury: useRef(null),
    aboutPlanets: useRef(),
    sunPage: useRef(),
    sunDignityPage: useRef(),
    moonPage: useRef(),
    moonDignityPage: useRef(),
    mercuryPage: useRef(),
    mercuryDignityPage: useRef(),
    venusPage: useRef(),
    venusDignityPage: useRef(),
    marsPage: useRef(),
    marsDignityPage: useRef(),
    jupiterPage: useRef(),
    jupiterDignityPage: useRef(),
    saturnPage: useRef(),
    saturnDignityPage: useRef(),
    uranusPage: useRef(),
    uranusDignityPage: useRef(),
    neptunePage: useRef(),
    neptuneDignityPage: useRef(),
    plutoPage: useRef(),
    plutoDignityPage: useRef(),
  };

  // State to track actual page numbers for each section
  const [sectionPages, setSectionPages] = useState({
    birthChart: 1,
    bigThreeTitle: 3,
    anglesTitle: 4,
    sectTitle: 5,
    planetsTitle: 6,
    housesTitle: 7,
    majorAspectsTitle: 8,
    minorAspectsTitle: 9,
  });

  // Add this to your component, right after your state declarations
  useEffect(() => {
    const updatePageNumbers = () => {
      const newSectionPages = {};
      
      // Collect all current page numbers from refs
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          newSectionPages[key] = ref.current;
        } else {
          // Keep existing value if ref not set yet
          newSectionPages[key] = sectionPages[key];
        }
      });
      
      // Only update state if values changed
      if (JSON.stringify(newSectionPages) !== JSON.stringify(sectionPages)) {
        setSectionPages(newSectionPages);
      }
    };
    
    // Run the update when component mounts and when refs change
    updatePageNumbers();
    
    // Set up an interval to keep checking (PDF rendering can be asynchronous)
    const interval = setInterval(updatePageNumbers, 500);
    
    return () => clearInterval(interval);
  }, [sectionRefs, sectionPages]);


  // Add this function to update section page numbers
  const onRenderUpdates = (state) => {
    if (state.subtype === 'page') {
      const newSectionPages = { ...sectionPages };
      let updated = false;

      // Check each section reference
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current && state.text && state.text.id === key) {
          newSectionPages[key] = state.pageIndex + 1;
          updated = true;
        }
      });

      if (updated) {
        setSectionPages(newSectionPages);
      }
    }
  };

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
      <Document onRender={onRenderUpdates}>
        {/* Title Page */}
        <Page size="A4" style={styles.firstPage}>
          <View style={styles.titleSection}>
            <Text style={styles.reportTitle}>Birth Chart</Text>
            <Text style={styles.reportSubtitle}>{chartData.houseName} Cusps</Text>
            <Text style={styles.reportSubtitle}>
              {format(birthDate, 'PPP')} at {chartData.birthTime || "Unknown"}
            </Text>
            <Text style={styles.reportSubtitle}>{chartData.birthLocation?.label || "Unknown Location"}</Text>
          </View>

          {/* Chart SVG Section */}
          {renderChartPage({ sectionRefs, horoscope })}
        </Page>

        {/* Contents Page */}
        {renderContentsPage({ styles, sectionPages })}
   
        {/* Render All Big Three Pages */}
        {renderAllBigThreePages(sectionRefs, horoscope)}
 
        {/* Render All Angle Pages */}
        {renderAllAnglePages(sectionRefs, horoscope)}

        {/* Render All Sect Pages */}
        {renderAllSectPages(sectionRefs, horoscope)}

        {/* Render All Planet Pages Here */}
        {renderAllPlanetPages(sectionRefs, horoscope)}

        {/* Render All House Pages Here */}
        {renderAllHousePages(sectionRefs, horoscope)}

        {/* Render All Major Aspect Pages Here */}
        {renderAllMajorAspectPages(sectionRefs, horoscope)}

        {/* Render All Minor Aspect Pages Here */}
        {renderAllMinorAspectPages(sectionRefs, horoscope)}
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

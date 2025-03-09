import planets from '../../data/planets';
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

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

const planetsData = planets;

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

// Page numbering component
const PageNumber = () => (
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
    render={({ pageNumber }) => `${pageNumber}`}
    fixed
  />
);

// Define styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 40,
    fontFamily: 'Lato',
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
  contentContainer: {
    width: '100%',
  },
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
    borderRadius: 50,
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
  traitsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  traitCard: {
    width: '48%',
    backgroundColor: '#F9F6EB',
    borderRadius: 8,
    marginBottom: 8,
    padding: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#D2AE3C',
  },
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
  // Additional styles needed for the tables
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
  // Text style for About Planets page
  text: {
    fontSize: 12,
    marginBottom: 8,
    letterSpacing: 0.5,
    lineHeight: 1.5,
    color: '#2A303C',
    textAlign: 'justify',
  },
});

// Update renderSinglePlanetPages function to handle content overflow
const renderSinglePlanetPages = (planetKey, sectionRefs, horoscope) => {
  const planetData = planetsData[planetKey];
  const planetIcon = planetIconsGold[planetKey];
  
  // Helper function to determine if content needs size adjustment
  const needsCompression = () => {
    return (
      (planetData.traits.length > 6) ||
      (planetData.strengths.length + planetData.weaknesses.length > 10) ||
      (planetData.descriptionLong.length > 800)
    );
  };
  
  // Determine if we need to compress content
  const compress = needsCompression();
  
  // Adjusted styles for compressed layout
  const compressedStyles = {
    introText: {
      ...styles.introText,
      fontSize: compress ? 9 : 10,
      marginBottom: compress ? 6 : 8,
    },
    keywordBadge: {
      ...styles.keywordBadge,
      marginVertical: compress ? 2 : 4,
      paddingVertical: compress ? 3 : 4,
    },
    traitCard: {
      ...styles.traitCard,
      marginBottom: compress ? 6 : 8,
      padding: compress ? 8 : 10,
    },
    card: {
      ...styles.card,
      marginBottom: compress ? 6 : 8,
      padding: compress ? 8 : 10,
    },
    cardText: {
      ...styles.cardText,
      fontSize: compress ? 9 : 10,
    }
  };
  
  return (
    <>
      {/* Planet Page 1 - Main Information */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.placementsSection}>
          <Text
            id={`${planetKey}Page`}
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              if (sectionRefs && sectionRefs[`${planetKey}Page`]) {
                return sectionRefs[`${planetKey}Page`].current = pageNumber;
              }
              return null;
            }}
          />
          <View style={styles.displayIconAndText}>
            <Image src={planetIcon} style={{ width: 24, height: 24, marginRight: 12 }} />
            <Text style={styles.placementsTitle}>{planetData.name}</Text>
          </View>

          {/* Add ruler information dynamically */}
          <Text style={styles.reportSubtitle}>
            {Array.isArray(planetData.ruledHouse) 
              ? `Ruler of the ${planetData.ruledHouse.join(' and the ')}` 
              : `Ruler of the ${planetData.ruledHouse}`
            }
          </Text>
          <Text style={styles.reportSubtitle}>
            {Array.isArray(planetData.domicile) 
              ? `Ruler of ${planetData.domicile.join(' and ')}` 
              : `Ruler of ${planetData.domicile}`
            }
          </Text>

          {/* Keywords as badges */}
          <View style={styles.keywordBadgesContainer}>
            {planetData.keywords.map((keyword, index) => (
              <View key={index} style={compressedStyles.keywordBadge || styles.keywordBadge}>
                <Text style={styles.keywordText}>{keyword}</Text>
              </View>
            ))}
          </View>
            
          <View style={styles.contentContainer}>
            <Text style={compressedStyles.introText || styles.introText}>
              {planetData.descriptionLong}
            </Text>
              
            {/* Key Traits Section - Full width with wrapping */}
            <Text style={styles.introHeader}>Key Traits</Text>
            <View style={styles.traitsContainer}>
              {planetData.traits.map((trait, index) => (
                <View key={index} style={compressedStyles.traitCard || styles.traitCard}>
                  <Text style={compressedStyles.cardText || styles.cardText}>{trait}</Text>
                </View>
              ))}
            </View>
              
            {/* Two Column Layout for Strengths and Challenges */}
            <View style={styles.twoColumnContainer}>
              <View style={styles.columnContainer}>
                <Text style={styles.introHeader}>Strengths</Text>
                <View style={styles.cardsContainer}>
                  {planetData.strengths.map((strength, index) => (
                    <View key={index} style={compressedStyles.card || styles.card}>
                      <Text style={compressedStyles.cardText || styles.cardText}>{strength}</Text>
                    </View>
                  ))}
                </View>
              </View>
                
              <View style={styles.columnContainer}>
                <Text style={styles.introHeader}>Challenges</Text>
                <View style={styles.cardsContainer}>
                  {planetData.weaknesses.map((weakness, index) => (
                    <View key={index} style={compressedStyles.card || styles.card}>
                      <Text style={compressedStyles.cardText || styles.cardText}>{weakness}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
        <PageNumber />
      </Page>

      {/* Planet Page 2 - Dignity Section */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.placementsSection}>
          <Text
            id={`${planetKey}DignityPage`}
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              if (sectionRefs && sectionRefs[`${planetKey}DignityPage`]) {
                return sectionRefs[`${planetKey}DignityPage`].current = pageNumber;
              }
              return null;
            }}
          />
          <View style={styles.displayIconAndText}>
            <Image src={planetIcon} style={{ width: 24, height: 24, marginRight: 12 }} />
            <Text style={styles.placementsTitle}>Essential Dignity</Text>
          </View>
            
          <View style={styles.contentContainer}>
            {/* Dignity Section */}
            <Text style={compressedStyles.introText || styles.introText}>
              The {planetData.name}'s dignity refers to how effectively its energies can express themselves based on the zodiac sign it occupies in the birth chart. When the {planetData.name} is in certain signs, its qualities of {planetData.traits.slice(0, 3).join(", ")} are either enhanced or challenged.
            </Text>
              
            <Text style={styles.introHeader}>Planetary Dignity</Text>
            <View style={styles.cardsContainer}>
              {Object.entries(planetData.dignity).map(([dignityType, description], index) => (
                <View key={index} style={compressedStyles.card || styles.card}>
                  <Text style={{...(compressedStyles.cardText || styles.cardText), fontWeight: 700}}>
                    {dignityType}: {
                      dignityType === "Domicile" 
                        ? (Array.isArray(planetData.domicile) 
                            ? planetData.domicile.join(' and ') 
                            : planetData.domicile)
                        : dignityType === "Exaltation" 
                          ? planetData.exaltation
                          : dignityType === "Detriment" 
                            ? (Array.isArray(planetData.detriment) 
                                ? planetData.detriment.join(' and ') 
                                : planetData.detriment)
                            : planetData.fall
                    }
                  </Text>
                  <Text style={compressedStyles.cardText || styles.cardText}>{description}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        <PageNumber />
      </Page>

      {/* Planet Page 3 - Sign Meaning Section */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.placementsSection}>
          <Text
            id={`${planetKey}DignityPage`}
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              if (sectionRefs && sectionRefs[`${planetKey}DignityPage`]) {
                return sectionRefs[`${planetKey}DignityPage`].current = pageNumber;
              }
              return null;
            }}
          />
          <View style={styles.displayIconAndText}>
            <Image src={planetIcon} style={{ width: 24, height: 24, marginRight: 12 }} />
            <Text style={styles.placementsTitle}>{planetData.name} in {horoscope.planets[planetData.name].sign}</Text>
          </View>
            
          <View style={styles.contentContainer}>
            {/* Sign Meaning Section */}
            <Text style={compressedStyles.introText || styles.introText}>
              {planetData.name} in the zodiac sign {horoscope.planets[planetData.name].sign}
            </Text>
          </View>
        </View>
        <PageNumber />
      </Page>

      {/* Planet Page 4 - House Meaning Section */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.placementsSection}>
          <Text
            id={`${planetKey}DignityPage`}
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              if (sectionRefs && sectionRefs[`${planetKey}DignityPage`]) {
                return sectionRefs[`${planetKey}DignityPage`].current = pageNumber;
              }
              return null;
            }}
          />
          <View style={styles.displayIconAndText}>
            <Image src={planetIcon} style={{ width: 24, height: 24, marginRight: 12 }} />
            <Text style={styles.placementsTitle}>{planetData.name} in the {houseNames[`${horoscope.planets[planetData.name].house}`]} House</Text>
          </View>
            
          <View style={styles.contentContainer}>
            {/* Sign Meaning Section */}
            <Text style={compressedStyles.introText || styles.introText}>
              {planetData.name} in the house {horoscope.planets[planetData.name].house}
            </Text>
          </View>
        </View>
        <PageNumber />
      </Page>
    </>
  );
};

// Collection function that renders all planets
const renderAllPlanetPages = (sectionRefs, horoscope) => {
  const planetKeys = ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];
  
  return (
    <>
    {/* Title Page for Planets Section */}
    <Page 
        size="A4" 
        style={{
          flexDirection: 'column',
          backgroundColor: '#F3EACE',
          padding: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          id="planetsTitle"
          style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
          render={({ pageNumber }) => {
            if (sectionRefs && sectionRefs.planetsTitle) {
              return sectionRefs.planetsTitle.current = pageNumber;
            }
            return null;
          }}
        />
        <View style={{ 
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center',
          width: '100%'
        }}>
          <Text style={{
            fontSize: 48,
            fontFamily: 'Montserrat',
            fontWeight: 700,
            color: '#D2AE3C',
            textAlign: 'center',
            letterSpacing: 2,
          }}>
            Planets
          </Text>
        </View>
        <PageNumber />
      </Page>
      
      {/* Planets Page - Moved from parent component */}
      <Page size="A4" style={styles.page}>
        <View style={styles.placementsSection}>
          <Text
            id="planets" 
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              return sectionRefs.planets.current = pageNumber;
            }}
          />
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
                        src={`${baseUrl}/signs/${signName.toLowerCase()}gold.jpg`} 
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
                        src={`${baseUrl}/housenumbers/${planetData.house}gold.jpg`} 
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
        <PageNumber />
      </Page>

      {/* About Planets Page - Moved from parent component */}
      <Page size="A4" style={styles.page}>
        <View style={styles.placementsSection}>
          <Text
            id="aboutPlanets" 
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              return sectionRefs.aboutPlanets.current = pageNumber;
            }}
          />
          <Text style={styles.placementsTitle}>About Planets</Text>
          
          <View>
            <Text style={styles.text}>
              In astrology, planets are the primary moving components that bring the birth chart to life. Each planet represents different energies, drives, or aspects of our personality and life experience. Understanding the role of each planet helps us interpret how these energies manifest in different areas of our lives.
            </Text>
            
            <Text style={styles.introHeader}>The Personal Planets</Text>
            <Text style={styles.text}>
              The inner or personal planets—Sun, Moon, Mercury, Venus, and Mars—move relatively quickly through the zodiac and govern our core personality traits, emotional responses, communication style, relationship approach, and action patterns. These planets strongly influence our day-to-day experiences and personal expression.
            </Text>
            
            <Text style={styles.introHeader}>The Social Planets</Text>
            <Text style={styles.text}>
              Jupiter and Saturn, the social planets, move more slowly and represent how we interact with society. Jupiter governs expansion, philosophy, and higher learning, while Saturn relates to structure, discipline, and long-term goals. These planets help shape our worldview and approach to responsibilities.
            </Text>
            
            <Text style={styles.introHeader}>The Outer Planets</Text>
            <Text style={styles.text}>
              Uranus, Neptune, and Pluto, the transpersonal or outer planets, move very slowly and represent generational influences and transformative forces. Uranus relates to innovation and rebellion, Neptune to spirituality and dissolution, and Pluto to power and profound transformation. These planets often trigger major life changes and spiritual evolution.
            </Text>
            
            <Text style={styles.introHeader}>Planetary Dignity</Text>
            <Text style={styles.text}>
              A planet's effectiveness is influenced by its placement in certain zodiac signs. When a planet is in its domicile (the sign it rules), it operates at its strongest. In exaltation, the planet's energy is heightened in a harmonious way. Conversely, when a planet is in detriment or fall, it may face challenges expressing its natural qualities. Understanding these dignities helps us appreciate the nuanced expression of planetary energies in the birth chart.
            </Text>
          </View>
        </View>
        <PageNumber />
      </Page>

      {/* Render the individual planet pages */}
      {planetKeys.map(planetKey => (
        <React.Fragment key={`planet-section-${planetKey}`}>
          {renderSinglePlanetPages(planetKey, sectionRefs, horoscope)}
        </React.Fragment>
      ))}
    </>
  );
};

export default renderAllPlanetPages;

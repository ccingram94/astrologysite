import sect from '../../data/sect';
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
});

// Render individual sect component pages
const renderSectRolePage = (roleKey, sectionRefs, horoscope) => {
  // Get the aspect data from the sect data
  const roleData = sect[roleKey];
  
  // Get the planet for this role from the horoscope
  const planet = horoscope?.sect?.[roleKey] || "";
  const planetLowercase = planet.toLowerCase();
  
  // Get the planet icon
  const planetIcon = planetIconsGold[planetLowercase];
  
  // Format the role name (convert camelCase to Title Case)
  const formattedRoleName = roleKey
    .replace(/([A-Z])/g, ' $1') // Add space before capitals
    .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
    .trim();

  // Helper function to determine if content needs size adjustment
  const needsCompression = () => {
    return (
      (roleData.traits?.length > 6) ||
      (roleData.strengths?.length + roleData.challenges?.length > 10) ||
      (roleData.descriptionLong?.length > 800)
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
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.placementsSection}>
        <Text
          id={`sect${roleKey.charAt(0).toUpperCase() + roleKey.slice(1)}Page`}
          style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
          render={({ pageNumber }) => {
            if (sectionRefs && sectionRefs[`sect${roleKey.charAt(0).toUpperCase() + roleKey.slice(1)}Page`]) {
              return sectionRefs[`sect${roleKey.charAt(0).toUpperCase() + roleKey.slice(1)}Page`].current = pageNumber;
            }
            return null;
          }}
        />
        <View style={styles.displayIconAndText}>
          <Image src={planetIcon} style={{ width: 24, height: 24, marginRight: 12 }} />
          <Text style={styles.placementsTitle}>{formattedRoleName}: {planet}</Text>
        </View>

        {/* Keywords as badges */}
        <View style={styles.keywordBadgesContainer}>
          {roleData.keywords && roleData.keywords.map((keyword, index) => (
            <View key={index} style={compressedStyles.keywordBadge || styles.keywordBadge}>
              <Text style={styles.keywordText}>{keyword}</Text>
            </View>
          ))}
        </View>
          
        <View style={styles.contentContainer}>
          <Text style={compressedStyles.introText || styles.introText}>
            {roleData.descriptionLong}
          </Text>

          <Text style={styles.introHeader}>Your {formattedRoleName} Planet</Text>
          <View style={compressedStyles.card || styles.card}>
            <Text style={{...(compressedStyles.cardText || styles.cardText), fontWeight: 700}}>
              {planet} as your {formattedRoleName}
            </Text>
            <Text style={compressedStyles.cardText || styles.cardText}>
              In your birth chart, {planet} serves as your {formattedRoleName.toLowerCase()}, 
              bringing {planetLowercase === 'sun' ? 'vital energy and creative expression' :
                planetLowercase === 'moon' ? 'emotional sensitivity and nurturing qualities' :
                planetLowercase === 'mercury' ? 'communication skills and analytical thinking' :
                planetLowercase === 'venus' ? 'harmony and relationship values' :
                planetLowercase === 'mars' ? 'assertiveness and action-oriented energy' :
                planetLowercase === 'jupiter' ? 'expansion and optimism' :
                planetLowercase === 'saturn' ? 'structure and discipline' :
                'transformative energy'
              } to this role.
            </Text>
          </View>
            
          {/* Key Traits Section - Full width with wrapping */}
          {roleData.traits && (
            <>
              <Text style={styles.introHeader}>Key Traits</Text>
              <View style={styles.traitsContainer}>
                {roleData.traits.map((trait, index) => (
                  <View key={index} style={compressedStyles.traitCard || styles.traitCard}>
                    <Text style={compressedStyles.cardText || styles.cardText}>{trait}</Text>
                  </View>
                ))}
              </View>
            </>
          )}
            
          {/* Two Column Layout for Strengths and Challenges */}
          <View style={styles.twoColumnContainer}>
            <View style={styles.columnContainer}>
              <Text style={styles.introHeader}>
                {roleKey.includes('Malefic') ? 'Hidden Benefits' : 'Strengths'}
              </Text>
              <View style={styles.cardsContainer}>
                {roleData.strengths && roleData.strengths.map((strength, index) => (
                  <View key={index} style={compressedStyles.card || styles.card}>
                    <Text style={compressedStyles.cardText || styles.cardText}>{strength}</Text>
                  </View>
                ))}
              </View>
            </View>
              
            <View style={styles.columnContainer}>
              <Text style={styles.introHeader}>Challenges</Text>
              <View style={styles.cardsContainer}>
                {roleData.challenges && roleData.challenges.map((challenge, index) => (
                  <View key={index} style={compressedStyles.card || styles.card}>
                    <Text style={compressedStyles.cardText || styles.cardText}>{challenge}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
      <PageNumber />
    </Page>
  );
};

// Collection function that renders all sect pages
const renderAllSectPages = (sectionRefs, horoscope) => {
  // Determine chart sect - day or night
  const chartSect = horoscope?.sect?.sect || "Day";
  
  return (
    <>
    {/* Title Page for Sect Section */}
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
          id="sectTitle"
          style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
          render={({ pageNumber }) => {
            if (sectionRefs && sectionRefs.sectTitle) {
              return sectionRefs.sectTitle.current = pageNumber;
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
            Sect
          </Text>
        </View>
        <PageNumber />
      </Page>
      
      {/* Sect Summary Page - Moved from parent component */}
      <Page size="A4" style={styles.page}>
        <View style={styles.placementsSection}>
          <Text
            id="sect" 
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              return sectionRefs.sect.current = pageNumber;
            }}
          />
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
        <PageNumber />
      </Page>

      {/* Introduction to Sect Page */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.placementsSection}>
          <Text
            id="sectIntroPage"
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              if (sectionRefs && sectionRefs.sectIntroPage) {
                return sectionRefs.sectIntroPage.current = pageNumber;
              }
              return null;
            }}
          />
          <Text style={styles.placementsTitle}>Understanding Sect</Text>
          
          <View style={styles.contentContainer}>
            <Text style={styles.introText}>
              {sect.about.descriptionLong}
            </Text>
            
            <View style={styles.contentContainer}>
              <Text style={styles.introHeader}>The Diurnal Sect (Day Charts)</Text>
              <View style={styles.card}>
                <Text style={{...styles.cardText, fontWeight: chartSect === "Day" ? 700 : 400}}>
                  {sect.diurnal.description}
                </Text>
                {chartSect === "Day" && (
                  <Text style={{...styles.cardText, marginTop: 8}}>
                    Your chart is a Day chart, emphasizing these patterns.
                  </Text>
                )}
              </View>
              
              <Text style={styles.introHeader}>The Nocturnal Sect (Night Charts)</Text>
              <View style={styles.card}>
                <Text style={{...styles.cardText, fontWeight: chartSect === "Night" ? 700 : 400}}>
                  {sect.nocturnal.description}
                </Text>
                {chartSect === "Night" && (
                  <Text style={{...styles.cardText, marginTop: 8}}>
                    Your chart is a Night chart, emphasizing these patterns.
                  </Text>
                )}
              </View>
            </View>
          </View>
        </View>
        <PageNumber />
      </Page>

      {/* Luminary Page */}
      <Page size="A4" style={styles.page}>
        <View style={styles.placementsSection}>
          <Text
            id="luminary" 
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              return sectionRefs.luminary.current = pageNumber;
            }}
          />
          <View style={styles.displayIconAndText}>
            <Text style={styles.placementsTitle}>
              Luminary
            </Text>
          </View>
          
          {/* Keywords as badges */}
          <View style={styles.keywordBadgesContainer}>
            {sect.luminary.keywords.map((keyword, index) => (
              <View key={index} style={styles.keywordBadge}>
                <Text style={styles.keywordText}>{keyword}</Text>
              </View>
            ))}
          </View>
          
          <View style={styles.contentContainer}>
            <Text style={styles.introText}>
              {sect.luminary.descriptionLong}
            </Text>
            
            {/* Key Traits Section - Full width with wrapping */}
            <Text style={styles.introHeader}>Key Traits</Text>
            <View style={styles.traitsContainer}>
              {sect.luminary.traits.map((trait, index) => (
                <View key={index} style={styles.traitCard}>
                  <Text style={styles.cardText}>{trait}</Text>
                </View>
              ))}
            </View>
            
            {/* Two Column Layout for Strengths and Challenges */}
            <View style={styles.twoColumnContainer}>
              <View style={styles.columnContainer}>
                <Text style={styles.introHeader}>Strengths</Text>
                <View style={styles.cardsContainer}>
                  {sect.luminary.strengths.map((strength, index) => (
                    <View key={index} style={styles.card}>
                      <Text style={styles.cardText}>{strength}</Text>
                    </View>
                  ))}
                </View>
              </View>
              
              <View style={styles.columnContainer}>
                <Text style={styles.introHeader}>Challenges</Text>
                <View style={styles.cardsContainer}>
                  {sect.luminary.challenges.map((challenge, index) => (
                    <View key={index} style={styles.card}>
                      <Text style={styles.cardText}>{challenge}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
        <PageNumber />
      </Page>

      {/* Greater Benefic Page */}
      <Page size="A4" style={styles.page}>
        <View style={styles.placementsSection}>
          <Text
            id="greaterBenefic" 
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              return sectionRefs.greaterBenefic.current = pageNumber;
            }}
          />
          <View style={styles.displayIconAndText}>
            <Text style={styles.placementsTitle}>
              Greater Benefic
            </Text>
          </View>
          
          {/* Keywords as badges */}
          <View style={styles.keywordBadgesContainer}>
            {sect.greaterBenefic.keywords.map((keyword, index) => (
              <View key={index} style={styles.keywordBadge}>
                <Text style={styles.keywordText}>{keyword}</Text>
              </View>
            ))}
          </View>
          
          <View style={styles.contentContainer}>
            <Text style={styles.introText}>
              {sect.greaterBenefic.descriptionLong}
            </Text>
            
            {/* Key Traits Section - Full width with wrapping */}
            <Text style={styles.introHeader}>Key Traits</Text>
            <View style={styles.traitsContainer}>
              {sect.greaterBenefic.traits.map((trait, index) => (
                <View key={index} style={styles.traitCard}>
                  <Text style={styles.cardText}>{trait}</Text>
                </View>
              ))}
            </View>
            
            {/* Two Column Layout for Strengths and Challenges */}
            <View style={styles.twoColumnContainer}>
              <View style={styles.columnContainer}>
                <Text style={styles.introHeader}>Strengths</Text>
                <View style={styles.cardsContainer}>
                  {sect.greaterBenefic.strengths.map((strength, index) => (
                    <View key={index} style={styles.card}>
                      <Text style={styles.cardText}>{strength}</Text>
                    </View>
                  ))}
                </View>
              </View>
              
              <View style={styles.columnContainer}>
                <Text style={styles.introHeader}>Challenges</Text>
                <View style={styles.cardsContainer}>
                  {sect.greaterBenefic.challenges.map((challenge, index) => (
                    <View key={index} style={styles.card}>
                      <Text style={styles.cardText}>{challenge}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
        <PageNumber />
      </Page>

      {/* Lesser Benefic Page */}
      <Page size="A4" style={styles.page}>
        <View style={styles.placementsSection}>
          <Text
            id="lesserBenefic" 
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              return sectionRefs.lesserBenefic.current = pageNumber;
            }}
          />
          <View style={styles.displayIconAndText}>
            <Text style={styles.placementsTitle}>
              Lesser Benefic
            </Text>
          </View>
          
          {/* Keywords as badges */}
          <View style={styles.keywordBadgesContainer}>
            {sect.lesserBenefic.keywords.map((keyword, index) => (
              <View key={index} style={styles.keywordBadge}>
                <Text style={styles.keywordText}>{keyword}</Text>
              </View>
            ))}
          </View>
          
          <View style={styles.contentContainer}>
            <Text style={styles.introText}>
              {sect.lesserBenefic.descriptionLong}
            </Text>
            
            {/* Key Traits Section - Full width with wrapping */}
            <Text style={styles.introHeader}>Key Traits</Text>
            <View style={styles.traitsContainer}>
              {sect.lesserBenefic.traits.map((trait, index) => (
                <View key={index} style={styles.traitCard}>
                  <Text style={styles.cardText}>{trait}</Text>
                </View>
              ))}
            </View>
            
            {/* Two Column Layout for Strengths and Challenges */}
            <View style={styles.twoColumnContainer}>
              <View style={styles.columnContainer}>
                <Text style={styles.introHeader}>Strengths</Text>
                <View style={styles.cardsContainer}>
                  {sect.lesserBenefic.strengths.map((strength, index) => (
                    <View key={index} style={styles.card}>
                      <Text style={styles.cardText}>{strength}</Text>
                    </View>
                  ))}
                </View>
              </View>
              
              <View style={styles.columnContainer}>
                <Text style={styles.introHeader}>Challenges</Text>
                <View style={styles.cardsContainer}>
                  {sect.lesserBenefic.challenges.map((challenge, index) => (
                    <View key={index} style={styles.card}>
                      <Text style={styles.cardText}>{challenge}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
        <PageNumber />
      </Page>

      {/* Greater Malefic Page */}
      <Page size="A4" style={styles.page}>
        <View style={styles.placementsSection}>
          <Text
            id="greaterMalefic" 
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              return sectionRefs.greaterMalefic.current = pageNumber;
            }}
          />
          <View style={styles.displayIconAndText}>
            <Text style={styles.placementsTitle}>
              Greater Malefic
            </Text>
          </View>
          
          {/* Keywords as badges */}
          <View style={styles.keywordBadgesContainer}>
            {sect.greaterMalefic.keywords.map((keyword, index) => (
              <View key={index} style={styles.keywordBadge}>
                <Text style={styles.keywordText}>{keyword}</Text>
              </View>
            ))}
          </View>
          
          <View style={styles.contentContainer}>
            <Text style={styles.introText}>
              {sect.greaterMalefic.descriptionLong}
            </Text>
            
            {/* Key Traits Section - Full width with wrapping */}
            <Text style={styles.introHeader}>Key Traits</Text>
            <View style={styles.traitsContainer}>
              {sect.greaterMalefic.traits.map((trait, index) => (
                <View key={index} style={styles.traitCard}>
                  <Text style={styles.cardText}>{trait}</Text>
                </View>
              ))}
            </View>
            
            {/* Two Column Layout for Strengths and Challenges */}
            <View style={styles.twoColumnContainer}>
              <View style={styles.columnContainer}>
                <Text style={styles.introHeader}>Hidden Benefits</Text>
                <View style={styles.cardsContainer}>
                  {sect.greaterMalefic.strengths.map((strength, index) => (
                    <View key={index} style={styles.card}>
                      <Text style={styles.cardText}>{strength}</Text>
                    </View>
                  ))}
                </View>
              </View>
              
              <View style={styles.columnContainer}>
                <Text style={styles.introHeader}>Challenges</Text>
                <View style={styles.cardsContainer}>
                  {sect.greaterMalefic.challenges.map((challenge, index) => (
                    <View key={index} style={styles.card}>
                      <Text style={styles.cardText}>{challenge}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
        <PageNumber />
      </Page>

      {/* Lesser Malefic Page */}
      <Page size="A4" style={styles.page}>
        <View style={styles.placementsSection}>
          <Text
            id="lesserMalefic" 
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              return sectionRefs.lesserMalefic.current = pageNumber;
            }}
          />
          <View style={styles.displayIconAndText}>
            <Text style={styles.placementsTitle}>
              Lesser Malefic
            </Text>
          </View>
          
          {/* Keywords as badges */}
          <View style={styles.keywordBadgesContainer}>
            {sect.lesserMalefic.keywords.map((keyword, index) => (
              <View key={index} style={styles.keywordBadge}>
                <Text style={styles.keywordText}>{keyword}</Text>
              </View>
            ))}
          </View>
          
          <View style={styles.contentContainer}>
            <Text style={styles.introText}>
              {sect.lesserMalefic.descriptionLong}
            </Text>
            
            {/* Key Traits Section - Full width with wrapping */}
            <Text style={styles.introHeader}>Key Traits</Text>
            <View style={styles.traitsContainer}>
              {sect.lesserMalefic.traits.map((trait, index) => (
                <View key={index} style={styles.traitCard}>
                  <Text style={styles.cardText}>{trait}</Text>
                </View>
              ))}
            </View>
            
            {/* Two Column Layout for Strengths and Challenges */}
            <View style={styles.twoColumnContainer}>
              <View style={styles.columnContainer}>
                <Text style={styles.introHeader}>Hidden Benefits</Text>
                <View style={styles.cardsContainer}>
                  {sect.lesserMalefic.strengths.map((strength, index) => (
                    <View key={index} style={styles.card}>
                      <Text style={styles.cardText}>{strength}</Text>
                    </View>
                  ))}
                </View>
              </View>
              
              <View style={styles.columnContainer}>
                <Text style={styles.introHeader}>Challenges</Text>
                <View style={styles.cardsContainer}>
                  {sect.lesserMalefic.challenges.map((challenge, index) => (
                    <View key={index} style={styles.card}>
                      <Text style={styles.cardText}>{challenge}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
        <PageNumber />
      </Page>
      
      {/* Mercury Page with special handling */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.placementsSection}>
          <Text
            id="sectMercuryPage"
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              if (sectionRefs && sectionRefs.sectMercuryPage) {
                return sectionRefs.sectMercuryPage.current = pageNumber;
              }
              return null;
            }}
          />
          <View style={styles.displayIconAndText}>
            <Image src={planetIconsGold.mercury} style={{ width: 24, height: 24, marginRight: 12 }} />
            <Text style={styles.placementsTitle}>Mercury (Common)</Text>
          </View>

          {/* Keywords as badges */}
          <View style={styles.keywordBadgesContainer}>
            {sect.mercury.keywords && sect.mercury.keywords.map((keyword, index) => (
              <View key={index} style={styles.keywordBadge}>
                <Text style={styles.keywordText}>{keyword}</Text>
              </View>
            ))}
          </View>
            
          <View style={styles.contentContainer}>
            <Text style={styles.introText}>
              {sect.mercury.descriptionLong}
            </Text>
              
            {/* Key Traits Section - Full width with wrapping */}
            <Text style={styles.introHeader}>Key Traits</Text>
            <View style={styles.traitsContainer}>
              {sect.mercury.traits && sect.mercury.traits.map((trait, index) => (
                <View key={index} style={styles.traitCard}>
                  <Text style={styles.cardText}>{trait}</Text>
                </View>
              ))}
            </View>
              
            {/* Two Column Layout for Strengths and Challenges */}
            <View style={styles.twoColumnContainer}>
              <View style={styles.columnContainer}>
                <Text style={styles.introHeader}>Strengths</Text>
                <View style={styles.cardsContainer}>
                  {sect.mercury.strengths && sect.mercury.strengths.map((strength, index) => (
                    <View key={index} style={styles.card}>
                      <Text style={styles.cardText}>{strength}</Text>
                    </View>
                  ))}
                </View>
              </View>
                
              <View style={styles.columnContainer}>
                <Text style={styles.introHeader}>Challenges</Text>
                <View style={styles.cardsContainer}>
                  {sect.mercury.challenges && sect.mercury.challenges.map((challenge, index) => (
                    <View key={index} style={styles.card}>
                      <Text style={styles.cardText}>{challenge}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
        <PageNumber />
      </Page>
    </>
  );
};

export default renderAllSectPages;

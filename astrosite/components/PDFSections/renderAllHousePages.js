import houses from '../../data/houses';
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

// Using the house labels as keys instead of numbers
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

// Need planet icons for the house ruler section
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

// Need zodiac icons for the cusp section
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

const housesData = houses;

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

// Need to include zodiac sign ruling planets data
const zodiacSigns = {
  aries: { rulingPlanet: 'Mars' },
  taurus: { rulingPlanet: 'Venus' },
  gemini: { rulingPlanet: 'Mercury' },
  cancer: { rulingPlanet: 'Moon' },
  leo: { rulingPlanet: 'Sun' },
  virgo: { rulingPlanet: 'Mercury' },
  libra: { rulingPlanet: 'Venus' },
  scorpio: { rulingPlanet: ['Pluto', 'Mars'] },
  sagittarius: { rulingPlanet: 'Jupiter' },
  capricorn: { rulingPlanet: 'Saturn' },
  aquarius: { rulingPlanet: ['Uranus', 'Saturn'] },
  pisces: { rulingPlanet: ['Neptune', 'Jupiter'] },
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
  // Additional styles needed for the table
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

// Helper function to get planetary rulers of signs
const getSignRuler = (sign) => {
  const rulers = {
    Aries: 'Mars',
    Taurus: 'Venus',
    Gemini: 'Mercury',
    Cancer: 'Moon',
    Leo: 'Sun',
    Virgo: 'Mercury',
    Libra: 'Venus',
    Scorpio: 'Mars', // Traditional ruler (also ruled by Pluto)
    Sagittarius: 'Jupiter',
    Capricorn: 'Saturn',
    Aquarius: 'Saturn', // Traditional ruler (also ruled by Uranus)
    Pisces: 'Jupiter', // Traditional ruler (also ruled by Neptune)
  };
  
  return rulers[sign] || 'Unknown';
};

const renderSingleHousePage = (houseLabel, sectionRefs, horoscope) => {
  const houseData = housesData[houseLabel.toLowerCase()] || {};
  const houseIcon = houseIcons[houseLabel];
  const houseNumber = {
    First: 1, Second: 2, Third: 3, Fourth: 4, Fifth: 5, Sixth: 6,
    Seventh: 7, Eighth: 8, Ninth: 9, Tenth: 10, Eleventh: 11, Twelfth: 12
  }[houseLabel];
  
  // Get house data from the horoscope
  const houseInfo = horoscope?.houseCusps?.[houseLabel] || {};
  const houseSign = houseInfo.sign;
  const houseRuler = getSignRuler(houseSign);
  const planetsInHouse = houseInfo.planetsInHouse || [];
  
  // Helper function to determine if content needs size adjustment
  const needsCompression = () => {
    return (
      (houseData.themes?.length > 6) ||
      (houseData.potentials?.length + houseData.challenges?.length > 10) ||
      (houseData.descriptionLong?.length > 800)
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
      {/* House Page 1 - Main Information */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.placementsSection}>
          <Text
            id={`${houseLabel}Page`}
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              if (sectionRefs && sectionRefs[`${houseLabel}Page`]) {
                return sectionRefs[`${houseLabel}Page`].current = pageNumber;
              }
              return null;
            }}
          />
          <View style={styles.displayIconAndText}>
            <Image src={houseIcon} style={{ width: 24, height: 24, marginRight: 12 }} />
            <Text style={styles.placementsTitle}>{houseLabel} House: {houseData.name}</Text>
          </View>

          {/* Add natural ruler information */}
          <Text style={styles.reportSubtitle}>
            Natural Sign: {houseData.naturalSign}
          </Text>
          <Text style={styles.reportSubtitle}>
            Natural Ruler: {houseData.naturalRuler}
          </Text>

          {/* Keywords as badges */}
          <View style={styles.keywordBadgesContainer}>
            {houseData.keywords?.map((keyword, index) => (
              <View key={index} style={compressedStyles.keywordBadge || styles.keywordBadge}>
                <Text style={styles.keywordText}>{keyword}</Text>
              </View>
            ))}
          </View>
            
          <View style={styles.contentContainer}>
            <Text style={compressedStyles.introText || styles.introText}>
              {houseData.descriptionLong}
            </Text>
              
            {/* Key Themes Section - Full width with wrapping */}
            <Text style={styles.introHeader}>Key Themes</Text>
            <View style={styles.traitsContainer}>
              {houseData.themes?.map((theme, index) => (
                <View key={index} style={compressedStyles.traitCard || styles.traitCard}>
                  <Text style={compressedStyles.cardText || styles.cardText}>{theme}</Text>
                </View>
              ))}
            </View>
              
            {/* Two Column Layout for Potentials and Challenges */}
            <View style={styles.twoColumnContainer}>
              <View style={styles.columnContainer}>
                <Text style={styles.introHeader}>Potentials</Text>
                <View style={styles.cardsContainer}>
                  {houseData.potentials?.map((potential, index) => (
                    <View key={index} style={compressedStyles.card || styles.card}>
                      <Text style={compressedStyles.cardText || styles.cardText}>{potential}</Text>
                    </View>
                  ))}
                </View>
              </View>
                
              <View style={styles.columnContainer}>
                <Text style={styles.introHeader}>Challenges</Text>
                <View style={styles.cardsContainer}>
                  {houseData.challenges?.map((challenge, index) => (
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

      {/* House Page 2 - Chart Specific Details */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.placementsSection}>
          <Text
            id={`${houseLabel}DetailsPage`}
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              if (sectionRefs && sectionRefs[`${houseLabel}DetailsPage`]) {
                return sectionRefs[`${houseLabel}DetailsPage`].current = pageNumber;
              }
              return null;
            }}
          />
          <View style={styles.displayIconAndText}>
            <Image src={houseIcon} style={{ width: 24, height: 24, marginRight: 12 }} />
            <Text style={styles.placementsTitle}>Your {houseLabel} House</Text>
          </View>
            
          <View style={styles.contentContainer}>
            <Text style={styles.introHeader}>Your {houseData.name}</Text>
            <Text style={compressedStyles.introText || styles.introText}>
              In your birth chart, the {houseLabel} House is occupied by the sign {houseSign || '[Sign]'} and ruled by {houseRuler || '[Ruler]'}.
            </Text>
            
            <Text style={styles.introHeader}>Sign Influence</Text>
            <View style={compressedStyles.card || styles.card}>
              <Text style={{...(compressedStyles.cardText || styles.cardText), fontWeight: 700}}>
                {houseSign || '[Sign]'} in {houseLabel} House
              </Text>
              <Text style={compressedStyles.cardText || styles.cardText}>
                With {houseSign || '[Sign]'} in your {houseLabel} House, you approach matters of {houseData.name?.toLowerCase() || 'this house'} with {houseSign || '[Sign]'} qualities. This placement indicates how you express and experience this area of life.
              </Text>
            </View>

            <Text style={styles.introHeader}>Ruler Influence</Text>
            <View style={compressedStyles.card || styles.card}>
              <Text style={{...(compressedStyles.cardText || styles.cardText), fontWeight: 700}}>
                {houseRuler || '[Ruler]'} as the Ruler
              </Text>
              <Text style={compressedStyles.cardText || styles.cardText}>
                The {houseLabel} House is ruled by {houseRuler || '[Ruler]'}, which connects the themes of this house to the house where {houseRuler || '[Ruler]'} is placed in your chart. The condition of {houseRuler || '[Ruler]'} influences how effectively you handle {houseData.name?.toLowerCase() || 'this house'}.
              </Text>
            </View>
          </View>
        </View>
        <PageNumber />
      </Page>

      {/* House Page 3 - Planets in the House */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.placementsSection}>
          <Text
            id={`${houseLabel}PlanetsPage`}
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              if (sectionRefs && sectionRefs[`${houseLabel}PlanetsPage`]) {
                return sectionRefs[`${houseLabel}PlanetsPage`].current = pageNumber;
              }
              return null;
            }}
          />
          <View style={styles.displayIconAndText}>
            <Image src={houseIcon} style={{ width: 24, height: 24, marginRight: 12 }} />
            <Text style={styles.placementsTitle}>Planets in {houseLabel} House</Text>
          </View>
            
          <View style={styles.contentContainer}>
            <Text style={compressedStyles.introText || styles.introText}>
              Planets placed in your {houseLabel} House bring their unique energies to the matters of {houseData.name?.toLowerCase() || 'this house'}. These placements highlight areas of focus and potential in this domain of your life.
            </Text>
            
            {planetsInHouse && planetsInHouse.length > 0 ? (
              <>
                {planetsInHouse.map((planet, index) => (
                  <View key={index} style={compressedStyles.card || styles.card}>
                    <Text style={{...(compressedStyles.cardText || styles.cardText), fontWeight: 700}}>
                      {planet} in the {houseLabel} House
                    </Text>
                    <Text style={compressedStyles.cardText || styles.cardText}>
                      With {planet} in your {houseLabel} House, the qualities and attributes of {planet} influence how you experience and express the themes of {houseData.name?.toLowerCase() || 'this house'}.
                    </Text>
                  </View>
                ))}
              </>
            ) : (
              <View style={compressedStyles.card || styles.card}>
                <Text style={compressedStyles.cardText || styles.cardText}>
                  There are no planets in your {houseLabel} House. This doesn't diminish the importance of this house in your chart. It simply means that the energies of this house operate more through its ruler's placement and aspects.
                </Text>
              </View>
            )}
            
            <Text style={styles.introHeader}>Life Areas</Text>
            <View style={styles.cardsContainer}>
              {houseData.lifeAreas?.map((area, index) => (
                <View key={index} style={compressedStyles.card || styles.card}>
                  <Text style={compressedStyles.cardText || styles.cardText}>{area}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        <PageNumber />
      </Page>
    </>
  );
};

// Collection function that renders all houses
const renderAllHousePages = (sectionRefs, horoscope) => {
  // Houses are labeled as "First", "Second", etc.
  const houseLabels = [
    'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth',
    'Seventh', 'Eighth', 'Ninth', 'Tenth', 'Eleventh', 'Twelfth'
  ];
  
  return (
    <>
    {/* Title Page for Houses Section */}
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
          id="housesTitle"
          style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
          render={({ pageNumber }) => {
            if (sectionRefs && sectionRefs.housesTitle) {
              return sectionRefs.housesTitle.current = pageNumber;
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
            Houses
          </Text>
        </View>
        <PageNumber />
      </Page>
      
      {/* Houses Page - Moved from parent component */}
      <Page size="A4" style={styles.page}>
        <View style={styles.placementsSection}>
          <Text
            id="houses" 
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              return sectionRefs.houses.current = pageNumber;
            }}
          />
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
        <PageNumber />
      </Page>

      {/* Render the individual house pages */}
      {houseLabels.map(houseLabel => (
        <React.Fragment key={`house-section-${houseLabel}`}>
          {renderSingleHousePage(houseLabel, sectionRefs, horoscope)}
        </React.Fragment>
      ))}
    </>
  );
};

export default renderAllHousePages;

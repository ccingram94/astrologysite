import bigthree from '../../data/bigthree';
import zodiacSigns from '../../data/zodiacsigns';
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

// Icons for Big Three
const bigThreeIcons = {
  sun: `${baseUrl}/planets/sungold.jpg`,
  moon: `${baseUrl}/planets/moongold.jpg`,
  ascendant: `${baseUrl}/angles/ascendantgold.jpg`
};

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

const planetIconsGold = {
    sun: `${baseUrl}/planets/sungold.jpg`,
    moon: `${baseUrl}/planets/moongold.jpg`,
  };
  
  const angleIcons = {
    ascendant: `${baseUrl}/angles/ascendantgold.jpg`,
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
  columnPoint: {
    width: '50%',
  },
  columnPosition: {
    width: '50%',
  },
});

// Render individual Big Three component page
const renderBigThreePage = (pointKey, sectionRefs, horoscope) => {
    const pointData = bigthree[pointKey];
    const pointIcon = bigThreeIcons[pointKey];

    // Get the sign of the point from horoscope data
    let pointSign = '';
    if (pointKey === 'sun') {
    pointSign = horoscope?.planets?.Sun?.sign || '';
    } else if (pointKey === 'moon') {
    pointSign = horoscope?.planets?.Moon?.sign || '';
    } else if (pointKey === 'ascendant') {
    pointSign = horoscope?.angles?.Ascendant?.sign || '';
    }

    // Get sign-specific description for the point
    const signSpecificDesc = pointData[pointSign] || '';

    // Get sign traits from zodiacSigns data
    const signData = zodiacSigns[pointSign.toLowerCase()] || {};
    const signTraits = signData.traits || [];
  
    // Helper function to determine if content needs size adjustment
    const needsCompression = () => {
    return (
        (pointData.traits.length > 6) ||
        (pointData.strengths.length + pointData.weaknesses.length > 10) ||
        (pointData.descriptionLong.length > 800)
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

    // Add style for secondary badges
    const secondaryBadgeStyle = {
        backgroundColor: 'rgba(210, 174, 60, 0.7)', // Lighter version of the gold color
        borderRadius: 50,
        paddingVertical: compress ? 3 : 4,
        paddingHorizontal: 12,
        margin: 4,
    };
  
  return (
    <>
      {/* Sign-Specific Details Page */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.placementsSection}>
          <Text
            id={`${pointKey}SignPage`}
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              if (sectionRefs && sectionRefs[`${pointKey}SignPage`]) {
                return sectionRefs[`${pointKey}SignPage`].current = pageNumber;
              }
              return null;
            }}
          />
          <View style={styles.displayIconAndText}>
            <Text style={styles.placementsTitle}>{pointSign} {pointData.name}</Text>
          </View>
          {/* Display zodiac icon and point icon horizontally */}
          <View 
                style={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginBottom: 15
                }}>
                {pointSign && zodiacIcons[pointSign] && (
                    <Image src={zodiacIcons[pointSign]} style={{ width: 40, height: 40, marginRight: 10 }} />
                )}
                {pointIcon && (
                    <Image src={pointIcon} style={{ width: 40, height: 40 }} />
                )}
            </View>
          {/* Keywords as badges */}
          <View style={styles.keywordBadgesContainer}>
            {pointData.keywords.map((keyword, index) => (
              <View key={index} style={compressedStyles.keywordBadge || styles.keywordBadge}>
                <Text style={styles.keywordText}>{keyword}</Text>
              </View>
            ))}
          </View>
          {/* Keywords for the zodiac sign as secondary badges */}
          <View style={styles.keywordBadgesContainer}>
            {signTraits.map((trait, index) => (
              <View key={index} style={secondaryBadgeStyle}>
                <Text style={styles.keywordText}>{trait}</Text>
              </View>
            ))}
          </View>
            
          <View style={styles.contentContainer}>
            {signSpecificDesc ? (
              <Text style={compressedStyles.introText || styles.introText}>
                {signSpecificDesc}
              </Text>
            ) : (
              <Text style={compressedStyles.introText || styles.introText}>
                Your {pointData.name} is in {pointSign}, giving your {pointData.keywords[0].toLowerCase()} qualities of this zodiac sign.
              </Text>
            )}
            
            {/* Expression in Your Chart */}
            <Text style={styles.introHeader}>Expression in Your Chart</Text>
            <View style={compressedStyles.card || styles.card}>
            <Text style={{...(compressedStyles.cardText || styles.cardText), fontWeight: 700}}>
                {pointData.name} as {pointData.keywords[0]}
            </Text>
            <Text style={compressedStyles.cardText || styles.cardText}>
                {pointData.expression1[pointSign]}
            </Text>
            </View>

            {/* Add specific details based on the point type */}
            {pointKey === 'sun' && (
            <>
                <Text style={styles.introHeader}>Life Direction</Text>
                <View style={compressedStyles.card || styles.card}>
                <Text style={compressedStyles.cardText || styles.cardText}>
                    {pointData.expression2[pointSign]}
                </Text>
                </View>
            </>
            )}

            {pointKey === 'moon' && (
            <>
                <Text style={styles.introHeader}>Emotional Needs</Text>
                <View style={compressedStyles.card || styles.card}>
                <Text style={compressedStyles.cardText || styles.cardText}>
                    {pointData.expression2[pointSign]}
                </Text>
                </View>
            </>
            )}

            {pointKey === 'ascendant' && (
            <>
                <Text style={styles.introHeader}>First Impressions</Text>
                <View style={compressedStyles.card || styles.card}>
                <Text style={compressedStyles.cardText || styles.cardText}>
                    {pointData.expression2[pointSign]}
                </Text>
                </View>
            </>
            )}          
          </View>
        </View>
        <PageNumber />
      </Page>
    </>
  );
};

// Render the Big Three section pages
const renderAllBigThreePages = (sectionRefs, horoscope) => {
  const bigThreePoints = ['sun', 'moon', 'ascendant'];
  
  return (
    <>
    {/* Title Page for Big Three Section */}
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
          id="bigThreeTitle"
          style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
          render={({ pageNumber }) => {
            if (sectionRefs && sectionRefs.bigThreeTitle) {
              return sectionRefs.bigThreeTitle.current = pageNumber;
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
            Big Three
          </Text>
        </View>
        <PageNumber />
      </Page>

    {/* Placements Table Page */}
    <Page size="A4" style={styles.page}>
    <View style={styles.placementsSection}>
        <Text
        id="bigThree" 
        style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
        render={({ pageNumber }) => {
            return sectionRefs.bigThree.current = pageNumber;
        }}
        />
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
    <PageNumber />
    </Page>

    {/* Introduction to the Big Three Page */}
    <Page size="A4" style={styles.page} wrap>
    <View style={styles.placementsSection}>
        <Text
        id="bigThreeIntro"
        style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
        render={({ pageNumber }) => {
            if (sectionRefs && sectionRefs.bigThreeIntro) {
            return sectionRefs.bigThreeIntro.current = pageNumber;
            }
            return null;
        }}
        />
        <Text style={styles.placementsTitle}>About Big Three</Text>
        
        <View style={styles.contentContainer}>
        <Text style={styles.introText}>
            The "Big Three" in astrology refers to your Sun sign, Moon sign, and Ascendant (Rising sign). These three elements form the core of your astrological identity and provide a comprehensive foundation for understanding your personality and life experience.
        </Text>
        
        <Text style={styles.introHeader}>The Sun: Your Core Self</Text>
        <View style={styles.displayIconAndText}>
            <Image src={bigThreeIcons.sun} style={{ width: 16, height: 16, marginRight: 8 }} />
            <Text style={styles.introText}>
            Your Sun sign represents your essential identity, ego, purpose, and the way you express your individuality in the world. It's associated with your conscious mind and shows what motivates you to grow and develop throughout life. The Sun is what most people know as their "zodiac sign."
            </Text>
        </View>
        
        <Text style={styles.introHeader}>The Moon: Your Emotional Self</Text>
        <View style={styles.displayIconAndText}>
            <Image src={bigThreeIcons.moon} style={{ width: 16, height: 16, marginRight: 8 }} />
            <Text style={styles.introText}>
            Your Moon sign represents your emotional nature, unconscious patterns, and deepest needs. It reflects how you process feelings, what makes you feel secure, and your instinctive reactions. The Moon connects you to your past and inner world, influencing your habits and comfort zones.
            </Text>
        </View>
        
        <Text style={styles.introHeader}>The Ascendant: Your Social Self</Text>
        <View style={styles.displayIconAndText}>
            <Image src={bigThreeIcons.ascendant} style={{ width: 16, height: 16, marginRight: 8 }} />
            <Text style={styles.introText}>
            Your Ascendant, or Rising sign, represents the face you show to the world and how others initially perceive you. It describes your physical appearance, personal style, and immediate reactions to the environment. The Ascendant also determines your chart's overall structure, as it dictates the placement of all twelve houses.
            </Text>
        </View>
        
        <Text style={styles.introHeader}>Working Together</Text>
        <Text style={styles.introText}>
            When analyzing these three components together, you gain insight into the potential harmony or tension between your core identity (Sun), your emotional needs (Moon), and how you present yourself to others (Ascendant). The relationship between these three points significantly influences your life experience and self-expression.
        </Text>
        </View>
    </View>
    <PageNumber />
    </Page>
      
    {/* Individual Big Three pages */}
    {bigThreePoints.map(point => (
    <React.Fragment key={`bigthree-section-${point}`}>
        {renderBigThreePage(point, sectionRefs, horoscope)}
    </React.Fragment>
    ))}
    </>
  );
};

export default renderAllBigThreePages;

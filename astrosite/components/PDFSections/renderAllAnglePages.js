import angles from '../../data/angles';
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

// Icons for angles
const angleIcons = {
  ascendant: `${baseUrl}/angles/ascendantgold.jpg`,
  descendant: `${baseUrl}/angles/descendantgold.jpg`,
  midheaven: `${baseUrl}/angles/midheavengold.jpg`,
  imumcoeli: `${baseUrl}/angles/imumcoeligold.jpg`,
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
  sectionTitle: {
    fontSize: 24,
    marginBottom: 12,
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
  text: {
    fontSize: 12,
    marginBottom: 8,
    letterSpacing: 0.5,
    lineHeight: 1.5,
    color: '#2A303C',
    textAlign: 'justify',
  },
  introIcon: {
    width: 14,
    height: 14,
    marginRight: 8,
    marginBottom: 8,
    marginTop: 8,
  },
  columnHouseCusp: {
    width: '50%',
  },
  columnSign: {
    width: '50%',
  },
});

// Render individual angle component page
const renderAnglePage = (angleKey, sectionRefs, horoscope) => {
  // Get the angle data from angles.js data file
  const angleData = angles[angleKey];
  
  // Format the angle name (convert camelCase to Title Case if needed)
  const formattedName = angleData.name || angleKey
    .replace(/([A-Z])/g, ' $1') // Add space before capitals
    .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
    .trim();

  // Create the proper key for horoscope data lookup - remove spaces
  const horoscopeKey = formattedName.replace(/\s+/g, '');
  
  // Get the sign of the angle from horoscope data
  const angleSignData = horoscope?.angles?.[horoscopeKey] || {};
  const angleSign = angleSignData.sign || '';
  
  // Get sign-specific description for the angle
  const signSpecificDesc = angleData[angleSign] || '';
  
  // Get the angle icon
  const angleIcon = angleIcons[angleKey];

  // Helper function to determine if content needs size adjustment
  const needsCompression = () => {
    return (
      (angleData.traits?.length > 6) ||
      (angleData.strengths?.length + angleData.weaknesses?.length > 10) ||
      (angleData.descriptionLong?.length > 800) ||
      (signSpecificDesc?.length > 800)
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
      {/* General Angle Information Page */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.placementsSection}>
          <Text
            id={`angle${angleKey.charAt(0).toUpperCase() + angleKey.slice(1)}Page`}
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              if (sectionRefs && sectionRefs[`angle${angleKey.charAt(0).toUpperCase() + angleKey.slice(1)}Page`]) {
                return sectionRefs[`angle${angleKey.charAt(0).toUpperCase() + angleKey.slice(1)}Page`].current = pageNumber;
              }
              return null;
            }}
          />
          <View style={styles.displayIconAndText}>
            <Text style={styles.placementsTitle}>{formattedName}</Text>
          </View>

          {/* Add additional information */}
          <Text style={styles.reportSubtitle}>
            Angle of the {angleData.ruledHouse}
          </Text>

          {/* Keywords as badges */}
          <View style={styles.keywordBadgesContainer}>
            {angleData.keywords && angleData.keywords.map((keyword, index) => (
              <View key={index} style={compressedStyles.keywordBadge || styles.keywordBadge}>
                <Text style={styles.keywordText}>{keyword}</Text>
              </View>
            ))}
          </View>
            
          <View style={styles.contentContainer}>
            <Text style={compressedStyles.introText || styles.introText}>
              {angleData.descriptionLong}
            </Text>
              
            {/* Key Traits Section - Full width with wrapping */}
            <Text style={styles.introHeader}>Key Traits</Text>
            <View style={styles.traitsContainer}>
              {angleData.traits && angleData.traits.map((trait, index) => (
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
                  {angleData.strengths && angleData.strengths.map((strength, index) => (
                    <View key={index} style={compressedStyles.card || styles.card}>
                      <Text style={compressedStyles.cardText || styles.cardText}>{strength}</Text>
                    </View>
                  ))}
                </View>
              </View>
                
              <View style={styles.columnContainer}>
                <Text style={styles.introHeader}>Challenges</Text>
                <View style={styles.cardsContainer}>
                  {angleData.weaknesses && angleData.weaknesses.map((weakness, index) => (
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

      {/* Sign-Specific Information Page */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.placementsSection}>
          <Text
            id={`angle${angleKey.charAt(0).toUpperCase() + angleKey.slice(1)}SignPage`}
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              if (sectionRefs && sectionRefs[`angle${angleKey.charAt(0).toUpperCase() + angleKey.slice(1)}SignPage`]) {
                return sectionRefs[`angle${angleKey.charAt(0).toUpperCase() + angleKey.slice(1)}SignPage`].current = pageNumber;
              }
              return null;
            }}
          />
          <View style={styles.displayIconAndText}>
            <Text style={styles.placementsTitle}>{angleSign} {formattedName} </Text>
          </View>
            
          {/* Display angle icon and sign icon horizontally */}
          <View 
            style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: 15
            }}>
            {angleSign && zodiacIcons[angleSign] && (
              <Image src={zodiacIcons[angleSign]} style={{ width: 40, height: 40, marginRight: 10 }} />
            )}
            {angleIcon && (
              <Image src={angleIcon} style={{ width: 40, height: 40 }} />
            )}
          </View>
            
          <View style={styles.contentContainer}>
            {signSpecificDesc ? (
              <Text style={compressedStyles.introText || styles.introText}>
                {signSpecificDesc}
              </Text>
            ) : (
              <Text style={compressedStyles.introText || styles.introText}>
                Your {formattedName} is in {angleSign}, giving your {angleData.keywords[0].toLowerCase()} the qualities of this zodiac sign.
              </Text>
            )}
            
            <Text style={styles.introHeader}>Your {formattedName} in {angleSign}</Text>
            <View style={compressedStyles.card || styles.card}>
              <Text style={{...(compressedStyles.cardText || styles.cardText), fontWeight: 700}}>
                Position Details
              </Text>
              <Text style={compressedStyles.cardText || styles.cardText}>
                Your {formattedName} is at {angleSignData.degreeInSign?.degrees || 0}° {angleSignData.degreeInSign?.minutes || 0}' {angleSignData.degreeInSign?.seconds || 0}" of {angleSign}. This position influences how the {formattedName}'s qualities manifest in your life.
              </Text>
            </View>

            {/* Add specific details based on the angle type */}
            {angleKey === 'ascendant' && (
              <>
                <Text style={styles.introHeader}>Personal Expression</Text>
                <View style={compressedStyles.card || styles.card}>
                  <Text style={compressedStyles.cardText || styles.cardText}>
                    With {angleSign} rising, your personal style and approach to new situations carries the energy of this sign. Your physical appearance and first impressions you make on others are colored by {angleSign} qualities. This rising sign represents the "mask" you wear in the world and how you instinctively approach life.
                  </Text>
                </View>
              </>
            )}

            {angleKey === 'midheaven' && (
              <>
                <Text style={styles.introHeader}>Professional Direction</Text>
                <View style={compressedStyles.card || styles.card}>
                  <Text style={compressedStyles.cardText || styles.cardText}>
                    With {angleSign} on your Midheaven, your career path and public reputation carry the energy of this sign. The way you pursue your ambitions and how you're seen professionally are colored by {angleSign} qualities. This Midheaven sign represents your life direction and the legacy you're building in the world.
                  </Text>
                </View>
              </>
            )}

            {angleKey === 'descendant' && (
              <>
                <Text style={styles.introHeader}>Relationship Patterns</Text>
                <View style={compressedStyles.card || styles.card}>
                  <Text style={compressedStyles.cardText || styles.cardText}>
                    With {angleSign} on your Descendant, you tend to attract partners who embody the qualities of this sign. Your approach to relationships and what you seek in others are colored by {angleSign} traits. This Descendant sign often represents qualities you're developing within yourself through your significant relationships.
                  </Text>
                </View>
              </>
            )}

            {angleKey === 'imumcoeli' && (
              <>
                <Text style={styles.introHeader}>Inner Foundation</Text>
                <View style={compressedStyles.card || styles.card}>
                  <Text style={compressedStyles.cardText || styles.cardText}>
                    With {angleSign} on your Imum Coeli, your emotional foundation and private self carry the energy of this sign. Your home environment and relationship with your roots are colored by {angleSign} qualities. This IC sign represents your inner world and what you need to feel emotionally secure.
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

// Collection function that renders all angle pages
const renderAllAnglePages = (sectionRefs, horoscope) => {
  const angleKeys = ['ascendant', 'midheaven', 'descendant', 'imumcoeli'];
  
  return (
    <>
    {/* Title Page for Angles Section */}
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
          id="anglesTitle"
          style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
          render={({ pageNumber }) => {
            if (sectionRefs && sectionRefs.anglesTitle) {
              return sectionRefs.anglesTitle.current = pageNumber;
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
            Angles
          </Text>
        </View>
        <PageNumber />
      </Page>
      
      {/* Angles Page */}
      <Page size="A4" style={styles.page}>
        <View style={styles.placementsSection}>
          <Text
            id="angles" 
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              return sectionRefs.angles.current = pageNumber;
            }}
          />
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
              const angleData = getAngleData(angle.key, horoscope);
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
        <PageNumber />
      </Page>

      {/* About Angles Page */}
      <Page size="A4" style={styles.page}>
        <View style={styles.placementsSection}>
          <Text
            id="aboutAngles" 
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              return sectionRefs.aboutAngles.current = pageNumber;
            }}
          />
          <Text style={styles.placementsTitle}>About Angles</Text>
          
          <View>
            <Text style={styles.text}>
              In astrology, the angles of a birth chart are four critical points that form the cross-shaped structure of the horoscope. These four points—the Ascendant (ASC), Descendant (DSC), Midheaven (MC), and Imum Coeli (IC)—represent fundamental aspects of our lives and personalities.
            </Text>
            
            <Text style={styles.introHeader}>The Four Angles</Text>
            <View style={styles.displayIconAndText}>
              <Image src={angleIcons.ascendant} style={styles.introIcon} />
              <Text style={styles.text}>
                <Text style={{fontWeight: 700}}>Ascendant (ASC):</Text> Located on the eastern horizon, the Ascendant represents your outward personality, first impressions, and how you initiate experiences. It's often called the "mask" you wear in public.
              </Text>
            </View>
            
            <View style={styles.displayIconAndText}>
              <Image src={angleIcons.midheaven} style={styles.introIcon} />
              <Text style={styles.text}>
                <Text style={{fontWeight: 700}}>Midheaven (MC):</Text> At the highest point in your chart, the Midheaven represents your public image, career path, and life direction. It shows how you're seen in the world professionally.
              </Text>
            </View>
            
            <View style={styles.displayIconAndText}>
              <Image src={angleIcons.descendant} style={styles.introIcon} />
              <Text style={styles.text}>
                <Text style={{fontWeight: 700}}>Descendant (DSC):</Text> Opposite the Ascendant on the western horizon, the Descendant symbolizes relationships, partnerships, and how you relate to others. It often indicates qualities you seek in partners.
              </Text>
            </View>
            
            <View style={styles.displayIconAndText}>
              <Image src={angleIcons.imumcoeli} style={styles.introIcon} />
              <Text style={styles.text}>
                <Text style={{fontWeight: 700}}>Imum Coeli (IC):</Text> At the bottom of the chart, the Imum Coeli represents your foundations, home, family, and your private inner world. It's connected to your roots and emotional security.
              </Text>
            </View>
            
            <Text style={styles.introHeader}>Importance in Your Chart</Text>
            <Text style={styles.text}>
              The angles are considered power points in the birth chart. Planets placed near these angles have stronger influences on your life and are more prominent in your personality. The zodiac signs on each angle color how that area of life manifests for you.
            </Text>
            
            <Text style={styles.text}>
              While planets may come and go from these angles through transits, the signs on your natal angles remain fixed, representing core aspects of your personal journey. Understanding your chart's angles provides insights into the framework of your life experience—from your personal expression (ASC) to your relationships (DSC), from your public persona (MC) to your private foundations (IC).
            </Text>
          </View>
        </View>
        <PageNumber />
      </Page>
      
      {/* Axis Overview Pages */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.placementsSection}>
          <Text
            id="anglesAxisPage"
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              if (sectionRefs && sectionRefs.anglesAxisPage) {
                return sectionRefs.anglesAxisPage.current = pageNumber;
              }
              return null;
            }}
          />
          <Text style={styles.placementsTitle}>Angular Axes</Text>
          
          <View style={styles.contentContainer}>
            <Text style={styles.introText}>
              The four angles of your chart create two important axes that represent fundamental polarities in your life experience. These axes highlight the dynamic tension between opposing but complementary energies that you must integrate for personal growth and wholeness.
            </Text>
            
            
            {/* Ascendant-Descendant Axis */}
            <Text style={styles.introHeader}>Balancing the Horizon (Ascendant vs. Descendant)</Text>
            <Text style={styles.introText}>
              The Ascendant-Descendant axis represents the balance between self and other, independence and partnership, giving and receiving. Your task is to integrate the seemingly opposite qualities of your Ascendant and Descendant signs, recognizing that both represent important aspects of your being. When you can embody the strengths of your Ascendant while embracing the complementary qualities of your Descendant, you achieve greater harmony in relationships and a more complete expression of your personality.
            </Text>
            <View style={styles.card}>
              <Text style={styles.cardText}>
                Your Ascendant represents how you project yourself to the world and your approach to new experiences. With {horoscope?.angles?.Ascendant?.sign || ''} rising, you naturally express the qualities of this sign in your immediate environment and personal style.
              </Text>
            </View>

            {/* Midheaven-IC Axis */}
            <Text style={styles.introHeader}>Balancing the Meridian (Midheaven vs. Imum Coeli)</Text>
            <Text style={styles.introText}>
              The Midheaven-IC axis represents the balance between your public and private lives, outer achievement and inner security, career ambitions and emotional needs. Your task is to honor both your worldly aspirations and your need for a stable emotional foundation. When you can build a successful outer life while remaining connected to your roots and inner self, you achieve greater fulfillment and wholeness.
            </Text>
            <View style={styles.card}>
              <Text style={styles.cardText}>
                Your Midheaven represents your public role, career path, and long-term aspirations. With {horoscope?.angles?.Midheaven?.sign || ''} on the Midheaven, you express these qualities in your professional life and the legacy you're creating in the world.
              </Text>
            </View>
            
            
          </View>
        </View>
        <PageNumber />
      </Page>

      {/* Individual angle pages */}
      {angleKeys.map(angleKey => (
        <React.Fragment key={`angle-section-${angleKey}`}>
          {renderAnglePage(angleKey, sectionRefs, horoscope)}
        </React.Fragment>
      ))}
    </>
  );
};

// Function to safely get angle data
const getAngleData = (key, horoscope) => {
  return horoscope.angles?.[key] || { sign: "", degreeFormatted: "0°", degreeInSign: { degrees: 0, minutes: 0, seconds: 0 } };
};

export default renderAllAnglePages;

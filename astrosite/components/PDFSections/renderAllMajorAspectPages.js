import React from 'react';
import { Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import aspects from '../../data/aspects'; // Import the aspects data

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

// Aspect icons from the parent component
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

// Planet icons from the parent component
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

// Angle icons from the parent component
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
    fontSize: 18,
    marginTop: 15,
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
  exampleContainer: {
    width: '100%',
    marginTop: 15,
    marginBottom: 15,
  },
  exampleHeader: {
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 5,
    color: '#2A303C',
  },
});

// Get point icon helper function
const getPointIcon = (pointName) => {
  if (!pointName) return null;
  
  // Normalize the point name
  const normalizedName = pointName.toLowerCase();
  
  // Check the planet icons first
  if (planetIconsGold[normalizedName]) {
    return planetIconsGold[normalizedName];
  }
  
  // Then check angle icons
  if (angleIcons[normalizedName]) {
    return angleIcons[normalizedName];
  }
  
  // Try with 'gold' suffix
  if (angleIcons[normalizedName + 'gold']) {
    return angleIcons[normalizedName + 'gold'];
  }
  
  // Return null if no matching icon is found
  return null;
};

// Function to format aspect name properly
const formatAspectName = (aspectType) => {
  return aspectType.charAt(0).toUpperCase() + aspectType.slice(1).replace('-', ' ');
};

// Create a helper function to count aspects by type
const countAspectsByType = (horoscope, aspectType) => {
  // Check if aspects exists directly in horoscope
  if (horoscope.aspects && Array.isArray(horoscope.aspects)) {
    return horoscope.aspects.filter(aspect => aspect.name === aspectType).length;
  }
  
  // Check if Aspects.byType exists
  if (horoscope.Aspects && horoscope.Aspects.byType && horoscope.Aspects.byType[aspectType]) {
    return horoscope.Aspects.byType[aspectType].length;
  }
  
  // Check if Aspects.types exists
  if (horoscope.Aspects && horoscope.Aspects.types && horoscope.Aspects.types[aspectType]) {
    return horoscope.Aspects.types[aspectType].length;
  }
  
  // Default to 0 if no aspects found
  return 0;
};

// Main function to render all major aspect pages
const renderAllMajorAspectPages = (sectionRefs, horoscope) => {
  // These are the major aspects as identified in the parent component
  const majorAspectTypes = ['conjunction', 'opposition', 'square', 'trine', 'sextile'];
  
  // Get aspect counts for each type
  const aspectCounts = {};
  majorAspectTypes.forEach(type => {
    aspectCounts[type] = countAspectsByType(horoscope, type);
  });

  // Group aspects by type from the horoscope data
  const getAspectsByType = (horoscope) => {
    const aspectsByType = { major: {}, minor: {} };
    
    majorAspectTypes.forEach(type => {
      // First try to get from horoscope.aspects
      if (horoscope.aspects && Array.isArray(horoscope.aspects)) {
        aspectsByType.major[type] = horoscope.aspects.filter(aspect => aspect.name === type);
      }
      // Otherwise try Aspects.byType or Aspects.types
      else if (horoscope.Aspects) {
        if (horoscope.Aspects.byType && horoscope.Aspects.byType[type]) {
          aspectsByType.major[type] = horoscope.Aspects.byType[type];
        }
        else if (horoscope.Aspects.types && horoscope.Aspects.types[type]) {
          aspectsByType.major[type] = horoscope.Aspects.types[type];
        }
        else {
          aspectsByType.major[type] = [];
        }
      }
      else {
        aspectsByType.major[type] = [];
      }
    });
    
    return aspectsByType;
  };

  // Get aspects organized by type
  const aspectsByType = getAspectsByType(horoscope);

  return (
    <>
    {/* Title Page for Major Aspects Section */}
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
          id="majorAspectsTitle"
          style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
          render={({ pageNumber }) => {
            if (sectionRefs && sectionRefs.majorAspectsTitle) {
              return sectionRefs.majorAspectsTitle.current = pageNumber;
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
            Major Aspects
          </Text>
        </View>
        <PageNumber />
      </Page>
      
      {/* Major Aspects Summary Page */}
      <Page size="A4" style={styles.page}>
        <View style={styles.placementsSection}>
          <Text
            id="majorAspects" 
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              return sectionRefs.majorAspects.current = pageNumber;
            }}
          />
          <Text style={styles.placementsTitle}>Major Aspects</Text>
          
          {majorAspectTypes.map((aspectType, index) => {
            // Get aspect count for this type
            const aspectCount = aspectCounts[aspectType];
            
            // Only show aspects that exist
            if (aspectCount <= 0) return null;
            
            // Format the aspect name with proper capitalization
            const aspectName = formatAspectName(aspectType);
            // Add plural 's' for all aspect types except 'opposition'
            const formattedName = `${aspectName}${aspectType !== 'opposition' ? 's' : ''}`;
            
            // Get aspect icon
            const aspectIcon = aspectIcons[aspectType];
            
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
        <PageNumber />
      </Page>

      {/* Major Aspects Detail Pages */}
      {majorAspectTypes.map((aspectType, index) => {
        const aspectsOfType = aspectsByType.major[aspectType] || [];
        
        // Skip if no aspects of this type
        if (aspectsOfType.length === 0) return null;
        
        // Format the aspect name with proper capitalization
        const aspectName = formatAspectName(aspectType);
        
        // Get aspect icon
        const aspectIcon = aspectIcons[aspectType];
        
        return (
          <Page size="A4" style={styles.page} key={`major-${index}`}>
            <View style={styles.placementsSection}>
              {/* Section title with aspect icon */}
              <View style={[styles.displayIconAndText, { marginBottom: 15 }]}>
                {aspectIcon && (
                  <Image 
                    src={aspectIcon} 
                    style={{ width: 24, height: 24, marginRight: 12 }} 
                  />
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
                  
                  // Format point names with capitalization
                  const point1Name = aspect.point1.name?.toLowerCase() || "";
                  const point2Name = aspect.point2.name?.toLowerCase() || "";
                  
                  const formattedPoint1Name = aspect.point1.name ? 
                    aspect.point1.name.charAt(0).toUpperCase() + aspect.point1.name.slice(1) : 
                    "";
                  const formattedPoint2Name = aspect.point2.name ? 
                    aspect.point2.name.charAt(0).toUpperCase() + aspect.point2.name.slice(1) : 
                    "";
                  
                  // Get icons for points
                  const point1Icon = getPointIcon(point1Name);
                  const point2Icon = getPointIcon(point2Name);
                  const aspectTypeIcon = aspectIcons[aspectType];
                  
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
                      
                      {/* Orb column */}
                      <Text style={[styles.tableCell, { width: '25%' }]}>
                        {aspect.orb?.toFixed(1) || "0"}° 
                        {aspect.power ? ` (${aspect.power})` : ''}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
            <PageNumber />
          </Page>
        );
      })}

      {/* Individual aspect pages */}
      {majorAspectTypes.map(aspectType => (
        <React.Fragment key={`aspect-section-${aspectType}`}>
          {aspectCounts[aspectType] > 0 && renderSingleAspectPage(aspectType, sectionRefs, aspectsByType)}
        </React.Fragment>
      ))}
    </>
  );
};

// Function to render a single aspect page
const renderSingleAspectPage = (aspectType, sectionRefs, aspectsByType) => {
  const aspectsData = aspects;  // Use the imported data
  const data = aspectsData[aspectType];
  
  if (!data) return null;
  
  const aspectIcon = aspectIcons[aspectType];
  const aspectsOfType = aspectsByType?.major?.[aspectType] || [];
  const formattedName = formatAspectName(aspectType);
  
  return (
    <>
      
      {/* First page - Aspect description */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.placementsSection}>
          <Text
            id={`aspect${formattedName}Page`}
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              if (sectionRefs && sectionRefs[`aspect${formattedName}Page`]) {
                return sectionRefs[`aspect${formattedName}Page`].current = pageNumber;
              }
              return null;
            }}
          />
          <View style={styles.displayIconAndText}>
            <Image src={aspectIcon} style={{ width: 24, height: 24, marginRight: 12 }} />
            <Text style={styles.placementsTitle}>{data.name}</Text>
          </View>

          {/* Keywords as badges */}
          <View style={styles.keywordBadgesContainer}>
            {data.keywords.map((keyword, index) => (
              <View key={index} style={styles.keywordBadge}>
                <Text style={styles.keywordText}>{keyword}</Text>
              </View>
            ))}
          </View>
            
          <View style={styles.contentContainer}>
            <Text style={styles.introText}>
              {data.descriptionLong}
            </Text>
              
            {/* Key Traits Section - Full width with wrapping */}
            <Text style={styles.introHeader}>Key Traits</Text>
            <View style={styles.traitsContainer}>
              {data.traits.map((trait, index) => (
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
                  {data.strengths.map((strength, index) => (
                    <View key={index} style={styles.card}>
                      <Text style={styles.cardText}>{strength}</Text>
                    </View>
                  ))}
                </View>
              </View>
                
              <View style={styles.columnContainer}>
                <Text style={styles.introHeader}>Challenges</Text>
                <View style={styles.cardsContainer}>
                  {data.weaknesses.map((weakness, index) => (
                    <View key={index} style={styles.card}>
                      <Text style={styles.cardText}>{weakness}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
        <PageNumber />
      </Page>

      {/* Second page - Your Chart section */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.placementsSection}>
          <Text
            id={`aspect${formattedName}ExamplesPage`}
            style={{ position: 'absolute', top: 0, left: 0, fontSize: 0, color: 'transparent' }}
            render={({ pageNumber }) => {
              if (sectionRefs && sectionRefs[`aspect${formattedName}ExamplesPage`]) {
                return sectionRefs[`aspect${formattedName}ExamplesPage`].current = pageNumber;
              }
              return null;
            }}
          />
          <View style={styles.displayIconAndText}>
            <Image src={aspectIcon} style={{ width: 24, height: 24, marginRight: 12 }} />
            <Text style={styles.placementsTitle}>{data.name}</Text>
          </View>
            
          <View style={styles.contentContainer}>
            <Text style={styles.introHeader}>{data.name}s in Your Chart</Text>
            <Text style={styles.introText}>
              You have {aspectsOfType.length} {data.name.toLowerCase()}{aspectType !== 'opposition' ? 's' : ''} in your birth chart. 
              Each represents an area where the planetary energies connect in a {
                aspectType === 'conjunction' ? 'unified, focused way' :
                aspectType === 'opposition' ? 'polarized way requiring balance' :
                aspectType === 'square' ? 'challenging way that motivates growth' :
                aspectType === 'trine' ? 'harmonious, flowing way' :
                aspectType === 'sextile' ? 'supportive way offering opportunities' : 'specific way'
              }.
            </Text>
            
            {/* List of the person's actual aspects of this type */}
            {aspectsOfType.length > 0 ? (
              <View style={styles.table}>
                <View style={[styles.tableRow, styles.tableHeader]}>
                  <Text style={[styles.tableHeaderCell, { width: '30%' }]}>Planets</Text>
                  <Text style={[styles.tableHeaderCell, { width: '50%' }]}>Meaning</Text>
                  <Text style={[styles.tableHeaderCell, { width: '20%' }]}>Orb</Text>
                </View>
                
                {aspectsOfType.map((aspect, index) => {
                  if (!aspect || !aspect.point1 || !aspect.point2) return null;
                  
                  // Format point names with capitalization
                  const point1Name = aspect.point1.name ? 
                    aspect.point1.name.charAt(0).toUpperCase() + aspect.point1.name.slice(1) : 
                    "";
                  const point2Name = aspect.point2.name ? 
                    aspect.point2.name.charAt(0).toUpperCase() + aspect.point2.name.slice(1) : 
                    "";
                  
                  // Try to get the aspect meaning from the data file
                  let meaning = "";
                  try {
                    const p1 = aspect.point1.name?.toLowerCase();
                    const p2 = aspect.point2.name?.toLowerCase();
                    
                    if (p1 && p2 && aspectsData[aspectType]?.planets?.[p1]?.[p2]) {
                      meaning = aspectsData[aspectType].planets[p1][p2];
                    } else if (p1 && p2 && aspectsData[aspectType]?.planets?.[p2]?.[p1]) {
                      meaning = aspectsData[aspectType].planets[p2][p1];
                    }
                  } catch (error) {
                    console.error("Error finding aspect meaning:", error);
                  }
                  
                  // If no specific meaning found, generate a generic one
                  if (!meaning) {
                    meaning = `Connects your ${point1Name.toLowerCase()} energy with your ${point2Name.toLowerCase()} expression, creating a ${
                      aspectType === 'conjunction' ? 'focused blend' :
                      aspectType === 'opposition' ? 'dynamic polarity' :
                      aspectType === 'square' ? 'productive tension' :
                      aspectType === 'trine' ? 'natural flow' :
                      aspectType === 'sextile' ? 'helpful opportunity' : 'connection'
                    }.`;
                  }
                  
                  return (
                    <View style={styles.tableRow} key={index}>
                      <View style={[styles.tableCell, { width: '30%', flexDirection: 'row', alignItems: 'center' }]}>
                        {getPointIcon(aspect.point1.name?.toLowerCase()) && (
                          <Image 
                            src={getPointIcon(aspect.point1.name?.toLowerCase())} 
                            style={{ width: 14, height: 14, marginRight: 4 }} 
                          />
                        )}
                        {aspectIcon && (
                          <Image 
                            src={aspectIcon} 
                            style={{ width: 14, height: 14, marginHorizontal: 4 }} 
                          />
                        )}
                        {getPointIcon(aspect.point2.name?.toLowerCase()) && (
                          <Image 
                            src={getPointIcon(aspect.point2.name?.toLowerCase())} 
                            style={{ width: 14, height: 14, marginLeft: 4 }} 
                          />
                        )}
                        <Text>{point1Name}-{point2Name}</Text>
                      </View>
                      <Text style={[styles.tableCell, { width: '50%' }]}>
                        {meaning}
                      </Text>
                      <Text style={[styles.tableCell, { width: '20%' }]}>
                        {aspect.orb?.toFixed(1) || "0"}°
                        {aspect.power ? ` (${aspect.power})` : ''}
                      </Text>
                    </View>
                  );
                })}
              </View>
            ) : (
              <View style={styles.card}>
                <Text style={styles.cardText}>
                  You don't have any {data.name.toLowerCase()}{aspectType !== 'opposition' ? 's' : ''} in your birth chart. 
                  This suggests that the particular type of energy created by the {data.name.toLowerCase()} aspect 
                  is not a primary focus in your life experience.
                </Text>
              </View>
            )}
          </View>
        </View>
        <PageNumber />
      </Page>
    </>
  );
};

export default renderAllMajorAspectPages;

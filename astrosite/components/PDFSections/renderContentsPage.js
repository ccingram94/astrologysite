import React from 'react';
import { Page, Text, View, Link } from '@react-pdf/renderer';

// Define the PageNumber component locally since we need it
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

const renderContentsPage = ({ styles, sectionPages }) => {
  // Define table of contents sections
  const contentsSections = [
    { title: 'Birth Chart', id: 'birthChart' },
    { title: 'Big Three', id: 'bigThreeTitle' },
    { title: 'Angles', id: 'anglesTitle' },
    { title: 'Sect', id: 'sectTitle' },
    { title: 'Planets', id: 'planetsTitle' },
    { title: 'Houses', id: 'housesTitle' },
    { title: 'Major Aspects', id: 'majorAspectsTitle' },
    { title: 'Minor Aspects', id: 'minorAspectsTitle' },
  ];

  return (
    <Page 
      size="A4" 
      style={{ 
        ...styles.firstPage, 
        backgroundColor: '#F3EACE',
        paddingVertical: 60,
        paddingHorizontal: 50
      }}
    >
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
          {contentsSections.map((item, index) => (
            <View 
              key={index} 
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20,
                width: '100%',
              }}
            >
              <Link src={`#${item.id}`}>
                <Text style={{
                  fontSize: 18,
                  fontFamily: 'Montserrat',
                  fontWeight: 700,
                  color: '#D2AE3C'
                }}>{item.title}</Text>
              </Link>
              
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
              }}>{sectionPages[item.id]}</Text>
            </View>
          ))}
        </View>
      </View>
      <PageNumber />
    </Page>
  );
};

export default renderContentsPage;

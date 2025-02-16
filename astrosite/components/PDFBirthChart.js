'use client'
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import { format } from 'date-fns';
import zodiacSigns from '../data/zodiacsigns';
import { getDescendant, getImumCoeli, getSignFromDD, modulo } from '../utils';
import Sun from '../public/sun.svg';


// Montserrat for primary text
Font.register({
  family: 'Montserrat',
  fonts: [
    { src: '/fonts/Montserrat-Regular.ttf' },
    { src: '/fonts/Montserrat-Bold.ttf', fontWeight: 700 },
    { src: '/fonts//Montserrat-Light.ttf', fontWeight: 300 },
  ],
});

// Lato for normal text 
Font.register({
  family: 'Lato',
  fonts: [
    { src: '/fonts/Lato-Regular.ttf' },
    { src: '/fonts/Lato-Bold.ttf', fontWeight: 700 },
  ],
});

const styles = StyleSheet.create({
  page: {
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
  tableCell: {
    padding: 8,
    fontSize: 13,
    color: '#2A303C',
  },
  columnPlanet: {
    width: '25%',
  },
  columnPosition: {
    width: '40%',
  },
  columnHouse: {
    width: '35%',
  },
  columnHouseCusp: {
    width: '40%',
  },
  columnSign: {
    width: '60%',
  },
});


const PDFBirthChart = ({ horoscope, chartData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Title section remains the same */}
      <View style={styles.titleSection}>
        <Text style={styles.reportTitle}>Birth Chart</Text>
        <Text style={styles.reportSubtitle}>
          {format(horoscope.origin.utcTimeFormatted, 'PPP')} at {chartData.birthTime}
        </Text>
        <Text style={styles.reportSubtitle}>{chartData.birthLocation.label}</Text>
      </View>
      <View style={styles.placementsSection}>
        <Text style={styles.placementsTitle}>Angles</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={[styles.tableHeaderCell, styles.columnHouseCusp]}>Angle</Text>
            <Text style={[styles.tableHeaderCell, styles.columnSign]}>Position</Text>
          </View>
          {[
            { key: 'Ascendant', label: 'Ascendant (ASC)' },
            { key: 'Midheaven', label: 'Midheaven (MC)' },
          ].map((angle) => (
            <View style={styles.tableRow} key={angle.key}>
              <Text style={[styles.tableCell, styles.columnHouseCusp]}>
                {angle.label}
              </Text>
              <Text style={[styles.tableCell, styles.columnSign]}>
                {angle.getPosition 
                  ? angle.getPosition()
                  : `${horoscope[angle.key].ChartPosition.Ecliptic.ArcDegreesFormatted30} ${horoscope[angle.key].Sign.label}`
                }
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.placementsSection}>
        <Text style={styles.placementsTitle}>Big Three</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={[styles.tableHeaderCell, styles.columnHouseCusp]}>Point</Text>
            <Text style={[styles.tableHeaderCell, styles.columnSign]}>Position</Text>
          </View>
          {[
            { key: 'Sun Sign', icon: '/sun.svg', data: `${horoscope.CelestialBodies.sun.ChartPosition.Ecliptic.ArcDegreesFormatted30} ${horoscope.CelestialBodies.sun.Sign.label} ` },
            { key: 'Moon Sign', icon: '/sun.svg', data: `${horoscope.CelestialBodies.moon.ChartPosition.Ecliptic.ArcDegreesFormatted30} ${horoscope.CelestialBodies.moon.Sign.label} ` },
            { key: 'Rising Sign', icon: '/sun.svg', data: `${horoscope.Ascendant.ChartPosition.Ecliptic.ArcDegreesFormatted30}  ${ horoscope.Ascendant.Sign.label }` },
          ].map((placement) => (
            <View style={styles.tableRow} key={placement.key}>
              <Text style={[styles.tableCell, styles.columnHouseCusp]}>
                {placement.key}
              </Text>
              <Text style={[styles.tableCell, styles.columnSign]}>
                {placement.data}
              </Text>
          </View>
          ))}
        </View>
      </View>
    </Page>
    
    <Page size="A4" style={styles.page}>
      <View style={styles.placementsSection}>
        <Text style={styles.placementsTitle}>Planets</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={[styles.tableHeaderCell, styles.columnPlanet]}>Planet</Text>
            <Text style={[styles.tableHeaderCell, styles.columnPosition]}>Sign</Text>
            <Text style={[styles.tableHeaderCell, styles.columnPosition]}>Degree</Text>
            <Text style={[styles.tableHeaderCell, styles.columnHouse]}>House</Text>
          </View>
          {[
            'sun',
            'moon',
            'mercury',
            'venus',
            'mars',
            'jupiter',
            'saturn',
            'uranus',
            'neptune',
            'pluto'
          ].map((planet) => (
            <View style={styles.tableRow} key={planet}>
              <Text style={[styles.tableCell, styles.columnPlanet]}>
                {planet.charAt(0).toUpperCase() + planet.slice(1)}
              </Text>
              <Text style={[styles.tableCell, styles.columnPosition]}>
                {`${horoscope.CelestialBodies[planet].Sign.label}`}
              </Text>
              <Text style={[styles.tableCell, styles.columnPosition]}>
                {`${horoscope.CelestialBodies[planet].ChartPosition.Ecliptic.ArcDegreesFormatted30}`}
              </Text>
              <Text style={[styles.tableCell, styles.columnHouse]}>
                {horoscope.CelestialBodies[planet].House?.label}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      <View style={styles.placementsSection}>
        <Text style={styles.placementsTitle}>Houses</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={[styles.tableHeaderCell, styles.columnHouseCusp]}>House</Text>
            <Text style={[styles.tableHeaderCell, styles.columnSign]}>Cusp</Text>
            <Text style={[styles.tableHeaderCell, styles.columnSign]}>Ruler</Text>
          </View>
          {horoscope.Houses.map((house, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={[styles.tableCell, styles.columnHouseCusp]}>{house.label} House</Text>
              <Text style={[styles.tableCell, styles.columnSign]}>
                {`${house.ChartPosition.StartPosition.Ecliptic.ArcDegreesFormatted30} ${house.Sign.label}`}
              </Text>
              <Text style={[styles.tableCell, styles.columnSign]}>
                { Array.isArray(zodiacSigns[house.Sign.key].rulingPlanet) ? `${zodiacSigns[house.Sign.key].rulingPlanet[1]} (Traditional), ${zodiacSigns[house.Sign.key].rulingPlanet[0]} (Modern)` : zodiacSigns[house.Sign.key].rulingPlanet }
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      <View style={styles.placementsSection}>
        <Text style={styles.placementsTitle}>Major Aspects</Text>
      </View>
    </Page>

    {/* Major Aspects */}
    {['conjunction', 'opposition', 'square', 'trine', 'sextile'].map((aspectType, index) => (
      horoscope.Aspects.types[aspectType]?.length > 0 && (
        <Page size="A4" style={styles.page} key={index}>
          <View style={styles.placementsSection}>
            <Text style={styles.sectionTitle}>
              {aspectType.charAt(0).toUpperCase() + aspectType.slice(1)}
            </Text>
            <View style={styles.table}>
              <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={[styles.tableHeaderCell, styles.columnHouseCusp]}>Point 1</Text>
                <Text style={[styles.tableHeaderCell, styles.columnSign]}>Aspect</Text>
                <Text style={[styles.tableHeaderCell, styles.columnSign]}>Point 2</Text>
                <Text style={[styles.tableHeaderCell, styles.columnSign]}>Orb</Text>
              </View>
              {horoscope.Aspects.types[aspectType].map((aspect, index) => (
                <View style={styles.tableRow} key={index}>
                  <Text style={[styles.tableCell, styles.columnHouseCusp]}>{aspect.point1Label}</Text>
                  <Text style={[styles.tableCell, styles.columnSign]}>{aspectType}</Text>
                  <Text style={[styles.tableCell, styles.columnSign]}>{aspect.point2Label}</Text>
                  <Text style={[styles.tableCell, styles.columnSign]}>{aspect.orb.toFixed(1)}°</Text>
                </View>
              ))}
            </View>
          </View>
        </Page>
      )
    ))}   

    <Page size="A4" style={styles.page}>
      <View style={styles.placementsSection}>
        <Text style={styles.placementsTitle}>Minor Aspects</Text>
      </View>
    </Page>

    {/* Minor Aspects */}
    {['quincunx', 'quintile', 'semi-square', 'semi-sextile', 'septile'].map((aspectType, index) => (
      horoscope.Aspects.types[aspectType]?.length > 0 && (
        <Page size="A4" style={styles.page} key={index}>
          <View style={styles.placementsSection}>
            <Text style={styles.sectionTitle}>
              {aspectType.charAt(0).toUpperCase() + aspectType.slice(1).replace('-', ' ')}s
            </Text>
            <View style={styles.table}>
              <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={[styles.tableHeaderCell, styles.columnHouseCusp]}>Point 1</Text>
                <Text style={[styles.tableHeaderCell, styles.columnSign]}>Aspect</Text>
                <Text style={[styles.tableHeaderCell, styles.columnSign]}>Point 2</Text>
                <Text style={[styles.tableHeaderCell, styles.columnSign]}>Orb</Text>
              </View>
              {horoscope.Aspects.types[aspectType].map((aspect, index) => (
                <View style={styles.tableRow} key={index}>
                  <Text style={[styles.tableCell, styles.columnHouseCusp]}>{aspect.point1Label}</Text>
                  <Text style={[styles.tableCell, styles.columnSign]}>{aspectType.replace('-', ' ')}</Text>
                  <Text style={[styles.tableCell, styles.columnSign]}>{aspect.point2Label}</Text>
                  <Text style={[styles.tableCell, styles.columnSign]}>{aspect.orb.toFixed(1)}°</Text>
                </View>
              ))}
            </View>
          </View>
        </Page>
      )
    ))}


  </Document>
);

export default PDFBirthChart;
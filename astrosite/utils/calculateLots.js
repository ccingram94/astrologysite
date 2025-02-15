import isDayChart from './isDayChart';

const calculateLots = (horoscope) => {
  const { CelestialBodies } = horoscope;
  const { sun, moon, mercury, venus, mars, jupiter, saturn } = CelestialBodies;
  const ascendant = horoscope.Ascendant;
  
  // Helper function to convert degrees to 0-360 range
  const normalize360 = (degree) => {
    while (degree < 0) degree += 360;
    while (degree >= 360) degree -= 360;
    return degree;
  }

  // Get absolute positions
  const ascDegrees = ascendant.ChartPosition.Ecliptic.DecimalDegrees;
  const sunDegrees = sun.ChartPosition.Ecliptic.DecimalDegrees;
  const moonDegrees = moon.ChartPosition.Ecliptic.DecimalDegrees;
  const mercuryDegrees = mercury.ChartPosition.Ecliptic.DecimalDegrees;
  const venusDegrees = venus.ChartPosition.Ecliptic.DecimalDegrees;
  const marsDegrees = mars.ChartPosition.Ecliptic.DecimalDegrees;
  const jupiterDegrees = jupiter.ChartPosition.Ecliptic.DecimalDegrees;
  const saturnDegrees = saturn.ChartPosition.Ecliptic.DecimalDegrees;

  // Determine if it's a day or night chart
  const isDay = isDayChart(sunDegrees, ascDegrees);

  // Calculate the Lot of Fortune
  const fortune = {
    position: isDay
    ? normalize360(ascDegrees + moonDegrees - sunDegrees)
    : normalize360(ascDegrees + sunDegrees - moonDegrees),
    name: 'Lot of Fortune'
  }

  // Calculate the Lot of Spirit
  const spirit = {
    position: isDay
    ? normalize360(ascDegrees + sunDegrees - moonDegrees)
    : normalize360(ascDegrees + moonDegrees - sunDegrees),
    name: 'Lot of Spirit' 
  }

  // Calculate the Lot of Eros
  const eros = {
    position: isDay
    ? normalize360(ascDegrees + venusDegrees - spirit.position)
    : normalize360(ascDegrees + spirit.position - venusDegrees),
    name: 'Lot of Eros'
  }

  // Calculate the Lot of Necessity
  const necessity = {
    position: isDay
    ? normalize360(ascDegrees + mercuryDegrees - moonDegrees)
    : normalize360(ascDegrees + moonDegrees - mercuryDegrees),
    name: 'Lot of Necessity'
  }

  // Calculate the Lot of Courage
  const courage = {
    position: isDay
    ? normalize360(ascDegrees + marsDegrees - fortune.position)
    : normalize360(ascDegrees + fortune.position - marsDegrees),
    name: 'Lot of Courage'
  }

  // Calculate the Lot of Victory
  const victory = {
    position: isDay
    ? normalize360(ascDegrees + jupiterDegrees - spirit.position)
    : normalize360(ascDegrees + spirit.position - jupiterDegrees),
    name: 'Lot of Victory'
  }

  // Calculate the Lot of Nemesis
  const nemesis = {
    position: isDay
    ? normalize360(ascDegrees + saturnDegrees - spirit.position)
    : normalize360(ascDegrees + spirit.position - saturnDegrees),
    name: 'Lot of Nemesis'
  }

  const lots = [ fortune, spirit, eros, necessity, courage, victory, nemesis ]

  return lots;
};

export default calculateLots;

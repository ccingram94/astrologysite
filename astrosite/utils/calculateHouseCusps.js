import modulo from './modulo';
import degreesToRadians from './degreesToRadians';
import radiansToDegrees from './radiansToDegrees';
import getDegreesInSign from './getDegreesInSign';
import decimalDegreesToDMS from './decimalDegreesToDMS';
import getZodiacSign from './getZodiacSign';

const calculateHouseCusps = (houseSystem, ascDegree, mcDegree, latitude, lst) => {
  switch (houseSystem) {
    case 'whole-sign':
      return calculateWholeSignHouses(ascDegree);
    case 'equal-house':
      return calculateEqualHouses(ascDegree);
    case 'placidus':
      return calculatePlacidusHouses(ascDegree, mcDegree, latitude, lst);
    default:
      return calculateWholeSignHouses(ascDegree);
  }
};

const names = [
  'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth',
  'Seventh', 'Eighth', 'Ninth', 'Tenth', 'Eleventh', 'Twelfth'
]

const formatHouseCusp = (degree, houseNumber) => ({
  label: `${names[houseNumber - 1]}`,
  key: `${houseNumber}`,
  degree: degree,
  sign: getZodiacSign(degree),
  degreeInSign: decimalDegreesToDMS(getDegreesInSign(degree))
});

const calculateWholeSignHouses = (ascDegree) => {
  const ascSignStart = Math.floor(ascDegree / 30) * 30;
  return Array.from({ length: 12 }, (_, i) => {
    const degree = modulo(ascSignStart + (i * 30), 360);
    return formatHouseCusp(degree, i + 1);
  });
};

const calculateEqualHouses = (ascDegree) => {
  return Array.from({ length: 12 }, (_, i) => {
    const degree = modulo(ascDegree + (i * 30), 360);
    return formatHouseCusp(degree, i + 1);
  });
};

const calculatePlacidusHouses = (ascDegree, mcDegree, latitude, lst) => {
  const obliquity = 23.4367;

  const calculateSemiArc = (declination, latitude) => {
    const latRad = degreesToRadians(latitude);
    const declRad = degreesToRadians(declination);
    return radiansToDegrees(Math.acos(-Math.tan(latRad) * Math.tan(declRad)));
  };

  const calculateDeclination = (longitude) => {
    const longRad = degreesToRadians(longitude);
    const oblRad = degreesToRadians(obliquity);
    return radiansToDegrees(Math.asin(Math.sin(longRad) * Math.sin(oblRad)));
  };

  const convertRAtoEcliptic = (ra) => {
    const raRad = degreesToRadians(ra);
    const oblRad = degreesToRadians(obliquity);
    const tanL = Math.tan(raRad) * Math.cos(oblRad);
    let longitude = radiansToDegrees(Math.atan(tanL));
    
    if (ra > 90 && ra <= 270) longitude += 180;
    else if (ra > 270) longitude += 360;
    
    return modulo(longitude, 360);
  };

  const calculateIntermediate = (house, ascDeg, mcDeg, latitude) => {
    const calculations = {
      11: () => {
        const sa = calculateSemiArc(calculateDeclination(mcDeg), latitude);
        return convertRAtoEcliptic(lst + (sa * (1/3)));
      },
      12: () => {
        const sa = calculateSemiArc(calculateDeclination(mcDeg), latitude);
        return convertRAtoEcliptic(lst + (sa * (2/3)));
      },
      2: () => {
        const sa = calculateSemiArc(calculateDeclination(ascDeg), latitude);
        return convertRAtoEcliptic(lst - (sa * (2/3)));
      },
      3: () => {
        const sa = calculateSemiArc(calculateDeclination(ascDeg), latitude);
        return convertRAtoEcliptic(lst - (sa * (1/3)));
      },
      8: () => {
        const sa = calculateSemiArc(calculateDeclination(modulo(ascDeg + 180, 360)), latitude);
        return convertRAtoEcliptic((lst + 12) - (sa * (2/3)));
      },
      9: () => {
        const sa = calculateSemiArc(calculateDeclination(modulo(ascDeg + 180, 360)), latitude);
        return convertRAtoEcliptic((lst + 12) - (sa * (1/3)));
      },
      5: () => {
        const sa = calculateSemiArc(calculateDeclination(modulo(mcDeg + 180, 360)), latitude);
        return convertRAtoEcliptic((lst + 12) + (sa * (1/3)));
      },
      6: () => {
        const sa = calculateSemiArc(calculateDeclination(modulo(mcDeg + 180, 360)), latitude);
        return convertRAtoEcliptic((lst + 12) + (sa * (2/3)));
      }
    };

    return calculations[house] ? calculations[house]() : null;
  };

  const houseCusps = new Array(12);

  // Angular houses
  houseCusps[0] = formatHouseCusp(ascDegree, 1);
  houseCusps[9] = formatHouseCusp(mcDegree, 10);
  houseCusps[6] = formatHouseCusp(modulo(ascDegree + 180, 360), 7);
  houseCusps[3] = formatHouseCusp(modulo(mcDegree + 180, 360), 4);

  // Intermediate houses
  [2, 3, 5, 6, 8, 9, 11, 12].forEach(house => {
    const degree = calculateIntermediate(house, ascDegree, mcDegree, latitude);
    houseCusps[house - 1] = formatHouseCusp(degree, house);
  });

  return houseCusps;
};

export default calculateHouseCusps;

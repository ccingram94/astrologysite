'use client';

const PlacementsTable = ({ planets, newHoroscope }) => {
  return (
    <div className="overflow-x-auto text-primary">
      <table className="table table-compact bg-base-100 border border-primary/20">
        <thead>
          <tr>
            <th className="font-semibold text-primary border-b border-primary/20">Point</th>
            <th className="font-semibold text-primary border-b border-primary/20">Sign</th>
            <th className="font-semibold text-primary border-b border-primary/20">Degree</th>
            <th className="font-semibold text-primary border-b border-primary/20">House</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-xs hover:bg-base-200 transition-colors duration-200">
            <td className="border-b border-primary/10 p-2">
              <span className="text-primary font-bold">{planets.sun.symbol}</span>
              <span className="text-secondary ml-2">Sun</span>
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Sun.sign}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Sun.degreeFormatted}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Sun.house && `${getHouseLabel(newHoroscope.planets.Sun.house)}`}
            </td>
          </tr>
          <tr className="text-xs hover:bg-base-200 transition-colors duration-200">
            <td className="border-b border-primary/10 p-2">
              <span className="text-primary font-bold">{planets.moon.symbol}</span>
              <span className="text-secondary ml-2">Moon</span>
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Moon.sign}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Moon.degreeFormatted}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Moon.house && `${getHouseLabel(newHoroscope.planets.Moon.house)}`}
            </td>
          </tr>
          <tr className="text-xs hover:bg-base-200 transition-colors duration-200">
            <td className="border-b border-primary/10 p-2">
              <span className="text-primary font-bold">{planets.mercury.symbol}</span>
              <span className="text-secondary ml-2">Mercury</span>
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Mercury.sign}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Mercury.degreeFormatted}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Mercury.house && `${getHouseLabel(newHoroscope.planets.Mercury.house)}`}
            </td>
          </tr>
          <tr className="text-xs hover:bg-base-200 transition-colors duration-200">
            <td className="border-b border-primary/10 p-2">
              <span className="text-primary font-bold">{planets.venus.symbol}</span>
              <span className="text-secondary ml-2">Venus</span>
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Venus.sign}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Venus.degreeFormatted}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Venus.house && `${getHouseLabel(newHoroscope.planets.Venus.house)}`}
            </td>
          </tr>
          <tr className="text-xs hover:bg-base-200 transition-colors duration-200">
            <td className="border-b border-primary/10 p-2">
              <span className="text-primary font-bold">{planets.mars.symbol}</span>
              <span className="text-secondary ml-2">Mars</span>
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Mars.sign}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Mars.degreeFormatted}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Mars.house && `${getHouseLabel(newHoroscope.planets.Mars.house)}`}
            </td>
          </tr>
          <tr className="text-xs hover:bg-base-200 transition-colors duration-200">
            <td className="border-b border-primary/10 p-2">
              <span className="text-primary font-bold">{planets.jupiter.symbol}</span>
              <span className="text-secondary ml-2">Jupiter</span>
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Jupiter.sign}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Jupiter.degreeFormatted}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Jupiter.house && `${getHouseLabel(newHoroscope.planets.Jupiter.house)}`}
            </td>
          </tr>
          <tr className="text-xs hover:bg-base-200 transition-colors duration-200">
            <td className="border-b border-primary/10 p-2">
              <span className="text-primary font-bold">{planets.saturn.symbol}</span>
              <span className="text-secondary ml-2">Saturn</span>
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Saturn.sign}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Saturn.degreeFormatted}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Saturn.house && `${getHouseLabel(newHoroscope.planets.Saturn.house)}`}
            </td>
          </tr>
          <tr className="text-xs hover:bg-base-200 transition-colors duration-200">
            <td className="border-b border-primary/10 p-2">
              <span className="text-primary font-bold">{planets.uranus.symbol}</span>
              <span className="text-secondary ml-2">Uranus</span>
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Uranus.sign}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Uranus.degreeFormatted}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Uranus.house && `${getHouseLabel(newHoroscope.planets.Uranus.house)}`}
            </td>
          </tr>
          <tr className="text-xs hover:bg-base-200 transition-colors duration-200">
            <td className="border-b border-primary/10 p-2">
              <span className="text-primary font-bold">{planets.neptune.symbol}</span>
              <span className="text-secondary ml-2">Neptune</span>
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Neptune.sign}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Neptune.degreeFormatted}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Neptune.house && `${getHouseLabel(newHoroscope.planets.Neptune.house)}`}
            </td>
          </tr>
          <tr className="text-xs hover:bg-base-200 transition-colors duration-200">
            <td className="border-b border-primary/10 p-2">
              <span className="text-primary font-bold">{planets.pluto.symbol}</span>
              <span className="text-secondary ml-2">Pluto</span>
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Pluto.sign}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Pluto.degreeFormatted}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.planets.Pluto.house && `${getHouseLabel(newHoroscope.planets.Pluto.house)}`}
            </td>
          </tr>
          <tr className="text-xs hover:bg-base-200 transition-colors duration-200">
            <td className="border-b border-primary/10 p-2">
              <span className="text-primary font-bold">A</span>
              <span className="text-secondary ml-2">Ascendant</span>
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.angles.Ascendant.sign}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {formatDegree(newHoroscope.angles.Ascendant.degreeInSign)}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">First</td>
          </tr>
          <tr className="text-xs hover:bg-base-200 transition-colors duration-200">
            <td className="border-b border-primary/10 p-2">
              <span className="text-primary font-bold">M</span>
              <span className="text-secondary ml-2">Midheaven</span>
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.angles.Midheaven.sign}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {formatDegree(newHoroscope.angles.Midheaven.degreeInSign)}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">Tenth</td>
          </tr>
          <tr className="text-xs hover:bg-base-200 transition-colors duration-200">
            <td className="border-b border-primary/10 p-2">
              <span className="text-primary font-bold">D</span>
              <span className="text-secondary ml-2">Descendant</span>
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.angles.Descendant?.sign || (newHoroscope.angles.Ascendant?.sign && getOppositeSign(newHoroscope.angles.Ascendant.sign))}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.angles.Descendant?.degreeInSign ? formatDegree(newHoroscope.angles.Descendant.degreeInSign) : 
              newHoroscope.angles.Ascendant?.degreeInSign ? formatDegree(newHoroscope.angles.Ascendant.degreeInSign) : ''}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">Seventh</td>
          </tr>
          <tr className="text-xs hover:bg-base-200 transition-colors duration-200">
            <td className="border-b border-primary/10 p-2">
              <span className="text-primary font-bold">IC</span>
              <span className="text-secondary ml-2">Imum Coeli</span>
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.angles.ImumCoeli?.sign || (newHoroscope.angles.Midheaven?.sign && getOppositeSign(newHoroscope.angles.Midheaven.sign))}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {newHoroscope.angles.ImumCoeli?.degreeInSign ? formatDegree(newHoroscope.angles.ImumCoeli.degreeInSign) :
              newHoroscope.angles.Midheaven?.degreeInSign ? formatDegree(newHoroscope.angles.Midheaven.degreeInSign) : ''}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">Fourth</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Helper function to format degree from degreeInSign object
const formatDegree = (degreeInSign) => {
  if (!degreeInSign) return '';
  const { degrees, minutes, seconds } = degreeInSign;
  
  if (seconds) {
    return `${degrees}° ${minutes}' ${seconds}''`;
  } else {
    return `${degrees}° ${minutes}'`;
  }
};

// Helper function to get house label from house number
const getHouseLabel = (houseNumber) => {
  const houseLabels = [
    'First', 'Second', 'Third', 'Fourth', 
    'Fifth', 'Sixth', 'Seventh', 'Eighth', 
    'Ninth', 'Tenth', 'Eleventh', 'Twelfth'
  ];
  
  // Convert to zero-based index
  const index = parseInt(houseNumber) - 1;
  
  if (index >= 0 && index < 12) {
    return houseLabels[index];
  }
  
  return `House ${houseNumber}`;
};

// Helper function to get opposite sign
const getOppositeSign = (sign) => {
  const signs = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 
    'Leo', 'Virgo', 'Libra', 'Scorpio', 
    'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];
  
  const index = signs.indexOf(sign);
  if (index === -1) return null;
  
  // Return the sign that's 6 positions away (opposite)
  return signs[(index + 6) % 12];
};

export default PlacementsTable;

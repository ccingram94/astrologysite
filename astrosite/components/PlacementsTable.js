'use client';

const PlacementsTable = ({ horoscope, planets, newHoroscope }) => {
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
              {horoscope.CelestialBodies.sun.House.label}
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
              {horoscope.CelestialBodies.moon.House.label}
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
              {horoscope.CelestialBodies.mercury.House.label}
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
              {horoscope.CelestialBodies.venus.House?.label}
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
              {horoscope.CelestialBodies.mars.House.label}
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
              {horoscope.CelestialBodies.jupiter.House.label}
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
              {horoscope.CelestialBodies.saturn.House.label}
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
              {horoscope.CelestialBodies.uranus.House.label}
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
              {horoscope.CelestialBodies.neptune.House.label}
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
              {horoscope.CelestialBodies.pluto.House.label}
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
              {horoscope.Angles.ascendant.ChartPosition.Ecliptic.ArcDegreesFormatted30}
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
              {horoscope.Angles.midheaven.ChartPosition.Ecliptic.ArcDegreesFormatted30}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">Tenth</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PlacementsTable;

'use client';

const PlacementsTableSynastry = ({ horoscopeA, horoscopeB, planets }) => {
  return (
    <div className="overflow-x-hidden text-primary">
      <table className="table table-compact bg-base-100 border border-primary/20 text-center">
        <thead>
          <tr>
            <th className="font-semibold text-primary border-b border-primary/20">Point</th>
            <th className="font-semibold text-primary border-b border-primary/20">You</th>
            <th className="font-semibold text-primary border-b border-primary/20">House</th>
            <th className="font-semibold text-primary border-b border-primary/20">Them</th>
            <th className="font-semibold text-primary border-b border-primary/20">House</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries({
            sun: 'Sun',
            moon: 'Moon',
            mercury: 'Mercury',
            venus: 'Venus',
            mars: 'Mars',
            jupiter: 'Jupiter',
            saturn: 'Saturn',
            uranus: 'Uranus',
            neptune: 'Neptune',
            pluto: 'Pluto'
          }).map(([key, name]) => (
            <tr key={key} className="text-xs hover:bg-base-200 transition-colors duration-200">
              <td className="border-b border-primary/10 lg:p-2">
                <span className="text-primary font-bold">{planets[key].symbol}</span>
                <span className="text-secondary ml-2">{name}</span>
              </td>
              <td className="border-b border-primary/10 p-2 text-secondary">
                {`${horoscopeA.CelestialBodies[key].ChartPosition.Ecliptic.ArcDegreesFormatted30} ${horoscopeA.CelestialBodies[key].Sign.label}`}
              </td>
              <td className="border-b border-primary/10 p-2 text-secondary">
                {horoscopeA.CelestialBodies[key].House.label}
              </td>
              <td className="border-b border-primary/10 p-2 text-secondary">
                {`${horoscopeB.CelestialBodies[key].ChartPosition.Ecliptic.ArcDegreesFormatted30} ${horoscopeB.CelestialBodies[key].Sign.label}`}
              </td>
              <td className="border-b border-primary/10 p-2 text-secondary">
                {horoscopeB.CelestialBodies[key].House.label}
              </td>
            </tr>
          ))}
          {/* Angles */}
          <tr className="text-xs hover:bg-base-200 transition-colors duration-200">
            <td className="border-b border-primary/10 p-2">
              <span className="text-primary font-bold">A</span>
              <span className="text-secondary ml-2">Ascendant</span>
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {`${horoscopeA.Angles.ascendant.ChartPosition.Ecliptic.ArcDegreesFormatted30} ${horoscopeA.Angles.ascendant.Sign.label}`}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">First</td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {`${horoscopeB.Angles.ascendant.ChartPosition.Ecliptic.ArcDegreesFormatted30} ${horoscopeB.Angles.ascendant.Sign.label}`}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">First</td>
          </tr>
          <tr className="text-xs hover:bg-base-200 transition-colors duration-200">
            <td className="border-b border-primary/10 p-2">
              <span className="text-primary font-bold">M</span>
              <span className="text-secondary ml-2">Midheaven</span>
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {`${horoscopeA.Angles.midheaven.ChartPosition.Ecliptic.ArcDegreesFormatted30} ${horoscopeA.Angles.midheaven.Sign.label}`}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">Tenth</td>
            <td className="border-b border-primary/10 p-2 text-secondary">
              {`${horoscopeB.Angles.midheaven.ChartPosition.Ecliptic.ArcDegreesFormatted30} ${horoscopeB.Angles.midheaven.Sign.label}`}
            </td>
            <td className="border-b border-primary/10 p-2 text-secondary">Tenth</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PlacementsTableSynastry;

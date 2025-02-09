'use client';

const PlacementsTableTransitAspect = ({ horoscope, transitHoroscope, planets }) => {
  return (
    <div className="overflow-x-hidden text-primary">
      <table className="table table-compact bg-base-100 border border-primary/20 text-center">
        <thead>
          <tr>
            <th className="font-semibold text-primary border-b border-primary/20">Point</th>
            <th className="font-semibold text-primary border-b border-primary/20">Transit Sign</th>
            <th className="font-semibold text-primary border-b border-primary/20">Aspect</th>
            <th className="font-semibold text-primary border-b border-primary/20">Birth</th>
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
                {`${horoscope.CelestialBodies[key].ChartPosition.Ecliptic.ArcDegreesFormatted30} ${horoscope.CelestialBodies[key].Sign.label}`}
              </td>
              <td className="border-b border-primary/10 p-2 text-secondary">
                {horoscope.CelestialBodies[key].House.label}
              </td>
              <td className="border-b border-primary/10 p-2 text-secondary">
                {`${transitHoroscope.CelestialBodies[key].ChartPosition.Ecliptic.ArcDegreesFormatted30} ${transitHoroscope.CelestialBodies[key].Sign.label}`}
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default PlacementsTableTransitAspect;

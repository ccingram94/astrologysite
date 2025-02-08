import { evaluatePlanetaryDignity } from '../utils';

const PlanetSection = ({ horoscope, planets }) => {
    const evaluatePlanet = (planet) => {
        const planetDignity = evaluatePlanetaryDignity(planet.key.toString(), planet.Sign.label);
        return (
          <div className='collapse collapse-arrow join-item border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300'>
            <input type="radio" name="planet-accordion" />
            <div className="collapse-title flex items-center gap-2 p-4">
              <span className="text-primary text-2xl">{planets[planet.key].symbol}</span>
              <div className="flex flex-col">
                <span className="text-lg font-medium text-neutral">
                  {planet.label} in {planet.Sign.label}
                </span>
                <div className="flex gap-2 text-xs text-primary">
                  <span>{planet.ChartPosition.Ecliptic.ArcDegreesFormatted30}</span>
                  <span>•</span>
                  <span>{planet.House.label} House</span>
                  <span>•</span>
                  <span>{planet.isRetrograde ? 'Retrograde' : 'Direct'}</span>
                </div>
              </div>
            </div>
      
            <div className='collapse-content'>
              <div className="pt-4 space-y-4 text-base-content">
                {planetDignity != null && (
                  <div className="bg-base-300/50 p-3 rounded-lg">
                    <p className="font-semibold text-sm text-primary">
                      ⁂ {planetDignity} in {planet.Sign.label}
                    </p>
                  </div>
                )}
      
                <div className="prose max-w-none">
                  <p className="leading-relaxed">
                    {planets[planet.key].descriptionShort}
                  </p>
      
                  <p className="leading-relaxed">
                    {planets[planet.key][planet.Sign.label]}
                  </p>
      
                  {planetDignity != null && (
                    <p className='py-2'>
                      <i className="text-primary">
                        {planet.label} is in {planetDignity} in {planet.Sign.label}:
                      </i> 
                      <span className="text-base-content">
                        {`  ${planets[planet.key].dignity[planetDignity]}` }
                      </span>
                    </p>
                  )}
      
                  <p className="leading-relaxed">
                    {planets[planet.key][planet.House.label]}
                  </p>
                </div>
      
                <div className="bg-base-300/50 p-4 rounded-lg mt-6">
                  <p className="font-medium text-secondary mb-2">
                    Aspects to {planet.label}
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {horoscope.Aspects.points[planet.key].map((aspect, index) => (
                      <span key={index} className="text-primary">
                        {aspect.point1Label} {aspect.label} {aspect.point2Label} 
                        <span className="text-primary mx-1">⁂</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
  
    return (
      <div className="flex flex-col w-full justify-center items-center mt-12 p-2 lg:p-6 m-2">
        <h3 className="font-bold text-primary text-center text-3xl m-2">Planets</h3>
        <div className="py-2 text-xs text-justify join join-vertical w-full">
          {evaluatePlanet(horoscope.CelestialBodies.sun)}
          {evaluatePlanet(horoscope.CelestialBodies.moon)}
          {evaluatePlanet(horoscope.CelestialBodies.mercury)}
          {evaluatePlanet(horoscope.CelestialBodies.venus)}
          {evaluatePlanet(horoscope.CelestialBodies.mars)}
          {evaluatePlanet(horoscope.CelestialBodies.jupiter)}
          {evaluatePlanet(horoscope.CelestialBodies.saturn)}
          {evaluatePlanet(horoscope.CelestialBodies.uranus)}
          {evaluatePlanet(horoscope.CelestialBodies.neptune)}
          {evaluatePlanet(horoscope.CelestialBodies.pluto)}
        </div>
      </div>
    );
  };
  
  export default PlanetSection;
  
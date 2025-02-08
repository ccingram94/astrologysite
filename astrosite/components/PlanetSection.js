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
                <span className="p-2 text-lg font-extrabold text-neutral">
                  {planet.label} in {planet.Sign.label}
                </span>
                <div className="flex justify-start items-center p-2 gap-2 text-xs text-primary">
                  <span>{planet.ChartPosition.Ecliptic.ArcDegreesFormatted30}</span>
                  <span>•</span>
                  <span>{planet.House.label} House</span>
                  <span>•</span>
                  <span>{planet.isRetrograde ? 'Retrograde' : 'Direct'}</span>
                </div>
                <div className='flex flex-row flex-wrap gap-2 p-2'>
                {planets[planet.key].traits.map((trait, key) => <span key={key} className='bg-primary/10 text-xs text-primary p-1 px-2 rounded-full'>{trait}</span>)}
                </div>
              </div>
            </div>
      
            <div className='collapse-content'>
              <div className="pt-4 space-y-4 text-base-content text-sm lg:text-md">
                {planetDignity != null && (
                  <div className="bg-base-300/50 px-2 rounded-lg">
                    <p className="font-bold text-neutral">
                      {planetDignity} in {planet.Sign.label}
                    </p>
                  </div>
                )}
      
                <div className="prose max-w-none">
                  <p className="text-neutral leading-relaxed p-2">
                    {planets[planet.key].descriptionShort}
                  </p>
      
                  <p className="text-neutral leading-relaxed p-2">
                    {planets[planet.key][planet.Sign.label]}
                  </p>
      
                  {planetDignity != null && (
                    <p className='text-neutral leading-relaxed p-2'>
                      <i>
                        {planet.label} is in {planetDignity} in {planet.Sign.label}:
                      </i> 
                      <span className="text-neutral leading-relaxed p-2">
                        {`  ${planets[planet.key].dignity[planetDignity]}` }
                      </span>
                    </p>
                  )}
      
                  <p className="text-neutral leading-relaxed p-2">
                    {planets[planet.key][planet.House.label]}
                  </p>
                </div>
      
                <div className="bg-base-300/50 p-2 rounded-lg">
                  <p className="font-bold text-neutral mb-2">
                    Aspects to {planet.label}
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {horoscope.Aspects.points[planet.key].map((aspect, index) => (
                      <span key={index} className="text-primary text-xs bg-primary/10 rounded-full p-2">
                        {aspect.point1Label} {aspect.label} {aspect.point2Label}
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
  
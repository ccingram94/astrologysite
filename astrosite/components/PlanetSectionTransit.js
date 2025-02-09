import { evaluatePlanetaryDignity } from '../utils';
import planetsTransit from '../data/planetsTransit';

const PlanetSection = ({ horoscope, transitHoroscope }) => {

  const getNatalHouse = (transitPlanet, horoscope) => {
    // Get transit planet's absolute position (0-360 degrees)
    const transitDegree = transitPlanet.ChartPosition.Ecliptic.DecimalDegrees;

    // Function to normalize degrees to 0-360
    const normalizeDegrees = (deg) => {
        while (deg < 0) deg += 360;
        while (deg >= 360) deg -= 360;
        return deg;
    };

    const normalizedTransitDegree = normalizeDegrees(transitDegree);

    // Check each house
    for (const house of horoscope.Houses) {
        const startDegree = normalizeDegrees(house.ChartPosition.StartPosition.Ecliptic.DecimalDegrees);
        const endDegree = normalizeDegrees(house.ChartPosition.EndPosition.Ecliptic.DecimalDegrees);

        if (endDegree < startDegree) {
            // House spans over 0° Aries
            if (normalizedTransitDegree >= startDegree || normalizedTransitDegree < endDegree) {
                return house.label;
            }
        } else {
            // Normal case
            if (normalizedTransitDegree >= startDegree && normalizedTransitDegree < endDegree) {
                return house.label;
            }
        }
    }

    return 'First'; // Default fallback
};





    const evaluatePlanet = (planet, horoscope) => {
        const planetDignity = evaluatePlanetaryDignity(planet.key.toString(), planet.Sign.label);
        const planetData = planetsTransit[planet.key];
        const natalHouseNumber = getNatalHouse(planet, horoscope);
        const natalHouseLabel = natalHouseNumber;
        return (
          <div className='collapse collapse-arrow join-item border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300'>
            <input type="radio" name="planet-accordion" />
            <div className="collapse-title flex items-center gap-2 p-4">
              <span className="text-primary text-2xl">{planetsTransit[planet.key].symbol}</span>
              <div className="flex flex-col">
                <span className="p-2 text-lg font-extrabold text-neutral">
                  Transit {planet.label} in {planet.Sign.label}
                </span>
                <div className="flex justify-start items-center p-2 gap-2 text-xs text-primary">
                  <span>{planet.ChartPosition.Ecliptic.ArcDegreesFormatted30}</span>
                  <span>•</span>
                  <span>in Natal {natalHouseLabel} House</span>
                  <span>•</span>
                  <span>{planet.isRetrograde ? 'Retrograde' : 'Direct'}</span>
                </div>
                <div className='flex flex-row flex-wrap gap-2 p-2'>
                {planetsTransit[planet.key].events.map((event, key) => <span key={key} className='bg-primary/10 text-xs text-primary p-1 px-2 rounded-full'>{event}</span>)}
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
                    {planetsTransit[planet.key].descriptionShort}
                  </p>
      
                  <p className="text-neutral leading-relaxed p-2">
                    {planetsTransit[planet.key].transitSigns[planet.Sign.label]}
                  </p>
      
                  {planetDignity != null && (
                    <p className='text-neutral leading-relaxed p-2'>
                      <i>
                        {planet.label} is in {planetDignity} in {planet.Sign.label}:
                      </i> 
                      <span className="text-neutral leading-relaxed p-2">
                        {`  ${planetsTransit[planet.key].dignity[planetDignity]}` }
                      </span>
                    </p>
                  )}
      
                  <p className="text-neutral leading-relaxed p-2">
                  {planetsTransit[planet.key].transitHouses[natalHouseLabel]}
                  </p>
                </div>
      
                <div className="bg-base-300/50 p-2 rounded-lg">
                  <p className="font-bold text-neutral mb-2">
                    Transiting {planet.label} Aspects
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
        <h3 className="font-bold text-primary text-center text-3xl m-2">Planet Transits</h3>
        <div className="py-2 text-xs text-justify join join-vertical w-full">
          {evaluatePlanet(transitHoroscope.CelestialBodies.sun, horoscope)}
          {evaluatePlanet(transitHoroscope.CelestialBodies.moon, horoscope)}
          {evaluatePlanet(transitHoroscope.CelestialBodies.mercury, horoscope)}
          {evaluatePlanet(transitHoroscope.CelestialBodies.venus, horoscope)}
          {evaluatePlanet(transitHoroscope.CelestialBodies.mars, horoscope)}
          {evaluatePlanet(transitHoroscope.CelestialBodies.jupiter, horoscope)}
          {evaluatePlanet(transitHoroscope.CelestialBodies.saturn, horoscope)}
          {evaluatePlanet(transitHoroscope.CelestialBodies.uranus, horoscope)}
          {evaluatePlanet(transitHoroscope.CelestialBodies.neptune, horoscope)}
          {evaluatePlanet(transitHoroscope.CelestialBodies.pluto, horoscope)}
        </div>
      </div>
    );
  };
  
  export default PlanetSection;
  
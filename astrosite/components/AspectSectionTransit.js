import { getAllTransitAspects } from '../utils/calculateAspect';

const AspectSectionTransit = ({ horoscope, aspectsTransit, transitHoroscope }) => {
  // Set up planet arrays
  const birthPlanets = [
    horoscope.CelestialBodies.sun,
    horoscope.CelestialBodies.moon,
    horoscope.CelestialBodies.mercury,
    horoscope.CelestialBodies.venus,
    horoscope.CelestialBodies.mars,
    horoscope.CelestialBodies.jupiter,
    horoscope.CelestialBodies.saturn,
    horoscope.CelestialBodies.uranus,
    horoscope.CelestialBodies.neptune,
    horoscope.CelestialBodies.pluto,
  ];

  const transitPlanets = [
    transitHoroscope.CelestialBodies.sun,
    transitHoroscope.CelestialBodies.moon,
    transitHoroscope.CelestialBodies.mercury,
    transitHoroscope.CelestialBodies.venus,
    transitHoroscope.CelestialBodies.mars,
    transitHoroscope.CelestialBodies.jupiter,
    transitHoroscope.CelestialBodies.saturn,
    transitHoroscope.CelestialBodies.uranus,
    transitHoroscope.CelestialBodies.neptune,
    transitHoroscope.CelestialBodies.pluto,
  ];

  // Calculate all aspects
  const allAspects = getAllTransitAspects(transitPlanets, birthPlanets);

  // Group aspects by type
  const groupedAspects = allAspects.reduce((acc, aspect) => {
    if (!acc[aspect.name]) {
      acc[aspect.name] = [];
    }
    acc[aspect.name].push(aspect);
    return acc;
  }, {});

  const evaluateAspect = (aspectType) => {
    const aspectData = groupedAspects[aspectType];
    
    // Helper function to format aspect name
    const formatAspectName = (name) => {
      return name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('-');
    };

    // Get the appropriate aspects object for descriptions
    const getAspectsObject = (type) => {
      const aspectsMap = {
        'conjunction': aspectsTransit.conjunction,
        'opposition': aspectsTransit.opposition,
        'square': aspectsTransit.square,
        'trine': aspectsTransit.trine,
        'sextile': aspectsTransit.sextile,
        'quincunx': aspectsTransit.quincunx,
        'quintile': aspectsTransit.quintile,
        'semi-square': aspectsTransit.semisquare,
        'semi-sextile': aspectsTransit.semisextile,
        'septile': aspectsTransit.septile
      };
      return aspectsMap[type];
    };

    // If there are no aspects of this type, return null
    if (!aspectData || aspectData.length === 0) return null;

    return (
      <div className='collapse collapse-arrow join-item border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300'>
        <input type="radio" name="aspect-accordion" />
        <div className="collapse-title flex items-center justify-start text-start gap-2 p-4">
          <span className="text-primary text-2xl">
            {aspectData[0].symbol}
          </span>
          <div className="flex flex-col">
            <span className="p-2 text-lg font-extrabold text-neutral">
              {formatAspectName(aspectType)} Aspects
            </span>
            <div className="flex justify-start items-center p-2 gap-2 text-xs text-primary">
              <span>{aspectData.length} {aspectData.length === 1 ? 'aspect' : 'aspects'} found</span>
              <span>•</span>
            </div>
            <div className='flex flex-row flex-wrap gap-2 p-2'>
              {getAspectsObject(aspectType).traits.map((trait, index) => 
                <span key={index} className='bg-primary/10 text-xs text-primary p-1 px-2 rounded-full'>{trait}</span>
              )}
            </div>
          </div>
        </div>

        <div className='collapse-content'>
          <div className="space-y-2">
            {aspectData.map((aspect, index) => (
              <div key={index} className="p-2">
                <div className="flex items-center gap-2">
                  <h4 className="text-neutral/80 font-extrabold">
                    Transit {aspect.transitPlanet.label} {aspect.symbol} Natal {aspect.natalPlanet.label}
                  </h4>
                  <span className="text-xs text-primary/80">
                    (orb: {aspect.orb}°)
                  </span>
                </div>
                
                <div className="prose max-w-none text-sm text-justify">
                  <p className="text-neutral leading-relaxed">
                    {getAspectsObject(aspectType).planets[aspect.transitPlanet.key][aspect.natalPlanet.key]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col text-center justify-center items-center p-2 lg:p-6 m-2">
      <h3 className="font-bold text-primary text-3xl m-2">Major Aspects</h3>
      <div className="p-2 m-2 join join-vertical w-full">
        {evaluateAspect('conjunction')}
        {evaluateAspect('opposition')}
        {evaluateAspect('square')}
        {evaluateAspect('trine')}
        {evaluateAspect('sextile')}
      </div>

      <h3 className="font-bold text-primary text-3xl m-2 mt-6">Minor Aspects</h3>
      <div className="p-2 m-2 join join-vertical w-full">
        {evaluateAspect('quincunx')}
        {evaluateAspect('quintile')}
        {evaluateAspect('semi-square')}
        {evaluateAspect('semi-sextile')}
        {evaluateAspect('septile')}
      </div>
    </div>
  );
};

export default AspectSectionTransit;
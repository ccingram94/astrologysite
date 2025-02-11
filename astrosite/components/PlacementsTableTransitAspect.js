'use client';
import { getAllTransitAspects } from "../utils/calculateAspect";

const AspectTable = ({ aspects, title }) => {
  if (!aspects || aspects.length === 0) return null;
  
  const planetNames = [
    'Sun', 'Moon', 'Mercury', 'Venus', 'Mars',
    'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'
  ];

  return (
    // Remove width classes since grid will handle this
    <div className="p-2 break-inside-avoid-column">
      <h4 className="font-semibold text-md p-2 text-center">{title}</h4>
      <table className="table table-compact w-full bg-base-100 border border-primary/20 text-center">
        <thead>
          <tr>
            <th className="font-semibold text-primary border-b border-primary/20">Transit</th>
            <th className="font-semibold text-primary border-b border-primary/20">Aspect</th>
            <th className="font-semibold text-primary border-b border-primary/20">Natal</th>
          </tr>
        </thead>
        <tbody>
          {aspects.map((aspect, index) => (
            <tr key={index} className="text-xs hover:bg-base-200 transition-colors duration-200">
              <td className="border-b border-primary/10 lg:p-2">
                {planetNames[aspect.transitIndex]}
              </td>
              <td className="border-b border-primary/10 p-2">
                <span className="text-primary font-bold">{aspect.symbol}</span>
                <span className="text-secondary ml-2">
                  ({aspect.orb}°)
                </span>
              </td>
              <td className="border-b border-primary/10 p-2">
                {planetNames[aspect.natalIndex]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PlacementsTableTransitAspect = ({ horoscope, transitHoroscope, planets }) => {
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

  const aspects = getAllTransitAspects(transitPlanets, birthPlanets);

  // Group aspects by type
  const groupedAspects = aspects.reduce((acc, aspect) => {
    if (!acc[aspect.name]) {
      acc[aspect.name] = [];
    }
    acc[aspect.name].push(aspect);
    return acc;
  }, {});

  return (
    <div className="w-full">
      <h3 className="font-semibold text-lg lg:text-xl p-2 text-center">
        Transit Planets in Aspect to Natal Planets
      </h3>
      {/* Use CSS columns for a masonry-like layout */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {/* Major Aspects First */}
        <AspectTable 
          aspects={groupedAspects['conjunction']} 
          title="Conjunctions" 
        />
        <AspectTable 
          aspects={groupedAspects['opposition']} 
          title="Oppositions" 
        />
        <AspectTable 
          aspects={groupedAspects['trine']} 
          title="Trines" 
        />
        <AspectTable 
          aspects={groupedAspects['square']} 
          title="Squares" 
        />
        <AspectTable 
          aspects={groupedAspects['sextile']} 
          title="Sextiles" 
        />
        
        {/* Minor Aspects */}
        <AspectTable 
          aspects={groupedAspects['quincunx']} 
          title="Quincunxes" 
        />
        <AspectTable 
          aspects={groupedAspects['quintile']} 
          title="Quintiles" 
        />
        <AspectTable 
          aspects={groupedAspects['septile']} 
          title="Septiles" 
        />
        <AspectTable 
          aspects={groupedAspects['semi-square']} 
          title="Semi-Squares" 
        />
        <AspectTable 
          aspects={groupedAspects['semi-sextile']} 
          title="Semi-Sextiles" 
        />
      </div>
    </div>
  );
};

export default PlacementsTableTransitAspect;

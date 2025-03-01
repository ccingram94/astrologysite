import { evaluatePlanetaryDignity } from '../utils';
import { useState } from 'react';
import Image from 'next/image';

const PlanetSection = ({ horoscope, planets }) => {
  const [activePlanet, setActivePlanet] = useState(null);

  const aspectIcons = {
    conjunction: { uri: `/conjunctiongold.png` },
    opposition: { uri: `/oppositiongold.png` },
    square: { uri: `/squaregold.png` },
    trine: { uri: `/trinegold.png` },
    sextile: { uri: `/sextilegold.png` },
    quincunx: { uri: `/quincunxgold.png` },
    quintile: { uri: `/quintilegold.png` },
    'semi-square': { uri: `/semisquaregold.png` },
    'semi-sextile': { uri: `/semisextilegold.png` },
    septile: { uri: `/septilegold.png` },
  };

  const handleToggle = (key) => {
    setActivePlanet(activePlanet === key ? null : key);
  };

  const evaluatePlanet = (planet) => {
    const planetDignity = evaluatePlanetaryDignity(planet.key.toString(), planet.Sign.label);
    const isActive = activePlanet === planet.key;
    
    // Determine dignity badge color
    const dignityColors = {
      'Domicile': 'bg-success/20 text-success',
      'Exaltation': 'bg-success/10 text-success',
      'Detriment': 'bg-error/10 text-error',
      'Fall': 'bg-error/20 text-error',
      'Neutral': 'bg-info/10 text-info'
    };
    
    // Get dignity color or default
    const dignityColor = planetDignity ? dignityColors[planetDignity] || 'bg-primary/10 text-primary' : '';
    
    return (
      <div 
        key={planet.key}
        className={`transition-all duration-300 overflow-hidden rounded-xl border 
                   ${isActive 
                     ? 'border-primary/20 bg-gradient-to-r from-primary/5 to-transparent shadow-md mb-4' 
                     : 'border-base-300/30 bg-base-100 mb-2'}`}
      >
        {/* Planet Header */}
        <div 
          className={`flex items-start gap-3 p-4 cursor-pointer ${isActive ? 'pb-2' : ''}`}
          onClick={() => handleToggle(planet.key)}
        >
          {/* Planet Symbol */}
          <div className={`text-3xl font-bold p-3 rounded-full bg-primary/10 text-primary 
                         flex items-center justify-center min-w-[3rem] h-12
                         ${isActive ? 'bg-primary/15' : ''}`}>
            {planets[planet.key].symbol}
          </div>
          
          {/* Planet Info */}
          <div className="flex flex-col flex-grow">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-primary">
                {planet.label} in {planet.Sign.label}
              </h4>
              <button 
                className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
                aria-label="Toggle planet details"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
            </div>
            
            {/* Position Details */}
            <div className="flex flex-wrap items-center text-sm text-primary/70 mt-1 gap-2">
              <span className="font-medium">{planet.ChartPosition.Ecliptic.ArcDegreesFormatted30}</span>
              <span className="inline-block w-1 h-1 bg-current rounded-full"></span>
              <span>{planet.House?.label} House</span>
              <span className="inline-block w-1 h-1 bg-current rounded-full"></span>
              <span>
                {planet.isRetrograde 
                  ? <span className="text-error">Retrograde</span> 
                  : <span className="text-success">Direct</span>}
              </span>
              
              {/* Dignity Badge */}
              {planetDignity && (
                <>
                  <span className="inline-block w-1 h-1 bg-current rounded-full"></span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${dignityColor}`}>
                    {planetDignity}
                  </span>
                </>
              )}
            </div>

            {/* Planet Keywords */}
            {!isActive && (
              <div className="flex flex-wrap gap-1 mt-2">
                {planets[planet.key].traits.slice(0, 3).map((trait, key) => (
                  <span key={key} className="text-xs bg-primary/5 text-primary/80 px-2 py-0.5 rounded-full">
                    {trait}
                  </span>
                ))}
                {planets[planet.key].traits.length > 3 && (
                  <span className="text-xs text-primary/60">+{planets[planet.key].traits.length - 3} more</span>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Planet Details (Expanded) */}
        {isActive && (
          <div className="px-4 pb-5 space-y-5 animate-fadeIn">
            {/* Trait Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {planets[planet.key].traits.map((trait, key) => (
                <span key={key} className="bg-primary/10 text-primary/90 text-xs px-2 py-1 rounded-full">
                  {trait}
                </span>
              ))}
            </div>
            
            <hr className="border-primary/10" />
            
            <div className="space-y-4 text-base-content/90">
              {/* Descriptions */}
              <div className="space-y-3">
                <p className="leading-relaxed">
                  {planets[planet.key].descriptionShort}
                </p>
                
                <p className="leading-relaxed">
                  {planets[planet.key][planet.Sign.label]}
                </p>
                
                {planetDignity && (
                  <div className={`p-3 rounded-lg ${dignityColor.replace('text-', 'text-').replace('bg-', 'bg-')}`}>
                    <p className="font-medium">
                      <span className="font-bold">{planet.label}</span> is in {planetDignity.toLowerCase()} in {planet.Sign.label}:
                    </p>
                    <p className="mt-1">
                      {planets[planet.key].dignity[planetDignity]}
                    </p>
                  </div>
                )}
                
                <p className="leading-relaxed">
                  {planets[planet.key][planet.House?.label]}
                </p>
              </div>
              
              {/* Aspects */}
              <div className="bg-base-200/50 p-4 rounded-lg">
                <h5 className="font-bold text-primary mb-3">Aspects to {planet.label}</h5>
                {horoscope.Aspects.points[planet.key].length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {horoscope.Aspects.points[planet.key].map((aspect, index) => {
                      const iconSrc = aspectIcons[aspect.label.toLowerCase()]?.uri || null;
                      
                      return (
                        <div key={index} 
                            className="flex items-center gap-2 bg-base-100 p-2 rounded-lg border border-primary/10 shadow-sm hover:shadow transition-shadow">
                            <span className="text-xs px-1.5 py-0.5 bg-primary/10 rounded-full">
                              {aspect.label}
                            </span>
                          <span className="text-primary font-medium">{aspect.point1Label}</span>
                          <div className="flex items-center gap-1.5">
                            {iconSrc && (
                              <div className="relative flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                <Image 
                                  src={iconSrc} 
                                  alt={aspect.label}
                                  width={20} 
                                  height={20}
                                  className="object-contain"
                                />
                              </div>
                            )}
                          </div>
                          
                          <span className="text-primary font-medium">{aspect.point2Label}</span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-sm text-base-content/70 italic">No major aspects found.</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  return (
    <div className="max-w-4xl mx-auto mt-16 px-4">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Planetary Placements
        </h3>
        <p className="mt-2 text-base-content/70">
          Explore the position and influence of each planet in your chart
        </p>
      </div>
      
      <div className="space-y-2">
        {Object.values(horoscope.CelestialBodies)
          .filter(body => ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'].includes(body.key))
          .map(planet => evaluatePlanet(planet))}
      </div>
    </div>
  );
};

export default PlanetSection;

import { useState } from 'react';

const HouseSection = ({ horoscope, houses, zodiacSigns }) => {
  const [activeHouse, setActiveHouse] = useState(null);

  const handleToggle = (id) => {
    setActiveHouse(activeHouse === id ? null : id);
  };

  const evaluateHouse = (house) => {
    const isActive = activeHouse === house.id;
    const hasMultipleRulers = Array.isArray(zodiacSigns[house.Sign.key].rulingPlanet);
    
    return (
      <div 
        key={house.id}
        className={`transition-all duration-300 overflow-hidden rounded-xl border 
                   ${isActive 
                     ? 'border-primary/20 bg-gradient-to-r from-primary/5 to-transparent shadow-md mb-4' 
                     : 'border-base-300/30 bg-base-100 mb-2'}`}
      >
        {/* House Header */}
        <div 
          className={`flex items-start gap-3 p-4 cursor-pointer ${isActive ? 'pb-2' : ''}`}
          onClick={() => handleToggle(house.id)}
        >
          {/* House Number */}
          <div className={`text-2xl font-bold p-3 rounded-full bg-primary/10 text-primary 
                         flex items-center justify-center min-w-[3rem] h-12
                         ${isActive ? 'bg-primary/15' : ''}`}>
            {house.id}
          </div>
          
          {/* House Info */}
          <div className="flex flex-col flex-grow">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-primary">
                {house.label} House in {house.Sign.label}
              </h4>
              <button 
                className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
                aria-label="Toggle house details"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
            </div>
            
            {/* Position Details */}
            <div className="flex flex-wrap items-center text-sm text-primary/70 mt-1 gap-2">
              <span className="font-medium">Cusp at {house.ChartPosition.StartPosition.Ecliptic.ArcDegreesFormatted30}</span>
              <span className="inline-block w-1 h-1 bg-current rounded-full"></span>
              <span>{house.Sign.label}</span>
            </div>
            
            {/* Ruler Badges - Both single and multiple rulers */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {!hasMultipleRulers ? (
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                  Ruled by {zodiacSigns[house.Sign.key].rulingPlanet}
                </span>
              ) : (
                <>
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                    Traditional: {zodiacSigns[house.Sign.key].rulingPlanet[1]}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Modern: {zodiacSigns[house.Sign.key].rulingPlanet[0]}
                  </span>
                </>
              )}
            </div>

            {/* House Keywords - only shown when collapsed */}
            {!isActive && (
              <div className="flex flex-wrap gap-1 mt-2">
                {houses[house.label].traits.slice(0, 3).map((trait, key) => (
                  <span key={key} className="text-xs bg-primary/5 text-primary/80 px-2 py-0.5 rounded-full">
                    {trait}
                  </span>
                ))}
                {houses[house.label].traits.length > 3 && (
                  <span className="text-xs text-primary/60">+{houses[house.label].traits.length - 3} more</span>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* House Details (Expanded) */}
        {isActive && (
          <div className="px-4 pb-5 space-y-5 animate-fadeIn">
            {/* Trait Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {houses[house.label].traits.map((trait, key) => (
                <span key={key} className="bg-primary/10 text-primary/90 text-xs px-2 py-1 rounded-full">
                  {trait}
                </span>
              ))}
            </div>
            
            <hr className="border-primary/10" />
            
            <div className="space-y-5 text-base-content/90">
              {/* House Description */}
              <div className="space-y-3">
                <p className="leading-relaxed">
                  {houses[house.label].descriptionShort}
                </p>
                
                <p className="leading-relaxed">
                  {houses[house.label].sign[house.Sign.label]}
                </p>
              </div>
              
              {/* House Rulers Section */}
              {!hasMultipleRulers ? (
                <div className="bg-base-200/50 p-4 rounded-lg space-y-3">
                  <div className="flex items-center">
                    <div className="p-2 rounded-md bg-secondary/10 mr-3">
                      <span className="font-bold text-secondary">
                        {zodiacSigns[house.Sign.key].rulingPlanet}
                      </span>
                    </div>
                    <div>
                      <h5 className="font-medium">House Ruler</h5>
                      <p className="text-sm text-base-content/70">
                        in {horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet.toLowerCase()}`].Sign.label} in 
                        the {horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet.toLowerCase()}`].House?.label} House
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-2">
                    <p className="leading-relaxed">
                      {houses[house.label].ruler[zodiacSigns[house.Sign.key].rulingPlanet]}
                    </p>
                    <p className="leading-relaxed">
                      {houses[house.label].rulerSign[horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet.toLowerCase()}`].Sign.label]}
                    </p>
                    <p className="leading-relaxed">
                      {houses[house.label].rulerHouse[horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet.toLowerCase()}`].House?.label]}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Traditional Ruler Card */}
                  <div className="bg-base-200/50 p-4 rounded-lg space-y-3">
                    <div className="flex items-center">
                      <div className="p-2 rounded-md bg-secondary/10 mr-3">
                        <span className="font-bold text-secondary">
                          {zodiacSigns[house.Sign.key].rulingPlanet[1]}
                        </span>
                      </div>
                      <div>
                        <h5 className="font-medium">Traditional Ruler</h5>
                        <p className="text-sm text-base-content/70">
                          in {horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[1].toLowerCase()}`].Sign.label} in 
                          the {horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[1].toLowerCase()}`].House.label} House
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mt-2">
                      <p className="leading-relaxed">{houses[house.label].ruler[zodiacSigns[house.Sign.key].rulingPlanet[1]]}</p>
                      <p className="leading-relaxed">{houses[house.label].rulerSign[`${horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[1].toLowerCase()}`].Sign.label}`]}</p>
                      <p className="leading-relaxed">{houses[house.label].rulerHouse[`${horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[1].toLowerCase()}`].House.label}`]}</p>
                    </div>
                  </div>
                  
                  {/* Modern Ruler Card */}
                  <div className="bg-base-200/50 p-4 rounded-lg space-y-3">
                    <div className="flex items-center">
                      <div className="p-2 rounded-md bg-primary/10 mr-3">
                        <span className="font-bold text-primary">
                          {zodiacSigns[house.Sign.key].rulingPlanet[0]}
                        </span>
                      </div>
                      <div>
                        <h5 className="font-medium">Modern Ruler</h5>
                        <p className="text-sm text-base-content/70">
                          in {horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[0].toLowerCase()}`].Sign.label} in 
                          the {horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[0].toLowerCase()}`].House.label} House
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mt-2">
                      <p className="leading-relaxed">{houses[house.label].ruler[zodiacSigns[house.Sign.key].rulingPlanet[0]]}</p>
                      <p className="leading-relaxed">{houses[house.label].rulerSign[`${horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[0].toLowerCase()}`].Sign.label}`]}</p>
                      <p className="leading-relaxed">{houses[house.label].rulerHouse[`${horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[0].toLowerCase()}`].House.label}`]}</p>
                    </div>
                  </div>
                </div>
              )}
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
          House Placements
        </h3>
        <p className="mt-2 text-base-content/70">
          Explore how the twelve houses influence different areas of your life
        </p>
      </div>
      
      <div className="space-y-2">
        {horoscope.Houses.map((house) => (
          <div key={house.id}>
            {evaluateHouse(house)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseSection;

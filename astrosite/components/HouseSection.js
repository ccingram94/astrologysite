import { useState } from 'react';

const HouseSection = ({ horoscope, houses, zodiacSigns }) => {
  const [activeHouse, setActiveHouse] = useState(null);

  const handleToggle = (id) => {
    setActiveHouse(activeHouse === id ? null : id);
  };

  const evaluateHouse = (houseKey, houseData) => {
    // Use the key directly from houseData
    const houseId = houseData.key;
    const isActive = activeHouse === houseId;
    
    // Get house label and sign information directly from houseData
    const houseLabel = houseData.label;
    const signKey = houseData.sign.toLowerCase();
    const hasMultipleRulers = Array.isArray(zodiacSigns[signKey].rulingPlanet);
    
    return (
      <div 
        key={houseId}
        className={`transition-all duration-300 overflow-hidden rounded-xl border 
                   ${isActive 
                     ? 'border-primary/20 bg-gradient-to-r from-primary/5 to-transparent shadow-md mb-4' 
                     : 'border-base-300/30 bg-base-100 mb-2'}`}
      >
        {/* House Header */}
        <div 
          className={`flex items-start gap-3 p-4 cursor-pointer ${isActive ? 'pb-2' : ''}`}
          onClick={() => handleToggle(houseId)}
        >
          {/* House Number */}
          <div className={`text-2xl font-bold p-3 rounded-full bg-primary/10 text-primary 
                         flex items-center justify-center min-w-[3rem] h-12
                         ${isActive ? 'bg-primary/15' : ''}`}>
            {houseId}
          </div>
          
          {/* House Info */}
          <div className="flex flex-col flex-grow">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-primary">
                {houseLabel} House in {houseData.sign}
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
              <span className="font-medium">Cusp at {formatDegree(houseData.degreeInSign)}</span>
              <span className="inline-block w-1 h-1 bg-current rounded-full"></span>
              <span>{houseData.sign}</span>
            </div>
            
            {/* Ruler Badges - Both single and multiple rulers */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {!hasMultipleRulers ? (
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                  Ruled by {zodiacSigns[signKey].rulingPlanet}
                </span>
              ) : (
                <>
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                    Traditional: {zodiacSigns[signKey].rulingPlanet[1]}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Modern: {zodiacSigns[signKey].rulingPlanet[0]}
                  </span>
                </>
              )}
            </div>

            {/* House Keywords - only shown when collapsed */}
            {!isActive && houses[houseLabel]?.traits && (
              <div className="flex flex-wrap gap-1 mt-2">
                {houses[houseLabel].traits.slice(0, 3).map((trait, key) => (
                  <span key={key} className="text-xs bg-primary/5 text-primary/80 px-2 py-0.5 rounded-full">
                    {trait}
                  </span>
                ))}
                {houses[houseLabel].traits.length > 3 && (
                  <span className="text-xs text-primary/60">+{houses[houseLabel].traits.length - 3} more</span>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* House Details (Expanded) */}
        {isActive && houses[houseLabel] && (
          <div className="px-4 pb-5 space-y-5 animate-fadeIn">
            {/* Trait Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {houses[houseLabel].traits.map((trait, key) => (
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
                  {houses[houseLabel].descriptionShort}
                </p>
                
                <p className="leading-relaxed">
                  {houses[houseLabel].sign && houses[houseLabel].sign[houseData.sign]}
                </p>
              </div>
              
              {/* House Rulers Section - using the planet data from horoscope */}
              {!hasMultipleRulers ? (
                <div className="bg-base-200/50 p-4 rounded-lg space-y-3">
                  <div className="flex items-center">
                    <div className="p-2 rounded-md bg-secondary/10 mr-3">
                      <span className="font-bold text-secondary">
                        {zodiacSigns[signKey].rulingPlanet}
                      </span>
                    </div>
                    <div>
                      <h5 className="font-medium">House Ruler</h5>
                      {horoscope.planets[zodiacSigns[signKey].rulingPlanet] && (
                        <p className="text-sm text-base-content/70">
                          {zodiacSigns[signKey].rulingPlanet} in {horoscope.planets[zodiacSigns[signKey].rulingPlanet].sign}, 
                          House {horoscope.planets[zodiacSigns[signKey].rulingPlanet].house || "Unknown"}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-2">
                    <p className="leading-relaxed">
                      {houses[houseLabel].ruler && houses[houseLabel].ruler[zodiacSigns[signKey].rulingPlanet]}
                    </p>
                    
                    {horoscope.planets[zodiacSigns[signKey].rulingPlanet] && (
                      <p className="leading-relaxed">
                        With your {zodiacSigns[signKey].rulingPlanet} in {horoscope.planets[zodiacSigns[signKey].rulingPlanet].sign}, 
                        {houses[houseLabel].rulerSign && houses[houseLabel].rulerSign[horoscope.planets[zodiacSigns[signKey].rulingPlanet].sign]}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Traditional Ruler Card */}
                  <div className="bg-base-200/50 p-4 rounded-lg space-y-3">
                    <div className="flex items-center">
                      <div className="p-2 rounded-md bg-secondary/10 mr-3">
                        <span className="font-bold text-secondary">
                          {zodiacSigns[signKey].rulingPlanet[1]} 
                        </span>
                      </div>
                      <div>
                        <h5 className="font-medium">Traditional Ruler</h5>
                        {horoscope.planets[zodiacSigns[signKey].rulingPlanet[1]] && (
                          <p className="text-sm text-base-content/70">
                            {zodiacSigns[signKey].rulingPlanet[1]} in {horoscope.planets[zodiacSigns[signKey].rulingPlanet[1]].sign},
                            House {horoscope.planets[zodiacSigns[signKey].rulingPlanet[1]].house || "Unknown"}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mt-2">
                      <p className="leading-relaxed">
                        {houses[houseLabel].ruler && houses[houseLabel].ruler[zodiacSigns[signKey].rulingPlanet[1]]}
                      </p>
                      
                      {horoscope.planets[zodiacSigns[signKey].rulingPlanet[1]] && (
                        <p className="leading-relaxed">
                          With your {zodiacSigns[signKey].rulingPlanet[1]} in {horoscope.planets[zodiacSigns[signKey].rulingPlanet[1]].sign},
                          {houses[houseLabel].rulerSign && houses[houseLabel].rulerSign[horoscope.planets[zodiacSigns[signKey].rulingPlanet[1]].sign]}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* Modern Ruler Card */}
                  <div className="bg-base-200/50 p-4 rounded-lg space-y-3">
                    <div className="flex items-center">
                      <div className="p-2 rounded-md bg-primary/10 mr-3">
                        <span className="font-bold text-primary">
                          {zodiacSigns[signKey].rulingPlanet[0]}
                        </span>
                      </div>
                      <div>
                        <h5 className="font-medium">Modern Ruler</h5>
                        {horoscope.planets[zodiacSigns[signKey].rulingPlanet[0]] && (
                          <p className="text-sm text-base-content/70">
                            {zodiacSigns[signKey].rulingPlanet[0]} in {horoscope.planets[zodiacSigns[signKey].rulingPlanet[0]].sign},
                            House {horoscope.planets[zodiacSigns[signKey].rulingPlanet[0]].house || "Unknown"}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mt-2">
                      <p className="leading-relaxed">
                        {houses[houseLabel].ruler && houses[houseLabel].ruler[zodiacSigns[signKey].rulingPlanet[0]]}
                      </p>
                      
                      {horoscope.planets[zodiacSigns[signKey].rulingPlanet[0]] && (
                        <p className="leading-relaxed">
                          With your {zodiacSigns[signKey].rulingPlanet[0]} in {horoscope.planets[zodiacSigns[signKey].rulingPlanet[0]].sign},
                          {houses[houseLabel].rulerSign && houses[houseLabel].rulerSign[horoscope.planets[zodiacSigns[signKey].rulingPlanet[0]].sign]}
                        </p>
                      )}
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

  // Helper function to format degree from degreeInSign object
  const formatDegree = (degreeInSign) => {
    if (!degreeInSign) return '0° 0\'';
    const { degrees, minutes, seconds } = degreeInSign;
    
    if (seconds) {
      return `${degrees}° ${minutes}' ${seconds}''`;
    } else {
      return `${degrees}° ${minutes}'`;
    }
  };

  // Sort houses in numerical order for display
  const sortedHouses = () => {
    return Object.entries(horoscope.houseCusps)
      .filter(([key]) => key !== 'all' && ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", 
                                           "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth"].includes(key))
      .sort(([, a], [, b]) => parseInt(a.key) - parseInt(b.key));
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
        {sortedHouses().map(([key, data]) => (
          <div key={key}>
            {evaluateHouse(key, data)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseSection;

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

  const evaluatePlanet = (planetKey, planetData) => {
    const planetDignity = evaluatePlanetaryDignity(planetKey.toLowerCase(), planetData.sign);
    const isActive = activePlanet === planetKey.toLowerCase();
    
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
    
    const planetInfo = planets[planetKey.toLowerCase()];
    
    return (
      <div 
        key={planetKey.toLowerCase()}
        className={`transition-all duration-300 overflow-hidden rounded-xl border 
                   ${isActive 
                     ? 'border-primary/20 bg-gradient-to-r from-primary/5 to-transparent shadow-md mb-4' 
                     : 'border-base-300/30 bg-base-100 mb-2'}`}
      >
        {/* Planet Header */}
        <div 
          className={`flex items-start gap-3 p-4 cursor-pointer ${isActive ? 'pb-2' : ''}`}
          onClick={() => handleToggle(planetKey.toLowerCase())}
        >
          {/* Planet Symbol */}
          <div className={`text-3xl font-bold p-3 rounded-full bg-primary/10 text-primary 
                         flex items-center justify-center min-w-[3rem] h-12
                         ${isActive ? 'bg-primary/15' : ''}`}>
            {planetInfo.symbol}
          </div>
          
          {/* Planet Info */}
          <div className="flex flex-col flex-grow">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-primary">
                {planetInfo.name} in {planetData.sign}
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
              <span className="font-medium">{planetData.degreeFormatted}</span>
              <span className="inline-block w-1 h-1 bg-current rounded-full"></span>
              <span>{getHouseLabel(planetData.house)} House</span>
              <span className="inline-block w-1 h-1 bg-current rounded-full"></span>
              <span>
                {planetData.isRetrograde 
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
                {planetInfo.traits.slice(0, 3).map((trait, key) => (
                  <span key={key} className="text-xs bg-primary/5 text-primary/80 px-2 py-0.5 rounded-full">
                    {trait}
                  </span>
                ))}
                {planetInfo.traits.length > 3 && (
                  <span className="text-xs text-primary/60">+{planetInfo.traits.length - 3} more</span>
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
              {planetInfo.traits.map((trait, key) => (
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
                  {planetInfo.descriptionShort}
                </p>
                
                <p className="leading-relaxed">
                  {planetInfo[planetData.sign]}
                </p>
                
                {planetDignity && (
                  <div className={`p-3 rounded-lg ${dignityColor.replace('text-', 'text-').replace('bg-', 'bg-')}`}>
                    <p className="font-medium">
                      <span className="font-bold">{planetInfo.name}</span> is in {planetDignity.toLowerCase()} in {planetData.sign}:
                    </p>
                    <p className="mt-1">
                      {planetInfo.dignity && planetInfo.dignity[planetDignity]}
                    </p>
                  </div>
                )}
                
                <p className="leading-relaxed">
                  {planetInfo[getHouseLabel(planetData.house)]}
                </p>
              </div>
              
              {/* Aspects */}
              <div className="bg-base-200/50 p-4 rounded-lg">
                <h5 className="font-bold text-primary mb-3">Aspects to {planetInfo.name}</h5>
                {/* Since we don't have aspect data in myHoroscope, show a message */}
                <p className="text-sm text-base-content/70 italic">
                  Aspect information not available in this view.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Helper function to get house label from house number
  const getHouseLabel = (houseNumber) => {
    if (!houseNumber) return 'Unknown';
    
    const houseLabels = [
      'First', 'Second', 'Third', 'Fourth', 
      'Fifth', 'Sixth', 'Seventh', 'Eighth', 
      'Ninth', 'Tenth', 'Eleventh', 'Twelfth'
    ];
    
    // Convert to zero-based index
    const index = parseInt(houseNumber) - 1;
    
    if (index >= 0 && index < 12) {
      return houseLabels[index];
    }
    
    return `House ${houseNumber}`;
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
        {Object.entries(horoscope.planets)
          .filter(([key]) => ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'].includes(key))
          .map(([key, data]) => evaluatePlanet(key, data))}
      </div>
    </div>
  );
};

export default PlanetSection;

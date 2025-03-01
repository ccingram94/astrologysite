import { useState } from 'react';

const AngleSection = ({ horoscope, planets }) => {
  const [activeAngle, setActiveAngle] = useState(null);

  const handleToggle = (key) => {
    setActiveAngle(activeAngle === key ? null : key);
  };

  const angleTypes = [
    { id: 'ascendant', type: 'ascendant' },
    { id: 'midheaven', type: 'midheaven' },
    { id: 'northnode', type: 'northnode' },
    { id: 'southnode', type: 'southnode' }
  ];

  const evaluateAngle = (point, type) => {
    let pointData;
    let symbol;
    let description;
    let interpretation;
    const isActive = activeAngle === type;
  
    switch(type) {
      case 'ascendant':
        pointData = horoscope.Angles.ascendant;
        symbol = planets.ascendant.symbol;
        description = "The Ascendant (Rising Sign) is the zodiac sign that was rising on the eastern Ecliptic at the time of birth. " +
                     "It represents outward personality, first impressions, approach to new situations, physical appearance, and general demeanor.";
        interpretation = planets.ascendant[pointData.Sign.label];
        break;
      case 'midheaven':
        pointData = horoscope.Angles.midheaven;
        symbol = planets.midheaven.symbol;
        description = "The Midheaven (Medium Coeli) is the highest point in your chart and represents public image, fame, " +
                     "reputation, career, professional goals, and general life direction.";
        interpretation = planets.midheaven[pointData.Sign.label];
        break;
      case 'northnode':
        pointData = horoscope.CelestialPoints.northnode;
        symbol = planets.northnode.symbol;
        description = "The North Lunar Node (also called the Caput Draconis or 'True Node') represents your soul's purpose " +
                     "and direction for growth in this lifetime, areas of life where you should focus on developing new skills, " +
                     "and qualities and experiences you should embrace for personal evolution.";
        interpretation = planets.northnode[pointData.Sign.label];
        break;
      case 'southnode':
        pointData = horoscope.CelestialPoints.southnode;
        symbol = planets.southnode.symbol;
        description = "The South Lunar Node (also called the Cauda Draconis) is directly opposite the North Node and represents " +
                     "past life experiences and innate talents, comfort zone and habitual patterns, and areas where you may " +
                     "tend to fall back on familiar behaviors, but which may hinder growth.";
        interpretation = planets.southnode[pointData.Sign.label];
        break;
    }
  
    return (
      <div 
        key={type}
        className={`transition-all duration-300 overflow-hidden rounded-xl border 
                   ${isActive 
                     ? 'border-primary/20 bg-gradient-to-r from-primary/5 to-transparent shadow-md mb-4' 
                     : 'border-base-300/30 bg-base-100 mb-2'}`}
      >
        {/* Angle Header */}
        <div 
          className={`flex items-start gap-3 p-4 cursor-pointer ${isActive ? 'pb-2' : ''}`}
          onClick={() => handleToggle(type)}
        >
          {/* Angle Symbol */}
          <div className={`text-2xl font-bold p-3 rounded-full bg-primary/10 text-primary 
                         flex items-center justify-center min-w-[3rem] h-12
                         ${isActive ? 'bg-primary/15' : ''}`}>
            {symbol}
          </div>
          
          {/* Angle Info */}
          <div className="flex flex-col flex-grow">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-primary">
                {pointData.label} in {pointData.Sign.label}
              </h4>
              <button 
                className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
                aria-label="Toggle angle details"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
            </div>
            
            {/* Position Details */}
            <div className="flex flex-wrap items-center text-sm text-primary/70 mt-1 gap-2">
              <span className="font-medium">{pointData.ChartPosition.Ecliptic.ArcDegreesFormatted30}</span>
              {pointData.House && (
                <>
                  <span className="inline-block w-1 h-1 bg-current rounded-full"></span>
                  <span>{pointData.House.label} House</span>
                </>
              )}
            </div>

            {/* Angle Keywords - Only show when not active */}
            {!isActive && (
              <div className="flex flex-wrap gap-1 mt-2">
                {planets[pointData.key].traits.slice(0, 3).map((trait, key) => (
                  <span key={key} className="text-xs bg-primary/5 text-primary/80 px-2 py-0.5 rounded-full">
                    {trait}
                  </span>
                ))}
                {planets[pointData.key].traits.length > 3 && (
                  <span className="text-xs text-primary/60">+{planets[pointData.key].traits.length - 3} more</span>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Angle Details (Expanded) */}
        {isActive && (
          <div className="px-4 pb-5 space-y-5 animate-fadeIn">
            {/* Trait Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {planets[pointData.key].traits.map((trait, key) => (
                <span key={key} className="bg-primary/10 text-primary/90 text-xs px-2 py-1 rounded-full">
                  {trait}
                </span>
              ))}
            </div>
            
            <hr className="border-primary/10" />
            
            <div className="space-y-4 text-base-content/90">
              {/* Descriptions */}
              <div className="space-y-3">
                <p className="leading-relaxed font-medium text-primary/80 italic">
                  {description}
                </p>
                
                <div className="bg-base-200/50 p-4 rounded-lg">
                  <h5 className="font-bold text-primary mb-2">In {pointData.Sign.label}</h5>
                  <p className="leading-relaxed">
                    {interpretation}
                  </p>
                </div>
                
                {/* Show aspects if available */}
                {(type === 'ascendant' || type === 'midheaven') && 
                 horoscope.Aspects.points[type === 'ascendant' ? 'asc' : 'mc'] && 
                 horoscope.Aspects.points[type === 'ascendant' ? 'asc' : 'mc'].length > 0 && (
                  <div className="bg-base-200/50 p-4 rounded-lg">
                    <h5 className="font-bold text-primary mb-3">Aspects to {pointData.label}</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {horoscope.Aspects.points[type === 'ascendant' ? 'asc' : 'mc'].map((aspect, index) => (
                        <div key={index} 
                             className="flex items-center gap-1.5 bg-base-100 p-2 rounded-lg border border-primary/10">
                          <span className="text-primary font-medium">{aspect.point1Label}</span>
                          <span className="text-xs px-1.5 py-0.5 bg-primary/10 rounded-full">{aspect.label}</span>
                          <span className="text-primary font-medium">{aspect.point2Label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Show house interpretation if available */}
                {pointData.House && (
                  <div className="bg-base-200/50 p-4 rounded-lg">
                    <h5 className="font-bold text-primary mb-2">In the {pointData.House.label} House</h5>
                    <p className="leading-relaxed">
                      {planets[pointData.key][pointData.House.label]}
                    </p>
                  </div>
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
          Celestial Points & Angles
        </h3>
        <p className="mt-2 text-base-content/70">
          Special points in your chart that define key life areas and directions
        </p>
      </div>
      
      <div className="space-y-2">
        {angleTypes.map((angle) => evaluateAngle(angle.id, angle.type))}
      </div>
    </div>
  );
};

export default AngleSection;

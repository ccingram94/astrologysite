import { useState } from 'react';

const AngleSection = ({ horoscope, planets }) => {
  const [activeAngle, setActiveAngle] = useState(null);

  const handleToggle = (key) => {
    setActiveAngle(activeAngle === key ? null : key);
  };

  // Updated angle types to match the keys in horoscope.angles
  const angleTypes = [
    { id: 'Ascendant', type: 'ascendant' },
    { id: 'Descendant', type: 'descendant' },
    { id: 'Midheaven', type: 'midheaven' },
    { id: 'ImumCoeli', type: 'imumcoeli' }
  ];

  const evaluateAngle = (id, type) => {
    const planetKey = type.toLowerCase();
    const isActive = activeAngle === type;
    
    // Get angle data from horoscope.angles
    const angleData = horoscope.angles[id];
    
    if (!angleData) return null; // Skip if data not available
    
    // Get the corresponding planet info
    const planetInfo = planets[planetKey];
    if (!planetInfo) return null;
  
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
            {planetInfo.symbol}
          </div>
          
          {/* Angle Info */}
          <div className="flex flex-col flex-grow">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-primary">
                {angleData.label} in {angleData.sign}
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
              <span className="font-medium">
                {formatDegree(angleData.degreeInSign)}
              </span>
              {getHouseFromAngle(type) && (
                <>
                  <span className="inline-block w-1 h-1 bg-current rounded-full"></span>
                  <span>{getHouseFromAngle(type)} House</span>
                </>
              )}
            </div>

            {/* Angle Keywords - Only show when not active */}
            {!isActive && planetInfo.traits && (
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
        
        {/* Angle Details (Expanded) */}
        {isActive && (
          <div className="px-4 pb-5 space-y-5 animate-fadeIn">
            {/* Trait Tags */}
            {planetInfo.traits && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {planetInfo.traits.map((trait, key) => (
                  <span key={key} className="bg-primary/10 text-primary/90 text-xs px-2 py-1 rounded-full">
                    {trait}
                  </span>
                ))}
              </div>
            )}
            
            <hr className="border-primary/10" />
            
            <div className="space-y-4 text-base-content/90">
              {/* Descriptions */}
              <div className="space-y-3">
                <p className="leading-relaxed font-medium text-primary/80 italic">
                  {planetInfo.descriptionLong || planetInfo.descriptionShort}
                </p>
                
                <div className="bg-base-200/50 p-4 rounded-lg">
                  <h5 className="font-bold text-primary mb-2">In {angleData.sign}</h5>
                  <p className="leading-relaxed">
                    {planetInfo[angleData.sign] || `The ${angleData.label} in ${angleData.sign} influences how you express yourself and interact with the world.`}
                  </p>
                </div>
                
                {/* Show house interpretation if available */}
                {getHouseFromAngle(type) && (
                  <div className="bg-base-200/50 p-4 rounded-lg">
                    <h5 className="font-bold text-primary mb-2">In the {getHouseFromAngle(type)} House</h5>
                    <p className="leading-relaxed">
                      {planetInfo[getHouseFromAngle(type)] || 
                       getDefaultHouseInterpretation(type, getHouseFromAngle(type))}
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
  
  // Helper function to format degree from degreeInSign object
  const formatDegree = (degreeInSign) => {
    if (!degreeInSign) return '';
    const { degrees, minutes, seconds } = degreeInSign;
    
    if (seconds) {
      return `${degrees}° ${minutes}' ${seconds}''`;
    } else {
      return `${degrees}° ${minutes}'`;
    }
  };

  // Helper function to get the house for each angle type
  const getHouseFromAngle = (type) => {
    switch(type) {
      case 'ascendant': return 'First';
      case 'descendant': return 'Seventh';
      case 'midheaven': return 'Tenth';
      case 'imumcoeli': return 'Fourth';
      default: return null;
    }
  };
  
  // Helper function for default house interpretations
  const getDefaultHouseInterpretation = (type, house) => {
    if (type === 'descendant' && house === 'Seventh') {
      return "Your Descendant in the Seventh House is the natural placement, emphasizing your approach to partnerships, one-on-one relationships, and how you cooperate with others. This placement highlights your relationship needs and how you balance your own identity with those of the significant people in your life.";
    } else if (type === 'imumcoeli' && house === 'Fourth') {
      return "Your Imum Coeli in the Fourth House is the natural placement, emphasizing your emotional foundation, connection to home and family, and your private inner life. This placement reveals how you create emotional security and what you need to feel grounded and nurtured.";
    }
    return `The ${type} in the ${house} House influences how these energies manifest in that area of life.`;
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

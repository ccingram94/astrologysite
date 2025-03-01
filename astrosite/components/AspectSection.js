import { useState } from 'react';
import Image from 'next/image';

const AspectSection = ({ horoscope, aspects }) => {
  const [activeAspect, setActiveAspect] = useState(null);

  // Define aspect groups for organization
  const majorAspects = ['conjunction', 'opposition', 'square', 'trine', 'sextile'];
  const minorAspects = ['quincunx', 'quintile', 'semi-square', 'semi-sextile', 'septile'];

  const handleToggle = (type) => {
    setActiveAspect(activeAspect === type ? null : type);
  };

  // Helper function to format aspect name
  const formatAspectName = (name) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  // Get the appropriate aspects object based on type
  const getAspectsObject = (type) => {
    const aspectsMap = {
      'conjunction': aspects.conjunction,
      'opposition': aspects.opposition,
      'square': aspects.square,
      'trine': aspects.trine,
      'sextile': aspects.sextile,
      'quincunx': aspects.quincunx,
      'quintile': aspects.quintile,
      'semi-square': aspects.semisquare,
      'semi-sextile': aspects.semisextile,
      'septile': aspects.septile
    };
    return aspectsMap[type];
  };

  // Get symbol for aspect type
  const getAspectSymbol = (type) => {
    const symbolMap = {
      'conjunction': '☌',
      'opposition': '☍',
      'square': '□',
      'trine': '△',
      'sextile': '⚹',
      'quincunx': '⚻',
      'quintile': 'Q',
      'semi-square': '∠',
      'semi-sextile': '⚺',
      'septile': 'S'
    };
    return symbolMap[type] || '•';
  };

  // Aspect icon paths (optional - if you want to include icons)
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

  // Color themes for different aspect types
  const aspectThemes = {
    conjunction: 'text-secondary',
    opposition: 'text-error',
    square: 'text-error',
    trine: 'text-success',
    sextile: 'text-success',
    quincunx: 'text-warning',
    quintile: 'text-info',
    'semi-square': 'text-warning',
    'semi-sextile': 'text-info',
    septile: 'text-primary'
  };

  const evaluateAspect = (aspectType) => {
    const aspectData = horoscope.Aspects.types[aspectType];
    const isActive = activeAspect === aspectType;
    const aspectObj = getAspectsObject(aspectType);
    const aspectColor = aspectThemes[aspectType] || 'text-primary';
    
    // If there are no aspects of this type, return null
    if (!aspectData || aspectData.length === 0) return null;
    
    return (
      <div 
        key={aspectType}
        className={`transition-all duration-300 overflow-hidden rounded-xl border 
                   ${isActive 
                     ? 'border-primary/20 bg-gradient-to-r from-primary/5 to-transparent shadow-md mb-4' 
                     : 'border-base-300/30 bg-base-100 mb-2'}`}
      >
        {/* Aspect Header */}
        <div 
          className={`flex items-start gap-3 p-4 cursor-pointer ${isActive ? 'pb-2' : ''}`}
          onClick={() => handleToggle(aspectType)}
        >
          {/* Aspect Symbol */}
          <div className={`text-2xl font-bold p-3 rounded-full bg-${aspectColor.split('-')[1]}/10 ${aspectColor} 
                         flex items-center justify-center min-w-[3rem] h-12
                         ${isActive ? `bg-${aspectColor.split('-')[1]}/15` : ''}`}>
            {getAspectSymbol(aspectType)}
          </div>
          
          {/* Aspect Info */}
          <div className="flex flex-col flex-grow">
            <div className="flex items-center justify-between">
              <h4 className={`text-lg font-bold ${aspectColor}`}>
                {formatAspectName(aspectType)} Aspects
              </h4>
              <button 
                className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
                aria-label="Toggle aspect details"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
            </div>
            
            {/* Count and Preview */}
            <div className="flex flex-wrap items-center text-sm text-primary/70 mt-1 gap-2">
              <span className="font-medium">
                {aspectData.length} {aspectData.length === 1 ? 'aspect' : 'aspects'} found
              </span>
              {aspectData.length > 0 && aspectData.length <= 3 && (
                <>
                  <span className="inline-block w-1 h-1 bg-current rounded-full"></span>
                  <span className="italic">
                    {aspectData.map(a => `${a.point1Label}/${a.point2Label}`).join(', ')}
                  </span>
                </>
              )}
            </div>

            {/* Aspect Keywords */}
            {!isActive && aspectObj?.traits && (
              <div className="flex flex-wrap gap-1 mt-2">
                {aspectObj.traits.slice(0, 3).map((trait, key) => (
                  <span key={key} className={`text-xs bg-${aspectColor.split('-')[1]}/5 ${aspectColor.replace('text-', 'text-')} px-2 py-0.5 rounded-full`}>
                    {trait}
                  </span>
                ))}
                {aspectObj.traits.length > 3 && (
                  <span className="text-xs text-primary/60">+{aspectObj.traits.length - 3} more</span>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Aspect Details (Expanded) */}
        {isActive && (
          <div className="px-4 pb-5 space-y-5 animate-fadeIn">
            {/* Trait Tags */}
            {aspectObj?.traits && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {aspectObj.traits.map((trait, key) => (
                  <span key={key} className={`bg-${aspectColor.split('-')[1]}/10 ${aspectColor} text-xs px-2 py-1 rounded-full`}>
                    {trait}
                  </span>
                ))}
              </div>
            )}
            
            {aspectObj?.description && (
              <>
                <hr className="border-primary/10" />
                <div className={`bg-${aspectColor.split('-')[1]}/5 p-4 rounded-lg`}>
                  <p className="leading-relaxed">
                    {aspectObj.description}
                  </p>
                </div>
              </>
            )}
            
            {/* Individual Aspect List */}
            <div className="space-y-4">
              {aspectData.map((aspect, index) => (
                <div key={index} className={`bg-base-100 p-4 rounded-lg border border-${aspectColor.split('-')[1]}/10 shadow-sm`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h5 className={`font-bold ${aspectColor}`}>
                        {aspect.point1Label} {formatAspectName(aspectType)} {aspect.point2Label}
                      </h5>
                      <span className="text-xs bg-primary/10 text-primary/90 px-1.5 py-0.5 rounded-full">
                        orb: {aspect.orb}°
                      </span>
                    </div>
                    {aspectIcons[aspectType] && (
                      <div className="relative w-6 h-6 opacity-70">
                        <Image 
                          src={aspectIcons[aspectType].uri} 
                          alt={aspectType} 
                          width={24} 
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>
                  
                  <p className="text-base-content/80 leading-relaxed">
                    {aspectObj?.planets?.[aspect.point1Key]?.[aspect.point2Key] || 
                     `This ${formatAspectName(aspectType).toLowerCase()} between ${aspect.point1Label} and ${aspect.point2Label} creates a significant energy pattern in your chart.`}
                  </p>
                </div>
              ))}
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
          Planetary Aspects
        </h3>
        <p className="mt-2 text-base-content/70">
          The angular relationships between planets that reveal the dynamics of your chart
        </p>
      </div>
      
      {/* Major Aspects Section */}
      <div className="mb-10">
        <h4 className="text-xl font-bold text-primary mb-4">
          Major Aspects
          <span className="text-sm font-normal ml-2 text-primary/70">Primary astrological relationships</span>
        </h4>
        <div className="space-y-2">
          {majorAspects.map(aspectType => evaluateAspect(aspectType))}
        </div>
      </div>
      
      {/* Minor Aspects Section */}
      <div className="mb-6">
        <h4 className="text-xl font-bold text-primary mb-4">
          Minor Aspects
          <span className="text-sm font-normal ml-2 text-primary/70">Subtle but meaningful influences</span>
        </h4>
        <div className="space-y-2">
          {minorAspects.map(aspectType => evaluateAspect(aspectType))}
        </div>
      </div>
    </div>
  );
};

export default AspectSection;

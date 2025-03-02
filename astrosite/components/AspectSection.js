const AspectSection = ({ horoscope, aspects }) => {
  const evaluateAspect = (aspectType, aspects, horoscope) => {
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
    
    // Filter aspects by type
    const filteredAspects = horoscope.aspects.filter(aspect => aspect.name === aspectType);
    
    // If there are no aspects of this type, return null
    if (!filteredAspects || filteredAspects.length === 0) return null;
    
    // Transform the aspect data to the format expected by the component
    const aspectData = filteredAspects.map(aspect => ({
      point1Label: aspect.point1.name,
      point2Label: aspect.point2.name,
      point1Key: aspect.point1.name,
      point2Key: aspect.point2.name,
      orb: aspect.orb.toFixed(2)
    }));

    return (
      <div className='collapse collapse-arrow join-item border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300'>
        <input type="radio" name="aspect-accordion" />
        <div className="collapse-title flex items-center justify-start text-start gap-2 p-4">
          <span className="text-primary text-2xl">
            {getAspectSymbol(aspectType)}
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
            {getAspectsObject(aspectType)?.traits.map((trait, index) => <span key={index} className='bg-primary/10 text-xs text-primary p-1 px-2 rounded-full'>{trait}</span>)}
            </div>
          </div>
        </div>
  
        <div className='collapse-content'>
          <div className="space-y-2">
            {aspectData.map((aspect, index) => (
              <div key={index} className="p-2">
                <div className="flex items-center gap-2">
                  <h4 className="text-neutral/80 font-extrabold">
                    {aspect.point1Label} {formatAspectName(aspectType)} {aspect.point2Label}
                  </h4>
                  <span className="text-xs text-primary/80">
                    (orb: {aspect.orb}°)
                  </span>
                </div>
                
                <div className="prose max-w-none text-sm text-justify">
                  <p className="text-neutral leading-relaxed">
                    {getAspectsObject(aspectType)?.planets?.[aspect.point1Key]?.[aspect.point2Key] || 
                     `The ${aspect.point1Label} ${formatAspectName(aspectType)} ${aspect.point2Label} aspect creates a significant interaction between these planetary energies in your chart.`}
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
        {evaluateAspect('conjunction', aspects, horoscope)}
        {evaluateAspect('opposition', aspects, horoscope)}
        {evaluateAspect('square', aspects, horoscope)}
        {evaluateAspect('trine', aspects, horoscope)}
        {evaluateAspect('sextile', aspects, horoscope)}
      </div>

      <h3 className="font-bold text-primary text-3xl m-2 mt-6">Minor Aspects</h3>
      <div className="p-2 m-2 join join-vertical w-full">
        {evaluateAspect('quincunx', aspects, horoscope)}
        {evaluateAspect('quintile', aspects, horoscope)}
        {evaluateAspect('semi-square', aspects, horoscope)}
        {evaluateAspect('semi-sextile', aspects, horoscope)}
        {evaluateAspect('septile', aspects, horoscope)}
      </div>
    </div>
  );
};

export default AspectSection;

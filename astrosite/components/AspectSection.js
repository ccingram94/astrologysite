
const AspectSection = ({ horoscope, aspects }) => {
  const evaluateAspect = (aspectType, aspectData, horoscope) => {
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
  
    // If there are no aspects of this type, return null
    if (!aspectData || aspectData.length === 0) return null;
  
    return (
      <div className='collapse collapse-arrow join-item border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300'>
        <input type="radio" name="aspect-accordion" />
        <div className="collapse-title flex items-center gap-2 p-4">
          <span className="text-primary text-2xl font-bold">
            {getAspectSymbol(aspectType)}
          </span>
          <div className="flex flex-col">
            <span className="text-lg font-medium text-neutral">
              {formatAspectName(aspectType)} Aspects
            </span>
            <span className="text-xs text-primary">
              {aspectData.length} {aspectData.length === 1 ? 'aspect' : 'aspects'} found
            </span>
          </div>
        </div>
  
        <div className='collapse-content'>
          <div className="pt-4 space-y-6">
            {aspectData.map((aspect, index) => (
              <div key={index} className="bg-base-300/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-primary text-xl">
                    {getAspectSymbol(aspectType)}
                  </span>
                  <h4 className="text-secondary font-medium">
                    {aspect.point1Label} {formatAspectName(aspectType)} {aspect.point2Label}
                  </h4>
                  <span className="text-xs text-primary">
                    (orb: {aspect.orb}°)
                  </span>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-sm text-justify leading-relaxed">
                    {getAspectsObject(aspectType).planets[aspect.point1Key][aspect.point2Key]}
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
        {evaluateAspect('conjunction', horoscope.Aspects.types.conjunction, horoscope)}
        {evaluateAspect('opposition', horoscope.Aspects.types.opposition, horoscope)}
        {evaluateAspect('square', horoscope.Aspects.types.square, horoscope)}
        {evaluateAspect('trine', horoscope.Aspects.types.trine, horoscope)}
        {evaluateAspect('sextile', horoscope.Aspects.types.sextile, horoscope)}
      </div>

      <h3 className="font-bold text-primary text-3xl m-2 mt-6">Minor Aspects</h3>
      <div className="p-2 m-2 join join-vertical w-full">
        {evaluateAspect('quincunx', horoscope.Aspects.types.quincunx, horoscope)}
        {evaluateAspect('quintile', horoscope.Aspects.types.quintile, horoscope)}
        {evaluateAspect('semi-square', horoscope.Aspects.types['semi-square'], horoscope)}
        {evaluateAspect('semi-sextile', horoscope.Aspects.types['semi-sextile'], horoscope)}
        {evaluateAspect('septile', horoscope.Aspects.types.septile, horoscope)}
      </div>
    </div>
  );
};

export default AspectSection;

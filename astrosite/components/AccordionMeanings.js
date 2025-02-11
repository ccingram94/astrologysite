import planets from '../data/planets';

const AccordionMeanings = ({ sign }) => {
  const planetlist = [
    'sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter',
    'saturn', 'uranus', 'neptune', 'pluto',
  ];

  const planetSymbols = {
    sun: '☉', moon: '☽', mercury: '☿', venus: '♀',
    mars: '♂', jupiter: '♃', saturn: '♄', uranus: '⛢',
    neptune: '♆', pluto: '♇',
  };

  return (
    <div className="w-full md:w-fit h-fit mx-auto">
      <div className="bg-base-100 rounded-2xl p-8 border border-primary/20 shadow-xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          <span className="text-primary">
            Planetary Meanings in {sign.name}
          </span>
        </h2>

        {/* Decorative sign symbol */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/10 blur-md rounded-full"></div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
              <span className="text-2xl text-primary">{sign.symbol || '★'}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          {planetlist.map((planet) => (
            <div
              key={planet}
              className="collapse collapse-arrow bg-base-200 border border-primary/10 
                         hover:border-primary/30 hover:bg-base-300 rounded-xl 
                         transition-all duration-300 shadow-sm hover:shadow-primary/5"
            >
              <input
                type="radio"
                name="planet-accordion"
              />
              <div className="collapse-title">
                <div className="flex items-center gap-4">
                  <span className="text-primary/80 text-2xl">
                    {planetSymbols[planet]}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-lg font-extrabold text-primary">
                      {planets[planet].name} in {sign.name}
                    </span>
                    <div className="flex gap-2 text-xs">
                    <span className="text-primary/80">
                      {planets[planet].keywords.join(' • ')}
                    </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse-content">
                <div className="pt-4 pb-2">
                  <p className="text-neutral text-sm text-justify max-w-xl leading-relaxed">
                    {planets[planet][sign.name]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionMeanings;

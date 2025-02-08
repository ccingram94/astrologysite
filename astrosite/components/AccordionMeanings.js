import planets from '../planets'

const AccordionMeanings = ({ sign }) => {
  const planetlist = [
    'sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter',
    'saturn', 'uranus', 'neptune', 'pluto',
  ];

  const planetSymbols = {
    sun: '☉',
    moon: '☽',
    mercury: '☿',
    venus: '♀',
    mars: '♂',
    jupiter: '♃',
    saturn: '♄',
    uranus: '⛢',
    neptune: '♆',
    pluto: '♇',
  };


  return (
    <div className="card text-primary">
      <div className="card-body">
        <h2 className="card-title text-3xl text-center justify-center mb-6 text-primary">
          Planetary Meanings in {sign.name}
        </h2>
        
        <div className="space-y-2">
          {planetlist.map((planet) => (
            <div
              key={planet}
              className="collapse collapse-plus bg-base-200 rounded-lg hover:bg-base-300 transition-all duration-300"
            >
              <input
                type="radio"
                name="planet-accordion"
                className="min-h-0"
              />
              <div className="collapse-title min-h-0 py-4 px-6 flex items-center gap-3 text-lg font-medium transition-all duration-200">
                <span className="text-xl text-primary">
                  {planetSymbols[planet]}
                </span>
                <span className="font-semibold text-primary">
                  {planets[planet].name}
                </span>
                <span>in</span>
                <span className="font-semibold text-primary">
                  {sign.name}
                </span>
              </div>
              <div className="collapse-content">
                <div className="pt-4 px-2">
                  <p className="text-base-content leading-relaxed">
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

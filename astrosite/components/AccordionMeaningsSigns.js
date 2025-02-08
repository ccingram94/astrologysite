const AccordionMeaningsSigns = ({ planet }) => {
  const signs = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  const zodiacSymbols = {
    Aries: '♈', Taurus: '♉', Gemini: '♊', Cancer: '♋',
    Leo: '♌', Virgo: '♍', Libra: '♎', Scorpio: '♏',
    Sagittarius: '♐', Capricorn: '♑', Aquarius: '♒', Pisces: '♓'
  };

  const zodiacInfo = {
    Aries: { element: 'Fire', quality: 'Cardinal', ruler: 'Mars' },
    Taurus: { element: 'Earth', quality: 'Fixed', ruler: 'Venus' },
    Gemini: { element: 'Air', quality: 'Mutable', ruler: 'Mercury' },
    Cancer: { element: 'Water', quality: 'Cardinal', ruler: 'Moon' },
    Leo: { element: 'Fire', quality: 'Fixed', ruler: 'Sun' },
    Virgo: { element: 'Earth', quality: 'Mutable', ruler: 'Mercury' },
    Libra: { element: 'Air', quality: 'Cardinal', ruler: 'Venus' },
    Scorpio: { element: 'Water', quality: 'Fixed', ruler: 'Mars/Pluto' },
    Sagittarius: { element: 'Fire', quality: 'Mutable', ruler: 'Jupiter' },
    Capricorn: { element: 'Earth', quality: 'Cardinal', ruler: 'Saturn' },
    Aquarius: { element: 'Air', quality: 'Fixed', ruler: 'Saturn/Uranus' },
    Pisces: { element: 'Water', quality: 'Mutable', ruler: 'Jupiter/Neptune' }
  };

  const getElementColor = (element) => {
    const colors = {
      Fire: 'text-primary',
      Earth: 'text-primary',
      Air: 'text-primary',
      Water: 'text-primary'
    };
    return colors[element];
  };


  return (
    <div className="w-full md:w-fit h-fit mx-auto">
      <div className="bg-base-100 rounded-2xl p-8 border border-primary/20 shadow-xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          <span className="text-primary">
            {planet.name} in the Zodiac
          </span>
        </h2>

        {/* Decorative planet symbol */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/10 blur-md rounded-full"></div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
              <span className="text-2xl text-primary">{planet.symbol || '★'}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          {signs.map((sign) => (
            <div
              key={sign}
              className="collapse collapse-arrow bg-base-200 border border-primary/10 
                         hover:border-primary/30 hover:bg-base-300 rounded-xl 
                         transition-all duration-300 shadow-sm hover:shadow-primary/5"
            >
              <input
                type="radio"
                name="sign-accordion"
              />
              <div className="collapse-title">
                <div className="flex items-center gap-4">
                  <span className="text-primary/80 text-2xl">
                    {zodiacSymbols[sign]}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-lg font-extrabold text-primary">
                      {planet.name} in {sign}
                    </span>
                    <div className="flex gap-2 text-xs">
                      <span className={`${getElementColor(zodiacInfo[sign].element)}`}>
                        {zodiacInfo[sign].element}
                      </span>
                      <span className="text-primary">•</span>
                      <span className="text-primary">{zodiacInfo[sign].quality}</span>
                      <span className="text-primary">•</span>
                      <span className="text-primary">Ruled by {zodiacInfo[sign].ruler}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse-content">
                <div className="pt-4 pb-2">
                  <p className="text-neutral text-sm text-justify max-w-xl leading-relaxed">
                    {planet[sign]}
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

export default AccordionMeaningsSigns;
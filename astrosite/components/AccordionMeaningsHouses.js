const AccordionMeaningsHouses = ({ planet }) => {

  const houses = [
    'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth',
    'Seventh', 'Eighth', 'Ninth', 'Tenth', 'Eleventh', 'Twelfth'
  ];

  const houseSymbols = {
    First: '①', Second: '②', Third: '③', Fourth: '④',
    Fifth: '⑤', Sixth: '⑥', Seventh: '⑦', Eighth: '⑧',
    Ninth: '⑨', Tenth: '⑩', Eleventh: '⑪', Twelfth: '⑫'
  };

  return (
    <div className="w-full md:w-fit h-fit mx-auto">
      <div className="bg-base-100 rounded-2xl p-8 border border-primary/20 shadow-xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          <span className="text-primary">
            {planet.name} in the Houses
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
          {houses.map((house) => (
            <div
              key={house}
              className="collapse collapse-arrow bg-base-200 border border-primary/10 
                         hover:border-primary/30 hover:bg-base-300 rounded-xl 
                         transition-all duration-300 shadow-sm hover:shadow-primary/5"
            >
              <input
                type="radio"
                name="house-accordion"
              />
              <div className="collapse-title flex items-center gap-4 text-lg font-medium">
                <span className="text-primary/80 text-xl">
                  {houseSymbols[house]}
                </span>
                <div className="flex flex-col">
                  <span className="text-primary font-semibold">
                    {house} House
                  </span>
                  <span className="text-xs text-primary">
                    House of {getHouseKeywords(house)}
                  </span>
                </div>
              </div>
              <div className="collapse-content">
                <div className="pt-4 pb-2">
                  <p className="text-neutral text-sm text-justify max-w-xl leading-relaxed">
                    {planet[house]}
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

// Helper function to get house keywords
const getHouseKeywords = (house) => {
  const keywords = {
    First: 'Self & Identity',
    Second: 'Values & Resources',
    Third: 'Communication',
    Fourth: 'Home & Family',
    Fifth: 'Creativity & Pleasure',
    Sixth: 'Work & Health',
    Seventh: 'Relationships',
    Eighth: 'Transformation',
    Ninth: 'Philosophy & Travel',
    Tenth: 'Career & Status',
    Eleventh: 'Community & Goals',
    Twelfth: 'Spirituality'
  };
  return keywords[house];
};

export default AccordionMeaningsHouses;

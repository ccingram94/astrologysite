
const AngleSection = ({ horoscope, planets }) => {
  const evaluateAngle = (point, type, horoscope) => {
    let pointData;
    let symbol;
    let description;
    let interpretation;
  
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
      <div className="w-full collapse collapse-arrow join-item border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300">
        <input type="radio" name="celestial-points" />
        <div className="collapse-title flex items-center gap-2 p-4">
          <span className="text-primary text-2xl">{symbol}</span>
          <div className="flex flex-col">
            <span className="text-lg font-medium text-neutral">
              {pointData.Sign.label} {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
            <span className="text-xs text-primary">
              {pointData.ChartPosition.Ecliptic.ArcDegreesFormatted30}
            </span>
          </div>
        </div>
        <div className="collapse-content prose max-w-none">
          <div className="">
            <p className="text-base-content/80 italic">
              {description}
            </p>
            <p className="text-base-content text-md text-justify">
              {interpretation}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full justify-center items-center mt-12 p-2 lg:p-6 m-2">
      <h3 className="font-bold text-primary text-3xl m-2">Celestial Points</h3>
      <div className="py-2 join join-vertical w-full text-xs text-justify">
        {evaluateAngle('ascendant', 'ascendant', horoscope)}
        {evaluateAngle('midheaven', 'midheaven', horoscope)}
        {evaluateAngle('northnode', 'northnode', horoscope)}
        {evaluateAngle('southnode', 'southnode', horoscope)}
      </div>
    </div>
  );
};

export default AngleSection;

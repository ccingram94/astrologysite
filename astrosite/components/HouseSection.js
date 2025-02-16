
const HouseSection = ({ horoscope, houses, zodiacSigns }) => {
  const evaluateHouse = (house) => {
    return (
      <div className='collapse collapse-arrow join-item border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300'>
        <input type="radio" name="house-accordion" />
        <div className="collapse-title flex items-center gap-2 p-4">
          <span className="text-primary text-2xl p-2">{house.id}</span>
          <div className="flex flex-col">
            <span className="p-2 text-lg font-extrabold text-neutral">
              {house.label} House
            </span>
            <div className="flex justify-start items-center p-2 gap-2 text-xs text-primary">
              <span>Cusp at {house.ChartPosition.StartPosition.Ecliptic.ArcDegreesFormatted30}</span>
              <span>•</span>
              <span>{house.Sign.label}</span>
            </div>
            <div className='flex flex-row flex-wrap gap-2 p-2'>
              {houses[house.label].traits.map((trait, key) => <span key={key} className='bg-primary/10 text-xs text-primary p-1 px-2 rounded-full'>{trait}</span>)}
            </div>
          </div>
        </div>
  
        <div className='collapse-content'>
          <div className="space-y-2 text-base-content text-sm lg:text-md">

            {/* House Description Section */}
            <div className="prose max-w-none">
              <p className="text-neutral leading-relaxed p-2">
                {houses[house.label].descriptionShort}
              </p>
              <p className="text-neutral leading-relaxed p-2">
                {houses[house.label].sign[house.Sign.label]}
              </p>
            </div>

            {/* House Rulers Section */}
            <div className="prose max-w-none">
              {!Array.isArray(zodiacSigns[house.Sign.key].rulingPlanet) ? (
                <p className="text-neutral font-bold leading-relaxed p-2">
                  House Ruler is {zodiacSigns[house.Sign.key].rulingPlanet} 
                  <span className="text-neutral text-sm ml-2">
                    (in {horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet.toLowerCase()}`].Sign.label} in 
                    the {horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet.toLowerCase()}`].House?.label} House)
                  </span>
                </p>
              ) : (
                <>
                  
                </>
              )}
            </div>
  
            {/* Rulers Interpretation Section */}
            <div>
              {!Array.isArray(zodiacSigns[house.Sign.key].rulingPlanet) ? (
                <div className="prose max-w-none">
                  <p className="text-neutral leading-relaxed p-2">
                    {houses[house.label].ruler[zodiacSigns[house.Sign.key].rulingPlanet]}
                  </p>
                  <p className="text-neutral leading-relaxed p-2">
                    {houses[house.label].rulerSign[horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet.toLowerCase()}`].Sign.label]}
                  </p>
                  <p className="text-neutral leading-relaxed p-2">
                    {houses[house.label].rulerHouse[horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet.toLowerCase()}`].House?.label]}
                  </p>
                </div>
              ) : (
                <>
                  <div className="bg-base-300/50 rounded-lg">
                    <p className="text-neutral font-bold leading-relaxed p-2">
                      Traditional House Ruler is {zodiacSigns[house.Sign.key].rulingPlanet[1]}
                      <span className="text-neutral text-sm ml-2">
                        (in {horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[1].toLowerCase()}`].Sign.label} in 
                        the {horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[1].toLowerCase()}`].House.label} House)
                      </span>
                    </p>
                    <div className="text-neutral leading-relaxed p-2">
                      <p className="py-2">{houses[house.label].ruler[zodiacSigns[house.Sign.key].rulingPlanet[1]]}</p>
                      <p className="py-2">{houses[house.label].rulerSign[`${horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[1].toLowerCase()}`].Sign.label}`]}</p>
                      <p className="py-2">{houses[house.label].rulerHouse[`${horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[1].toLowerCase()}`].House.label}`]}</p>
                    </div>
                  </div>
  
                  <div className="bg-base-300/50 rounded-lg">
                    <p className="text-neutral font-bold leading-relaxed p-2">
                      Modern House Ruler is {zodiacSigns[house.Sign.key].rulingPlanet[0]}
                      <span className="text-neutral text-sm ml-2">
                        (in {horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[0].toLowerCase()}`].Sign.label} in 
                        the {horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[0].toLowerCase()}`].House.label} House)
                      </span>
                    </p>
                    <div className="text-neutral leading-relaxed p-2">
                      <p className="py-2">{houses[house.label].ruler[zodiacSigns[house.Sign.key].rulingPlanet[0]]}</p>
                      <p className="py-2">{houses[house.label].rulerSign[`${horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[0].toLowerCase()}`].Sign.label}`]}</p>
                      <p className="py-2">{houses[house.label].rulerHouse[`${horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[0].toLowerCase()}`].House.label}`]}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center mt-12 p-2 lg:p-6 m-2">
      <h3 className="font-bold text-primary text-xl sm:text-3xl m-1 sm:m-2">Houses</h3>
      <div className="join join-vertical w-full py-2 text-xs text-justify">
        {horoscope.Houses.map((house, index) => (
          <div key={index}>
            {evaluateHouse(house)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseSection;

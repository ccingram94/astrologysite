
const HouseSection = ({ horoscope, houses, zodiacSigns }) => {
  const evaluateHouse = (house) => {
    return (
      <div className='w-full collapse collapse-arrow join-item border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300'>
        <input type="radio" name="house-accordion" />
        <div className="collapse-title flex items-center gap-2 p-4">
          <div className="flex flex-col">
            <span className="text-lg font-medium text-neutral">
              {house.label} House
            </span>
            <div className="flex gap-2 text-xs text-primary">
              <span>Cusp at {house.ChartPosition.StartPosition.Ecliptic.ArcDegreesFormatted30}</span>
              <span>•</span>
              <span>{house.Sign.label}</span>
            </div>
          </div>
        </div>
  
        <div className='collapse-content'>
          <div className="pt-4 space-y-4 text-base-content">
            {/* House Rulers Section */}
            <div className="bg-base-300/50 p-4 rounded-lg space-y-2">
              {!Array.isArray(zodiacSigns[house.Sign.key].rulingPlanet) ? (
                <p className="font-semibold text-sm text-primary">
                  ⁂ House Ruler is {zodiacSigns[house.Sign.key].rulingPlanet} 
                  <span className="text-primary text-sm ml-2">
                    (in {horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet.toLowerCase()}`].Sign.label} in 
                    the {horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet.toLowerCase()}`].House.label} House)
                  </span>
                </p>
              ) : (
                <>
                  <p className="font-semibold text-sm text-primary">
                    ⁂ Traditional House Ruler is {zodiacSigns[house.Sign.key].rulingPlanet[1]}
                    <span className="text-primary text-sm ml-2">
                      (in {horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[1].toLowerCase()}`].Sign.label} in 
                      the {horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[1].toLowerCase()}`].House.label} House)
                    </span>
                  </p>
                  <p className="font-semibold text-sm text-primary">
                    ⁂ Modern House Ruler is {zodiacSigns[house.Sign.key].rulingPlanet[0]}
                    <span className="text-primary text-sm ml-2">
                      (in {horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[0].toLowerCase()}`].Sign.label} in 
                      the {horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[0].toLowerCase()}`].House.label} House)
                    </span>
                  </p>
                </>
              )}
            </div>
  
            {/* House Description Section */}
            <div className="prose max-w-none">
              <p className="leading-relaxed text-md">
                {houses[house.label].descriptionShort}
              </p>
              <p className="leading-relaxed text-md">
                {houses[house.label].sign[house.Sign.label]}
              </p>
            </div>
  
            {/* Rulers Interpretation Section */}
            <div className="space-y-4">
              {!Array.isArray(zodiacSigns[house.Sign.key].rulingPlanet) ? (
                <div className="bg-base-300/50 p-4 rounded-lg space-y-2">
                  <p className="leading-relaxed">
                    {houses[house.label].ruler[zodiacSigns[house.Sign.key].rulingPlanet]}
                  </p>
                  <p className="leading-relaxed">
                    {houses[house.label].rulerSign[horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet.toLowerCase()}`].Sign.label]}
                  </p>
                  <p className="leading-relaxed">
                    {houses[house.label].rulerHouse[horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet.toLowerCase()}`].House.label]}
                  </p>
                </div>
              ) : (
                <>
                  <div className="bg-base-300/50 p-4 rounded-lg">
                    <h4 className="text-secondary font-medium mb-2">
                      Traditional Ruler ({zodiacSigns[house.Sign.key].rulingPlanet[1]})
                    </h4>
                    <div className="space-y-2 text-base-content">
                      <p>{houses[house.label].ruler[zodiacSigns[house.Sign.key].rulingPlanet[1]]}</p>
                      <p>{houses[house.label].rulerSign[`${horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[1].toLowerCase()}`].Sign.label}`]}</p>
                      <p>{houses[house.label].rulerHouse[`${horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[1].toLowerCase()}`].House.label}`]}</p>
                    </div>
                  </div>
  
                  <div className="bg-base-300/50 p-4 rounded-lg">
                    <h4 className="text-secondary font-medium mb-2">
                      Modern Ruler ({zodiacSigns[house.Sign.key].rulingPlanet[0]})
                    </h4>
                    <div className="space-y-2 text-base-content">
                      <p>{houses[house.label].ruler[zodiacSigns[house.Sign.key].rulingPlanet[0]]}</p>
                      <p>{houses[house.label].rulerSign[`${horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[0].toLowerCase()}`].Sign.label}`]}</p>
                      <p>{houses[house.label].rulerHouse[`${horoscope.CelestialBodies[`${zodiacSigns[house.Sign.key].rulingPlanet[0].toLowerCase()}`].House.label}`]}</p>
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
          evaluateHouse(house)
        ))}
      </div>
    </div>
  );
};

export default HouseSection;

import React from 'react';
import profectionYears from '../data/profections';

const ProfectionSection = ({ ascendantSign, zodiacSigns, birthDate, planetInfo }) => {
  // Helper functions from previous component
  const getCurrentAge = () => {
    return new Date().getFullYear() - new Date(birthDate).getFullYear();
  };

  const getOrderedSigns = () => {
    const orderedSignNames = [
      'Aries', 'Taurus', 'Gemini', 'Cancer', 
      'Leo', 'Virgo', 'Libra', 'Scorpio', 
      'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
    ];

    const ascIndex = orderedSignNames.findIndex(name => name === ascendantSign);
    return [
      ...orderedSignNames.slice(ascIndex),
      ...orderedSignNames.slice(0, ascIndex)
    ];
  };

  const generateProfectionData = () => {
    const currentAge = getCurrentAge();
    const baseAge = currentAge - (currentAge % 12);
    const orderedSigns = getOrderedSigns();
    const houses = ['1st', '2nd', '3rd', '4th', '5th', '6th', 
                   '7th', '8th', '9th', '10th', '11th', '12th'];
    
    return Array.from({ length: 12 }, (_, i) => {
      const age = baseAge + i;
      const sign = orderedSigns[i];
      const house = houses[i];
      const isCurrentAge = age === currentAge;
      let ruler;
      if (Array.isArray(zodiacSigns[sign.toLowerCase()].rulingPlanet)) {
        ruler = zodiacSigns[sign.toLowerCase()].rulingPlanet[1];
      } else {
        ruler = zodiacSigns[sign.toLowerCase()].rulingPlanet;
      }

      return { age, house, sign, ruler, isCurrentAge };
    });
  };

  const evaluateProfectionYear = (profectionData) => {
    const { age, house, sign, ruler, isCurrentAge } = profectionData;
    
    // Find the corresponding house data from profectionYears
    const houseNumber = (age % 12) + 1;
    const houseData = profectionYears[Object.keys(profectionYears)[houseNumber - 1]];
  
    // Get sign-specific interpretations
    const signInterpretation = houseData.zodiacSigns[sign];
    const rulerInterpretation = houseData.planetaryRulers[ruler];
  
    return (
      <div className={`collapse collapse-arrow join-item border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 
        ${isCurrentAge ? 'bg-accent/20' : ''}`}>
        <input type="radio" name="profection-accordion" defaultChecked={isCurrentAge} />
        <div className="collapse-title flex items-center gap-2 p-4">
          <span className="text-primary text-2xl">{age}</span>
          <div className="flex flex-col">
            <span className="p-2 text-lg font-extrabold text-neutral">
              Age {age} ({house} House Profection Year)
            </span>
            <div className="flex justify-start items-center p-2 gap-2 text-xs text-primary">
              <span>{house} House</span>
              <span>•</span>
              <span>{sign}</span>
              <span>•</span>
              <span>Ruled by {ruler}</span>
              {isCurrentAge && (
              <div className='flex flex-row flex-wrap gap-2 p-2'>
                <span className='bg-accent/90 text-xs p-1 px-2 rounded-full'>
                  Current Year
                </span>
              </div>
            )}
            </div>
            <div className='flex flex-row flex-wrap gap-2 p-2'>
              {houseData.focus.map((focus, index) => <span key={index} className='bg-primary/10 text-xs text-primary p-1 px-2 rounded-full'>{focus}</span>)}
            </div>
          </div>
        </div>
  
        <div className='collapse-content'>
          <div className="pt-4 space-y-4 text-base-content text-sm lg:text-md">
            <div className="prose max-w-none">
              <p className="text-neutral leading-relaxed p-2">
                {houseData.description}
              </p>
  
              <div className="bg-base-300/50 p-4 rounded-lg mt-4">
                <h4 className="font-bold text-neutral mb-2">Activated Sign is {sign}</h4>
                <p className="text-neutral">{signInterpretation}</p>
              </div>
  
              {rulerInterpretation && (
                <div className="bg-base-300/50 p-4 rounded-lg mt-4">
                  <h4 className="font-bold text-neutral mb-2">Activated Ruler is {ruler}</h4>
                  <p className="text-neutral">{rulerInterpretation}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };  

  return (
    <div className="flex flex-col w-full justify-center items-center mt-12 p-2 lg:p-6 m-2">
      <h3 className="font-bold text-primary text-center text-3xl m-2">Annual Profections</h3>
      <div className="py-2 text-xs text-justify join join-vertical w-full">
        {generateProfectionData().map((data, index) => (
          <React.Fragment key={index}>
            {evaluateProfectionYear(data)}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProfectionSection;

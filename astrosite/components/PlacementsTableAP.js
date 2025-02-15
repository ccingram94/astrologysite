'use client';
import { differenceInYears } from "date-fns";

const PlacementsTableAP = ({ ascendantSign, zodiacSigns, birthDate }) => {
  // Helper function to get current age
  const getCurrentAge = () => {
    return differenceInYears(new Date(), birthDate);
  };

  // Helper function to get the base age for the current 12-year cycle
  const getBaseAge = () => {
    const currentAge = getCurrentAge();
    return currentAge - (currentAge % 12);
  };

  // Helper function to get ordered signs starting from ascendant
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

  // Generate data for the current 12-year cycle
  const generateCycleData = () => {
    const baseAge = getBaseAge();
    const orderedSigns = getOrderedSigns();
    const houses = ['1st', '2nd', '3rd', '4th', '5th', '6th', 
                   '7th', '8th', '9th', '10th', '11th', '12th'];
    
    return Array.from({ length: 12 }, (_, i) => {
      const age = baseAge + i;
      const sign = orderedSigns[i];
      const house = houses[i];
      const ruler = zodiacSigns[sign.toLowerCase()]?.rulingPlanet;

      return { age, house, sign, ruler };
    });
  };

  const cycleData = generateCycleData();
  const currentAge = getCurrentAge();

  return (
    <div className="overflow-x-auto text-primary">
      <table className="table table-compact bg-base-100 border border-primary/20">
        <thead>
          <tr>
            <th className="font-semibold text-primary border-b border-primary/20">Age</th>
            <th className="font-semibold text-primary border-b border-primary/20">House</th>
            <th className="font-semibold text-primary border-b border-primary/20">Sign</th>
            <th className="font-semibold text-primary border-b border-primary/20">Ruler</th>
          </tr>
        </thead>
        <tbody>
          {cycleData.map(({ age, house, sign, ruler }) => (
            <tr 
              key={age}
              className={`text-xs text-center hover:bg-base-200 transition-colors duration-200 
                ${age === currentAge ? 'bg-accent/20' : ''}`}
            >
              <td className="border-b border-primary/10 p-2 text-secondary">
                {age}
              </td>
              <td className="border-b border-primary/10 p-2 text-secondary">
                {house}
              </td>
              <td className="border-b border-primary/10 p-2 text-secondary">
                {sign}
              </td>
              <td className="border-b border-primary/10 p-2 text-secondary">
                {Array.isArray(ruler) ? ruler[1] : ruler}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlacementsTableAP;

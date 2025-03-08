'use client';
import lots from '../data/lots';
import calculateLots from '../utils/calculateLots';
import Image from 'next/image';
import LotFortune from '../public/lots/lotfortune.svg';
import LotSpirit from '../public/lots/lotspirit.svg';
import LotEros from '../public/lots/loteros.svg';
import LotNecessity from '../public/lots/lotnecessity.svg';
import LotCourage from '../public/lots/lotcourage.svg';
import LotVictory from '../public/lots/lotvictory.svg';
import LotNemesis from '../public/lots/lotnemesis.svg';

function PlacementsTableSevenLots({ horoscope }) {
  const calculatedLots = calculateLots(horoscope);
  const houses = horoscope.Houses;
  console.log(houses);
  
  // Helper function to get zodiac sign from degree
  const getZodiacSign = (degree) => {
    const signs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 
                   'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
    const signIndex = Math.floor(degree / 30);
    return signs[signIndex];
  };

  // Helper function to format degrees
  const formatDegree = (degree) => {
    const sign = getZodiacSign(degree);
    const signDegree = degree % 30;
    return `${signDegree.toFixed(2)}° ${sign.charAt(0).toUpperCase() + sign.slice(1)}`;
  };

  // Helper function to determine house
  const getHouse = (position) => {
    for (let i = 0; i < houses.length; i++) {
      const startDegree = houses[i].ChartPosition.StartPosition.Ecliptic.DecimalDegrees;
      const endDegree = houses[i].ChartPosition.EndPosition.Ecliptic.DecimalDegrees;
      
      // Handle cases where house crosses 0° Aries
      if (endDegree < startDegree) {
        if (position >= startDegree || position < endDegree) {
          return i + 1;
        }
      } else {
        if (position >= startDegree && position < endDegree) {
          return i + 1;
        }
      }
    }
    return 1; // Default to first house if not found
  };

  return (
    <div className="overflow-x-auto text-primary">
      <table className="table table-compact bg-base-100 border border-primary/20">
        <thead>
          <tr>
            <th className="font-semibold text-primary border-b border-primary/20">Lot</th>
            <th className="font-semibold text-primary border-b border-primary/20">Sign</th>
            <th className="font-semibold text-primary border-b border-primary/20">House</th>
          </tr>
        </thead>
        <tbody>
          {calculatedLots.map((calculatedLot) => {
            const lotData = lots[calculatedLot.name.split(' ')[2]];
            const houseNumber = getHouse(calculatedLot.position);
            return (
              <tr key={calculatedLot.name} className="text-xs hover:bg-base-200 transition-colors duration-200">
                <td className="flex flex-row flex-wrap justify-start items-center border-b border-primary/10 p-2">
                  {lotData.icon && (
                    <Image
                      src={lotData.icon}
                      alt={calculatedLot.name}
                      width={24}
                      height={24}
                      className='fill-current text-primary'
                    />
                  )}
                  <span className="text-primary font-bold m-2">{calculatedLot.name}</span>
                </td>
                <td className="border-b border-primary/10 p-2">
                  <span className="text-secondary">{formatDegree(calculatedLot.position)}</span>
                </td>
                <td className="border-b border-primary/10 p-2 text-center text-secondary">
                  {`${houseNumber}`}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PlacementsTableSevenLots;


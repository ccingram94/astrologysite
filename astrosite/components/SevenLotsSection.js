'use client';
import React from 'react';
import lots from '../data/lots';
import Image from 'next/image';

const SevenLotsSection = ({ calculatedLots, houses }) => {
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
          return houses[i].label;
        }
      } else {
        if (position >= startDegree && position < endDegree) {
          return houses[i].label;
        }
      }
    }
    return houses[0].label; // Default to first house if not found
  };

  const evaluateLot = (calculatedLot) => {
    const lotName = calculatedLot.name.split(' ')[2];
    const lotData = lots[lotName];
    const houseNumber = getHouse(calculatedLot.position);
    const sign = getZodiacSign(calculatedLot.position);

    return (
      <div className="collapse collapse-arrow join-item border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300">
        <input type="radio" name="lots-accordion" />
        <div className="collapse-title flex items-center gap-2 p-4">
          {lotData.icon && (
            <Image
              src={lotData.icon}
              alt={calculatedLot.name}
              width={32}
              height={32}
              className='fill-current text-primary'
            />
          )}
          <div className="flex flex-col">
            <span className="p-2 text-lg font-extrabold text-neutral">
              {calculatedLot.name}
            </span>
            <div className="flex justify-start items-center p-2 gap-2 text-xs text-primary">
              <span>{formatDegree(calculatedLot.position)}</span>
              <span>•</span>
              <span>{houseNumber} House</span>
            </div>
            <div className='flex flex-row flex-wrap gap-2 p-2'>
              {lotData.keywords.map((keyword, index) => (
                <span key={index} className='bg-primary/10 text-xs text-primary p-1 px-2 rounded-full'>
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className='collapse-content'>
          <div className="pt-4 space-y-4 text-base-content text-sm lg:text-md">
            <div className="prose max-w-none">
              <p className="text-neutral leading-relaxed p-2">
                {lotData.description}
              </p>

              {lotData.houses && lotData.houses[houseNumber] && (
                <div className="bg-base-300/50 p-4 rounded-lg mt-4">
                  <h4 className="font-bold text-neutral mb-2">House {houseNumber} Placement</h4>
                  <p className="text-neutral">{lotData.houses[houseNumber]}</p>
                </div>
              )}

              {lotData.signs && lotData.signs[sign] && (
                <div className="bg-base-300/50 p-4 rounded-lg mt-4">
                  <h4 className="font-bold text-neutral mb-2">{sign.charAt(0).toUpperCase() + sign.slice(1)} Placement</h4>
                  <p className="text-neutral">{lotData.signs[sign]}</p>
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
      <h3 className="font-bold text-primary text-center text-3xl m-2">The Seven Lots</h3>
      <div className="py-2 text-xs text-justify join join-vertical w-full">
        {calculatedLots.map((lot, index) => (
          <React.Fragment key={index}>
            {evaluateLot(lot)}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SevenLotsSection;

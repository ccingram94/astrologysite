'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Origin, Horoscope } from 'circular-natal-horoscope-js';
import { format, differenceInYears } from 'date-fns';
import zodiacSigns from '../data/zodiacsigns';
import planets from '../data/planets';
import houses from '../data/houses';
import aspects from '../data/aspects';
import ChartInputFormAP from '../components/ChartInputFormAP';
import PlacementsTable from './PlacementsTable';
import PlacementsTableAP from './PlacementsTableAP';
import PlanetSection from './PlanetSection';
import HouseSection from './HouseSection';
import AngleSection from './AngleSection';
import AspectSection from './AspectSection';
import AnnualProfectionsChart from './AnnualProfectionsChart';
import ProfectionSection from './ProfectionSection';

const ChartAPFree = () => {
  const [ displayChart, setDisplayChart ] = useState(false);
  const [ horoscope, setHoroscope ] = useState(null);
  const [ currentAge, setCurrentAge ] = useState(null);
  const [ profectionYear, setProfectionYear ] = useState(null);
  const [ profectedHouse, setProfectedHouse] = useState(null);
  const [ profectedSign, setProfectedSign ] = useState(null);
  const [ profectedSignKey, setProfectedSignKey ] = useState(null);
  const [ profectedRuler, setProfectedRuler ] = useState(null);
  const [ chartData, setChartData ] = useState({
    birthDate: '',
    birthTime: '',
    birthLocation: null,
    houseSystem: 'whole-sign',
  });

  const AstroChart = dynamic(() => import('../components/AstroChart'), {
    ssr: false
  });

  const handleFormSubmit = (formData) => {
    const { birthDate, birthTime, birthLocation, houseSystem } = formData;
    const { lat, lon } = birthLocation.coordinates;
    const origin = new Origin({
      year: parseInt(birthDate.split('-')[0]),
      month: parseInt(birthDate.split('-')[1] - 1),
      date: parseInt(birthDate.split('-')[2]),
      hour: parseInt(birthTime.split(':')[0]),
      minute: parseInt(birthTime.split(':')[1]),
      latitude: parseFloat(lat),
      longitude: parseFloat(lon),
    });
    
    const horoscopeData = new Horoscope({
      origin,
      houseSystem: houseSystem,
      zodiac: 'tropical',
      aspectPoints: ['bodies', 'points', 'angles'],
      aspectTypes: ['major', 'minor'],
      customOrbs: {},
      language: 'en',
    });
    setHoroscope(horoscopeData);
    setChartData(formData);
    setDisplayChart(true);
    
  }

  useEffect(() => {
    if (horoscope) {
      const currentAge = differenceInYears(new Date(), horoscope.origin.utcTime);
      setCurrentAge(currentAge);
      const profectionYear = (currentAge % 12) + 1; // Add 1 here
      setProfectionYear(profectionYear);
      const profectedHouse = horoscope.Houses[profectionYear - 1].label;
      setProfectedHouse(profectedHouse);
      const profectedSign = horoscope.Houses[profectionYear - 1].Sign.label;
      setProfectedSign(profectedSign);
      const profectedSignKey = horoscope.Houses[profectionYear - 1].Sign.key;
      setProfectedSignKey(profectedSignKey);
      const profectedRuler = Array.isArray(zodiacSigns[profectedSignKey].rulingPlanet) 
        ? zodiacSigns[profectedSignKey].rulingPlanet[1] 
        : zodiacSigns[profectedSignKey].rulingPlanet;
      setProfectedRuler(profectedRuler);
    }
  })


  const renderHoroscopeData = () => {
    if (!horoscope) return null;
    console.log(horoscope.Houses);
    return (
      <div className='flex flex-col justify-center items-center text-primary rounded-lg'>
        <div className='flex flex-row flex-wrap justify-center items-start'>
          <div className='flex flex-col justify-center items-center lg:mx-4 rounded-lg'>
            <h2 className='font-extrabold text-center text-neutral text-4xl lg:text-6xl m-4'>Annual Profections Chart</h2>
            <div className='font-semibold flex flex-row flex-wrap justify-center text-justify gap-4'>
            <h4>Age {differenceInYears(new Date(), horoscope.origin.utcTime)}</h4>
            <h4>{profectedHouse} House Profection Year</h4>
              <h4>Activated Sign is {profectedSign}</h4>
              <h4>Activated Ruler is {profectedRuler}</h4>
            </div>
            <h2 className='font-semibold text-xs m-2 text-primary/90'>profecting from Ascendant ({horoscope.Ascendant.Sign.label}) for birth date { format(horoscope.origin.utcTimeFormatted, 'PPP')} at { chartData.birthTime }</h2>
          </div>
          <div className='flex flex-row flex-wrap justify-center items-center gap-8'>
            <div className='lg:mt-2 flex flex-col justify-center'>
            <AnnualProfectionsChart 
              ascendantSign={horoscope.Ascendant.Sign.label}
              zodiacSigns={zodiacSigns}
              profectedSign={profectedSign}
              profectedHouse={profectedHouse}
              profectedRuler={profectedRuler}
              birthDate={horoscope.origin.utcTime}
              width={600}  // or whatever size you prefer
              height={600}
              outerColor="white"
              innerColor="white"
              strokeColor="#D2AE3C"
              strokeWidth={1}
            />
            </div>
            <PlacementsTableAP 
              ascendantSign={horoscope.Ascendant.Sign.label}
              zodiacSigns={zodiacSigns}
              birthDate={horoscope.origin.utcTime}
            />
          </div>
          <div className='flex flex-col justify-center'>
            <ProfectionSection 
              ascendantSign={horoscope.Ascendant.Sign.label}
              zodiacSigns={zodiacSigns}
              birthDate={horoscope.origin.utcTime}
              planetInfo={planets}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-base-100'>
      <div className='container mx-auto px-2 py-6'>
        <div className='max-w-6xl mx-auto bg-base-100 rounded-3xl shadow-xl border border-primary/10 p-4 sm:p-8'>
        { !displayChart ? (
          <ChartInputFormAP onSubmit={handleFormSubmit} />
          ) : (
            renderHoroscopeData()
          )
        }
        </div>
      </div>
    </div>
  )
}

export default ChartAPFree;
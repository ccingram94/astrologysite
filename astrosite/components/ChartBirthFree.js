'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Origin, Horoscope } from 'circular-natal-horoscope-js';
import { format } from 'date-fns';
import zodiacSigns from '../zodiacsigns'
import planets from '../planets';
import houses from '../houses';
import aspects from '../aspects';
import ChartInputFormBirth from './ChartInputFormBirth';
import PlacementsTable from './PlacementsTable';
import PlanetSection from './PlanetSection';
import AstroChart from './AstroChart';
import HouseSection from './HouseSection';
import AngleSection from './AngleSection';
import AspectSection from './AspectSection';

const ChartBirthFree = () => {
  const [ displayChart, setDisplayChart ] = useState(false);
  const [ horoscope, setHoroscope ] = useState(null);
  const [ chartData, setChartData ] = useState({
    birthDate: '',
    birthTime: '',
    birthLocation: null,
    houseSystem: 'whole-sign',
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

  const renderHoroscopeData = () => {
    if (!horoscope) return null;
    console.log(horoscope.Houses);
    return (
      <div className='flex flex-col justify-center items-center text-primary rounded-lg'>
        <div className='flex flex-row flex-wrap justify-center items-start'>
          <div className='flex flex-col justify-center items-center text-center lg:mx-4 rounded-lg'>
            <h2 className='font-extrabold text-neutral text-4xl lg:text-6xl mb-4'>Birth Chart</h2>
            <h2 className='font-bold mt-2'>
              { format(horoscope.origin.utcTimeFormatted, 'PPP')} at { chartData.birthTime }
            </h2>
            <h2 className='font-semibold text-sm m-2 max-w-md text-primary/90'>{ chartData.birthLocation.label }</h2>
            <div className='font-semibold flex flex-row flex-wrap justify-center text-center gap-4 p-4'>
              <h4>{ horoscope.CelestialBodies.sun.Sign.label } Sun</h4>
              <h4>{ horoscope.CelestialBodies.moon.Sign.label } Moon</h4>
              <h4>{ horoscope.Ascendant.Sign.label } Ascendant</h4>
              <h4>{ horoscope.Midheaven.Sign.label } Midheaven</h4>
            </div>
          </div>
          <div className='flex flex-row flex-wrap justify-center items-center gap-8'>
            <div className='lg:mt-2 flex flex-col justify-center'>
              <AstroChart horoscope={horoscope} />
            </div>
            <div className='overflow-x-auto'>
              <PlacementsTable horoscope={horoscope} planets={planets} />
            </div>
          </div>
        </div>
        <PlanetSection horoscope={horoscope} planets={planets} />
        <HouseSection horoscope={horoscope} houses={houses} zodiacSigns={zodiacSigns} />
        <AngleSection horoscope={horoscope} planets={planets} />
        <AspectSection horoscope={horoscope} aspects={aspects} />
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-base-100'>
      <div className='container mx-auto px-2 py-6'>
        <div className='max-w-6xl mx-auto bg-base-100 rounded-3xl shadow-xl border border-primary/10 p-4 sm:p-8'>
        { !displayChart ? (
          <ChartInputFormBirth onSubmit={handleFormSubmit} />
          ) : (
            renderHoroscopeData()
          )
        }
        </div>
      </div>
    </div>
  )
}

export default ChartBirthFree;
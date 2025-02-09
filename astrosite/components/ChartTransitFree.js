'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Origin, Horoscope } from 'circular-natal-horoscope-js';
import { format } from 'date-fns';
import zodiacSigns from '../data/zodiacsigns';
import planets from '../data/planets';
import planetsTransit from '../data/planetsTransit';
import houses from '../data/houses';
import aspects from '../data/aspects';
import ChartInputFormBirth from './ChartInputFormBirth';
import ChartInputFormTransit from './ChartInputFormTransit';
import PlacementsTable from './PlacementsTable';
import PlacementsTableTransit from './PlacementsTableTransit';
import PlanetSectionTransit from './PlanetSectionTransit';
import AngleSectionTransit from './AngleSectionTransit';
import AspectSection from './AspectSection';
import AspectSectionTransit from './AspectSectionTransit';

const ChartTransitFree = () => {
  const [ displayChart, setDisplayChart ] = useState(false);
  const [ horoscope, setHoroscope ] = useState(null);
  const [ transitHoroscope, setTransitHoroscope ] = useState(null);
  const [ transitChartData, setTransitChartData ] = useState({
    transitDate: '',
    transitTime: '',
    transitLocation: null,
  })
  const [ chartData, setChartData ] = useState({
    birthDate: '',
    birthTime: '',
    birthLocation: null,
    houseSystem: 'whole-sign',
  });

  const AstroChartTransit = dynamic(() => import('./AstroChartTransit'), {
    ssr: false
  });

  const handleFormSubmit = (formData) => {
    const { birth, transit, houseSystem } = formData;

    // Create birth chart
    const birthOrigin = new Origin({
      year: parseInt(birth.date.split('-')[0]),
      month: parseInt(birth.date.split('-')[1] - 1),
      date: parseInt(birth.date.split('-')[2]),
      hour: parseInt(birth.time.split(':')[0]),
      minute: parseInt(birth.time.split(':')[1]),
      latitude: parseFloat(birth.location.coordinates.lat),
      longitude: parseFloat(birth.location.coordinates.lon),
    });
    
    // Create transit chart
    const transitOrigin = new Origin({
      year: parseInt(transit.date.split('-')[0]),
      month: parseInt(transit.date.split('-')[1] - 1),
      date: parseInt(transit.date.split('-')[2]),
      hour: parseInt(transit.time.split(':')[0]),
      minute: parseInt(transit.time.split(':')[1]),
      latitude: parseFloat(transit.location.coordinates.lat),
      longitude: parseFloat(transit.location.coordinates.lon),
    });
    
    // Calculate birth horoscope
    const birthHoroscopeData = new Horoscope({
      origin: birthOrigin,
      houseSystem: houseSystem,
      zodiac: 'tropical',
      aspectPoints: ['bodies', 'points', 'angles'],
      aspectTypes: ['major', 'minor'],
      customOrbs: {},
      language: 'en',
    });

    // Calculate transit horoscope
    const transitHoroscopeData = new Horoscope({
      origin: transitOrigin,
      houseSystem: houseSystem,
      zodiac: 'tropical',
      aspectPoints: ['bodies', 'points', 'angles'],
      aspectTypes: ['major', 'minor'],
      customOrbs: {},
      language: 'en',
    });

    setHoroscope(birthHoroscopeData);
    setTransitHoroscope(transitHoroscopeData);
    setChartData({
      birthDate: birth.date,
      birthTime: birth.time,
      birthLocation: birth.location,
      houseSystem: houseSystem,
    });
    setTransitChartData({
      transitDate: transit.date,
      transitTime: transit.time,
      transitLocation: transit.location,
    });
    setDisplayChart(true);
  }

  const renderHoroscopeData = () => {
    if (!horoscope || !transitHoroscope) return null;
    console.log(horoscope.Houses);
    return (
      <div className='flex flex-col justify-center items-center text-primary rounded-lg'>
        <div className='flex flex-row flex-wrap justify-center items-start'>
          <div className='flex flex-col justify-center items-center text-center lg:mx-4 rounded-lg'>
            <h2 className='font-extrabold text-neutral text-4xl lg:text-6xl mb-4'>Transit Chart</h2>
            <div className='flex flex-row flex-wrap justify-center m-2'>
              <div className='flex flex-col justify-center text-center p-2'>
                <h2 className='text-xl font-extrabold mt-2'>Birth Date</h2>
                <h2 className='font-bold text-primary/80 mt-2'>
                  { format(horoscope.origin.utcTimeFormatted, 'PPP')} at { chartData.birthTime }
                </h2>
                <h2 className='font-semibold text-sm m-2 max-w-md text-primary/80'>{ chartData.birthLocation.label }</h2>
              </div>
              <div className='flex flex-col justify-center text-center p-2'>
                <h2 className='text-xl font-extrabold mt-2'>Transit Date</h2>
                <h2 className='font-bold text-primary/80 mt-2'>
                  { format(transitHoroscope.origin.utcTimeFormatted, 'PPP')} at { transitChartData.transitTime }
                </h2>
                <h2 className='font-semibold text-sm m-2 max-w-md text-primary/80'>{ chartData.birthLocation.label }</h2>
              </div>
            </div>
            <div className='font-semibold flex flex-row flex-wrap justify-center text-center gap-4 p-4'>
              <h4>{ horoscope.CelestialBodies.sun.Sign.label } Sun</h4>
              <h4>{ horoscope.CelestialBodies.moon.Sign.label } Moon</h4>
              <h4>{ horoscope.Ascendant.Sign.label } Ascendant</h4>
              <h4>{ horoscope.Midheaven.Sign.label } Midheaven</h4>
            </div>
          </div>
          <div className='flex flex-row flex-wrap justify-center items-center gap-8'>
            <div className='lg:mt-2 flex flex-col justify-center'>
              <AstroChartTransit horoscope={horoscope} transitHoroscope={transitHoroscope} />
            </div>
            <div className='overflow-x-auto'>
              <PlacementsTableTransit horoscope={horoscope} transitHoroscope={transitHoroscope} planets={planets} />
            </div>
          </div>
        </div>
        <PlanetSectionTransit horoscope={horoscope} transitHoroscope={transitHoroscope} />
        <AspectSectionTransit horoscope={horoscope} aspects={aspects} transitHoroscope={transitHoroscope} />
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-base-100'>
      <div className='container mx-auto px-2 py-6'>
        <div className='max-w-6xl mx-auto bg-base-100 rounded-3xl shadow-xl border border-primary/10 p-4 sm:p-8'>
        { !displayChart ? (
          <ChartInputFormTransit onSubmit={handleFormSubmit} />
          ) : (
            renderHoroscopeData()
          )
        }
        </div>
      </div>
    </div>
  )
}

export default ChartTransitFree;
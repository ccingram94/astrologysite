'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import solar from 'astronomia/solar';
import julian from 'astronomia/julian';
import planetposition from 'astronomia/planetposition';
import moonposition from 'astronomia/moonposition';
import sidereal from 'astronomia/sidereal';
import moon from 'astronomia/moon';
import { format } from 'date-fns';
import zodiacSigns from '../data/zodiacsigns';
import planets from '../data/planets';
import houses from '../data/houses';
import aspects from '../data/aspects';
import BirthChartInputForm from './BirthChartInputForm';
import PlacementsTable from './PlacementsTable';
import PlanetSection from './PlanetSection';
import HouseSection from './HouseSection';
import AngleSection from './AngleSection';
import AspectSection from './AspectSection';
import { 
  calculateAscendant, 
  calculateMidheaven, 
  calculateDescendant, 
  calculateImumCoeli,
  calculatePlanetary
} from '../utils';
import { 
  calculatePlanetaryPositions, 
  calculatePlanetaryMotions,
  getZodiacPosition 
} from '../utils/calculatePlanetaryPositions';
import { processChartData } from '../utils/processChartData';


const BirthChart = () => {
  const [displayChart, setDisplayChart] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [formData, setFormData] = useState({
    birthDate: '',
    birthTime: '',
    birthLocation: null,
    houseSystem: 'whole-sign',
  });

  const AstroChart = dynamic(() => import('./AstroChart'), {
    ssr: false
  });


  const handleFormSubmit = (formData) => {
    const { birthDate, birthTime, birthLocation, houseSystem } = formData;
    const { lat, lon } = birthLocation.coordinates;

    // Convert date to Julian Day
    const dateObj = new Date(`${birthDate}T${birthTime}`);
    const jd = julian.DateToJD(dateObj);

    // Create data for chartData (horoscope data)

    const birthData = {
      birthDate: birthDate,
      birthTime: birthTime,
      birthLocation: birthLocation,
      birthLat: lat,
      birthLon: lon,
      houseSystem: houseSystem,
    }

    const angles = {
      asc: calculateAscendant(dateObj, lat, lon, jd),
      mc: calculateMidheaven(dateObj, lat, lon, jd),
      dsc: calculateDescendant(dateObj, lat, lon, jd),
      ic: calculateImumCoeli(dateObj, lat, lon, jd)
    }

    const planetaryPositions = calculatePlanetaryPositions(jd);
    const planetaryMotions = calculatePlanetaryMotions(jd);

  const chartData = processChartData(
    birthData,
    angles,
    planetaryPositions,
    planetaryMotions,
  );
  
  setChartData(chartData);
  setDisplayChart(true);
  };

  const renderHoroscopeData = () => {
    if (!chartData) return null;

    return (
      <div className='flex flex-col justify-center items-center text-primary rounded-lg'>
        <div className='flex flex-row flex-wrap justify-center items-start'>
          <div className='flex flex-col justify-center items-center text-center lg:mx-4 rounded-lg'>
            <h2 className='font-extrabold text-neutral text-4xl lg:text-6xl mb-4'>Birth Chart</h2>


            <div className='font-semibold flex flex-row flex-wrap justify-center text-center gap-4 p-4'>
              <h4>{chartData.planets.sun.sign} Sun</h4>
              <h4>{chartData.planets.moon.sign} Moon</h4>
              <h4>{chartData.angles.ascendant.sign} Ascendant</h4>
              <h4>{chartData.angles.midheaven.sign} Midheaven</h4>
            </div>
          </div>
          <div className='flex flex-row flex-wrap justify-center items-center gap-8'>
            <div className='lg:mt-2 flex flex-col justify-center'>
              <p>SVG chart goes here</p>
            </div>
            <div className='overflow-x-auto'>
              <p>placements table goes h</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='min-h-screen bg-base-100'>
      <div className='container mx-auto px-2 py-6'>
        <div className='max-w-6xl mx-auto bg-base-100 rounded-3xl shadow-xl border border-primary/10 p-4 sm:p-8'>
          {!displayChart ? (
            <BirthChartInputForm onSubmit={handleFormSubmit} />
          ) : (
            renderHoroscopeData()
          )}
        </div>
      </div>
    </div>
  );
};

export default BirthChart;

'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { format } from 'date-fns';
import zodiacSigns from '../data/zodiacsigns';
import planets from '../data/planets';
import houses from '../data/houses';
import aspects from '../data/aspects';
import ChartInputFormBirth from './ChartInputFormBirth';
import PlacementsTable from './PlacementsTable';
import PlanetSection from './PlanetSection';
import HouseSection from './HouseSection';
import AngleSection from './AngleSection';
import AspectSection from './AspectSection';
import BirthChartSVG from './BirthChartSVG';
import { findAspects, generateAspectLines } from '../utils/calculateAspectChart';

const PDFDownloadButton = dynamic(() => import('./PDFDownloadButton'), {
  ssr: false,
  loading: () => (
    <button className="btn btn-disabled rounded-xl h-12 px-6 flex items-center gap-2 opacity-80">
      <div className="h-5 w-5 border-2 border-current border-r-transparent rounded-full animate-spin"></div>
      Preparing PDF...
    </button>
  )
});

const ChartBirthFree = () => {
  const [displayChart, setDisplayChart] = useState(false);
  const [horoscope, setHoroscope] = useState(null);
  const [chartData, setChartData] = useState({
    birthDate: '',
    birthTime: '',
    birthLocation: null,
    houseSystem: 'whole-sign',
  });
  const [aspectLines, setAspectLines] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const AstroChart = dynamic(() => import('../components/AstroChart'), {
    ssr: false
  });
 
  const handleFormSubmit = (formData) => {
    setIsLoading(true);
    const { birthDate, birthTime, birthLocation, houseSystem, horoscope } = formData;

    console.log("Your Horoscope Data: ");
    console.log(horoscope);
    setHoroscope(horoscope);
    
    const aspects = findAspects(horoscope.planets);
    const aspectLines = generateAspectLines(aspects.slice(0, 11));
    setAspectLines(aspectLines);
    
    console.log("Your chart data: ")
    console.log(formData);
    setChartData(formData);
    setDisplayChart(true);
    
    // Simulate calculation time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  const renderHoroscopeData = () => {
    if (!horoscope) return null;
    
    return (
      <div className="animate-fadeIn">
        {/* Loading overlay */}
        {isLoading && (
          <div className="fixed inset-0 bg-base-100/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="text-center">
              <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em]"></div>
              <p className="mt-4 text-lg font-medium text-primary">Calculating your birth chart...</p>
            </div>
          </div>
        )}

        <div className="space-y-12 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
              Your Birth Chart
            </h2>
            
            <div className="mt-6 space-y-2">
              <p className="text-xl font-medium">
                {format(new Date(chartData.birthDate + 'T' + chartData.birthTime), 'PPPP')} at {chartData.birthTime}
              </p>
              <p className="text-base-content/70">
                {chartData.birthLocation.label}
              </p>
            </div>

            <div className="mt-6">
              <PDFDownloadButton horoscope={horoscope} chartData={chartData} />
            </div>
            
            {/* Key Placements Summary Cards */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 rounded-xl border border-primary/10 shadow-sm">
                <div className="text-xs uppercase tracking-wider text-primary/70">Sun</div>
                <div className="font-bold text-lg mt-1">{horoscope.planets.Sun.sign}</div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 rounded-xl border border-primary/10 shadow-sm">
                <div className="text-xs uppercase tracking-wider text-primary/70">Moon</div>
                <div className="font-bold text-lg mt-1">{horoscope.planets.Moon.sign}</div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 rounded-xl border border-primary/10 shadow-sm">
                <div className="text-xs uppercase tracking-wider text-primary/70">Ascendant</div>
                <div className="font-bold text-lg mt-1">{horoscope.angles.Ascendant.sign}</div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 rounded-xl border border-primary/10 shadow-sm">
                <div className="text-xs uppercase tracking-wider text-primary/70">Midheaven</div>
                <div className="font-bold text-lg mt-1">{horoscope.angles.Midheaven.sign}</div>
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-base-100 to-base-200/20 rounded-2xl p-4">
              <div className="flex justify-center">
                {horoscope && horoscope && (
                  <BirthChartSVG horoscope={horoscope} />
                )}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-base-100 to-base-200/20 rounded-2xl p-4 overflow-hidden">
              <div className="overflow-x-auto">
                <PlacementsTable planets={planets} newHoroscope={horoscope} />
              </div>
            </div>
          </div>

          <PlanetSection horoscope={horoscope} planets={planets} />
          <AngleSection horoscope={horoscope} planets={planets} />
          <HouseSection horoscope={horoscope} houses={houses} zodiacSigns={zodiacSigns} />
          <AspectSection horoscope={horoscope} aspects={aspects} />
          
          {/* Back Button */}
          <div className="text-center mt-12">
            <button 
              onClick={() => setDisplayChart(false)}
              className="btn btn-outline border-primary/30 text-primary hover:bg-primary hover:text-white rounded-xl px-6 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Calculate New Chart
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200/50">
      <div className="container mx-auto px-4 py-12">
        <div className={`transition-all duration-500 ${displayChart ? 'opacity-100' : ''}`}>
          {!displayChart ? (
            <ChartInputFormBirth onSubmit={handleFormSubmit} />
          ) : (
            renderHoroscopeData()
          )}
        </div>
      </div>
    </div>
  );
}

export default ChartBirthFree;

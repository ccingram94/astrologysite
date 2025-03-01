'use client';
import { useState, useRef, useEffect } from 'react';
import { searchLocation, houseSystemOptions } from '../utils';
import julian from 'astronomia';
import lookup from 'tz-lookup';
import { parseISO } from 'date-fns';
import { fromZonedTime, toZonedTime } from 'date-fns-tz';
import calculateUTC from '../utils/calculateUTC';
import calculateJulianDate from '../utils/calculateJulianDate';
import calculateLocalSiderealTime from '../utils/calculateLocalSiderealTime';
import calculateAscendant from '../utils/calculateAscendant';
import calculateMidheaven from '../utils/calculateMidheaven';
import calculateDescendant from '../utils/calculateDescendant';
import calculateImumCoeli from '../utils/calculateImumCoeli';
import calculateHouseCusps from '../utils/calculateHouseCusps';
import calculateSun from '../utils/calculateSun';
import calculateMoon from '../utils/calculateMoon';
import calculateMercury from '../utils/calculateMercury';
import calculateVenus from '../utils/calculateVenus';
import calculateMars from '../utils/calculateMars';
import calculateJupiter from '../utils/calculateJupiter';
import calculateSaturn from '../utils/calculateSaturn';
import calculateUranus from '../utils/calculateUranus';
import calculateNeptune from '../utils/calculateNeptune';
import calculatePluto from '../utils/calculatePluto';


const ChartInputFormBirth = ({ onSubmit }) => {
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthLocation, setBirthLocation] = useState(null);
  const [houseSystem, setHouseSystem] = useState('whole-sign');
  const [julianDate, setJulianDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isHouseSystemOpen, setIsHouseSystemOpen] = useState(false);
  const [ angles, setAngles ] = useState(null);
  const [ houseCusps, setHouseCusps ] = useState(null);
  const [ planets, setPlanets ] = useState(null);
  
  const dropdownRef = useRef(null);
  const houseSystemRef = useRef(null);

  // Handle click outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (houseSystemRef.current && !houseSystemRef.current.contains(event.target)) {
        setIsHouseSystemOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Debounced search function
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm) {
        loadOptions(searchTerm);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const loadOptions = async (inputValue) => {
    if (!inputValue) return [];
    setIsLoading(true);
    try {
      const results = await searchLocation(inputValue);
      setOptions(results);
      setIsLoading(false);
      return results;
    } catch (error) {
      setIsLoading(false);
      return [];
    }
  };

  const handleSubmit = () => {
    if (!birthDate || !birthTime || !birthLocation) {
      alert('Please fill in all fields');
      return;
    }

    const lat = birthLocation.coordinates.lat;
    const lon = birthLocation.coordinates.lon;

    const utcDate = calculateUTC(birthDate, birthTime, birthLocation).utcISOString;
    const julianDate = calculateJulianDate(utcDate);
    const lst = calculateLocalSiderealTime(julianDate, lon);

    // calculate Angles (Ascendant, Midheaven, Descendant, Imum Coeli)
    const ascendant = calculateAscendant(lst, lat);
    const midheaven = calculateMidheaven(lst);
    const descendant = calculateDescendant(ascendant.degree);
    const imumcoeli = calculateImumCoeli (midheaven.degree);
    const angles = {
      'Ascendant': ascendant,
      'Midheaven': midheaven,
      'Descendant': descendant,
      'ImumCoeli': imumcoeli
    }
    setAngles(angles);
    
    // calculate House Cusps based on chosen houseSystem
    const cusps = calculateHouseCusps(houseSystem, ascendant.degree, midheaven.degree, lat, lst);
    const houseCusps = {
      'First': cusps[0],
      'Second': cusps[1],
      'Third': cusps[2],
      'Fourth': cusps[3],
      'Fifth': cusps[4],
      'Sixth': cusps[5],
      'Seventh': cusps[6],
      'Eighth': cusps[7],
      'Ninth': cusps[8],
      'Tenth': cusps[9],
      'Eleventh': cusps[10],
      'Twelfth': cusps[11]
    }
    setHouseCusps(houseCusps);

    // calculate Planets
    const sun = calculateSun(julianDate);
    const moon = calculateMoon(julianDate);
    const mercury = calculateMercury(julianDate);
    const venus = calculateVenus(julianDate);
    const mars = calculateMars(julianDate);
    const jupiter = calculateJupiter(julianDate);
    const saturn = calculateSaturn(julianDate);
    const uranus = calculateUranus(julianDate);
    const neptune = calculateNeptune(julianDate);
    const pluto = calculatePluto(julianDate);
    const planets = {
      'Sun': sun,
      'Moon': moon,
      'Mercury': mercury,
      'Venus': venus,
      'Mars': mars,
      'Jupiter': jupiter,
      'Saturn': saturn,
      'Uranus': uranus,
      'Neptune': neptune,
      'Pluto': pluto
    }
    setPlanets(planets);

    // create full horoscope with all data
    const myHoroscope = {
      angles: angles,
      houseCusps: houseCusps,
      planets: planets,
    }


    console.log('Latitude (my code): ' + lat);
    console.log('Longitude (my code): ' + lon);
    console.log('UTC Date (my code): ' + utcDate);
    console.log('Julian Date (my code): ' + julianDate);
    console.log('Local Sidereal Time (my code): ' + lst);

    
    onSubmit({
      birthDate,
      birthTime,
      birthLocation,
      houseSystem,
      myHoroscope
    });
  };

  return (
    <div className="space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary">
          Birth Chart Calculator
        </h2>
        <p className="text-secondary/80">
          enter your birth details to generate your astrological chart
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
        {/* Birth Date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-sm font-semibold uppercase tracking-wider text-primary">
              Birth Date
            </span>
          </label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="input input-bordered w-full border-2 border-primary/20 
                      bg-base-100/50 backdrop-blur-sm
                      focus:border-primary focus:outline-none
                      hover:border-secondary/50
                      transition-all duration-300 pl-4 pr-10"
          />
        </div>

        {/* Birth Time */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-sm font-semibold uppercase tracking-wider text-primary">
              Birth Time
            </span>
          </label>
          <input
            type="time"
            value={birthTime}
            onChange={(e) => setBirthTime(e.target.value)}
            className="input input-bordered w-full border-2 border-primary/20 
                      bg-base-100/50 backdrop-blur-sm
                      focus:border-primary focus:outline-none
                      hover:border-secondary/50
                      transition-all duration-300 pl-4 pr-10"
          />
        </div>
      </div>

      {/* Birth Location */}
      <div className="form-control relative" ref={dropdownRef}>
        <label className="label">
          <span className="label-text text-sm font-semibold uppercase tracking-wider text-primary">
            Birth Location
          </span>
        </label>
        
        <div className="relative">
          <input
            type="text"
            className="input input-bordered w-full border-2 border-primary/20 
                      bg-base-100/50 backdrop-blur-sm
                      focus:border-primary focus:outline-none
                      hover:border-secondary/50
                      transition-all duration-300"
            placeholder="Search for a location..."
            value={birthLocation ? birthLocation.label : searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setBirthLocation(null);
              setIsOpen(true);
            }}
            onClick={() => setIsOpen(true)}
          />
          
          {isOpen && (
            <div className="dropdown-content bg-base-100 max-h-60 overflow-auto rounded-lg mt-1 shadow-lg border border-primary/10 absolute w-full z-50">
              {isLoading ? (
                <div className="p-4 text-center">
                  <span className="loading loading-spinner loading-md"></span>
                </div>
              ) : options.length > 0 ? (
                options.map((option) => (
                  <div
                    key={option.value}
                    className="p-3 hover:bg-primary hover:bg-opacity-20 cursor-pointer transition-colors"
                    onClick={() => {
                      setBirthLocation(option);
                      setSearchTerm('');
                      setIsOpen(false);
                    }}
                  >
                    {option.label}
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-primary/60">
                  {searchTerm ? 'No locations found' : 'Start typing to search...'}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* House System */}
      <div className="form-control relative" ref={houseSystemRef}>
        <label className="label">
          <span className="label-text text-sm font-semibold uppercase tracking-wider text-secondary">
            House System
          </span>
        </label>
        
        <div className="relative">
          <div
            className="input input-bordered w-full border-2 border-primary/20 
                      bg-base-100/50 backdrop-blur-sm
                      focus:border-primary focus:outline-none
                      hover:border-secondary/50
                      transition-all duration-300 cursor-pointer
                      flex items-center justify-between"
            onClick={() => setIsHouseSystemOpen(!isHouseSystemOpen)}
          >
            <span>
              {houseSystemOptions.find(option => option.value === houseSystem)?.label}
            </span>
            <svg 
              className={`w-4 h-4 transition-transform duration-200 ${isHouseSystemOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          
          {isHouseSystemOpen && (
            <div className="dropdown-content bg-base-100 max-h-60 overflow-auto rounded-lg mt-1 
                           shadow-lg border border-primary/10 absolute w-full z-50
                           transition-all duration-200">
              {houseSystemOptions.map((option) => (
                <div
                  key={option.value}
                  className={`p-3 hover:bg-primary hover:bg-opacity-20 cursor-pointer transition-colors
                            ${houseSystem === option.value ? 'bg-primary/10' : ''}`}
                  onClick={() => {
                    setHouseSystem(option.value);
                    setIsHouseSystemOpen(false);
                  }}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Calculate Button */}
      <div className="text-center pt-8">
        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-wide btn-lg bg-primary hover:bg-primary-focus text-base-100 
                   border-none shadow-lg hover:shadow-xl hover:shadow-primary/20 
                   transition-all duration-300"
        >
          Calculate Birth Chart
        </button>
      </div>
    </div>
  );
};

export default ChartInputFormBirth;

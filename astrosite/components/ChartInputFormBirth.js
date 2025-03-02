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
import calculateAspect from '../utils/calculateAspect';
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
  const [angles, setAngles] = useState(null);
  const [houseCusps, setHouseCusps] = useState(null);
  const [planets, setPlanets] = useState(null);
  
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
    const imumcoeli = calculateImumCoeli(midheaven.degree);
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
    const sun = calculateSun(julianDate, houseCusps);
    const moon = calculateMoon(julianDate, houseCusps);
    const mercury = calculateMercury(julianDate, houseCusps);
    const venus = calculateVenus(julianDate, houseCusps);
    const mars = calculateMars(julianDate, houseCusps);
    const jupiter = calculateJupiter(julianDate, houseCusps);
    const saturn = calculateSaturn(julianDate, houseCusps);
    const uranus = calculateUranus(julianDate, houseCusps);
    const neptune = calculateNeptune(julianDate, houseCusps);
    const pluto = calculatePluto(julianDate, houseCusps);
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

    const calculateAspects = () => {
      const aspectsArray = [];
      const celestialPoints = {
        ...planets,
        ...angles
      };
      
      // Custom orbs for specific aspects (optional)
      const customOrbs = {
        // You can adjust these values based on your preferences
        'conjunction': 10, // Using a wider orb for conjunctions
        'opposition': 8,
        'trine': 8,
        'square': 7
      };
      
      // Compare each point with every other point (only once per pair)
      const pointKeys = Object.keys(celestialPoints);
      
      for (let i = 0; i < pointKeys.length; i++) {
        for (let j = i + 1; j < pointKeys.length; j++) {
          const point1 = celestialPoints[pointKeys[i]];
          const point2 = celestialPoints[pointKeys[j]];
          
          // Skip if comparing the same point or if points are opposites (like Asc/Desc)
          if (
            (point1.key === 'ascendant' && point2.key === 'descendant') ||
            (point1.key === 'descendant' && point2.key === 'ascendant') ||
            (point1.key === 'midheaven' && point2.key === 'imumcoeli') ||
            (point1.key === 'imumcoeli' && point2.key === 'midheaven')
          ) {
            continue;
          }
          
          const aspect = calculateAspect(point1, point2, customOrbs);
          if (aspect) {
            aspectsArray.push(aspect);
          }
        }
      }
      
      // Sort aspects by importance (major before minor)
      aspectsArray.sort((a, b) => {
        // Sort by level first (major before minor)
        if (a.level !== b.level) {
          return a.level === 'major' ? -1 : 1;
        }
        
        // Then sort by orb (smallest orb first - most exact aspects)
        return a.orb - b.orb;
      });
      
      return aspectsArray;
    };

    const aspects = calculateAspects();

    // create full horoscope with all data
    const horoscope = {
      angles: angles,
      houseCusps: houseCusps,
      planets: planets,
      aspects: aspects,
    }
    
    onSubmit({
      birthDate,
      birthTime,
      birthLocation,
      houseSystem,
      horoscope
    });
  }; 

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-base-100/90 to-base-200/90 backdrop-blur-md shadow-xl border border-primary/10">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Birth Chart Calculator
        </h2>
        <p className="mt-3 text-base-content/70 text-lg">
          Enter your birth details to reveal your astrological blueprint
        </p>
      </div>

      <div className="space-y-8">
        {/* Date and Time Row */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Birth Date */}
          <div className="form-control">
            <label className="flex items-center gap-2 mb-2 text-sm font-medium tracking-wide text-primary/80">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Birth Date
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="input h-12 w-full rounded-xl border-2 border-primary/20 
                       bg-base-100/50 backdrop-blur-sm focus:border-primary
                       focus:ring focus:ring-primary/20 focus:outline-none
                       hover:border-primary/40 transition-all duration-300"
            />
          </div>

          {/* Birth Time */}
          <div className="form-control">
            <label className="flex items-center gap-2 mb-2 text-sm font-medium tracking-wide text-primary/80">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Birth Time
            </label>
            <input
              type="time"
              value={birthTime}
              onChange={(e) => setBirthTime(e.target.value)}
              className="input h-12 w-full rounded-xl border-2 border-primary/20 
                       bg-base-100/50 backdrop-blur-sm focus:border-primary
                       focus:ring focus:ring-primary/20 focus:outline-none
                       hover:border-primary/40 transition-all duration-300"
            />
          </div>
        </div>

        {/* Birth Location */}
        <div className="form-control relative" ref={dropdownRef}>
          <label className="flex items-center gap-2 mb-2 text-sm font-medium tracking-wide text-primary/80">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Birth Location
          </label>
          
          <div className="relative">
            <input
              type="text"
              className="input h-12 w-full rounded-xl border-2 border-primary/20 
                      bg-base-100/50 backdrop-blur-sm focus:border-primary
                      focus:ring focus:ring-primary/20 focus:outline-none
                      hover:border-primary/40 transition-all duration-300 pl-4 pr-10"
              placeholder="Search for a location..."
              value={birthLocation ? birthLocation.label : searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setBirthLocation(null);
                setIsOpen(true);
              }}
              onClick={() => setIsOpen(true)}
            />
            
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-primary/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {isOpen && (
              <div className="dropdown-content bg-base-100 max-h-60 overflow-auto rounded-xl mt-2 shadow-xl border border-primary/10 absolute w-full z-50 animate-fadeIn">
                {isLoading ? (
                  <div className="p-6 text-center">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                    <p className="mt-2 text-sm text-primary/70">Searching locations...</p>
                  </div>
                ) : options.length > 0 ? (
                  <ul className="py-1">
                    {options.map((option) => (
                      <li
                        key={option.value}
                        className="px-4 py-3 hover:bg-primary/10 cursor-pointer transition-colors flex items-center gap-2"
                        onClick={() => {
                          setBirthLocation(option);
                          setSearchTerm('');
                          setIsOpen(false);
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {option.label}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-4 text-center text-primary/60">
                    {searchTerm ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>No locations found</span>
                      </>
                    ) : 'Start typing to search...'}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* House System */}
        <div className="form-control relative" ref={houseSystemRef}>
          <label className="flex items-center gap-2 mb-2 text-sm font-medium tracking-wide text-primary/80">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            House System
          </label>
          
          <div className="relative">
            <div
              className="input h-12 flex items-center justify-between w-full rounded-xl border-2 border-primary/20 
                       bg-base-100/50 backdrop-blur-sm
                       hover:border-primary/40 transition-all duration-300 cursor-pointer px-4"
              onClick={() => setIsHouseSystemOpen(!isHouseSystemOpen)}
            >
              <span>
                {houseSystemOptions.find(option => option.value === houseSystem)?.label}
              </span>
              <svg 
                className={`w-5 h-5 text-primary/60 transition-transform duration-300 ease-in-out ${isHouseSystemOpen ? 'rotate-180' : ''}`}
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
              <div className="dropdown-content bg-base-100 max-h-60 overflow-auto rounded-xl mt-2 
                           shadow-xl border border-primary/10 absolute w-full z-50
                           animate-fadeIn">
                <ul className="py-1">
                  {houseSystemOptions.map((option) => (
                    <li
                      key={option.value}
                      className={`px-4 py-3 cursor-pointer transition-colors 
                              ${houseSystem === option.value ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-primary/5'}`}
                      onClick={() => {
                        setHouseSystem(option.value);
                        setIsHouseSystemOpen(false);
                      }}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Calculate Button */}
        <div className="text-center pt-6 pb-2">
          <button
            type="button"
            onClick={handleSubmit}
            className="btn h-14 px-12 rounded-xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white
                     border-none shadow-lg hover:shadow-xl hover:shadow-primary/20
                     transition-all duration-300 transform hover:-translate-y-1
                     font-bold tracking-wide text-lg"
          >
            Calculate Chart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChartInputFormBirth;

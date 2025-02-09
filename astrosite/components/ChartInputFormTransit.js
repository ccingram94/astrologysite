'use client';
import { useState, useRef, useEffect } from 'react';
import { searchLocation, houseSystemOptions } from '../utils';

const ChartInputFormTransit = ({ onSubmit }) => {
  // Birth Details State
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthLocation, setBirthLocation] = useState(null);
  const [birthSearchTerm, setBirthSearchTerm] = useState('');
  const [birthOptions, setBirthOptions] = useState([]);
  const [isBirthDropdownOpen, setIsBirthDropdownOpen] = useState(false);
  const [isBirthLoading, setIsBirthLoading] = useState(false);

  // Transit Details State
  const [transitDate, setTransitDate] = useState('');
  const [transitTime, setTransitTime] = useState('');
  const [transitLocation, setTransitLocation] = useState(null);
  const [transitSearchTerm, setTransitSearchTerm] = useState('');
  const [transitOptions, setTransitOptions] = useState([]);
  const [isTransitDropdownOpen, setIsTransitDropdownOpen] = useState(false);
  const [isTransitLoading, setIsTransitLoading] = useState(false);

  // House System State
  const [houseSystem, setHouseSystem] = useState('whole-sign');
  const [isHouseSystemOpen, setIsHouseSystemOpen] = useState(false);

  const birthDropdownRef = useRef(null);
  const transitDropdownRef = useRef(null);
  const houseSystemRef = useRef(null);

  // Click outside handlers
  useEffect(() => {
    function handleClickOutside(event) {
      if (birthDropdownRef.current && !birthDropdownRef.current.contains(event.target)) {
        setIsBirthDropdownOpen(false);
      }
      if (transitDropdownRef.current && !transitDropdownRef.current.contains(event.target)) {
        setIsTransitDropdownOpen(false);
      }
      if (houseSystemRef.current && !houseSystemRef.current.contains(event.target)) {
        setIsHouseSystemOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (birthSearchTerm) {
        loadOptions(birthSearchTerm, setBirthOptions, setIsBirthLoading);
      }
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [birthSearchTerm]);
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (transitSearchTerm) {
        loadOptions(transitSearchTerm, setTransitOptions, setIsTransitLoading);
      }
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [transitSearchTerm]);

  const loadOptions = async (searchTerm, setOptions, setLoading) => {
    if (!searchTerm) return;
    setLoading(true);
    try {
      const results = await searchLocation(searchTerm);
      setOptions(results);
    } catch (error) {
      console.error('Error loading options:', error);
      setOptions([]);
    } finally {
      setLoading(false);
    }
  };

  const LocationInput = ({ 
    label, 
    inputValue,
    setInputValue,
    setLocationObject,
    options,
    isOpen,
    setIsOpen,
    dropdownRef,
    isLoading
  }) => (
    <div className="form-control relative" ref={dropdownRef}>
      <label className="label">
        <span className="label-text text-sm font-semibold uppercase tracking-wider text-primary">
          {label}
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
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setLocationObject(null);
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
                    setLocationObject(option);
                    setInputValue(option.label);
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-primary/60">
                {inputValue ? 'No locations found' : 'Start typing to search...'}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
  
  const handleSubmit = () => {
    if (!birthDate || !birthTime || !birthLocation || !transitDate || !transitTime || !transitLocation) {
      alert('Please fill in all fields');
      return;
    }
    
    onSubmit({
      birth: {
        date: birthDate,
        time: birthTime,
        location: birthLocation,
      },
      transit: {
        date: transitDate,
        time: transitTime,
        location: transitLocation,
      },
      houseSystem
    });
  };

  return (
    <div className="space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary">
          Transit Chart Calculator
        </h2>
        <p className="text-secondary/80">
          Enter your birth details and transit details to generate your astrological chart
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Birth Details Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-primary text-center">Birth Details</h3>
          
          <div className="space-y-4">
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
                          transition-all duration-300"
              />
            </div>

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
                          transition-all duration-300"
              />
            </div>
            {/* Birth Location */}
            <div className="form-control relative" ref={birthDropdownRef}>
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
                  value={birthLocation ? birthLocation.label : birthSearchTerm}
                  onChange={(e) => {
                    setBirthSearchTerm(e.target.value);
                    setBirthLocation(null);
                    setIsBirthDropdownOpen(true);
                  }}
                  onClick={() => setIsBirthDropdownOpen(true)}
                />
                
                {isBirthDropdownOpen && (
                  <div className="dropdown-content bg-base-100 max-h-60 overflow-auto rounded-lg mt-1 shadow-lg border border-primary/10 absolute w-full z-50">
                    {isBirthLoading ? (
                      <div className="p-4 text-center">
                        <span className="loading loading-spinner loading-md"></span>
                      </div>
                    ) : birthOptions.length > 0 ? (
                      birthOptions.map((option) => (
                        <div
                          key={option.value}
                          className="p-3 hover:bg-primary hover:bg-opacity-20 cursor-pointer transition-colors"
                          onClick={() => {
                            setBirthLocation(option);
                            setBirthSearchTerm('');
                            setIsBirthDropdownOpen(false);
                          }}
                        >
                          {option.label}
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-primary/60">
                        {birthSearchTerm ? 'No locations found' : 'Start typing to search...'}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
        </div>
      </div>

        {/* Transit Details Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-primary text-center">Transit Details</h3>
          
          <div className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-semibold uppercase tracking-wider text-primary">
                  Transit Date
                </span>
              </label>
              <input
                type="date"
                value={transitDate}
                onChange={(e) => setTransitDate(e.target.value)}
                className="input input-bordered w-full border-2 border-primary/20 
                          bg-base-100/50 backdrop-blur-sm
                          focus:border-primary focus:outline-none
                          hover:border-secondary/50
                          transition-all duration-300"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-semibold uppercase tracking-wider text-primary">
                  Transit Time
                </span>
              </label>
              <input
                type="time"
                value={transitTime}
                onChange={(e) => setTransitTime(e.target.value)}
                className="input input-bordered w-full border-2 border-primary/20 
                          bg-base-100/50 backdrop-blur-sm
                          focus:border-primary focus:outline-none
                          hover:border-secondary/50
                          transition-all duration-300"
              />
            </div>
            <div className="form-control relative" ref={transitDropdownRef}>
              <label className="label">
                <span className="label-text text-sm font-semibold uppercase tracking-wider text-primary">
                  Transit Location
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
                  value={transitLocation ? transitLocation.label : transitSearchTerm}
                  onChange={(e) => {
                    setTransitSearchTerm(e.target.value);
                    setTransitLocation(null);
                    setIsTransitDropdownOpen(true);
                  }}
                  onClick={() => setIsTransitDropdownOpen(true)}
                />
                
                {isTransitDropdownOpen && (
                  <div className="dropdown-content bg-base-100 max-h-60 overflow-auto rounded-lg mt-1 shadow-lg border border-primary/10 absolute w-full z-50">
                    {isTransitLoading ? (
                      <div className="p-4 text-center">
                        <span className="loading loading-spinner loading-md"></span>
                      </div>
                    ) : transitOptions.length > 0 ? (
                      transitOptions.map((option) => (
                        <div
                          key={option.value}
                          className="p-3 hover:bg-primary hover:bg-opacity-20 cursor-pointer transition-colors"
                          onClick={() => {
                            setTransitLocation(option);
                            setTransitSearchTerm('');
                            setIsTransitDropdownOpen(false);
                          }}
                        >
                          {option.label}
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-primary/60">
                        {transitSearchTerm ? 'No locations found' : 'Start typing to search...'}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* House Details Section */}
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
          Calculate Transit Chart
        </button>
      </div>
    </div>
  );
};

export default ChartInputFormTransit;

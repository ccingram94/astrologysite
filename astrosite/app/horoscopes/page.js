'use client';

import { useState, useEffect } from 'react';
import { format, parseISO, set } from 'date-fns';
import dynamic from 'next/dynamic';
import HoroscopeCalendar from '../../components/HoroscopeCalendar';

export default function Horoscopes() {
  const [today, setToday] = useState(null); // Midnight Date for Today's Horoscope
  const [selectedDate, setSelectedDate] = useState(null); // User Selected Date
  const [todayHoroscope, setTodayHoroscope] = useState(null); // Today's Horoscope Result
  const [horoscopeSearchResult, setHoroscopeSearchResult] = useState(null); // Selected Date Horoscope Result
  const [isLoadingToday, setIsLoadingToday] = useState(true); // Loading State for Today's Horoscope
  const [isSearching, setIsSearching] = useState(false); // Loading State for Selected Date Search
  const [isLoadingMonth, setIsLoadingMonth] = useState(true);
  const [monthlyHoroscopes, setMonthlyHoroscopes] = useState([]);

  // Set today to midnight on component mount
  useEffect(() => {
    const midnightToday = set(new Date(), { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    setToday(midnightToday);
  }, []);

  // Fetch today's horoscope
  useEffect(() => {
    async function fetchTodayHoroscope() {
      setIsLoadingToday(true);
      try {
        const response = await fetch('/api/horoscopes/today', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch today’s horoscope.');
        }

        const data = await response.json();
        setTodayHoroscope(data); // Save the response data for today's horoscope
      } catch (error) {
        console.error('Error fetching today’s horoscope:', error);
        setTodayHoroscope(null);
      } finally {
        setIsLoadingToday(false);
      }
    }
    fetchTodayHoroscope();
  }, []);

  // Fetch horoscope for the selected date
  async function fetchHoroscopeByDate(date) {
    setIsSearching(true); // Show spinner for the search process
    try {
      // Normalize date to midnight UTC before sending it in the request
      const utcDate = set(date, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }).toISOString(); // Convert to ISO format in UTC
  
      const response = await fetch('/api/horoscopes/fetchOne', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date: utcDate }), // Send normalized UTC date
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch horoscope for the selected date.');
      }
  
      const data = await response.json();
      setHoroscopeSearchResult(data); // Save the searched horoscope data
    } catch (error) {
      console.error('Error fetching horoscope for selected date:', error);
      setHoroscopeSearchResult(null);
    } finally {
      setIsSearching(false); // Stop the spinner
    }
  }
  
    // Fetch all horoscopes for the current month
    useEffect(() => {
      async function fetchMonthlyHoroscopes() {
        setIsLoadingMonth(true);
        try {
          const response = await fetch("/api/horoscopes/month", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
  
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to fetch horoscopes for the current month.");
          }
  
          const data = await response.json();
          setMonthlyHoroscopes(data); // Store monthly horoscopes
        } catch (error) {
          console.error("Error fetching monthly horoscopes:", error);
          setMonthlyHoroscopes([]); // Ensure state is an empty array
        } finally {
          setIsLoadingMonth(false);
        }
      }
  
      fetchMonthlyHoroscopes();
    }, []);

  // Handle date input change for the selected date
  const handleSelectedDateChange = (event) => {
    const parsedDate = parseISO(event.target.value); // Parse the date from the input
    setSelectedDate(parsedDate); // Update selectedDate state
    fetchHoroscopeByDate(parsedDate); // Fetch horoscope for the selected date
  };

  return (
    <div className='max-w-full min-h-screen flex flex-row flex-wrap justify-center bg-base-100 overflow-hidden'>

      <div className="flex flex-row flex-wrap justify-center items-start p-2 bg-base-100 border-b border-primary/30">
        
        {/* Section 1: Today's Horoscope */}
        <div className="flex flex-col lg:w-1/3 p-4">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-primary text-4xl lg:text-6xl font-bold text-center p-2 pt-6">
              Today's Horoscope
            </h1>
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            <div className="bg-base-100 overflow-hidden rounded-xl flex flex-col justify-center items-center 
                          text-center text-base-content p-4 lg:p-8 lg:max-w-2xl shadow-xl border border-primary/20">
              {isLoadingToday && (
                <span className="loading loading-spinner loading-lg text-primary"></span>
              )}
              
              {!isLoadingToday && todayHoroscope && (
                <div className='flex flex-col justify-center items-center text-center'>
                  <p className="font-bold text-2xl p-2 text-neutral">{format(new Date(todayHoroscope.date), 'PPPP')}</p>
                  <p className="font-semibold text-xs max-w-md lg:text p-2 text-primary">
                    {todayHoroscope.placements.length > 0
                      ? todayHoroscope.placements.map((placement, index) => (
                          <span key={index}>
                            {placement}
                            {index < todayHoroscope.placements.length - 1 && <span className="mx-1">☙</span>}
                          </span>
                        ))
                      : 'No placements available.'}
                  </p>
                  <p className="p-2 lg:p-4 text-justify break-words text-sm max-w-lg text-neutral">
                    {todayHoroscope.content || 'No horoscope available.'}
                  </p>
                </div>
              )}

              {!isLoadingToday && !todayHoroscope && (
                <p className="text-error">Today's horoscope is unavailable at the moment.</p>
              )}
            </div>
          </div>
        </div>

        {/* Section 2: Search a Horoscope by Date */}
        <div className="flex flex-col lg:w-1/3 p-4">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-primary text-4xl lg:text-6xl font-bold text-center p-2 pt-6">
              Search Horoscopes
            </h1>
          </div>
          <div className="flex flex-row flex-wrap justify-center w-full">
            <div className="flex flex-col bg-base-100 rounded-xl text-base-content p-4 lg:p-8 m-2 w-full 
                          lg:max-w-2xl shadow-xl border border-primary/20">
              <p className="font-semibold text-2xl p-2 text-neutral">Select a Date:</p>
              <input
                type="date"
                onChange={handleSelectedDateChange}
                className="input input-bordered bg-base-100 text-base-content border-primary/30 
                         hover:border-primary focus:border-primary max-w-md mb-6"
              />
              <hr className="border-primary/20" />
              <div className="flex flex-col justify-center items-center text-center">
                {isSearching && (
                  <span className="loading loading-spinner loading-lg m-12 text-primary"></span>
                )}

                {!isSearching && selectedDate && horoscopeSearchResult && (
                  <>
                    <p className="font-semibold text-2xl p-2 m-4 text-neutral">
                      {format(selectedDate, 'PPP')}
                    </p>
                    <p className="font-semibold text-xs px-2 text-primary">
                      {horoscopeSearchResult.placements.length > 0
                        ? horoscopeSearchResult.placements.join(' ☙ ')
                        : 'No placements available.'}
                    </p>
                    <p className="p-2 lg:p-4 text-justify text-sm text-neutral">
                      {horoscopeSearchResult.content || 'No horoscope available.'}
                    </p>
                  </>
                )}

                {!isSearching && selectedDate && !horoscopeSearchResult && (
                  <p className="text-error">No horoscope found for the selected date.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <HoroscopeCalendar />
    </div>
  );
}
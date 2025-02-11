'use client';

import { useState, useEffect } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns';

export default function HoroscopeCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [monthlyHoroscopes, setMonthlyHoroscopes] = useState([]);
  const [isLoadingMonth, setIsLoadingMonth] = useState(true);
  const [selectedHoroscope, setSelectedHoroscope] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Get all days in the current month
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const calendarDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Fetch monthly horoscopes
  useEffect(() => {
    async function fetchMonthlyHoroscopes() {
      setIsLoadingMonth(true);
      try {
        const response = await fetch("/api/horoscopes/month", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch horoscopes");
        }

        const data = await response.json();
        setMonthlyHoroscopes(data);
      } catch (error) {
        console.error("Error fetching monthly horoscopes:", error);
        setMonthlyHoroscopes([]);
      } finally {
        setIsLoadingMonth(false);
      }
    }

    fetchMonthlyHoroscopes();
  }, [currentMonth]);

  // Check if a date has a horoscope
  const hasHoroscope = (date) => {
    return monthlyHoroscopes.some(horoscope => 
      isSameDay(new Date(horoscope.date), date)
    );
  };

  // Handle date click
  const handleDateClick = async (date) => {
    try {
      const response = await fetch('/api/horoscopes/fetchOne', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          date: date.toISOString() 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch horoscope');
      }

      const data = await response.json();
      setSelectedHoroscope(data);
      setModalOpen(true);
    } catch (error) {
      console.error('Error fetching horoscope:', error);
    }
  };

  return (
    <div className="flex flex-col lg:w-1/2 p-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-primary text-4xl lg:text-6xl font-bold text-center p-6 lg:p-12">
          Horoscope Calendar
        </h1>
      </div>
      
      <div className="bg-base-100 rounded-xl text-base-content p-4 lg:p-8 shadow-xl border border-primary/20">
        {isLoadingMonth ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <>
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-secondary">
                {format(currentMonth, 'MMMM yyyy')}
              </h2>
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center font-semibold text-primary p-2">
                  {day}
                </div>
              ))}
              
              {calendarDays.map((day, index) => (
                <div
                  key={day.toString()}
                  className={`
                    p-2 text-center cursor-pointer border rounded-lg
                    ${hasHoroscope(day) ? 'border-primary/30 hover:border-primary' : 'border-base-300'}
                    ${!isSameMonth(day, currentMonth) ? 'text-base-300' : 'text-base-content'}
                  `}
                  onClick={() => hasHoroscope(day) && handleDateClick(day)}
                >
                  {format(day, 'd')}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Modal */}
      {selectedHoroscope && (
        <dialog className={`modal ${modalOpen ? 'modal-open' : ''}`}>
          <div className="modal-box bg-base-100">
            <h3 className="font-bold text-2xl p-2 text-neutral">
              {selectedHoroscope.date && format(new Date(selectedHoroscope.date), 'PPPP')}
            </h3>
            <p className="font-semibold text-xs p-2 text-primary">
            {selectedHoroscope.placements.length > 0
              ? selectedHoroscope.placements.map((placement, index) => (
                  <span key={index}>
                    {placement}
                    {index < selectedHoroscope.placements.length - 1 && <span className="mx-1">☙</span>}
                  </span>
                ))
              : 'No placements available.'}
          </p>
            <p className="p-2 text-justify text-neutral">
              {selectedHoroscope.content || 'No horoscope available'}
            </p>
            <div className="modal-action">
              <button className="btn btn-primary" onClick={() => setModalOpen(false)}>
                Close
              </button>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={() => setModalOpen(false)}>close</button>
          </form>
        </dialog>
      )}
    </div>
  );
}

'use client';
import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import {
  PencilSquareIcon,
  UserIcon,
  ChartBarIcon,
  InboxIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';
import { Origin, Horoscope as AstroHoroscope } from 'circular-natal-horoscope-js';
import { eachDayOfInterval, startOfMonth, endOfMonth, isSameDay } from 'date-fns';

function getDaysInCurrentMonth() {
  const date = new Date();
  // Get the last day of the current month
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return lastDay.getDate();
}

function getProgressColor(current, total) {
  const percentage = (current / total) * 100;
  if (percentage >= 90) return 'bg-success';
  if (percentage >= 50) return 'bg-primary';
  return 'bg-warning';
}

function generatePlacements(date) {
  // Create Origin for midnight (00:00) on the selected date at a fixed location
  // Using New York coordinates as an example
  const origin = new Origin({
    year: parseInt(date.split('-')[0]),
    month: parseInt(date.split('-')[1] - 1),
    date: parseInt(date.split('-')[2]),
    hour: 0, // Midnight
    minute: 0,
    latitude: 40.7128, // New York coordinates
    longitude: -74.0060,
  });

  const horoscopeData = new AstroHoroscope({
    origin,
    houseSystem: 'placidus',
    zodiac: 'tropical',
    aspectPoints: ['bodies', 'points', 'angles'],
    aspectTypes: ['major', 'minor'],
    customOrbs: {},
    language: 'en',
  });

  // Generate placements for all planets
  const planets = [
    'sun', 'moon', 'mercury', 'venus', 'mars',
    'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'
  ];

  return planets.map(planet => {
    const celestialBody = horoscopeData.CelestialBodies[planet];
    return `${celestialBody.Sign.label} ${planet.charAt(0).toUpperCase() + planet.slice(1)}${
      celestialBody.isRetrograde ? ' (℞)' : ''
    }`;
  });
}

function WriteHoroscopeModal({ isOpen, onClose, onSubmit, availableDates, editHoroscope = null }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentPlacements, setCurrentPlacements] = useState([]);

  // Initialize edit mode if editHoroscope is provided
  useEffect(() => {
    if (editHoroscope) {
      setSelectedDate(editHoroscope.date.split('T')[0]);
      setContent(editHoroscope.content);
      setCurrentPlacements(editHoroscope.placements || []);
    }
  }, [editHoroscope]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      const placements = generatePlacements(date);
      setCurrentPlacements(placements);
    } else {
      setCurrentPlacements([]);
    }
  };

  const handleAutoGenerate = async () => {
    if (!selectedDate) {
      alert('Please select a date first');
      return;
    }
  
    setIsGenerating(true);
    try {
      const placements = currentPlacements;
      const retrogrades = placements
        .filter(p => p.includes('(℞)'))
        .map(p => p.split(' ')[1]);
  
      const response = await fetch('/api/horoscopes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formattedToday: selectedDate,
          prompt: 'Please generate a short (100 words) daily horoscope for today (for the entire world, not any particular sign) based on traditional Western astrological interpretation of the meanings of the following planet placements: ' + placements
          + "DO NOT include any other text aside from the horoscope text, e.g. 'Here is a 100-word daily horoscope for today based on the given planetary placements:' or similar outside text.", 
          placements: placements,
          retrogrades: retrogrades,
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate horoscope');
      }
  
      if (!data.content) {
        throw new Error('No content received from the generator');
      }
  
      setContent(data.content);
    } catch (error) {
      console.error('Error generating horoscope:', error);
      alert(error.message || 'Failed to generate horoscope. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };
  

  const debouncedSubmit = useCallback(
    debounce(async (data) => {
      try {
        await onSubmit(data);
      } catch (error) {
        console.error('Error submitting horoscope:', error);
      }
    }, 1000),
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    await debouncedSubmit({
      date: selectedDate,
      content: content,
      id: editHoroscope?.id
    });
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-2xl">
        <h3 className="font-bold text-lg mb-4">
          {editHoroscope ? 'Edit Horoscope' : 'Write New Horoscope'}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <select 
              className="select select-bordered w-full"
              value={selectedDate}
              onChange={(e) => handleDateChange(e.target.value)}
              required
              disabled={editHoroscope}
            >
              <option value="">Select a date...</option>
              {availableDates.map((date) => {
                // Create date with explicit UTC handling
                const [year, month, day] = date.split('-').map(Number);
                const displayDate = new Date(Date.UTC(year, month - 1, day));
                
                return (
                  <option key={date} value={date}>
                    {displayDate.toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      timeZone: 'UTC' // Force UTC interpretation
                    })}
                  </option>
                );
              })}
            </select>
          </div>

          {currentPlacements.length > 0 && (
            <div className="mb-4">
              <label className="label">
                <span className="label-text">Planetary Positions</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {currentPlacements.map((placement, index) => (
                  <div key={index} className="text-xs badge badge-outline p-1">
                    {placement}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Horoscope Content</span>
            </label>
            <div className="flex gap-2 mb-2">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={handleAutoGenerate}
                disabled={isGenerating || !selectedDate}
              >
                {isGenerating ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Generating...
                  </>
                ) : (
                  'Auto Generate'
                )}
              </button>
            </div>
            <textarea 
              className="textarea textarea-bordered h-32"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your horoscope here..."
              required
            ></textarea>
          </div>

          <div className="modal-action">
            <button 
              type="button" 
              className="btn" 
              onClick={() => {
                setSelectedDate('');
                setCurrentPlacements([]);
                onClose();
              }}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Saving...
                </>
              ) : (
                editHoroscope ? 'Update Horoscope' : 'Save Horoscope'
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="modal-backdrop" onClick={() => {
        setSelectedDate('');
        setCurrentPlacements([]);
        onClose();
      }}></div>
    </div>
  );
}


export default function AdminHoroscopesClient({ 
  horoscopeCount, 
  todayHoroscope, 
  monthHoroscopes 
}) {
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [editingHoroscope, setEditingHoroscope] = useState(null);
  
  console.log(monthHoroscopes);

  // Generate all horoscopes for this month
  const handleWriteAllHoroscopes = async () => {
    const availableDates = getAvailableDates();
    
    if (!availableDates.length) {
      alert('All dates this month already have horoscopes!');
      return;
    }

    if (!confirm(`This will generate horoscopes for ${availableDates.length} dates. Continue?`)) {
      return;
    }

    let successCount = 0;
    let errorCount = 0;

    // Create a progress element
    const progress = document.createElement('div');
    progress.className = 'fixed top-4 right-4 w-64 p-4 bg-base-100 shadow-lg rounded-lg z-50';
    document.body.appendChild(progress);

    for (const date of availableDates) {
      try {
        // Update progress
        progress.innerHTML = `
          <div class="text-sm font-semibold mb-2">Generating Horoscopes</div>
          <div class="text-xs mb-2">Processing ${date}</div>
          <div class="text-xs">Progress: ${successCount + errorCount}/${availableDates.length}</div>
          <progress class="progress progress-primary w-full" value="${successCount + errorCount}" max="${availableDates.length}"></progress>
        `;

        const placements = generatePlacements(date);
        const retrogrades = placements
          .filter(p => p.includes('(℞)'))
          .map(p => p.split(' ')[1]);

        const response = await fetch('/api/horoscopes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formattedToday: date,
            prompt: 'Please generate a short (100 words) daily horoscope for today (for the entire world, not any particular sign) based on traditional Western astrological interpretation of the meanings of the following planet placements: ' + placements
            + " DO NOT include any additional text (e.g. 'Here is a 100-word daily horoscope for today:'), quotation marks, AI remarks, or anything else -- ONLY the text of the horoscope.",
            placements: placements,
            retrogrades: retrogrades,
          }),
        });

        if (!response.ok) {
          throw new Error(`Failed to generate horoscope for ${date}`);
        }

        successCount++;
        
        // Add a small delay to prevent rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error(`Error generating horoscope for ${date}:`, error);
        errorCount++;
      }
    }

    // Remove progress element
    document.body.removeChild(progress);

    // Show completion message
    alert(`Complete!\nSuccessful: ${successCount}\nFailed: ${errorCount}`);
    
    // Reload the page to show new horoscopes
    window.location.reload();
  };

  // Edit horoscope
  const handleEdit = (horoscope) => {
    setEditingHoroscope(horoscope);
    setIsWriteModalOpen(true);
  };

  // Delete horoscope
  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this horoscope?')) {
      return;
    }

    try {
      const response = await fetch(`/api/horoscopes?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete horoscope');
      }

      window.location.reload();
    } catch (error) {
      console.error('Error deleting horoscope:', error);
      alert('Failed to delete horoscope');
    }
  };
  
  // Get all dates in month and see which have horoscopes
  const getAvailableDates = () => {
    const now = new Date();
    
    // Get last day of previous month
    const lastDayPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    
    // Get first day of next month
    const firstDayNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    
    // Get all days including last of previous month and first of next month
    const daysInRange = eachDayOfInterval({
      start: lastDayPrevMonth,
      end: firstDayNextMonth
    });
  
    // Filter out dates that already have horoscopes
    const availableDates = daysInRange
      .map(date => date.toISOString().split('T')[0]);
  
    return availableDates;
  };  
  

  // submit horoscope to database
  const handleSubmitHoroscope = async (horoscopeData) => {
    // Generate placements for the selected date
    const standardizedDate = new Date(horoscopeData.date);
    standardizedDate.setUTCHours(0, 0, 0, 0);
    const placements = generatePlacements(horoscopeData.date);
    const retrogrades = placements
      .filter(p => p.includes('(℞)'))
      .map(p => p.split(' ')[1]);
  
    const response = await fetch('/api/horoscopes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formattedToday: horoscopeData.date,
        prompt: 'Please generate a short (100 words) daily horoscope for today (for the entire world, not any particular sign) based on traditional Western astrological interpretation of the following planet placements: ' + placements
        + " DO NOT include any additional text (e.g. 'Here is a 100-word daily horoscope for today:'), quotation marks, AI remarks, or anything else -- ONLY the text of the horoscope.",
        placements: placements,
        retrogrades: retrogrades,
        content: horoscopeData.content, // Include the manually written content
        id: horoscopeData.id,
      }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to create horoscope');
    }
  
    window.location.reload();
  };  

  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Section */}
        <header className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h1 className="card-title text-3xl font-bold text-primary">
              Horoscopes
            </h1>
            <p className="text-base-content/70">
              View and manage your website horoscopes below.
            </p>
          </div>
        </header>
        {/* Stats Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Users Card */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="card-body">
              <div className="flex items-center">
                <div className="rounded-lg bg-primary/10 p-3">
                  <UserIcon className="h-6 w-6 text-primary" />
                </div>
                <span className="ml-3 font-semibold text-base-content">Total Horoscopes</span>
              </div>
              <div className="mt-4">
                <h2 className="text-4xl font-extrabold text-neutral">{horoscopeCount}</h2>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="card-body">
              <div className="flex items-center">
                <div className="rounded-lg bg-primary/10 p-3">
                  <InboxIcon className="h-6 w-6 text-primary" />
                </div>
                <span className="ml-3 font-semibold text-base-content">Horoscope Today</span>
              </div>
              <div className="mt-4">
                <h2 className="text-4xl font-extrabold text-neutral">
                  {todayHoroscope ? 1 : 0}
                </h2>
                <div className="flex items-center mt-2">
                  <div className={`badge ${todayHoroscope ? 'badge-success' : 'badge-warning'}`}>
                    {todayHoroscope ? 'Posted' : 'Pending'}
                  </div>
                  <span className="text-sm text-base-content/60 ml-2">
                    {todayHoroscope ? 'Published' : 'Not posted yet'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Horoscopes Card */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="card-body">
              <div className="flex items-center">
                <div className="rounded-lg bg-primary/10 p-3">
                  <ChartBarIcon className="h-6 w-6 text-primary" />
                </div>
                <span className="ml-3 font-semibold text-base-content">Horoscopes This Month</span>
              </div>
              <div className="mt-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-4xl font-extrabold text-neutral">{monthHoroscopes.length}</h2>
                    <div className="flex items-center mt-2">
                      <div className="badge badge-warning">{new Date().toLocaleString('default', { month: 'long' })}</div>
                    </div>
                  </div>
                  {/* Radial Progress */}
                  <div 
                    className="radial-progress text-primary" 
                    style={{ 
                      "--value": (monthHoroscopes.length / getDaysInCurrentMonth()) * 100,
                      "--size": "4rem"
                    }} 
                    role="progressbar"
                  >
                    {Math.round((monthHoroscopes.length / getDaysInCurrentMonth()) * 100)}%
                  </div>
                </div>
                {/* Add progress section */}
                <div className="mt-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-base-content/70">Monthly Progress</span>
                    <span className="text-sm text-base-content/70">
                      {monthHoroscopes.length} / {getDaysInCurrentMonth()} days
                    </span>
                  </div>
                  <div className="w-full bg-base-200 rounded-full h-2.5">
                    <div 
                      className={`${getProgressColor(monthHoroscopes.length, getDaysInCurrentMonth())} h-2.5 rounded-full`}
                      style={{ 
                        width: `${(monthHoroscopes.length / getDaysInCurrentMonth()) * 100}%`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Horoscopes */}
        <section className="card bg-base-100 shadow-lg min-h-96">
          <div className="card-body">
          <div className="flex justify-between items-center mb-4">
            <h2 className="card-title text-xl">Recent Horoscopes</h2>
            <div className="flex gap-2">
              <button 
                className="btn btn-secondary"
                onClick={handleWriteAllHoroscopes}
              >
                <PencilSquareIcon className="h-5 w-5 mr-2" />
                Write All Horoscopes
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setEditingHoroscope(null);
                  setIsWriteModalOpen(true);
                }}
              >
                <PencilSquareIcon className="h-5 w-5 mr-2" />
                Write New Horoscope
              </button>
            </div>
          </div>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Text</th>
                    <th>Placements</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                {monthHoroscopes && monthHoroscopes.length > 0 ? (
                  [...monthHoroscopes]
                    .sort((a, b) => {
                      const dateA = new Date(a.date);
                      const dateB = new Date(b.date);
                      dateA.setUTCHours(0, 0, 0, 0);
                      dateB.setUTCHours(0, 0, 0, 0);
                      return dateA.getTime() - dateB.getTime();
                    })
                    .map((horoscope) => {
                      const horoscopeDate = new Date(horoscope.date);
                      const utcDate = new Date(Date.UTC(
                        horoscopeDate.getFullYear(),
                        horoscopeDate.getMonth(),
                        horoscopeDate.getDate()
                      ));

                      return (
                        <tr key={horoscope.id}>
                          <td>
                            {utcDate.toLocaleDateString('en-US', {
                              weekday: 'long',
                              month: 'long',
                              day: 'numeric',
                              timeZone: 'UTC'
                            })}
                          </td>
                          <td>
                            <div className="max-w-md overflow-hidden text-ellipsis">
                              {horoscope.content.length > 100
                                ? `${horoscope.content.substring(0, 100)}...`
                                : horoscope.content}
                            </div>
                          </td>
                          <td>
                            <div className="dropdown dropdown-hover">
                              <label tabIndex={0} className="badge badge-primary">
                                {horoscope.placements?.length || 0} Placements
                              </label>
                              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                {horoscope.placements?.map((placement, index) => (
                                  <li key={index}>{placement}</li>
                                ))}
                              </ul>
                            </div>
                          </td>
                          <td><div className="badge badge-success">Published</div></td>
                          <td>
                            <div className="flex gap-2">
                              <button
                                className="btn btn-sm btn-ghost"
                                onClick={() => handleEdit(horoscope)}
                              >
                                <PencilSquareIcon className="h-4 w-4" />
                              </button>
                              <button
                                className="btn btn-sm btn-ghost text-error"
                                onClick={() => handleDelete(horoscope.id)}
                              >
                                <TrashIcon className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      No horoscopes found for this month
                    </td>
                  </tr>
                )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      <WriteHoroscopeModal
        isOpen={isWriteModalOpen}
        onClose={() => {
          setIsWriteModalOpen(false);
          setEditingHoroscope(null);
        }}
        onSubmit={handleSubmitHoroscope}
        availableDates={getAvailableDates()}
        editHoroscope={editingHoroscope}
      />
    </div>
  );
}

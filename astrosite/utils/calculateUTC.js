import { fromZonedTime } from 'date-fns-tz';
import tzlookup from 'tz-lookup';

export default function calculateUTC(birthDate, birthTime, birthLocation) {
  // Parse date and time strings
  const [year, month, day] = birthDate.split('-').map(Number);
  const [hour, minute] = birthTime.split(':').map(Number);
  
  // Extract coordinates
  const latitude = parseFloat(birthLocation.coordinates.lat);
  const longitude = parseFloat(birthLocation.coordinates.lon);

  // Get timezone from coordinates
  const timezone = tzlookup(latitude, longitude);

  // Create local time (note: months in Date constructor are 0-based)
  const localDate = new Date(year, month - 1, day, hour, minute, 0);

  // Convert local time to UTC
  const utcDate = fromZonedTime(localDate, timezone);

  return {
    utcDate,
    utcISOString: utcDate.toISOString()
  };
}
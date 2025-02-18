import sidereal from 'astronomia/sidereal';
import julian from 'astronomia/julian';
import base from 'astronomia/base';

export const calculateLocalSiderealTime = (date, longitude) => {
  // 1. Get Julian Day
  const jd = julian.DateToJD(date)
  
  // 2. Get Greenwich Sidereal Time (GST)
  // Using apparent sidereal time for highest accuracy
  const gst = sidereal.apparent(jd) // in seconds

  // 3. Convert GST to hours
  const gstHours = gst / 3600 

  // 4. Calculate Local Sidereal Time
  // Convert longitude to hours (divide by 15)
  const longitudeHours = longitude / 15
  
  // Add longitude hours to GST (subtract for west longitude)
  let lst = gstHours - longitudeHours
  
  // Ensure result is in range 0-24
  lst = base.pmod(lst, 24)

  return lst // Returns LST in decimal hours
}

export default calculateLocalSiderealTime;
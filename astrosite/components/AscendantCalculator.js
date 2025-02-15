'use client'
import { format, getYear, getMonth, getDate } from 'date-fns';
import { TZDate } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import tzlookup from 'tz-lookup';
import { Body, GeoVector, Ecliptic, SiderealTime } from 'astronomy-engine';
import { modulo, radiansToDegrees, sinFromDegrees, cosFromDegrees, tanFromDegrees, getMidheaven, getAscendant, getJulianDate, getSiderealTime, applyZodiacOffsetCounter, decimalDegreesToDMS } from '../utils';
import { getSignFromDD } from '../utils';

const latitude = 29.9744;
const longitude = -93.9924;
const timezone = tzlookup(latitude, longitude);
const birthDate = new TZDate(1994, 6, 8, 16, 5, timezone);
const geocentricEquatorial = GeoVector(Body.Sun, birthDate, true);
const geocentricEcliptic = Ecliptic(geocentricEquatorial);
const eclipticLongitude = geocentricEcliptic.elon;
const signDegrees = eclipticLongitude % 12;

console.log("Date-Fns Birth Date is: " + format(birthDate, 'PPP'))

const julianBirthDate = getJulianDate(getYear(birthDate), getMonth(birthDate), getDate(birthDate));
const localSiderealTime = getSiderealTime(julianBirthDate, longitude);
const ascendant = getAscendant(latitude, localSiderealTime);
const midheaven = getMidheaven(localSiderealTime);



console.log("GeoVector (geocentric equatorial coordinates) for the Sun:");
console.log( geocentricEquatorial );
console.log("Ecliptic conversion (equator EQJ to ecliptic ETC) => elat/elon:");
console.log( geocentricEcliptic );
console.log("Geocentric ecliptic longitude is: ")
console.log( eclipticLongitude )


console.log("Ascendant is: " + getAscendant(latitude, localSiderealTime));
console.log("With applyZodiacOffsetCounter: " + applyZodiacOffsetCounter(getAscendant(latitude, localSiderealTime)));
console.log("Formatted in Arc Degrees: ")
console.log(decimalDegreesToDMS(ascendant))

export default function AscendantCalculator() {
  return (
    <div className="flex flex-col justify-center text-center">
      <h2>Ascendant Calculator</h2>
    </div>
  )
}
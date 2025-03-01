export default function decimalDegreesToDMS(decimalDegrees) {
  // converts decimal degrees to degrees / minutes / seconds
  // https://stackoverflow.com/a/5786627/6826976
  // * float decimalDegrees
  // => returns { degrees, minutes, seconds }
  let degrees = Math.floor(decimalDegrees);
  const minfloat = (decimalDegrees - degrees) * 60;
  let minutes = Math.floor(minfloat);
  const secfloat = (minfloat - minutes) * 60;
  let seconds = Math.round(secfloat);

  // After rounding, the seconds might become 60. These two
  // if-tests are not necessary if no rounding is done.
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes === 60) {
    degrees++;
    minutes = 0;
  }

  return {
    degrees,
    minutes,
    seconds,
  };
};


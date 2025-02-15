function isDayChart(sunDegrees, ascDegrees) {
  // Normalize degrees to 0-360 range
  const normalize360 = (degree) => {
    while (degree < 0) degree += 360;
    while (degree >= 360) degree -= 360;
    return degree;
  };

  // Get normalized positions
  const normalizedSun = normalize360(sunDegrees);
  const normalizedAsc = normalize360(ascDegrees);
  
  // Calculate Descendant (opposite point to Ascendant)
  const normalizedDesc = normalize360(normalizedAsc + 180);

  // If Ascendant is greater than Descendant, we need to adjust our comparison
  if (normalizedAsc > normalizedDesc) {
    // Sun is above horizon if it's between Asc and Desc
    return normalizedSun >= normalizedAsc || normalizedSun <= normalizedDesc;
  } else {
    // Sun is above horizon if it's between Asc and Desc
    return normalizedSun >= normalizedAsc && normalizedSun <= normalizedDesc;
  }
};

export default isDayChart;
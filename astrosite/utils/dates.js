export function standardizeDateToMidnight(date) {
  // Create new date object and set to midnight UTC
  const standardizedDate = new Date(date);
  standardizedDate.setUTCHours(0, 0, 0, 0);
  return standardizedDate;
}

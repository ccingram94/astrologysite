export function getDaysInCurrentMonth() {
  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export function getProgressColor(current, total) {
  const percentage = (current / total) * 100;
  if (percentage >= 90) return 'bg-success';
  if (percentage >= 50) return 'bg-primary';
  return 'bg-warning';
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

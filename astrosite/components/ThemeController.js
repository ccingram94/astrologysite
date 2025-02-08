// components/ThemeController.tsx
'use client';

import { useEffect, useState } from 'react';

export default function ThemeController() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Get the initial theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-primary"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

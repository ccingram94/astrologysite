'use client'

import { useState, useEffect } from 'react';
import { XMarkIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function NavbarTop() {
  const [isVisible, setIsVisible] = useState(true);
  const [animateSparkle, setAnimateSparkle] = useState(false);

  // Animate sparkle effect periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateSparkle(true);
      setTimeout(() => setAnimateSparkle(false), 1000);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Handle banner dismissal
  const handleDismiss = () => {
    setIsVisible(false);
    // Optionally save to localStorage to keep it dismissed between sessions
    localStorage.setItem('promoBarDismissed', 'true');
  };

  // Check if previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('promoBarDismissed') === 'true';
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-primary to-primary/50 text-base-100 py-2.5 px-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-center md:justify-between">
        <div className="hidden md:block w-24">
          {/* Empty div for layout balance */}
        </div>
        
        <div className="flex items-center justify-center space-x-2 text-sm font-medium">
          <SparklesIcon className={`h-4 w-4 ${animateSparkle ? 'animate-pulse text-yellow-200' : 'text-yellow-100'}`} />
          <span>use code</span>
          <span className="font-bold bg-white/20 text-white px-2 py-0.5 rounded tracking-wide mx-1">ASTRO</span>
          <span>for 50% OFF all professional reports</span>
        </div>
        
        <div className="absolute right-3 md:static md:block w-24 text-right">
          <button 
            onClick={handleDismiss}
            className="p-1 hover:bg-white/10 rounded-full transition-colors duration-200"
            aria-label="Dismiss promotion"
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

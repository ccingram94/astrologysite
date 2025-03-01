import React from 'react';
import Link from 'next/link';
import { CakeIcon, ArrowPathIcon, HeartIcon, StarIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

const ChartBanner = () => {
  const freeCharts = [
    {
      title: "Birth Chart",
      description: "view your birth chart with detailed interpretations for your signs, houses, planets, aspects, and major angles",
      href: "/birthchart",
      icon: <CakeIcon height="48" width="48" />
    },
    {
      title: "Transit Chart",
      description: "how the changing planets affect your birth chart by day and what influences to expect ",
      href: "/transitchart",
      icon: <ArrowPathIcon height="48" width="48" />
    },
    {
      title: "Synastry Chart",
      description: "relationship compatibility with detailed interpretations for how you communicate and understand each other",
      href: "/synastrychart",
      icon: <HeartIcon height="48" width="48" />
    },
    {
      title: "Annual Profections",
      description: "forecast by year with interpretations for the ruling house, sign, and planet and their",
      href: "/annualprofectionschart",
      icon: <CalendarDaysIcon height="48" width="48" />
    },
    {
      title: "Seven Lots",
      description: "forecasts on seven important life topics (luck, mind, love, challenges, successes, and potential downfalls)",
      href: "/sevenlotschart",
      icon: <StarIcon height="48" width="48" />
    },
  ];

  return (
    <div className="flex flex-col w-full bg-primary/80 pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl text-white font-bold m-6">Free Astrology Tools</h2>
        <p className="text-white/80">calculate and view your charts instantly with detailed interpretations</p>
      </div>

      <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center items-stretch gap-4 m-6">
        {freeCharts.map((chart, index) => (
          <Link 
            href={chart.href} 
            key={index}
            className="card bg-base-100 shadow-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 w-full lg:w-1/5"
          >
            <div className="card-body p-4 text-center items-center">
              <div className="text-2xl mb-2">{chart.icon}</div>
              <h3 className="font-bold text-neutral">{chart.title}</h3>
              <p className="text-xs text-primary">{chart.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChartBanner;

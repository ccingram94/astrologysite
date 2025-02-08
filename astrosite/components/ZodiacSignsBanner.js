import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const zodiacSigns = [
  { name: 'Aries', dates: 'Mar 21 - Apr 19', image: '/aries.webp' },
  { name: 'Taurus', dates: 'Apr 20 - May 20', image: '/taurus.webp' },
  { name: 'Gemini', dates: 'May 21 - Jun 20', image: '/gemini.webp' },
  { name: 'Cancer', dates: 'Jun 21 - Jul 22', image: '/cancer.webp' },
  { name: 'Leo', dates: 'Jul 23 - Aug 22', image: '/leo.webp' },
  { name: 'Virgo', dates: 'Aug 23 - Sep 22', image: '/virgo.webp' },
  { name: 'Libra', dates: 'Sep 23 - Oct 22', image: '/libra.webp' },
  { name: 'Scorpio', dates: 'Oct 23 - Nov 21', image: '/scorpio.webp' },
  { name: 'Sagittarius', dates: 'Nov 22 - Dec 21', image: '/sagittarius.webp' },
  { name: 'Capricorn', dates: 'Dec 22 - Jan 19', image: '/capricorn.webp' },
  { name: 'Aquarius', dates: 'Jan 20 - Feb 18', image: '/aquarius.webp' },
  { name: 'Pisces', dates: 'Feb 19 - Mar 20', image: '/pisces.webp' },
];

const ZodiacSignsBanner = () => {
  return (
    <div className="bg-base-100 text-primary py-16 border-b border-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold text-3xl text-center mb-12">Explore Your Zodiac Sign</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {zodiacSigns.map((sign) => (
            <Link 
              href={`/zodiacsigns/${sign.name.toLowerCase()}`} 
              key={sign.name} 
              className="group"
            >
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4 transform transition duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 rounded-full bg-primary/5"></div>
                  <Image
                    src={sign.image}
                    alt={sign.name}
                    width={100} height={100}
                    className="w-full h-full object-cover rounded-full shadow-lg shadow-primary/10"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-center text-primary group-hover:text-secondary transition-colors duration-300">
                  {sign.name}
                </h3>
                <p className="text-sm font-semibold text-primary/80 text-center mt-1">
                  {sign.dates}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZodiacSignsBanner;

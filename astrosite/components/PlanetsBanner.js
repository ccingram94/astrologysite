import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const astrologicalPlanets = [
  { name: 'Sun', description: 'Identity, ego, vitality', image: '/sun.webp' },
  { name: 'Moon', description: 'Emotions, instincts, habits', image: '/moon.webp' },
  { name: 'Mercury', description: 'Communication, intellect', image: '/mercury.webp' },
  { name: 'Venus', description: 'Love, beauty, values', image: '/venus.webp' },
  { name: 'Mars', description: 'Energy, action, desire', image: '/mars.webp' },
  { name: 'Jupiter', description: 'Growth, expansion, wisdom', image: '/jupiter.webp' },
  { name: 'Saturn', description: 'Structure, responsibility', image: '/saturn.webp' },
  { name: 'Uranus', description: 'Change, originality', image: '/uranus.webp' },
  { name: 'Neptune', description: 'Dreams, spirituality', image: '/neptune.webp' },
  { name: 'Pluto', description: 'Transformation, power', image: '/pluto.webp' },
];

const PlanetsBanner = () => {
  return (
    <div className="bg-base-100 text-primary py-16 border-b border-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold text-3xl text-center mb-12">
          Explore Astrological Planets
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {astrologicalPlanets.map((planet) => (
            <Link 
              href={`/planets/${planet.name.toLowerCase()}`} 
              key={planet.name} 
              className="group"
            >
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4 transform transition-all duration-300 group-hover:scale-110">
                  {/* Glow effect behind image */}
                  <div className="absolute inset-0 rounded-full bg-primary/5 blur-sm"></div>
                  
                  {/* Main image */}
                  <Image
                    src={planet.image}
                    alt={planet.name}
                    width={100} height={100}
                    className="w-full h-full object-cover rounded-full shadow-lg shadow-primary/10 relative z-10"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"></div>
                </div>
                
                {/* Text content */}
                <h3 className="text-xl font-bold text-center text-primary group-hover:text-secondary transition-colors duration-300">
                  {planet.name}
                </h3>
                <p className="text-sm font-semibold text-primary/80 text-center mt-1 max-w-[150px] mx-auto">
                  {planet.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanetsBanner;

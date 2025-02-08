'use client'
import Image from 'next/image'
import { useParams } from 'next/navigation';
import planets from '../../../../data/planets';
import AccordionMeaningsSigns from '../../../components/AccordionMeaningsSigns';
import AccordionMeaningsHouses from '../../../components/AccordionMeaningsHouses';

export default function PlanetPage() {
  const params = useParams();
  const planet = planets[params.slug];
  
  return (
    <>
      <div className="min-h-screen bg-base-100 text-primary py-12 px-4">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Planet Image */}
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt blur-2xl"></div>
              <Image 
                src={planet.image} 
                width={150} 
                height={150} 
                className='relative h-64 w-64 rounded-full shadow-xl shadow-primary/20 transform hover:scale-105 transition-all duration-300'
                alt={planet.name}
              />
            </div>

            {/* Planet Info */}
            <div className='flex flex-col max-w-2xl space-y-6'>
              <div className='space-y-2 text-center lg:text-left'>
                <h2 className="text-center font-extrabold text-3xl lg:text-5xl text-primary">{planet.type}</h2>
                <p className="text-center font-semibold text-lg text-primary/80">{`Orbit of ${planet.orbit}`}</p>
              </div>
              
              <p className='text-lg text-center leading-relaxed text-neutral'>{planet.descriptionShort}</p>

              {/* Stats Grid */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                {/* Rulership Card */}
                <div className='bg-base-100 rounded-xl p-6 flex flex-col items-center text-center border border-primary/20 shadow-lg hover:shadow-primary/10 transition-all duration-300'>
                  <h3 className="font-extrabold text-2xl lg:text-3xl text-primary mb-3">Rulership</h3>
                  <div className='space-y-2 font-semibold text-primary/80'>
                    <p>Ruler of the {Array.isArray(planet.ruledHouse) ? `${planet.ruledHouse[0]} and ${planet.ruledHouse[1]}` : planet.ruledHouse}</p>
                    <p>Ruler of {Array.isArray(planet.domicile) ? `${planet.domicile[0]} and ${planet.domicile[1]}` : planet.domicile}</p>
                  </div>
                </div>

                {/* Dignity Card */}
                <div className='bg-base-100 rounded-xl p-6 flex flex-col items-center text-center border border-primary/20 shadow-lg hover:shadow-primary/10 transition-all duration-300'>
                  <h3 className="font-extrabold text-2xl lg:text-3xl text-primary mb-3">Dignity</h3>
                  <div className='space-y-2 font-semibold text-primary/80'>
                    <p>Domicile in {Array.isArray(planet.domicile) ? `${planet.domicile[0]} and ${planet.domicile[1]}` : planet.domicile}</p>
                    <p>Exaltation in {planet.exaltation}</p>
                    <p>Detriment in {Array.isArray(planet.detriment) ? `${planet.detriment[0]} and ${planet.detriment[1]}` : planet.detriment}</p>
                    <p>Fall in {planet.fall}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Meaning Section */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-base-100 rounded-2xl p-8 border border-primary/20 shadow-xl">
              <h2 className="text-4xl font-bold text-primary text-center mb-6">
                Meaning in Astrology
              </h2>
              <p className="text-justify text-sm leading-relaxed text-neutral">
                {planet.descriptionLong}
              </p>
            </div>
          </div>

          {/* Accordions Section */}
          <div className='mt-16 flex flex-row flex-wrap justify-center items-start space-x-6 max-w-7xl mx-auto'>
            <div className="flex-1 min-w-[400px]">
              <AccordionMeaningsSigns planet={planet} />
            </div>
            <div className="flex-1 min-w-[400px]">
              <AccordionMeaningsHouses planet={planet} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

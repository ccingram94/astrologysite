import Link from 'next/link';
import { SparklesIcon, ChartBarIcon, StarIcon } from '@heroicons/react/24/outline';
import IconDisplay from './IconDisplay'

const Hero = () => {
  const features = [
    {
      icon: <StarIcon className="h-6 w-6" />,
      title: "Daily Horoscopes",
      description: "Celestial guidance for your day"
    },
    {
      icon: <ChartBarIcon className="h-6 w-6" />,
      title: "Birth Chart",
      description: "Interpretations for your zodiac signs, planets, houses, aspects, and more"
    },
    {
      icon: <SparklesIcon className="h-6 w-6" />,
      title: "Personal Readings",
      description: "Expert astrological insights"
    }
  ];

  return (
    <div className="relative text-primary overflow-hidden min-h-[85vh]">
      <div className="absolute inset-0 bg-gradient-to-b from-base-100/30 via-primary/30 to-primary/50" />
      
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32">
          {/* Hero Text */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-wide">
              <span className="block bg-primary bg-clip-text text-transparent drop-shadow-2xl">
                Discover Your
              </span>
              <span className="block mt-2 bg-primary bg-clip-text text-transparent drop-shadow-2xl">
                Cosmic Path
              </span>
              <IconDisplay />
            </h1>
            
            <p className="mt-6 lg:text-xl text-primary/80 max-w-72 lg:max-w-2xl mx-auto font-semibold">
              read your daily horoscope or try our free birth chart
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/birthchart"
                className="w-fit btn btn-primary btn-lg text-base-100 rounded-full transition-all duration-300 shadow-lg"
              >
                <button className="relative z-10 flex items-center gap-2">
                  Free Birth Chart
                </button>
              </Link>
              
              <Link
                href="/horoscopes"
                className="w-fit btn btn-outline btn-lg hover:text-base-100 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Daily Horoscopes
                </span>
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-24 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-base-100/80 hover:bg-primary/80 text-primary hover:text-base-100 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:bg-neutral/90 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm opacity-80">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

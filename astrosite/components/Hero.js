import Link from 'next/link';
import Image from 'next/image';
import { SparklesIcon, ChartBarIcon, StarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const features = [
    {
      icon: <StarIcon className="h-6 w-6" />,
      title: "Daily Horoscopes",
      description: "Get personalized celestial guidance for your day ahead with accurate predictions.",
      link: "/horoscopes",
    },
    {
      icon: <ChartBarIcon className="h-6 w-6" />,
      title: "Birth Chart Analysis",
      description: "Discover insights about your zodiac signs, planets, houses, and aspects.",
      link: "/birthchart",
    },
    {
      icon: <SparklesIcon className="h-6 w-6" />,
      title: "Premium Reports",
      description: "In-depth astrological insights crafted by professional astrologers.",
      link: "/reports",
    }
  ];

  return (
    <section className="relative text-primary overflow-hidden min-h-[90vh]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-base-100 to-base-100 opacity-80 z-0" />
      
      {/* Decorative Celestial Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl z-0" />
      
      <div className="absolute top-1/4 left-1/3 opacity-20 z-0">
        <Image 
          src="/stars-pattern.svg" 
          alt="Stars Pattern" 
          width={300} 
          height={300}
          className="opacity-20"
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-36">
          {/* Hero Text */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-primary/10 text-primary">
                <SparklesIcon className="mr-1.5 h-3.5 w-3.5" />
                ancient wisdom for the modern world
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/20 drop-shadow-sm">
                Discover Your
              </span>
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/20 drop-shadow-sm">
                Cosmic Path
              </span>
            </h1>
            
            <p className="mt-8 text-lg sm:text-xl lg:text-2xl text-primary/60 max-w-3xl mx-auto font-normal leading-relaxed">
              Unlock the wisdom of the stars with personalized astrology insights tailored to your unique cosmic blueprint.
            </p>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-5">
              <Link
                href="/birthchart"
                className="w-full sm:w-fit inline-flex justify-center items-center px-8 py-4 bg-gradient-to-r from-primary to-primary/50 text-white rounded-full font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Create Free Birth Chart
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </span>
              </Link>
              
              <Link
                href="/horoscopes"
                className="w-full sm:w-fit mt-4 sm:mt-0 inline-flex justify-center items-center px-8 py-4 bg-white border border-primary/20 text-primary rounded-full font-medium shadow-sm hover:bg-primary/5 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <StarIcon className="h-4 w-4 mr-2" />
                Read Daily Horoscope
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-24 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col h-full">
                    <div className="p-3 bg-primary/5 rounded-xl w-fit mb-4">
                      <div className="text-primary">{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 text-sm flex-grow mb-4">
                      {feature.description}
                    </p>
                    <Link 
                      href={feature.link} 
                      className="inline-flex items-center text-primary font-medium text-sm hover:text-primary-focus transition-colors"
                    >
                      Explore
                      <ArrowRightIcon className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary/60 to-secondary/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-base-100">
              <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

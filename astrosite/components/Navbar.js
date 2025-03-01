'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { StarIcon, CalendarDaysIcon, HeartIcon, GlobeAltIcon, ChevronDownIcon, ArrowPathIcon, BookOpenIcon, SparklesIcon, AcademicCapIcon, BoltIcon, CakeIcon, ChatBubbleLeftRightIcon, PencilSquareIcon, MagnifyingGlassIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import NavbarTop from './NavbarTop';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDrawer = () => {
    const drawer = document.getElementById('my-drawer');
    if (drawer instanceof HTMLInputElement) {
      drawer.checked = false;
    }
  };

  const navItems = [
    { 
      name: 'Learn', 
      path: '/learn', 
      icon: <AcademicCapIcon className="h-4 w-4" /> 
    },
    { 
      name: 'Horoscopes', 
      path: '/horoscopes', 
      icon: <BoltIcon className="h-4 w-4" /> 
    },
    { 
      name: 'Birth Chart', 
      path: '/birthchart', 
      icon: <CakeIcon className="h-4 w-4" /> 
    },
    { 
      name: 'All Charts',
      isDropdown: true,
      icon: <GlobeAltIcon className="h-4 w-4" />,
      dropdownItems: [
        { name: 'Birth Chart', path: '/birthchart', icon: <CakeIcon className="h-4 w-4" />  },
        { name: 'Transit Chart', path: '/transitchart', icon: <ArrowPathIcon className="h-4 w-4" />  },
        { name: 'Synastry Chart', path: '/synastrychart', icon: <HeartIcon className="h-4 w-4" />  },
        { name: 'Annual Profections', path: '/annualprofectionschart', icon: <CalendarDaysIcon className="h-4 w-4" />  },
        { name: 'Traditional Lots', path: '/sevenlotschart', icon: <StarIcon className="h-4 w-4" />  },
      ]
    },
    { 
      name: 'Reports', 
      path: '/reports', 
      icon: <SparklesIcon className="h-4 w-4" /> 
    },
  ];

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-base-100 text-primary">
        <NavbarTop />
        
        {/* Mobile Navbar */}
        <div className="navbar lg:hidden sticky top-0 z-50 shadow-md bg-base-100 px-4">
          <div className="navbar-start">
            <label 
              htmlFor="my-drawer" 
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>

          <div className="navbar-center">
            <Link href="/" className="flex items-center">
              <Image src='/logo.webp' height='30' width='30' className='mr-2' alt="Astro Gnosis Logo" priority />
              <span className="font-serif text-lg font-bold text-primary">AstroGnosis</span>
            </Link>
          </div>

          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className={`hidden lg:flex navbar bg-base-100 h-20 sticky top-0 z-50 ${isScrolled ? 'shadow-md' : ''} backdrop-blur-lg bg-opacity-95 transition-shadow duration-300`}>
          {/* Logo Section */}
          <div className="navbar-start w-1/4 pl-6">
            <Link 
              href="/" 
              className="flex items-center gap-2 font-serif text-xl text-primary font-bold hover:opacity-80 transition-opacity duration-200"
            >
              <Image 
                src='/logo.webp' 
                height='36' 
                width='36' 
                className='object-contain' 
                alt="Astro Gnosis Logo"
                priority
              />
              <span className="tracking-wide">AstroGnosis</span>
            </Link>
          </div>
          
          {/* Centered Menu Items */}
          <div className="navbar-center w-2/4 flex justify-center">
            <ul className="flex items-center space-x-2 md:space-x-6">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  {item.isDropdown ? (
                    <div className="dropdown dropdown-hover dropdown-bottom">
                      <button 
                        className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                          pathname.includes(item.name.toLowerCase()) 
                            ? 'text-primary bg-primary/5' 
                            : 'text-neutral-700 hover:text-primary hover:bg-primary/5'
                        }`}
                      >
                        <span className="w-5 h-5 mr-1.5 text-primary/60 group-hover:text-primary transition-colors duration-200">
                          {item.icon}
                        </span>
                        <span className="hidden md:inline">{item.name}</span>
                        <ChevronDownIcon className="h-3.5 w-3.5 ml-1 opacity-70" />
                      </button>
                      <div className="dropdown-content z-30 mt-1 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <ul className="py-2 px-1 bg-white rounded-lg shadow-lg border border-neutral-100 min-w-[220px]">
                          {item.dropdownItems.map((dropdownItem) => (
                            <li key={dropdownItem.path}>
                              <Link 
                                href={dropdownItem.path}
                                className={`flex items-center px-4 py-2 text-sm rounded-md ${
                                  pathname === dropdownItem.path 
                                    ? 'text-primary font-medium bg-primary/5' 
                                    : 'text-neutral-700 hover:text-primary hover:bg-primary/5'
                                }`}
                              >
                                <span className="w-5 h-5 mr-2 opacity-80">{dropdownItem.icon}</span>
                                <span>{dropdownItem.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={item.path}
                      className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                        pathname === item.path 
                          ? 'text-primary bg-primary/5' 
                          : 'text-neutral-700 hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      <span className="w-5 h-5 mr-1.5 text-primary/60 group-hover:text-primary transition-colors duration-200">
                        {item.icon}
                      </span>
                      <span className="hidden md:inline">{item.name}</span>
                    </Link>
                  )}
                  
                  {/* Active indicator */}
                  {pathname === item.path && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-12 bg-primary rounded-full"></div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Actions Section */}
          <div className="navbar-end w-1/4 pr-6 flex items-center justify-end gap-3">
            <Link href="/search" className="btn btn-circle btn-ghost">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </Link>
            <Link 
              href="/reports" 
              className="btn btn-primary text-white hover:bg-primary-focus px-6 rounded-full shadow-sm transition-all duration-200"
            >
              <SparklesIcon className="h-4 w-4 mr-2" />
              <span className="font-medium">Get Reports</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Drawer Side */}
      <div className="drawer-side z-[999]">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="flex flex-col w-80 min-h-full bg-base-100 text-neutral-800">
          {/* Drawer header */}
          <div className="p-4 border-b border-neutral-100 flex justify-between items-center">
            <Link href="/" onClick={closeDrawer} className="flex items-center gap-2">
              <Image src="/logo.webp" width={32} height={32} alt="Astro Gnosis" priority />
              <span className="font-serif font-bold text-primary">AstroGnosis</span>
            </Link>
            <label htmlFor="my-drawer" className="btn btn-sm btn-circle btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </label>
          </div>
          
          {/* Navigation items */}
          <div className="flex-1 overflow-y-auto py-4">
            <ul className="menu menu-lg p-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.isDropdown ? (
                    <div className="collapse collapse-arrow">
                      <input type="checkbox" /> 
                      <div className="collapse-title font-medium flex items-center gap-2">
                        <span className="text-primary/60">{item.icon}</span>
                        {item.name}
                      </div>
                      <div className="collapse-content">
                        <ul className="ml-2 border-l-2 border-neutral-100 pl-2">
                          {item.dropdownItems.map((dropdownItem) => (
                            <li key={dropdownItem.path}>
                              <Link 
                                href={dropdownItem.path}
                                onClick={closeDrawer}
                                className={`py-2 hover:text-primary transition-colors duration-200 flex items-center gap-2 ${
                                  pathname === dropdownItem.path ? 'text-primary font-medium' : 'text-neutral-700'
                                }`}
                              >
                                <span className="text-primary/60">{dropdownItem.icon}</span>
                                {dropdownItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={item.path} 
                      onClick={closeDrawer}
                      className={`font-medium py-2 hover:text-primary transition-colors duration-200 flex items-center gap-2 ${
                        pathname === item.path ? 'text-primary bg-primary/5 rounded-md' : 'text-neutral-700'
                      }`}
                    >
                      <span className="text-primary/60">{item.icon}</span>
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Drawer footer */}
          <div className="p-4 border-t border-neutral-100">
            <Link 
              href="/search"
              onClick={closeDrawer}
              className="btn btn-outline btn-neutral w-full mb-2"
            >
              <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
              Search
            </Link>
            <Link 
              href="/reports" 
              onClick={closeDrawer}
              className="btn btn-primary text-white w-full"
            >
              <SparklesIcon className="h-5 w-5 mr-2" />
              Get Your Astrology Report
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

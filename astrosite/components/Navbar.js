'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon, BookOpenIcon, SparklesIcon, AcademicCapIcon, BoltIcon, CakeIcon, ChatBubbleLeftRightIcon, PencilSquareIcon, MagnifyingGlassIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import NavbarTop from './NavbarTop';

const Navbar = () => {
  const [ theme, setTheme ] = useState()
  const pathname = usePathname();

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
        <div className="navbar lg:hidden sticky top-0 z-50 shadow-lg backdrop-blur-lg bg-opacity-95">

          <div className="navbar-center">
            <Link href="/" className="btn btn-ghost text-xl">
              <Image src='/logo.webp' height='28' width='28' className='mr-2' alt="Astro Gnosis Logo" />
              Astro Gnosis
            </Link>
          </div>

          <div className="navbar-end">
            <label 
              htmlFor="my-drawer" 
              className="btn btn-ghost btn-circle transition-all duration-300"
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
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex navbar text-base-100 font-bold h-20 sticky top-0 z-50 shadow-lg backdrop-blur-lg bg-opacity-95">
          
          {/* Logo Section */}
          <div className="navbar-start w-1/3">
            <Link 
              href="/" 
              className="btn bg-transparent hover:bg-transparent border-none hover:border-none shadow-none hover:shadow-none text-xl text-primary font-extrabold hover:scale-105 transition-transform duration-200 whitespace-nowrap"
            >
              <Image 
                src='/logo.webp' 
                height='32' 
                width='32' 
                className='m-2' 
                alt="Astro Gnosis Logo"
              />
              AstroGnosis
            </Link>
          </div>

          {/* Centered Menu Items */}
          <div className="navbar-center w-1/3 flex justify-center">
            <ul className="menu menu-horizontal text-base-100 px-1 flex-nowrap">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path}
                    className={`rounded-full text-primary hover:text-secondary transition-all duration-200 flex items-center gap-2 mx-2 whitespace-nowrap px-2 ${
                      pathname === item.path ? 'text-primary font-bold' : ''
                    }`}
                  >
                    {item.icon}
                    <span className="hidden xl:inline">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="navbar-end w-1/3 gap-4">
            <Link 
              href="/reports" 
              className="btn btn-primary text-white hover:btn-secondary hover:text-base-100 rounded-full m-2 font-bold transition-all duration-200 shadow-lg whitespace-nowrap"
            >
              <SparklesIcon className="h-4 w-4" />
              Reports
            </Link>
          </div>
        </div>
      </div>

      {/* Drawer Side - autoclosed with onClick handlers */}
      <div className="drawer-side z-[999]">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-100 text-primary relative z-[1000]">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                href={item.path} 
                onClick={closeDrawer} // Add onClick here
                className={`hover:text-primary transition-colors duration-200 flex items-center gap-2 ${
                  pathname === item.path ? 'text-primary font-bold' : ''
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
          <div className="divider divider-primary/50"></div>
          <li>
            <Link 
              href="/reports" 
              onClick={closeDrawer} // Add onClick here
              className="btn btn-primary text-white hover:btn-secondary hover:text-base-100"
            >
              <SparklesIcon className="h-4 w-4" />
              Reports
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
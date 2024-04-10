import React, { useState, useEffect, useRef } from 'react';
import { HiSearch, HiBell, HiCog } from 'react-icons/hi';

const TopNavbar = () => {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const servicesMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target)) {
        setShowServicesMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center py-3 px-8   text-white"
         style={{
           background: 'rgba(255, 255, 255, 0.25)',
           boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
           backdropFilter: 'blur(4px)',
           WebkitBackdropFilter: 'blur(4px)',
           borderRadius: '50px',
           border: '1px solid rgba(255, 255, 255, 0.18)'
         }}
        
    >
      {/* Left side */}
      <div className="flex items-center">
        {/* Search box */}
        <div className="relative">
          <input
            type="text"
            className="bg-gray-300 text-black rounded-full px-3 py-2 pr-10 focus:outline-none focus:ring focus:border-indigo-300"
            placeholder="Search..."
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <HiSearch className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-6">
        {/* Notification icon with status symbol */}
        <div className="relative">
          <HiBell className="h-6 w-6 text-gray-600" />
          {/* Status indicator */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-500" />
        </div>

        {/* Setting icon */}
        <HiCog className="h-6 w-6 text-gray-600" />

        {/* Service text with dropdown menu */}
        <div className="relative" ref={servicesMenuRef}>
          <button
            className="flex items-center space-x-1 focus:outline-none"
            onClick={() => setShowServicesMenu(!showServicesMenu)}
          >
            <span className='text-black'>Services</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              color='gray'
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* Dropdown menu */}
          {showServicesMenu && (
            <div className="absolute top-full left-0 mt-1 bg-black/40 backdrop-blur-sm border border-white/10 p-2  text-white rounded-md shadow-lg">
              <ul className="py-1">
                <li className="px-4 py-2  hover:bg-gray-400 hover:rounded-xl">Service 1</li>
                <li className="px-4 py-2 hover:bg-gray-400 hover:rounded-xl">Service 2</li>
                <li className="px-4 py-2 hover:bg-gray-400 hover:rounded-xl">Service 3</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;

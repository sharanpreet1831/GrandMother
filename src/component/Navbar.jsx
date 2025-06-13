import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logoImage.jpeg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md border-b border-[#b88953] sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logoImage}
            alt="Logo"
            className="w-[52px] h-[52px] object-cover rounded-lg border-2 border-[#b88953] shadow"
          />
          <span className="text-lg font-serif font-bold text-[#7c4a03] select-none tracking-wide uppercase">
           Guru Food Product
          </span>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#7c4a03] focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {[
            { label: 'Home', path: '/' },
            { label: 'Products & Benefits', path: '/ProductAndBenfits' },
            // { label: 'Cryogenic Spices', path: '/CrypSpices' },
            { label: 'Health Benefits', path: '/healthandBenfits' },
            { label: 'About', path: '#' },
            { label: 'FAQ', path: '/FAQ' },
            { label: 'Blog', path: '/Blog' },
          ].map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className="text-sm font-normal font-serif uppercase text-[#7c4a03] px-2 py-1 rounded hover:bg-[#f8f4ee] hover:text-[#a15d0d] transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/ContactUs"
              className="text-sm font-normal font-serif uppercase text-white bg-[#7c4a03] px-4 py-1 rounded-full shadow hover:bg-[#a15d0d] transition-all duration-200"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center gap-6 px-6 py-12">
          <button onClick={closeMenu} className="absolute top-6 right-6 text-[#7c4a03]">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {[
            { label: 'Home', path: '/' },
            { label: 'Products & Benefits', path: '/ProductAndBenfits' },
            // { label: 'Cryogenic Spices', path: '/CrypSpices' },
            { label: 'Health Benefits', path: '/healthandBenfits' },
            { label: 'About', path: '#' },
            { label: 'FAQ', path: '/FAQ' },
            { label: 'Blog', path: '/Blog' },
            { label: 'Contact Us', path: '/ContactUs', special: true },
          ].map(({ label, path, special }) => (
            <Link
              key={label}
              to={path}
              onClick={closeMenu}
              className={`text-lg uppercase font-serif ${
                special
                  ? 'bg-[#7c4a03] text-white px-6 py-2 rounded-full shadow hover:bg-[#a15d0d]'
                  : 'text-[#7c4a03] hover:text-[#a15d0d]'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

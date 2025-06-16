import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../assets/logoImage.jpeg';
import greenlogo from '../assets/greenlogo.jpg'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Green theme colors
  const mainGreen = "#008000";
  const accentGreen = "#34a853";
  const lightGreen = "#e6ffe6";
  const deepGreen = "#014421";

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false)
  };

  const navigate = useNavigate();

  return (
    <nav
      className="shadow-md border-b sticky top-0 z-50"
      style={{
        background: `linear-gradient(90deg, #fff 80%, ${lightGreen} 100%)`,
        borderColor: accentGreen,
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={greenlogo}
            alt="Logo"
            className="w-[52px] h-[52px] object-cover rounded-lg border-0.1 shadow"
            style={{
              borderColor: mainGreen,
              boxShadow: `0 1px 10px ${mainGreen}33`,
            }}
          />
          <span
            className="text-lg font-serif font-bold select-none tracking-wide uppercase"
            style={{
              color: deepGreen,
              letterSpacing: "2px",
              textShadow: `0 1px 8px ${lightGreen}`,
            }}
          >
            Guru Food Product
          </span>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none" style={{ color: deepGreen }}>
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
            { label: 'Health Benefits', path: '/healthandBenfits' },
            { label: 'About', path: '#' },
            { label: 'FAQ', path: '/FAQ' },
            { label: 'Blog', path: '/Blog' },
          ].map(({ label, path }) => (
            <li key={label}>
              <button
                onClick={()=>{navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' });}}
                className="text-sm font-normal font-serif uppercase px-2 py-1 rounded transition-colors duration-200"
                style={{
                  color: deepGreen,
                  fontWeight: 600,
                }}
              >
                <span
                  className="hover:underline"
                  style={{
                    transition: "color 0.2s",
                  }}
                >
                  {label}
                </span>
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={()=>{navigate('/ContactUs');window.scrollTo({ top: 0, behavior: 'smooth' });}}
              className="text-sm font-normal font-serif uppercase px-4 py-1 rounded-full shadow transition-all duration-200"
              style={{
                color: "#fff",
                background: `linear-gradient(90deg, ${mainGreen}, ${accentGreen})`,
                boxShadow: `0 2px 10px ${mainGreen}33`,
                fontWeight: 700,
              }}
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div
          className="md:hidden fixed top-0 left-0 w-full h-screen z-40 flex flex-col items-center justify-center gap-6 px-6 py-12"
          style={{
            background: `linear-gradient(135deg, #fff 60%, ${lightGreen} 100%)`,
          }}
        >
          <button onClick={closeMenu} className="absolute top-6 right-6" style={{ color: mainGreen }}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {[
            { label: 'Home', path: '/' },
            { label: 'Products & Benefits', path: '/ProductAndBenfits' },
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
              className={`text-lg uppercase font-serif font-bold transition-all ${
                special
                  ? ''
                  : ''
              }`}
              style={{
                color: special ? "#fff" : mainGreen,
                background: special
                  ? `linear-gradient(90deg, ${mainGreen}, ${accentGreen})`
                  : "transparent",
                padding: special ? "10px 36px" : "0px",
                borderRadius: special ? "9999px" : "0px",
                boxShadow: special ? `0 2px 10px ${mainGreen}33` : "none",
                marginTop: special ? "1rem" : 0,
                marginBottom: special ? "1rem" : 0,
              }}
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
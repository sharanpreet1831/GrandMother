import React from 'react';

const HeroSection = ({ bgImage, title, subtitle }) => (
  <div
          className="relative h-[370px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div 
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-[700px] text-center text-white px-8 sm:px-12 py-10 rounded-2xl shadow-lg backdrop-blur-sm">
            <h1 className="text-[2.75rem] font-extrabold mb-4 leading-tight drop-shadow-md">
              {title}
            </h1>
            <p className="text-lg sm:text-xl font-medium drop-shadow-md">
              {subtitle}
            </p>
          </div>
        </div>
);

export default HeroSection;

import React from 'react';
import crypHeroImg from '../../assets/P&B1.jpg'; // Replace with your image path
import CrypSpicesInfo from './CrypSpicesInfo';
import CryoGrindingComparison from './CryoGrindingComparison';
import HeroSection from '../ProductAndBenfits/HeroSection';

function CrypSpices() {
  return (
    <div>
      
      <HeroSection
        bgImage={crypHeroImg}
        title="What Are Cryogenic Spices?"
        subtitle="Experience the next level of spice freshness and flavor with our cryogenically processed spices!!"
      />
      <CrypSpicesInfo />
      <CryoGrindingComparison/>
    </div>
  );
}

export default CrypSpices;
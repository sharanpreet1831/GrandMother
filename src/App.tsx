import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar.js';
import HeroSection from './component/HeroSection.js';
import BenefitsSection from './component/BenifitsSection.js'
import CookingSection from './component/CookingSection.js';
import ProductSection from './component/ProductSection.js';
import SubscriptionSection from './component/SubscriptionSection.js';
import ProductAndBenfits from './component/ProductAndBenfits.js';
import CrypSpices from './component/Cryo Spices/CrypSpices.js';
import HealthBenfits from './component/Health/HealthBenfits.js';
import FAQ from './component/FAQ/FAQ.js';
import Blog from './component/Blog/Blog.js';
import ContactUs from './component/Contactus/ContactUs.js';
import BlogDetail from './component/Blog/BlogDetail.js';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <CookingSection/>
      <ProductSection/>
     
    </div>
  );
}




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductAndBenfits" element={<ProductAndBenfits />} />
        <Route path="/CrypSpices" element={<CrypSpices />} />
        <Route path="/healthandBenfits" element={<HealthBenfits/>} />
        <Route path="/FAQ" element={<FAQ/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />



         <Route path="/blog/:slug" element={<BlogDetail />} />
       
      </Routes>
       <SubscriptionSection/>
    </Router>
  );
}

export default App;
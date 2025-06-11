import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar.jsx';
import HeroSection from './component/HeroSection.jsx';
import BenefitsSection from './component/BenifitsSection.jsx'
import CookingSection from './component/CookingSection.jsx';
import ProductSection from './component/ProductSection.jsx';
import SubscriptionSection from './component/SubscriptionSection.jsx';
import ProductAndBenfits from './component/ProductAndBenfits.jsx';
import CrypSpices from './component/Cryo Spices/CrypSpices.jsx';
import HealthBenfits from './component/Health/HealthBenfits.jsx';
import FAQ from './component/FAQ/FAQ.jsx';
import Blog from './component/Blog/Blog.jsx';
import ContactUs from './component/Contactus/ContactUs.jsx';
import BlogDetail from './component/Blog/BlogDetail.jsx';

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
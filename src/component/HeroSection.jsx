 
import HeroText from './HeroText';
import ProductGallery from './ProductGallery';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <HeroText />
        <ProductGallery />
      </div>
    </section>
  );
}

export default HeroSection;
 
import faqHeroImg from '../../assets/P&B1.jpg';
import FAQAccordion from './FAQAccordion';
import HeroSection from '../ProductAndBenfits/HeroSection';

function FAQ() {
  return (
    <div>

      <HeroSection
        bgImage={faqHeroImg}
        title={'Frequently Asked Questions'} subtitle={'Find answers to the most common questions about our products, process, and company.'} />

      {/* Add your FAQ content below */}
      <FAQAccordion />
    </div>
  );
}

export default FAQ;
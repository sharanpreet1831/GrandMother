
import contactHeroImg from '../../assets/P&B1.jpg';
import HeroSection from '../ProductAndBenfits/HeroSection';

function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection bgImage={contactHeroImg} title={'Contact Us'} subtitle="We're here to help! Reach out for questions, feedback, or partnership opportunities." />

      {/* CONTACT FORM & DETAILS */}
      <section className="max-w-[920px] mx-auto mt-16 mb-16 bg-white rounded-3xl shadow-xl px-10 py-12 flex gap-12 flex-wrap md:flex-col md:px-6 md:py-10 md:gap-8">

        {/* Contact Info */}
        <div className="flex-1 min-w-[280px] md:max-w-full">
          <h2 className="text-[#23d443] text-[1.5rem] font-semibold mb-5">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We'd love to hear from you! Whether you have a question about our products, need support, or want to collaborate, our team is ready to answer all your questions.
          </p>
          <ul className="space-y-4 text-gray-800 text-[1.1rem] font-medium">
            <li>
              <strong>Email: </strong>
              <a
                href="mailto:gurufoodproductsrajpura@gmail.com"
                className="text-[#26d423] hover:underline "
              >gurufoodproductsrajpura@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone: </strong>
              <a href="tel:+91 8054066066" className="text-[#38d423] hover:underline">
                +91 8054066066
              </a>
            </li>
            <li>
              <strong>Address: </strong> Hari Nagar, Old Rajpura , Dist patiala (140401)
            </li>
          </ul>
        </div>


      </section>
    </div>
  );
}

export default ContactUs;

import React from 'react';
import contactHeroImg from '../../assets/P&B1.jpg'; 
import HeroSection from '../ProductAndBenfits/HeroSection';

function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection bgImage={contactHeroImg} title={'Contact Us'} subtitle="We're here to help! Reach out for questions, feedback, or partnership opportunities."/>

      {/* CONTACT FORM & DETAILS */}
      <section className="max-w-[920px] mx-auto mt-16 mb-16 bg-white rounded-3xl shadow-xl px-10 py-12 flex gap-12 flex-wrap md:flex-col md:px-6 md:py-10 md:gap-8">
        
        {/* Contact Info */}
        <div className="flex-1 min-w-[280px] md:max-w-full">
          <h2 className="text-[#d44c23] text-[1.5rem] font-semibold mb-5">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We'd love to hear from you! Whether you have a question about our products, need support, or want to collaborate, our team is ready to answer all your questions.
          </p>
          <ul className="space-y-4 text-gray-800 text-[1.1rem] font-medium">
            <li>
              <strong>Email: </strong>
              <a href="mailto:info@gurufoods.com" className="text-[#d44c23] hover:underline">
                info@gurufoods.com
              </a>
            </li>
            <li>
              <strong>Phone: </strong>
              <a href="tel:+18001234567" className="text-[#d44c23] hover:underline">
                +1 (800) 123-4567
              </a>
            </li>
            <li>
              <strong>Address: </strong>123 Guru Foods Lane, Spice City, CA 90000
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form
          className="flex-1 min-w-[320px] flex flex-col gap-6 md:max-w-full"
          onSubmit={e => e.preventDefault()}
          aria-label="Contact form"
        >
          <h2 className="text-[#d44c23] text-[1.4rem] font-semibold mb-4">
            Send Us a Message
          </h2>
          <label className="flex flex-col gap-1 font-medium text-gray-900">
            Name
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="mt-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d44c23] focus:border-transparent transition"
              aria-required="true"
            />
          </label>
          <label className="flex flex-col gap-1 font-medium text-gray-900">
            Email
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="mt-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d44c23] focus:border-transparent transition"
              aria-required="true"
            />
          </label>
          <label className="flex flex-col gap-1 font-medium text-gray-900">
            Message
            <textarea
              name="message"
              required
              placeholder="Type your message here..."
              rows={5}
              className="mt-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d44c23] focus:border-transparent transition resize-none"
              aria-required="true"
            />
          </label>
          <button
            type="submit"
            className="self-start bg-[#d44c23] text-white py-3 px-10 rounded-lg text-[1.1rem] font-semibold tracking-wide shadow-md hover:bg-[#b9461b] hover:shadow-lg transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#d44c23]/70"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default ContactUs;

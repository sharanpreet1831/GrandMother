import React from 'react';

function CookingSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
        {/* Image Section */}
        <div className="flex-1 md:max-w-[50%]">
          <img
            src="https://www.gurusauces.com/wp-content/uploads/2023/07/2829235_edit.jpg"
            alt="Delicious Indian Cooking"
            className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
        
        {/* Text Content */}
        <div className="flex-1 md:max-w-[50%] text-center md:text-left animate-slide-in-right">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
            Elevate Your Cooking with World-Class Restaurant Quality in Your Kitchen
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We bring the same taste and quality you expect from a fine dining experience into your home. With our expertly crafted and healthy Indian sauces, you can cook a delicious meal in no time.
          </p>
          <button className="bg-red-600 text-white py-3 px-6 rounded-lg text-base uppercase font-semibold transition-colors duration-300 hover:bg-red-700">
            Why Guru Indian Sauces?
          </button>
        </div>
        
      </div>
    </section>
  );
}

export default CookingSection;

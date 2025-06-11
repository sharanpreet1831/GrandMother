import React from 'react';

function HeroText() {
  return (
    <div className="mb-6 px-8 py-12 md:py-16 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl md:text-4xl lg:text-4.5xl font-extrabold text-gray-800 mb-4 leading-tight">
        Enjoy World-Class Restaurant-Quality Indian Curry Sauces That Are&nbsp;
        <span className="text-orange-500">Low-Fat</span>,&nbsp;
        <span className="text-yellow-600">Gluten-Free</span>,&nbsp;
        <span className="text-orange-600">Dairy-Free</span>, and&nbsp;
        <span className="text-yellow-700">Allergen Safe</span>.
      </h1>
      <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
        All our sauces are made with high-quality ingredients and a special <span className="font-semibold text-orange-700">cryogenic process</span> for grinding spices to provide added flavour.
      </p>
    </div>
  );
}

export default HeroText;

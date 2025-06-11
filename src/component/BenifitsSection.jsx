function BenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 px-6">
        
        {/* Text Content */}
        <div className="flex-1 md:max-w-[50%] text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 leading-tight md:text-5xl">
            Healthy and Low-Fat with Allergen-Free Ingredients
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our sauces are made with natural, high-quality ingredients that are low in fat, gluten-free, and dairy-free. With our high-quality Indian sauces, you’re in control of your health and can eat as much or as little salt as you like. We don’t use any additives, preservatives, or MSG.
          </p>
          <button className="bg-red-600 text-white py-3 px-6 rounded-lg text-base uppercase font-semibold transition-colors duration-300 hover:bg-red-700">
            Learn More
          </button>
        </div>
        
        <div className="flex-1 flex justify-center md:max-w-[50%]">
          <img
            src="https://www.gurusauces.com/wp-content/uploads/2023/07/2829581_edit.png"
            alt="Healthy Sauces"
            className="w-full max-h-[360px] object-contain rounded-2xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;

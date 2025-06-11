import React from 'react';

const benefits = [
  {
    number: 1,
    title: "NUTRITIOUS SAUCES WITH LOW FAT AND LOW CHOLESTEROL",
    text: "Our sauces are perfect for health-conscious individuals, vegans, and those looking for nutritional value, as they are low in fat and cholesterol and rich in lycopene.",
  },
  {
    number: 2,
    title: "GLUTEN-FREE AND DAIRY-FREE SAUCES",
    text: "People with gluten and dairy allergies can now enjoy our delicious sauces, as they are entirely free from these allergens.",
  },
  {
    number: 3,
    title: "PRECISELY CONTROLLED SALT AND CALORIES IN EVERY SERVING",
    text: "You can enjoy great taste without worrying about excess salt or calories—perfect for a healthy lifestyle.",
  },
  {
    number: 4,
    title: "EXPERTLY CRAFTED SAUCES WITH UNIQUE TECHNIQUES",
    text: "Our sauces are made using unique methods to preserve nutrients and maximize flavor.",
  },
];

const BenefitsSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 uppercase leading-tight">
        CONTACT US NOW TO EXPERIENCE THE INCREDIBLE BENEFITS OF OUR CLEAN, HEALTHY, AND DELICIOUS INDIAN SAUCES!
      </h2>
      <p className="max-w-3xl mx-auto text-gray-700 mb-12 text-lg md:text-xl leading-relaxed">
        Whether you’re looking for allergen-safe options, low-fat and low-sodium choices,
        or simply the rich, complex flavours of authentic Indian cuisine, we’ve got you covered.
        Get in touch with us today to learn more!
      </p>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ number, title, text }) => (
          <div key={number} className="flex flex-col items-start bg-orange-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-lg mb-4">
              {number}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;

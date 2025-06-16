const benefits = [
  {
    number: 1,
    title: "ENHANCED FLAVOR",
    text: "Guru Food Products pickles add a burst of tangy and spicy flavors to your dishes, elevating the taste of any meal and making it more enjoyable.",
  },
  {
    number: 2,
    title: "NUTRITIONAL BOOST",
    text: "Our pickles are made from fresh, natural ingredients, providing essential vitamins and minerals that can contribute to a balanced diet.",
  },
  {
    number: 3,
    title: "DIGESTIVE HEALTH",
    text: "Fermented pickles are rich in probiotics, which can promote gut health and aid digestion, helping you feel your best",
  },
  {
    number: 4,
    title: "CONVENIENT SNACKING",
    text: "Guru Food Products pickles make for a quick and tasty snack option, perfect for adding zest to your lunch or serving as a delightful appetizer.",
  },
];

const mainGreen = "#008000";
const accentGreen = "#34a853";
const lightGreen = "#e6ffe6";

const BenefitsSection = () => (
  <section
    className="py-16"
    style={{
      // background: `linear-gradient(135deg, ${lightGreen} 0%, #fff 100%)`,
    }}
  >
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2
        className="text-3xl md:text-4xl font-extrabold mb-6 uppercase leading-tight"
        style={{
          color: mainGreen,
          textShadow: `0 2px 18px ${lightGreen}`,
          letterSpacing: "0.5px",
        }}
      >
        CONTACT US NOW TO EXPERIENCE THE INCREDIBLE BENEFITS OF OUR CLEAN, HEALTHY, AND DELICIOUS INDIAN SAUCES AND PICKLES
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ number, title, text }) => (
          <div
            key={number}
            className="flex flex-col items-start rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            style={{
              background: `linear-gradient(120deg, #fff 60%, ${lightGreen} 100%)`,
              border: `2px solid ${accentGreen}`,
              boxShadow: `0 4px 16px ${mainGreen}22`,
            }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg mb-4 shadow"
              style={{
                background: `linear-gradient(90deg, ${mainGreen} 70%, ${accentGreen} 100%)`,
                color: "#fff",
                boxShadow: `0 2px 8px ${mainGreen}33`,
              }}
            >
              {number}
            </div>
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: mainGreen }}
            >
              {title}
            </h3>
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: accentGreen }}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
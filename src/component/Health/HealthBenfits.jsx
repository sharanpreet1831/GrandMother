import healthHeroImg from '../../assets/P&B1.jpg';
import HeroSection from '../ProductAndBenfits/HeroSection';

function HealthBenfits() {
  // Theme colors
  const mainGreen = "#008000";
  const accentGreen = "#34a853";

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        bgImage={healthHeroImg}
        title="Health Benefits of Our Pickles & Sauces"
        subtitle="Explore the natural goodness and unique health advantages of our carefully crafted Indian products!"
      />

      {/* Health Benefits Content */}
      <main className="flex flex-col items-center my-12 px-4 md:px-6 lg:px-8">
        <article
          className="max-w-screen rounded-2xl p-10 md:p-8 leading-relaxed text-[1.05rem] md:text-[1rem] shadow-lg"
          style={{
            color: mainGreen,
          }}
        >
          <h2
            className="text-2xl font-bold mb-6"
            style={{ color: mainGreen }}
          >
            Health Benefits of Guru Food Products
          </h2>

          {/* Pickles */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold mb-4" style={{ color: accentGreen }}>1. Pickles</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong style={{ color: mainGreen }}>Probiotics:</strong> <span style={{ color: "#232323" }}>Naturally fermented pickles are rich in probiotics, which promote gut health and aid digestion.</span></li>
              <li><strong style={{ color: mainGreen }}>Nutrient-Rich:</strong> <span style={{ color: "#232323" }}>Pickles made from fresh vegetables and fruits retain essential vitamins and minerals, contributing to a balanced diet.</span></li>
              <li><strong style={{ color: mainGreen }}>Antioxidants:</strong> <span style={{ color: "#232323" }}>Many pickles contain spices like turmeric and mustard seeds, known for their antioxidant properties.</span></li>
              <li><strong style={{ color: mainGreen }}>Low-Calorie Snack:</strong> <span style={{ color: "#232323" }}>A flavorful, low-calorie option to enhance meals without adding excess calories.</span></li>
            </ul>
          </section>

          {/* Sauces */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold mb-4" style={{ color: accentGreen }}>2. Sauces</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong style={{ color: mainGreen }}>Flavor Enhancement:</strong> <span style={{ color: "#232323" }}>Enhances the taste of healthy meals, encouraging the intake of vegetables and whole foods.</span></li>
              <li><strong style={{ color: mainGreen }}>Nutrient Absorption:</strong> <span style={{ color: "#232323" }}>Sauces with healthy fats improve absorption of fat-soluble vitamins (A, D, E, K).</span></li>
              <li><strong style={{ color: mainGreen }}>Customizable Nutrition:</strong> <span style={{ color: "#232323" }}>Can be crafted with wholesome ingredients and minimal additives for health-conscious consumers.</span></li>
            </ul>
          </section>

          {/* Sharbats */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold mb-4" style={{ color: accentGreen }}>3. Sharbats</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong style={{ color: mainGreen }}>Hydration:</strong> <span style={{ color: "#232323" }}>A refreshing way to stay hydrated, especially in hot weather.</span></li>
              <li><strong style={{ color: mainGreen }}>Vitamins and Minerals:</strong> <span style={{ color: "#232323" }}>Real fruit content provides essential nutrients, like vitamin C, for overall wellness.</span></li>
              <li><strong style={{ color: mainGreen }}>Natural Sweetness:</strong> <span style={{ color: "#232323" }}>A healthier alternative to sugary drinks, with reduced intake of refined sugars.</span></li>
              <li><strong style={{ color: mainGreen }}>Digestive Benefits:</strong> <span style={{ color: "#232323" }}>Certain varieties contain herbs and spices that support digestive health.</span></li>
            </ul>
          </section>

          {/* Murabbas */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold mb-4" style={{ color: accentGreen }}>4. Murabbas</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong style={{ color: mainGreen }}>Natural Energy Boost:</strong> <span style={{ color: "#232323" }}>Made from fruits, murabbas provide quick, natural energy.</span></li>
              <li><strong style={{ color: mainGreen }}>Rich in Fiber:</strong> <span style={{ color: "#232323" }}>Promotes digestion and helps with maintaining a healthy weight.</span></li>
              <li><strong style={{ color: mainGreen }}>Antioxidant Properties:</strong> <span style={{ color: "#232323" }}>Helps reduce inflammation and supports overall health.</span></li>
              <li><strong style={{ color: mainGreen }}>Traditional Remedies:</strong> <span style={{ color: "#232323" }}>Often prepared with herbs and spices that offer wellness benefits rooted in traditional practices.</span></li>
            </ul>
          </section>

          {/* Overall */}
          <section>
            <h3 className="text-xl font-semibold mb-4" style={{ color: accentGreen }}>Overall Health Benefits</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong style={{ color: mainGreen }}>Balanced Diet:</strong> <span style={{ color: "#232323" }}>Incorporates various nutrients and flavors into everyday meals.</span></li>
              <li><strong style={{ color: mainGreen }}>Cultural Connection:</strong> <span style={{ color: "#232323" }}>Strengthens mental well-being by connecting with tradition and family heritage.</span></li>
              <li><strong style={{ color: mainGreen }}>Convenience:</strong> <span style={{ color: "#232323" }}>Offers quick, nutritious options to enhance daily meals without compromising on health.</span></li>
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
}

export default HealthBenfits;
import { useNavigate } from "react-router-dom";

function CookingSection() {
  // Theme colors
  const mainGreen = "#008000";
  const accentGreen = "#34a853";
  const lightGreen = "#e6ffe6";
  const navigate = useNavigate()
  return (
    <section
      className="py-16"
      style={{
        // background: `linear-gradient(135deg, ${lightGreen} 0%, #fff 100%)`,
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
        {/* Image Section */}
        <div className="flex-1 md:max-w-[50%]">
          <img
            src="https://www.gurusauces.com/wp-content/uploads/2023/07/2829235_edit.jpg"
            alt="Delicious Indian Cooking"
            className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
            style={{
              border: `3px solid ${mainGreen}`,
              boxShadow: `0 6px 32px 0 ${mainGreen}33`,
            }}
          />
        </div>
        
        {/* Text Content */}
        <div className="flex-1 md:max-w-[50%] text-center md:text-left animate-slide-in-right">
          <h2
            className="text-4xl md:text-3xl font-extrabold mb-6 leading-tight"
            style={{
              color: mainGreen,
              textShadow: `0 2px 18px ${lightGreen}`,
              letterSpacing: "1px",
            }}
          >
            ENRICH YOUR MEALS WITH GURU FOOD PRODUCTS PICKLES – AUTHENTIC FLAVOR THAT TRANSFORMS YOUR KITCHEN
          </h2>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{
              color: accentGreen,
              fontWeight: 500,
            }}
          >
            Bring the vibrant and traditional taste of expertly crafted Indian pickles into your home with Guru Food Products. Made with the finest ingredients and authentic recipes, our pickles deliver rich, bold flavors that add a restaurant-quality touch to every meal—making your dining experience truly exceptional and effortless.
          </p>
          <button
          onClick={()=> {navigate('/healthandBenfits'); window.scrollTo({ top: 0, behavior: 'smooth' });}}
            className="shine-btn relative overflow-hidden rounded-full px-6 py-3 font-serif text-sm font-normal uppercase text-white bg-gradient-to-r from-green-600 to-green-400 shadow-[0_2px_10px_rgba(0,128,0,0.2)] transition-all duration-200"
            style={{
              background: `linear-gradient(90deg, ${mainGreen} 60%, ${accentGreen} 100%)`,
              color: "#fff",
              letterSpacing: "1px",
              boxShadow: `0 2px 10px ${mainGreen}33`,
            }}
          >
            Why Guru Food Product ?
          </button>
        </div>
        
      </div>
    </section>
  );
}

export default CookingSection;
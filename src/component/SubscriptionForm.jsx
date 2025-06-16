import { useNavigate } from 'react-router-dom';

function SubscriptionForm() {
  // Theme colors
  const mainGreen = "#008000";
  const accentGreen = "#34a853";
  const lightGreen = "#e6ffe6";

  // FIX: get the navigate function from react-router-dom
  const navigate = useNavigate();

  return (
    <div
      className="flex-1 w-full text-white p-8 md:p-6 rounded-2xl shadow-lg relative overflow-hidden animate-fade-in"
      style={{
        background: `linear-gradient(135deg, #252525 70%, #222 100%)`,
      }}
    >
      {/* Green overlay for depth */}
      <div
        className="absolute inset-0 z-0 rounded-2xl"
        style={{
          background: `linear-gradient(90deg, #00000099 60%, #00000033 100%)`,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 space-y-6">
        <h2
          className="text-3xl md:text-2xl font-extrabold uppercase leading-snug"
          style={{
            color: mainGreen,
            textShadow: `0 2px 12px #1b3f2b`,
            letterSpacing: "1px",
          }}
        >
          Ready to Find the Best Indian Pickle and Sauces?
        </h2>

        <p className="text-base" style={{ color: lightGreen }}>
          <strong style={{ color: "white" }}> Finding the best indian pickles</strong>.
        </p>

        <h3
          className="text-xl font-semibold"
          style={{ color: accentGreen, letterSpacing: "0.5px" }}
        >
          Get Exclusive Tips & Recipes!
        </h3>

        <button
          onClick={() => {navigate('/Blog');window.scrollTo({ top: 0, behavior: 'smooth' });}}
          className="shine-btn relative overflow-hidden rounded-full px-6 py-2 font-serif text-sm font-normal uppercase text-white bg-gradient-to-r from-green-600 to-green-400 shadow-[0_2px_10px_rgba(0,128,0,0.2)] transition-all duration-200"
          style={{
            background: `linear-gradient(90deg, ${mainGreen} 70%, ${accentGreen} 100%)`,
            boxShadow: `0 2px 12px ${mainGreen}33`,
            letterSpacing: "1px"
          }}
        >
          Get Exclusive Tips & Recipes!
        </button>
      </div>
    </div>
  );
}

export default SubscriptionForm;
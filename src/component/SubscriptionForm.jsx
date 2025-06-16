function SubscriptionForm() {
  // Theme colors
  const mainGreen = "#008000";
  const accentGreen = "#34a853";
  const lightGreen = "#e6ffe6";

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
          Ready to Find the Best Indian Curry Sauces?
        </h2>

        <p className="text-base" style={{ color: lightGreen }}>
          Download our exclusive guide:
          <strong style={{ color: accentGreen }}> "Ten Tips to Finding the Best Indian Curry Sauces"</strong>.
          Discover how to choose quality, flavor-packed sauces for your next dish.
        </p>

        <h3
          className="text-xl font-semibold"
          style={{ color: accentGreen, letterSpacing: "0.5px" }}
        >
          Get Exclusive Tips, Discounts & Recipes!
        </h3>

        <p className="text-sm" style={{ color: mainGreen }}>
          Sign up for our newsletter to receive healthy Indian sauce recipes, special promos,
          and clean eating tips straight to your inbox.
        </p>
      </div>
    </div>
  );
}

export default SubscriptionForm;
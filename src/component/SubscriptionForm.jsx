function SubscriptionForm() {
  return (
    <div className="flex-1 w-full bg-[#2d2d2d] text-white p-8 md:p-6 rounded-2xl shadow-lg relative overflow-hidden animate-fade-in">
      {/* Dark overlay for depth */}
      <div className="absolute inset-0 bg-black/30 z-0 rounded-2xl" />

      {/* Main content */}
      <div className="relative z-10 space-y-6">
        <h2 className="text-3xl md:text-2xl font-extrabold uppercase leading-snug">
          Ready to Find the Best Indian Curry Sauces?
        </h2>

        <p className="text-base text-gray-200">
          Download our exclusive guide:
          <strong className="text-orange-300"> "Ten Tips to Finding the Best Indian Curry Sauces"</strong>.
          Discover how to choose quality, flavor-packed sauces for your next dish.
        </p>

        <h3 className="text-xl font-semibold text-orange-400">
          Get Exclusive Tips, Discounts & Recipes!
        </h3>

        <p className="text-sm text-gray-300">
          Sign up for our newsletter to receive healthy Indian sauce recipes, special promos,
          and clean eating tips straight to your inbox.
        </p>

        {/* Subscription Form */}
        <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()} aria-label="Subscription Form">
          <input
            type="text"
            placeholder="Your Name *"
            required
            className="p-3 rounded-md bg-white text-gray-900 border border-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-400 outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number *"
            required
            className="p-3 rounded-md bg-white text-gray-900 border border-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-400 outline-none"
          />
          <input
            type="email"
            placeholder="Email *"
            required
            className="p-3 rounded-md bg-white text-gray-900 border border-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-400 outline-none"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition-colors duration-300 shadow-md uppercase"
          >
            Submit
          </button>
        </form>

        {/* Guide Preview */}
       
      </div>
    </div>
  );
}

export default SubscriptionForm;

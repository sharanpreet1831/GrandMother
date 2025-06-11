 
import cryoSpicesImg from '../../assets/Cry1.jpg'; // Your image import

function CrypSpicesInfo() {
  return (
    <section className="max-w-[1200px] mx-auto py-16 px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide uppercase mb-6 text-gray-900">
          Are You Ready To Add Some Delicious, Low-Fat, Gluten-Free, and Dairy-Free Indian Sauces To Your Meals?
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our sauces are made using an advanced cryogenic process, which preserves the flavour and nutritional value of the spices.
          Contact us today to experience the full range of our great-tasting Indian sauces.
          Don’t wait any longer, elevate your cooking game now!<br />
          Get in touch with us today to learn more!
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        {/* Images */}
        <div className="flex flex-col gap-8 w-full max-w-md mx-auto lg:mx-0">
          <img
            src={cryoSpicesImg}
            alt="Cryogenic Spices"
            className="rounded-2xl shadow-lg object-cover w-full h-72"
          />
          <img
            src={cryoSpicesImg}
            alt="Cryogenic Spices"
            className="rounded-2xl shadow-lg object-cover w-full h-72"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          <h3 className="text-2xl md:text-3xl font-bold tracking-wide uppercase mb-6 text-gray-900">
            What Are Cryogenic Spices?
          </h3>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Cryogenic spices are powdered herbs and spices that are ground at sub-zero temperatures using liquid nitrogen.
            This innovative technique preserves spices’ natural flavour and aroma without damaging their chemical composition,
            resulting in a more intense and flavorful culinary experience.
          </p>
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
            <li>
              <strong>Fresher and More Flavorful:</strong> Cryogenic spices are ground at sub-zero temperatures, preserving their natural flavours and aromas.
              This results in a more intense and fresher taste, enhancing the overall flavour of your dish.
            </li>
            <li>
              <strong>Retain Essential Oils:</strong> Cryogenic grinding of spices maintains the essential oils, usually lost in standard grinding processes due to heat.
              This ensures that the spices remain full of flavour and aroma.
            </li>
            <li>
              <strong>No Added Chemicals:</strong> The cryogenic grinding process uses only liquid nitrogen, ensuring pure and natural spices for your meals.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CrypSpicesInfo;

import { useState } from 'react';
import ProductItem from './ProductItem';
import no1 from '../assets/no1.jpg';
import no2 from '../assets/no2.jpg';
import no3 from '../assets/no3.jpg';
import { Link } from 'react-router-dom';

const productDetails = {
  'CHILI PICKLE': [
    "RICH & CREAMY: A luxurious sauce with authentic Indian spices.",
    "PROTEIN-PACKED: Great source of protein when paired with chicken.",
    "READY TO USE: Quick meal solution with restaurant-style taste.",
  ],
  'LEMON PICKLE': [
    "ZESTY FLAVOR ENHANCER : Adds a bright, tangy zest that livens up any meal with authentic Indian taste.",
    "IMMUNE SUPPORT:Rich in vitamin C from sun-ripened lemons, supporting immune health naturally.",
    "DIGESTIVE AID:Contains digestive spices that help improve appetite and promote healthy digestion",
    "VERSATILE USAGE:Perfect accompaniment to rice, parathas, or snacks, enhancing flavors effortlessly.",
  ],
  'ROSE SHARBAT': [
    "HYDRATION: Rose Sharbat is a refreshing drink that helps keep you hydrated, especially during hot weather.",
    "ANTIOXIDANT PROPERTIES: Made from natural rose petals, this sharbat is rich in antioxidants, which can help combat oxidative stress and promote overall health.",
    "DIGESTIVE AID: Rose Sharbat is known to aid digestion and can help soothe an upset stomach, making it a great choice after meals.",
    "MOOD ENHANCER: The pleasant aroma and taste of rose can have a calming effect, helping to reduce stress and improve mood."
  ],
};

function ProductGallery() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { name: 'CHILI PICKLE', image: no1 },
    { name: 'LEMON PICKLE', image: no2 },
    { name: 'ROSE SHARBAT', image: no3 },
  ];

  // Theme color
  const mainGreen = "#008000";
  const accentGreen = "#34a853";
  const lightGreen = "#e6ffe6";
  const deepGreen = "#014421";

  return (
    <div
      className="max-w-7xl mx-auto px-6 py-12"
      style={{
        minHeight: '100vh'
      }}
    >
      <div className="flex justify-between items-center mb-8">
        <h2
          className="text-3xl font-extrabold"
          style={{
            color: mainGreen,
            textShadow: `0 2px 12px #bfffc6`,
            letterSpacing: "0.5px"
          }}
        >
          Our <span style={{
            color: accentGreen,
            textShadow: `0 1px 8px #e6ffe6`,
            fontWeight: 900
          }}>Delicious</span> Products
        </h2>
        <Link
          to={'/ProductAndBenfits'}
          className="font-normal md:font-semibold w-[40%] md:w-auto hover:underline px-2 py-2 rounded-full transition"
          style={{
            color: "#fff",
            background: `linear-gradient(90deg, ${mainGreen} 60%, ${accentGreen} 100%)`,
            boxShadow: '0 2px 12px #bfffc6',
            border: `1px solid ${mainGreen}`,
          }}
        >
          See More
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
            style={{
              boxShadow: '0 6px 24px #bfffc6',
            }}
            onClick={() => setSelectedProduct(product.name)}
          >
            {/* Product name in theme color */}
            <div className="w-full text-center py-2" style={{ background: "#fff" }}>
              <span
                className="text-xl font-bold uppercase"
                style={{
                  color: mainGreen,
                  letterSpacing: "1px"
                }}
              >
                {product.name}
              </span>
            </div>
            <ProductItem name={product.name} image={product.image} />
          </div>
        ))}
      </div>

      {/* Product Details Section */}
      {selectedProduct && (
        <div
          className="mt-12 rounded-xl p-6 shadow-inner"
        >
          <div className="flex justify-between items-center mb-4">
            <h3
              className="text-2xl font-bold"
              style={{
                color: mainGreen,
                textShadow: `0 2px 6px #bfffc6`
              }}
            >
              <span style={{ color: mainGreen }}>
                {selectedProduct}
              </span>
              <span style={{ color: accentGreen }}> Benefits</span>
            </h3>
            <button
              onClick={() => setSelectedProduct(null)}
              className="font-medium hover:underline px-3 py-1 rounded-full"
              style={{
                color: "#fff",
                background: "#d32f2f",
                boxShadow: "0 2px 8px #f8bbd011",
                border: "none"
              }}
            >
              Close
            </button>
          </div>
          <ul className="list-disc list-inside space-y-2"
              style={{ color: deepGreen, fontWeight: 500, fontSize: "1.08rem" }}>
            {productDetails[selectedProduct].map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductGallery;
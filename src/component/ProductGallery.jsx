// import ProductItem from './ProductItem';
// import butterChickenImage from '../assets/image2.png';
// import veggieButterImage from '../assets/image3.png';
// import currySauceImage from '../assets/image1.png';
// import no1 from '../assets/no1.jpg'
// import no2 from '../assets/no2.jpg'
// import no3 from '../assets/no3.jpg'
// import no4 from '../assets/no4.jpg'
// import no5 from '../assets/no5.jpg'
// import no6 from '../assets/no6.jpg'




// function ProductGallery() {
//   const products = [
//     { name: 'Butter Chicken', image: no1 },
//     { name: 'Veggie Butter', image: no2 },
//     { name: 'Curry Sauce', image: no3 },
//     { name: 'Curry Sauce', image: no6 },
//     { name: 'Curry Sauce', image: no5 },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12">
//       <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
//         Our Delicious Products
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
//           >
//             <ProductItem
//               name={product.name}
//               image={product.image}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductGallery;




import { useState } from 'react';
import ProductItem from './ProductItem';
import no1 from '../assets/no1.jpg';
import no2 from '../assets/no2.jpg';
import no3 from '../assets/no3.jpg';
import { Link } from 'react-router-dom';

const productDetails = {
  'Butter Chicken': [
    "RICH & CREAMY: A luxurious sauce with authentic Indian spices.",
    "PROTEIN-PACKED: Great source of protein when paired with chicken.",
    "READY TO USE: Quick meal solution with restaurant-style taste.",
  ],
  'Veggie Butter': [
    "VEGETARIAN FRIENDLY: Perfect blend for mixed vegetables.",
    "NATURAL INGREDIENTS: Made with real butter and spices.",
    "FLAVORFUL & HEALTHY: A delicious low-sugar option.",
  ],
  'Curry Sauce': [
    "AUTHENTIC TASTE: Traditional Indian curry flavor.",
    "EASY COOKING: Just add your favorite protein or vegetables.",
    "SPICE RICH: Balanced with herbs, spices, and tomatoes.",
  ],
};

function ProductGallery() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { name: 'Butter Chicken', image: no1 },
    { name: 'Veggie Butter', image: no2 },
    { name: 'Curry Sauce', image: no3 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-800">
          Our Delicious Products
        </h2>
        <Link
          to={'/ProductAndBenfits'}
          className="text-blue-600 font-semibold hover:underline"
        >
          See More
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setSelectedProduct(product.name)}
          >
            <ProductItem name={product.name} image={product.image} />
          </div>
        ))}
      </div>

      {/* Product Details Section */}
      {selectedProduct && (
        <div className="mt-12 bg-gray-100 rounded-xl p-6 shadow-inner">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-800">
              {selectedProduct} Benefits
            </h3>
            <button
              onClick={() => setSelectedProduct(null)}
              className="text-red-500 font-medium hover:underline"
            >
              Close
            </button>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
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

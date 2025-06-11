import ProductItem from './ProductItem';
import butterChickenImage from '../assets/image2.png';
import veggieButterImage from '../assets/image3.png';
import currySauceImage from '../assets/image1.png';

function ProductGallery() {
  const products = [
    { name: 'Butter Chicken', image: butterChickenImage },
    { name: 'Veggie Butter', image: veggieButterImage },
    { name: 'Curry Sauce', image: currySauceImage },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
        Our Delicious Sauces
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <ProductItem
              name={product.name}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;

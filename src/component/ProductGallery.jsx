import ProductItem from './ProductItem';
import butterChickenImage from '../assets/image2.png';
import veggieButterImage from '../assets/image3.png';
import currySauceImage from '../assets/image1.png';
import no1 from '../assets/no1.jpg'
import no2 from '../assets/no2.jpg'
import no3 from '../assets/no3.jpg'
import no4 from '../assets/no4.jpg'
import no5 from '../assets/no5.jpg'
import no6 from '../assets/no6.jpg'




function ProductGallery() {
  const products = [
    { name: 'Butter Chicken', image: no1 },
    { name: 'Veggie Butter', image: no2 },
    { name: 'Curry Sauce', image: no3 },
    { name: 'Curry Sauce', image: no6 },
    { name: 'Curry Sauce', image: no5 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
        Our Delicious Products
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

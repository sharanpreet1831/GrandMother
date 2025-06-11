import HeroSection from './ProductAndBenfits/HeroSection';
import BenefitsSection from './ProductAndBenfits/BenefitsSection';

import productImg from '../assets/P&B1.jpg';
import butterChickenJars from '../assets/image1.png';
import butterChickenCans from '../assets/image2.png';
import veggieButterJars from '../assets/image3.png';
import ProductShowcase from './ProductAndBenfits/ProductShowcase';

const products = [
  {
    title: "BUTTER CHICKEN COOKING SAUCE",
    points: [
      "Our Butter Chicken Cooking Sauce is a flavourful blend of exotic Indian spices that are slow-cooked to perfection to retain the highest aroma and taste. With this sauce, you can create delicious Indian dishes right in your own kitchen.",
      "Made with high-quality, natural ingredients like crushed tomatoes, onions, ginger, and garlic.",
      "Contains a unique blend of cryogenic spices, including turmeric, cumin, coriander, garam masala, and red chilli, that give the sauce its authentic Indian flavour.",
      "Low fat and low cholesterol make it a healthy option for those who are health-conscious.",
      "Our butter chicken cooking sauce is versatile and easy to use – just add to your choice of meat or vegetables and cook until done.",
      "Suitable for a range of Indian dishes, including Chicken Tikka, Chicken Vindaloo, Chicken Tikka Masala, Chicken Madras, and Chicken Korma.",
    ],
    images: [
      { src: butterChickenJars, alt: "Butter Chicken Cooking Sauce Jars" },
      { src: butterChickenCans, alt: "Butter Chicken Cooking Sauce Cans" }
    ]
  },
  {
    title: "VEGGIE BUTTER COOKING SAUCE",
    points: [
      "Perfect for vegetarian dishes with the same great taste as our original Butter Chicken sauce.",
      "Made from a blend of fresh vegetables and authentic Indian spices.",
      "Completely vegan and gluten free.",
      "Easy to use – simply add to veggies or paneer and cook."
    ],
    images: [
      { src: veggieButterJars, alt: "Veggie Butter Cooking Sauce Jars" }
    ]
  },
  {
    title: "VEGGIE BUTTER COOKING SAUCE",
    points: [
      "Perfect for vegetarian dishes with the same great taste as our original Butter Chicken sauce.",
      "Made from a blend of fresh vegetables and authentic Indian spices.",
      "Completely vegan and gluten free.",
      "Easy to use – simply add to veggies or paneer and cook."
    ],
    images: [
      { src: veggieButterJars, alt: "Veggie Butter Cooking Sauce Jars" }
    ]
  }
];

function ProductAndBenfits() {
  return (
    <div>
      <HeroSection
        bgImage={productImg}
        title="Our Products & Benefits"
        subtitle="Discover the unique advantages of our cryogenic spices and gourmet blends!"
      />
      <BenefitsSection />
      <ProductShowcase products={products} />
    </div>
  );
}

export default ProductAndBenfits;
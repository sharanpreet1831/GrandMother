import HeroSection from './ProductAndBenfits/HeroSection';
import BenefitsSection from './ProductAndBenfits/BenefitsSection';

import productImg from '../assets/P&B1.jpg';
import butterChickenJars from '../assets/image1.png';
import butterChickenCans from '../assets/image2.png';
import veggieButterJars from '../assets/image3.png';
import ProductShowcase from './ProductAndBenfits/ProductShowcase';
import LEMONPICKLE from '../assets/no2.jpg'
import CHILIPICKLE from '../assets/no1.jpg'
import MIXPICKLE from '../assets/mix.jpg'
import soyasauce from '../assets/soya.jpg'
import GREENCHILLI from '../assets/green.jpg'
import CONTINENTALSAUCE from '../assets/continental.jpg'
import ROSESHARBAT from '../assets/no3.jpg'
import ORANGESHARBAT from '../assets/orange.jpg'
import MANGOPICKLE from '../assets/mango.jpg'
import AMLAMURABBA from '../assets/amala.jpg'
import REDCHILLISAUCE from '../assets/redchilli.jpeg'
import APPLEMURABBA from '../assets/applemurabba.jpg'

const products = [
  {
    title: "LEMON PICKLE",
    points: [
      "ZESTY FLAVOR ENHANCER : Adds a bright, tangy zest that livens up any meal with authentic Indian taste.",
      "IMMUNE SUPPORT:Rich in vitamin C from sun-ripened lemons, supporting immune health naturally.",
      "DIGESTIVE AID:Contains digestive spices that help improve appetite and promote healthy digestion",
      "VERSATILE USAGE:Perfect accompaniment to rice, parathas, or snacks, enhancing flavors effortlessly.",
      
    ],
    images: [
      { src: LEMONPICKLE, alt: "LEMON PICKLE" },
     
    ]
  },
  {
    title: "CHILI PICKLE",
     points: [
      "SPICY FLAVOR BOOST : Delivers a bold and fiery kick to your dishes, elevating taste with authentic heat.",
      "METABOLISM SUPPORT: Capsaicin in chili helps to boost metabolism and may aid in fat burning .",
      "ANTIOXIDANT-RICH:Packed with antioxidants from fresh chilies and spices, promoting overall wellness .",
      "MULTI-PURPOSE CONDIMENT: Ideal as a side, dip, or ingredient, adding punch and complexity to meals."
    ],
    images: [
      { src: CHILIPICKLE, alt: "CHILIPICKLE" }
    ]
  },
  {
    title: "GURU FOOD PRODUCTS MIX PICKLE",
    points: [
      "RICH, COMPLEX FLAVOR PROFILE :Combines a variety of sun-ripened fruits and vegetables, delivering a balanced blend of tangy, spicy, and savory tastes that enhance any dish.",
      "NUTRITIOUS INGREDIENTS:Made with diverse natural ingredients, providing a wide range of vitamins, minerals, and antioxidants for better health.",
      "DIGESTIVE HEALTH SUPPORT :Infused with traditional spices known to aid digestion and improve gut function",
      "VERSATILE AND CONVENIENT: Perfect as a condiment, side dish, or flavor enhancer that complements a wide variety of meals effortlessly."
    ],
    images: [
      { src: MIXPICKLE, alt: "MIXPICKLE" }
    ]
  },
  {
  "title": "GURU FOOD PRODUCTS MANGO PICKLE",
  "points": [
    "AUTHENTIC TANGY FLAVOR: Bursting with the rich, tangy taste of sun-ripened mangoes combined with traditional spices for an irresistible flavor experience.",
    "RICH IN VITAMINS: Packed with nutrients like vitamin C and antioxidants naturally present in mangoes, supporting overall health.",
    "DIGESTIVE AID: Crafted with spices known to stimulate digestion and boost metabolism, helping you enjoy your meals comfortably.",
    "VERSATILE ACCOMPANIMENT: Perfect for pairing with rice, bread, and snacks, adding depth and zest to a wide range of dishes."
  ],
  "images": [
    { "src": MANGOPICKLE, "alt": "Mango Pickle Jar" }
  ]
},
{
  title: "GURU FOOD PRODUCTS SOYA SAUCE",
  points: [
    "ENHANCED FLAVOR: Guru Food Products Soya Sauce adds a rich umami flavor to your dishes, elevating the taste of stir-fries, marinades, and sauces.",
    "VERSATILITY: This sauce is perfect for a variety of culinary applications, including dipping, marinating, and seasoning, making it an essential ingredient in any kitchen.",
    "LOW CALORIE OPTION: Soya sauce is a low-calorie condiment that enhances flavor without adding excessive calories — ideal for health-conscious diets.",
    "SOURCE OF ANTIOXIDANTS: Naturally brewed soya sauce contains antioxidants that help combat oxidative stress, supporting overall well-being."
  ],
  images: [
    { src: soyasauce, "alt": "Soya Sauce Bottle" }
  ]
},
{
  title: "GURU FOOD PRODUCTS GREEN CHILLI",
  points: [
    "BOOSTS METABOLISM: Green chillies contain capsaicin, a compound known to increase metabolic rate, supporting weight management.",
    "RICH IN VITAMINS: Loaded with vitamins A, C, and E, green chillies enhance immunity, improve skin health, and support overall well-being.",
    "DIGESTIVE HEALTH: The heat from green chillies stimulates digestive enzyme production, promoting gut health.",
    "ANTI-INFLAMMATORY PROPERTIES: Green chillies possess anti-inflammatory benefits that may help ease inflammation and related discomfort."
  ],
  images: [
    { "src": GREENCHILLI, "alt": "Green Chilli Pickle Pack" }
  ]
},
{
  title: "GURU FOOD PRODUCTS CONTINENTAL SAUCE",
  points: [
    "VERSATILITY: Guru Food Products Continental Sauce can be used in a wide range of dishes, from pasta and pizzas to marinades and dressings, making it a staple in any kitchen.",
    "SAVORY FLAVOR ENHANCEMENT: This sauce is expertly crafted to provide a rich and balanced flavor profile, elevating the taste of your meals and making them more enjoyable.",
    "TIME-SAVING: With its ready-to-use formula, Continental Sauce saves you time in meal preparation, allowing you to create delicious dishes quickly and effortlessly.",
    "EASY TO CUSTOMIZE: The sauce serves as a perfect base for experimentation, allowing you to add your favorite ingredients, such as vegetables or proteins, to create unique and personalized meals."
  ],
  images: [
    { "src": CONTINENTALSAUCE, "alt": "Continental Sauce Bottle" }
  ]
},
{
  title: "RED CHILLI SAUCE",
  points: [
    "RICH IN CAPSAICIN: The active compound that gives red chillies their heat and offers multiple therapeutic benefits.",
    "BOOSTS METABOLISM: Capsaicin may enhance metabolic rate, helping with fat burning and potential weight loss.",
    "ENHANCES DIGESTION: Stimulates digestive enzymes, improving nutrient absorption and gut health.",
    "ANTI-INFLAMMATORY PROPERTIES: May reduce inflammation and provide relief in conditions like arthritis.",
    "SUPPORTS HEART HEALTH: Can improve circulation and help lower cholesterol, reducing the risk of heart disease.",
    "RICH IN VITAMIN C: A good source of vitamin C, which boosts the immune system and supports overall health.",
    "PAIN RELIEF: Contains natural analgesic properties, aiding in pain relief when consumed or applied.",
    "AIDS DIABETES MANAGEMENT: May help regulate blood sugar levels and improve insulin response."
  ],
  images: [
    { src: REDCHILLISAUCE, alt: "RED CHILLI SAUCE" }
  ]
},
{
  title: "GURU FOOD PRODUCTS ROSE SHARBAT",
  points: [
    "HYDRATION: Rose Sharbat is a refreshing drink that helps keep you hydrated, especially during hot weather.",
    "ANTIOXIDANT PROPERTIES: Made from natural rose petals, this sharbat is rich in antioxidants, which can help combat oxidative stress and promote overall health.",
    "DIGESTIVE AID: Rose Sharbat is known to aid digestion and can help soothe an upset stomach, making it a great choice after meals.",
    "MOOD ENHANCER: The pleasant aroma and taste of rose can have a calming effect, helping to reduce stress and improve mood."
  ],
  images: [
    { "src": ROSESHARBAT, "alt": "Rose Sharbat Bottle" }
  ]
},
{
  title: "GURU FOOD PRODUCTS ORANGE SHARBAT",
  points: [
    "HYDRATION: Orange Sharbat is an excellent way to stay hydrated, especially during hot weather, providing a refreshing and flavorful alternative to plain water.",
    "RICH IN VITAMIN C: Packed with vitamin C, Orange Sharbat supports immune function, helps fight off infections, and promotes healthy skin.",
    "ANTIOXIDANT PROPERTIES: The natural antioxidants found in oranges help combat oxidative stress, contributing to overall health and wellness.",
    "DIGESTIVE HEALTH: Orange Sharbat can aid digestion and promote a healthy gut, making it a beneficial choice after meals.",
    "ENERGY BOOST: The natural sugars in Orange Sharbat provide a quick energy boost, making it a great refreshment for active individuals.",
    "MOOD ENHANCER: The bright and zesty flavor of orange can uplift your mood and provide a sense of refreshment, making it a delightful drink for any occasion."
  ],
  images: [
    { "src": ORANGESHARBAT, "alt": "Orange Sharbat Bottle" }
  ]
},
{
  title: "AMLA MURABBA",
  points: [
    "RICH IN VITAMIN C: Amla is one of the richest natural sources of vitamin C, boosting immunity and helping fight infections.",
    "ANTIOXIDANT PROPERTIES: Packed with antioxidants, Amla helps reduce oxidative stress and supports overall wellness.",
    "DIGESTIVE HEALTH: Aids digestion, relieves constipation, and promotes nutrient absorption with its natural fiber.",
    "SKIN & HAIR HEALTH: Improves skin texture, reduces signs of aging, and strengthens hair follicles to prevent hair loss.",
    "BLOOD SUGAR & HEART SUPPORT: May help regulate blood sugar and reduce cholesterol, supporting heart health.",
    "WEIGHT MANAGEMENT FRIENDLY: Low in calories and high in fiber, making it ideal for healthy weight management.",
  ],
  images: [
    { src: AMLAMURABBA, alt: "AMLA MURABBA" },
  ]
},
{
  title: "APPLE MURABBA",
  points: [
    "NUTRIENT-RICH: Packed with dietary fiber, vitamin C, and antioxidants that contribute to overall health and well-being.",
    "HEART HEALTH: Helps reduce cholesterol levels and supports cardiovascular health due to its high fiber and antioxidant content.",
    "DIGESTIVE HEALTH: Aids digestion and promotes regular bowel movements, preventing constipation.",
    "WEIGHT MANAGEMENT: Low in calories and high in fiber, making it a filling option to control appetite and support weight loss.",
    "BLOOD SUGAR CONTROL: The fiber content helps regulate blood sugar levels, making it suitable for people with diabetes.",
    "BOOSTS IMMUNITY: Rich in vitamin C and antioxidants, it helps strengthen the immune system and ward off infections.",
    "SKIN HEALTH: Antioxidants in apple murabba support skin rejuvenation and help reduce signs of aging.",
    "HYDRATION: High water content helps maintain hydration and supports overall body functions."
  ],
  images: [
    { src: APPLEMURABBA, alt: "APPLE MURABBA" }
  ]
}

];

function ProductAndBenfits() {
  return (
    <div>
      <HeroSection
        bgImage={productImg}
        title="Our Products & Benefits"
        subtitle="Discover the  of our cryogenic spices and gourmet blends!"
      />
      <BenefitsSection />
      <ProductShowcase products={products} />
    </div>
  );
}

export default ProductAndBenfits;
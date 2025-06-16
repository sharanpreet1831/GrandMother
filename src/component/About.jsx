
import aboutImg from '../assets/greenlogo.jpg'; // Use your correct path

function About() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-gray-100 py-14">
                <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
                    {/* Hero Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={aboutImg}
                            alt="About Guru Food Products"
                            className="w-full max-w-md rounded-2xl shadow-lg object-cover"
                        />
                    </div>
                    {/* Hero Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-4">
                            About <span className="text-[#34a853]">Guru Food Products</span>
                        </h1>
                        <p className="text-gray-700 text-lg mb-4">
                            Guru Food Products brings authentic Indian pickles, sauces, murabbas, and sharbats—and innovation—to your table. Our mission is to blend tradition with health, flavor, and convenience.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Discover our story, values, and commitment to quality in every product we offer.
                        </p>
                        <a
                            href="#company-bio"
                            className="inline-block bg-[#008000] hover:bg-[#34a853] transition-colors text-white font-semibold px-6 py-3 rounded-full shadow"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* Company/Personal Bio & Core Values Section */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
                    {/* Main Image */}
                    {/* You can add a decorative image here if desired */}
                    {/* <img
            src={aboutImg}
            alt="Company and Personal Bio sections"
            className="w-full rounded-xl mb-10 shadow-lg"
            style={{ maxHeight: 500, objectFit: "cover" }}
          /> */}

                    {/* Company Bio */}
                    <div id="company-bio" className="bg-white w-full rounded-xl shadow p-8 mb-12">
                        <h3 className="text-2xl font-bold mb-2 text-green-900">COMPANY BIO</h3>
                        <p className="text-gray-700 text-base leading-relaxed">
                            Founded in 2017 in the heart of Rajpura, Patiala, Guru Food Products has quickly established itself as a trusted name in the culinary world. Specializing in the manufacturing of pickles, sauces, sharkats, and murabbas, our company is dedicated to bringing the rich flavors of traditional Indian cuisine to every household.
                            At Guru Food Products, we believe that food is not just sustenance; it is an experience that connects people and cultures. Our products are crafted using time-honored recipes and the finest ingredients, ensuring that each jar and bottle captures the essence of homemade goodness. With a commitment to quality and authenticity, we take pride in offering a diverse range of flavors that cater to every palate.
                            Our pickles are made from sun-ripened fruits and vegetables, expertly blended with aromatic spices to create a burst of flavor in every bite. Our sauces are designed to elevate your meals, providing a perfect balance of taste and convenience. Our refreshing shackats and rich murabbas offer a delightful way to enjoy the natural sweetness of fruits, making them perfect for any occasion.
                            As we continue to grow, Guru Food Products remains dedicated to our core values of quality, tradition, and customer satisfaction. We invite you to experience the love and passion that goes into every product we create, and to join us on this flavorful journey.
                        </p>
                    </div>

                    {/* Personal Bio */}
                    <div className="bg-white w-full rounded-xl shadow p-8 mb-12">
                        <h3 className="text-2xl font-bold mb-2 text-green-900">PERSONAL BIO</h3>
                        <p className="text-gray-700 text-base leading-relaxed mb-6">
                            At Guru Food Products, we believe that every flavor tells a story — a story of heritage, passion, and craftsmanship. For years, we have been perfecting the art of traditional Indian condiments, crafting pickles, sharbats, sauces, and murabbas that bring an authentic burst of taste to your table
                            <br /><br />
                            Our two beloved brands — King and Grandmother — represent the heart and soul of our journey. King stands for bold, innovative flavors made for modern food lovers, while Grandmother captures the comforting, timeless recipes handed down through generations, embodying the warmth of home-cooked tradition.
                            <br /> <br />
                            Every jar reflects our commitment to quality, sourcing the freshest ingredients sustainably and respecting the environment. Our process blends time-honored recipes with modern production standards to ensure you savor nothing but the purest, richest flavors crafted with love.
                            <br /> <br />
                            Join us on this flavorful voyage — where tradition meets taste innovation, and every bite is a celebration of India's culinary heritage. Experience the magic of Guru Food Products, where your palate always finds its perfect match
                        </p>

                    </div>

                    {/* Core Values */}
                    <div className="bg-white w-full rounded-xl shadow p-8">
                        <h3 className="text-2xl font-bold mb-4 text-green-900">OUR CORE VALUES</h3>
                        <p className="text-gray-700 mb-6">
                            At Guru Food Products, our core values guide every aspect of our business. We are committed to delivering exceptional products that celebrate tradition while embracing innovation and responsibility.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-green-50 rounded-lg p-6 shadow">
                                <h4 className="font-semibold mb-2">Quality</h4>
                                <p className="text-gray-700 text-sm">
                                    We prioritize quality above all else. By sourcing the finest ingredients and adhering to strict standards, we make sure every product meets high expectations for taste and safety. Our commitment guarantees you only the best.
                                </p>
                            </div>
                            <div className="bg-green-50 rounded-lg p-6 shadow">
                                <h4 className="font-semibold mb-2">Tradition</h4>
                                <p className="text-gray-700 text-sm">
                                    We honor India's culinary heritage using time-honored recipes and traditional methods. Our products reflect authentic flavors and techniques passed down through generations—bringing you the true essence of homemade goodness.
                                </p>
                            </div>
                            <div className="bg-green-50 rounded-lg p-6 shadow">
                                <h4 className="font-semibold mb-2">Customer Satisfaction</h4>
                                <p className="text-gray-700 text-sm">
                                    Our customers are at the heart of everything we do. We strive to understand your needs, ensuring our products not only meet but exceed your expectations. We value your feedback and seek continuous improvement.
                                </p>
                            </div>
                            <div className="bg-green-50 rounded-lg p-6 shadow">
                                <h4 className="font-semibold mb-2">Innovation</h4>
                                <p className="text-gray-700 text-sm">
                                    While respecting tradition, we embrace innovation—exploring new flavors, recipes, and packaging to enhance your experience. We aim to stay ahead of trends while maintaining product authenticity.
                                </p>
                            </div>
                            <div className="bg-green-50 rounded-lg p-6 shadow">
                                <h4 className="font-semibold mb-2">Sustainability</h4>
                                <p className="text-gray-700 text-sm">
                                    We recognize our responsibility to the environment and the community. From responsible sourcing to minimizing waste, we are dedicated to sustainable practices that positively impact our world.
                                </p>
                            </div>
                            <div className="bg-green-50 rounded-lg p-6 shadow">
                                <h4 className="font-semibold mb-2">Integrity</h4>
                                <p className="text-gray-700 text-sm">
                                    We conduct business with honesty and transparency. Our ethical practices build trust with customers, suppliers, and employees. Integrity is the foundation of all our relationships.
                                </p>
                            </div>
                            <div className="bg-green-50 rounded-lg p-6 shadow">
                                <h4 className="font-semibold mb-2">Passion</h4>
                                <p className="text-gray-700 text-sm">
                                    Our love for food and dedication to excellence drives everything we do. We are passionate about creating products that bring joy and satisfaction to our customers, which is reflected in our quality and flavor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
 

const ProductShowcase = ({ products }) => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-4xl mx-auto px-6 space-y-16">
      {products.map((prod, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12 bg-white rounded-2xl shadow-md p-6 md:p-10"
        >
          {/* Description */}
          <div className="md:flex-1">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
              {prod.title}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg">
              {prod.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Images */}
          <div className="md:flex-1 flex flex-col gap-4 justify-center md:justify-end">
            {prod.images.map((img, i) => (
              <img
                src={img.src}
                alt={img.alt}
                key={i}
                className="w-64 h-64 object-cover rounded-xl shadow-lg mb-10"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProductShowcase;

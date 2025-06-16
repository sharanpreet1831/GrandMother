import posterimage from '../assets/poster.jpg'
import greenposter from '../assets/greenposter.jpg'
function ProductSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="overflow-hidden rounded-3xl shadow-lg">
          <img
            src={greenposter}
            alt="Guru  Product"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default ProductSection;

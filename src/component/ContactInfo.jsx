function ContactInfo() {
  return (
    <div className="flex-1 w-full max-w-[35%] md:max-w-full bg-[#1a1a1a] text-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.15)] animate-fade-in">
      <h3 className="text-3xl font-extrabold text-white mb-6 uppercase tracking-wide">
        Contact
      </h3>

      <div className="space-y-6 text-[1rem] leading-relaxed">
        {/* Phone */}
        <div>
          <p className="text-gray-300 font-semibold mb-1">Mobile</p>
          <a
            href="tel:8054066066"
            className="text-[#e67e22] hover:underline block"
          >
            +91 8054066066
          </a>
        </div>

        {/* Office */}
        <div>
          <p className="text-gray-300 font-semibold mb-1">Office</p>
          <a
            href="tel:+91 9877739391"
            className="text-[#e67e22] hover:underline block"
          >
            +91 9877739391
          </a>
        </div>

        {/* Email */}
        <div>
          <p className="text-gray-300 font-semibold mb-1">Email</p>
          <a
            href="mailto:gurufoodproductsrajpura@gmail.com"
            className="text-[#e67e22] hover:underline block"
          >
            gurufoodproductsrajpura@gmail.com
          </a>
        </div>

        {/* Address */}
        <div>
          <p className="text-gray-300 font-semibold mb-1">Address</p>
          <p className="text-white">
            Hari Nagar, Old Rajpura<br />
            Dist patiala (140401)
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;

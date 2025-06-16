function ContactInfo() {
  // Theme colors
  const mainGreen = "#008000";
  const accentGreen = "#34a853";

  return (
    <div className="flex-1 w-full bg-[#1a1a1a] text-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.15)] animate-fade-in">
      <h3
        className="text-3xl md:text-2xl font-extrabold mb-6 uppercase tracking-wide text-left md:text-center"
        style={{ color: mainGreen }}
      >
        Contact
      </h3>

      <div className="space-y-6 text-[1rem] leading-relaxed">
        {/* Phone */}
        <div>
          <p className="font-semibold mb-1" style={{ color: accentGreen }}>
            Mobile
          </p>
          <a
            href="tel:8054066066"
            className="block font-semibold break-all"
            style={{ color: "white" }}
          >
            +91 8054066066
          </a>
        </div>

        {/* Office */}
        <div>
          <p className="font-semibold mb-1" style={{ color: accentGreen }}>
            Office
          </p>
          <a
            href="tel:+91 9877739391"
            className="block font-semibold break-all"
            style={{ color: "white" }}
          >
            +91 9877739391
          </a>
        </div>

        {/* Email */}
        <div>
          <p className="font-semibold mb-1" style={{ color: accentGreen }}>
            Email
          </p>
          <a
            href="mailto:gurufoodproductsrajpura@gmail.com"
            className="block font-semibold break-all"
            style={{ color: "skyblue" }}
          >
            gurufoodproductsrajpura@gmail.com
          </a>
        </div>

        {/* Address */}
        <div>
          <p className="font-semibold mb-1" style={{ color: accentGreen }}>
            Address
          </p>
          <p className="break-words" style={{ color: "white" }}>
            Hari Nagar, Old Rajpura<br />
            Dist patiala (140401)
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
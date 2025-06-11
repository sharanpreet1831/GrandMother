import React from 'react';
import spiceImg1 from '../../assets/cry2.jpg';
import spiceImg2 from '../../assets/cry2.jpg';
import spiceImg3 from '../../assets/cry2.jpg';

function CryoGrindingComparison() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12 text-gray-800">
      {/* Product Images */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 mb-10">
        {[spiceImg1, spiceImg2, spiceImg3].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Spice Product ${i + 1}`}
            className="w-64 h-64 object-cover rounded-xl shadow-md bg-white mx-auto"
          />
        ))}
      </div>

      {/* First Table Section */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-semibold text-left mb-4 tracking-wide border-l-4 border-[#d44c23] pl-3 text-[#d44c23]">
          Superiority of Cryogenic Over Standard Grinding Systems:
        </h3>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-white rounded-lg border border-gray-200">
            <thead className="bg-[#d44c23] text-white">
              <tr>
                <th className="py-3 px-4 text-left font-semibold">Traditional Grinding System</th>
                <th className="py-3 px-4 text-left font-semibold">Cryogenic Grinding System</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["The heat is developed inside the grinding mill", "Temperature below 0°C inside the grinding mill"],
                [
                  "Heat causes evaporation of essential oils and melts heat-sensitive fats.",
                  "Negligible loss of volatile components.",
                ],
                [
                  "Grinding elements become greasy and machine may block.",
                  "No such issues in Cryogenic process.",
                ],
                ["High energy consumption", "Low energy consumption"],
                ["High capacity motors required", "Low capacity motors required"],
                ["Essential value evaporated", "No evaporation of essential value"],
                ["No control on particle size", "Particle size is controlled"],
              ].map(([left, right], idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white" : "bg-[#faf6f3]"}
                >
                  <td className="border border-gray-200 py-3 px-4 text-left">{left}</td>
                  <td className="border border-gray-200 py-3 px-4 text-left">{right}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Second Table Section */}
        <h3 className="text-xl sm:text-2xl font-semibold text-left mt-12 mb-4 tracking-wide border-l-4 border-[#d44c23] pl-3 text-[#d44c23]">
          Superiority of Whole Cryogenically Processed Spices over Standard Grinding (Essential Oil Content):
        </h3>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-white rounded-lg border border-gray-200 text-sm sm:text-base">
            <thead className="bg-[#d44c23] text-white">
              <tr>
                <th className="py-3 px-3 text-left font-semibold">Spices</th>
                <th className="py-3 px-3 text-left font-semibold">Ungrounded Essential Oil (ml/g)</th>
                <th className="py-3 px-3 text-left font-semibold">%</th>
                <th className="py-3 px-3 text-left font-semibold">Cryogenic Grinded Essential Oil (ml/g)</th>
                <th className="py-3 px-3 text-left font-semibold">%</th>
                <th className="py-3 px-3 text-left font-semibold">Standard Grounded Essential Oil (ml/g)</th>
                <th className="py-3 px-3 text-left font-semibold">%</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Turmeric", 5.5, 100, 5.5, 100, 3.5, 64],
                ["Coriander", 0.6, 100, 0.6, 100, 0.4, 67],
                ["Black Pepper", 2.9, 100, 2.9, 100, 1.5, 52],
                ["Cumin Garam", 3.5, 100, 3.5, 100, 1.6, 46],
                ["Garam Masala", 4.6, 100, 4.6, 100, 2.0, 43],
              ].map(([spice, uOil, uPct, cOil, cPct, sOil, sPct], idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white" : "bg-[#faf6f3]"}
                >
                  <td className="border border-gray-200 py-3 px-3 text-left font-medium">{spice}</td>
                  <td className="border border-gray-200 py-3 px-3 text-left">{uOil}</td>
                  <td className="border border-gray-200 py-3 px-3 text-left">{uPct}</td>
                  <td className="border border-gray-200 py-3 px-3 text-left">{cOil}</td>
                  <td className="border border-gray-200 py-3 px-3 text-left">{cPct}</td>
                  <td className="border border-gray-200 py-3 px-3 text-left">{sOil}</td>
                  <td className="border border-gray-200 py-3 px-3 text-left">{sPct}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default CryoGrindingComparison;

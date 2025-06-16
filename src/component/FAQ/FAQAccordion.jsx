import React, { useState, useRef } from 'react';

const faqs = [
  {
    question: "What types of products does Guru Food Products offer?",
    answer:
      "Guru Food Products specializes in manufacturing pickles, sauces, sharbats, and murabbas, all crafted using traditional recipes and high-quality ingredients.",
  },
  {
    question: "Are your products made with natural ingredients?",
    answer:
      "Yes, we prioritize using natural ingredients in all our products. Our pickles, sauces, sharbats, and murabbas are made without artificial flavors or preservatives.",
  },
  {
    question: "How should I store your products?",
    answer:
      "It is recommended to store our pickles and sauces in a cool, dry place. Once opened, please refrigerate them to maintain freshness. Sharbats should also be refrigerated after opening.",
  },
  {
    question: "Do your products contain any allergens?",
    answer:
      "While we strive to provide clear labeling, some of our products may contain common allergens such as mustard seeds or other spices. Please check the ingredient list on the packaging for specific allergen information.",
  },
  {
    question: "Are your pickles and sauces suitable for vegetarians and vegans?",
    answer:
      "Yes, our pickles and sauces are made from plant-based ingredients and are suitable for both vegetarians and vegans. However, please check individual product labels for specific dietary information.",
  },
  {
    question: "Can I use your sauces for cooking?",
    answer:
      "Absolutely! Our sauces are versatile and can be used as marinades, cooking sauces, or dips, enhancing the flavor of a variety of dishes.",
  },
  {
    question: "What are the health benefits of your products?",
    answer:
      "Our products offer various health benefits, including probiotics from fermented pickles, vitamins and minerals from fruits in sharbats and murabbas, and enhanced flavor for healthier meals.",
  },
  {
    question: "How long is the shelf life of your products?",
    answer:
      "The shelf life varies by product. Generally, our pickles and sauces can last for several months when unopened. Please refer to the expiration date on the packaging for specific information.",
  },
  {
    question: "Where can I purchase Guru Food Products?",
    answer:
      "Our products are available at select grocery stores and online platforms. Please visit our website or contact us via WhatsApp or email to place an order.",
  },
  {
    question: "Do you offer any bulk purchasing options?",
    answer:
      "Yes, we offer bulk purchasing options for retailers and distributors. Please contact our customer service team for more information.",
  },
  {
    question: "How can I provide feedback or ask further questions?",
    answer:
      "We value your feedback! You can reach out to us through our website's contact form or by emailing our customer service team. We are here to assist you!",
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const refs = useRef([]);

  const mainGreen = "#008000";
  const accentGreen = "#34a853";
  const lightGreen = "#e6ffe6";

  const handleToggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      className="max-w-3xl mx-auto my-12 p-4 sm:p-6"
      aria-label="Frequently Asked Questions"
    >
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className={`mb-5 rounded-lg border shadow-sm bg-white transition-shadow duration-300
              ${isOpen ? 'shadow-lg' : 'hover:shadow-md'}
            `}
            style={{
              borderColor: accentGreen,
              background: isOpen ? lightGreen : "#fff"
            }}
          >
            <button
              onClick={() => handleToggle(idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
              id={`faq-question-${idx}`}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold rounded-t-lg
                focus:outline-none focus-visible:ring-2 transition-colors duration-200"
              style={{
                color: mainGreen,
                background: isOpen ? "#eaffea" : "#f6fff6"
              }}
            >
              {faq.question}
              <svg
                className={`w-6 h-6`}
                style={{ color: accentGreen, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              id={`faq-answer-${idx}`}
              role="region"
              aria-labelledby={`faq-question-${idx}`}
              className="px-6 overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out"
              style={{
                maxHeight: isOpen
                  ? refs.current[idx]?.scrollHeight + 32 + 'px'
                  : '0px',
                opacity: isOpen ? 1 : 0,
                background: lightGreen
              }}
              ref={el => (refs.current[idx] = el)}
            >
              <p className="py-4 leading-relaxed" style={{ color: mainGreen }}>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default FAQAccordion;
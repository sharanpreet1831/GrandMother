import React, { useState, useRef, useEffect } from 'react';

const faqs = [
  {
    question: "Why don't the Guru Butter Chicken and Veggie Makhni Sauces contain actual butter?",
    answer: "Our sauces allow you to add or omit dairy ingredients to control the calories and sodium in your dish. Adding fresh ingredients, such as low-fat cream, milk, yogurt, or non-dairy alternatives, during the cooking process increases the freshness of the dish, giving you options for healthier, low-fat traditional Indian dishes."
  },
  {
    question: "Why does Guru suggest adding fresh coriander stems to his sauces while cooking?",
    answer: "Adding coriander stems to our sauces releases flavorful juice into the sauce during the cooking process, enhancing the taste of the dish and giving it a fresh, authentic Indian flavour."
  },
  {
    question: "Why does Guru grind his own spices?",
    answer: "Our spices are ground using the Cryogenic Spices method, preserving 99% of the flavours and aromas that make our sauces truly authentic. Traditional grinding processes can cause spices to lose up to 50% of their flavour and aroma. At the same time, high-speed grinders used by other brands can produce heat that reduces volatile components and heat-sensitive constituents."
  },
  {
    question: "What kind of vegetable oil is used in Guru Sauces?",
    answer: "We use Avocado Oil in all of our sauces."
  },
  {
    question: "How can I make a better-tasting Korma that’s simple, quick, and bursting with flavour?",
    answer: "Using Guru Curry Sauce as a base, you can easily prepare fresh Indian dishes like Kormas, Karais, Vindaloos, Madras, and Tikka Masala. Simply mix one cup of Guru Curry Sauce with ½ cup of plain yogurt and cook for 5 minutes to produce a fresh, Korma-style curry sauce full of amazing flavour and aroma."
  },
  {
    question: "How much additional salt should I add when cooking with Guru Sauces?",
    answer: "We recommend adding 1 tsp of salt for every 1 pound of meat or vegetables added to the sauce."
  },
  {
    question: "How long will a jar of Guru Sauce last once open?",
    answer: "Guru Sauces contain no preservatives and are made with only the freshest ingredients and spices. Once opened, store the sauce in the refrigerator and use it within seven days to ensure maximum freshness and flavour."
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  // For smooth height animation, we store refs to each answer container
  const refs = useRef([]);

  // Toggles the open index, collapsing if clicking the same question
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
            className={`mb-5 rounded-lg border border-gray-200 shadow-sm bg-white transition-shadow duration-300
              ${isOpen ? 'shadow-lg' : 'hover:shadow-md'}
            `}
          >
            <button
              onClick={() => handleToggle(idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
              id={`faq-question-${idx}`}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-gray-800 rounded-t-lg
                focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2
                transition-colors duration-200
                bg-gray-50 hover:bg-gray-100"
            >
              {faq.question}
              <svg
                className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
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
              className="px-6 overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out bg-orange-50"
              style={{
                maxHeight: isOpen
                  ? refs.current[idx]?.scrollHeight + 32 + 'px' // 32px padding top+bottom
                  : '0px',
                opacity: isOpen ? 1 : 0,
              }}
              ref={el => (refs.current[idx] = el)}
            >
              <p className="py-4 text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default FAQAccordion;

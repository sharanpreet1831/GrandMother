import React from 'react';
import healthHeroImg from '../../assets/P&B1.jpg';
import HeroSection from '../ProductAndBenfits/HeroSection';

function HealthBenfits() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection
        bgImage={healthHeroImg}
        title="Health Benefits of Our Spices & Sauces"
        subtitle="Explore the natural goodness and unique health advantages of our carefully crafted Indian products!"
      />

      {/* Health Benefits Content */}
      <main className="flex flex-col items-center my-12 px-4 md:px-6 lg:px-8">
        <article className="max-w-screen bg-white rounded-2xl p-10 md:p-8 text-[#232323] leading-relaxed text-[1.05rem] md:text-[1rem]">
          <p className="mb-6">
            Indian Cuisine, including Guru Foods Indian Sauces, uses ingredients like garlic, ginger, cumin, turmeric, chili, etc., which have long been believed to have medicinal properties. Ayurveda, the ancient medical science of India, harnesses the power of various spices and herbs to treat various ailments. We are not claiming that eating our sauces will cure or prevent diseases, but they sure are healthy and good for you. Below are some interesting articles from various esteemed sources.
          </p>

          <p className="mb-6">
            <strong>A team from the University of California at Los Angeles</strong> believes that turmeric may play a role in slowing down the progression of neurodegenerative disease. The finding may help to explain why rates of Alzheimer’s are much lower among the elderly in India than in their Western peers.
          </p>

          <p className="mb-6">Previous studies have found that Alzheimer’s affects just 1% of people over the age of 65 living in some Indian villages.</p>

          <p className="mb-6">
            <strong>Guru Food’s Indian Sauce contains lycopene:</strong><br />
            Guru Food’s Indian Sauces are loaded with lycopene. Our process cooks with the whole tomato with skin in place and includes the parts that contain lycopene. Lycopene is an antioxidant.
          </p>

          <hr className="my-10 border-gray-300" />

          <section>
            <h2 className="mb-4 text-2xl font-extrabold tracking-wide text-[#b9461b] hover:text-[#d44c23] transition-colors duration-300">
              Featured Articles About Curry
            </h2>
            <p className="mb-2 text-sm text-gray-600 italic">
              (Guru Sauces is not responsible for the following content of external internet sites.)
            </p>

            <article className="mb-10">
              <h3 className="mb-3 text-xl font-semibold text-[#b9461b]">Curry ‘may slow Alzheimer’s’</h3>
              <p className="mb-2 italic text-gray-700">Featured article from www.bbc.co.uk</p>
              <p className="mb-4">
                A team from the University of California at Los Angeles believes that turmeric may play a role in slowing down the progression of neurodegenerative disease. This finding may help explain why rates of Alzheimer’s are much lower among the elderly in India than in their Western peers.
              </p>
              <p className="mb-4">
                Previous studies have found that Alzheimer’s affects just 1% of people over the age of 65 living in some Indian villages.
              </p>

              <h4 className="mb-3 text-lg font-bold text-[#d44c23]">Turmeric</h4>
              <p className="mb-3">
                Turmeric is found in everything from mild Kormas to the hottest Vindaloos. The crucial chemical is curcumin, a compound found in the spice.
              </p>
              <p className="mb-3">Alzheimer’s is linked to the buildup of knots in the brain called amyloid plaques.</p>
              <p className="mb-3">
                Turmeric reduced the number of these plaques by half. The researchers also found that turmeric had other health benefits: it aids digestion, helps fight infection, and guards against heart attacks.
              </p>
              <p className="mb-3">
                In the study, middle-aged and aged rats were fed a diet rich in curcumin. All rats received brain injections of amyloid to mimic progressive Alzheimer’s disease.
              </p>
              <p className="mb-3">
                Not only was there less evidence of plaque buildup in the curcumin-fed rats, but they also outperformed rats on normal diets when carrying out maze-based memory tests. Curcumin also appeared to reduce Alzheimer’s-related inflammation in brain tissue.
              </p>
              <p className="mb-3">
                Researcher Dr. Sally Frautschy said the compound had potential as a treatment for preventing Alzheimer’s disease — particularly combined with anti-inflammatory drugs such as ibuprofen.
              </p>
              <p className="mb-4">
                Dr. Richard Harvey, director of research at the Alzheimer’s Society, said:
                <blockquote className="mt-2 italic pl-4 border-l-4 border-[#d44c23] text-[#a63e17]">
                  “Curcumin has both anti-oxidant and anti-inflammatory properties. Drugs with similar properties could potentially be used as preventative treatments for Alzheimer’s disease.”
                </blockquote>
              </p>
              <p>However, Dr. Harvey warned it could be many years before such drugs are widely available.</p>
            </article>
          </section>

          <hr className="my-10 border-gray-300" />

          <section>
            <h2 className="mb-4 text-2xl font-extrabold tracking-wide text-[#b9461b] hover:text-[#d44c23] transition-colors duration-300">
              Health Benefits of Chilies
            </h2>
            <p className="mb-4 italic text-gray-700">Featured article from www.chilly.in</p>
            <p className="mb-6">
              Over the years, there have been many different views on the effects that regular chili consumption can have on the human body. Here, we explore research to see if the humble chili is good for us.
            </p>

            <h4 className="mb-3 text-lg font-bold text-[#d44c23]">Effects on Blood Sugar</h4>
            <p className="mb-6">
              Researchers at the University of Tasmania recently completed a study (published in the American Journal of Clinical Nutrition, July 2006) suggesting regular chili consumption helps your body control insulin levels after eating, benefiting overweight people or diabetics. The chili reduces the insulin needed to lower blood sugar after a meal by up to 60%.
            </p>
            <p className="mb-6">
              Study candidates on a high-chili diet had lower blood glucose levels than those on a bland diet. Study author Kiran Ahuja said, “Chili meals possibly result in lower C-peptide and insulin secretion and higher hepatic clearance of insulin, and the effect is larger if chili is eaten regularly.”
            </p>
            <p className="mb-6">
              Although scientists are still exploring why this happens, the study’s results are good news for overweight and diabetic individuals.
            </p>

            <h4 className="mb-3 text-lg font-bold text-[#d44c23]">Inflammation</h4>
            <p className="mb-6">
              Capsaicin, the substance that gives chilies their heat, contains neuropeptides linked to inflammation. Chili-related alterations in plasma proteins have been reported in patients with autoinflammatory diseases like rheumatoid arthritis.
            </p>

            <h4 className="mb-3 text-lg font-bold text-[#d44c23]">Congestion</h4>
            <p className="mb-6">
              If you eat a dish loaded with hot chilies, the capsaicin heat causes secretions — sweating and a runny nose — that help clear nasal passages.
            </p>

            <h4 className="mb-3 text-lg font-bold text-[#d44c23]">Prostate Cancer</h4>
            <p className="mb-6">
              A study published by Cancer Research in March 2006 concluded capsaicin helped stop the spread of prostate cancer by triggering cell suicide in prostate cancer cell lines. It also dramatically slowed tumor development in mouse models. The effective dosage equates roughly to about 5 habanero peppers a week for an average man.
            </p>

            <h4 className="mb-3 text-lg font-bold text-[#d44c23]">Stomach Cancer</h4>
            <p>
              Opinions vary greatly on whether chilies help prevent or cause stomach cancer, making this an ongoing topic of research.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}

export default HealthBenfits;

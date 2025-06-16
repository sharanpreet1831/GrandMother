import SubscriptionForm from './SubscriptionForm';
import ContactInfo from './ContactInfo';

function SubscriptionSection() {
  return (
    <section
      className="py-12 px-4 sm:py-16 sm:px-8 bg-gradient-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#222] text-white"
      aria-label="Newsletter Subscription and Contact"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-12 items-stretch">
        {/* Subscription Form */}
        <div className="flex-1 mb-10 md:mb-0">
          <SubscriptionForm />
        </div>
        {/* Contact Info */}
        <div className="flex-1">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

export default SubscriptionSection;
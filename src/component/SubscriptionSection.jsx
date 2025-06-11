import SubscriptionForm from './SubscriptionForm';
import ContactInfo from './ContactInfo';

function SubscriptionSection() {
  return (
    <section
      className="py-16 px-4 bg-gradient-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#222] text-white"
      aria-label="Newsletter Subscription and Contact"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-16 items-start">
        <div className="flex-1">
          <SubscriptionForm />
        </div>
        <div className="flex-1">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

export default SubscriptionSection;

import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section
      className="bg-gray-100 dark:bg-[#2c2c3f] py-20 px-4 text-center md:text-left"
      id="contact"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}

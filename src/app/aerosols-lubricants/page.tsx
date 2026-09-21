import Header from '@/components/common/Header';
import AerosolsLubricants from '@/components/common/AerosolsLubricants';
import Footer from '@/components/common/Footer';
import ContactForm from '@/components/common/ContactForm';

export default function AerosolsLubricantsPage() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-8">
        <Header />
      </div>

      <AerosolsLubricants />

      <div className="container mx-auto px-4 md:px-8">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

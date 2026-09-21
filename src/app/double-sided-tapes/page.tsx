import Header from '@/components/common/Header';
import DoubleSidedTapes from '@/components/common/DoubleSidedTapes';
import Footer from '@/components/common/Footer';
import ContactForm from '@/components/common/ContactForm';

export default function DoubleSidedTapesPage() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-8">
        <Header />
      </div>

      <DoubleSidedTapes />

      <div className="container mx-auto px-4 md:px-8">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

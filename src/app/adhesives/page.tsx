import Header from '@/components/common/Header';
import Adhesives from '@/components/common/Adhesives';
import Footer from '@/components/common/Footer';
import ContactForm from '@/components/common/ContactForm';

export default function AdhesivesPage() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-8">
        <Header />
      </div>

      <Adhesives />

      <div className="container mx-auto px-4 md:px-8">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

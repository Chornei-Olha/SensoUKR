import Header from '@/components/common/Header';
import ReinforcedTapes from '@/components/common/ReinforcedTapes';
import Footer from '@/components/common/Footer';
import ContactForm from '@/components/common/ContactForm';

export default function ReinforcedTapesPage() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-8">
        <Header />
      </div>

      <ReinforcedTapes />

      <div className="container mx-auto px-4 md:px-8">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

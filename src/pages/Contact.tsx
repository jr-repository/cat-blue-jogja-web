
import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import { ASSETS } from '@/assets';

const Contact = () => {
  return (
    <div>
      <Hero 
        title="Hubungi Kami" 
        subtitle="Dapatkan penawaran gratis atau konsultasikan proyek Anda dengan tim kami"
        bgImage={ASSETS.gallery.exterior2}
        minHeight="min-h-[60vh]"
        overlay="bg-gradient-to-r from-dimasBlue-900/80 to-dimasBlue-600/70"
      />
      
      <ContactSection />
    </div>
  );
};

export default Contact;

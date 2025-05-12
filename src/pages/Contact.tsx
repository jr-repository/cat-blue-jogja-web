
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
      />
      
      <ContactSection />
    </div>
  );
};

export default Contact;

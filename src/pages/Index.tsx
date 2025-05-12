
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div>
      <Hero overlay="bg-gradient-to-r from-dimasBlue-900/80 to-dimasBlue-600/70" />
      <ServicesSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
};

export default Index;

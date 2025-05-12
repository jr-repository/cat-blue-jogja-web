
import { ASSETS } from '../assets';
import { Button } from '@/components/ui/button';

interface HeroProps {
  title?: string;
  subtitle?: string;
  bgImage?: string;
  minHeight?: string;
  overlay?: string;
}

const Hero = ({
  title = "Jasa Pengecatan Profesional",
  subtitle = "Layanan pengecatan berkualitas tinggi untuk rumah, gedung, dan area komersial",
  bgImage = ASSETS.hero,
  minHeight = "min-h-[90vh]",
  overlay = "bg-dimasBlue-900/60"
}: HeroProps) => {
  return (
    <section 
      className={`relative ${minHeight} flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay with gradient */}
      <div className={`absolute inset-0 ${overlay}`}></div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 md:px-0 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button
            size="lg" 
            className="bg-dimasBlue-500 hover:bg-dimasBlue-600 text-white"
            asChild
          >
            <a href="/contact">Dapatkan Penawaran Gratis</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 backdrop-blur-sm border-white hover:bg-white/20 text-white"
            asChild
          >
            <a href="/gallery">Lihat Portfolio Kami</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

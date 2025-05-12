
import Hero from '@/components/Hero';
import GallerySection from '@/components/GallerySection';
import { ASSETS } from '@/assets';

const Gallery = () => {
  return (
    <div>
      <Hero 
        title="Galeri Proyek" 
        subtitle="Lihat hasil pekerjaan kami yang telah diselesaikan dengan kualitas terbaik"
        bgImage={ASSETS.gallery.interior1}
        minHeight="min-h-[60vh]"
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dimasGray-800 mb-4">
              Portfolio Pekerjaan
            </h2>
            <p className="text-lg text-dimasGray-400 max-w-3xl mx-auto">
              Kami bangga dengan setiap proyek yang kami kerjakan. Berikut adalah beberapa contoh 
              hasil karya tim Dimas Paint Jogja.
            </p>
          </div>
        </div>
      </section>
      
      <GallerySection />
      
      {/* Featured Project */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dimasGray-800 mb-4">
              Proyek Unggulan
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video mb-8">
              <video 
                controls 
                className="w-full h-full rounded-lg shadow-lg"
                poster={ASSETS.gallery.commercial1}
              >
                <source src={ASSETS.videos.process} type="video/mp4" />
                Browser Anda tidak mendukung tag video.
              </video>
            </div>
            
            <h3 className="text-2xl font-semibold text-dimasGray-800 mb-2">
              Renovasi Hotel Pesona Jogja
            </h3>
            <p className="text-dimasGray-400 mb-4">
              Proyek pengecatan ulang seluruh interior dan eksterior Hotel Pesona Jogja. 
              Tim Dimas Paint menyelesaikan proyek ini dalam waktu 3 minggu dengan hasil yang sangat memuaskan.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <img 
                src={ASSETS.gallery.commercial1} 
                alt="Hotel Pesona Sebelum" 
                className="w-full h-auto rounded-lg"
              />
              <img 
                src={ASSETS.gallery.commercial2} 
                alt="Hotel Pesona Sesudah" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

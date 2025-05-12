
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import { ASSETS } from '@/assets';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Services = () => {
  // Process steps
  const processSteps = [
    {
      number: 1,
      title: 'Konsultasi',
      description: 'Diskusi awal untuk memahami kebutuhan dan ekspektasi Anda.'
    },
    {
      number: 2,
      title: 'Inspeksi',
      description: 'Pemeriksaan area yang akan dicat untuk menentukan persiapan dan solusi terbaik.'
    },
    {
      number: 3,
      title: 'Penawaran',
      description: 'Memberikan estimasi biaya yang transparan dan terperinci.'
    },
    {
      number: 4,
      title: 'Persiapan',
      description: 'Membersihkan, memperbaiki, dan melindungi area yang tidak akan dicat.'
    },
    {
      number: 5,
      title: 'Pengecatan',
      description: 'Proses pengecatan dengan teknik profesional dan material berkualitas.'
    },
    {
      number: 6,
      title: 'Pengecekan',
      description: 'Inspeksi kualitas dan detail untuk memastikan hasil yang sempurna.'
    }
  ];

  const benefits = [
    'Tim profesional berpengalaman',
    'Bahan cat berkualitas tinggi',
    'Estimasi harga transparan',
    'Tepat waktu dalam pengerjaan',
    'Garansi pekerjaan',
    'Layanan konsultasi warna gratis',
    'Persiapan dan pembersihan lokasi',
    'Penanganan proyek yang rapi'
  ];

  return (
    <div>
      <Hero 
        title="Layanan Pengecatan Profesional" 
        subtitle="Solusi pengecatan berkualitas untuk berbagai kebutuhan interior dan eksterior"
        bgImage={ASSETS.gallery.commercial1}
        minHeight="min-h-[60vh]"
      />
      
      <ServicesSection />
      
      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dimasGray-800 mb-4">
              Proses Kerja Kami
            </h2>
            <p className="text-lg text-dimasGray-400 max-w-3xl mx-auto">
              Metodologi sistematis yang kami terapkan untuk memastikan hasil terbaik
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div 
                key={step.number}
                className="border border-gray-100 rounded-lg p-6 relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-dimasBlue-500 text-white flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-2 text-dimasGray-800">
                  {step.title}
                </h3>
                <p className="text-dimasGray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-dimasBlue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Keunggulan Jasa Kami
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Mengapa pelanggan memilih Dimas Paint Jogja untuk kebutuhan pengecatan mereka
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Check className="h-6 w-6 text-dimasBlue-400" />
                </div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              size="lg"
              className="bg-dimasBlue-500 hover:bg-dimasBlue-600 text-white"
              asChild
            >
              <a href="/contact">Dapatkan Penawaran Sekarang</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

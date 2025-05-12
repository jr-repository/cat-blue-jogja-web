
import { Card } from '@/components/ui/card';
import { PaintBucket, Home, Building, Factory, Brush, Shield } from 'lucide-react';

const services = [
  {
    title: 'Pengecatan Interior',
    description: 'Warnai ruangan Anda dengan sentuhan profesional, mencakup dinding, plafon, dan bagian interior lainnya.',
    icon: <Home className="h-12 w-12 text-dimasBlue-500" />
  },
  {
    title: 'Pengecatan Eksterior',
    description: 'Lindungi dan percantik tampilan luar bangunan Anda dengan cat berkualitas yang tahan terhadap cuaca.',
    icon: <Building className="h-12 w-12 text-dimasBlue-500" />
  },
  {
    title: 'Pengecatan Komersial',
    description: 'Solusi pengecatan untuk area komersial, perkantoran, dan bisnis dengan gangguan minimal.',
    icon: <Factory className="h-12 w-12 text-dimasBlue-500" />
  },
  {
    title: 'Dekoratif & Tekstur',
    description: 'Teknik pengecatan khusus untuk menciptakan tampilan dan tekstur unik sesuai keinginan.',
    icon: <Brush className="h-12 w-12 text-dimasBlue-500" />
  },
  {
    title: 'Cat Anti Air',
    description: 'Perlindungan waterproofing untuk area yang rentan terhadap kelembaban dan kebocoran.',
    icon: <Shield className="h-12 w-12 text-dimasBlue-500" />
  },
  {
    title: 'Persiapan & Perbaikan',
    description: 'Persiapan permukaan, perbaikan retak, dan pengisian lubang sebelum proses pengecatan.',
    icon: <PaintBucket className="h-12 w-12 text-dimasBlue-500" />
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dimasGray-800 mb-4">Layanan Kami</h2>
          <p className="text-lg text-dimasGray-400 max-w-3xl mx-auto">
            Kami menawarkan berbagai layanan pengecatan profesional untuk memenuhi kebutuhan Anda
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-dimasGray-800">{service.title}</h3>
                <p className="text-dimasGray-400">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

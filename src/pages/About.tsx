
import Hero from '@/components/Hero';
import { ASSETS } from '@/assets';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About = () => {
  // Team members
  const team = [
    {
      name: 'Dimas Wijaya',
      position: 'Pendiri & Kepala Tim',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Memiliki pengalaman lebih dari 15 tahun dalam industri pengecatan.'
    },
    {
      name: 'Anita Sari',
      position: 'Konsultan Warna',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Ahli dalam kombinasi warna dan desain interior.'
    },
    {
      name: 'Budi Santoso',
      position: 'Kepala Teknisi',
      image: 'https://randomuser.me/api/portraits/men/62.jpg',
      bio: 'Spesialis dalam teknik pengecatan khusus dan tekstur.'
    },
    {
      name: 'Lisa Permata',
      position: 'Manajer Proyek',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      bio: 'Memastikan setiap proyek berjalan tepat waktu dan sesuai standar kualitas.'
    }
  ];

  return (
    <div>
      <Hero 
        title="Tentang Dimas Paint Jogja" 
        subtitle="Mengenal lebih dekat tim dan visi kami dalam memberikan layanan pengecatan terbaik"
        bgImage={ASSETS.gallery.exterior1}
        minHeight="min-h-[60vh]"
      />
      
      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dimasGray-800 mb-6">
                Sejarah Dimas Paint Jogja
              </h2>
              <p className="text-lg text-dimasGray-400 mb-6">
                Didirikan pada tahun 2010, Dimas Paint Jogja bermula dari kecintaan terhadap seni dan keindahan. 
                Berawal dari proyek-proyek kecil, kami terus berkembang menjadi penyedia jasa pengecatan profesional 
                yang dipercaya oleh banyak pelanggan di Yogyakarta dan sekitarnya.
              </p>
              <p className="text-lg text-dimasGray-400 mb-6">
                Dengan tim yang berpengalaman dan material berkualitas tinggi, kami berkomitmen untuk memberikan hasil 
                terbaik bagi setiap pelanggan kami, mulai dari proyek rumah tinggal hingga bangunan komersial.
              </p>
              <div className="mt-8">
                <Button 
                  size="lg"
                  className="bg-dimasBlue-500 hover:bg-dimasBlue-600 text-white"
                  asChild
                >
                  <a href="/contact">Hubungi Kami</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-dimasBlue-100 rounded-lg"></div>
              <img 
                src={ASSETS.gallery.commercial1} 
                alt="Dimas Paint Team" 
                className="rounded-lg shadow-lg relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section className="py-16 md:py-20 bg-dimasBlue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dimasGray-800 mb-4">
              Visi & Misi
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-0 shadow-md">
              <h3 className="text-2xl font-semibold text-dimasGray-800 mb-4 flex items-center">
                <span className="text-dimasBlue-500 mr-2">✦</span> 
                Visi Kami
              </h3>
              <p className="text-dimasGray-400">
                Menjadi penyedia jasa pengecatan terdepan di Yogyakarta dengan kualitas pekerjaan terbaik 
                dan kepuasan pelanggan yang tinggi. Kami berusaha untuk menghadirkan warna dan keindahan 
                dalam setiap proyek yang kami kerjakan.
              </p>
            </Card>
            
            <Card className="p-8 border-0 shadow-md">
              <h3 className="text-2xl font-semibold text-dimasGray-800 mb-4 flex items-center">
                <span className="text-dimasBlue-500 mr-2">✦</span> 
                Misi Kami
              </h3>
              <ul className="space-y-2 text-dimasGray-400">
                <li>• Memberikan layanan pengecatan berkualitas tinggi</li>
                <li>• Menggunakan material ramah lingkungan</li>
                <li>• Menyelesaikan pekerjaan tepat waktu</li>
                <li>• Memberikan harga yang transparan dan kompetitif</li>
                <li>• Mengutamakan kepuasan pelanggan</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dimasGray-800 mb-4">
              Tim Kami
            </h2>
            <p className="text-lg text-dimasGray-400 max-w-3xl mx-auto">
              Orang-orang berbakat yang membuat visi kami menjadi kenyataan
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-md">
                <div className="aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-xl text-dimasGray-800">{member.name}</h3>
                  <p className="text-dimasBlue-500 mb-2">{member.position}</p>
                  <p className="text-dimasGray-400 text-sm">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
    </div>
  );
};

export default About;

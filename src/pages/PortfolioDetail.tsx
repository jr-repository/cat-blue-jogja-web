
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import { ASSETS } from '@/assets';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Portfolio project data
const portfolioProjects = {
  "hotel-pesona": {
    title: "Renovasi Hotel Pesona Jogja",
    subtitle: "Pengecatan ulang seluruh interior dan eksterior dengan sentuhan modern",
    description: "Proyek pengecatan ulang seluruh interior dan eksterior Hotel Pesona Jogja. Tim Dimas Paint menyelesaikan proyek ini dalam waktu 3 minggu dengan hasil yang sangat memuaskan. Pemilik hotel mempercayakan penuh renovasi visual kepada tim profesional kami.",
    challenge: "Hotel tetap beroperasi selama renovasi berlangsung sehingga membutuhkan perencanaan yang matang dan eksekusi yang rapi untuk meminimalkan gangguan pada tamu hotel.",
    solution: "Tim kami bekerja dengan jadwal bertahap dan menggunakan cat cepat kering dengan kandungan VOC rendah untuk meminimalkan bau dan waktu pengeringan. Pembagian area kerja juga dilakukan secara sistematis.",
    mainImage: ASSETS.gallery.commercial1,
    heroImage: ASSETS.gallery.commercial2,
    beforeAfterImages: [
      {
        before: ASSETS.gallery.commercial1,
        after: ASSETS.gallery.commercial2,
        title: "Lobby Utama"
      }
    ],
    galleryImages: [
      ASSETS.gallery.commercial1,
      ASSETS.gallery.commercial2
    ],
    videoUrl: ASSETS.videos.process,
    videoPoster: ASSETS.gallery.commercial1,
    category: "commercial",
  },
  "rumah-modern": {
    title: "Pengecatan Interior Rumah Modern",
    subtitle: "Transformasi interior dengan palette warna netral dan sentuhan elegan",
    description: "Proyek renovasi interior rumah seluas 300m² di kawasan elit Jogja. Klien menginginkan nuansa modern dengan warna-warna netral yang menenangkan untuk menciptakan suasana yang nyaman dan elegan.",
    challenge: "Tekstur dinding yang tidak rata dan beberapa area yang sulit dijangkau membutuhkan penanganan khusus.",
    solution: "Kami melakukan persiapan permukaan yang menyeluruh dengan teknik dempul khusus untuk menghasilkan permukaan yang halus. Penggunaan alat khusus untuk area yang sulit dijangkau memastikan hasil pengecatan yang merata.",
    mainImage: ASSETS.gallery.interior1,
    heroImage: ASSETS.gallery.interior1,
    beforeAfterImages: [
      {
        before: ASSETS.gallery.interior1,
        after: ASSETS.gallery.interior2,
        title: "Ruang Keluarga"
      }
    ],
    galleryImages: [
      ASSETS.gallery.interior1,
      ASSETS.gallery.interior2
    ],
    videoUrl: ASSETS.videos.testimonial,
    videoPoster: ASSETS.gallery.interior1,
    category: "interior",
  },
  "teras-villa": {
    title: "Restorasi Eksterior Villa Pantai",
    subtitle: "Perlindungan eksterior tahan cuaca dengan estetika premium",
    description: "Proyek restorasi eksterior villa yang berlokasi di tepi pantai. Bangunan mengalami kerusakan cat akibat paparan sinar matahari dan air laut yang intens.",
    challenge: "Lokasi di tepi pantai dengan tingkat korosi tinggi membutuhkan solusi pengecatan yang tahan terhadap air garam dan sinar UV yang kuat.",
    solution: "Penggunaan cat khusus eksterior dengan daya tahan tinggi terhadap sinar UV dan air garam. Lapisan pelindung tambahan diterapkan untuk memberikan perlindungan maksimal terhadap kondisi lingkungan yang ekstrem.",
    mainImage: ASSETS.gallery.exterior1,
    heroImage: ASSETS.gallery.exterior2,
    beforeAfterImages: [
      {
        before: ASSETS.gallery.exterior1,
        after: ASSETS.gallery.exterior2,
        title: "Area Teras"
      }
    ],
    galleryImages: [
      ASSETS.gallery.exterior1,
      ASSETS.gallery.exterior2
    ],
    videoUrl: ASSETS.videos.process,
    videoPoster: ASSETS.gallery.exterior1,
    category: "exterior",
  }
};

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (id && portfolioProjects[id as keyof typeof portfolioProjects]) {
      setProject(portfolioProjects[id as keyof typeof portfolioProjects]);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-2xl font-bold text-center">Proyek tidak ditemukan</h1>
      </div>
    );
  }

  return (
    <div>
      <Hero 
        title={project.title} 
        subtitle={project.subtitle}
        bgImage={project.heroImage}
        minHeight="min-h-[50vh]"
        overlay="bg-gradient-to-r from-dimasBlue-900/80 to-dimasBlue-700/70"
      />
      
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 max-w-2xl mx-auto mb-8">
              <TabsTrigger value="overview">Ringkasan</TabsTrigger>
              <TabsTrigger value="before-after">Sebelum & Sesudah</TabsTrigger>
              <TabsTrigger value="gallery">Galeri</TabsTrigger>
              <TabsTrigger value="video">Video</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-8">
                    <img 
                      src={project.mainImage} 
                      alt={project.title} 
                      className="w-full h-auto rounded-lg shadow-lg mb-6"
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-dimasGray-800 mb-3">Deskripsi Proyek</h2>
                      <p className="text-dimasGray-400">{project.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold text-dimasGray-800 mb-2">Tantangan</h3>
                        <p className="text-dimasGray-400">{project.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-dimasGray-800 mb-2">Solusi</h3>
                        <p className="text-dimasGray-400">{project.solution}</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <h3 className="text-xl font-semibold text-dimasGray-800 mb-2">Info Proyek</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-sm font-medium text-dimasGray-400">Kategori</p>
                          <p className="capitalize">{project.category}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-dimasGray-400">Durasi</p>
                          <p>3 minggu</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-dimasGray-400">Lokasi</p>
                          <p>Yogyakarta</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-dimasGray-400">Tahun</p>
                          <p>2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="before-after" className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-dimasGray-800 mb-6 text-center">Sebelum & Sesudah</h2>
                  
                  <div className="space-y-12">
                    {project.beforeAfterImages.map((item: any, index: number) => (
                      <div key={index} className="space-y-6">
                        <h3 className="text-xl font-semibold text-dimasGray-800 text-center">{item.title}</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-center mb-2 font-medium">Sebelum</p>
                            <img 
                              src={item.before} 
                              alt={`${item.title} Sebelum`} 
                              className="w-full h-auto rounded-lg shadow"
                            />
                          </div>
                          
                          <div>
                            <p className="text-center mb-2 font-medium">Sesudah</p>
                            <img 
                              src={item.after} 
                              alt={`${item.title} Sesudah`} 
                              className="w-full h-auto rounded-lg shadow"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="gallery" className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-dimasGray-800 mb-6 text-center">Galeri Proyek</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.galleryImages.map((image: string, index: number) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`Galeri ${index + 1}`} 
                        className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="video" className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-dimasGray-800 mb-6 text-center">Video Proyek</h2>
                  
                  <div className="aspect-video mb-4">
                    <video 
                      controls 
                      className="w-full h-full rounded-lg shadow-lg"
                      poster={project.videoPoster}
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                      Browser Anda tidak mendukung tag video.
                    </video>
                  </div>
                  
                  <p className="text-center text-dimasGray-400">
                    Video proses pengecatan dan hasil akhir proyek {project.title}.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <section className="py-12 bg-dimasBlue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-dimasGray-800 mb-8">
            Proyek Lainnya
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(portfolioProjects)
              .filter(([key, _]) => key !== id)
              .slice(0, 3)
              .map(([key, item]: [string, any]) => (
                <Card 
                  key={key} 
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                  onClick={() => window.location.href = `/portfolio/${key}`}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={item.mainImage} 
                      alt={item.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-dimasGray-800">{item.title}</h3>
                    <p className="text-sm text-dimasGray-400 mt-1">{item.subtitle}</p>
                  </div>
                </Card>
              ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/gallery" 
              className="inline-flex items-center text-dimasBlue-500 hover:text-dimasBlue-700"
            >
              Lihat Semua Proyek 
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetail;


import { useState } from 'react';
import { ASSETS } from '../assets';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const galleryItems = {
  interior: [
    { 
      id: 1, 
      title: 'Interior Rumah Modern',
      image: ASSETS.gallery.interior1, 
      description: 'Pengecatan interior dengan warna netral untuk rumah modern' 
    },
    { 
      id: 2, 
      title: 'Ruang Keluarga',
      image: ASSETS.gallery.interior2, 
      description: 'Kombinasi warna hangat untuk ruang keluarga' 
    },
  ],
  exterior: [
    { 
      id: 3, 
      title: 'Fasad Rumah',
      image: ASSETS.gallery.exterior1, 
      description: 'Pengecatan ulang fasad rumah dengan aksen biru' 
    },
    { 
      id: 4, 
      title: 'Area Teras',
      image: ASSETS.gallery.exterior2, 
      description: 'Perlindungan eksterior tahan cuaca' 
    },
  ],
  commercial: [
    { 
      id: 5, 
      title: 'Kantor Modern',
      image: ASSETS.gallery.commercial1, 
      description: 'Desain interior kantor dengan warna korporat' 
    },
    { 
      id: 6, 
      title: 'Area Komersial',
      image: ASSETS.gallery.commercial2, 
      description: 'Pengecatan area komersial dengan tema minimalis' 
    },
  ],
};

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<null | {
    image: string;
    title: string;
    description: string;
  }>(null);

  return (
    <section className="py-16 md:py-24 bg-dimasBlue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dimasGray-800 mb-4">Galeri Pekerjaan</h2>
          <p className="text-lg text-dimasGray-400 max-w-3xl mx-auto">
            Lihat hasil pekerjaan kami yang telah diselesaikan dengan kualitas terbaik
          </p>
        </div>

        <Tabs defaultValue="interior" className="w-full">
          <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="interior">Interior</TabsTrigger>
            <TabsTrigger value="exterior">Eksterior</TabsTrigger>
            <TabsTrigger value="commercial">Komersial</TabsTrigger>
          </TabsList>
          
          {Object.entries(galleryItems).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <Card 
                    key={item.id} 
                    className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => setSelectedImage({
                      image: item.image,
                      title: item.title,
                      description: item.description
                    })}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-dimasGray-800">{item.title}</h3>
                      <p className="text-sm text-dimasGray-400 mt-1">{item.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Video Showcase */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Video Proses Pengecatan</h3>
          <div className="max-w-3xl mx-auto aspect-video">
            <video 
              controls 
              className="w-full h-full rounded-lg shadow-lg"
              poster={ASSETS.gallery.interior1}
            >
              <source src={ASSETS.videos.process} type="video/mp4" />
              Browser Anda tidak mendukung tag video.
            </video>
          </div>
        </div>
      </div>

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-auto rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-dimasGray-800">{selectedImage.title}</h3>
              <p className="text-dimasGray-400 mt-1">{selectedImage.description}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;

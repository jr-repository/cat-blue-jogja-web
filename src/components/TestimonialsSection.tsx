
import { ASSETS } from '../assets';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Budi Santoso',
    position: 'Pemilik Rumah',
    text: 'Saya sangat puas dengan hasil pengecatan rumah saya. Tim Dimas Paint bekerja dengan profesional dan rapi. Hasilnya sangat memuaskan!',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Siti Rahmawati',
    position: 'Manager Hotel',
    text: 'Kami menggunakan jasa Dimas Paint untuk renovasi hotel kami. Mereka menyelesaikan pekerjaan tepat waktu dengan kualitas yang sangat baik.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Agus Widodo',
    position: 'Arsitek',
    text: 'Sebagai arsitek, saya sangat memperhatikan detail. Tim Dimas Paint memahami visi saya dan mengeksekusinya dengan sempurna. Sangat direkomendasikan!',
    image: 'https://randomuser.me/api/portraits/men/62.jpg'
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dimasGray-800 mb-4">Testimoni Pelanggan</h2>
          <p className="text-lg text-dimasGray-400 max-w-3xl mx-auto">
            Dengarkan pengalaman mereka yang telah menggunakan jasa pengecatan kami
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dimasGray-800">{testimonial.name}</h4>
                    <p className="text-sm text-dimasGray-400">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-dimasGray-800 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonial */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Video Testimoni</h3>
          <div className="aspect-video">
            <video 
              controls 
              className="w-full h-full rounded-lg shadow-lg"
              poster={testimonials[0].image}
            >
              <source src={ASSETS.videos.testimonial} type="video/mp4" />
              Browser Anda tidak mendukung tag video.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

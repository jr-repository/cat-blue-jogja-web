
import { useState, useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi kami. Kami akan segera merespons.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };
  
  // Initialize the map
  useEffect(() => {
    // This is a placeholder for a real map implementation
    // In a real application, you would use a mapping library like Google Maps, Mapbox, etc.
    const initMap = () => {
      if (mapContainerRef.current) {
        // In a real implementation, you'd initialize your map here
        const mapPlaceholder = document.createElement('div');
        mapPlaceholder.className = 'bg-dimasBlue-200 h-full w-full flex items-center justify-center';
        mapPlaceholder.innerHTML = `
          <div class="text-center">
            <p class="text-xl font-semibold">Lokasi Dimas Paint Jogja</p>
            <p>Jl. Kaliurang Km 10, Yogyakarta</p>
            <p class="mt-2 text-sm">(Peta akan dimuat di sini)</p>
          </div>
        `;
        mapContainerRef.current.innerHTML = '';
        mapContainerRef.current.appendChild(mapPlaceholder);
      }
    };

    initMap();
    
    // Cleanup function if needed
    return () => {
      // Cleanup code here
    };
  }, []);

  return (
    <section id="contact" className="py-16 md:py-24 bg-dimasBlue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dimasGray-800 mb-4">Hubungi Kami</h2>
          <p className="text-lg text-dimasGray-400 max-w-3xl mx-auto">
            Dapatkan estimasi gratis atau konsultasikan proyek Anda dengan tim kami
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-6 md:p-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-dimasGray-800">Kirim Pesan</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <Input
                    placeholder="Nama Lengkap"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="No. Telepon"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Pesan Anda"
                    className="min-h-[120px]"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Button 
                    type="submit" 
                    className="w-full bg-dimasBlue-500 hover:bg-dimasBlue-600 text-white"
                  >
                    Kirim Pesan
                  </Button>
                </div>
              </div>
            </form>
          </Card>

          {/* Contact Info and Map */}
          <div className="flex flex-col h-full">
            {/* Contact Information */}
            <Card className="p-6 md:p-8 shadow-md mb-6">
              <h3 className="text-2xl font-semibold mb-6 text-dimasGray-800">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-dimasBlue-500 mr-3 flex-shrink-0" />
                  <p className="text-dimasGray-800">
                    Jl. Kaliurang Km 10, Yogyakarta<br />
                    Indonesia, 55584
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-dimasBlue-500 mr-3 flex-shrink-0" />
                  <a href="tel:+6281573635143" className="text-dimasBlue-500 hover:underline">
                    +62 815-7363-5143
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-dimasBlue-500 mr-3 flex-shrink-0" />
                  <a href="mailto:contact@dimaspaint.com" className="text-dimasBlue-500 hover:underline">
                    contact@dimaspaint.com
                  </a>
                </div>
                <div className="pt-4">
                  <a
                    href="https://wa.me/6281573635143?text=Halo,%20saya%20tertarik%20dengan%20jasa%20pengecatan%20Anda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-5 h-5 mr-2"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    Hubungi via WhatsApp
                  </a>
                </div>
              </div>
            </Card>

            {/* Map */}
            <Card className="flex-1 overflow-hidden shadow-md">
              <div ref={mapContainerRef} className="w-full h-full min-h-[250px]"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

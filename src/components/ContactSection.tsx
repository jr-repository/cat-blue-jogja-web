
import { useState, useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
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

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-dimasBlue-50 to-dimasBlue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dimasGray-800 mb-4">Hubungi Kami</h2>
          <p className="text-lg text-dimasGray-400 max-w-3xl mx-auto">
            Dapatkan estimasi gratis atau konsultasikan proyek Anda dengan tim kami
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-6 md:p-8 shadow-md bg-white">
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
                    className="border-dimasBlue-300 focus:border-dimasBlue-500"
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
                    className="border-dimasBlue-300 focus:border-dimasBlue-500"
                  />
                </div>
                <div>
                  <Input
                    placeholder="No. Telepon"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-dimasBlue-300 focus:border-dimasBlue-500"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Pesan Anda"
                    className="min-h-[120px] border-dimasBlue-300 focus:border-dimasBlue-500"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-dimasBlue-500 to-dimasBlue-600 hover:from-dimasBlue-600 hover:to-dimasBlue-700 text-white"
                  >
                    Kirim Pesan
                  </Button>
                </div>
              </div>
            </form>
          </Card>

          {/* Contact Info and Map */}
          <div className="flex flex-col h-full space-y-6">
            {/* Contact Information */}
            <Card className="p-6 md:p-8 shadow-md bg-white flex-shrink-0">
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

            {/* Google Maps */}
            <Card className="flex-grow shadow-md overflow-hidden rounded-lg">
              <div className="w-full h-full min-h-[300px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63251.74923415177!2d110.3912162!3d-7.7649566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58f99013c989%3A0x2a96db25b8ff4333!2sMonumen%20Yogya%20Kembali!5e0!3m2!1sid!2sid!4v1747083641115!5m2!1sid!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: "300px" }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Dimas Paint Jogja"
                  className="w-full h-full"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

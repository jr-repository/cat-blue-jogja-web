
import { Link } from 'react-router-dom';
import { ASSETS } from '../assets';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dimasBlue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <img src={ASSETS.logo} alt="Dimas Paint Jogja" className="h-10 mr-2" />
              <span className="font-bold text-xl">Dimas Paint</span>
            </div>
            <p className="text-gray-300 mb-4">
              Jasa pengecatan profesional dengan kualitas terbaik untuk proyek interior, eksterior, dan komersial.
            </p>
            <div>
              <a
                href="https://wa.me/6281573635143?text=Halo,%20saya%20tertarik%20dengan%20jasa%20pengecatan%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-dimasBlue-300"
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
                +62 815-7363-5143
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-dimasBlue-300 transition-colors">
                  Pengecatan Interior
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-dimasBlue-300 transition-colors">
                  Pengecatan Eksterior
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-dimasBlue-300 transition-colors">
                  Pengecatan Komersial
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-dimasBlue-300 transition-colors">
                  Dekoratif & Tekstur
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-dimasBlue-300 transition-colors">
                  Cat Anti Air
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-dimasBlue-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-dimasBlue-300 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-dimasBlue-300 transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-dimasBlue-300 transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak</h3>
            <address className="not-italic">
              <p className="mb-2">Jl. Kaliurang Km 10, Yogyakarta</p>
              <p className="mb-2">Indonesia, 55584</p>
              <p className="mb-2">
                <a href="mailto:contact@dimaspaint.com" className="text-gray-300 hover:text-dimasBlue-300 transition-colors">
                  contact@dimaspaint.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Dimas Paint Jogja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

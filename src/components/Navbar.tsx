
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ASSETS } from '../assets';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Layanan', path: '/services' },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Kontak', path: '/contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);
  // Close mobile menu when clicking a link
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={ASSETS.logo} 
              alt="Dimas Paint Jogja" 
              className="h-10 md:h-12" 
            />
            <span className={`ml-2 font-bold text-xl ${scrolled ? 'text-dimasBlue-700' : 'text-white'}`}>
              Dimas Paint
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className={`font-medium hover:text-dimasBlue-500 transition-colors ${scrolled ? 'text-dimasGray-800' : 'text-white'}`}
              >
                {item.name}
              </Link>
            ))}
            <WhatsappButton scrolled={scrolled} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className={`p-2 rounded-md ${scrolled ? 'text-dimasBlue-700' : 'text-white'}`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`
          fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-dimasGray-800">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex flex-col px-4 pt-2 pb-8 space-y-4">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              onClick={closeMenu}
              className="font-medium text-dimasGray-800 hover:text-dimasBlue-500 py-2 transition-colors border-b border-gray-100"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4">
            <WhatsappButton scrolled={true} />
          </div>
        </div>
      </div>
    </nav>
  );
};

// Whatsapp Button Component
const WhatsappButton = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <a
      href="https://wa.me/6281573635143?text=Halo,%20saya%20tertarik%20dengan%20jasa%20pengecatan%20Anda"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center px-4 py-2 rounded-full font-medium transition-all
        ${scrolled 
          ? 'bg-dimasBlue-500 text-white hover:bg-dimasBlue-600' 
          : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
        }
      `}
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
      Hubungi Kami
    </a>
  );
};

export default Navbar;

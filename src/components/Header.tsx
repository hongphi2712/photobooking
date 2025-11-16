import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-teal-600 tracking-wider hover:text-teal-700 transition-colors">
            GreenStudio
          </Link>
          
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex absolute lg:relative top-20 lg:top-0 left-0 right-0 bg-white lg:bg-transparent shadow-lg lg:shadow-none`}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 p-6 lg:p-0">
              <Link to="/" className="py-3 lg:py-0 text-sm font-semibold uppercase hover:text-teal-600 transition-colors border-b lg:border-0 border-teal-100">
                Trang chủ
              </Link>
              <Link to="/prices" className="py-3 lg:py-0 text-sm font-semibold uppercase hover:text-teal-600 transition-colors border-b lg:border-0 border-teal-100">
                Bảng giá
              </Link>
              <Link to="/album" className="py-3 lg:py-0 text-sm font-semibold uppercase hover:text-teal-600 transition-colors border-b lg:border-0 border-teal-100">
                Album
              </Link>
              <Link to="/photobook" className="py-3 lg:py-0 text-sm font-semibold uppercase hover:text-teal-600 transition-colors border-b lg:border-0 border-teal-100">
                Photobook
              </Link>
              <Link to="/rental" className="py-3 lg:py-0 text-sm font-semibold uppercase hover:text-teal-600 transition-colors border-b lg:border-0 border-teal-100">
                Cho thuê
              </Link>
              <Link to="/wedding" className="py-3 lg:py-0 text-sm font-semibold uppercase hover:text-teal-600 transition-colors border-b lg:border-0 border-teal-100">
                Cưới
              </Link>
              <Link to="/booking" className="py-3 lg:py-0 text-sm font-semibold uppercase hover:text-teal-600 transition-colors border-b lg:border-0 border-teal-100">
                Đặt lịch
              </Link>
              <Link to="/contact" className="py-3 lg:py-0 text-sm font-semibold uppercase hover:text-teal-600 transition-colors">
                Liên hệ
              </Link>
            </div>
          </nav>

          <a href="tel:0968313986" className="hidden lg:flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors">
            <Phone className="w-5 h-5" />
            <span>0968 313 986</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

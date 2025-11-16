import { Facebook, Instagram, Youtube, Music, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-wider">GreenStudio</h3>
            <p className="text-teal-50 mb-6 text-sm leading-relaxed">
              Chụp ảnh kỷ yếu chuyên nghiệp, lưu giữ những khoảnh khắc đẹp nhất của tuổi trẻ.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110" aria-label="TikTok">
                <Music className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Dịch Vụ</h4>
            <ul className="space-y-2 text-sm text-teal-50">
              <li><a href="#prices" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Chụp ảnh kỷ yếu</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Cho thuê trang phục</a></li>
              <li><a href="#photobook" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Photobook</a></li>
              <li><a href="#album" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Album ảnh</a></li>
              <li><a href="#services-wedding" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Dịch vụ cưới</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Liên Hệ</h4>
            <ul className="space-y-3 text-sm text-teal-50">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>123 Đường ABC, Quận XYZ, Hà Nội</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:0968313986" className="hover:text-white transition-colors">0968 313 986</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:greenstudio@gmail.com" className="hover:text-white transition-colors break-all">greenstudio@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <span>🕒</span>
                <span>08:00 - 20:00 (Hàng ngày)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Theo Dõi Chúng Tôi</h4>
            <p className="text-teal-50 text-sm mb-4 leading-relaxed">
              Cập nhật những bộ ảnh mới nhất và ưu đãi đặc biệt
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email của bạn" 
                className="flex-1 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white placeholder-teal-100 focus:outline-none focus:bg-white/30 text-sm"
              />
              <button className="px-5 py-2 bg-white text-teal-600 rounded-full font-semibold hover:bg-teal-50 transition-colors text-sm whitespace-nowrap">
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-teal-50">
          <p>&copy; {currentYear} GreenStudio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            <span className="opacity-50">|</span>
            <a href="#terms" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

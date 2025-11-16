import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-pink-100/50 to-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-pink-400 mb-6 tracking-widest drop-shadow-lg animate-fade-in">
          LIFE STUDIO
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Chụp Ảnh Kỷ Yếu Chuyên Nghiệp
        </p>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Lưu giữ khoảnh khắc tuổi trẻ đẹp nhất của bạn cùng Life Studio
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('album')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-pink-400 text-white rounded-full font-semibold hover:bg-pink-500 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl"
          >
            Xem Album
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-pink-500 border-2 border-pink-400 rounded-full font-semibold hover:bg-pink-50 transform hover:-translate-y-1 transition-all"
          >
            Đặt Lịch Ngay
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
        <ArrowDown className="w-5 h-5" />
      </div>
    </section>
  );
};

export default Hero;

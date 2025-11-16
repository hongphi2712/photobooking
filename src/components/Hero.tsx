import { ArrowDown, Camera, Users, Award, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-teal-100/50 to-white">

      {/* Noise rất nhẹ để nền không bị trống */}
      <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMyIvPjwvc3ZnPg==')",
        }}
      ></div>

      {/* Light Beam để tạo chiều sâu */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-teal-200/20 mix-blend-overlay pointer-events-none"></div>

      {/* Blur blobs gốc */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Blur blobs thêm để đỡ trống */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-teal-100/40 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-teal-200/30 rounded-full blur-2xl animate-pulse-slow delay-500"></div>
      
      {/* Leaf Decor Left */}
      <div className="absolute top-1/4 left-6 w-32 opacity-20 pointer-events-none select-none">
        <svg 
          viewBox="0 0 64 64" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path 
            d="M12 52C12 34 30 12 52 12C52 34 30 52 12 52Z" 
            fill="#0d9488" 
            fillOpacity="0.35"
          />
        </svg>
      </div>

      {/* Leaf Decor Right */}
      <div className="absolute bottom-1/4 right-6 w-28 opacity-20 pointer-events-none select-none rotate-45">
        <svg 
          viewBox="0 0 64 64" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path 
            d="M12 52C12 34 30 12 52 12C52 34 30 52 12 52Z" 
            fill="#14b8a6" 
            fillOpacity="0.3"
          />
        </svg>
      </div>

      {/* Floating Icons - Decorative Elements */}
      <div className="absolute top-20 right-20 animate-float opacity-10">
        <div className="w-16 h-16 bg-teal-500/10 backdrop-blur-sm rounded-2xl flex items-center justify-center rotate-12 shadow-lg">
          <Camera className="w-8 h-8 text-teal-600" />
        </div>
      </div>

      <div className="absolute top-40 left-32 animate-float-delayed opacity-15">
        <div className="w-14 h-14 bg-teal-400/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
          <Sparkles className="w-7 h-7 text-teal-500" />
        </div>
      </div>

      <div className="absolute bottom-32 right-40 animate-float opacity-10">
        <div className="w-12 h-12 bg-teal-600/10 backdrop-blur-sm rounded-xl flex items-center justify-center -rotate-12 shadow-lg">
          <Award className="w-6 h-6 text-teal-600" />
        </div>
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-3 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#0d9488 1px, transparent 1px), linear-gradient(90deg, #0d9488 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      ></div>

      {/* Stats Cards - Modern Touch */}
      <div className="absolute bottom-20 left-8 bg-white/60 backdrop-blur-md rounded-2xl p-4 shadow-xl hidden lg:block opacity-20 hover:opacity-80 transition-opacity duration-300">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-2xl font-bold text-teal-700">5000+</div>
            <div className="text-xs text-gray-600">Khách hàng</div>
          </div>
        </div>
      </div>

      {/* Nội dung */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-teal-700 mb-6 tracking-widest drop-shadow-lg animate-fade-in">
          GreenStudio
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Chụp Ảnh Kỷ Yếu Chuyên Nghiệp
        </p>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Lưu giữ khoảnh khắc tuổi trẻ đẹp nhất của bạn cùng GreenStudio
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => document.getElementById('album')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl"
          >
            Xem Album
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-teal-600 border-2 border-teal-600 rounded-full font-semibold hover:bg-teal-50 transform hover:-translate-y-1 transition-all"
          >
            Đặt Lịch Ngay
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
        <ArrowDown className="w-5 h-5" />
      </div>
    </section>
  );
};

export default Hero;

import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Heart, Camera, Gift, Star } from 'lucide-react';
import { weddingPackages } from '../data/weddingPackages';

const WeddingPage = () => {
  const services = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Tư Vấn Concept',
      description: 'Đội ngũ chuyên nghiệp tư vấn concept phù hợp với phong cách của bạn'
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: 'Thiết Bị Hiện Đại',
      description: 'Máy ảnh, flycam và thiết bị lighting chuyên nghiệp'
    },
    {
      icon: <Gift className="w-12 h-12" />,
      title: 'Quà Tặng Đặc Biệt',
      description: 'Album ảnh, photobook và nhiều quà tặng ý nghĩa'
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: 'Chất Lượng Đảm Bảo',
      description: 'Cam kết chất lượng ảnh đẹp và dịch vụ tận tâm'
    }
  ];

  return (
    <>
      <SEO 
        title="Dịch Vụ Chụp Ảnh Cưới - LifeStudio"
        description="Dịch vụ chụp ảnh cưới chuyên nghiệp tại LifeStudio với các gói Basic, Standard và Premium. Lưu giữ khoảnh khắc đẹp nhất của bạn."
        keywords="chụp ảnh cưới, chụp ảnh cưới Hà Nội, gói chụp ảnh cưới"
        canonical="https://lifestudio.vn/wedding"
      />
      <Header />
      <main className="pt-20 min-h-screen">
       <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
  
  {/* Ảnh full màn */}
  <img 
    src="/480137105_632855469494294_1953322673443099027_n.jpg"
    className="absolute inset-0 w-full h-full object-cover object-top"
    alt="Wedding"
  />

  {/* Overlay sáng mịn */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

  <div className="relative z-10 text-center text-white px-4 drop-shadow-xl">
    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wide">
      DỊCH VỤ CƯỚI
    </h1>
    <p className="text-xl md:text-2xl mb-8 opacity-95">
      Lưu giữ những khoảnh khắc hạnh phúc nhất của bạn
    </p>

    <a href="/contact">
      <button className="px-10 py-4 bg-white text-teal-700 rounded-full font-bold text-lg shadow-md hover:bg-teal-50 transition-all transform hover:scale-105">
        Tư Vấn Miễn Phí
      </button>
    </a>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20">
    <span className="text-white text-sm font-semibold drop-shadow-lg">Cuộn xuống</span>
    <svg 
      className="w-6 h-6 text-white drop-shadow-lg" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      viewBox="0 0 24 24"
    >
      <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</section>





<section className="py-20 px-4 bg-white">
  <div className="max-w-7xl mx-auto">

    {/* Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        BẢNG GIÁ DỊCH VỤ CƯỚI
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
        Các gói dịch vụ chụp ảnh – quay phim cưới chuyên nghiệp, mang đến trải nghiệm 
        cao cấp và trọn vẹn cho ngày trọng đại.
      </p>
    </div>


    {/* Wedding Packages */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
      {weddingPackages.map(pkg => (
        <div 
          key={pkg.id} 
          className="bg-white rounded-3xl p-10 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-teal-700 text-center mb-4">
            {pkg.name}
          </h3>

          <div className="text-center mb-6 pb-6 border-b border-gray-200">
            <span className="text-4xl font-extrabold text-gray-900">
              {pkg.price}
            </span>
          </div>

          <ul className="space-y-3 mb-8">
            {pkg.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <svg 
                  className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>

          <a href="/booking">
            <button className="w-full py-4 bg-teal-600 text-white rounded-full font-bold hover:bg-teal-700 transition-all shadow-md hover:shadow-lg">
              Đặt Lịch Ngay
            </button>
          </a>
        </div>
      ))}
    </div>



    {/* Extra Services */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
      {services.map((service, index) => (
        <div 
          key={index} 
          className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100"
        >
          <div className="text-teal-600 flex justify-center mb-4">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>



    {/* Promotion Section */}
    <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-12 text-center text-white shadow-xl">
      <h3 className="text-3xl font-extrabold mb-3">
        Ưu Đãi Đặc Biệt
      </h3>
      <p className="text-xl mb-6 opacity-95">
        Giảm 20% cho khách hàng đặt lịch trong tháng này!
      </p>
      <a href="/contact">
        <button className="px-10 py-4 bg-white text-teal-700 rounded-full font-bold text-lg shadow-md hover:bg-teal-50 transition-all">
          Liên Hệ Ngay
        </button>
      </a>
    </div>

  </div>
</section>

      </main>
      <Footer />
    </>
  );
};

export default WeddingPage;

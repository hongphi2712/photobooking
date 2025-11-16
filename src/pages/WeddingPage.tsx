import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Heart, Camera, Gift, Star } from 'lucide-react';

const WeddingPage = () => {
  const weddingPackages = [
    {
      id: 1,
      name: 'GÓI CHỤP HÌNH CƯỚI',
      price: '15.000.000đ',
      features: [
        'Chụp 500 ảnh gốc, chỉnh 80 ảnh đẹp',
        '3 địa điểm chụp (Studio + Ngoại cảnh)',
        'Thời gian: 1 ngày đầy đủ',
        'Cho thuê 3 bộ trang phục cô dâu chú rể',
        'Make up chuyên nghiệp',
        'Album ảnh 30x40 (40 trang)',
        'Photobook 20x30',
        'File ảnh high resolution'
      ]
    },
    {
      id: 2,
      name: 'GÓI QUAY PHIM CƯỚI',
      price: '20.000.000đ',
      features: [
        'Quay phim fullday (Lễ vu quy + Đám cưới)',
        '2 máy quay 4K',
        'Flycam quay cảnh đẹp',
        'Highlight clip 10-15 phút',
        'Full video raw',
        'Chỉnh màu chuyên nghiệp',
        'Kèm DVD + USB sang trọng',
        'Bản quyền nhạc và hiệu ứng'
      ]
    },
    {
      id: 3,
      name: 'GÓI TRỌN GÓI VIP',
      price: '35.000.000đ',
      features: [
        'Chụp ảnh + Quay phim fullday',
        'Không giới hạn ảnh và video',
        'Studio + 5 địa điểm ngoại cảnh',
        'Cho thuê 5 bộ váy cưới cao cấp',
        'Make up & Hair chuyên nghiệp',
        'Album ảnh 40x60 + Photobook',
        'Highlight clip + Full video',
        'Trang trí backdrop tại nhà',
        'Tặng chụp ảnh gia đình'
      ]
    }
  ];

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
        title="Dịch Vụ Chụp Ảnh Cưới - Life Studio"
        description="Dịch vụ chụp ảnh cưới chuyên nghiệp tại Life Studio với các gói Basic, Standard và Premium. Lưu giữ khoảnh khắc đẹp nhất của bạn."
        keywords="chụp ảnh cưới, chụp ảnh cưới Hà Nội, gói chụp ảnh cưới"
        canonical="https://lifestudio.vn/wedding"
      />
      <Header />
      <main className="pt-20 min-h-screen">
        <section className="relative h-[60vh] bg-gradient-to-r from-pink-300 to-pink-400 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide">DỊCH VỤ CƯỚI</h1>
            <p className="text-xl md:text-2xl mb-8">Lưu giữ những khoảnh khắc hạnh phúc nhất của bạn</p>
            <button className="px-10 py-4 bg-white text-pink-500 rounded-full font-bold text-lg hover:bg-pink-50 transition-all transform hover:scale-105">
              Tư Vấn Miễn Phí
            </button>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">BẢNG GIÁ DỊCH VỤ CƯỚI</h2>
              <p className="text-gray-600 text-lg">Gói dịch vụ chụp ảnh và quay phim cưới chuyên nghiệp</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {weddingPackages.map(pkg => (
                <div key={pkg.id} className="bg-gradient-to-br from-pink-50 to-white border-2 border-pink-200 rounded-3xl p-8 hover:border-pink-400 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-pink-500 mb-4 text-center">{pkg.name}</h3>
                  <div className="text-center mb-6 pb-6 border-b-2 border-pink-100">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600">
                        <Heart className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5 fill-current" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-bold hover:shadow-lg transition-all">
                    Đặt Lịch Ngay
                  </button>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
                  <div className="text-pink-400 flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-pink-400 to-pink-500 rounded-3xl p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Ưu Đãi Đặc Biệt</h3>
              <p className="text-xl mb-6">Giảm 20% cho khách hàng đặt lịch trong tháng này!</p>
              <button className="px-10 py-4 bg-white text-pink-500 rounded-full font-bold text-lg hover:bg-pink-50 transition-all">
                Liên Hệ Ngay
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WeddingPage;

import { Heart } from 'lucide-react';

const Wedding = () => {
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

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-teal-50 to-white" id="wedding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-wide">
            DỊCH VỤ CHỤP CƯỚI
          </h2>
          <p className="text-gray-600 mb-6">Lưu giữ những khoảnh khắc hạnh phúc nhất của bạn</p>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {weddingPackages.map(pkg => (
            <div key={pkg.id} className="bg-gradient-to-br from-teal-50 to-white border-2 border-teal-300 rounded-3xl p-8 hover:border-teal-600 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-teal-700 mb-4 text-center">{pkg.name}</h3>
              <div className="text-center mb-6 pb-6 border-b-2 border-teal-100">
                <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600">
                    <Heart className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5 fill-current" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/wedding">
            <button className="px-10 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-full font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all">
              Xem Chi Tiết Dịch Vụ
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Wedding;

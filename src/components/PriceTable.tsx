import { Check, Star } from 'lucide-react';

interface PricePackage {
  id: string;
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const packages: PricePackage[] = [
  {
    id: '1',
    name: 'GÓI CƠ BẢN',
    price: '1.500.000đ',
    features: [
      'Chụp 50 ảnh gốc',
      'Chỉnh sửa 20 ảnh đẹp',
      '1 địa điểm chụp',
      'Thời gian: 2 giờ',
      'Trang phục tự mang',
      'File ảnh digital'
    ]
  },
  {
    id: '2',
    name: 'GÓI TIÊU CHUẨN',
    price: '2.500.000đ',
    features: [
      'Chụp 100 ảnh gốc',
      'Chỉnh sửa 40 ảnh đẹp',
      '2 địa điểm chụp',
      'Thời gian: 4 giờ',
      'Cho thuê 2 bộ trang phục',
      'File ảnh digital + In ảnh 10x15 (20 ảnh)',
      'Make up cơ bản'
    ],
    popular: true
  },
  {
    id: '3',
    name: 'GÓI VIP',
    price: '4.000.000đ',
    features: [
      'Chụp không giới hạn',
      'Chỉnh sửa 80 ảnh đẹp',
      '3 địa điểm chụp',
      'Thời gian: Cả ngày',
      'Cho thuê 4 bộ trang phục',
      'File ảnh digital + Album 20x30 (30 trang)',
      'Make up chuyên nghiệp',
      'Quay phim clip ngắn',
      'Tặng photobook'
    ]
  }
];

const PriceTable = () => {
  return (
    <section className="py-20 px-4 bg-white" id="prices">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-wide">
            BẢNG GIÁ CHỤP KỶ YẾU
          </h2>
          <p className="text-gray-600 mb-6">Chọn gói phù hợp với nhu cầu của bạn</p>
          <div className="w-20 h-1 bg-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map(pkg => (
            <div 
              key={pkg.id} 
              className={`relative bg-white border-2 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                pkg.popular 
                  ? 'border-pink-400 shadow-xl scale-105' 
                  : 'border-pink-100 hover:border-pink-300'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-400 text-white px-6 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  PHỔ BIẾN NHẤT
                </div>
              )}
              
              <div className="text-center mb-8 pb-8 border-b-2 border-pink-100">
                <h3 className="text-2xl font-bold text-pink-500 mb-4 tracking-wide">
                  {pkg.name}
                </h3>
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-bold text-gray-900">{pkg.price}</span>
                  <span className="text-gray-500 text-sm mt-2">/ Buổi chụp</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600">
                    <Check className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-bold transition-all ${
                pkg.popular
                  ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white hover:shadow-lg hover:-translate-y-1'
                  : 'bg-pink-50 text-pink-500 border-2 border-pink-400 hover:bg-pink-100'
              }`}>
                Đặt Lịch Ngay
              </button>
            </div>
          ))}
        </div>

        <div className="bg-pink-50 rounded-2xl p-8 border-l-4 border-pink-400">
          <p className="text-gray-600 text-sm mb-2">* Giá trên áp dụng cho nhóm từ 5-10 người</p>
          <p className="text-gray-600 text-sm mb-2">* Liên hệ để nhận báo giá chi tiết cho nhóm đông người</p>
          <p className="text-gray-600 text-sm">* Khuyến mãi đặc biệt cho khách hàng đặt sớm</p>
        </div>
      </div>
    </section>
  );
};

export default PriceTable;

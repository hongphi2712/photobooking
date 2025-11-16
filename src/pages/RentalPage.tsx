import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Shirt, Clock, DollarSign } from 'lucide-react';

const RentalPage = () => {
  const costumes = [
    {
      id: 1,
      title: 'Áo Dài Truyền Thống',
      price: '200.000đ/ngày',
      image: 'https://images.unsplash.com/photo-1583391733981-9c8e0cf87a0d?w=800',
      description: 'Áo dài Việt Nam, nhiều màu sắc và họa tiết đa dạng'
    },
    {
      id: 2,
      title: 'Vest Nam',
      price: '300.000đ/ngày',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800',
      description: 'Vest cao cấp, lịch sự và sang trọng'
    },
    {
      id: 3,
      title: 'Váy Dạ Hội',
      price: '400.000đ/ngày',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800',
      description: 'Váy dạ hội sang trọng, phù hợp concept sang trọng'
    },
    {
      id: 4,
      title: 'Đồ Đôi Vintage',
      price: '350.000đ/cặp',
      image: 'https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?w=800',
      description: 'Trang phục đôi phong cách vintage cổ điển'
    },
    {
      id: 5,
      title: 'Hanbok Hàn Quốc',
      price: '250.000đ/ngày',
      image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=800',
      description: 'Hanbok truyền thống Hàn Quốc đầy màu sắc'
    },
    {
      id: 6,
      title: 'Kimono Nhật Bản',
      price: '280.000đ/ngày',
      image: 'https://images.unsplash.com/photo-1583832707882-4ac857e6e2b3?w=800',
      description: 'Kimono Nhật Bản tinh tế và trang nhã'
    }
  ];

  return (
    <>
      <SEO 
        title="Cho Thuê Trang Phục Chụp Ảnh - Life Studio"
        description="Cho thuê trang phục chụp ảnh đa dạng: Hanbok, Kimono, Áo dài, Váy công chúa, Vest nam và nhiều trang phục khác tại Life Studio."
        keywords="cho thuê trang phục chụp ảnh, thuê hanbok, thuê kimono, thuê áo dài"
        canonical="https://lifestudio.vn/rental"
      />
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-pink-50 to-white">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-wide">
                CHO THUÊ TRANG PHỤC
              </h1>
              <p className="text-xl text-gray-600 mb-8">Đa dạng trang phục cho mọi concept chụp ảnh</p>
              <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {costumes.map(costume => (
                <div key={costume.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={costume.image} 
                      alt={costume.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-500/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{costume.title}</h3>
                    <p className="text-gray-600 mb-4">{costume.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-pink-500">{costume.price}</span>
                      <button className="px-6 py-2 bg-pink-400 text-white rounded-full font-semibold hover:bg-pink-500 transition-colors">
                        Thuê Ngay
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-md text-center">
                <Shirt className="w-16 h-16 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">200+ Trang Phục</h3>
                <p className="text-gray-600">Đa dạng phong cách từ truyền thống đến hiện đại</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md text-center">
                <Clock className="w-16 h-16 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Linh Hoạt Thời Gian</h3>
                <p className="text-gray-600">Thuê theo ngày hoặc theo buổi chụp</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md text-center">
                <DollarSign className="w-16 h-16 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Giá Ưu Đãi</h3>
                <p className="text-gray-600">Giảm giá khi thuê combo nhiều bộ</p>
              </div>
            </div>

            <div className="bg-pink-50 rounded-2xl p-8 border-l-4 border-pink-400">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Chính sách cho thuê:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Đặt cọc 50% giá trị trang phục khi thuê</li>
                <li>• Miễn phí giặt ủi và bảo quản trang phục</li>
                <li>• Hỗ trợ tư vấn chọn trang phục phù hợp với concept</li>
                <li>• Giảm 20% khi thuê kèm gói chụp ảnh</li>
                <li>• Giao nhận tận nơi trong nội thành Hà Nội</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RentalPage;

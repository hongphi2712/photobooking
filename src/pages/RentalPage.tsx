import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Shirt, Clock, DollarSign } from 'lucide-react';
import { costumes } from '../data/costumes';

const RentalPage = () => {

  return (
    <>
      <SEO 
        title="Cho Thuê Trang Phục Chụp Ảnh - GreenStudio"
        description="Cho thuê trang phục chụp ảnh đa dạng: Hanbok, Kimono, Áo dài, Váy công chúa, Vest nam và nhiều trang phục khác tại GreenStudio."
        keywords="cho thuê trang phục chụp ảnh, thuê hanbok, thuê kimono, thuê áo dài"
        canonical="https://greenstudio.vn/rental"
      />
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-teal-50 to-white">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-wide">
                CHO THUÊ TRANG PHỤC
              </h1>
              <p className="text-xl text-gray-600 mb-8">Đa dạng trang phục cho mọi concept chụp ảnh</p>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {costumes.map(costume => (
                <div key={costume.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-96 overflow-hidden">
                    <img 
                      src={costume.image} 
                      alt={costume.title}
                      className="w-full h-full object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{costume.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{costume.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-teal-600">{costume.price}</span>
                      <button className="px-6 py-2 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-colors">
                        Thuê Ngay
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-md text-center">
                <Shirt className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">200+ Trang Phục</h3>
                <p className="text-gray-600">Đa dạng phong cách từ truyền thống đến hiện đại</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md text-center">
                <Clock className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Linh Hoạt Thời Gian</h3>
                <p className="text-gray-600">Thuê theo ngày hoặc theo buổi chụp</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md text-center">
                <DollarSign className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Giá Ưu Đãi</h3>
                <p className="text-gray-600">Giảm giá khi thuê combo nhiều bộ</p>
              </div>
            </div>

            <div className="bg-teal-50 rounded-2xl p-8 border-l-4 border-teal-600">
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

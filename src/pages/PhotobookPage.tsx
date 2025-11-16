import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Book, Image, Star } from 'lucide-react';

const PhotobookPage = () => {
  const photobooks = [
    {
      id: 1,
      name: 'Photobook Classic',
      size: '20x30cm',
      pages: '20 trang',
      price: '500.000đ',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800',
      features: ['Bìa cứng cao cấp', 'Giấy ảnh chất lượng cao', 'In ảnh sắc nét', 'Thiết kế theo yêu cầu']
    },
    {
      id: 2,
      name: 'Photobook Premium',
      size: '25x35cm',
      pages: '30 trang',
      price: '800.000đ',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800',
      features: ['Bìa da cao cấp', 'Giấy ảnh Fuji Crystal', 'In offset chuyên nghiệp', 'Thiết kế độc quyền', 'Hộp đựng sang trọng'],
      popular: true
    },
    {
      id: 3,
      name: 'Photobook Luxury',
      size: '30x40cm',
      pages: '40 trang',
      price: '1.200.000đ',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
      features: ['Bìa da Ý cao cấp', 'Giấy ảnh Platinum', 'In offset công nghệ Nhật', 'Thiết kế 3D độc đáo', 'Hộp gỗ sang trọng', 'Tặng USB ảnh']
    }
  ];

  return (
    <>
      <SEO 
        title="In Photobook Kỷ Yếu Chất Lượng Cao - Life Studio"
        description="Dịch vụ in photobook kỷ yếu cao cấp tại Life Studio. Photobook Classic, Premium, Luxury với giá tốt nhất. Thiết kế độc quyền, in ảnh chất lượng cao."
        keywords="in photobook, photobook kỷ yếu, in ảnh kỷ yếu"
        canonical="https://lifestudio.vn/photobook"
      />
      <Header />
      <main className="pt-20 min-h-screen">
        <section className="relative h-[50vh] bg-gradient-to-r from-pink-300 to-pink-400 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 text-center text-white px-4">
            <Book className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">PHOTOBOOK</h1>
            <p className="text-xl md:text-2xl">Lưu giữ kỷ niệm trong cuốn sách ảnh đẹp nhất</p>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">BẢNG GIÁ PHOTOBOOK</h2>
              <p className="text-gray-600">Chọn photobook phù hợp với nhu cầu của bạn</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {photobooks.map(book => (
                <div 
                  key={book.id}
                  className={`bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    book.popular ? 'border-pink-400 shadow-xl scale-105' : 'border-pink-100'
                  }`}
                >
                  {book.popular && (
                    <div className="bg-pink-400 text-white text-center py-2 font-bold flex items-center justify-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      PHỔ BIẾN NHẤT
                    </div>
                  )}
                  <div className="h-64 overflow-hidden">
                    <img src={book.image} alt={book.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-pink-500 mb-2">{book.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span>📏 {book.size}</span>
                      <span>📄 {book.pages}</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-4">{book.price}</div>
                    <ul className="space-y-2 mb-6">
                      {book.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-3 bg-pink-400 text-white rounded-full font-bold hover:bg-pink-500 transition-colors">
                      Đặt Hàng Ngay
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-pink-50 rounded-2xl">
                <Image className="w-16 h-16 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">In Ảnh Chất Lượng Cao</h3>
                <p className="text-gray-600">Công nghệ in offset hiện đại, màu sắc sống động</p>
              </div>
              <div className="text-center p-8 bg-pink-50 rounded-2xl">
                <Book className="w-16 h-16 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Thiết Kế Độc Quyền</h3>
                <p className="text-gray-600">Đội ngũ designer chuyên nghiệp tư vấn và thiết kế</p>
              </div>
              <div className="text-center p-8 bg-pink-50 rounded-2xl">
                <Star className="w-16 h-16 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Bảo Hành Lâu Dài</h3>
                <p className="text-gray-600">Cam kết chất lượng, bảo hành 12 tháng</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PhotobookPage;

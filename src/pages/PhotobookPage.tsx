import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const PhotobookPage = () => {
  const photobooks = [
    {
      id: 1,
      name: 'Photobook Kỷ Yếu 1',
      image: 'https://greenstudio.vn/uploads/2128/images/photobook-ky-yeu-1.jpg'
    },
    {
      id: 2,
      name: 'Photobook Kỷ Yếu 2',
      image: 'https://greenstudio.vn/uploads/2128/images/photobook-ky-yeu-2.jpg'
    },
    {
      id: 3,
      name: 'Photobook Kỷ Yếu 3',
      image: 'https://greenstudio.vn/uploads/2128/images/photobook-ky-yeu-3.jpg'
    },
    {
      id: 4,
      name: 'Photobook Kỷ Yếu 4',
      image: 'https://greenstudio.vn/uploads/2128/images/photobook-ky-yeu-4.jpg'
    },
    {
      id: 5,
      name: 'Photobook Kỷ Yếu 5',
      image: 'https://greenstudio.vn/uploads/2128/images/photobook-ky-yeu-5.jpg'
    }
  ];

  return (
    <>
      <SEO 
        title="In Photobook Kỷ Yếu Chất Lượng Cao - GreenStudio"
        description="Dịch vụ in photobook kỷ yếu cao cấp tại GreenStudio. Bảng giá thiết kế in ấn photobook kỷ yếu đa dạng kích thước với giá tốt nhất."
        keywords="in photobook, photobook kỷ yếu, in ảnh kỷ yếu, bảng giá photobook"
        canonical="https://greenstudio.vn/photobook"
      />
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-teal-50 to-white">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-teal-50 to-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              PHOTOBOOK KỶ YẾU
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Photobook kỷ yếu in ấn chuyên nghiệp, lưu giữ những khoảnh khắc đẹp nhất của tuổi học trò. 
              GreenStudio cung cấp dịch vụ thiết kế và in photobook chất lượng cao với giá cả phải chăng.
            </p>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
        </section>

        {/* Pricing Table Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">BẢNG GIÁ PHOTOBOOK</h2>
              <p className="text-gray-600">Bảng giá thiết kế in ấn photobook kỷ yếu</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="https://greenstudio.vn/Uploads/2128/images/photobook/b%E1%BA%A3ng%20gi%C3%A1/bang-gia-photobook-ky-yeu.jpg"
                alt="Bảng giá photobook kỷ yếu"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Sample Photobooks */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">MẪU PHOTOBOOK</h2>
              <p className="text-gray-600">Tham khảo các mẫu photobook kỷ yếu đã thực hiện</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photobooks.map(book => (
                <div key={book.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-96 overflow-hidden bg-gray-100">
                    <img 
                      src={book.image} 
                      alt={book.name}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900">{book.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-teal-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">CÓ THỂ BẠN QUAN TÂM</h2>
            <p className="text-gray-600 mb-8">
              Đặt in photobook kỷ yếu cao cấp ngay hôm nay để lưu giữ những kỷ niệm đẹp nhất của tuổi học trò. 
              Đội ngũ thiết kế chuyên nghiệp, in ấn chất lượng cao, giao hàng nhanh chóng.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/booking">
                <button className="px-10 py-4 bg-teal-600 text-white rounded-full font-bold hover:bg-teal-700 transition-colors shadow-lg">
                  Đặt Hàng Ngay
                </button>
              </a>
              <a href="/contact">
                <button className="px-10 py-4 bg-white text-teal-600 border-2 border-teal-600 rounded-full font-bold hover:bg-teal-50 transition-colors shadow-lg">
                  Tư Vấn Miễn Phí
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

export default PhotobookPage;

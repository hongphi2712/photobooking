import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { packages } from '../data/packages';

const PricesPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Địa Điểm Nổi Tiếng Nhất Chụp Ảnh Kỷ Yếu Hạch Trình Tại Khoảnh Khắc Hoàn Mỹ',
      date: '25 tháng 01, 2025',
      views: '888 Lượt xem',
      image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600'
    },
    {
      id: 2,
      title: 'Những địa điểm chụp ảnh cực kỳ đẹp tại Hà Nội mà bạn không nên bỏ lỡ',
      date: '20 tháng 12, 2024',
      views: '992 Lượt xem',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600'
    },
    {
      id: 3,
      title: 'Kinh nghiệm chụp ảnh kỷ yếu của GreenStudio đẹp tuyệt vời và cực hài lòng',
      date: '15 tháng 11, 2024',
      views: '678 Lượt xem',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600'
    },
    {
      id: 4,
      title: 'Tạo sao nên lựa chọn ảnh kỷ yếu chụp ảnh kỷ yếu của GreenStudio?',
      date: '10 tháng 11, 2024',
      views: '543 Lượt xem',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600'
    }
  ];

  return (
    <>
      <SEO 
        title="Bảng Giá Chụp Ảnh Kỷ Yếu - GreenStudio"
        description="Bảng giá chụp ảnh kỷ yếu chi tiết tại GreenStudio. Gói concept, Hà Nội, cấp 1, cấp 2, cấp 3, sinh viên với nhiều ưu đãi hấp dẫn."
        keywords="bảng giá chụp ảnh kỷ yếu, giá chụp ảnh concept, giá chụp ảnh kỷ yếu Hà Nội"
        canonical="https://photobooking-delta.vercel.app/prices"
      />
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-24 px-4 bg-gradient-to-b from-teal-50/60 to-white overflow-hidden">
          {/* Lá decor góc trái */}
          <div className="absolute top-10 left-10 w-40 opacity-[0.12] pointer-events-none select-none">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 52C12 34 30 12 52 12C52 34 30 52 12 52Z"
                fill="#0d9488"
                fillOpacity="0.7"
              />
            </svg>
          </div>

          {/* Lá decor góc phải */}
          <div className="absolute bottom-20 right-10 w-48 rotate-45 opacity-[0.10] pointer-events-none select-none">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 52C12 34 30 12 52 12C52 34 30 52 12 52Z"
                fill="#14b8a6"
                fillOpacity="0.6"
              />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold text-teal-700 tracking-wide">
                KỶ YẾU HẾT Ý
              </h2>
              <h1 className="text-6xl md:text-7xl font-extrabold text-teal-800 mt-3">
                GIÁ HẾT LÒNG
              </h1>
              <div className="w-24 h-1.5 bg-teal-600 mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Banner */}
            <div className="relative mb-20 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://lifestudio.vn/Uploads/2128/images/%E1%BA%A2nh%20trang%20ch%E1%BB%A7/chup-anh-ky-yeu%20(2).jpg" 
                alt="Kỷ yếu"
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              <div className="absolute bottom-0 p-10 text-white">
                <h4 className="text-4xl md:text-6xl font-extrabold mb-3">
                  CHỈ TỪ <span className="text-teal-300">159K</span>
                </h4>
                <p className="text-xl md:text-2xl text-gray-200 mb-6">
                  Giá chụp ảnh kỷ yếu tốt nhất Hà Nội – ưu đãi cho nhóm đông
                </p>
              </div>
            </div>

            {/* Note Box */}
            <div className="bg-teal-50 rounded-2xl p-8 border-l-4 border-teal-600 shadow-sm mb-16">
              <p className="text-gray-700 text-sm mb-2">* Giá áp dụng cho nhóm 5–10 người</p>
              <p className="text-gray-700 text-sm mb-2">* Liên hệ để nhận báo giá chi tiết cho nhóm đông</p>
              <p className="text-gray-700 text-sm">* Ưu đãi đặc biệt cho khách đặt lịch sớm</p>
            </div>

            {/* Title */}
            <h2 className="text-center text-4xl md:text-5xl font-bold text-teal-800 mb-6 tracking-wide">
              BẢNG GIÁ CHỤP KỶ YẾU
            </h2>

            <p className="text-center text-gray-700 max-w-4xl mx-auto leading-relaxed mb-16">
              GreenStudio gửi đến quý khách hàng các combo chụp ảnh kỷ yếu chuyên nghiệp. 
              Với đội ngũ Ekip chuyên nghiệp, nhiệt tình, trách nhiệm với công việc, từ trang phục kỷ yếu,
              concept trang phục kỷ yếu, chụp ảnh kỷ yếu, phụ kiện, phương tiện di chuyển đến các dịch vụ
              như quay MV kỷ yếu, làm photobook... tất cả đều được GreenStudio làm bằng sự tận tâm, nhiệt huyết: uy tín làm đầu.
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {packages.map(pkg => (
                <div key={pkg.id} className="flex justify-center">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full md:w-[95%] rounded-xl shadow-md border hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Price Categories Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                TIN TỨC GreenStudio
              </h2>
              <p className="text-gray-600">Khám phá những tin tức mới cập GreenStudio</p>
              <div className="w-20 h-1 bg-teal-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Featured Post */}
              <div className="md:col-span-2 group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className="md:flex">
                  <div className="md:w-1/2 h-80 md:h-auto">
                    <img 
                      src={blogPosts[0].image} 
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                      {blogPosts[0].title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span>📅 {blogPosts[0].date}</span>
                      <span>👁️ {blogPosts[0].views}</span>
                    </div>
                    <button className="self-start px-6 py-2 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-colors">
                      Đọc thêm
                    </button>
                  </div>
                </div>
              </div>

              {/* Secondary Post */}
              <div className="md:col-span-2 group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className="md:flex">
                  <div className="md:w-1/2 h-80 md:h-auto">
                    <img 
                      src={blogPosts[1].image} 
                      alt={blogPosts[1].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                      {blogPosts[1].title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span>📅 {blogPosts[1].date}</span>
                      <span>👁️ {blogPosts[1].views}</span>
                    </div>
                    <button className="self-start px-6 py-2 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-colors">
                      Đọc thêm
                    </button>
                  </div>
                </div>
              </div>

              {/* Small Posts */}
              {blogPosts.slice(2).map(post => (
                <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group">
                  <div className="flex gap-4 p-4">
                    <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-teal-600 transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex flex-col gap-1 text-xs text-gray-500">
                        <span>📅 {post.date}</span>
                        <span>👁️ {post.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="px-10 py-3 border-2 border-teal-600 text-teal-600 rounded-full font-semibold hover:bg-teal-50 transition-colors">
                Xem thêm
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PricesPage;

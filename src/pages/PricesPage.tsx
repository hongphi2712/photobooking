import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Eye } from 'lucide-react';

const PricesPage = () => {
  const priceCategories = [
    {
      id: 1,
      title: 'Bảng giá chụp ảnh concept',
      image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800',
      description: 'Phong cách nghệ thuật, độc đáo, sáng tạo cho mọi độ tuổi'
    },
    {
      id: 2,
      title: 'Bảng giá chụp ảnh kỷ yếu Hà Nội',
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800',
      description: 'Chuyên chụp ảnh kỷ yếu tại Hà Nội, đa dạng địa điểm'
    },
    {
      id: 3,
      title: 'Bảng giá chụp ảnh kỷ yếu cấp 1',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
      description: 'Gói chụp cho học sinh tiểu học, phong cách ngây thơ, đáng yêu'
    },
    {
      id: 4,
      title: 'Bảng giá chụp ảnh kỷ yếu cấp 2',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800',
      description: 'Dành cho học sinh THCS, tươi trẻ và năng động'
    },
    {
      id: 5,
      title: 'Bảng giá chụp ảnh kỷ yếu cấp 3',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
      description: 'Học sinh THPT, kỷ niệm tuổi 18 đáng nhớ'
    },
    {
      id: 6,
      title: 'Bảng giá chụp ảnh kỷ yếu sinh viên',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      description: 'Sinh viên đại học, phong cách trẻ trung, chuyên nghiệp'
    }
  ];

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
      title: 'Kinh nghiệm chụp ảnh kỷ yếu của Life Studio đẹp tuyệt vời và cực hài lòng',
      date: '15 tháng 11, 2024',
      views: '678 Lượt xem',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600'
    },
    {
      id: 4,
      title: 'Tạo sao nên lựa chọn ảnh kỷ yếu chụp ảnh kỷ yếu của Life Studio?',
      date: '10 tháng 11, 2024',
      views: '543 Lượt xem',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600'
    }
  ];

  return (
    <>
      <SEO 
        title="Bảng Giá Chụp Ảnh Kỷ Yếu - Life Studio"
        description="Bảng giá chụp ảnh kỷ yếu chi tiết tại Life Studio. Gói concept, Hà Nội, cấp 1, cấp 2, cấp 3, sinh viên với nhiều ưu đãi hấp dẫn."
        keywords="bảng giá chụp ảnh kỷ yếu, giá chụp ảnh concept, giá chụp ảnh kỷ yếu Hà Nội"
        canonical="https://lifestudio.vn/prices"
      />
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-50 to-white py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              CHỤP ẢNH KỶ YẾU - LIFE STUDIO
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Life Studio là địa chỉ uy tín được nhiều bạn sinh viên, học sinh tin tưởng để thực hiện những bức ảnh. Khi tới mọi giao hưởng, bạn sinh tồn trong giang từng bước phấn trấn ướng. 
              Yêu thương với nhau và gửi nghiên chung cũng nay, học chụp kỷ niệm, cho trương, sau tập cuộc. Life Studio sẽ lưu lại cho những điều đặc biệt gì
            </p>
          </div>
        </section>

        {/* Price Categories Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {priceCategories.map(category => (
                <div 
                  key={category.id} 
                  className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-sm text-white/90 mb-4">{category.description}</p>
                    <button className="flex items-center gap-2 text-sm font-semibold bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full transition-colors">
                      <Eye className="w-4 h-4" />
                      Xem thêm
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tin Tức Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-pink-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                TIN TỨC LIFESTUDIO
              </h2>
              <p className="text-gray-600">Khám phá những tin tức mới cập Life Studio</p>
              <div className="w-20 h-1 bg-pink-400 mx-auto mt-4 rounded-full"></div>
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-500 transition-colors">
                      {blogPosts[0].title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span>📅 {blogPosts[0].date}</span>
                      <span>👁️ {blogPosts[0].views}</span>
                    </div>
                    <button className="self-start px-6 py-2 bg-pink-400 text-white rounded-full font-semibold hover:bg-pink-500 transition-colors">
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-500 transition-colors">
                      {blogPosts[1].title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span>📅 {blogPosts[1].date}</span>
                      <span>👁️ {blogPosts[1].views}</span>
                    </div>
                    <button className="self-start px-6 py-2 bg-pink-400 text-white rounded-full font-semibold hover:bg-pink-500 transition-colors">
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
                      <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-pink-500 transition-colors">
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
              <button className="px-10 py-3 border-2 border-pink-400 text-pink-500 rounded-full font-semibold hover:bg-pink-50 transition-colors">
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

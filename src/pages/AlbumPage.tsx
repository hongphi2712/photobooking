import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import SEO from '../components/SEO';

const AlbumPage = () => {
  return (
    <>
      <SEO 
        title="Album Ảnh Kỷ Yếu Đẹp - Life Studio"
        description="Khám phá bộ sưu tập album ảnh kỷ yếu đa dạng và đẹp nhất tại Life Studio. Hàng trăm concept ảnh độc đáo cho bạn lựa chọn."
        keywords="album ảnh kỷ yếu, ảnh kỷ yếu đẹp, concept ảnh kỷ yếu"
        canonical="https://lifestudio.vn/album"
      />
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-white to-pink-50">
        <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ALBUM CHỤP ẢNH KỶ YẾU
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Khám phá bộ sưu tập album ảnh kỷ yếu đa dạng của Life Studio
            </p>
            <div className="w-24 h-1 bg-pink-400 mx-auto mt-6 rounded-full"></div>
          </div>
        </section>
        <Gallery />
      </main>
      <Footer />
    </>
  );
};

export default AlbumPage;

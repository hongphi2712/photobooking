import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import SEO from '../components/SEO';

const AlbumPage = () => {
  return (
    <>
      <SEO 
        title="Album Ảnh Kỷ Yếu Đẹp - GreenStudio"
        description="Khám phá bộ sưu tập album ảnh kỷ yếu đa dạng và đẹp nhất tại GreenStudio. Hàng trăm concept ảnh độc đáo cho bạn lựa chọn."
        keywords="album ảnh kỷ yếu, ảnh kỷ yếu đẹp, concept ảnh kỷ yếu"
        canonical="https://greenstudio.vn/album"
      />
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-white to-teal-50">
        <Gallery />
      </main>
      <Footer />
    </>
  );
};

export default AlbumPage;

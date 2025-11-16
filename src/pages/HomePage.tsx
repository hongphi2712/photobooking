import Header from '../components/Header';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import PriceTable from '../components/PriceTable';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const HomePage = () => {
  return (
    <>
      <SEO 
        title="Life Studio - Chụp Ảnh Kỷ Yếu Chuyên Nghiệp Tại Hà Nội"
        description="Life Studio chuyên chụp ảnh kỷ yếu, ảnh concept, cho thuê trang phục và dịch vụ cưới chuyên nghiệp tại Hà Nội. Giá tốt, chất lượng cao, đội ngũ nhiệt tình."
        keywords="chụp ảnh kỷ yếu, chụp ảnh kỷ yếu Hà Nội, ảnh kỷ yếu đẹp, life studio"
        canonical="https://lifestudio.vn/"
      />
      <Header />
      <Hero />
      <Gallery />
      <PriceTable />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;

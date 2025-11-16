import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Liên Hệ - GreenStudio Hà Nội"
        description="Liên hệ với GreenStudio để đặt lịch chụp ảnh kỷ yếu, cưới hỏi hoặc cho thuê trang phục. Hotline: 0968313986. Hà Nội."
        keywords="liên hệ GreenStudio, đặt lịch chụp ảnh, hotline chụp ảnh kỷ yếu"
        canonical="https://greenstudio.vn/contact"
      />
      <Header />
      <main className="pt-20 min-h-screen">
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;

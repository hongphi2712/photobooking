import { Helmet } from 'react-helmet-async';

interface SEOMetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOMetaTags = ({
  title = 'GreenStudio - Chụp Ảnh Kỷ Yếu Chuyên Nghiệp Tại Hà Nội',
  description = 'GreenStudio chuyên chụp ảnh kỷ yếu, ảnh concept, cho thuê trang phục và dịch vụ cưới chuyên nghiệp tại Hà Nội. Giá tốt, chất lượng cao, đội ngũ nhiệt tình.',
  keywords = 'chụp ảnh kỷ yếu, chụp ảnh kỷ yếu Hà Nội, chụp ảnh concept, cho thuê đồ kỷ yếu, chụp ảnh cưới, photobook kỷ yếu, GreenStudio',
  image = 'https://greenstudio.vn/chup-anh-ky-yeu (2).jpg',
  url = 'https://greenstudio.vn/',
  type = 'website'
}: SEOMetaTagsProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="vi_VN" />
      <meta property="og:site_name" content="GreenStudio" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEOMetaTags;

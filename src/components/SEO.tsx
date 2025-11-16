import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

const SEO = ({ 
  title = 'Life Studio - Chụp Ảnh Kỷ Yếu Chuyên Nghiệp Tại Hà Nội',
  description = 'Life Studio chuyên chụp ảnh kỷ yếu, ảnh concept, cho thuê trang phục và dịch vụ cưới chuyên nghiệp tại Hà Nội. Giá tốt, chất lượng cao, đội ngũ nhiệt tình.',
  keywords = 'chụp ảnh kỷ yếu, chụp ảnh kỷ yếu Hà Nội, ảnh kỷ yếu đẹp, life studio, chụp ảnh concept, cho thuê trang phục, dịch vụ cưới',
  ogImage = 'https://lifestudio.vn/images/og-image.jpg',
  ogUrl = 'https://lifestudio.vn',
  canonical
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Life Studio" />
      <meta property="og:locale" content="vi_VN" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Vietnamese" />
      <meta name="author" content="Life Studio" />
      <meta name="geo.region" content="VN-HN" />
      <meta name="geo.placename" content="Hà Nội" />
      
      {/* Mobile Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#ff80bf" />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Life Studio",
          "image": ogImage,
          "description": description,
          "@id": ogUrl,
          "url": ogUrl,
          "telephone": "0968313986",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Đường ABC, Quận XYZ",
            "addressLocality": "Hà Nội",
            "addressCountry": "VN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 21.0285,
            "longitude": 105.8542
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "08:00",
            "closes": "20:00"
          },
          "priceRange": "₫₫",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "250"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;

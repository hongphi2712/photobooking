# Life Studio - SEO & Technical Setup Guide

## Google Analytics Setup

### Bước 1: Tạo Google Analytics Account
1. Truy cập [Google Analytics](https://analytics.google.com/)
2. Tạo tài khoản và property mới
3. Lấy Measurement ID (dạng G-XXXXXXXXXX)

### Bước 2: Cập nhật Tracking ID
Thay thế `G-XXXXXXXXXX` trong các file sau:
- `index.html` (dòng 10, 15)
- `src/utils/analytics.ts` (dòng 4)

## Google Search Console Setup

### Bước 1: Xác thực website
1. Truy cập [Google Search Console](https://search.google.com/search-console)
2. Thêm property mới với URL: https://lifestudio.vn
3. Chọn phương thức xác thực: **HTML tag**
4. Copy mã xác thực

### Bước 2: Cập nhật Meta Tag
Thay thế `YOUR_VERIFICATION_CODE_HERE` trong `index.html` (dòng 20) bằng mã xác thực từ Google Search Console

### Bước 3: Submit Sitemap
1. Sau khi xác thực thành công
2. Vào **Sitemaps** trong Google Search Console
3. Thêm URL sitemap: `https://lifestudio.vn/sitemap.xml`

## Technical SEO Checklist

### ✅ Đã hoàn thành:
- [x] React Helmet Async cho dynamic meta tags
- [x] Sitemap.xml với tất cả pages
- [x] Robots.txt với rules hợp lý
- [x] Google Analytics tracking
- [x] SEO component cho mọi pages
- [x] Schema.org JSON-LD (LocalBusiness)
- [x] Open Graph meta tags (Facebook)
- [x] Twitter Card meta tags
- [x] Canonical URLs
- [x] Mobile-friendly meta tags
- [x] Language declaration (Vietnamese)
- [x] Theme color for mobile browsers

### 🔄 Cần làm sau khi deploy:
1. **Update Google Analytics ID**
   - File: `index.html`, `src/utils/analytics.ts`
   
2. **Update Google Search Console Verification**
   - File: `index.html`
   
3. **Update URLs in sitemap.xml**
   - Thay `https://lifestudio.vn` bằng domain thực tế
   
4. **Update URLs in SEO component**
   - File: `src/components/SEO.tsx`
   - Cập nhật các canonical URLs và ogUrl

5. **Update Business Information**
   - File: `src/components/SEO.tsx` (dòng 57-78)
   - Cập nhật địa chỉ, tọa độ, giờ mở cửa thực tế

## Performance Optimization

### Implemented:
- Preconnect to Google fonts and analytics
- DNS prefetch for analytics
- Lazy loading images (sử dụng native loading="lazy")
- Optimized bundle với Vite

### Recommendations:
1. Thêm lazy loading cho routes:
   ```tsx
   const HomePage = lazy(() => import('./pages/HomePage'));
   ```

2. Optimize images:
   - Sử dụng WebP format
   - Implement responsive images với srcset
   - Compress images trước khi deploy

3. Enable compression trên server:
   - Gzip/Brotli compression
   - Cache headers

## Monitoring & Analytics

### Google Analytics Events
Sử dụng `trackEvent` helper trong `src/utils/analytics.ts`:

```typescript
import { trackEvent } from '../utils/analytics';

// Ví dụ: Track form submission
trackEvent('Contact', 'submit', 'Contact Form');

// Track button clicks
trackEvent('Navigation', 'click', 'View Prices');
```

### Key Metrics to Monitor:
1. **Acquisition**: Nguồn traffic (Organic, Direct, Social)
2. **Behavior**: Pages/session, Bounce rate, Time on page
3. **Conversions**: Contact form submissions, Phone calls
4. **Page Speed**: Core Web Vitals (LCP, FID, CLS)

## Next Steps

1. **Deploy to production**: `vercel --prod`
2. **Update all placeholder IDs** với thông tin thực tế
3. **Submit sitemap** to Google Search Console
4. **Monitor errors** in Search Console
5. **Set up Google My Business** cho local SEO
6. **Create backlinks** từ các nguồn uy tín
7. **Optimize images** trên toàn bộ website
8. **Add structured data** cho các service cụ thể
9. **Create blog content** để improve SEO ranking
10. **Monitor Core Web Vitals** trong Google PageSpeed Insights

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TRACKING_ID = 'G-XXXXXXXXXX'; // Thay bằng Google Analytics ID của bạn

export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', TRACKING_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

export const initGA = () => {
  // Google Analytics Script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${TRACKING_ID}', {
      send_page_view: false
    });
  `;
  document.head.appendChild(script2);
};

// Event tracking helper
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

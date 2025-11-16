import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useGoogleAnalytics } from './utils/analytics';
import HomePage from './pages/HomePage';
import PricesPage from './pages/PricesPage';
import RentalPage from './pages/RentalPage';
import WeddingPage from './pages/WeddingPage';
import AlbumPage from './pages/AlbumPage';
import PhotobookPage from './pages/PhotobookPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function AppContent() {
  useGoogleAnalytics();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prices" element={<PricesPage />} />
      <Route path="/rental" element={<RentalPage />} />
      <Route path="/wedding" element={<WeddingPage />} />
      <Route path="/album" element={<AlbumPage />} />
      <Route path="/photobook" element={<PhotobookPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

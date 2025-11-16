import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase/config';
import { useGoogleAnalytics } from './utils/analytics';
import HomePage from './pages/HomePage';
import PricesPage from './pages/PricesPage';
import RentalPage from './pages/RentalPage';
import WeddingPage from './pages/WeddingPage';
import AlbumPage from './pages/AlbumPage';
import PhotobookPage from './pages/PhotobookPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import StaffPage from './pages/StaffPage';
import ConfirmedPage from './pages/ConfirmedPage';
import './App.css';

function AppContent() {
  useGoogleAnalytics();

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        await addDoc(collection(db, 'visitors'), {
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer || 'direct'
        });
      } catch (error) {
        console.error('Error tracking visitor:', error);
      }
    };
    trackVisitor();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prices" element={<PricesPage />} />
      <Route path="/rental" element={<RentalPage />} />
      <Route path="/wedding" element={<WeddingPage />} />
      <Route path="/album" element={<AlbumPage />} />
      <Route path="/photobook" element={<PhotobookPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/staff" element={<StaffPage />} />
      <Route path="/confirmed" element={<ConfirmedPage />} />
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

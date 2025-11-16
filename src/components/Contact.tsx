import { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'tu-van'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await addDoc(collection(db, 'bookings'), {
        ...formData,
        type: 'contact',
        createdAt: new Date().toISOString()
      });

      setSubmitMessage('Yêu cầu tư vấn đã được gửi! Chúng tôi sẽ liên hệ bạn sớm nhất.');
      setFormData({
        name: '',
        phone: '',
        service: 'tu-van'
      });
    } catch (error) {
      setSubmitMessage('Có lỗi xảy ra. Vui lòng thử lại sau.');
      console.error('Error adding document: ', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-teal-50 to-white" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-wide">
            LIÊN HỆ TƯ VẤN
          </h2>
          <p className="text-gray-600 mb-6">Để lại thông tin, chúng tôi sẽ tư vấn và giải đáp thắc mắc</p>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <MapPin className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Địa Chỉ</h3>
              <p className="text-gray-600 text-sm leading-relaxed">123 Đường ABC, Quận XYZ</p>
              <p className="text-gray-600 text-sm">Hà Nội, Việt Nam</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <Phone className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hotline</h3>
              <a href="tel:0968313986" className="text-teal-600 font-semibold hover:text-teal-700">0968 313 986</a>
              <p className="text-gray-600 text-sm">08:00 - 20:00 (Hàng ngày)</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <Mail className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:greenstudio@gmail.com" className="text-teal-600 font-semibold hover:text-teal-700 break-all">greenstudio@gmail.com</a>
              <p className="text-gray-600 text-sm">Phản hồi trong 24h</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <Clock className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Giờ Làm Việc</h3>
              <p className="text-gray-600 text-sm">Thứ 2 - Chủ Nhật</p>
              <p className="text-gray-600 text-sm">08:00 - 20:00</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Họ và tên *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-teal-100 rounded-xl focus:border-teal-600 focus:outline-none transition-colors"
                placeholder="Nhập họ và tên"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Số điện thoại *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-teal-100 rounded-xl focus:border-teal-600 focus:outline-none transition-colors"
                placeholder="Nhập số điện thoại"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                Dịch vụ cần tư vấn
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-teal-100 rounded-xl focus:border-teal-600 focus:outline-none transition-colors"
              >
                <option value="tu-van">Tư vấn chung</option>
                <option value="ky-yeu">Chụp ảnh kỷ yếu</option>
                <option value="concept">Chụp ảnh concept</option>
                <option value="cuoi">Dịch vụ cưới</option>
                <option value="cho-thue">Cho thuê trang phục</option>
                <option value="photobook">Photobook</option>
              </select>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? 'Đang gửi...' : 'Gửi Yêu Cầu Tư Vấn'}
            </button>

            {submitMessage && (
              <div className={`mt-6 p-4 rounded-xl text-center font-semibold ${
                submitMessage.includes('đã được gửi') 
                  ? 'bg-green-100 text-green-700 border-2 border-green-300' 
                  : 'bg-red-100 text-red-700 border-2 border-red-300'
              }`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

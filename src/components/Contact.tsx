import { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    package: 'basic',
    numberOfPeople: '',
    message: ''
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
        createdAt: new Date().toISOString()
      });

      setSubmitMessage('Đặt lịch thành công! Chúng tôi sẽ liên hệ bạn sớm nhất.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        package: 'basic',
        numberOfPeople: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('Có lỗi xảy ra. Vui lòng thử lại sau.');
      console.error('Error adding document: ', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-wide">
            ĐẶT LỊCH CHỤP
          </h2>
          <p className="text-gray-600 mb-6">Điền thông tin để chúng tôi liên hệ tư vấn</p>
          <div className="w-20 h-1 bg-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <MapPin className="w-10 h-10 text-pink-400 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Địa Chỉ</h3>
              <p className="text-gray-600 text-sm leading-relaxed">123 Đường ABC, Quận XYZ</p>
              <p className="text-gray-600 text-sm">Hà Nội, Việt Nam</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <Phone className="w-10 h-10 text-pink-400 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hotline</h3>
              <a href="tel:0968313986" className="text-pink-500 font-semibold hover:text-pink-600">0968 313 986</a>
              <p className="text-gray-600 text-sm">08:00 - 20:00 (Hàng ngày)</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <Mail className="w-10 h-10 text-pink-400 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:lifestudio@gmail.com" className="text-pink-500 font-semibold hover:text-pink-600 break-all">lifestudio@gmail.com</a>
              <p className="text-gray-600 text-sm">Phản hồi trong 24h</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <Clock className="w-10 h-10 text-pink-400 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Giờ Làm Việc</h3>
              <p className="text-gray-600 text-sm">Thứ 2 - Chủ Nhật</p>
              <p className="text-gray-600 text-sm">08:00 - 20:00</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
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
                  className="w-full px-4 py-3 border-2 border-pink-100 rounded-xl focus:border-pink-400 focus:outline-none transition-colors"
                  placeholder="Nhập họ và tên"
                />
              </div>

              <div>
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
                  className="w-full px-4 py-3 border-2 border-pink-100 rounded-xl focus:border-pink-400 focus:outline-none transition-colors"
                  placeholder="Nhập số điện thoại"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-pink-100 rounded-xl focus:border-pink-400 focus:outline-none transition-colors"
                  placeholder="Nhập email"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                  Ngày dự kiến
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-pink-100 rounded-xl focus:border-pink-400 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="package" className="block text-sm font-semibold text-gray-700 mb-2">
                  Gói chụp
                </label>
                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-pink-100 rounded-xl focus:border-pink-400 focus:outline-none transition-colors"
                >
                  <option value="basic">Gói Cơ Bản</option>
                  <option value="standard">Gói Tiêu Chuẩn</option>
                  <option value="vip">Gói VIP</option>
                  <option value="other">Tùy chỉnh khác</option>
                </select>
              </div>

              <div>
                <label htmlFor="numberOfPeople" className="block text-sm font-semibold text-gray-700 mb-2">
                  Số người
                </label>
                <input
                  type="number"
                  id="numberOfPeople"
                  name="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-pink-100 rounded-xl focus:border-pink-400 focus:outline-none transition-colors"
                  placeholder="Nhập số người"
                  min="1"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Ghi chú
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border-2 border-pink-100 rounded-xl focus:border-pink-400 focus:outline-none transition-colors resize-none"
                placeholder="Nhập yêu cầu đặc biệt của bạn..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? 'Đang gửi...' : 'Đặt Lịch Ngay'}
            </button>

            {submitMessage && (
              <div className={`mt-6 p-4 rounded-xl text-center font-semibold ${
                submitMessage.includes('thành công') 
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

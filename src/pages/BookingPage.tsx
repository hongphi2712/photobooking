import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Calendar, Clock, Users, Camera, Send } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    people: '',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'Chụp ảnh kỷ yếu',
    'Chụp ảnh concept',
    'Chụp ảnh cưới',
    'Quay phim cưới',
    'Cho thuê trang phục',
    'Dịch vụ khác'
  ];

  const timeSlots = [
    '8:00 - 10:00',
    '10:00 - 12:00',
    '13:00 - 15:00',
    '15:00 - 17:00',
    '17:00 - 19:00'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await addDoc(collection(db, 'bookings'), {
        ...formData,
        type: 'booking',
        createdAt: new Date().toISOString(),
        status: 'pending'
      });
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        people: '',
        location: '',
        message: ''
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Đặt Lịch Chụp Ảnh - GreenStudio"
        description="Đặt lịch chụp ảnh kỷ yếu, concept, cưới tại GreenStudio. Điền thông tin và chọn thời gian phù hợp với bạn."
        keywords="đặt lịch chụp ảnh, booking GreenStudio, đặt lịch chụp ảnh kỷ yếu"
        canonical="https://photobooking-delta.vercel.app/booking"
      />
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-teal-50 to-white">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                ĐẶT LỊCH CHỤP ẢNH
              </h1>
              <p className="text-gray-600 text-lg">
                Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất
              </p>
              <div className="w-20 h-1 bg-teal-600 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-teal-100 rounded-xl focus:border-teal-600 focus:outline-none transition-colors"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-teal-100 rounded-xl focus:border-teal-600 focus:outline-none transition-colors"
                      placeholder="0123456789"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-teal-100 rounded-xl focus:border-teal-600 focus:outline-none transition-colors"
                    placeholder="example@email.com"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Dịch vụ <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-teal-100 rounded-xl focus:border-teal-600 focus:outline-none transition-colors"
                  >
                    <option value="">Chọn dịch vụ</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Ngày chụp <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-teal-100 rounded-xl focus:border-teal-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Khung giờ <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-teal-100 rounded-xl focus:border-teal-600 focus:outline-none transition-colors"
                      >
                        <option value="">Chọn khung giờ</option>
                        {timeSlots.map(slot => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* People & Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Số người
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        name="people"
                        value={formData.people}
                        onChange={handleChange}
                        min="1"
                        className="w-full pl-12 pr-4 py-3 border-2 border-teal-100 rounded-xl focus:border-teal-600 focus:outline-none transition-colors"
                        placeholder="5"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Địa điểm mong muốn
                    </label>
                    <div className="relative">
                      <Camera className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border-2 border-teal-100 rounded-xl focus:border-teal-600 focus:outline-none transition-colors"
                        placeholder="Hồ Gươm, Ba Vì..."
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Ghi chú thêm
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-teal-100 rounded-xl focus:border-teal-600 focus:outline-none transition-colors resize-none"
                    placeholder="Yêu cầu đặc biệt, concept mong muốn..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Đang gửi...' : 'Đặt Lịch Ngay'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-xl text-center">
                    ✓ Đặt lịch thành công! Chúng tôi sẽ liên hệ lại sớm nhất.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border-2 border-red-500 text-red-700 px-6 py-4 rounded-xl text-center">
                    ✗ Có lỗi xảy ra. Vui lòng thử lại sau.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Hoặc liên hệ trực tiếp để được tư vấn và giải đáp thắc mắc:
              </p>
              <a 
                href="tel:0123456789" 
                className="text-3xl font-bold text-teal-600 hover:text-teal-700 transition-colors"
              >
                0123 456 789
              </a>
              <p className="mt-4 text-gray-600">
                Email: <a href="mailto:greenstudio@gmail.com" className="text-teal-600 hover:underline">greenstudio@gmail.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;

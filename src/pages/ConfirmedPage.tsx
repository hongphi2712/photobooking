import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { LogOut, Trash2, XCircle, Calendar, Phone, Mail, User, DollarSign, MapPin, Clock, CheckCircle2 } from 'lucide-react';

interface Booking {
  id: string;
  name: string;
  phone: string;
  email?: string;
  service: string;
  date?: string;
  time?: string;
  people?: string;
  location?: string;
  message?: string;
  type: string;
  status?: string;
  price?: string;
  actualPrice?: string;
  notes?: string;
  scheduleDate?: string;
  scheduleTime?: string;
  scheduleLocation?: string;
  createdAt: string;
}

const ConfirmedPage = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingActualPrice, setEditingActualPrice] = useState<string | null>(null);
  const [actualPriceValue, setActualPriceValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'admin' && userRole !== 'staff') {
      navigate('/login');
      return;
    }
    fetchConfirmedBookings();
  }, [navigate]);

  const fetchConfirmedBookings = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'bookings'));
      const data: Booking[] = [];
      querySnapshot.forEach((doc) => {
        const booking = { id: doc.id, ...doc.data() } as Booking;
        if (booking.status === 'confirmed') {
          data.push(booking);
        }
      });
      data.sort((a, b) => {
        if (a.scheduleDate && b.scheduleDate) {
          return new Date(a.scheduleDate).getTime() - new Date(b.scheduleDate).getTime();
        }
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveActualPrice = async (id: string) => {
    try {
      await updateDoc(doc(db, 'bookings', id), {
        actualPrice: actualPriceValue,
        updatedAt: new Date().toISOString()
      });
      setBookings(bookings.map(b => 
        b.id === id ? { ...b, actualPrice: actualPriceValue } : b
      ));
      setEditingActualPrice(null);
      setActualPriceValue('');
      alert('Cập nhật tiền thực nhận thành công!');
    } catch (error) {
      console.error('Error updating actual price:', error);
      alert('Có lỗi xảy ra!');
    }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, 'bookings', id), { status: newStatus });
      setBookings(bookings.filter(b => b.id !== id));
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Bạn có chắc muốn xóa đơn hàng này?')) {
      try {
        await deleteDoc(doc(db, 'bookings', id));
        setBookings(bookings.filter(b => b.id !== id));
      } catch (error) {
        console.error('Error deleting:', error);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('username');
    navigate('/login');
  };

  const userRole = localStorage.getItem('userRole');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-7 h-7" />
              ĐƠN HÀNG ĐÃ XÁC NHẬN
            </h1>
            <p className="text-sm text-green-100">GreenStudio - Lịch chụp đã xác nhận</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate(userRole === 'admin' ? '/admin' : '/staff')}
              className="flex items-center gap-2 px-4 py-2 bg-white text-green-700 rounded-lg hover:bg-green-50 transition-colors font-semibold"
            >
              Quay lại
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Đăng Xuất
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map(booking => (
              <div key={booking.id} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    <div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        ĐÃ XÁC NHẬN
                      </span>
                      {booking.type === 'booking' && (
                        <span className="ml-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                          ĐẶT LỊCH
                        </span>
                      )}
                    </div>
                  </div>
                  {userRole === 'admin' && (
                    <button
                      onClick={() => handleDelete(booking.id)}
                      className="text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* Schedule Information - Highlighted */}
                {booking.scheduleDate && (
                  <div className="mb-4 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border-2 border-purple-300">
                    <h4 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      LỊCH CHỤP
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-purple-900">
                        <Calendar className="w-4 h-4" />
                        <span className="font-semibold">
                          {new Date(booking.scheduleDate).toLocaleDateString('vi-VN', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-900">
                        <Clock className="w-4 h-4" />
                        <span className="font-semibold">{booking.scheduleTime}</span>
                      </div>
                      {booking.scheduleLocation && (
                        <div className="flex items-center gap-2 text-purple-900 md:col-span-2">
                          <MapPin className="w-4 h-4" />
                          <span className="font-semibold">{booking.scheduleLocation}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Customer Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="font-semibold">{booking.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <a href={`tel:${booking.phone}`} className="text-teal-600 hover:underline font-medium">{booking.phone}</a>
                  </div>
                  {booking.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <a href={`mailto:${booking.email}`} className="text-teal-600 hover:underline">{booking.email}</a>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Dịch vụ:</span>
                    <span className="font-medium">{booking.service}</span>
                  </div>
                  {booking.people && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Số người:</span>
                      <span>{booking.people}</span>
                    </div>
                  )}
                </div>

                {booking.message && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700"><strong>Ghi chú:</strong> {booking.message}</p>
                  </div>
                )}

                {/* Pricing Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {booking.price && (
                    <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                      <div className="flex items-center gap-2 mb-1">
                        <DollarSign className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">Giá chốt</span>
                      </div>
                      <p className="text-xl font-bold text-blue-700">{booking.price} VNĐ</p>
                      {booking.notes && (
                        <p className="text-xs text-blue-600 mt-1">{booking.notes}</p>
                      )}
                    </div>
                  )}

                  {/* Actual Price - Admin Only */}
                  {userRole === 'admin' && (
                    <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                      {editingActualPrice === booking.id ? (
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-green-700">Tiền thực nhận (VNĐ)</label>
                          <input
                            type="text"
                            value={actualPriceValue}
                            onChange={(e) => setActualPriceValue(e.target.value)}
                            placeholder="Ví dụ: 1.800.000"
                            className="w-full px-3 py-2 border-2 border-green-300 rounded-lg focus:border-green-600 focus:outline-none"
                          />
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleSaveActualPrice(booking.id)}
                              className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold"
                            >
                              Lưu
                            </button>
                            <button
                              onClick={() => {
                                setEditingActualPrice(null);
                                setActualPriceValue('');
                              }}
                              className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors text-sm font-semibold"
                            >
                              Hủy
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <DollarSign className="w-5 h-5 text-green-600" />
                              <span className="text-sm font-semibold text-green-700">Tiền thực nhận</span>
                            </div>
                            <button
                              onClick={() => {
                                setEditingActualPrice(booking.id);
                                setActualPriceValue(booking.actualPrice || '');
                              }}
                              className="text-xs px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                            >
                              {booking.actualPrice ? 'Sửa' : 'Thêm'}
                            </button>
                          </div>
                          <p className="text-xl font-bold text-green-700">
                            {booking.actualPrice ? `${booking.actualPrice} VNĐ` : 'Chưa nhập'}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-xs text-gray-500">
                    Đặt lúc: {new Date(booking.createdAt).toLocaleString('vi-VN')}
                  </span>
                  <button
                    onClick={() => handleStatusChange(booking.id, 'cancelled')}
                    className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                  >
                    <XCircle className="w-4 h-4" />
                    Hủy đơn
                  </button>
                </div>
              </div>
            ))}

            {bookings.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl">
                <CheckCircle2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Chưa có đơn hàng nào được xác nhận</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmedPage;

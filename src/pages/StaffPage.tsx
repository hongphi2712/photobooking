import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { LogOut, CheckCircle, XCircle, Calendar, Phone, Mail, User, DollarSign, Edit } from 'lucide-react';

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

const StaffPage = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'booking' | 'contact'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'confirmed' | 'cancelled'>('all');
  const [phoneSearch, setPhoneSearch] = useState('');
  const [editingPrice, setEditingPrice] = useState<string | null>(null);
  const [priceData, setPriceData] = useState({ price: '', notes: '' });
  const [editingSchedule, setEditingSchedule] = useState<string | null>(null);
  const [scheduleData, setScheduleData] = useState({ scheduleDate: '', scheduleTime: '', scheduleLocation: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'staff') {
      navigate('/login');
      return;
    }
    fetchBookings();
  }, [navigate]);

  const fetchBookings = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'bookings'));
      const data: Booking[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() } as Booking);
      });
      data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, 'bookings', id), { status: newStatus });
      setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleSavePrice = async (id: string) => {
    try {
      await updateDoc(doc(db, 'bookings', id), {
        price: priceData.price,
        notes: priceData.notes,
        updatedAt: new Date().toISOString(),
        updatedBy: localStorage.getItem('username') || 'staff'
      });
      setBookings(bookings.map(b => 
        b.id === id ? { ...b, price: priceData.price, notes: priceData.notes } : b
      ));
      setEditingPrice(null);
      setPriceData({ price: '', notes: '' });
      alert('Cập nhật giá thành công!');
    } catch (error) {
      console.error('Error updating price:', error);
      alert('Có lỗi xảy ra!');
    }
  };

  const handleEditPrice = (booking: Booking) => {
    setEditingPrice(booking.id);
    setPriceData({ 
      price: booking.price || '', 
      notes: booking.notes || '' 
    });
  };

  const handleSaveSchedule = async (id: string) => {
    try {
      await updateDoc(doc(db, 'bookings', id), {
        scheduleDate: scheduleData.scheduleDate,
        scheduleTime: scheduleData.scheduleTime,
        scheduleLocation: scheduleData.scheduleLocation,
        updatedAt: new Date().toISOString(),
        updatedBy: localStorage.getItem('username') || 'staff'
      });
      setBookings(bookings.map(b => 
        b.id === id ? { ...b, ...scheduleData } : b
      ));
      setEditingSchedule(null);
      setScheduleData({ scheduleDate: '', scheduleTime: '', scheduleLocation: '' });
      alert('Tạo lịch chụp thành công!');
    } catch (error) {
      console.error('Error updating schedule:', error);
      alert('Có lỗi xảy ra!');
    }
  };

  const handleEditSchedule = (booking: Booking) => {
    setEditingSchedule(booking.id);
    setScheduleData({ 
      scheduleDate: booking.scheduleDate || '', 
      scheduleTime: booking.scheduleTime || '',
      scheduleLocation: booking.scheduleLocation || ''
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  const filteredBookings = bookings.filter(b => {
    // Filter by type
    if (filter !== 'all' && b.type !== filter) return false;
    
    // Filter by status
    if (statusFilter !== 'all' && b.status !== statusFilter) return false;
    
    // Filter by phone search
    if (phoneSearch && !b.phone.includes(phoneSearch)) return false;
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">STAFF DASHBOARD</h1>
            <p className="text-sm text-gray-600">GreenStudio - Quản lý đơn hàng</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/confirmed')}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              <CheckCircle className="w-4 h-4" />
              Đơn đã xác nhận ({bookings.filter(b => b.status === 'confirmed').length})
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
        {/* Filters Section */}
        <div className="mb-6 space-y-4">
          {/* Type Filters */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                filter === 'all' ? 'bg-teal-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Tất cả ({bookings.length})
            </button>
            <button
              onClick={() => setFilter('booking')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                filter === 'booking' ? 'bg-teal-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Đặt lịch ({bookings.filter(b => b.type === 'booking').length})
            </button>
            <button
              onClick={() => setFilter('contact')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                filter === 'contact' ? 'bg-teal-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Tư vấn ({bookings.filter(b => b.type === 'contact').length})
            </button>
          </div>

          {/* Status Filters */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                statusFilter === 'all' ? 'bg-gray-700 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              Tất cả trạng thái
            </button>
            <button
              onClick={() => setStatusFilter('pending')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                statusFilter === 'pending' ? 'bg-yellow-500 text-white shadow-md' : 'bg-white text-yellow-600 hover:bg-yellow-50 border border-yellow-200'
              }`}
            >
              Chờ xử lý ({bookings.filter(b => b.status === 'pending').length})
            </button>
            <button
              onClick={() => setStatusFilter('confirmed')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                statusFilter === 'confirmed' ? 'bg-green-500 text-white shadow-md' : 'bg-white text-green-600 hover:bg-green-50 border border-green-200'
              }`}
            >
              Đã xác nhận ({bookings.filter(b => b.status === 'confirmed').length})
            </button>
            <button
              onClick={() => setStatusFilter('cancelled')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                statusFilter === 'cancelled' ? 'bg-red-500 text-white shadow-md' : 'bg-white text-red-600 hover:bg-red-50 border border-red-200'
              }`}
            >
              Đã hủy ({bookings.filter(b => b.status === 'cancelled').length})
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex gap-3">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm theo số điện thoại..."
                  value={phoneSearch}
                  onChange={(e) => setPhoneSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
                />
              </div>
            </div>
            {phoneSearch && (
              <button
                onClick={() => setPhoneSearch('')}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Xóa bộ lọc
              </button>
            )}
          </div>

          {/* Results count */}
          <div className="text-sm text-gray-600">
            Hiển thị <span className="font-semibold text-gray-900">{filteredBookings.length}</span> đơn hàng
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBookings.map(booking => (
              <div key={booking.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      booking.type === 'booking' ? 'bg-blue-500' : 'bg-green-500'
                    }`}></div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        booking.type === 'booking' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {booking.type === 'booking' ? 'ĐẶT LỊCH' : 'TƯ VẤN'}
                      </span>
                      {booking.status && (
                        <span className={`ml-2 px-3 py-1 rounded-full text-xs font-semibold ${
                          booking.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                          booking.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {booking.status === 'pending' ? 'Chờ xử lý' : 
                           booking.status === 'confirmed' ? 'Đã xác nhận' : 'Đã hủy'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="font-semibold">{booking.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <a href={`tel:${booking.phone}`} className="text-teal-600 hover:underline">{booking.phone}</a>
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
                  {booking.date && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{booking.date} • {booking.time}</span>
                    </div>
                  )}
                  {booking.people && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Số người:</span>
                      <span>{booking.people}</span>
                    </div>
                  )}
                  {booking.location && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Địa điểm:</span>
                      <span>{booking.location}</span>
                    </div>
                  )}
                </div>

                {booking.message && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700"><strong>Ghi chú:</strong> {booking.message}</p>
                  </div>
                )}

                {/* Schedule Section */}
                {booking.type === 'booking' && (
                  <div className="mb-4 p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
                    {editingSchedule === booking.id ? (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">Ngày chụp</label>
                          <input
                            type="date"
                            value={scheduleData.scheduleDate}
                            onChange={(e) => setScheduleData({ ...scheduleData, scheduleDate: e.target.value })}
                            className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg focus:border-purple-600 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">Giờ chụp</label>
                          <input
                            type="time"
                            value={scheduleData.scheduleTime}
                            onChange={(e) => setScheduleData({ ...scheduleData, scheduleTime: e.target.value })}
                            className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg focus:border-purple-600 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">Địa điểm chụp</label>
                          <input
                            type="text"
                            value={scheduleData.scheduleLocation}
                            onChange={(e) => setScheduleData({ ...scheduleData, scheduleLocation: e.target.value })}
                            placeholder="Studio / Trường học / Ngoài trời..."
                            className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg focus:border-purple-600 focus:outline-none"
                          />
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleSaveSchedule(booking.id)}
                            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-semibold"
                          >
                            Lưu
                          </button>
                          <button
                            onClick={() => {
                              setEditingSchedule(null);
                              setScheduleData({ scheduleDate: '', scheduleTime: '', scheduleLocation: '' });
                            }}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors text-sm font-semibold"
                          >
                            Hủy
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          {booking.scheduleDate ? (
                            <>
                              <div className="flex items-center gap-2 mb-2">
                                <Calendar className="w-5 h-5 text-purple-600" />
                                <span className="text-lg font-bold text-purple-700">
                                  {new Date(booking.scheduleDate).toLocaleDateString('vi-VN')} • {booking.scheduleTime}
                                </span>
                              </div>
                              {booking.scheduleLocation && (
                                <p className="text-sm text-gray-600 ml-7">📍 {booking.scheduleLocation}</p>
                              )}
                            </>
                          ) : (
                            <p className="text-sm text-gray-500 italic">Chưa tạo lịch chụp</p>
                          )}
                        </div>
                        <button
                          onClick={() => handleEditSchedule(booking)}
                          className="flex items-center gap-1 px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                        >
                          <Calendar className="w-4 h-4" />
                          {booking.scheduleDate ? 'Sửa lịch' : 'Tạo lịch'}
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Price Section - Only for booking type */}
                {booking.type === 'booking' && (
                  <div className="mb-4 p-4 bg-teal-50 rounded-lg border-2 border-teal-200">
                  {editingPrice === booking.id ? (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Giá chốt (VNĐ)</label>
                        <input
                          type="text"
                          value={priceData.price}
                          onChange={(e) => setPriceData({ ...priceData, price: e.target.value })}
                          placeholder="Ví dụ: 2.000.000"
                          className="w-full px-3 py-2 border-2 border-teal-300 rounded-lg focus:border-teal-600 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Ghi chú thêm</label>
                        <textarea
                          value={priceData.notes}
                          onChange={(e) => setPriceData({ ...priceData, notes: e.target.value })}
                          placeholder="Chi tiết thỏa thuận, giảm giá, phụ thu..."
                          rows={2}
                          className="w-full px-3 py-2 border-2 border-teal-300 rounded-lg focus:border-teal-600 focus:outline-none resize-none"
                        />
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleSavePrice(booking.id)}
                          className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-semibold"
                        >
                          Lưu
                        </button>
                        <button
                          onClick={() => {
                            setEditingPrice(null);
                            setPriceData({ price: '', notes: '' });
                          }}
                          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors text-sm font-semibold"
                        >
                          Hủy
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        {booking.price ? (
                          <>
                            <div className="flex items-center gap-2 mb-2">
                              <DollarSign className="w-5 h-5 text-teal-600" />
                              <span className="text-lg font-bold text-teal-700">{booking.price} VNĐ</span>
                            </div>
                            {booking.notes && (
                              <p className="text-sm text-gray-600 ml-7">{booking.notes}</p>
                            )}
                          </>
                        ) : (
                          <p className="text-sm text-gray-500 italic">Chưa chốt giá</p>
                        )}
                      </div>
                      <button
                        onClick={() => handleEditPrice(booking)}
                        className="flex items-center gap-1 px-3 py-1 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm"
                      >
                        <Edit className="w-4 h-4" />
                        {booking.price ? 'Sửa' : 'Thêm giá'}
                      </button>
                    </div>
                  )}
                </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-xs text-gray-500">
                    {new Date(booking.createdAt).toLocaleString('vi-VN')}
                  </span>
                  <div className="flex gap-2">
                    {booking.type === 'booking' && (
                      <>
                        <button
                          onClick={() => handleStatusChange(booking.id, 'confirmed')}
                          className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Xác nhận
                        </button>
                        <button
                          onClick={() => handleStatusChange(booking.id, 'cancelled')}
                          className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                        >
                          <XCircle className="w-4 h-4" />
                          Hủy
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {filteredBookings.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl">
                <p className="text-gray-500">Chưa có dữ liệu</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffPage;

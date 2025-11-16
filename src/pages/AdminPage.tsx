import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc, updateDoc, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { LogOut, Trash2, CheckCircle, XCircle, Calendar, Phone, Mail, User, BarChart3, Users, Plus } from 'lucide-react';

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

interface Staff {
  id: string;
  username: string;
  password: string;
  fullName: string;
  createdAt: string;
}

const AdminPage = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [staffList, setStaffList] = useState<Staff[]>([]);
  const [visitors, setVisitors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'booking' | 'contact'>('all');
  const [activeTab, setActiveTab] = useState<'bookings' | 'stats' | 'staff'>('bookings');
  const [showAddStaff, setShowAddStaff] = useState(false);
  const [newStaff, setNewStaff] = useState({ username: '', password: '', fullName: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'admin') {
      navigate('/login');
      return;
    }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    try {
      // Fetch bookings
      const bookingsSnapshot = await getDocs(collection(db, 'bookings'));
      const bookingsData: Booking[] = [];
      bookingsSnapshot.forEach((doc) => {
        bookingsData.push({ id: doc.id, ...doc.data() } as Booking);
      });
      bookingsData.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setBookings(bookingsData);

      // Fetch staff
      const staffSnapshot = await getDocs(collection(db, 'staff'));
      const staffData: Staff[] = [];
      staffSnapshot.forEach((doc) => {
        staffData.push({ id: doc.id, ...doc.data() } as Staff);
      });
      setStaffList(staffData);

      // Fetch visitors
      const visitorsSnapshot = await getDocs(collection(db, 'visitors'));
      const visitorsData: any[] = [];
      visitorsSnapshot.forEach((doc) => {
        visitorsData.push({ id: doc.id, ...doc.data() });
      });
      setVisitors(visitorsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Bạn có chắc muốn xóa?')) {
      try {
        await deleteDoc(doc(db, 'bookings', id));
        setBookings(bookings.filter(b => b.id !== id));
      } catch (error) {
        console.error('Error deleting:', error);
      }
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

  const handleAddStaff = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'staff'), {
        ...newStaff,
        createdAt: new Date().toISOString()
      });
      setNewStaff({ username: '', password: '', fullName: '' });
      setShowAddStaff(false);
      fetchData();
      alert('Thêm nhân viên thành công!');
    } catch (error) {
      console.error('Error adding staff:', error);
      alert('Có lỗi xảy ra!');
    }
  };

  const handleDeleteStaff = async (id: string) => {
    if (window.confirm('Bạn có chắc muốn xóa nhân viên này?')) {
      try {
        await deleteDoc(doc(db, 'staff', id));
        setStaffList(staffList.filter(s => s.id !== id));
      } catch (error) {
        console.error('Error deleting staff:', error);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  const filteredBookings = bookings.filter(b => {
    if (filter === 'all') return true;
    return b.type === filter;
  });

  // Statistics
  const totalBookings = bookings.filter(b => b.type === 'booking').length;
  const totalContacts = bookings.filter(b => b.type === 'contact').length;
  const pendingBookings = bookings.filter(b => b.type === 'booking' && b.status === 'pending').length;
  const confirmedBookings = bookings.filter(b => b.type === 'booking' && b.status === 'confirmed').length;
  const cancelledBookings = bookings.filter(b => b.type === 'booking' && b.status === 'cancelled').length;

  // Service statistics
  const serviceStats = bookings.reduce((acc, booking) => {
    acc[booking.service] = (acc[booking.service] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Monthly statistics
  const monthlyStats = bookings.reduce((acc, booking) => {
    const month = new Date(booking.createdAt).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long' });
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Financial statistics
  const calculateRevenue = () => {
    const bookingOrders = bookings.filter(b => b.type === 'booking');
    const expectedRevenue = bookingOrders.reduce((sum, b) => {
      const price = parseFloat(b.price?.replace(/[^0-9]/g, '') || '0');
      return sum + price;
    }, 0);
    const actualRevenue = bookingOrders.reduce((sum, b) => {
      const price = parseFloat(b.actualPrice?.replace(/[^0-9]/g, '') || '0');
      return sum + price;
    }, 0);
    return { expectedRevenue, actualRevenue };
  };

  const { expectedRevenue, actualRevenue } = calculateRevenue();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">ADMIN DASHBOARD</h1>
            <p className="text-sm text-gray-600">GreenStudio Management</p>
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
        {/* Tabs */}
        <div className="mb-6 flex gap-4 border-b">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'bookings' 
                ? 'text-teal-600 border-b-2 border-teal-600' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Đơn hàng
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`px-6 py-3 font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'stats' 
                ? 'text-teal-600 border-b-2 border-teal-600' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Thống kê
          </button>
          <button
            onClick={() => setActiveTab('staff')}
            className={`px-6 py-3 font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'staff' 
                ? 'text-teal-600 border-b-2 border-teal-600' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Users className="w-4 h-4" />
            Nhân viên
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {/* Bookings Tab */}
            {activeTab === 'bookings' && (
              <>
                <div className="mb-6 flex gap-4">
                  <button
                    onClick={() => setFilter('all')}
                    className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                      filter === 'all' ? 'bg-teal-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Tất cả ({bookings.length})
                  </button>
                  <button
                    onClick={() => setFilter('booking')}
                    className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                      filter === 'booking' ? 'bg-teal-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Đặt lịch ({totalBookings})
                  </button>
                  <button
                    onClick={() => setFilter('contact')}
                    className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                      filter === 'contact' ? 'bg-teal-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Tư vấn ({totalContacts})
                  </button>
                </div>

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
                        <button
                          onClick={() => handleDelete(booking.id)}
                          className="text-red-600 hover:text-red-700 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
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

                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-xs text-gray-500">
                          {new Date(booking.createdAt).toLocaleString('vi-VN')}
                        </span>
                        {booking.type === 'booking' && (
                          <div className="flex gap-2">
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
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {filteredBookings.length === 0 && (
                    <div className="text-center py-12 bg-white rounded-xl">
                      <p className="text-gray-500">Chưa có dữ liệu</p>
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Statistics Tab */}
            {activeTab === 'stats' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-gray-600 text-sm font-medium">Lượt truy cập</h3>
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <User className="w-5 h-5 text-indigo-600" />
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{visitors.length}</p>
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-gray-600 text-sm font-medium">Tổng đơn hàng</h3>
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{bookings.length}</p>
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-gray-600 text-sm font-medium">Đặt lịch</h3>
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-purple-600" />
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{totalBookings}</p>
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-gray-600 text-sm font-medium">Tư vấn</h3>
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{totalContacts}</p>
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-gray-600 text-sm font-medium">Chờ xử lý</h3>
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-yellow-600" />
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{pendingBookings}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-bold mb-2 text-green-700">Đã xác nhận</h3>
                    <p className="text-4xl font-bold text-green-600">{confirmedBookings}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-bold mb-2 text-yellow-700">Chờ xử lý</h3>
                    <p className="text-4xl font-bold text-yellow-600">{pendingBookings}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-bold mb-2 text-red-700">Đã hủy</h3>
                    <p className="text-4xl font-bold text-red-600">{cancelledBookings}</p>
                  </div>
                </div>

                {/* Financial Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md p-6 border-2 border-blue-200">
                    <h3 className="text-lg font-bold mb-2 text-blue-700">💰 Tiền dự kiến</h3>
                    <p className="text-3xl font-bold text-blue-600">
                      {expectedRevenue.toLocaleString('vi-VN')} VNĐ
                    </p>
                    <p className="text-sm text-blue-600 mt-2">Tổng giá chốt với khách hàng</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-md p-6 border-2 border-green-200">
                    <h3 className="text-lg font-bold mb-2 text-green-700">✅ Tiền thực nhận</h3>
                    <p className="text-3xl font-bold text-green-600">
                      {actualRevenue.toLocaleString('vi-VN')} VNĐ
                    </p>
                    <p className="text-sm text-green-600 mt-2">Tổng số tiền đã thu về</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-bold mb-4">Thống kê theo dịch vụ</h3>
                  <div className="space-y-3">
                    {Object.entries(serviceStats).map(([service, count]) => (
                      <div key={service} className="flex items-center justify-between">
                        <span className="text-gray-700">{service}</span>
                        <div className="flex items-center gap-3">
                          <div className="w-48 bg-gray-200 rounded-full h-3">
                            <div 
                              className="bg-teal-600 h-3 rounded-full" 
                              style={{ width: `${(count / bookings.length) * 100}%` }}
                            ></div>
                          </div>
                          <span className="font-bold text-gray-900 w-12 text-right">{count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-bold mb-4">Thống kê theo tháng</h3>
                  <div className="space-y-3">
                    {Object.entries(monthlyStats).slice(0, 6).map(([month, count]) => (
                      <div key={month} className="flex items-center justify-between">
                        <span className="text-gray-700">{month}</span>
                        <div className="flex items-center gap-3">
                          <div className="w-48 bg-gray-200 rounded-full h-3">
                            <div 
                              className="bg-blue-600 h-3 rounded-full" 
                              style={{ width: `${(count / bookings.length) * 100}%` }}
                            ></div>
                          </div>
                          <span className="font-bold text-gray-900 w-12 text-right">{count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Staff Tab */}
            {activeTab === 'staff' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Quản lý nhân viên</h2>
                  <button
                    onClick={() => setShowAddStaff(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Thêm nhân viên
                  </button>
                </div>

                {showAddStaff && (
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-bold mb-4">Thêm nhân viên mới</h3>
                    <form onSubmit={handleAddStaff} className="space-y-4">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Tên đăng nhập</label>
                        <input
                          type="text"
                          value={newStaff.username}
                          onChange={(e) => setNewStaff({...newStaff, username: e.target.value})}
                          required
                          className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-teal-600 focus:outline-none"
                          placeholder="staff1"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Mật khẩu</label>
                        <input
                          type="text"
                          value={newStaff.password}
                          onChange={(e) => setNewStaff({...newStaff, password: e.target.value})}
                          required
                          className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-teal-600 focus:outline-none"
                          placeholder="Nhập mật khẩu"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Họ và tên</label>
                        <input
                          type="text"
                          value={newStaff.fullName}
                          onChange={(e) => setNewStaff({...newStaff, fullName: e.target.value})}
                          required
                          className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-teal-600 focus:outline-none"
                          placeholder="Nguyễn Văn A"
                        />
                      </div>
                      <div className="flex gap-3">
                        <button
                          type="submit"
                          className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                        >
                          Thêm
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowAddStaff(false)}
                          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                          Hủy
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {staffList.map(staff => (
                    <div key={staff.id} className="bg-white rounded-xl shadow-md p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-teal-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">{staff.fullName}</h3>
                            <p className="text-sm text-gray-600">@{staff.username}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDeleteStaff(staff.id)}
                          className="text-red-600 hover:text-red-700 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-600">Mật khẩu: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{staff.password}</span></p>
                        <p className="text-gray-500 text-xs">Tạo: {new Date(staff.createdAt).toLocaleDateString('vi-VN')}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {staffList.length === 0 && (
                  <div className="text-center py-12 bg-white rounded-xl">
                    <p className="text-gray-500">Chưa có nhân viên nào</p>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminPage;


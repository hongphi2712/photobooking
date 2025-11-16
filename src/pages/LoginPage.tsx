import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { Lock, User } from 'lucide-react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [staffAccounts, setStaffAccounts] = useState<Array<{username: string; password: string}>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStaffAccounts();
  }, []);

  const fetchStaffAccounts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'staff'));
      const accounts: Array<{username: string; password: string}> = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        accounts.push({ username: data.username, password: data.password });
      });
      setStaffAccounts(accounts);
    } catch (error) {
      console.error('Error fetching staff:', error);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('userRole', 'admin');
      navigate('/admin');
    } else {
      // Check staff accounts from Firebase
      const staffAccount = staffAccounts.find(
        acc => acc.username === username && acc.password === password
      );
      
      if (staffAccount) {
        localStorage.setItem('userRole', 'staff');
        localStorage.setItem('username', username);
        navigate('/staff');
      } else {
        setError('Tên đăng nhập hoặc mật khẩu không đúng');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">LifeStudio</h1>
          <p className="text-gray-600">Đăng nhập hệ thống</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Tên đăng nhập
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none transition-colors"
                placeholder="Nhập tên đăng nhập"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Mật khẩu
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none transition-colors"
                placeholder="Nhập mật khẩu"
                required
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border-2 border-red-300 text-red-700 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold rounded-xl hover:shadow-lg transition-all"
          >
            Đăng Nhập
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Demo accounts:</p>
          <p>Admin: admin/admin | Staff: staff/staff</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

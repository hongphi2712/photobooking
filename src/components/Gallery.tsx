import { useState } from 'react';
import { Camera } from 'lucide-react';

interface Album {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const albums: Album[] = [
  {
    id: '1',
    title: 'Album Chụp Dã Ngoại',
    category: 'outdoor',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800',
    description: 'Chụp ảnh ngoài trời, tươi trẻ và năng động'
  },
  {
    id: '2',
    title: 'Album Chụp Phim Trường',
    category: 'studio',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800',
    description: 'Bối cảnh phim trường đẹp mắt'
  },
  {
    id: '3',
    title: 'Album Concept Vintage',
    category: 'concept',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800',
    description: 'Phong cách cổ điển, nghệ thuật'
  },
  {
    id: '4',
    title: 'Album Lớp 12',
    category: 'highschool',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
    description: 'Kỷ niệm đẹp của tuổi học trò'
  },
  {
    id: '5',
    title: 'Album Sinh Viên',
    category: 'university',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
    description: 'Năng động và chuyên nghiệp'
  },
  {
    id: '6',
    title: 'Album Concept Modern',
    category: 'concept',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800',
    description: 'Hiện đại, trẻ trung'
  }
];

const categories = [
  { id: 'all', name: 'Tất Cả' },
  { id: 'outdoor', name: 'Dã Ngoại' },
  { id: 'studio', name: 'Phim Trường' },
  { id: 'concept', name: 'Concept' },
  { id: 'highschool', name: 'THPT' },
  { id: 'university', name: 'Đại Học' }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredAlbums = selectedCategory === 'all' 
    ? albums 
    : albums.filter(album => album.category === selectedCategory);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50" id="album">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-wide">
            ALBUM CHỤP ẢNH KỶ YẾU
          </h2>
          <p className="text-gray-600 mb-6">chụp ảnh kỷ yếu life studio</p>
          <div className="w-20 h-1 bg-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-pink-400 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-pink-200 hover:border-pink-300 hover:bg-pink-50'
              }`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredAlbums.map(album => (
            <div key={album.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative pb-[75%] overflow-hidden">
                <img 
                  src={album.image} 
                  alt={album.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{album.title}</h3>
                    <p className="text-sm mb-4 opacity-90">{album.description}</p>
                    <button className="px-5 py-2 bg-white text-pink-500 rounded-full text-sm font-semibold hover:bg-pink-50 transition-colors flex items-center gap-2">
                      <Camera className="w-4 h-4" />
                      Xem Chi Tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-10 py-4 bg-pink-400 text-white rounded-full font-semibold hover:bg-pink-500 transform hover:-translate-y-1 transition-all shadow-lg">
            Xem Thêm Album
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

import { useState } from 'react';
import { Camera, X } from 'lucide-react';
import { albums, categories } from '../data/albums';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredAlbums = selectedCategory === 'all' 
    ? albums 
    : albums.filter(album => album.category === selectedCategory);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-teal-50" id="album">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-wide">
            ALBUM CHỤP ẢNH KỶ YẾU
          </h2>
          <p className="text-gray-600 mb-6">chụp ảnh kỷ yếu GreenStudio</p>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-teal-200 hover:border-teal-300 hover:bg-teal-50'
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
                <div className="absolute inset-0 bg-gradient-to-t from-teal-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{album.title}</h3>
                    <p className="text-sm mb-4 opacity-90">{album.description}</p>
                    <button 
                      onClick={() => setSelectedImage(album.image)}
                      className="px-5 py-2 bg-white text-teal-600 rounded-full text-sm font-semibold hover:bg-teal-50 transition-colors flex items-center gap-2"
                    >
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
          <button className="px-10 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transform hover:-translate-y-1 transition-all shadow-lg">
            Xem Thêm Album
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-teal-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;

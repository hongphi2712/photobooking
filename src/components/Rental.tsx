import { costumes } from '../data/costumes';

const Rental = () => {

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-teal-50" id="rental">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-wide">
            CHO THUÊ TRANG PHỤC
          </h2>
          <p className="text-gray-600 mb-6">Đa dạng trang phục cho mọi concept chụp ảnh</p>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {costumes.slice(0, 3).map(costume => (
            <div key={costume.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={costume.image} 
                  alt={costume.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{costume.title}</h3>
                <p className="text-gray-600 mb-4">{costume.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-teal-600">{costume.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <a href="/rental">
            <button className="px-10 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transform hover:-translate-y-1 transition-all shadow-lg">
              Xem Thêm Trang Phục
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Rental;

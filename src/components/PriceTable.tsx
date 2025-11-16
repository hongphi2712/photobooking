import { Check, Star } from 'lucide-react';

interface PricePackage {
  id: string;
  name: string;
  price: string;
  image: string;
  features: string[];
  popular?: boolean;
}

const packages: PricePackage[] = [
  {
    id: '1',
    name: 'COMBO 1',
    price: 'Liên hệ',
    image: 'https://greenstudio.vn/uploads/2128/images/638761807874688724-bang-gia-chup-anh-ky-yeu-01.jpg',
    features: []
  },
  {
    id: '2',
    name: 'COMBO 2',
    price: 'Liên hệ',
    image: 'https://greenstudio.vn/uploads/2128/images/638144796499639992-chup-anh-ky-yeu-2.jpg',
    features: []
  },
  {
    id: '3',
    name: 'COMBO 3',
    price: 'Liên hệ',
    image: 'https://greenstudio.vn/uploads/2128/images/638137838583262390-chup-anh-ky-yeu-3.jpg',
    features: []
  },
  {
    id: '4',
    name: 'COMBO 4',
    price: 'Liên hệ',
    image: 'https://greenstudio.vn/uploads/2128/images/638137838583418645-chup-anh-ky-yeu-4.jpg',
    features: []
  },
  {
    id: '5',
    name: 'COMBO 5',
    price: 'Liên hệ',
    image: 'https://greenstudio.vn/uploads/2128/images/638137838583574880-chup-anh-ky-yeu-5.jpg',
    features: []
  },
  {
    id: '6',
    name: 'COMBO 6',
    price: 'Liên hệ',
    image: 'https://greenstudio.vn/uploads/2128/images/638137838583731159-chup-anh-ky-yeu-6.jpg',
    features: []
  }
];

const PriceTable = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-teal-50 to-white" id="prices">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-wide">
            <span className="text-teal-700">Kỷ Yếu Hết Ý</span>
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold text-teal-800 mb-6">
            GIÁ HẾT LÒNG
          </h3>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative mb-12 max-w-6xl mx-auto">
          <img 
            src="/chup-anh-ky-yeu (2).jpg" 
            alt="Kỷ yếu hết ý" 
            className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
            <div className="max-w-2xl">
              <h4 className="text-3xl md:text-5xl font-bold mb-4">
                CHỈ TỪ <span className="text-teal-300">159K</span>
              </h4>
              <p className="text-xl md:text-2xl mb-6 text-gray-200">
                Giá chụp ảnh kỷ yếu tốt nhất Hà Nội – ưu đãi cho nhóm đông
              </p>
              <a href="/prices">
                <button className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg">
                  Xem Chi Tiết Bảng Giá
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceTable;

export interface WeddingPackage {
  id: number;
  name: string;
  price: string;
  features: string[];
}

export const weddingPackages: WeddingPackage[] = [
  {
    id: 1,
    name: 'GÓI CHỤP HÌNH CƯỚI',
    price: '15.000.000đ',
    features: [
      'Chụp 500 ảnh gốc, chỉnh 80 ảnh đẹp',
      '3 địa điểm chụp (Studio + Ngoại cảnh)',
      'Thời gian: 1 ngày đầy đủ',
      'Cho thuê 3 bộ trang phục cô dâu chú rể',
      'Make up chuyên nghiệp',
      'Album ảnh 30x40 (40 trang)',
      'Photobook 20x30',
      'File ảnh high resolution'
    ]
  },
  {
    id: 2,
    name: 'GÓI QUAY PHIM CƯỚI',
    price: '20.000.000đ',
    features: [
      'Quay phim fullday (Lễ vu quy + Đám cưới)',
      '2 máy quay 4K',
      'Flycam quay cảnh đẹp',
      'Highlight clip 10-15 phút',
      'Full video raw',
      'Chỉnh màu chuyên nghiệp',
      'Kèm DVD + USB sang trọng',
      'Bản quyền nhạc và hiệu ứng'
    ]
  },
  {
    id: 3,
    name: 'GÓI TRỌN GÓI VIP',
    price: '35.000.000đ',
    features: [
      'Chụp ảnh + Quay phim fullday',
      'Không giới hạn ảnh và video',
      'Studio + 5 địa điểm ngoại cảnh',
      'Cho thuê 5 bộ váy cưới cao cấp',
      'Make up & Hair chuyên nghiệp',
      'Album ảnh 40x60 + Photobook',
      'Highlight clip + Full video',
      'Trang trí backdrop tại nhà',
      'Tặng chụp ảnh gia đình'
    ]
  }
];

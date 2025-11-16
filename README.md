# Photo Booking App

Ứng dụng đặt lịch chụp ảnh được xây dựng với React, TypeScript, Firebase và Vite.

## Cài đặt

```bash
npm install
```

## Cấu hình Firebase

1. Tạo project trên [Firebase Console](https://console.firebase.google.com/)
2. Tạo Web App trong project Firebase
3. Sao chép file `.env.example` thành `.env.local`:
   ```bash
   copy .env.example .env.local
   ```
4. Điền các thông tin Firebase vào file `.env.local`

## Chạy Development Server

```bash
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:5173`

## Build cho Production

```bash
npm run build
```

## Deploy lên Vercel

### Cách 1: Deploy qua Vercel CLI

1. Cài đặt Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login vào Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Deploy production:
   ```bash
   vercel --prod
   ```

### Cách 2: Deploy qua Vercel Dashboard (Khuyến nghị)

1. Push code lên GitHub repository
2. Truy cập [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New" → "Project"
4. Import repository GitHub của bạn
5. Cấu hình Environment Variables:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
6. Click "Deploy"

### Lưu ý khi Deploy

- Đảm bảo đã thêm đầy đủ Environment Variables trên Vercel
- File `vercel.json` đã được cấu hình sẵn cho routing
- Vercel sẽ tự động detect Vite framework và build

## Cấu trúc Project

```
photobooking/
├── src/
│   ├── firebase/
│   │   └── config.ts          # Firebase configuration
│   ├── App.tsx                # Main App component
│   ├── App.css
│   ├── main.tsx               # Entry point
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json                # Vercel deployment config
└── .env.example               # Environment variables template
```

## Công nghệ sử dụng

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool và dev server
- **Firebase** - Backend services (Auth, Firestore, Storage)
- **Vercel** - Hosting platform

## Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build production
- `npm run preview` - Preview production build locally
- `npm run lint` - Chạy ESLint

## Thông tin thêm

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

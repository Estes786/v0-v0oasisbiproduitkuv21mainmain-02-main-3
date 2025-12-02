# 🚀 OASIS BI PRO - Production-Ready Fullstack SaaS

[![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Latest-green)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

> Pure Business Intelligence SaaS Platform - **NOT** a payment processor or payment aggregator.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Database Setup](#database-setup)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Documentation](#documentation)
- [License](#license)

## 🎯 Overview

OASIS BI PRO adalah platform Business Intelligence SaaS yang membantu perusahaan menganalisis data bisnis mereka dengan dashboard interaktif dan visualisasi data yang powerful.

### 🌟 Key Highlights

- ✅ **Production-Ready**: Complete authentication, protected routes, real database
- 🔐 **Secure**: Supabase SSR auth dengan Row Level Security (RLS)
- 📊 **Real-time Dashboard**: Analytics dengan data visualization
- 📱 **Responsive**: Mobile-first design dengan Tailwind CSS
- 🚀 **Optimized**: Next.js 15 dengan App Router dan Server Components
- 📦 **Modular**: Clean architecture dengan separation of concerns

## ✨ Features

### Authentication & User Management
- ✅ Sign In/Sign Up dengan email & password
- ✅ OAuth integration (Google)
- ✅ Protected routes dengan middleware
- ✅ Session management dengan Supabase SSR
- ✅ User profile management

### Dashboard & Analytics
- ✅ Real-time analytics dashboard
- ✅ Interactive data visualizations
- ✅ Transaction history tracking
- ✅ Subscription management
- ✅ User settings & preferences

### Pages & Navigation
- ✅ Homepage dengan Hero, Features, Stats, FAQ
- ✅ Tutorial/Roadmap page untuk new users
- ✅ Pricing page dengan 3 plans
- ✅ Features showcase page
- ✅ Legal pages (Terms & Privacy)
- ✅ Responsive header & footer

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.5.6 (App Router)
- **Language**: TypeScript 5.6
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Custom components dengan Lucide React icons
- **State Management**: React hooks + Supabase realtime

### Backend & Database
- **Authentication**: Supabase Auth (SSR)
- **Database**: PostgreSQL (via Supabase)
- **ORM/Client**: @supabase/ssr
- **API**: Next.js API Routes + Server Actions

### Deployment
- **Hosting**: Vercel (recommended)
- **Database**: Supabase Cloud
- **CI/CD**: GitHub Actions (optional)

## 📁 Project Structure

```
webapp/
├── app/                          # Next.js App Router
│   ├── auth/                     # Authentication pages
│   │   ├── signin/
│   │   ├── signup/
│   │   └── callback/
│   ├── dashboard/                # Protected dashboard
│   ├── features/                 # Features showcase
│   ├── pricing/                  # Pricing plans
│   ├── tutorial/                 # Getting started guide
│   ├── legal/                    # Terms & Privacy
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                  # Homepage
├── components/
│   ├── auth/                     # Auth components
│   ├── dashboard/                # Dashboard components
│   ├── layout/                   # Header, Footer
│   └── ui/                       # Reusable UI components
├── lib/
│   ├── supabase/                 # Supabase clients
│   │   ├── client.ts             # Browser client
│   │   ├── server.ts             # Server client
│   │   └── middleware.ts         # Middleware client
│   ├── hooks/                    # Custom React hooks
│   └── utils/                    # Utility functions
├── types/
│   └── supabase.ts               # Database types
├── supabase/
│   ├── migrations/               # SQL migrations
│   │   └── 001_initial_schema.sql
│   └── functions/                # Edge functions (future)
├── public/                       # Static assets
├── middleware.ts                 # Route protection
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0+ and npm 9.0+
- Supabase account (free tier is fine)
- Git

### Installation

1. **Clone repository**:
   ```bash
   git clone https://github.com/Estes786/v0-v0oasisbiproduitkuv21mainmain-02-main-3.git
   cd v0-v0oasisbiproduitkuv21mainmain-02-main-3
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Setup environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` dengan Supabase credentials Anda:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run database migrations** (lihat [Database Setup](#database-setup))

5. **Start development server**:
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup

### Supabase Setup

1. **Create Supabase project**: https://supabase.com/dashboard

2. **Run SQL migration**:
   - Go to SQL Editor di Supabase Dashboard
   - Copy paste isi dari `supabase/migrations/001_initial_schema.sql`
   - Run query

3. **Verify tables created**:
   - Check Table Editor
   - Pastikan ada tables: `profiles`, `subscriptions`, `transactions`, `analytics_data`

### Database Schema

```sql
-- profiles: User profiles
-- subscriptions: Subscription plans
-- transactions: Payment transactions
-- analytics_data: Analytics and BI data

-- All tables have Row Level Security (RLS) enabled
-- Users can only access their own data
```

## 🔐 Environment Variables

### Required

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...

# Application
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=OASIS BI PRO
```

### Optional (untuk future features)

```env
# Payment Gateway
DUITKU_MERCHANT_CODE=your_merchant_code
DUITKU_API_KEY=your_api_key

# Email Service
RESEND_API_KEY=your_resend_key

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXX
```

## 📜 Available Scripts

```bash
# Development
npm run dev              # Start dev server (port 3000)

# Build & Production
npm run build            # Build for production
npm run start            # Start production server

# Linting
npm run lint             # Run ESLint

# Database
npm run db:types         # Generate TypeScript types from Supabase

# Utilities
npm run clean            # Remove .next and node_modules
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push code to GitHub** (sudah done ✅)

2. **Import di Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import GitHub repository
   - Configure project:
     - Framework Preset: Next.js
     - Build Command: `npm run build`
     - Output Directory: `.next`

3. **Add environment variables**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SITE_URL` (set to your Vercel URL)

4. **Deploy**: Click Deploy!

### Post-Deployment

1. **Configure Supabase**:
   - Add Vercel URL ke Supabase Auth redirect URLs
   - Settings > Authentication > URL Configuration
   - Add: `https://your-app.vercel.app/auth/callback`

2. **Test authentication flow**

3. **Setup custom domain** (optional)

## 📚 Documentation

### Module Documentation

1. **[FRONTEND_VERCEL.md](./docs/FRONTEND_VERCEL.md)** - Frontend architecture & components
2. **[BACKEND_EDGE_FUNCTIONS.md](./docs/BACKEND_EDGE_FUNCTIONS.md)** - Backend logic & API routes
3. **[DATABASE_SUPABASE.md](./docs/DATABASE_SUPABASE.md)** - Database schema & operations

### Key Files

- `/middleware.ts` - Route protection & authentication
- `/lib/supabase/` - Supabase client configurations
- `/types/supabase.ts` - Database TypeScript types
- `/components/dashboard/DashboardClient.tsx` - Main dashboard logic

## 🔒 Security Features

- ✅ Row Level Security (RLS) pada semua tables
- ✅ Server-side authentication dengan Supabase SSR
- ✅ Protected routes dengan middleware
- ✅ Environment variables untuk sensitive data
- ✅ HTTPS-only cookies untuk sessions
- ✅ XSS & CSRF protection (Next.js built-in)

## 🎨 Design System

### Colors
- Primary: Blue (#3B82F6)
- Secondary: Gray tones
- Success: Green
- Error: Red

### Typography
- Font: System fonts stack
- Heading: Bold, 24-48px
- Body: Regular, 14-16px

### Components
- Buttons: Primary, Secondary, Outline
- Cards: Border with shadow on hover
- Forms: Input dengan focus ring
- Navigation: Sticky header

## 📊 Build Statistics

```
Route (app)                              Size      First Load JS
┌ ○ /                                   969 B     113 kB
├ ○ /_not-found                         993 B     103 kB
├ ƒ /auth/callback                      122 B     102 kB
├ ○ /auth/signin                        2.46 kB   163 kB
├ ○ /auth/signup                        3.07 kB   164 kB
├ ƒ /dashboard                          3.99 kB   165 kB
├ ○ /features                           969 B     113 kB
├ ○ /legal/privacy                      962 B     113 kB
├ ○ /legal/terms                        962 B     113 kB
├ ○ /pricing                            969 B     113 kB
└ ○ /tutorial                           969 B     113 kB

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand

Total: 13 routes
```

## 🚧 Future Enhancements

### Planned Features
- [ ] Supabase Edge Functions untuk complex business logic
- [ ] Payment gateway integration (Duitku/Xendit)
- [ ] Advanced analytics dengan Chart.js/Recharts
- [ ] Email notifications dengan Resend
- [ ] Admin panel untuk management
- [ ] API documentation dengan Swagger
- [ ] Mobile apps (React Native)
- [ ] Real-time collaboration features

### Optimization Opportunities
- [ ] Image optimization dengan next/image
- [ ] Code splitting untuk dashboard components
- [ ] Service Worker untuk offline support
- [ ] Implement React Query untuk data fetching
- [ ] Add comprehensive testing (Jest, Playwright)

## 👥 Team & Contact

**Developer**: Estes786  
**Email**: elfaress2425@gmail.com  
**WhatsApp**: +62 857-1265-8316  
**GitHub**: https://github.com/Estes786  

## 📄 License

This project is proprietary and confidential.  
© 2025 OASIS BI PRO. All rights reserved.

---

## 🎯 Quick Links

- **Live Demo**: https://v0-v0oasisbiproduitkuv21mainmain-02-three.vercel.app
- **GitHub**: https://github.com/Estes786/v0-v0oasisbiproduitkuv21mainmain-02-main-3
- **Supabase**: https://augohrpoogldvdvdaxxy.supabase.co

---

**Built with ❤️ using Next.js, TypeScript, and Supabase**

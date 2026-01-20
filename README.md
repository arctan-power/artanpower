# Arctan Power Website

A modern, professional landing page for Arctan Power - showcasing AI-powered grid intelligence with quantum-grade security.

## 🚀 Features

- **Modern Design**: Clean, professional design with navy blue, orange accents, and tech-forward aesthetics
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion powered animations and scroll effects
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance**: Built with Next.js 14 for optimal performance

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Google Fonts** - Inter and Poppins fonts

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
Arctan Power website/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with navigation
│   ├── ProblemStatement.tsx
│   ├── SolutionOverview.tsx
│   ├── KeyFeatures.tsx
│   ├── TechnologyStack.tsx
│   ├── ProductModules.tsx
│   ├── TrustSignals.tsx
│   ├── QuantumSecurity.tsx
│   ├── UseCases.tsx
│   ├── About.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Design System

### Colors
- **Primary Navy**: `#2C3E50`
- **Accent Orange**: `#E74C3C`
- **Text Gray**: `#5D6D7E`
- **Background Light**: `#F8F9FA`
- **Accent Cyan**: `#00D9FF`
- **Success Green**: `#27AE60`

### Typography
- **Headings**: Poppins Bold
- **Body**: Inter Regular
- **Hero**: 64px
- **H1**: 48px
- **H2**: 40px
- **Body**: 18px

## 📱 Sections

1. **Hero** - Full-screen hero with navigation and CTA buttons
2. **Problem Statement** - Three-column challenge overview
3. **Solution Overview** - ArcGrid introduction with stats
4. **Key Features** - Three main features with icons
5. **Technology Stack** - Technology badges and visualization
6. **Product Modules** - Four integrated modules (2x2 grid)
7. **Trust Signals** - Partner logos and credentials
8. **Quantum Security** - Security focus section
9. **Use Cases** - Real-world applications
10. **About** - Team and company story
11. **CTA** - Call-to-action section
12. **Footer** - Links and company info

## 🚢 Deployment

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

Deploy to Vercel:
```bash
vercel
```

## 📝 Customization

- Update company information in `components/About.tsx`
- Modify colors in `tailwind.config.ts`
- Add your logo image and update references in `components/Hero.tsx` and `components/Footer.tsx`
- Update contact information in `components/CTA.tsx` and `components/Footer.tsx`

## 📄 License

Copyright © 2025 Arctan Power. All rights reserved.

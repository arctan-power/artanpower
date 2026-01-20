# Quick Start Guide

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Next Steps

### Add Your Logo
1. Place your logo image in the `public` folder
2. Update the logo references in:
   - `components/Hero.tsx` (line ~25)
   - `components/Footer.tsx` (line ~20)

### Customize Content
- **Company Info**: Update `components/About.tsx`
- **Contact Info**: Update email addresses in `components/CTA.tsx` and `components/Footer.tsx`
- **Social Links**: Update social media URLs in `components/Footer.tsx`

### Add Real Images
Replace placeholder visualizations with:
- Dashboard screenshots
- Product mockups
- Team photos
- Partner logos

### Deploy
```bash
npm run build
npm start
```

Or deploy to Vercel:
```bash
vercel
```

## 🎨 Design Customization

All colors, fonts, and spacing are defined in:
- `tailwind.config.ts` - Design tokens
- `app/globals.css` - Global styles and animations

## 📱 Testing Responsive Design

Use browser dev tools to test:
- Mobile (< 768px)
- Tablet (768px - 1200px)
- Desktop (> 1200px)

## ✨ Features Included

- ✅ Smooth scroll navigation
- ✅ Mobile hamburger menu
- ✅ Back-to-top button
- ✅ Scroll animations (Framer Motion)
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Accessible (ARIA labels)

# Modern Portfolio Website

A sleek, dark-themed personal portfolio built with Next.js 14, featuring glassmorphism design, smooth animations, and AI-driven content management.

![Portfolio Preview](https://via.placeholder.com/800x400/000000/FFFFFF?text=Portfolio+Preview)

## ✨ Features

- **Modern Design**: Dark theme with glassmorphism effects and warm gold/electric blue accents
- **Performance Optimized**: Built with Next.js 14 App Router, achieving 100 Lighthouse scores
- **Smooth Animations**: Framer Motion animations with reduced motion support
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Dynamic OpenGraph cards, sitemap, and RSS feed
- **Contact Form**: Integrated with Resend for email handling
- **Type Safe**: Full TypeScript coverage with strict mode
- **Accessible**: WCAG AA compliant with proper focus management

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Components**: Shadcn UI + Radix UI
- **Animations**: Framer Motion
- **Email**: Resend API
- **Validation**: Zod
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   - `RESEND_API_KEY`: Your Resend API key for contact form
   - `NEXT_PUBLIC_SITE_URL`: Your site URL for SEO

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── writing/           # Blog/writing page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   ├── command-bar.tsx   # Floating navigation
│   ├── hero-section.tsx  # Hero with star field
│   └── ...               # Other sections
└── lib/                  # Utilities and helpers
    └── utils.ts          # Common utilities
```

## 🎨 Customization

### Colors & Theme

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  gold: {
    400: "#fbbf24",
    500: "#f59e0b", 
    600: "#d97706",
  },
  electric: {
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb", 
  }
}
```

### Content

1. **Personal Info**: Update `src/components/hero-section.tsx` with your name and bio
2. **Projects**: Modify the projects array in `src/components/projects-section.tsx`
3. **Blog Posts**: Add your posts to `src/components/writing-section.tsx`
4. **About Page**: Update your timeline and skills in `src/app/about/page.tsx`
5. **Contact**: Update email addresses in `src/app/api/contact/route.ts`

### SEO & Metadata

Update `src/app/layout.tsx` with your information:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Full Stack Developer",
  description: "Your bio here...",
  // ... other metadata
};
```

## 📧 Contact Form Setup

1. **Get Resend API Key**
   - Sign up at [resend.com](https://resend.com)
   - Create an API key
   - Add to `.env.local` as `RESEND_API_KEY`

2. **Configure Email**
   - Update the `from` address in `src/app/api/contact/route.ts`
   - Add your receiving email to the `to` array
   - Verify your domain in Resend (for production)

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Set Environment Variables**
   - Add `RESEND_API_KEY` in Vercel dashboard
   - Add `NEXT_PUBLIC_SITE_URL` with your domain

3. **Deploy**
   - Push to GitHub
   - Vercel will auto-deploy on commits

### Other Platforms

The app works on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## ⚡ Performance

- **Core Web Vitals**: Optimized for perfect scores
- **Image Optimization**: Next.js Image component with lazy loading
- **Font Optimization**: Google Fonts with font subsetting
- **Code Splitting**: Automatic with Next.js App Router
- **Bundle Analysis**: Run `npm run build` to see bundle size

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for the component system
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide Icons](https://lucide.dev/) for beautiful icons

---

Built with ❤️ and lots of ☕ by [Your Name](https://yoursite.com)

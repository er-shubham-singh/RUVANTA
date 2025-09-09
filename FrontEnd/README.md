# NovaWorks Studio - Digital Agency Website

A comprehensive, production-ready website for NovaWorks Studio, a professional digital agency offering web development, mobile apps, UI/UX design, and more.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with indigo/teal color scheme
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Complete Pages**: Home, About, Services, Portfolio, Pricing, Blog, Contact, Careers, FAQ
- **Interactive Components**: Animations, hover effects, and micro-interactions
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Accessibility**: WCAG-compliant color contrast and semantic HTML

## 🛠 Tech Stack

- **React** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Headless UI** for accessible components
- **Heroicons** for icons

## 📱 Pages Overview

### Home
- Hero section with dual CTAs and trust badges
- Services overview grid
- Featured portfolio projects
- Call-to-action sections

### About
- Company story and mission
- Team member profiles
- Culture highlights
- Join team CTA

### Services
- Complete service catalog
- Service detail pages with process breakdown
- Technology stacks and pricing
- Related case studies

### Portfolio
- Project showcase with filtering
- Detailed case studies
- Results and metrics
- Technology tags

### Pricing
- Three-tier pricing structure
- Add-on services
- FAQ section
- Transparent pricing

### Blog
- Article listing with tags
- Featured posts
- Full blog post pages
- Newsletter signup

### Contact
- Contact form with validation
- Multiple contact methods
- Free consultation booking
- Response time expectations

### Careers
- Open positions
- Benefits and culture
- Hiring process
- Application system

### FAQ
- Organized by categories
- Expandable Q&A format
- Contact options

## 🎨 Design System

### Colors
- **Primary**: Indigo (#4F46E5)
- **Secondary**: Teal (#14B8A6)
- **Neutral**: Gray scale for backgrounds and text
- **Semantic**: Success, warning, error states

### Typography
- Clean, readable font stack
- Proper line spacing (150% body, 120% headings)
- Maximum 3 font weights

### Spacing
- 8px spacing system for consistency
- Generous white space
- Proper alignment throughout

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation
1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```

### Customization

#### Replace Company Information
1. **Company Name**: Search and replace "NovaWorks Studio" throughout the codebase
2. **Contact Info**: Update phone, email, and address in:
   - `src/components/layout/Footer.tsx`
   - `src/pages/Contact.tsx`
   - `src/pages/FAQ.tsx`

#### Update Content
1. **Services**: Modify `src/data/services.ts`
2. **Portfolio**: Update `src/data/portfolio.ts`
3. **Team**: Edit `src/data/team.ts`
4. **Blog**: Customize `src/data/blog.ts`

#### Styling
1. **Colors**: Update `tailwind.config.js` theme colors
2. **Fonts**: Modify CSS font families in `src/index.css`
3. **Logo**: Replace text logo in `src/components/layout/Header.tsx`

### Build for Production
```bash
npm run build
```

## 📦 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Basic UI primitives
│   └── layout/          # Layout components
├── pages/               # Page components
├── data/                # Sample data files
├── context/             # React context providers
└── utils/               # Utility functions
```

## 🔧 Configuration

### Environment Variables
The project uses Vite's built-in environment variable system. Create a `.env.local` file for local overrides.

### Deployment
The project is configured for static hosting and can be deployed to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💬 Support

For questions about customization or deployment:
1. Check the FAQ section
2. Review the component documentation
3. Contact the development team

---

**Ready to launch your digital agency website!** 🚀
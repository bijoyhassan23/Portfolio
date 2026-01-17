# Saif Uddin Bijoy - Portfolio

A modern, responsive portfolio website showcasing my work as a Team Lead & Full-Stack WordPress Developer with 3+ years of experience delivering 100+ global WordPress solutions.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.3.1-purple)

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations using Framer Motion
- **Responsive Layout**: Fully responsive design that works seamlessly across all devices
- **Dark Mode**: Built-in dark theme for comfortable viewing
- **Interactive Sections**:
  - Hero section with animated Lottie graphics
  - About section highlighting skills and experience
  - Projects showcase with detailed case studies
  - Contact form with EmailJS integration
  - Social media links and professional profiles
- **Performance Optimized**: Built with Vite for lightning-fast load times
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

### Core Technologies
- **React 18.3.1** - Modern UI library
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 7.3.1** - Next-generation frontend tooling

### UI & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Framer Motion 12.26.1** - Animation library
- **Lucide React** - Beautiful icon library
- **Lottie React** - Lightweight animations

### Form & Data
- **React Hook Form 7.61.1** - Performant form validation
- **EmailJS** - Email service integration
- **Zod 3.25.76** - Schema validation

### Additional Libraries
- **React Router DOM 6.30.1** - Client-side routing
- **TanStack Query 5.83.0** - Data fetching and caching
- **next-themes** - Theme management

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/bijoyhassan23/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS** (Optional - for contact form)
   
   Update the EmailJS credentials in `src/components/ContactSection.tsx`:
   ```typescript
   const EMAILJS_SERVICE_ID = "your_service_id";
   const EMAILJS_TEMPLATE_ID = "your_template_id";
   const EMAILJS_PUBLIC_KEY = "your_public_key";
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:8080`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Deployment Options

This project can be deployed to various platforms:

- **Vercel** (Recommended)
  ```bash
  npm install -g vercel
  vercel
  ```

- **GitHub Pages**
  - Update `vite.config.ts` with your base path
  - Use `gh-pages` package for deployment

## 🎨 Customization

### Update Personal Information

1. **Contact Details**: Edit `src/components/ContactSection.tsx`
2. **About Section**: Edit `src/components/AboutSection.tsx`
3. **Projects**: Edit `src/components/ProjectsSection.tsx`
4. **Meta Tags**: Edit `index.html` for SEO information

### Theme Customization

Modify colors and styles in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: "your-color",
      // ... other colors
    }
  }
}
```

## 📧 Contact

- **Email**: bijoyhassan23@gmail.com
- **Phone**: +8801995581952
- **Location**: Dhaka, Bangladesh
- **GitHub**: [@bijoyhassan23](https://github.com/bijoyhassan23)
- **LinkedIn**: [bijoyhassan23](https://linkedin.com/in/bijoyhassan23)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev)
- UI components by [shadcn/ui](https://ui.shadcn.com)
- Animations by [Framer Motion](https://www.framer.com/motion)

---

**Built with ❤️ by Saif Uddin Bijoy**

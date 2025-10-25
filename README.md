# Skylook Ceilings Website

A modern, responsive website for Skylook Ceilings - a professional interior design company specializing in false ceilings, POP work, and gypsum installations.

## 🌐 Live Website

Visit: [www.skylookceilings.com](https://www.skylookceilings.com)

## 🚀 Features

- **Modern Design**: Clean, professional layout with warm color palette
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Single Page**: Smooth scrolling navigation between sections
- **Contact Form**: Interactive contact form for customer inquiries
- **Gallery**: Portfolio showcase of completed projects
- **SEO Optimized**: Meta tags and structured data for search engines

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Deployment**: GitHub Pages
- **Hosting**: Static site generation

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+
- npm (comes with Node.js)

### Local Development

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd skylook
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

The static files will be generated in the `out` directory.

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages.

### GitHub Pages Setup

1. **Enable GitHub Pages**

   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

2. **Automatic Deployment**
   - Push changes to the `main` branch
   - GitHub Actions will automatically build and deploy
   - The site will be available at `https://yourusername.github.io/skylook`

### Custom Domain Setup

1. **Add CNAME file** (already included)

   - The `CNAME` file contains: `www.skylookceilings.com`

2. **Configure DNS**

   - Add a CNAME record in your domain DNS settings
   - Point `www.skylookceilings.com` to `yourusername.github.io`

3. **Enable HTTPS**
   - GitHub Pages automatically provides SSL certificates
   - Force HTTPS in repository settings

## 📁 Project Structure

```
skylook/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── .nojekyll              # Disable Jekyll processing
│   └── CNAME                  # Custom domain configuration
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Main landing page
│   └── components/
│       ├── Hero.tsx           # Hero section
│       ├── About.tsx          # About section
│       ├── Services.tsx       # Services section
│       ├── Gallery.tsx        # Portfolio gallery
│       ├── Contact.tsx        # Contact form
│       └── Footer.tsx         # Footer
├── next.config.js             # Next.js configuration
└── package.json
```

## 🎨 Customization

### Colors

The website uses a warm, professional color palette:

- Primary: Amber (#d97706)
- Secondary: Stone (#78716c)
- Background: White and warm tones
- Text: Dark stone (#1c1917)

### Content Updates

1. **Images**: Replace placeholder images in `src/components/Gallery.tsx`
2. **Contact Info**: Update phone, email, and address in `src/components/Contact.tsx`
3. **Services**: Modify service descriptions in `src/components/Services.tsx`
4. **About**: Update company information in `src/components/About.tsx`

### Adding New Sections

1. Create new component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Update navigation links if needed

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Deployment
git push origin main  # Triggers automatic deployment
```

## 📞 Support

For technical support or questions about the website:

- Email: info@skylookceilings.com
- Phone: +91 98765 43210

## 📄 License

This project is proprietary to Skylook Ceilings. All rights reserved.

---

**Built with ❤️ for Skylook Ceilings**

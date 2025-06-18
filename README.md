# Bonneval Solutions Website

A modern, professional website for Bonneval Solutions - AI Automation & Process Optimization Consultancy.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **SEO Optimized**: Proper meta tags and structured data
- **Contact Form**: Interactive contact form with validation
- **Smooth Animations**: Framer Motion animations for enhanced UX

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bonneval-solutions
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
bonneval-solutions/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Services.tsx         # Services showcase
│   ├── About.tsx            # About section
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue gradient (`primary-50` to `primary-900`)
- Secondary colors: Gray gradient (`secondary-50` to `secondary-900`)

### Content
Update the content in each component file:
- `components/Hero.tsx` - Main headline and value proposition
- `components/Services.tsx` - Service offerings and descriptions
- `components/About.tsx` - Company information and approach
- `components/Contact.tsx` - Contact information and form

### Styling
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind classes
- Custom animations are defined in `tailwind.config.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
1. Build the project: `npm run build`
2. Start production server: `npm start`
3. Deploy the `.next` folder to your hosting platform

## 📧 Contact Form

The contact form currently shows a success message. To make it functional:

1. **Email Service** (e.g., SendGrid, Mailgun)
2. **Form Service** (e.g., Formspree, Netlify Forms)
3. **Custom API Route** in Next.js

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Pages
1. Create a new file in `app/` directory
2. Export a default React component
3. Add navigation links in `components/Header.tsx`

## 📄 License

This project is proprietary to Bonneval Solutions.

## 🤝 Support

For questions or support, contact:
- Email: contact@bonnevalsolutions.com
- Website: [bonnevalsolutions.com](https://bonnevalsolutions.com)

---

**Bonneval Solutions** - Transforming business operations through AI automation and process optimization. 
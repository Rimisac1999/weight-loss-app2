# Bonneval Solutions Website

A modern, professional website for Bonneval Solutions - AI Automation & Process Optimization Consultancy, featuring a comprehensive tools platform and company configuration system.

## 🚀 Features

### **Main Website**
- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **SEO Optimized**: Proper meta tags and structured data
- **Contact Form**: Interactive contact form with validation
- **Smooth Animations**: Framer Motion animations for enhanced UX

### **Tools Platform**
- **Dedicated Tools Section**: Separate header/footer for tools pages
- **Memorizer Tool**: AI-powered text memorization tool
- **Scalable Architecture**: Easy to add new tools
- **Professional Branding**: "Bonneval Solutions *Tools*" branding
- **Responsive Design**: Mobile-optimized tools interface

### **Company Configuration System**
- **Centralized Data**: All company information in one place
- **Easy Maintenance**: Update company info once, changes everywhere
- **Type Safety**: Full TypeScript support
- **Environment Variables**: Support for sensitive data protection

### **Integration Features**
- **Voiceflow Chat Widget**: AI chat integration on main page
- **External Portals**: Links to intranet and client portals
- **Smooth Navigation**: Hover effects and animations
- **Mobile-First**: Responsive design for all screen sizes

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons & Lucide React
- **Font**: Inter (Google Fonts)
- **Configuration**: Centralized company config system

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

3. **Set up environment variables** (optional)
   ```bash
   # Create .env.local file
   NEXT_PUBLIC_COMPANY_NAME="Bonneval Solutions"
   COMPANY_CONTACT_EMAIL="contact@bonnevalsolutions.com"
   COMPANY_CONTACT_PHONE="+33 (0)1 XX XX XX XX"
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
bonneval-solutions/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Homepage
│   ├── client/              # Client login page
│   ├── intranet/            # Intranet login page
│   └── tools/               # Tools platform
│       └── memorizer/       # Memorizer tool page
├── components/
│   ├── Header.tsx           # Main site navigation header
│   ├── ToolsHeader.tsx      # Tools-specific header
│   ├── Hero.tsx             # Hero section
│   ├── Services.tsx         # Services showcase
│   ├── About.tsx            # About section
│   ├── Contact.tsx          # Contact form
│   ├── Footer.tsx           # Main site footer
│   ├── ToolsFooter.tsx      # Tools-specific footer
│   ├── VoiceflowWidget.tsx  # AI chat widget
│   └── tools/               # Tool components
│       └── MemorizerTool.tsx # Memorizer tool component
├── config/
│   └── company.ts           # Company configuration system
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Customization

### **Company Configuration**
Update company information in `config/company.ts`:
```typescript
export const companyConfig = {
  name: 'Bonneval Solutions',
  founded: '2024',
  contact: {
    email: 'contact@bonnevalsolutions.com',
    phone: '+33 (0)1 XX XX XX XX',
  },
  // ... more configuration options
}
```

### **Adding New Tools**
1. Create tool component in `components/tools/`
2. Add tool page in `app/tools/`
3. Update navigation in `components/ToolsHeader.tsx`
4. Add tool to company config

### **Colors & Styling**
- **Primary colors**: Blue gradient (`primary-50` to `primary-900`)
- **Secondary colors**: Gray gradient (`secondary-50` to `secondary-900`)
- **Custom components**: `.btn-primary`, `.btn-secondary`, `.text-gradient`

## 🛡️ Security & Privacy

### **Data Protection**
- **Company config**: Centralized data management
- **Environment variables**: Support for sensitive information
- **No backend storage**: Static site for maximum security
- **External integrations**: Secure links to external services

### **Recommended Security Practices**
1. **Make GitHub repo private** for sensitive company data
2. **Use environment variables** for contact details and internal URLs
3. **Regular security updates** for dependencies
4. **HTTPS deployment** with Vercel/Netlify

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `> 1024px`

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### **Other Platforms**
1. Build the project: `npm run build`
2. Start production server: `npm start`
3. Deploy the `.next` folder to your hosting platform

## 🔧 Development

### **Available Scripts**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### **Adding New Features**
1. **New tools**: Add to tools directory structure
2. **New pages**: Create in app directory
3. **Company updates**: Modify config/company.ts
4. **Styling changes**: Update Tailwind config or CSS

## 📄 License

This project is proprietary to Bonneval Solutions.

## 🤝 Support

For questions or support, contact:
- Email: contact@bonnevalsolutions.com
- Website: [bonnevalsolutions.com](https://bonnevalsolutions.com)

---

**Bonneval Solutions** - Transforming business operations through AI automation and process optimization.

**Tools Platform** - Free tools made for helping people in their day to day life. 
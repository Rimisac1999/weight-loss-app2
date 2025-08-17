# Bonneval Solutions Website

A modern, professional website for Bonneval Solutions - AI Automation & Process Optimization Consultancy, featuring a comprehensive tools platform, subdomain architecture, and centralized company configuration system.

## 🚀 Features

### **Main Website**
- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices with fixed mobile navigation
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **SEO Optimized**: Proper meta tags and structured data
- **Contact Form**: Interactive contact form with validation
- **Smooth Animations**: Framer Motion animations for enhanced UX

### **Tools Platform (Subdomain Architecture)**
- **Dedicated Subdomain**: `tools.bonnevalsolutions.com` with clean separation
- **Independent Components**: Separate header/footer for tools pages
- **Memorizer Tool**: AI-powered text memorization tool
- **Scalable Architecture**: Easy to add new tools
- **Professional Branding**: Consistent with main site branding
- **Responsive Design**: Mobile-optimized tools interface

### **Company Configuration System**
- **Centralized Data**: All company information in one place (`config/company.ts`)
- **Easy Maintenance**: Update company info once, changes everywhere
- **Environment Switching**: Simple switch between "Preview" and "Production" branding
- **Type Safety**: Full TypeScript support
- **Environment Variables**: Support for sensitive data protection

### **Mobile Navigation**
- **Fixed Mobile Menu**: Full screen coverage on mobile devices
- **Smooth Animations**: Proper transitions and backdrop effects
- **Touch Friendly**: Optimized for mobile interaction
- **Consistent Experience**: Same behavior across main site and tools

### **Integration Features**
- **Voiceflow Chat Widget**: AI chat integration on main page
- **External Portals**: Links to intranet and client portals
- **Smooth Navigation**: Hover effects and animations
- **Mobile-First**: Responsive design for all screen sizes

## 🏗️ Project Structure

```
bonneval-solutions/
├── app/
│   ├── globals.css                    # Global styles and Tailwind imports
│   ├── layout.tsx                     # Root layout (uses company config)
│   ├── page.tsx                       # Homepage
│   ├── client/                        # Client login page
│   ├── intranet/                      # Intranet login page
│   └── tools-domain/                  # 🆕 Tools subdomain structure
│       ├── layout.tsx                 # Tools layout (uses company config)
│       ├── page.tsx                   # Tools landing page
│       ├── memorizer/page.tsx         # Memorizer tool page
│       └── components/                # Tools-specific components
│           ├── ToolsHeader.tsx        # Tools header (uses company config)
│           └── ToolsFooter.tsx        # Tools footer (uses company config)
├── components/
│   ├── Header.tsx                     # Main site header (uses company config)
│   ├── Hero.tsx                       # Hero section
│   ├── Services.tsx                   # Services showcase
│   ├── About.tsx                      # About section
│   ├── Contact.tsx                    # Contact form
│   ├── Footer.tsx                     # Main site footer
│   ├── VoiceflowWidget.tsx            # AI chat widget
│   └── tools/                         # Shared tool components
│       └── MemorizerTool.tsx          # Memorizer tool component
├── config/
│   └── company.ts                     # 🆕 Centralized company configuration
├── .github/
│   └── workflows/
│       └── pre-production-deploy.yml  # 🆕 GitHub Actions for Pre-Production Testing
├── public/                            # Static assets
├── vercel.json                        # 🆕 Vercel configuration for subdomains
├── tailwind.config.js                 # Tailwind configuration
└── SUBDOMAIN_SETUP.md                 # 🆕 Subdomain setup guide
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons & Lucide React
- **Font**: Inter (Google Fonts)
- **Configuration**: Centralized company config system
- **Deployment**: Vercel with GitHub Actions
- **Environment Management**: Pre-Production Testing environment

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

## 🌐 Subdomain Setup

### **Tools Subdomain**: `tools.bonnevalsolutions.com`
- **Purpose**: Dedicated tools platform with clean separation
- **Benefits**: Independent development, different branding, scalable architecture
- **Routing**: Automatic routing from subdomain to `/tools-domain` pages

### **DNS Configuration**
```
Type: CNAME
Name: tools
Value: cname.vercel-dns-017.com
TTL: 4 h
```

### **Vercel Configuration**
- **Automatic Detection**: Vercel detects CNAME record
- **SSL Certificates**: Automatically handled
- **Preview Deployments**: Available for testing

## 🚀 Deployment

### **Pre-Production Testing Environment**
- **Branch**: `test-cursor-agent`
- **Environment**: "Pre-Production-Testing" in GitHub
- **Automatic Deployment**: GitHub Actions workflow on push
- **Preview Branding**: "Preview Bonneval Solutions" for testing

### **Production Deployment**
- **Branch**: `main`
- **Environment**: Production in Vercel
- **Production Branding**: "Bonneval Solutions" (from company config)

### **GitHub Actions Workflow**
- **Trigger**: Push to `test-cursor-agent` branch
- **Environment**: Pre-Production-Testing
- **Actions**: Build, test, deploy to Vercel
- **Secrets Required**: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`

## 🔧 Configuration

### **Company Information**
All company information is centralized in `config/company.ts`:

```typescript
export const companyConfig = {
  name: 'Preview Bonneval Solutions',        // Change this for production
  fullName: 'Preview Bonneval Solutions SASU',
  contact: { /* ... */ },
  business: { /* ... */ },
  legal: { /* ... */ },
  branding: { /* ... */ }
}
```

### **Switching Between Environments**
1. **Preview Mode**: `name: 'Preview Bonneval Solutions'`
2. **Production Mode**: `name: 'Bonneval Solutions'`
3. **Single Change**: Update one line in config file

## 📱 Mobile Navigation

### **Fixed Issues**
- **Problem**: Mobile menu only showed 50px scrollable area
- **Solution**: Full screen coverage with proper positioning
- **Implementation**: Fixed in both main header and tools header
- **Features**: Backdrop click-to-close, smooth animations, proper scrolling

### **Mobile Menu Features**
- **Full Screen Coverage**: Menu covers entire mobile screen
- **Smooth Animations**: Proper transitions and backdrop effects
- **Touch Friendly**: Optimized for mobile interaction
- **Consistent Behavior**: Same experience across all pages

## 📋 To-Do List

### **🔄 In Progress**
- [x] ~~Setup Pre-Production Testing environment~~
- [x] ~~Fix mobile navigation issues~~
- [x] ~~Implement tools subdomain architecture~~
- [x] ~~Centralize company configuration~~
- [x] ~~Setup GitHub Actions workflow~~

### **⏳ Next Steps**
- [ ] **Intranet Platform Setup**
  - [ ] Configure OVH private server
  - [ ] Setup Docker containers for ERP/CRM
  - [ ] Configure `intranet.bonnevalsolutions.com` DNS
  - [ ] Implement authentication system
  - [ ] Setup internal tools and workflows

- [ ] **Client Portal Setup**
  - [ ] Configure OVH private server
  - [ ] Setup Docker containers for client portal
  - [ ] Configure `client.bonnevalsolutions.com` DNS
  - [ ] Implement client authentication
  - [ ] Setup client-specific tools and dashboards

- [ ] **Production Deployment**
  - [ ] Update company config to production values
  - [ ] Merge `test-cursor-agent` to `main`
  - [ ] Configure production environment in Vercel
  - [ ] Setup production monitoring and analytics

### **🔮 Future Enhancements**
- [ ] Add more tools to the tools platform
- [ ] Implement advanced analytics and reporting
- [ ] Setup automated testing pipeline
- [ ] Add performance monitoring
- [ ] Implement A/B testing capabilities

## 📝 Changelog

### **Version 2.0.0** - Major Architecture Update (Current)
*Released: August 2024*

#### **🚀 New Features**
- **Tools Subdomain Architecture**: Complete separation of tools platform
- **Pre-Production Testing Environment**: Dedicated testing environment with GitHub Actions
- **Centralized Company Configuration**: Single source of truth for all company information
- **Mobile Navigation Fixes**: Full screen mobile menu with proper scrolling

#### **🏗️ Architecture Changes**
- **New Directory Structure**: `app/tools-domain/` for tools subdomain
- **Component Reorganization**: Tools components moved to appropriate locations
- **Routing Configuration**: Next.js rewrites for subdomain handling
- **Vercel Configuration**: Subdomain support and deployment optimization

#### **🔧 Technical Improvements**
- **GitHub Actions Workflow**: Automated deployment to Pre-Production Testing
- **Mobile Menu Overhaul**: Fixed positioning, scrolling, and user experience
- **Company Config Integration**: All components now use centralized configuration
- **TypeScript Enhancements**: Better type safety and code organization

#### **📱 User Experience**
- **Mobile Navigation**: Fixed hamburger menu issues on mobile devices
- **Consistent Branding**: Unified company information across all pages
- **Better Performance**: Optimized routing and component loading
- **Professional Tools Interface**: Dedicated tools platform with proper navigation

### **Version 1.0.0** - Initial Release
*Released: July 2024*

#### **🎯 Core Features**
- **Main Website**: Professional AI automation consultancy website
- **Tools Platform**: Basic tools implementation with memorizer tool
- **Responsive Design**: Mobile-first design approach
- **Contact System**: Interactive contact forms and communication

#### **🛠️ Technical Foundation**
- **Next.js 14**: Modern React framework with App Router
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Full type safety implementation
- **Framer Motion**: Smooth animations and transitions

---

**Last Updated**: August 2024  
**Current Version**: 2.0.0  
**Status**: Pre-Production Testing Phase  
**Next Milestone**: Intranet & Client Portal Setup 
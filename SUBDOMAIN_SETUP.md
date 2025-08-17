# 🚀 Subdomain Setup Guide

## Overview
This guide explains how to set up multiple subdomains for your Bonneval Solutions website, providing clean separation between different environments and services.

## 🏗️ **What We've Built**

### 1. **Subdomain Architecture**
- **`bonnevalsolutions.com`** → Main production site
- **`preview.bonnevalsolutions.com`** → Preview/testing environment
- **`tools.bonnevalsolutions.com`** → Dedicated tools platform
- **`intranet.bonnevalsolutions.com`** → Internal ERP/CRM (planned)
- **`client.bonnevalsolutions.com`** → Client portal (planned)

### 2. **Configuration Files**
- **`next.config.js`** - Subdomain routing and rewrites
- **`vercel.json`** - Vercel deployment configuration
- **`config/company.ts`** - Environment-aware company configuration
- **`SUBDOMAIN_SETUP.md`** - This setup guide

## 🌐 **DNS Configuration (REQUIRED)**

### **Step 1: Add DNS Records**
In your DNS provider (where `bonnevalsolutions.com` is managed), add these records:

```
# Main domain (should already exist)
Type: A
Name: @
Value: 216.198.79.1
TTL: 4 h

# Main domain CNAME (should already exist)
Type: CNAME
Name: www
Value: b247ff17d459d9ac.vercel-dns-017.com
TTL: 4 h

# Tools subdomain
Type: CNAME
Name: tools
Value: cname.vercel-dns-017.com
TTL: 4 h

# Preview subdomain
Type: CNAME
Name: preview
Value: cname.vercel-dns-017.com
TTL: 4 h
```

### **Step 2: Verify DNS Propagation**
Wait for DNS propagation (usually 5-15 minutes), then verify:
```bash
nslookup tools.bonnevalsolutions.com
nslookup preview.bonnevalsolutions.com
```

## ⚙️ **Vercel Configuration (REQUIRED)**

### **Step 1: Add Domains in Vercel**
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Domains**
3. Add these domains:
   - `tools.bonnevalsolutions.com`
   - `preview.bonnevalsolutions.com`
4. Vercel will automatically detect the CNAME records

### **Step 2: Environment Variables (Optional)**
If you need different environment variables for subdomains:
1. Go to **Settings** → **Environment Variables**
2. Add variables with scope: `preview.bonnevalsolutions.com` or `tools.bonnevalsolutions.com`

## 🔄 **How It Works**

### **URL Structure & Routing**
- **Main site**: `bonnevalsolutions.com` → `/app/page.tsx` (Production branding)
- **Preview site**: `preview.bonnevalsolutions.com` → `/app/page.tsx` (Preview branding)
- **Tools subdomain**: `tools.bonnevalsolutions.com` → `/app/tools-domain/page.tsx`
- **Memorizer tool**: `tools.bonnevalsolutions.com/memorizer` → `/app/tools-domain/memorizer/page.tsx`

### **Environment Detection**
The system automatically detects the environment:
- **Development**: `npm run dev` → Preview branding
- **Preview**: `preview.bonnevalsolutions.com` → Preview branding
- **Production**: `bonnevalsolutions.com` → Production branding

## 🧪 **Testing Your Setup**

### **Local Development**
```bash
# Test main site
npm run dev

# Test tools subdomain (add to /etc/hosts for local testing)
# 127.0.0.1 tools.bonnevalsolutions.local
# 127.0.0.1 preview.bonnevalsolutions.local
```

### **Production Testing**
1. Push changes to `test-cursor-agent` branch
2. GitHub Actions will deploy to Vercel
3. Test all domains:
   - `bonnevalsolutions.com` (production branding)
   - `preview.bonnevalsolutions.com` (preview branding)
   - `tools.bonnevalsolutions.com` (tools platform)

## 📁 **File Organization**

```
app/
├── layout.tsx              # Main site layout (environment-aware)
├── page.tsx                # Main site home
├── client/                 # Client portal
├── intranet/              # Intranet portal
└── tools-domain/          # Tools subdomain
    ├── layout.tsx         # Tools-specific layout
    ├── page.tsx           # Tools landing page
    └── memorizer/
        └── page.tsx       # Memorizer tool

components/
├── Header.tsx             # Main site header (environment-aware)
├── Footer.tsx             # Main site footer
└── ...                    # Other components

config/
└── company.ts             # Environment-aware company configuration
```

## 🎯 **Benefits**

1. **Environment Separation**: Clear distinction between preview and production
2. **Clean Architecture**: Tools are completely isolated from main site
3. **Easy Branding Switch**: Automatic environment detection
4. **Scalability**: Easy to add more subdomains
5. **Maintenance**: Simple to maintain and update each section

## 🚨 **Troubleshooting Checklist**

### **If Subdomains Don't Work:**

#### **1. DNS Issues**
- [ ] **DNS Records Added**: Check all CNAME records are in place
- [ ] **DNS Propagation**: Wait 5-15 minutes after adding records
- [ ] **TTL Values**: Ensure TTL is reasonable (4 hours or less)
- [ ] **Record Types**: Verify CNAME vs A record usage

#### **2. Vercel Issues**
- [ ] **Domain Added**: Check domain is added in Vercel dashboard
- [ ] **CNAME Detection**: Vercel should auto-detect your CNAME records
- [ ] **SSL Certificates**: Vercel handles SSL automatically
- [ ] **Deployment Status**: Check if latest deployment succeeded

#### **3. Configuration Issues**
- [ ] **Next.js Config**: Verify `next.config.js` has correct rewrites
- [ ] **Vercel Config**: Check `vercel.json` has proper rewrites
- [ ] **Company Config**: Ensure `config/company.ts` is environment-aware
- [ ] **GitHub Actions**: Verify workflow is running and deploying

#### **4. Environment Variables**
- [ ] **VERCEL_TOKEN**: Set in GitHub secrets
- [ ] **VERCEL_ORG_ID**: Set in GitHub secrets
- [ ] **VERCEL_PROJECT_ID**: Set in GitHub secrets
- [ ] **Environment**: "Pre-Production-Testing" configured in GitHub

### **Debug Commands**
```bash
# Check DNS resolution
nslookup tools.bonnevalsolutions.com
nslookup preview.bonnevalsolutions.com

# Check Vercel deployment
vercel ls

# Test local routing
curl -H "Host: tools.bonnevalsolutions.com" http://localhost:3000
curl -H "Host: preview.bonnevalsolutions.com" http://localhost:3000
```

## 📞 **Common Issues & Solutions**

### **Issue: "Domain not found"**
**Solution**: Check DNS records and wait for propagation

### **Issue: "SSL certificate error"**
**Solution**: Vercel handles SSL automatically, check domain is added

### **Issue: "Routing not working"**
**Solution**: Verify Next.js and Vercel config files

### **Issue: "Wrong branding showing"**
**Solution**: Check environment detection in company config

## 🚀 **Next Steps**

1. **Complete DNS Setup**: Add all required CNAME records
2. **Configure Vercel**: Add domains in Vercel dashboard
3. **Test Deployment**: Push to test branch and verify
4. **Setup Intranet**: Configure OVH server for internal tools
5. **Setup Client Portal**: Configure OVH server for client access

---

**Status**: ✅ Configuration Complete - Ready for DNS Setup  
**Next Step**: Configure DNS records and add domains in Vercel  
**Priority**: High - Required for subdomains to work
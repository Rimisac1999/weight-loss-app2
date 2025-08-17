# 🚀 Tools Subdomain Setup Guide

## Overview
This guide explains how to set up `tools.bonnevalsolutions.com` as a separate subdomain for your tools, providing a clean separation from your main website.

## 🏗️ What We've Built

### 1. **New App Structure**
- **`/app/tools-domain/`** - New tools application
- **`/app/tools-domain/layout.tsx`** - Dedicated layout for tools
- **`/app/tools-domain/page.tsx`** - Tools landing page
- **`/app/tools-domain/memorizer/page.tsx`** - Memorizer tool page

### 2. **Configuration Files**
- **`next.config.js`** - Subdomain routing and rewrites
- **`vercel.json`** - Vercel deployment configuration
- **`SUBDOMAIN_SETUP.md`** - This setup guide

## 🌐 DNS Configuration

### Step 1: Add DNS Record
In your DNS provider (where `bonnevalsolutions.com` is managed), add:

```
Type: CNAME
Name: tools
Value: cname.vercel-dns.com
TTL: 3600 (or default)
```

### Step 2: Verify DNS
Wait for DNS propagation (usually 5-15 minutes), then verify:
```bash
nslookup tools.bonnevalsolutions.com
```

## ⚙️ Vercel Configuration

### Step 1: Add Domain in Vercel
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Domains**
3. Add `tools.bonnevalsolutions.com`
4. Vercel will automatically detect the CNAME record

### Step 2: Environment Variables (Optional)
If you need different environment variables for tools:
1. Go to **Settings** → **Environment Variables**
2. Add variables with scope: `tools.bonnevalsolutions.com`

## 🔄 How It Works

### URL Structure
- **Main site**: `bonnevalsolutions.com` → `/app/page.tsx`
- **Tools subdomain**: `tools.bonnevalsolutions.com` → `/app/tools-domain/page.tsx`
- **Memorizer tool**: `tools.bonnevalsolutions.com/memorizer` → `/app/tools-domain/memorizer/page.tsx`

### Routing Logic
1. **Next.js rewrites** handle subdomain routing
2. **Vercel configuration** ensures proper deployment
3. **Clean separation** between main site and tools

## 🧪 Testing

### Local Development
```bash
# Test main site
npm run dev

# Test tools subdomain (add to /etc/hosts for local testing)
# 127.0.0.1 tools.bonnevalsolutions.local
```

### Production Testing
1. Push changes to `test-cursor-agent` branch
2. GitHub Actions will deploy to Vercel
3. Test both domains:
   - `bonnevalsolutions.com` (main site)
   - `tools.bonnevalsolutions.com` (tools)

## 📁 File Organization

```
app/
├── layout.tsx              # Main site layout
├── page.tsx                # Main site home
├── client/                 # Client portal
├── intranet/              # Intranet portal
└── tools-domain/          # 🆕 Tools subdomain
    ├── layout.tsx         # Tools-specific layout
    ├── page.tsx           # Tools landing page
    └── memorizer/
        └── page.tsx       # Memorizer tool

components/
├── tools/                 # Tool components (shared)
│   └── MemorizerTool.tsx
├── Header.tsx             # Main site header
├── ToolsHeader.tsx        # Tools header (if needed)
└── ...                    # Other components
```

## 🎯 Benefits

1. **Clean Separation**: Tools are completely isolated from main site
2. **Independent Development**: Can develop tools without affecting main site
3. **Different Branding**: Tools can have their own look and feel
4. **Scalability**: Easy to add more tools and subdomains
5. **Maintenance**: Simpler to maintain and update tools independently

## 🚨 Important Notes

1. **DNS Propagation**: Allow time for DNS changes to propagate
2. **Vercel Domains**: Ensure domain is properly added in Vercel
3. **SSL Certificates**: Vercel automatically handles SSL for subdomains
4. **Testing**: Always test both domains after deployment

## 🔧 Troubleshooting

### Common Issues
1. **DNS not resolving**: Wait for propagation, check CNAME record
2. **Vercel not recognizing domain**: Verify DNS and domain addition
3. **Routing not working**: Check Next.js config and Vercel settings

### Debug Commands
```bash
# Check DNS resolution
nslookup tools.bonnevalsolutions.com

# Check Vercel deployment
vercel ls

# Test local routing
curl -H "Host: tools.bonnevalsolutions.com" http://localhost:3000
```

## 📞 Support
If you encounter issues:
1. Check Vercel deployment logs
2. Verify DNS configuration
3. Test with different browsers/devices
4. Check GitHub Actions workflow status

---

**Status**: ✅ Setup Complete - Ready for DNS Configuration
**Next Step**: Configure DNS and add domain in Vercel
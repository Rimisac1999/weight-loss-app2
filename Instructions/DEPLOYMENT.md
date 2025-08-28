# Weight Tracker PWA - Deployment & Testing Guide

## Prerequisites

- Node.js 18+ installed
- pnpm package manager installed (`npm install -g pnpm`)
- Supabase account (free tier works)
- Vercel account (for deployment, free tier works)

## Local Development Setup

### 1. Install Dependencies

```bash
# Clone the repository (if not already done)
# Install all dependencies
pnpm install
```

### 2. Set up Supabase

1. Create a new Supabase project at https://supabase.com
2. Go to Settings > API to find your project URL and anon key
3. Run the database schema:
   - Go to SQL Editor in Supabase dashboard
   - Copy the contents of `supabase/schema.sql`
   - Paste and run the SQL

### 3. Configure Environment Variables

```bash
# Copy the example env file
cp apps/web/.env.example apps/web/.env.local

# Edit apps/web/.env.local with your values:
# - NEXT_PUBLIC_SUPABASE_URL: Your Supabase project URL
# - NEXT_PUBLIC_SUPABASE_ANON_KEY: Your Supabase anon key
```

### 4. Run Development Server

```bash
# From the root directory
pnpm dev

# The app will be available at http://localhost:3000
```

## Testing the PWA Locally

### Basic Functionality Testing

1. **Onboarding Flow**
   - Navigate to http://localhost:3000
   - Complete the onboarding form with test data
   - Verify data saves to IndexedDB (check DevTools > Application > IndexedDB)

2. **PWA Installation**
   - In Chrome: Look for install icon in address bar
   - Click to install the PWA
   - Verify app opens in standalone mode

3. **Offline Mode**
   - Open DevTools > Network
   - Set to "Offline"
   - Try adding meals, weights, and activities
   - Verify data is saved locally
   - Go back online and verify sync

4. **Core Features to Test**
   - [ ] Add weight entry
   - [ ] Add manual meal
   - [ ] Add photo meal (mock AI response for now)
   - [ ] Log alcohol intake
   - [ ] View projections
   - [ ] Create and test scenarios
   - [ ] Export data

### Build for Production Testing

```bash
# Build the application
pnpm build

# Run production build locally
cd apps/web
pnpm start

# Test at http://localhost:3000
```

## Deployment to Vercel

### 1. Prepare for Deployment

```bash
# Ensure everything builds cleanly
pnpm build
pnpm typecheck
pnpm lint
```

### 2. Deploy with Vercel CLI

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# From the root directory
vercel

# Follow prompts:
# - Set up and deploy: Y
# - Which scope: Your account
# - Link to existing project: N
# - Project name: weight-tracker-pwa
# - Directory: ./apps/web
# - Override settings: N
```

### 3. Configure Environment Variables in Vercel

1. Go to your project in Vercel dashboard
2. Settings > Environment Variables
3. Add the same variables from your `.env.local`

### 4. Deploy to Production

```bash
vercel --prod
```

## Post-Deployment Testing Checklist

### Mobile PWA Testing
1. Open the deployed URL on mobile device
2. Install PWA from browser menu
3. Test offline functionality
4. Test camera access for meal photos
5. Verify responsive design

### Cross-Browser Testing
- [ ] Chrome/Edge (Desktop & Mobile)
- [ ] Safari (iOS)
- [ ] Firefox
- [ ] Samsung Internet

### Performance Testing
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] Offline mode works seamlessly

### Security Testing
- [ ] Row Level Security works (users can't see each other's data)
- [ ] HTTPS enforced
- [ ] API keys not exposed in client

## Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   # Clear all caches and reinstall
   pnpm clean
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   ```

2. **Supabase Connection Issues**
   - Verify environment variables are set correctly
   - Check Supabase project is not paused
   - Ensure RLS policies are enabled

3. **PWA Not Installing**
   - Ensure HTTPS is enabled (automatic on Vercel)
   - Check manifest.json is served correctly
   - Verify service worker registration

4. **Offline Sync Issues**
   - Check IndexedDB in DevTools
   - Verify background sync is enabled
   - Check console for sync errors

## Next Steps

Once basic deployment is verified:

1. **Set up AI Integration**
   - Configure AI service endpoint
   - Test photo-to-macro conversion
   - Implement BYOK option

2. **Analytics Setup**
   - Configure Plausible or PostHog
   - Set up custom events
   - Enable privacy-friendly tracking

3. **Performance Optimization**
   - Enable image optimization
   - Configure CDN
   - Implement lazy loading

4. **Monitoring**
   - Set up error tracking (Sentry)
   - Configure uptime monitoring
   - Set up performance monitoring

## Support

For issues or questions:
- Check the console for errors
- Review network requests in DevTools
- Verify all environment variables are set
- Check Supabase logs for database errors
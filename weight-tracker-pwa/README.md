# Weight Tracker PWA

A minimalist Progressive Web App for tracking weight, meals, and activities with AI-powered food recognition and weight projections.

## Features

- 📸 AI photo-to-macros food logging with confidence scores
- 📊 Weight projections (2/4/8/12/24 weeks) with naive/adaptive models
- 💪 Activity tracking (Zone 2, resistance, steps, floors)
- 🍺 Alcohol intake tracking with auto-kcal calculation
- 📱 Fully offline-first with seamless sync
- 🔒 Privacy-focused with row-level security

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Supabase (Postgres, Auth, Storage)
- **Offline**: IndexedDB with Dexie
- **State**: Zustand + React Query
- **PWA**: next-pwa with Workbox
- **Monorepo**: pnpm + Turborepo

## Project Structure

```
weight-tracker-pwa/
├── apps/
│   └── web/               # Next.js PWA
├── packages/
│   ├── core/             # Business logic & formulas
│   ├── schemas/          # Zod schemas & TypeScript types
│   └── ui/               # Shared UI components
└── supabase/             # Database schema
```

## Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Set up Supabase**:
   - Create a new Supabase project
   - Run the schema SQL in `supabase/schema.sql`
   - Copy `.env.local.example` to `.env.local` and fill in your Supabase credentials

3. **Run development server**:
   ```bash
   pnpm dev
   ```

4. **Build for production**:
   ```bash
   pnpm build
   ```

## Core Formulas

### BMR (Mifflin-St Jeor)
- Male: BMR = 10×W(kg) + 6.25×H(cm) - 5×Age + 5
- Female: BMR = 10×W(kg) + 6.25×H(cm) - 5×Age - 161

### TDEE
- TDEE = BMR × Activity Factor (1.2-1.9)

### Exercise Energy
- Zone 2: MET-based calculation (default 3.3 MET for moderate walking)
- Resistance: 3.5-6.0 MET depending on intensity
- Steps: ~0.5-0.6 kcal/step based on weight and stride
- Floors: Potential energy calculation with 25% efficiency

### Weight Projection
- Naive: Δweight(kg) = deficit / 7700
- Adaptive: Includes metabolic adaptation (5-15% TDEE reduction)

## Development Roadmap

- [x] Week 1-2: Core models, formulas, offline DB, PWA shell
- [ ] Week 3: Projections, simulator, weight tracking
- [ ] Week 4: Alcohol module, analytics, exports
- [ ] Future: React Native app, enhanced AI features

## License

MIT
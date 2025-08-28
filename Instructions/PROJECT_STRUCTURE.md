# Weight Tracker App - Complete Project Structure

## Overview
This is a **Weight Tracker Progressive Web App (PWA)** built with Next.js 14, featuring AI-powered food recognition, weight projections, and offline-first functionality. The project uses a monorepo structure with pnpm workspaces and Turborepo for efficient development.

## Root Structure
```
weight-loss-app2/
_|- README.md                           # Main project documentation
_|- package.json                        # Root package.json with workspace configuration
_|- pnpm-workspace.yaml                 # PNPM workspace configuration
_|- pnpm-lock.yaml                      # PNPM lock file
_|- turbo.json                          # Turborepo configuration
_|- tsconfig.json                       # Root TypeScript configuration
_|- QUICK_START.md                      # Quick start guide
_|- PROJECT_STRUCTURE.md                # This file - complete structure overview
_|- SUPABASE_SETUP.md                   # Supabase database setup instructions
_|- GPT_Instructions_Development.md     # Development instructions for AI assistance
_|- Instructions/                        # Additional instruction files
_|  _|- BROWSER_DEPLOYMENT.md           # Browser deployment guide
_|  _|- DEPLOYMENT.md                   # General deployment instructions
_|  _|- NAMING_CONVENTIONS.md           # Code naming conventions
_|- supabase/                           # Database schema and configuration
_|  _|- schema.sql                      # PostgreSQL database schema
_|- weight-loss-app2/                   # Main application directory
_|  _|- apps/                           # Application packages
_|  _|- packages/                       # Shared library packages
_|  _|- node_modules/                   # Root dependencies
_|- weird_nutrition_trw/                # Additional research/documentation
_|  _|- Fasting 20–120 Hours What Happens in Your Body.pdf
_|  _|- genteic_optimization.md
_|  _|- weird_nutrition_trw.md
_|  _|- WhatsApp Image 2025-08-23 à 14.31.58_36ac3d1c.jpg
_|  _|- WhatsApp Image 2025-08-23 à 15.09.37_e9e26882.jpg
```

## Main Application Structure (weight-loss-app2/)

### Apps Directory (`apps/`)
Contains the main Next.js web application:

```
apps/
_|- web/                                # Next.js 14 PWA application
    _|- app/                            # Next.js App Router directory
        _|- auth/                       # Authentication pages
        |   _|- callback/               # OAuth callback handling
        |   |   _|- page.tsx            # OAuth callback page
        |   _|- layout.tsx              # Auth layout wrapper
        |   _|- login/                  # User login
        |   |   _|- page.tsx            # Login form page
        |   _|- signup/                 # User registration
        |   |   _|- page.tsx            # Signup form page
        _|- dashboard/                  # Main user dashboard
        |   _|- page.tsx                # Dashboard with weight tracking, meals, activities
        _|- globals.css                 # Global CSS styles
        _|- layout.tsx                  # Root application layout
        _|- onboarding/                 # User profile setup
        |   _|- page.tsx                # Multi-step onboarding form
        _|- page.tsx                    # Landing/home page
        _|- providers.tsx               # React context providers
    _|- lib/                            # Utility libraries and configurations
        _|- db/                         # Database utilities
        |   _|- schema.ts               # Database schema definitions
        |   _|- sync.ts                 # Offline sync functionality
        _|- hooks/                      # Custom React hooks
        |   _|- useAuth.ts              # Authentication hook
        _|- supabase/                   # Supabase client configuration
        |   _|- client.ts               # Supabase client setup
        |   _|- database.types.ts       # Generated database types
        |   _|- server.ts               # Server-side Supabase setup
        _|- utils/                      # Utility functions
        |   _|- transformers.ts         # Data transformation utilities
    _|- next-env.d.ts                  # Next.js type definitions
    _|- next.config.js                 # Next.js configuration
    _|- package.json                    # Web app dependencies
    _|- postcss.config.js              # PostCSS configuration
    _|- public/                         # Static assets
        _|- manifest.json               # PWA manifest file
    _|- tailwind.config.ts             # Tailwind CSS configuration
    _|- tsconfig.json                  # TypeScript configuration
```

### Packages Directory (`packages/`)
Contains shared libraries used across the application:

```
packages/
_|- core/                               # Business logic and calculation formulas
    _|- dist/                           # Compiled JavaScript output
        _|- constants.d.ts              # Type definitions for constants
        _|- constants.d.ts.map          # Source map for constants
        _|- constants.js                # Compiled constants
        _|- formulas/                   # Compiled formula modules
        |   _|- alcohol.d.ts            # Alcohol calculation types
        |   _|- alcohol.d.ts.map        # Alcohol source map
        |   _|- alcohol.js              # Alcohol calculation logic
        |   _|- bmr.d.ts                # BMR calculation types
        |   _|- bmr.d.ts.map            # BMR source map
        |   _|- bmr.js                  # BMR calculation logic
        |   _|- exercise.d.ts           # Exercise calculation types
        |   _|- exercise.d.ts.map       # Exercise source map
        |   _|- exercise.js             # Exercise calculation logic
        |   _|- tdee.d.ts               # TDEE calculation types
        |   _|- tdee.d.ts.map           # TDEE source map
        |   _|- tdee.js                 # TDEE calculation logic
        |   _|- weight-projection.d.ts  # Weight projection types
        |   _|- weight-projection.d.ts.map # Weight projection source map
        |   _|- weight-projection.js    # Weight projection logic
        _|- index.d.ts                  # Main package types
        _|- index.d.ts.map              # Main package source map
        _|- index.js                    # Main package entry point
    _|- node_modules/                   # Package dependencies
    _|- package.json                    # Core package configuration
    _|- src/                            # Source code
        _|- constants.ts                # Application constants
        _|- formulas/                   # Calculation formulas
        |   _|- alcohol.ts              # Alcohol intake calculations
        |   _|- bmr.ts                  # Basal Metabolic Rate (Mifflin-St Jeor)
        |   _|- exercise.ts             # Exercise energy calculations
        |   _|- tdee.ts                 # Total Daily Energy Expenditure
        |   _|- weight-projection.ts    # Weight projection algorithms
        _|- index.ts                    # Main package exports
    _|- tsconfig.json                   # TypeScript configuration

_|- schemas/                            # Data validation schemas and types
    _|- dist/                           # Compiled output
        _|- activity.d.ts               # Activity schema types
        _|- activity.d.ts.map           # Activity source map
        _|- activity.js                 # Activity schema
        _|- ai.d.ts                     # AI-related schema types
        _|- ai.d.ts.map                 # AI source map
        _|- ai.js                       # AI schema
        _|- alcohol.d.ts                # Alcohol schema types
        _|- alcohol.d.ts.map            # Alcohol source map
        _|- alcohol.js                  # Alcohol schema
        _|- common.d.ts                 # Common schema types
        _|- common.d.ts.map             # Common source map
        _|- common.js                   # Common schemas
        _|- index.d.ts                  # Main schemas types
        _|- index.d.ts.map              # Main schemas source map
        _|- index.js                    # Main schemas entry point
        _|- meal.d.ts                   # Meal schema types
        _|- meal.d.ts.map               # Meal source map
        _|- meal.js                     # Meal schema
        _|- profile.d.ts                # Profile schema types
        _|- profile.d.ts.map            # Profile source map
        _|- profile.js                  # Profile schema
        _|- scenario.d.ts               # Scenario schema types
        _|- scenario.d.ts.map           # Scenario source map
        _|- scenario.js                 # Scenario schema
        _|- user.d.ts                   # User schema types
        _|- user.d.ts.map               # User source map
        _|- user.js                     # User schema
        _|- weight.d.ts                 # Weight schema types
        _|- weight.d.ts.map             # Weight source map
        _|- weight.js                   # Weight schema
    _|- node_modules/                   # Package dependencies
    _|- package.json                    # Schemas package configuration
    _|- src/                            # Source code
        _|- activity.ts                 # Activity tracking schemas
        _|- ai.ts                       # AI food recognition schemas
        _|- alcohol.ts                  # Alcohol intake schemas
        _|- common.ts                   # Common/shared schemas
        _|- index.ts                    # Main schemas exports
        _|- meal.ts                     # Meal logging schemas
        _|- profile.ts                  # User profile schemas
        _|- scenario.ts                 # Weight projection scenarios
        _|- user.ts                     # User authentication schemas
        _|- weight.ts                   # Weight tracking schemas
    _|- tsconfig.json                   # TypeScript configuration

_|- ui/                                 # Shared UI components
    _|- node_modules/                   # Package dependencies
    _|- package.json                    # UI package configuration
    _|- src/                            # Source code
        _|- components/                 # Reusable UI components
        |   _|- Button.tsx              # Button component
        |   _|- Card.tsx                # Card component
        _|- index.ts                    # UI components exports
    _|- tsconfig.json                   # TypeScript configuration
```

## Key Features by Directory

### Authentication (`apps/web/app/auth/`)
- **Login Page**: User authentication with email/password
- **Signup Page**: New user registration
- **Callback Page**: OAuth authentication handling
- **Layout**: Authentication wrapper with consistent styling

### Dashboard (`apps/web/app/dashboard/`)
- **Main Dashboard**: Weight tracking, meal logging, activity monitoring
- **Features**: 
  - Weight entry and history
  - Meal photo logging with AI recognition
  - Activity tracking (Zone 2, resistance, steps, floors)
  - Progress charts and analytics

### Onboarding (`apps/web/app/onboarding/`)
- **Multi-step Setup**: User profile creation
- **Steps**:
  1. Basic Information (sex, birth year)
  2. Body Measurements (height, weight)
  3. Activity Level and Preferences
- **Data Collection**: Gathers initial user data for calculations

### Core Formulas (`packages/core/src/formulas/`)
- **BMR**: Basal Metabolic Rate using Mifflin-St Jeor equation
- **TDEE**: Total Daily Energy Expenditure calculations
- **Exercise**: Energy expenditure for various activities
- **Weight Projection**: Future weight predictions based on caloric intake
- **Alcohol**: Alcohol intake calculations and conversions

### Data Schemas (`packages/schemas/src/`)
- **User Management**: Authentication and profile data
- **Nutrition**: Meal, food, and macro tracking
- **Activity**: Exercise and movement tracking
- **Weight**: Weight measurements and trends
- **AI**: Food recognition and analysis data structures

### UI Components (`packages/ui/src/components/`)
- **Button**: Reusable button component with variants
- **Card**: Card layout component for content organization
- **Shared Styling**: Consistent design system components

## Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Hook Form**: Form handling and validation
- **Zod**: Schema validation

### Backend & Database
- **Supabase**: PostgreSQL database with real-time features
- **Row Level Security**: Data privacy and access control
- **Offline Support**: IndexedDB with Dexie for offline-first functionality

### State Management
- **Zustand**: Lightweight state management
- **React Query**: Server state management and caching

### PWA Features
- **Service Workers**: Offline functionality
- **Manifest**: App-like installation experience
- **Workbox**: Progressive web app tooling

### Development Tools
- **Turborepo**: Monorepo build system
- **PNPM**: Fast package manager
- **ESLint**: Code quality and consistency

## Development Workflow

1. **Setup**: Install dependencies with `pnpm install`
2. **Development**: Run `pnpm dev` for development server
3. **Building**: Use `pnpm build` for production builds
4. **Testing**: Run `pnpm test` for test execution
5. **Linting**: Use `pnpm lint` for code quality checks

## Database Schema

The application uses PostgreSQL with the following main tables:
- **profiles**: User profile information
- **weights**: Weight tracking data
- **meals**: Food and meal logging
- **activities**: Exercise and movement tracking
- **alcohol**: Alcohol intake records

## Deployment

The application is designed as a Progressive Web App that can be:
- Deployed to web hosting services
- Installed on mobile devices
- Used offline with local data storage
- Synced when online connectivity is restored

This structure provides a scalable, maintainable foundation for a comprehensive weight tracking application with modern web technologies and offline-first capabilities.

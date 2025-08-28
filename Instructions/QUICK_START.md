# Quick Start Guide

## Node.js Shortcuts

Since Node.js was installed for the current user only, use these shortcuts to run Node.js tools:

### Batch Files (Windows)
- `.\node.bat` - Run Node.js
- `.\npm.bat` - Run npm package manager
- `.\pnpm.bat` - Run pnpm (faster package manager)

### Examples
```bash
# Check versions
.\node.bat --version
.\npm.bat --version
.\pnpm.bat --version

# Install dependencies (already done)
.\pnpm.bat install

# Run development server
.\pnpm.bat dev

# Build for production
.\pnpm.bat build
```

### PowerShell Script
Alternatively, run the PowerShell script to set up aliases for the current session:
```powershell
.\setup-node.ps1
```

After running this script, you can use `node`, `npm`, and `pnpm` directly.

## Project Structure
- `apps/web/` - Next.js PWA application
- `packages/` - Shared packages (core, schemas, ui)
- `supabase/` - Database schema and setup

## Next Steps
1. Set up Supabase (see SUPABASE_SETUP.md)
2. Configure environment variables
3. Run `.\pnpm.bat dev` to start development server

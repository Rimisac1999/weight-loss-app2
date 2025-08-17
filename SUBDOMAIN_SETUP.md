# 🚀 Subdomain Setup Guide (Vercel)

## Overview
This guide covers how to configure the Bonneval Solutions domains and subdomains on Vercel. The app is already wired for host-based routing and branding.

## What’s Included
- `bonnevalsolutions.com` → Main production site
- `preview.bonnevalsolutions.com` → Preview/testing environment
- `tools.bonnevalsolutions.com` → Tools platform (separate host, same Next.js app)

## Required Steps

### 1) DNS Setup (at your DNS provider)
Use Vercel’s recommended records:

- Apex domain (`bonnevalsolutions.com`)
  - Type: A
  - Name: @
  - Value: 76.76.21.21 (Vercel apex IP)
  - TTL: default

- `www.bonnevalsolutions.com`
  - Type: CNAME
  - Name: www
  - Value: Use the exact CNAME target shown by Vercel UI for your project (e.g. `cname.vercel-dns.com` or a variant like `cname.vercel-dns-XXX.com`)
  - TTL: default

- `preview.bonnevalsolutions.com`
  - Type: CNAME
  - Name: preview
  - Value: The exact CNAME target shown by Vercel UI for this project (same style as above)
  - TTL: default

- `tools.bonnevalsolutions.com`
  - Type: CNAME
  - Name: tools
  - Value: The exact CNAME target shown by Vercel UI for this project
  - TTL: default

Notes:
- Do not hardcode example CNAME targets; always copy the value from Vercel → Project → Settings → Domains.
- DNS propagation can take a few minutes. Verify with `nslookup` or `dig` once configured.

### 2) Add Domains in Vercel
- Go to Vercel → Your Project → Settings → Domains
- Add all of these:
  - `bonnevalsolutions.com`
  - `www.bonnevalsolutions.com`
  - `preview.bonnevalsolutions.com`
  - `tools.bonnevalsolutions.com`
- Vercel will validate the DNS automatically and show a green check when ready.

## How Routing/Branding Works
- Host-based rewrites are configured in `next.config.js` and `vercel.json`:
  - `tools.bonnevalsolutions.com` and `preview-tools.bonnevalsolutions.com` are rewritten to `app/tools-domain/*` at runtime
  - Main and preview hosts render the main app (`app/*`)
- Company branding is environment-aware via `config/company.ts` and `utils/routing.ts`:
  - Production branding on `bonnevalsolutions.com` (and `www`)
  - Preview branding only on `preview.bonnevalsolutions.com`
  - Server-side fallback treats missing `VERCEL_GIT_COMMIT_REF` as production to avoid accidental preview branding on main

## Local Development
- `npm run dev` will run on `localhost`. Branding defaults to production locally. To simulate preview branding locally, you can:
  - Temporarily set `VERCEL_GIT_COMMIT_REF` to something other than `main` in the shell when running the dev server, e.g.:
    ```bash
    VERCEL_GIT_COMMIT_REF=feature/preview npm run dev
    ```
  - Or override UI text temporarily in the code while testing.
- If you want to simulate subdomains locally, add entries to `/etc/hosts` and run a local proxy (optional). Otherwise, rely on Vercel preview deployments for realistic testing.

## Deployment
- Connect the repository to Vercel (Project → Git Integration).
- Pushing to `main` triggers a Production deployment → `bonnevalsolutions.com`
- Pull requests/other branches trigger Preview deployments → accessible via Vercel-generated preview URLs; branding will appear as preview when hosted on `preview.bonnevalsolutions.com`.

## Test Checklist (after DNS propagates)
- `https://bonnevalsolutions.com` shows “Bonneval Solutions” (production branding)
- `https://preview.bonnevalsolutions.com` shows “Preview Bonneval Solutions”
- `https://tools.bonnevalsolutions.com` loads the tools home
- `https://tools.bonnevalsolutions.com/memorizer` loads the Memorizer tool

## File Map (reference)
```
app/
├── layout.tsx                 # Main site layout (uses environment-aware company info)
├── page.tsx                   # Main site home
├── tools-domain/              # Tools subdomain pages
│   ├── layout.tsx             # Tools layout
│   ├── page.tsx               # Tools landing
│   └── memorizer/page.tsx     # Memorizer tool

config/
└── company.ts                 # Environment-aware company config

utils/
└── routing.ts                 # Host detection helpers

next.config.js                 # Host-based rewrites/headers
vercel.json                    # Vercel rewrites/headers (deploy config)
```

## Troubleshooting
- Domain not resolving:
  - Verify DNS CNAME/A records match the exact targets from Vercel UI
  - Check Vercel → Project → Domains for verification status
- Tools not loading:
  - Confirm `tools.bonnevalsolutions.com` exists in Vercel Domains
  - Ensure DNS for `tools` subdomain points to the Vercel CNAME target
- Preview branding visible on production:
  - Redeploy `main` on Vercel
  - Ensure your production visit is on `bonnevalsolutions.com` (not preview)
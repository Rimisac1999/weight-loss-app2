Objective (v1)

A minimalist PWA that:
	•	Logs meals (manual + photo → AI macro/kcal estimate with confidence).
	•	Tracks alcohol intake (pints, wine bottles; auto-kcal by ABV).
	•	Maintains a profile (sex, height, weight, age, activity) → TDEE.
	•	Records daily weight and compares against model predictions.
	•	Projects weight change over 2/4/8/12/24 weeks.
	•	Simulates scenarios (±kcal, ±Z2/resistance mins, ±steps, ±floors).
	•	Fully offline-first with seamless sync when online.

⸻

Tech Stack (shipping quickly + future RN)

Monorepo
	•	pnpm + Turborepo (workspaces: app-web, app-mobile, packages/core, packages/ui, packages/schemas).

Web (PWA)
	•	Next.js (App Router) + React + TypeScript
	•	Styling: Tailwind CSS + Headless UI (minimalist, accessible)
	•	State: Zustand (local UI) + React Query (server sync)
	•	Forms/validation: React Hook Form + Zod
	•	Charts: Recharts (small, flexible)
	•	Offline/PWA: Workbox (precaching + background sync)
	•	Local storage: IndexedDB via Dexie (full offline data store)

Backend
	•	Supabase (Postgres + Auth + Row Level Security + S3-compatible storage)
	•	tRPC (type-safe API) or Supabase SQL RPC (pick one; tRPC recommended for dev speed)
	•	Image processing queue: Supabase Functions or Cloudflare Workers (webhook from app to process photo→AI)
	•	Secrets: Supabase Vault (if you host the AI key), OR BYOK routed via a stateless edge function (not stored).

AI food recognition (photo→macros)
	•	Provider: OpenAI “vision” style model (or equivalent).
	•	Pattern: serverless proxy receives image + prompt → returns structured JSON; store both result + confidence.
	•	BYOK option: accept a user API key; never persist; send only per request; warn about revocation risks.

CI/CD
	•	GitHub Actions: test → typecheck → lint → preview deploy → production deploy
	•	Vercel (web) + Supabase (DB/storage/functions)

Testing
	•	Unit: Vitest + React Testing Library
	•	E2E: Playwright (critical flows only: onboarding, log meal, projection)

Analytics & Privacy
	•	Plausible or PostHog (self-hostable) with cookieless mode.

Path to React Native
	•	app-mobile: Expo + React Native
	•	Share packages/core (all formulas, projection engine, Zod schemas) and packages/schemas.
	•	UI can later migrate via Tamagui/NativeWind if you want shared components; v1 keep web UI separate for speed.

⸻

Data Model (Postgres, simplified)

users(id, email, created_at)
profiles(user_id FK, sex ENUM('male','female'), birth_year INT, height_cm INT,
         activity_level ENUM('sedentary','light','moderate','high','athlete'),
         stride_cm INT NULL, preferred_units ENUM('metric','imperial'))

weights(id, user_id, date DATE, weight_kg NUMERIC(5,2), note TEXT)

meals(id, user_id, logged_at TIMESTAMP, source ENUM('manual','photo'),
      total_kcal NUMERIC(6,1), protein_g NUMERIC(6,1), carbs_g NUMERIC(6,1), fat_g NUMERIC(6,1),
      ai_confidence_pct NUMERIC(5,2) NULL, photo_url TEXT NULL, raw_ai JSONB NULL)

meal_items(id, meal_id FK, name TEXT, grams NUMERIC(7,1) NULL,
           kcal NUMERIC(6,1), protein_g NUMERIC(6,1), carbs_g NUMERIC(6,1), fat_g NUMERIC(6,1),
           confidence_pct NUMERIC(5,2) NULL)

alcohol_logs(id, user_id, date DATE, type ENUM('beer_pint','wine_bottle','custom'),
             volume_ml INT, abv_pct NUMERIC(4,1), kcal_est NUMERIC(6,1))

activities(id, user_id, date DATE,
           z2_minutes INT DEFAULT 0, resistance_minutes INT DEFAULT 0,
           steps INT DEFAULT 0, floors INT DEFAULT 0, notes TEXT)

scenarios(id, user_id, name TEXT,
          delta_kcal_per_day INT, z2_min_per_day INT, resistance_min_per_day INT,
          steps_per_day INT, floors_per_day INT, start_date DATE, horizon_weeks INT)

settings(user_id PK, ai_mode ENUM('hosted','byok'), byok_hint_set BOOLEAN, locale TEXT)

Row Level Security: every table policy user_id = auth.uid().

⸻

Core Formulas & Rules (in packages/core)

1) BMR (Mifflin–St Jeor)
	•	Male: BMR = 10·W(kg) + 6.25·H(cm) − 5·Age + 5
	•	Female: BMR = 10·W + 6.25·H − 5·Age − 161

2) Activity Factor (PAL) for baseline TDEE
	•	Sedentary 1.2; Light 1.375; Moderate 1.55; High 1.725; Athlete 1.9
TDEE_baseline = BMR · PAL

3) Exercise Energy (added to TDEE)
	•	Z2 (steady cardio): use METs 2.0–5.0 depending on modality/speed.
kcal = MET · 3.5 · weight_kg · minutes / 200
Defaults: walking 4–5 km/h → MET ≈ 3.3; cycling easy → 4–6.
	•	Resistance training: Light 3.5 MET; Vigorous 6.0 MET (configurable).
	•	Steps: distance ≈ steps · stride_m; walking cost ≈ 1.0 · weight_kg · distance_km kcal.
(Heuristic: ~0.5–0.6 kcal/step at 100 kg; we compute from stride to be precise.)
	•	Floors climbed: potential energy:
J = mass_kg · 9.81 · height_m; kcal = J / (4184 · efficiency)
with step riser ~0.17 m/step; efficiency default 25%.

4) Alcohol kcal
	•	Ethanol = 7.1 kcal/g.
grams_alcohol = volume_ml · abv% · 0.789
kcal_ethanol = grams_alcohol · 7.1
Add carbs default:
	•	Lager 4.5% pint (568 ml): ≈ 200–230 kcal (set default 210).
	•	Wine 12.5% 750 ml: ≈ 600–650 kcal (set default 625).
Allow custom ABV overrides.

5) Weight Change Projection
	•	Naïve model: Δweight(kg) = cumulative_deficit_kcal / 7700.
	•	Adaptive model (optional toggle): reduce TDEE by ~5–15% over weeks of sustained deficit (cap 15%) to reflect adaptive thermogenesis.
	•	Smooth daily scale noise with 7-day EWMA for “actual vs predicted.”

6) AI Meal Estimation Contract (Vision)
Prompt the model to return strictly:

{
  "items":[{"name":"grilled chicken breast","grams":180,"kcal":300,"protein_g":54,"carbs_g":0,"fat_g":6,"confidence_pct":0.86}],
  "total":{"kcal":...,"protein_g":...,"carbs_g":...,"fat_g":...},
  "global_confidence_pct":0.82,
  "assumptions":["sauce appears light oil","portion size inferred vs plate size"]
}

We display the result + confidence, and let user nudge grams/items before saving.

⸻

Pages & Key Components
	1.	Onboarding
	•	Minimal: sex, birth year, height, starting weight, activity level, stride guess.
	•	Option: enter average weekly alcohol (later editable).
	2.	Today (Dashboard)
	•	Top cards: Net kcal (intake − TDEE), macros, alcohol today/this week.
	•	Quick actions: Add Meal, Add Alcohol, Add Weight.
	•	Mini chart: 7-day net kcal + weight.
	3.	Log Meal
	•	Photo tab: upload → AI → editable item list + confidence bar → save.
	•	Manual tab: search (local USDA/CIQUAL subset) + grams; running totals.
	4.	Alcohol
	•	Presets: pint (change ABV), glass/bottle wine; custom (ml + ABV).
	•	Auto-kcal; weekly average with sparkline.
	5.	Profile & Settings
	•	Anthropometrics, activity level, stride, units.
	•	AI settings: hosted vs BYOK; BYOK stored only in memory (per session) unless user explicitly toggles “remember on this device” (localStorage). Clear warnings.
	6.	Weight
	•	Daily quick entry; 7-day EWMA; compare to model curve; deviation summary.
	7.	Projections
	•	Choose model (Naïve/Adaptive).
	•	Show forecast at 2/4/8/12/24 weeks with CI band (± variability).
	•	“Why this number?” explainer: current avg intake, TDEE, exercise extras.
	8.	Scenarios (Simulator)
	•	Sliders: daily kcal ±, Z2 min/d, Resistance min/d, Steps/d, Floors/d.
	•	Output: new TDEE, deficit, weekly weight delta, timeline.
	•	Save scenario for quick compare.
	9.	History & Analytics
	•	Filters by week/month; charts: intake vs TDEE, macro split, alcohol trend, activity inputs vs predicted error.
	10.	Data

	•	Export CSV/JSON; Import (merge with conflict checks).

⸻

App Flow (happy paths)
	•	First open → Onboarding → Dashboard empty state → “Add Weight” → “Add Meal (photo)” → confirm → Dashboard updates.
	•	Evening → “Add Alcohol” → weekly average adjusts.
	•	After 7 days → Projections page shows 2/4/8/12/24-week estimates; Weight page overlays actual vs model.
	•	User tweaks Scenario sliders → sees how +15 min Z2 and −300 kcal/day change trajectory, saves as “Cut-Phase”.

⸻

UX Notes (minimalist)
	•	Single column, 8-pt spacing scale, muted palette, high contrast text.
	•	Cards, no skeuomorphism; one CTA per screen.
	•	Confidence pill on AI meals (“~82% sure”).
	•	Gentle British nudge in alcohol page tooltips; we’ll count the actual pints, not the diplomatic ones.

⸻

Security & Privacy
	•	RLS on all tables (user_id = auth.uid()), no shared rows.
	•	BYOK: default not persisted; if user opts in, store encrypted at rest on device only.
	•	Images: store original + 1280px processed copy; allow “auto-delete source after parsing” toggle.
	•	Data export is local-only download; no third-party sharing.

⸻

Acceptance Criteria (v1)
	•	PWA installable; works fully offline (log meals/weights/activities) and syncs later.
	•	AI photo flow returns structured JSON with confidence; user can edit before save.
	•	TDEE shown with formula disclosure; projections render immediately from last 14 days of data.
	•	Simulator updates projections in <150 ms per slider move.
	•	Weight chart shows actual vs model with 7-day EWMA.

⸻

Delivery Outline

Week 1–2: core models, onboarding, meal logging (manual + photo), local DB, PWA shell
Week 3: projections + simulator + weight comparison
Week 4: alcohol module, history/analytics, exports, polish, tests, CI/CD
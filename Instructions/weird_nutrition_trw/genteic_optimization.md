Love this. Let’s build you a trainability/genetics model that your app can compute from day one and get sharper every week. It estimates (1) your baseline engine, (2) your response per unit training, and (3) your ceiling—separately for run, bike, swim, and strength—then rolls it up into a single “genetics” fingerprint.

I’ll give you:
	1.	what to measure, 2) test protocols, 3) exact formulas, 4) how to normalize for training load & lifestyle, 5) scoring + interpretation, and 6) pseudocode & data schema.

⸻

1) What we measure (domains & key metrics)

Running
	•	vLT1: pace/speed at first lactate/ventilatory threshold (aerobic base).
	•	CS (Critical Speed): aerobic “ceiling” proxy from 2 short TTs.
	•	Pa:Hr drift at steady HR: durability at aerobic intensity.

Cycling
	•	pLT1: power at LT1 (or HRV/DFA proxy).
	•	CP (Critical Power) from 2–3 all-out tests.
	•	HR drift at steady aerobic power.

Swimming
	•	CSS (Critical Swim Speed) from 200/400 TT.
	•	RPE–pace stability set to set (fatigue resistance).

Strength
	•	e1RM for 3–5 lifts (squat, deadlift, bench, press, pull-up).
	•	Power repeatability: e.g., max push-ups in 2 min, vertical jump (if available).

Global physiology
	•	Resting HR, HRV (rMSSD), body mass, body-fat proxy (waist).
	•	Recovery/lifestyle: sleep duration/quality, alcohol units, nicotine/vape, illness flag.

Training dose
	•	sTRIMP/Edwards TRIMP per session (time in HR zones).
	•	Optional: RPE and session duration to compute sRPE load.

⸻

2) Standardized test protocols (repeat every 4 weeks)

Run
	•	LT1 proxy (sub-max test): 30–40 min steady at ~top of Z2. Compute Pa:Hr drift (target ≤5%). Use pace at which drift ≤5% as vLT1 for that day.
	•	CS test: Two all-out TTs on different days (e.g., 3-min and 12-min). Record distance.

Bike
	•	LT1 proxy: 30 min steady where breathing is easy, HR stable (or DFA-a1≈0.75 if you ever track it). Use mean power as pLT1.
	•	CP test: two tests (e.g., 3-min and 12-min all-out).

Swim
	•	CSS: Best 200m and 400m time (separate days).
	•	Optional: 10×100m on a fixed send-off; track pace decay.

Strength
	•	Use submax sets to estimate e1RM with a consistent formula (Epley).
	•	Benchmark: 3–5 lifts; plus 2-min push-ups or max strict pull-ups.

Baseline daily
	•	Morning RHR, HRV, body mass, waist.
	•	Sleep hrs/quality (1–5), alcohol units, nicotine/vape (y/n).

⸻

3) Exact calculations (app-friendly)

3.1 Training load (per session)

Bannister TRIMP (male):
	•	Let HRr = (HR_session_avg − HRrest) / (HRmax − HRrest)
	•	TRIMP = duration_minutes × HRr × e^(1.92 × HRr)

Or use Edwards TRIMP (zone weights 1–5) if you already log time-in-zone.

3.2 Running

Pa:Hr drift (aerobic durability)
	•	Split steady Z2 run into halves.
	•	Pace/HR ratio first half = (pace1 / HR1), second = (pace2 / HR2).
	•	Drift% = ((pace2/HR2) − (pace1/HR1)) / (pace1/HR1) × 100
	•	vLT1 = the pace (or speed) at which Drift% ≤ 5% for 30–40 min.

Critical Speed (CS)
	•	Two TTs distances: D1 (m) in T1 (s), D2 in T2.
	•	Solve linear model: D = CS × T + D′ →
CS = (D2 − D1) / (T2 − T1), D′ = D1 − CS × T1.

3.3 Cycling

pLT1: mean power during steady 30 min where drift ≤5% (or DFA-a1≈0.75).
Critical Power (CP) identical math: W = CP × T + W′ from two work outputs.

3.4 Swimming

CSS
	•	From times: CSS (m/s) = (400 − 200) / (T400 − T200). Convert to min/100m.

3.5 Strength

Epley e1RM: e1RM = weight × (1 + reps/30) (use same formula every time).
Optional Wilks/relative strength = e1RM / body mass.

3.6 “Engine” composites per sport
	•	RUN_engine = 0.6·vLT1 + 0.4·CS
	•	BIKE_engine = 0.6·pLT1 + 0.4·CP
	•	SWIM_engine = CSS
	•	STR_engine = mean(z-scores of e1RM lifts)

(Standardize units internally: store all speeds in m/s, cycling in W/kg, swim in m/s.)

⸻

4) Trainability (your “genetics” response) model

We estimate how fast you improve per unit training dose (and adjust for recovery/lifestyle). It’s not pure DNA, but over months it behaves like a genetic responsiveness fingerprint.

4.1 Dose–response slope (per domain)

For a rolling window (e.g., last 28 days):
	•	Let ΔMetric = Engine_current − Engine_28d_ago
	•	Let Dose = Σ TRIMP over same window
	•	Raw Slope S = ΔMetric / Dose

Normalize by your baseline to make it comparable:
	•	RelSlope = (ΔMetric / BaselineMetric) / Dose

4.2 Lifestyle/Recovery adjustment

Compute Recovery Score (0.6–1.1) per week:
	•	Start at 1.00
	•	Sleep <6h avg → −0.10
	•	Alcohol >4 units/week → −0.05
	•	Nicotine/vape any → −0.05
	•	Illness week → −0.10
	•	HRV below personal 7-day rolling mean by >10% → −0.05
	•	HRV above by >10% → +0.05

Adjusted slope:
	•	AdjSlope = RelSlope × RecoveryScore

4.3 Percentile vs population priors

If you don’t have population data yet, use sensible priors and refine later.

Initial priors for AdjSlope (per 1000 TRIMP) after 8 weeks:
	•	Run: 2–6% vLT1 gain → prior mean 0.004, sd 0.002
	•	Bike: 2–5% pLT1 gain → mean 0.0035, sd 0.0015
	•	Swim: 1–4% CSS gain → mean 0.0025, sd 0.0015
	•	Strength: 5–12% e1RM gain → mean 0.008, sd 0.003

Compute z-score:
	•	z = (AdjSlope − prior_mean) / prior_sd → convert to percentile.

4.4 Genetics/Trainability Scores

Per domain:
	•	G_run = percentile(z_run), G_bike, G_swim, G_str

Composite (weights by your weekly time split, e.g., 50% run, 30% strength, 20% bike):
	•	G_total = w_run·G_run + w_bike·G_bike + w_swim·G_swim + w_str·G_str

Labeling:
	•	≥80th pct: High responder
	•	40–79th: Average responder
	•	<40th: Low responder (likely needs more volume, more Z2, or better recovery)

⸻

5) Ceiling (potential) estimation

Use a simple asymptotic model for each domain:

Metric(t) = M∞ − (M∞ − M0)·e^(−k·DoseCum)
	•	M0 = baseline engine metric
	•	DoseCum = cumulative TRIMP
	•	Fit k and M∞ via least squares every 4 weeks.
	•	M∞ = your projected ceiling (interpreted as “genetic potential” under current lifestyle).
	•	Confidence grows as you accumulate more data.

Report:
	•	Time to +10% at current weekly TRIMP.
	•	Ceiling range (80% CI) for vLT1/CP/CSS after 6–12 months.

⸻

6) Strength side (parallel)

For each lift:
	•	Track e1RM and e1RM/body mass.
	•	Strength slope = Δ(e1RM/body mass)/Dose_str (where Dose_str = Σ sets × RPE × relative intensity).
	•	Compare to priors to get G_str.
	•	Optional power-endurance: 2-min max push-ups baseline→retest.

⸻

7) App implementation details

7.1 Data schema (minimal)

User {
  "id": "...",
  "sex": "M",
  "dob": "1997-..",
  "hr_max": 215,
  "hr_rest": 52
}

DailyCheck {
  "date": "2025-08-25",
  "weight_kg": 100.0,
  "waist_cm": 98,
  "rhr": 52,
  "hrv_rmssd": 48,
  "sleep_hours": 6.5,
  "alcohol_units": 0,
  "nicotine": false,
  "illness": false
}

Session {
  "id": "...",
  "date": "2025-08-25",
  "sport": "run|bike|swim|strength",
  "duration_min": 60,
  "hr_avg": 140,
  "hr_series": [ ... ], 
  "rpe": 5,
  "zones_minutes": {"z1":20,"z2":35,"z3":5},
  "trimp": 85
}

Test {
  "id":"...",
  "type":"run_cs|run_lt1|bike_cp|bike_lt1|swim_css|strength_e1rm",
  "inputs": { "D1": 950, "T1": 180, "D2": 3400, "T2": 720 },
  "results": { "CS_m_per_s": 4.25 }
}

EngineSnapshot {
  "date":"2025-08-25",
  "run_vLT1_m_per_s": 2.8,
  "run_CS_m_per_s": 3.6,
  "bike_pLT1_Wkg": 2.2,
  "bike_CP_Wkg": 3.0,
  "swim_CSS_m_per_s": 1.20,
  "str_z_mean": 0.2
}

7.2 Computation flow (weekly)
	1.	Aggregate TRIMP per sport and total.
	2.	Recompute EngineSnapshot from most recent tests or rolling estimates.
	3.	Compute Δ metrics vs 28 days ago.
	4.	Compute RelSlope and apply RecoveryScore → AdjSlope.
	5.	Convert to genetics percentiles (G_*).
	6.	Fit asymptotic ceiling model to estimate M∞ per sport.
	7.	Output dashboard + recommendations.

7.3 Pseudocode for slope & score

def rel_slope(current, baseline, trimp):
    if trimp <= 0 or baseline <= 0:
        return None
    return ((current - baseline) / baseline) / trimp

def recovery_score(sleep_hours, alcohol_units, nicotine, ill, hrv_pct_dev):
    s = 1.0
    if sleep_hours < 6: s -= 0.10
    if alcohol_units > 4: s -= 0.05
    if nicotine: s -= 0.05
    if ill: s -= 0.10
    if hrv_pct_dev < -10: s -= 0.05
    if hrv_pct_dev >  10: s += 0.05
    return max(0.6, min(1.1, s))

def genetics_percentile(adj_slope, prior_mean, prior_sd):
    z = (adj_slope - prior_mean) / prior_sd
    return norm_cdf(z) * 100.0


⸻

8) How you’ll use it (practical)
	•	Week 0: Baseline tests (LT1 proxies, CS/CP/CSS, e1RM).
	•	Weeks 1–4: Train mostly Zone 2 (70–80% of cardio time), log TRIMP, daily checks.
	•	Week 4: Retest; app computes G_run/G_bike/G_swim/G_str, shows ceiling curves and time-to-+10%.
	•	Months 2–3: Model stabilizes. You’ll see whether you’re a high/avg/low responder in each domain and where lifestyle squeezes the brakes.

⸻

9) Interpreting your results
	•	High G_run but avg G_bike → you’re naturally good at run adaptations; consider cross-training but keep run volume the anchor.
	•	Low G_run with poor RecoveryScore → likely lifestyle-limited; fix sleep/alcohol first.
	•	Rising ceiling (M∞) each month → genetics are fine; your limiting factor was dose and consistency, now solved.

⸻

Notes & nice-to-haves
	•	Use a chest strap for HR; wrist optical skews drift/TRIMP.
	•	Keep test conditions consistent (time of day, fasting vs fed, shoes, treadmill grade).
	•	If you add HRV-DFA (a1), LT1 estimation gets sharper without lactate strips.
	•	Smoking/vaping flags should down-weight RecoveryScore automatically on those days.

⸻

If you want, I can package this into:
	•	a TypeScript utils file (formulas/types),
	•	a Postgres schema (tables + indices), and
	•	a tiny Next.js API route that ingests workouts and emits your weekly G-scores + ceiling plots.
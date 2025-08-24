export const KCAL_PER_KG_BODY_WEIGHT = 7700;
export const KCAL_PER_GRAM_ETHANOL = 7.1;
export const ETHANOL_DENSITY = 0.789; // g/ml

export const ACTIVITY_FACTORS = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  high: 1.725,
  athlete: 1.9,
} as const;

export const DEFAULT_METS = {
  walking: {
    slow: 2.0, // < 3 km/h
    moderate: 3.3, // 4-5 km/h
    brisk: 4.0, // 5-6 km/h
    fast: 5.0, // > 6 km/h
  },
  cycling: {
    light: 4.0,
    moderate: 6.0,
    vigorous: 8.0,
  },
  resistance: {
    light: 3.5,
    moderate: 5.0,
    vigorous: 6.0,
  },
} as const;

export const DEFAULT_ALCOHOL_KCAL = {
  beer_pint: 210, // 568ml @ 4.5% ABV
  wine_bottle: 625, // 750ml @ 12.5% ABV
} as const;

export const STEP_RISER_HEIGHT_M = 0.17;
export const CLIMBING_EFFICIENCY = 0.25;
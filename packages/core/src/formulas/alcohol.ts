import { 
  KCAL_PER_GRAM_ETHANOL, 
  ETHANOL_DENSITY, 
  DEFAULT_ALCOHOL_KCAL 
} from '../constants';

export interface AlcoholKcalParams {
  volumeMl: number;
  abvPercent: number;
}

/**
 * Calculate calories from alcohol
 * grams_alcohol = volume(ml) * ABV% * 0.789
 * kcal = grams_alcohol * 7.1
 */
export function calculateAlcoholKcal({ volumeMl, abvPercent }: AlcoholKcalParams): number {
  const gramsAlcohol = volumeMl * (abvPercent / 100) * ETHANOL_DENSITY;
  const kcalEthanol = gramsAlcohol * KCAL_PER_GRAM_ETHANOL;
  return Math.round(kcalEthanol);
}

export type AlcoholPreset = keyof typeof DEFAULT_ALCOHOL_KCAL;

/**
 * Get default calories for common alcohol servings
 */
export function getAlcoholPresetKcal(preset: AlcoholPreset): number {
  return DEFAULT_ALCOHOL_KCAL[preset];
}
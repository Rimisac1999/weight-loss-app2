import { DEFAULT_ALCOHOL_KCAL } from '../constants';
export interface AlcoholKcalParams {
    volumeMl: number;
    abvPercent: number;
}
/**
 * Calculate calories from alcohol
 * grams_alcohol = volume(ml) * ABV% * 0.789
 * kcal = grams_alcohol * 7.1
 */
export declare function calculateAlcoholKcal({ volumeMl, abvPercent }: AlcoholKcalParams): number;
export type AlcoholPreset = keyof typeof DEFAULT_ALCOHOL_KCAL;
/**
 * Get default calories for common alcohol servings
 */
export declare function getAlcoholPresetKcal(preset: AlcoholPreset): number;
//# sourceMappingURL=alcohol.d.ts.map
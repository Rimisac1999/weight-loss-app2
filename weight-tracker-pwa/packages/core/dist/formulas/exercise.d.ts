export interface ExerciseKcalParams {
    weightKg: number;
    minutes: number;
    met: number;
}
/**
 * Calculate calories burned during exercise using MET formula
 * kcal = MET * 3.5 * weight(kg) * minutes / 200
 */
export declare function calculateExerciseKcal({ weightKg, minutes, met }: ExerciseKcalParams): number;
export interface Z2KcalParams {
    weightKg: number;
    minutes: number;
    intensity?: 'slow' | 'moderate' | 'brisk' | 'fast';
}
/**
 * Calculate calories burned during Zone 2 cardio (steady state)
 */
export declare function calculateZ2Kcal({ weightKg, minutes, intensity }: Z2KcalParams): number;
export interface ResistanceKcalParams {
    weightKg: number;
    minutes: number;
    intensity?: 'light' | 'moderate' | 'vigorous';
}
/**
 * Calculate calories burned during resistance training
 */
export declare function calculateResistanceKcal({ weightKg, minutes, intensity }: ResistanceKcalParams): number;
export interface StepsKcalParams {
    weightKg: number;
    steps: number;
    strideCm: number;
}
/**
 * Calculate calories burned from walking steps
 * Using the formula: kcal ≈ 1.0 * weight(kg) * distance(km)
 */
export declare function calculateStepsKcal({ weightKg, steps, strideCm }: StepsKcalParams): number;
export interface FloorsKcalParams {
    weightKg: number;
    floors: number;
    efficiency?: number;
}
/**
 * Calculate calories burned from climbing floors/stairs
 * Uses potential energy formula with efficiency factor
 */
export declare function calculateFloorsKcal({ weightKg, floors, efficiency }: FloorsKcalParams): number;
//# sourceMappingURL=exercise.d.ts.map
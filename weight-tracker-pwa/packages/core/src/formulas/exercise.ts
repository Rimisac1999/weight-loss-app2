import { DEFAULT_METS, STEP_RISER_HEIGHT_M, CLIMBING_EFFICIENCY } from '../constants';

export interface ExerciseKcalParams {
  weightKg: number;
  minutes: number;
  met: number;
}

/**
 * Calculate calories burned during exercise using MET formula
 * kcal = MET * 3.5 * weight(kg) * minutes / 200
 */
export function calculateExerciseKcal({ weightKg, minutes, met }: ExerciseKcalParams): number {
  return Math.round((met * 3.5 * weightKg * minutes) / 200);
}

export interface Z2KcalParams {
  weightKg: number;
  minutes: number;
  intensity?: 'slow' | 'moderate' | 'brisk' | 'fast';
}

/**
 * Calculate calories burned during Zone 2 cardio (steady state)
 */
export function calculateZ2Kcal({ 
  weightKg, 
  minutes, 
  intensity = 'moderate' 
}: Z2KcalParams): number {
  const met = DEFAULT_METS.walking[intensity];
  return calculateExerciseKcal({ weightKg, minutes, met });
}

export interface ResistanceKcalParams {
  weightKg: number;
  minutes: number;
  intensity?: 'light' | 'moderate' | 'vigorous';
}

/**
 * Calculate calories burned during resistance training
 */
export function calculateResistanceKcal({ 
  weightKg, 
  minutes, 
  intensity = 'moderate' 
}: ResistanceKcalParams): number {
  const met = DEFAULT_METS.resistance[intensity];
  return calculateExerciseKcal({ weightKg, minutes, met });
}

export interface StepsKcalParams {
  weightKg: number;
  steps: number;
  strideCm: number;
}

/**
 * Calculate calories burned from walking steps
 * Using the formula: kcal ≈ 1.0 * weight(kg) * distance(km)
 */
export function calculateStepsKcal({ weightKg, steps, strideCm }: StepsKcalParams): number {
  const distanceKm = (steps * strideCm) / 100000; // cm to km
  return Math.round(1.0 * weightKg * distanceKm);
}

export interface FloorsKcalParams {
  weightKg: number;
  floors: number;
  efficiency?: number;
}

/**
 * Calculate calories burned from climbing floors/stairs
 * Uses potential energy formula with efficiency factor
 */
export function calculateFloorsKcal({ 
  weightKg, 
  floors, 
  efficiency = CLIMBING_EFFICIENCY 
}: FloorsKcalParams): number {
  const heightM = floors * 10 * STEP_RISER_HEIGHT_M; // assume 10 steps per floor
  const joules = weightKg * 9.81 * heightM;
  const kcal = joules / (4184 * efficiency);
  return Math.round(kcal);
}
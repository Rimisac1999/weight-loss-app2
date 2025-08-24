import { ActivityLevel } from '@weight-tracker/schemas';
import { ACTIVITY_FACTORS } from '../constants';
import { BMRParams, calculateBMR } from './bmr';

export interface TDEEParams extends BMRParams {
  activityLevel: ActivityLevel;
}

/**
 * Calculate Total Daily Energy Expenditure
 * TDEE = BMR * Activity Factor (PAL)
 */
export function calculateTDEE(params: TDEEParams): number {
  const bmr = calculateBMR(params);
  const activityFactor = ACTIVITY_FACTORS[params.activityLevel];
  return Math.round(bmr * activityFactor);
}
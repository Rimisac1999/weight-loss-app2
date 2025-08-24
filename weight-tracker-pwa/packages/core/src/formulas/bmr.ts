import { Sex } from '@weight-tracker/schemas';

export interface BMRParams {
  sex: Sex;
  weightKg: number;
  heightCm: number;
  age: number;
}

/**
 * Calculate Basal Metabolic Rate using Mifflin-St Jeor equation
 * Male: BMR = 10*W(kg) + 6.25*H(cm) - 5*Age + 5
 * Female: BMR = 10*W(kg) + 6.25*H(cm) - 5*Age - 161
 */
export function calculateBMR({ sex, weightKg, heightCm, age }: BMRParams): number {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  
  if (sex === 'male') {
    return base + 5;
  } else {
    return base - 161;
  }
}
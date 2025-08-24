import { ActivityLevel } from '@weight-tracker/schemas';
import { BMRParams } from './bmr';
export interface TDEEParams extends BMRParams {
    activityLevel: ActivityLevel;
}
/**
 * Calculate Total Daily Energy Expenditure
 * TDEE = BMR * Activity Factor (PAL)
 */
export declare function calculateTDEE(params: TDEEParams): number;
//# sourceMappingURL=tdee.d.ts.map
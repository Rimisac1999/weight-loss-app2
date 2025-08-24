import { KCAL_PER_KG_BODY_WEIGHT } from '../constants';

export interface WeightProjectionParams {
  currentWeightKg: number;
  dailyDeficitKcal: number;
  horizonWeeks: number;
  adaptiveModel?: boolean;
  adaptationRate?: number; // percentage reduction in TDEE per week of deficit
}

export interface WeightProjection {
  weekNumber: number;
  projectedWeightKg: number;
  weeklyDeficitKcal: number;
  cumulativeDeficitKcal: number;
  tdeeReduction: number; // percentage
}

/**
 * Project weight change over time based on caloric deficit
 * Naive model: Δweight(kg) = cumulative_deficit / 7700
 * Adaptive model: reduces TDEE by adaptationRate per week (max 15%)
 */
export function projectWeight({
  currentWeightKg,
  dailyDeficitKcal,
  horizonWeeks,
  adaptiveModel = false,
  adaptationRate = 0.5, // 0.5% per week
}: WeightProjectionParams): WeightProjection[] {
  const projections: WeightProjection[] = [];
  let weight = currentWeightKg;
  let cumulativeDeficit = 0;
  let tdeeReduction = 0;

  for (let week = 1; week <= horizonWeeks; week++) {
    // Apply adaptive thermogenesis if enabled
    if (adaptiveModel && dailyDeficitKcal > 0) {
      tdeeReduction = Math.min(week * adaptationRate, 15); // cap at 15%
    }

    // Adjust deficit for metabolic adaptation
    const adjustedDailyDeficit = dailyDeficitKcal * (1 - tdeeReduction / 100);
    const weeklyDeficit = adjustedDailyDeficit * 7;
    cumulativeDeficit += weeklyDeficit;

    // Calculate weight change
    const weightLossKg = cumulativeDeficit / KCAL_PER_KG_BODY_WEIGHT;
    weight = currentWeightKg - weightLossKg;

    projections.push({
      weekNumber: week,
      projectedWeightKg: Math.round(weight * 10) / 10,
      weeklyDeficitKcal: Math.round(weeklyDeficit),
      cumulativeDeficitKcal: Math.round(cumulativeDeficit),
      tdeeReduction,
    });
  }

  return projections;
}

/**
 * Calculate confidence intervals for weight projections
 * Uses a simple percentage-based CI (e.g., ±5% of projected loss)
 */
export function calculateProjectionCI(
  projections: WeightProjection[],
  confidencePercent = 5
): Array<{ lower: number; upper: number }> {
  return projections.map(({ projectedWeightKg }, index) => {
    const weightLoss = projections[0].projectedWeightKg - projectedWeightKg;
    const variance = (weightLoss * confidencePercent) / 100;
    
    return {
      lower: projectedWeightKg - variance,
      upper: projectedWeightKg + variance,
    };
  });
}
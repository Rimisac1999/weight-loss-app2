export interface WeightProjectionParams {
    currentWeightKg: number;
    dailyDeficitKcal: number;
    horizonWeeks: number;
    adaptiveModel?: boolean;
    adaptationRate?: number;
}
export interface WeightProjection {
    weekNumber: number;
    projectedWeightKg: number;
    weeklyDeficitKcal: number;
    cumulativeDeficitKcal: number;
    tdeeReduction: number;
}
/**
 * Project weight change over time based on caloric deficit
 * Naive model: Δweight(kg) = cumulative_deficit / 7700
 * Adaptive model: reduces TDEE by adaptationRate per week (max 15%)
 */
export declare function projectWeight({ currentWeightKg, dailyDeficitKcal, horizonWeeks, adaptiveModel, adaptationRate, }: WeightProjectionParams): WeightProjection[];
/**
 * Calculate confidence intervals for weight projections
 * Uses a simple percentage-based CI (e.g., ±5% of projected loss)
 */
export declare function calculateProjectionCI(projections: WeightProjection[], confidencePercent?: number): Array<{
    lower: number;
    upper: number;
}>;
//# sourceMappingURL=weight-projection.d.ts.map
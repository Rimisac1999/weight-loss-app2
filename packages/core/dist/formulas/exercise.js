"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateExerciseKcal = calculateExerciseKcal;
exports.calculateZ2Kcal = calculateZ2Kcal;
exports.calculateResistanceKcal = calculateResistanceKcal;
exports.calculateStepsKcal = calculateStepsKcal;
exports.calculateFloorsKcal = calculateFloorsKcal;
const constants_1 = require("../constants");
/**
 * Calculate calories burned during exercise using MET formula
 * kcal = MET * 3.5 * weight(kg) * minutes / 200
 */
function calculateExerciseKcal({ weightKg, minutes, met }) {
    return Math.round((met * 3.5 * weightKg * minutes) / 200);
}
/**
 * Calculate calories burned during Zone 2 cardio (steady state)
 */
function calculateZ2Kcal({ weightKg, minutes, intensity = 'moderate' }) {
    const met = constants_1.DEFAULT_METS.walking[intensity];
    return calculateExerciseKcal({ weightKg, minutes, met });
}
/**
 * Calculate calories burned during resistance training
 */
function calculateResistanceKcal({ weightKg, minutes, intensity = 'moderate' }) {
    const met = constants_1.DEFAULT_METS.resistance[intensity];
    return calculateExerciseKcal({ weightKg, minutes, met });
}
/**
 * Calculate calories burned from walking steps
 * Using the formula: kcal ≈ 1.0 * weight(kg) * distance(km)
 */
function calculateStepsKcal({ weightKg, steps, strideCm }) {
    const distanceKm = (steps * strideCm) / 100000; // cm to km
    return Math.round(1.0 * weightKg * distanceKm);
}
/**
 * Calculate calories burned from climbing floors/stairs
 * Uses potential energy formula with efficiency factor
 */
function calculateFloorsKcal({ weightKg, floors, efficiency = constants_1.CLIMBING_EFFICIENCY }) {
    const heightM = floors * 10 * constants_1.STEP_RISER_HEIGHT_M; // assume 10 steps per floor
    const joules = weightKg * 9.81 * heightM;
    const kcal = joules / (4184 * efficiency);
    return Math.round(kcal);
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateBMR = calculateBMR;
/**
 * Calculate Basal Metabolic Rate using Mifflin-St Jeor equation
 * Male: BMR = 10*W(kg) + 6.25*H(cm) - 5*Age + 5
 * Female: BMR = 10*W(kg) + 6.25*H(cm) - 5*Age - 161
 */
function calculateBMR({ sex, weightKg, heightCm, age }) {
    const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
    if (sex === 'male') {
        return base + 5;
    }
    else {
        return base - 161;
    }
}

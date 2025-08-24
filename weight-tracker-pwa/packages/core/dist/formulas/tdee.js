"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTDEE = calculateTDEE;
const constants_1 = require("../constants");
const bmr_1 = require("./bmr");
/**
 * Calculate Total Daily Energy Expenditure
 * TDEE = BMR * Activity Factor (PAL)
 */
function calculateTDEE(params) {
    const bmr = (0, bmr_1.calculateBMR)(params);
    const activityFactor = constants_1.ACTIVITY_FACTORS[params.activityLevel];
    return Math.round(bmr * activityFactor);
}

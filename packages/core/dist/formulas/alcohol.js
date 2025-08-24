"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAlcoholKcal = calculateAlcoholKcal;
exports.getAlcoholPresetKcal = getAlcoholPresetKcal;
const constants_1 = require("../constants");
/**
 * Calculate calories from alcohol
 * grams_alcohol = volume(ml) * ABV% * 0.789
 * kcal = grams_alcohol * 7.1
 */
function calculateAlcoholKcal({ volumeMl, abvPercent }) {
    const gramsAlcohol = volumeMl * (abvPercent / 100) * constants_1.ETHANOL_DENSITY;
    const kcalEthanol = gramsAlcohol * constants_1.KCAL_PER_GRAM_ETHANOL;
    return Math.round(kcalEthanol);
}
/**
 * Get default calories for common alcohol servings
 */
function getAlcoholPresetKcal(preset) {
    return constants_1.DEFAULT_ALCOHOL_KCAL[preset];
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIMBING_EFFICIENCY = exports.STEP_RISER_HEIGHT_M = exports.DEFAULT_ALCOHOL_KCAL = exports.DEFAULT_METS = exports.ACTIVITY_FACTORS = exports.ETHANOL_DENSITY = exports.KCAL_PER_GRAM_ETHANOL = exports.KCAL_PER_KG_BODY_WEIGHT = void 0;
exports.KCAL_PER_KG_BODY_WEIGHT = 7700;
exports.KCAL_PER_GRAM_ETHANOL = 7.1;
exports.ETHANOL_DENSITY = 0.789; // g/ml
exports.ACTIVITY_FACTORS = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    high: 1.725,
    athlete: 1.9,
};
exports.DEFAULT_METS = {
    walking: {
        slow: 2.0, // < 3 km/h
        moderate: 3.3, // 4-5 km/h
        brisk: 4.0, // 5-6 km/h
        fast: 5.0, // > 6 km/h
    },
    cycling: {
        light: 4.0,
        moderate: 6.0,
        vigorous: 8.0,
    },
    resistance: {
        light: 3.5,
        moderate: 5.0,
        vigorous: 6.0,
    },
};
exports.DEFAULT_ALCOHOL_KCAL = {
    beer_pint: 210, // 568ml @ 4.5% ABV
    wine_bottle: 625, // 750ml @ 12.5% ABV
};
exports.STEP_RISER_HEIGHT_M = 0.17;
exports.CLIMBING_EFFICIENCY = 0.25;

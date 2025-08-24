"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreate = exports.MealItemCreate = exports.Meal = exports.MealItem = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
exports.MealItem = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    mealId: zod_1.z.string().uuid(),
    name: zod_1.z.string().min(1).max(200),
    grams: zod_1.z.number().positive().nullable(),
    kcal: zod_1.z.number().nonnegative(),
    proteinG: zod_1.z.number().nonnegative(),
    carbsG: zod_1.z.number().nonnegative(),
    fatG: zod_1.z.number().nonnegative(),
    confidencePct: zod_1.z.number().min(0).max(100).nullable(),
});
exports.Meal = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    userId: zod_1.z.string().uuid(),
    loggedAt: zod_1.z.date(),
    source: common_1.MealSource,
    totalKcal: zod_1.z.number().nonnegative(),
    proteinG: zod_1.z.number().nonnegative(),
    carbsG: zod_1.z.number().nonnegative(),
    fatG: zod_1.z.number().nonnegative(),
    aiConfidencePct: zod_1.z.number().min(0).max(100).nullable(),
    photoUrl: zod_1.z.string().url().nullable(),
    rawAi: zod_1.z.record(zod_1.z.any()).nullable(),
    items: zod_1.z.array(exports.MealItem).optional(),
});
exports.MealItemCreate = exports.MealItem.omit({ id: true, mealId: true });
exports.MealCreate = exports.Meal.omit({ id: true, userId: true }).extend({
    items: zod_1.z.array(exports.MealItemCreate).optional(),
});

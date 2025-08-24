"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIFoodEstimate = exports.AIFoodItem = void 0;
const zod_1 = require("zod");
exports.AIFoodItem = zod_1.z.object({
    name: zod_1.z.string(),
    grams: zod_1.z.number(),
    kcal: zod_1.z.number(),
    protein_g: zod_1.z.number(),
    carbs_g: zod_1.z.number(),
    fat_g: zod_1.z.number(),
    confidence_pct: zod_1.z.number().min(0).max(1),
});
exports.AIFoodEstimate = zod_1.z.object({
    items: zod_1.z.array(exports.AIFoodItem),
    total: zod_1.z.object({
        kcal: zod_1.z.number(),
        protein_g: zod_1.z.number(),
        carbs_g: zod_1.z.number(),
        fat_g: zod_1.z.number(),
    }),
    global_confidence_pct: zod_1.z.number().min(0).max(1),
    assumptions: zod_1.z.array(zod_1.z.string()),
});

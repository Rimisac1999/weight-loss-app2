"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightUpdate = exports.WeightCreate = exports.Weight = void 0;
const zod_1 = require("zod");
exports.Weight = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    userId: zod_1.z.string().uuid(),
    date: zod_1.z.date(),
    weightKg: zod_1.z.number().positive().max(500),
    note: zod_1.z.string().max(500).optional(),
});
exports.WeightCreate = exports.Weight.omit({ id: true, userId: true });
exports.WeightUpdate = exports.WeightCreate.partial();

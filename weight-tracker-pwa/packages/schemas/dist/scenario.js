"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenarioCreate = exports.Scenario = void 0;
const zod_1 = require("zod");
exports.Scenario = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    userId: zod_1.z.string().uuid(),
    name: zod_1.z.string().min(1).max(100),
    deltaKcalPerDay: zod_1.z.number().int(),
    z2MinPerDay: zod_1.z.number().int().nonnegative(),
    resistanceMinPerDay: zod_1.z.number().int().nonnegative(),
    stepsPerDay: zod_1.z.number().int().nonnegative(),
    floorsPerDay: zod_1.z.number().int().nonnegative(),
    startDate: zod_1.z.date(),
    horizonWeeks: zod_1.z.number().int().positive().max(52),
});
exports.ScenarioCreate = exports.Scenario.omit({ id: true, userId: true });

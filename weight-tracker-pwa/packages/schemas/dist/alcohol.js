"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlcoholLogCreate = exports.AlcoholLog = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
exports.AlcoholLog = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    userId: zod_1.z.string().uuid(),
    date: zod_1.z.date(),
    type: common_1.AlcoholType,
    volumeMl: zod_1.z.number().int().positive(),
    abvPct: zod_1.z.number().positive().max(100),
    kcalEst: zod_1.z.number().nonnegative(),
});
exports.AlcoholLogCreate = exports.AlcoholLog.omit({ id: true, userId: true });

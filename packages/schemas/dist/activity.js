"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityUpdate = exports.ActivityCreate = exports.Activity = void 0;
const zod_1 = require("zod");
exports.Activity = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    userId: zod_1.z.string().uuid(),
    date: zod_1.z.date(),
    z2Minutes: zod_1.z.number().int().nonnegative().default(0),
    resistanceMinutes: zod_1.z.number().int().nonnegative().default(0),
    steps: zod_1.z.number().int().nonnegative().default(0),
    floors: zod_1.z.number().int().nonnegative().default(0),
    notes: zod_1.z.string().max(1000).optional(),
});
exports.ActivityCreate = exports.Activity.omit({ id: true, userId: true });
exports.ActivityUpdate = exports.ActivityCreate.partial();

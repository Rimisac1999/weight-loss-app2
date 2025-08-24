"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdate = exports.ProfileCreate = exports.Profile = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
exports.Profile = zod_1.z.object({
    userId: zod_1.z.string().uuid(),
    sex: common_1.Sex,
    birthYear: zod_1.z.number().int().min(1900).max(new Date().getFullYear()),
    heightCm: zod_1.z.number().int().min(100).max(250),
    activityLevel: common_1.ActivityLevel,
    strideCm: zod_1.z.number().int().min(50).max(150).nullable(),
    preferredUnits: common_1.Units,
});
exports.ProfileCreate = exports.Profile.omit({ userId: true });
exports.ProfileUpdate = exports.ProfileCreate.partial();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const zod_1 = require("zod");
exports.User = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    email: zod_1.z.string().email(),
    createdAt: zod_1.z.date(),
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const APIerror_1 = __importDefault(require("../error/APIerror"));
const user = async (req, res, next) => {
    const { userId } = req.body;
    console.log('User Id', userId);
    if (!userId)
        next(APIerror_1.default.badRequest('User Id required'));
    const user = await app_1.prisma.batch.findUnique({
        where: {
            id: userId,
        },
    });
    console.log('user', user);
};
exports.default = user;

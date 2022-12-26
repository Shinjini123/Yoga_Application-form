"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIerror_1 = __importDefault(require("../error/APIerror"));
const UserFormValidation = (req, res, next) => {
    const userData = req.body;
    const { age } = userData;
    // age limit
    if (age < 18 || age > 65) {
        next(APIerror_1.default.badRequest('Age limit is between 18 - 65'));
        return;
    }
    next();
};
exports.default = UserFormValidation;

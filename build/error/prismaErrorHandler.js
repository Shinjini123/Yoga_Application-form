"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismaError_1 = __importDefault(require("./prismaError"));
function errorHandler_prisma(err, req, res, next) {
    if (err instanceof prismaError_1.default) {
        res.status(err.status_code).message({
            message: err.message
        });
        return;
    }
    res.status('P1012').json({
        message: "something went wrong to the database",
    });
}
exports.default = errorHandler_prisma;

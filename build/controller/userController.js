"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.getAllUser = exports.getUser = exports.createUser = void 0;
const APIerror_1 = __importDefault(require("../error/APIerror"));
const app_1 = require("../app");
const createUser = async (req, res, next) => {
    const userData = req.body;
    try {
        await app_1.prisma.user.create({
            data: userData,
        });
        res.status(201).json({
            message: "user created succesfully",
            user: userData
        });
    }
    catch (error) {
        next(APIerror_1.default.internal_server_error());
    }
};
exports.createUser = createUser;
const getUser = async (req, res, next) => {
    const userId = Number(req.params.id);
    try {
        const user = await app_1.prisma.user.findUnique({
            where: {
                id: userId
            }
        });
        res.status(200).json({
            message: "User Found",
            user: user
        });
    }
    catch (error) {
        next(APIerror_1.default.badRequest("User Not Found"));
    }
};
exports.getUser = getUser;
const getAllUser = async (req, res, next) => {
    const userId = Number(req.params.id);
    try {
        const user_all = await app_1.prisma.user.findMany({
            where: {
                id: userId
            }
        });
        res.status(200).json({
            message: "User Found",
            user: user_all
        });
    }
    catch (error) {
        next(APIerror_1.default.badRequest("User Not Found"));
    }
};
exports.getAllUser = getAllUser;
const deleteUser = async (req, res, next) => {
    const userId = Number(req.params.id);
    try {
        const user_all = await app_1.prisma.user.delete({
            where: {
                id: userId
            }
        });
        res.status(200).json({
            message: "User succesfully deleted",
            user: userId
        });
    }
    catch (error) {
        next(APIerror_1.default.badRequest("User Not Found"));
    }
};
exports.deleteUser = deleteUser;
const updateUser = async (req, res, next) => {
    const userId = Number(req.params.id);
    try {
        const user_update = await app_1.prisma.user.delete({
            where: {
                id: userId
            }
        });
        res.status(200).json({
            message: "User succesfully updated",
            user: userId
        });
    }
    catch (error) {
        next(APIerror_1.default.badRequest("User Not Found"));
    }
};
exports.updateUser = updateUser;

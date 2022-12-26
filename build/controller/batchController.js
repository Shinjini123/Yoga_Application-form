"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBatch = exports.deletebatch = exports.getbatch = exports.createBatch = void 0;
const APIerror_1 = __importDefault(require("../error/APIerror"));
const app_1 = require("../app");
const createBatch = async (req, res, next) => {
    const batchData = req.body;
    try {
        await app_1.prisma.user.create({
            data: batchData,
        });
        res.status(201).json({
            message: "batch created succesfully",
            user: batchData
        });
    }
    catch (error) {
        next(APIerror_1.default.internal_server_error());
    }
};
exports.createBatch = createBatch;
const getbatch = async (req, res, next) => {
    const batchId = Number(req.params.id);
    try {
        const batch = await app_1.prisma.batch.findUnique({
            where: {
                id: batchId
            }
        });
        res.status(200).json({
            message: "Batch found",
            batch: batch
        });
    }
    catch (error) {
        next(APIerror_1.default.badRequest("Something went wrong"));
    }
};
exports.getbatch = getbatch;
const deletebatch = async (req, res, next) => {
    const batchid = Number(req.params.id);
    try {
        const batch = await app_1.prisma.batch.delete({
            where: {
                id: batchid
            }
        });
        res.status(200).json({
            message: "batch succesfully deleted",
            batch: batch
        });
    }
    catch (error) {
        next(APIerror_1.default.badRequest("something went wrong"));
    }
};
exports.deletebatch = deletebatch;
const updateBatch = async (req, res, next) => {
    const batchId = Number(req.params.id);
    const batchData = req.body;
    try {
        if (batchData.batch_capacity_current > batchData.batch_capacity_max) {
            throw "Maximum capacity reached";
        }
        const batch = await app_1.prisma.batch.update({
            where: {
                id: batchId,
            },
            data: batchData
        });
        res.status(200).json({
            message: "batch updated succesfully",
            batch: batch,
        });
    }
    catch (error) {
        next(APIerror_1.default.badRequest("Something went wrong"));
    }
};
exports.updateBatch = updateBatch;

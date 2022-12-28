"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const APIerror_1 = __importDefault(require("../error/APIerror"));
const allotBatch = async (req, res, next) => {
    const { batchId } = req.body;
    console.log('Batch Id', batchId);
    if (!batchId)
        next(APIerror_1.default.badRequest('Batch Id Required'));
    const batch = await app_1.prisma.batch.findUnique({
        where: {
            id: batchId,
        },
    });
    console.log('Batch', batch);
    const { batch_capacity_max, batch_capacity_current, price } = batch;
    if (batch_capacity_current + 1 > batch_capacity_max) {
        next(APIerror_1.default.badRequest('Batch is full'));
    }
    // Set price that is fetched from batch details
    req.body['price'] = price;
    next();
};

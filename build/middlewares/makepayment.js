"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const APIerror_1 = __importDefault(require("../error/APIerror"));
const MakePayment = async (req, res, next) => {
    const { price } = req.body;
    if (!price)
        next(APIerror_1.default.internal_server_error('Failed to set price'));
    // Make payment here
    // Assume payment gateway is working fine
    // Update batch capacity
    const { batchId } = req.body;
    const batch = await app_1.prisma.batch.findUnique({
        where: {
            id: batchId,
        },
    });
    const { batch_capacity_current } = batch;
    await app_1.prisma.batch.update({
        where: {
            id: batchId,
        },
        data: {
            batch_capacity_current: batch_capacity_current + 1,
        },
    });
    // update user with batch Id
    const { userId } = req.body;
    await app_1.prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            id: batchId,
        },
    }).catch(err => {
        console.log('Error', err);
        next(APIerror_1.default.internal_server_error('Failed to update user with batch Id'));
    });
    req.body['userId'] = userId;
    res.json({ message: 'It runs successfully' });
};
exports.default = MakePayment;

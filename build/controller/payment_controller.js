"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubscription = exports.update_payment = exports.deletepayment = exports.getAllSubscription = exports.get_payment = void 0;
const APIerror_1 = __importDefault(require("../error/APIerror"));
const app_1 = require("../app");
const createSubscription = async (req, res, next) => {
    const subscription_Data = req.body;
    try {
        await app_1.prisma.user.create({
            data: subscription_Data,
        });
        res.status(201).json({
            message: "subscription created succesfully",
            payment: subscription_Data
        });
    }
    catch (error) {
        next(APIerror_1.default.internal_server_error());
    }
};
exports.createSubscription = createSubscription;
const get_payment = async (req, res, next) => {
    const payment_amount = Number(req.params.id);
    try {
        const payment = await app_1.prisma.payment.findUnique({
            where: {
                id: payment_amount
            }
        });
        res.status(201).json({
            message: "payment created succesfully",
            payment_amount: payment_amount
        });
    }
    catch (error) {
        next(APIerror_1.default.badRequest("some error occured"));
    }
};
exports.get_payment = get_payment;
const getAllSubscription = async (req, res, next) => {
    const subscription = await app_1.prisma.payment.findMany();
    res.json(subscription);
};
exports.getAllSubscription = getAllSubscription;
const update_payment = async (req, res, next) => {
    const payment_Id = Number(req.params.id);
    try {
        const payment_id = await app_1.prisma.user.delete({
            where: {
                id: payment_Id
            }
        });
        res.status(200).json({
            message: "payment succesfully updated",
            payment: payment_Id
        });
    }
    catch (error) {
        next(APIerror_1.default.badRequest("payment Not Found"));
    }
};
exports.update_payment = update_payment;
const deletepayment = async (req, res, next) => {
    const payment_id = Number(req.params.id);
    try {
        const payment = await app_1.prisma.payment.delete({
            where: {
                id: payment_id
            }
        });
        res.status(200).json({
            message: "payment succesfully deleted",
            payment_id: payment_id
        });
    }
    catch (error) {
        next(APIerror_1.default.badRequest("something went wrong"));
    }
};
exports.deletepayment = deletepayment;

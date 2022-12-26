"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update_payment = exports.deletepayment = exports.getAllSubscription = exports.get_payment = exports.createSubscription = void 0;
const APIerror_1 = __importDefault(require("../error/APIerror"));
const app_1 = require("../app");
const createSubscription = async (req, res, next) => {
    const subscriptionData = req.body;
    await app_1.prisma.payment
        .create({
        data: subscriptionData,
    })
        .then((subscriptionResponse) => {
        res.status(201).json({
            message: 'Subscription created successfully',
            subscription: subscriptionResponse,
        });
    })
        .catch((err) => {
        console.log('Error', err);
        next(APIerror_1.default.badRequest('Some error occured'));
    });
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
        res.status(200).json({
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
        const user_update = await app_1.prisma.user.delete({
            where: {
                id: payment_Id
            }
        });
        res.status(200).json({
            message: "payment succesfully updated",
            user: payment_Id
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
        const batch = await app_1.prisma.batch.delete({
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

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIerror_1 = __importDefault(require("../error/APIerror"));
const SubscriptionFormValidation = (req, res, next) => {
    const payment = req.body;
    const { payment_amount } = payment;
    if (payment_amount != 500) {
        next(APIerror_1.default.badRequest('Payment amount not matching to 500'));
        return;
    }
};
exports.default = SubscriptionFormValidation;

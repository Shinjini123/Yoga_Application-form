import { Payment, User } from "@prisma/client";
import { Request, Response, NextFunction } from "express"
import ApiError from "../error/APIerror";

const SubscriptionFormValidation = (req: Request, res: Response, next:NextFunction) => {
    const payment: Payment = req.body;
    
    const { payment_amount } = payment;

    // payment amount restriction
    if (payment_amount < 500 || payment_amount > 500) {
        next(ApiError.badRequest('Payment amount not matching to 500'));
        return;
    }
}

export default SubscriptionFormValidation;
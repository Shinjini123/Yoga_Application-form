import { NextFunction } from "express"
import { Response,Request } from "express";
import { nextTick } from "process";
import Apierror from "../error/APIerror";
import { prisma } from "../app";
import { Payment } from "@prisma/client";
export const createSubscription = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const subscriptionData: Payment = req.body;
    await prisma.payment
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
            next(Apierror.badRequest('Some error occured'));
        });
};


const get_payment=async(req:Request,res:Response,next:NextFunction)=>{
    const payment_amount=Number(req.params.id);
    try{
        const payment=await prisma.payment.findUnique({
            where:{
            id: payment_amount
            }
        })
        res.status(200).json({
            message:"payment created succesfully",
           payment_amount:payment_amount
        })
    }catch(error){
        next(Apierror.badRequest("some error occured"))
    }
    
}
export {get_payment};
export const getAllSubscription = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const subscription = await prisma.payment.findMany();
    res.json(subscription);
};

const update_payment=async(req:Request,res:Response,next:NextFunction)=>{
    const payment_Id=Number(req.params.id);
    try{
        const user_update=await prisma.user.delete({
            where:{
            id: payment_Id
            }
        })
        res.status(200).json({
            message:"payment succesfully updated",
            payment:payment_Id
        })
    }catch(error){
        next(Apierror.badRequest("payment Not Found"))
    }
    
}

const deletepayment=async(req:Request,res:Response,next:NextFunction)=>{
    const payment_id=Number(req.params.id);
    try{
        const payment=await prisma.payment.delete({
            where:{
            id: payment_id
            }
        })
        res.status(200).json({
            message:"payment succesfully deleted",
            payment_id:payment_id
        })
    }catch(error){
        next(Apierror.badRequest("something went wrong"))
    }
}
export{deletepayment,update_payment};
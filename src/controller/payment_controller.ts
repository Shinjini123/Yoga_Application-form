import { NextFunction } from "express"
import { Response,Request } from "express";
import { nextTick } from "process";
import Apierror from "../error/APIerror";
import { prisma } from "../app";

const get_payment=async(req:Request,res:Response,next:NextFunction)=>{
    const payment_amount=Number(req.params.id);
    try{
        const payment=await prisma.payment.findUnique({
            where:{
            id: payment_amount
            }
        })
        res.status(200).json({
            message:"payment done succesfully",
           payment_amount:payment_amount
        })
    }catch(error){
        next(Apierror.badRequest("payment unsuccesful"))
    }
    
}
export {get_payment};
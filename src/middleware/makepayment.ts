import { Batch } from '@prisma/client'
import { Request, Response, NextFunction } from 'express'
import { prisma } from '../app'
import ApiError from '../error/APIerror'

export const MakePayment = async (req: Request, res: Response, next: NextFunction)=>{
    const {price} = req.body
    if(!price) next (ApiError.internal_server_error("Failed to set price"))
    //Make payment
    //Assume payment runs succesfully

    //Update batch
    const {batch_id} = req.body
    const batch = await prisma.batch.findUnique({
        where: {
            id: batch_id,
        }
    })
    const {batch_capacity_current} = batch as Batch 
    await prisma.batch.update({
        where: {
            id: batch_id
        },
        data: {
            batch_capacity_current: batch_capacity_current + 1
        }
    })

    //Update user with batch
    const { userId } = req.body
    await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            batchId : batch_id ,
            payment_status: true
        }
    }).catch(error=>{
        console.log(error);
        next (ApiError.internal_server_error("user could not be updated"))
    })
    next()
}
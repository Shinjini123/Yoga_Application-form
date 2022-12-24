import { NextFunction } from "express"
import { Response,Request } from "express";
import { nextTick } from "process";
import Apierror from "../error/APIerror";
import { prisma } from "../app";
const createBatch=async (req:Request,res:Response,next:NextFunction)=>{
    const batchData=req.body;
    try{
await prisma.user.create({
    data:batchData,
});
    res.status(201).json({
        message:"batch created succesfully",
        user: batchData
    })  
    }
catch(error){
next(Apierror.internal_server_error())
}
};
const getbatch=async(req:Request,res:Response,next:NextFunction)=>{
    const batchId=Number(req.params.id);
    try{
        const batch=await prisma.batch.findUnique({
            where:{
            id: batchId
            }
        })
        res.status(200).json({
            message:"Batch found",
        batch:batch
        })
    }catch(error){
        next(Apierror.badRequest("Something went wrong"))
    }
    
}
const deletebatch=async(req:Request,res:Response,next:NextFunction)=>{
    const batchid=Number(req.params.id);
    try{
        const batch=await prisma.batch.delete({
            where:{
            id: batchid
            }
        })
        res.status(200).json({
            message:"batch succesfully deleted",
            batch:batch
        })
    }catch(error){
        next(Apierror.badRequest("something went wrong"))
    }
    
}
const updateBatch = async (req: Request, res: Response, next: NextFunction) => {
    const batchId = Number(req.params.id)
    const batchData = req.body
    try{
        if(batchData.batch_capacity_current > batchData.batch_capacity_max)
        {
            throw "Maximum capacity reached"
        }
        const batch = await prisma.batch.update({
            where: {
                id: batchId,
            },
            data: batchData
        })
        res.status(200).json({
            message: "batch updated succesfully",
            batch: batch,
        })
    }catch(error){
        next(Apierror.badRequest("Something went wrong"))
    }
}

export {createBatch,getbatch,deletebatch,updateBatch};
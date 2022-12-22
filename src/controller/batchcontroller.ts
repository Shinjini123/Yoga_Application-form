import { NextFunction } from "express"
import { Response,Request } from "express";
import { nextTick } from "process";
import Apierror from "../error/APIerror";
import { prisma } from "../app";
const create_batch_1=async (req:Request,res:Response,next:NextFunction)=>{
    const total_number=req.body;
    try{
await prisma.batch.create({
    data:total_number,
});
    res.status(201).json({
        message:"batch1 created succesfully",
        user: total_number
    }) 
}
catch(error){
    next(Apierror.internal_server_error())
    }
};
    const create_batch_2=async (req:Request,res:Response,next:NextFunction)=>{
        const total_number=req.body;
        try{
    await prisma.user.create({
        data:total_number,
    });
        res.status(201).json({
            message:"batch2 created succesfully",
            user: total_number
        }) ;
    }
        catch(error){
            next(Apierror.internal_server_error())
            }
        };
        const create_batch_3=async (req:Request,res:Response,next:NextFunction)=>{
            const total_number=req.body;
            try{
        await prisma.user.create({
            data:total_number,
        });
            res.status(201).json({
                message:"batch3 created succesfully",
                user: total_number
            }) ;
        }
            catch(error){
                next(Apierror.internal_server_error())
                }
            };
            const create_batch_4=async (req:Request,res:Response,next:NextFunction)=>{
                const total_number=req.body;
                try{
            await prisma.user.create({
                data:total_number,
            });
                res.status(201).json({
                    message:"batch4 created succesfully",
                    user: total_number
                }) ;
            }
                catch(error){
                    next(Apierror.internal_server_error())
                    }
                };

                const getBatch=async(req:Request,res:Response,next:NextFunction)=>{
                    const batch_number=Number(req.params.id);
                    try{
                        const user=await prisma.user.findUnique({
                            where:{
                            id: batch_number
                            }
                        })
                        res.status(200).json({
                            message:"Batch found",
                            user:user
                        })
                    }catch(error){
                        next(Apierror.badRequest("Batch Not Found"))
                    }
                    
                }
                export {create_batch_1,create_batch_2,create_batch_3,create_batch_4,getBatch};
        
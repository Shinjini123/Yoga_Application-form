import { NextFunction } from "express"
import { Response,Request } from "express";
import { nextTick } from "process";
import Apierror from "../error/APIerror";
import { prisma } from "../app";
const createUser=async (req:Request,res:Response,next:NextFunction)=>{
    const userData=req.body;
    try{
await prisma.user.create({
    data:userData,
});
    res.status(201).json({
        message:"user created succesfully",
        user: userData
    })  
    }
catch(error){
next(Apierror.internal_server_error())
}
};
const getUser=async(req:Request,res:Response,next:NextFunction)=>{
    const userId=Number(req.params.id);
    try{
        const user=await prisma.user.findUnique({
            where:{
            id: userId
            }
        })
        res.status(200).json({
            message:"User Found",
            user:user
        })
    }catch(error){
        next(Apierror.badRequest("User Not Found"))
    }
    
}
const getAllUser=async(req:Request,res:Response,next:NextFunction)=>{
    const userId=Number(req.params.id);
    try{
        const user_all=await prisma.user.findMany({
            where:{
            id: userId
            }
        })
        res.status(200).json({
            message:"User Found",
            user:user_all
        })
    }catch(error){
        next(Apierror.badRequest("User Not Found"))
    }
    
}
const deleteUser=async(req:Request,res:Response,next:NextFunction)=>{
    const userId=Number(req.params.id);
    try{
        const user_all=await prisma.user.delete({
            where:{
            id: userId
            }
        })
        res.status(200).json({
            message:"User succesfully deleted",
            user:userId
        })
    }catch(error){
        next(Apierror.badRequest("User Not Found"))
    }
    
}
const updateUser=async(req:Request,res:Response,next:NextFunction)=>{
    const userId=Number(req.params.id);
    try{
        const user_update=await prisma.user.delete({
            where:{
            id: userId
            }
        })
        res.status(200).json({
            message:"User succesfully updated",
            user:userId
        })
    }catch(error){
        next(Apierror.badRequest("User Not Found"))
    }
    
}

export {createUser,getUser,getAllUser,deleteUser,updateUser};
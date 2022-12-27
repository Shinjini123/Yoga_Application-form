import prismaError from "./prismaError";
import { Response,Request } from "express";
function errorHandler_prisma(err:any, req:any ,res:any,next:any){
    if(err instanceof prismaError){
        res.status(err.status_code).message({
            message:err.message  });
            return;
    }
    res.status('P1012').json({
        message:"something went wrong to the database",
    });
}
export default errorHandler_prisma;
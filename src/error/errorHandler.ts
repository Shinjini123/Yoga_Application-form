import Apierror from "./APIerror";
import { Response,Request } from "express";
function errorHandler(err:any, req:any ,res:any,next:any){
    if(err instanceof Apierror){
        res.status(err.status_code).message({
            message:err.message  });
            return;
    }
    res.status(500).json({
        message:"something went wrong to the server",
    });
}
export default errorHandler;
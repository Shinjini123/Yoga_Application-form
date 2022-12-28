import ApiError from "./APIerror";
import { Response, } from "express";

function errorHandler(err: any, req: any, res: Response, next: any) {
  
  if (err instanceof ApiError) {
    res.status(err.status_code).json({error:{message: err.message}});
    return;
  }

  res.status(500).json({message: "Something Went Wrong"});
}

export default errorHandler;
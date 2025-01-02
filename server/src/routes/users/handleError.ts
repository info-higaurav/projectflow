import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import ApiResponse from "../../../utils/ApiResponse";

export const handleError = async(err:Error, req:Request , res:Response , next:NextFunction)=>{

    if(err instanceof ZodError){
        const errors:any = []
        for(const issue of err.issues){
            errors.push(issue?.message)
        }
        return ApiResponse.failed(errors, err.issues[0]?.message, 400).send(res);
    }
    console.error(JSON.stringify(err));
   
}
import { NextFunction, Request, Response } from "express";
import CommonService from './../../services/common-services/index'
import ApiResponse from './../../../utils/ApiResponse'

export const handleSignUp= async(req:Request , res:Response , next:NextFunction)=>{
    const payload = req.body
    const commonservices = new CommonService();
    await commonservices.handleSignUp(payload);
    const isUserExists = await commonservices.getUser(payload.email);
    if(isUserExists.length !== 0){
        return ApiResponse.failed([],"User already exits", 400).send(res);
    }
    const addUser = await commonservices.addUser(payload)
    const user = addUser[0]
    const accessToken = await commonservices.generateAccessToken(user?._id as string);
    const refreshToken = await commonservices.generateRefreshToekn(user?._id as string);

    res.clearCookie("accessToken")
    res.clearCookie("refreshToken")

    res.cookie("accessToken",accessToken ,{
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // 1
        secure: true,
    });
    res.cookie("refreshToken",refreshToken,{
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7
        secure: true,
    });

    res.setHeader('Authorization',`Bearer ${accessToken}`)

    return ApiResponse.success(addUser, "success", 200).send(res)
}
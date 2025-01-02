import { Response } from "express"

class ApiResponse {
    data:any[]
    message:string
    statusCode:number

    constructor(data:any[], message:string, statusCode:number){
        this.data=data,
        this.message=message,
        this.statusCode=statusCode
    }
    static success (data: any[], message:string, statusCode:number = 200){
        return new ApiResponse(data , message , statusCode)
    }

    static failed (data: any[], message:string, statusCode:number = 400){
        return new ApiResponse(data , message , statusCode)
    }
    
    static unauthorized(data: any[], message: string = "Unauthorized" , statusCode:number = 401) {
        return new ApiResponse(data, message, statusCode);
    }
    static notFound(data: any[], message: string = "Not Found" , statusCode:number = 404) {
        return new ApiResponse(data, message, statusCode);
    }
    static internalServerError(data: any[], message: string = "Internal Server Error") {
        return new ApiResponse(data, message, 500);
    }
    send(res:Response){
        res.status(this.statusCode).json(this)
    }
}

export default ApiResponse;
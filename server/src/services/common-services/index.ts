import { validateSignup } from "../validation"
import Users from "../../schema/user/user.schema"
import jwt from "jsonwebtoken"
class CommonServices {
    handleSignUp = async(payload:any)=>{
        return  validateSignup.parse(payload)
    }
    getUser = async(email:string)=>{
        return await Users.find({email:email}).select("-authentication -secuirty")
    }

    addUser = async(payload:any)=>{
        await Users.create(payload)
        return await this.getUser(payload.email)
        
    }

    generateAccessToken = async(userId:string)=>{
        const accessToken = jwt.sign({_id:userId} , process.env.ACCESS_TOKEN as string,{expiresIn:'1d'})
        const updateAccessToekn = await Users.findOneAndUpdate(
            {_id:userId},
            {"security.accessToken":accessToken},
            {new:true}
        );
        return accessToken;
    }

    generateRefreshToekn = async(userId:string)=>{
        const refreshToken = jwt.sign({_id:userId}, process.env.REFRESH_TOKEN as string ,{expiresIn:'7d'})
        const updateRefreshToken = await Users.findOneAndUpdate(
            {_id:userId},
            {"security.refreshToken":refreshToken},
            {new:true}
        );
        return refreshToken;
    }
}

export default CommonServices;
import {z} from 'zod'
export const validateSignup = z.object({
    email :
        z.string({
            required_error:"Email is required",
            invalid_type_error:"Email must be string"
        })
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , "Email must be valid"),  
    authentication:z.object({
        password:
            z.string({
                required_error:"Password is required",
                invalid_type_error:"Password must be string"
            })
            .min(8, "Password must be at least 8 characters long")
            .max(20, "Password must less than 20 characters long")
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/ , "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character")
    })   
})
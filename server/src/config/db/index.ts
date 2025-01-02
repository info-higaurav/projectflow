import mongoose from "mongoose";

export default async function connectToDb (){
    try {
        const connect = await mongoose.connect(process.env.DB_URI as string,{dbName:"projectflow"})
        return connect
    } catch (error) {
        throw error;
    }
}
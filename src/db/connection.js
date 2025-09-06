import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//So here i have used connectionInstance as a variable to store the connection object returned by mongoose.connect() method
//This connectionInstance object contains various properties and methods related to the database connection
//One of the properties is connection which provides information about the current connection state
//And host property inside connection gives the hostname of the MongoDB server to which we are connected

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MONGODB connection FAILED ", error)
        process.exit(1)
    }
}

export default connectDB
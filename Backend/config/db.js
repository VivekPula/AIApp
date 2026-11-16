import mongoose from "mongoose";

const connectDb = async (url)=>{
    try{
        await mongoose.connect(url);
        console.log("DB connected");
    }
    catch(err){
        console.log('Error : '+err);
        process.exit(1);
    }
};
export default connectDb;
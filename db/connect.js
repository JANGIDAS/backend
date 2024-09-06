import mongoose from "mongoose"

async function mongoDb(){
    try {
        await mongoose.connect(process.env.MONGO_DB)
    } catch (error) {
        console.log("error", error);
        
    }
}

export default mongoDb
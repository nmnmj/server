import mongoose from "mongoose";

let connectDB = async(DB_URL) =>{
    try {
        let db_ooptions={
            dbName:"order"
        }
        mongoose.connect(DB_URL, db_ooptions)
        console.log("connected")
        
    } catch (error) {
        console.log(error)
    }
}

export default connectDB
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    razorpay_order_id:{type:String, trim:true, required:true},
    razorpay_payment_id:{type:String, trim:true, required:true},
    razorpay_signature:{type:String, trim:true, required:true}
})

const orderModel = mongoose.model("order" ,orderSchema)

export default orderModel
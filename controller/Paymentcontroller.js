import orderModel from "../models/Orderschema.js";
import { instance } from "../server.js"
import crypto from 'crypto'

class Paymentcontroller{
    static checkout = async (req, res)=>{
        var options = {
            amount: Number(req.body.amount*100),  // amount in the smallest currency unit so paise to rupee convert
            currency: "INR",
          };
        const order = await instance.orders.create(options)

        console.log(order)
        res.status(200).send(order)
    }

    static paymentverification = async (req, res)=>{
        console.log(req.body)
        let {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body
        
        let body=razorpay_order_id + "|" + razorpay_payment_id;

        var expectedSignature = crypto.createHmac('sha256', process.env.RZ_SECRET_KEY)
                                        .update(body.toString())
                                        .digest('hex');
                                        console.log("sig received " ,razorpay_signature);
                                        console.log("sig generatd " ,expectedSignature);
        if(razorpay_signature===expectedSignature){
            let doc = await orderModel.create({
                razorpay_order_id, 
                razorpay_payment_id,
                razorpay_signature
            })
            let r = await doc.save()

            res.redirect(`http://localhost:3000/success?reference=${razorpay_payment_id}`)


        }
        else{
            res.status(400).json({
                success:false
            })
        }


    }
}

export default Paymentcontroller
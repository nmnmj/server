import {app} from './app.js'
import Razorpay from 'razorpay'

export const instance = new Razorpay({
    key_id: process.env.RZ_API_KEY,
    key_secret: process.env.RZ_SECRET_KEY,
  })


app.listen(process.env.PORT, ()=>{
    console.log("running", process.env.PORT)
})
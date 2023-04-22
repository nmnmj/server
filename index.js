import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

import express from 'express'
import Razorpay from 'razorpay'
import web from './routes/web.js'
import connectDB from './config/connectDB.js'

export const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
connectDB(process.env.DB_URL)
app.use("/", web)

app.get("/apikey", (req, res)=>{
    res.status(200).json({key:process.env.RZ_API_KEY})
})


export const instance = new Razorpay({
    key_id: process.env.RZ_API_KEY,
    key_secret: process.env.RZ_SECRET_KEY,
  })


app.listen(process.env.PORT, ()=>{
    console.log("running", process.env.PORT)
})
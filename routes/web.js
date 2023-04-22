import express from 'express'
import Paymentcontroller from '../controller/Paymentcontroller.js'

const router = express.Router()

router.post("/checkout", Paymentcontroller.checkout)
router.post("/verification", Paymentcontroller.paymentverification)

export default router
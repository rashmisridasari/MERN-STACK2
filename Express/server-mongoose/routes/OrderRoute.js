const express = require('express')
const router = express.Router();
const Orders = require('../models/OrdersModel')

// METHOD: GET | API URL : localhost:3000/orders/all
router.get('/all',async(req,res)=>{
    try {
        const orders = await Orders.find()
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({message:error.message})        
    }
})

// METHOD: POST | API URL :localhost:3000/orders/add
router.post('/add',async(req,res)=> {
    try {
        const OrderData = new Orders(req.body)
        const {UserID,ProductID,Price,ShippingAddress} = OrderData
        if (!UserID || !ProductID || !Price || !ShippingAddress) {
            res.status(401).json({message: "All fields are required"})
        }
        const storedata = await OrderData.save()
        res.status(200).json(storedata)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router
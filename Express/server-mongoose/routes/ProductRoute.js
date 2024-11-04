const express=require('express')
const router=express.Router()
const Products=require('../models/ProductsModel')


//get request-for products schema
router.get('/all',async(req,res)=>{
    try{
        const products=await Products.find()
        res.status(200).json(products)
    }catch{
        res.status(500).json({message:error})
    }cd 
})







// 1. GET               1.READ
// 2. POST              2.CREATE
// 3. PUT               3.UPDATE
// 4. DELETE            4. DELETE
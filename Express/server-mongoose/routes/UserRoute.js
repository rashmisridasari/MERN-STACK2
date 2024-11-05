const express = require('express')
const router = express.Router();
const Users = require('../models/UsersModel')

// METHOD: GET | API URL : localhost:3000/users/all
router.get('/all',async(req,res)=>{
    try {
        const users = await Users.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message:error.message})        
    }
})

// METHOD: POST | API URL :localhost:3000/products/add
router.post('/add',async(req,res)=> {
    try {
        const UserData = new Users(req.body)
        const {name,email,phone,password} = UserData
        if (!name || !email || !phone || !password) {
            res.status(401).json({message: "All fields are required"})
        }
        const storedata = await UserData.save()
        res.status(200).json(storedata)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router

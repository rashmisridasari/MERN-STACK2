const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        // unique:true
    },
})

const Products = mongoose.model("Products", ProductsSchema)

module.exports = Products;



// name: string :required
// email: string: required : unique
// phone: number: required : unique
// address: string 
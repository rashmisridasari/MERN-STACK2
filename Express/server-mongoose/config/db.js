const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://rashmisri01:30012005@in-aws.b9ta7.mongodb.net/Max-Store?retryWrites=true&w=majority&appName=In-AWS")

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')
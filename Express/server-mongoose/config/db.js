const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://rashmi01:30012005@in-aws.58oya.mongodb.net/")

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')
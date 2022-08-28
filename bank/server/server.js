const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
const api = require('./routes/api.js')
const mongoose = require ('mongoose')
const port = 2004




app.use(express.json());
app.use(express.urlencoded({ extended: false }));


mongoose.connect('mongodb://localhost/transactiondb',{ useNewUrlParser: true })

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})
app.use('/',api)


app.listen(port,function(req,res){
    console.log(`the server running on port ${port}`)
})
const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema ({
    Amount : Number ,
    Vendor : String,
    Category : String
})

const Transaction = mongoose.model("Transaction", transactionSchema)


module.exports = Transaction
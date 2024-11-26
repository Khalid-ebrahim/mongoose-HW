const mongoose = require("mongoose")

const customersSchema = new mongoose.Schema({
  name: String,
  age: Number
})

const customers = mongoose.model("customers", customersSchema)

module.exports = customers
const mongoose = require("mongoose")

const flowersSchema = mongoose.Schema({
	image: String,
  name:String,
	price: String,
})

module.exports = mongoose.model("Flower", flowersSchema)
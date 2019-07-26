const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Review = require('./review')



const ProductSchema = new Schema({
  category: {type: String, required: true},
  name: {type: String, required: true},
  price: {type: Number, required: true},
  image: {type: String, required: true},
  reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
})

module.exports = mongoose.model('Product', ProductSchema)
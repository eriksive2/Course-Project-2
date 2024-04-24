const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  product_id: { type: String, required: true },
  product_name:{type:String},
  price: {type:Number}
// optional array of strings for tagging items in the cart
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
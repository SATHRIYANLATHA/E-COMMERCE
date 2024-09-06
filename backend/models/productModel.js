const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    ratings: String,
    images: [
        {
            image: String
        }
    ],
    category: String,
    seller: String,
    category: String,
    numberOfReviews: String,
    stock:String,
    createdAt: Date,
    hello: Date

})

const productModel = mongoose.model('product',productSchema);

module.exports = productModel;
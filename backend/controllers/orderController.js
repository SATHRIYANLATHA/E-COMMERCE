const OrderModel = require ('../models/orderModel')
const ProductModel = require('../models/productModel')



// create Order - api/v1/order

exports.createOrder = async(req, res, next) =>{

   // console.log(req.body," : data")

    const  cartItems = req.body;
    const amount = Number(cartItems.reduce((acc,item)=>( acc + item.product.price * item.qty),0)).toFixed(2);
    const status = 'pending';
    const order = await OrderModel.create({cartItems,amount,status})

    // console.log(amount,"amount")

    // Updating Product Stock
     
    cartItems.forEach(async(item) => {
        const product = await ProductModel.findById(item.product._id);
        product.stock = product.stock - item.qty;
        await product.save();
        
    })
    
    

    res.json({
        success:true,
        order
    })
}
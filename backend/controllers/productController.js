const ProductModel = require('../models/productModel')



// GET PRODUCTS API : /api/v1/products

exports.getProducts = async(req, res, next)=>{

   const query =  req.query.keyword?{name:{
        $regex:req.query.keyword,
        $options:'i'
    }}:{}

    const products = await ProductModel.find(query)

    res.json({
        success:true,
        products
    })
}

// GET SINGLE PRODUCT API : /api/v1/product/:id

exports.getSingleProduct = async(req, res, next)=>{

    // console.log (req.params.id, 'ID')
    try {
        
        const product = await ProductModel.findById(req.params.id)

    res.json({
        success:true,
        product
    })

    } catch (error) {

        res.status(404).json({
            success:false,
            message: "Unable to find the product with ID !"
        })
        
    }
     
}
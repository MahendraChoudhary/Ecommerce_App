const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorhandler');
// const catchAsyncErrors = require('../middleware/catchAsyncErrors');

// Create a new product -- Admin
exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}

// Get a product details
exports.getProductDetails = async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    /*if(!product){
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }*/

    if(!product){
        return next(new ErrorHandler('Product not found', 404));
    }

    res.status(200).json({
        success: true,
        product
    })

}

// Get all products
exports.getAllProducts = async (req, res) => {
    const products = await Product.find();

    res.status(200).json({
        success: true,
        products
    });
}

// Update a product -- Admin
exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id)

    if(!product){
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        product
    })
}

// Delete a product -- Admin
exports.deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }

    await product.deleteOne();

    res.status(200).json({
        success: true,
        message: "Product removed successfully"
    })
}
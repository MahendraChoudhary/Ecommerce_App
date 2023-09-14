const express = require('express');
const {getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails} = require('../controllers/productController');

const router = express.Router();

// Route for single product details
router.route('/product/:id').get(getProductDetails);

// Route for getting all the products
router.route('/products').get(getAllProducts);

// Route for creating a new product -- Admin
router.route('/product/new').post(createProduct);

// Route for updating a product -- Admin
router.route('/product/:id').put(updateProduct);

// Route for deleting a product -- Admin
router.route('/product/:id').delete(deleteProduct);

module.exports = router;
const express = require('express');
const {getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails} = require('../controllers/productController');
const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth');

const router = express.Router();

// Route for single product details
router.route('/product/:id').get(getProductDetails);

// Route for getting all the products
router.route('/products').get(getAllProducts);

// Route for creating a new product -- Admin
router.route('/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), createProduct);

// Route for updating a product -- Admin
router.route('/product/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct);

// Route for deleting a product -- Admin
router.route('/product/:id').delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);

module.exports = router;
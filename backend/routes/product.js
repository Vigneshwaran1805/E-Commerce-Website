const express=require('express');
const { getProducts, getSingleProduct1 } = require('../controllers/productController');
const router=express.Router();

router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct1);

module.exports =router;
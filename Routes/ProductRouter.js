const ProductController = require('../Controllers/ProductController');
// Import express
const express = require('express');
// Routes
const productRouter = express.Router()

productRouter.route('/')
.post(  ProductController.scrapePage)
productRouter.route('/:storage')
.get(  ProductController.getProductData)

module.exports = productRouter;
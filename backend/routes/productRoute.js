const express=require("express");
// const Product=require("../models/productModel");
const { getAllProducts, createProduct, deleteProduct, updateProduct, getProductDetails } = require('../controllers/productController');

const router=express.Router();

router.route("/products").get(getAllProducts);

router.route("/product/new").post(createProduct);

router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails);



module.exports=router;
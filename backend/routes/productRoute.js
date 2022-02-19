const express=require("express");
// const Product=require("../models/productModel");
const { getAllProducts, createProduct, deleteProduct, updateProduct, getProductDetails, createProductReview, getProductReviews, deleteReview } = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router=express.Router();

router.route("/products").get(getAllProducts);

router.route("/admin/product/new").post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/admin/product/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct).delete(isAuthenticatedUser , authorizeRoles("admin"), deleteProduct);



router
  .route("/reviews")
  .get(getProductReviews)
  .put(isAuthenticatedUser, createProductReview)
  .delete(isAuthenticatedUser, deleteReview);

module.exports=router;
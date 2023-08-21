import express from "express";
import { isAdmin, requiredSignIn } from "../middlewares/userMiddleware.js";
import {
  braintreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  realtedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

// routes
// create-product
router.post(
  "/create-product",
  requiredSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// get all products
router.get("/get-products", getProductController);
// get single product
router.get("/get-products/:slug", getSingleProductController);
// get photo
router.get("/product-photo/:pid", productPhotoController);
// delete product
router.delete("/delete-product/:pid", deleteProductController);
// filter product
router.post("/product-filters", productFiltersController);
//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);
// update product
//routes
router.put(
  "/update-product/:pid",
  requiredSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

// category wise product
router.get("/product-category/:slug", productCategoryController);

// payments
// token
router.get("/braintree/token", braintreeTokenController);

// payments
router.post("/braintree/payment", requiredSignIn, braintreePaymentController);

export default router;

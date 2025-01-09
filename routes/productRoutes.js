import express from "express";
import {
  brainTreePaymentController,
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
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

// Create product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// Update product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// Get all products
router.get("/get-product", getProductController);

// Get single product by slug
router.get("/get-product/:slug", getSingleProductController);

// Get product photo by ID
router.get("/product-photo/:pid", productPhotoController);

// Delete product by ID
router.delete("/delete-product/:pid", deleteProductController);

// Filter products
router.post("/product-filters", productFiltersController);

// Product count
router.get("/product-count", productCountController);

// Paginated product list
router.get("/product-list/:page", productListController);

// Search for products by keyword
router.get("/search/:keyword", searchProductController);

// Related products
router.get("/related-product/:pid/:cid", relatedProductController);

// Products by category
router.get("/product-category/:slug", productCategoryController);

// Payment routes
// Generate Braintree token
router.get("/braintree/token", braintreeTokenController);

// Process Braintree payment
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;

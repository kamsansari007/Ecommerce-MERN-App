import express from "express";
import { isAdmin, requiredSignIn } from "../middlewares/userMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requiredSignIn,
  isAdmin,
  createCategoryController
);

// update category
router.put(
  "/update-category/:id",
  requiredSignIn,
  isAdmin,
  updateCategoryController
);

// get all categories
router.get("/all-categories", categoryController);

// single category
router.get("/single-category/:slug", singleCategoryController);

// delete category
router.delete(
  "/delete-category/:id",
  requiredSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;

import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getAllOrdersController,
  getOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requiredSignIn } from "../middlewares/userMiddleware.js";

// router object
const router = express.Router();

//routing

//Register ||Method Post
router.post("/register", registerController);
// Login || Post
router.post("/login", loginController);

// Forgot Password
router.post("/forgot-password", forgotPasswordController);
// test
router.get("/test", requiredSignIn, isAdmin, testController);

// protected user route auth
router.get("/user-auth", requiredSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// protected admin route auth
router.get("/admin-auth", requiredSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// update profile
router.put("/profile", requiredSignIn, updateProfileController);

// orders
router.get("/orders", requiredSignIn, getOrdersController);

//all orders
router.get("/all-orders", requiredSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requiredSignIn,
  isAdmin,
  orderStatusController
);
export default router;

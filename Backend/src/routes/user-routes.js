const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user-controller");
const { authMiddleware } = require("../middlewares/authMiddleware");

//Register User
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  userController.registerUser
);

//Login User
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  userController.loginUser
);

router.get("/profile", authMiddleware, userController.getProfile);

module.exports = router;

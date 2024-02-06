const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const { registerUser } = require("../controllers/userController");

/**
 * @route POST /api/v1/users/register_user
 * @desc Create a new user
 * @access public
 */

router.post(
  "/register_user",
  [
    check("name", "Please Enter your fullname").not().isEmpty(),
    check("email", "Please Enter a valid email address").isEmail(),
    check(
      "password",
      "Please Enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  registerUser
);


module.exports = router;

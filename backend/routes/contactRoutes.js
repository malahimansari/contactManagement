const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require("../middleware/auth");
const contact_Controller = require("../controllers/contactController");

/**
 * @route GET /api/v1/contacts
 * @desc Get all contacts
 * @access private
 */
router.get("/", auth, contact_Controller.get_contact);

/**
 * @route POST /api/v1/contacts
 * @desc Create a new contacts
 * @access private
 */
router.post(
  "/",
  [
    auth,
    [
      check("name", "Please enter your name").exists(),
      check("phone", "Please enter your valid phone number").exists(),
    ],
  ],
  contact_Controller.create_contact
);

/**
 * @route PUT /api/v1/contacts
 * @desc Update contact by id
 * @access private
 */
router.put('/:id', auth, contact_Controller.update_contact );

module.exports = router;

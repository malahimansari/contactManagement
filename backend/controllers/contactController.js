const { validationResult } = require("express-validator");

const Contact = require("../models/Contact");

const get_contact = async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      created_at: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
};

const create_contact = async (req, res) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).json(result);
  }

  const { name, email, phone, relation } = req.body;

  try {
    const contact = new Contact({
      name,
      email,
      phone,
      relation,
      user: req.user.id,
    });
    await contact.save();
    res.json(contact);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { create_contact, get_contact };

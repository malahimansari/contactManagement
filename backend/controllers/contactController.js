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

const update_contact = async (req, res) => {
  const id = req.params.id;
  const { name, email, phone, relation } = req.body;
  try {
    const contactFields = {};
    if (name) contactFields.name = name;
    if (email) contactFields.email = email;
    if (phone) contactFields.phone = phone;
    if (relation) contactFields.relation = relation;

    let contact = await Contact.findById(id);

    if (!contact) {
      return res.status(401).json({ msg: "Invalid Authorization" });
    }

    contact = await Contact.findByIdAndUpdate(
      id,
      { $set: contactFields },
      { new: true }
    );

    return res.json(contact);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ msg: "Server Error" });
  }
};

const delete_contact = async (req, res) => {
  const id = req.params.id;

  try {
    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ msg: "Contact not found" });
    }
    await Contact.findByIdAndDelete(id);
    return res.status(200).json({ msg: "Contact Deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = {
  create_contact,
  get_contact,
  update_contact,
  delete_contact,
};

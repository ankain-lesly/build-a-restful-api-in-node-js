/**
 * ContactController
 * Handling Contacts & DB manipulation
 *
 */

const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel.js");
//@desc : Get all contacts
//@routes : GET /api/contact
//@access : private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
  // res.status(200).json({ message: `Get single contact id: ${req.params.id}` });
});
//@desc : Get single all contacts
//@routes : GET /api/contact/:id
//@access : private
const getSingleContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found!");
  }
  res.status(200).json(contact);
});
//@desc : Create  contacts
//@routes : Post /api/contact
//@access : private
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory...");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });
  res.status(201).json(contact);
});
//@desc : Update contacts
//@routes : PUT /api/contact:id
//@access : private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not FOund!");
  }

  if (contact.user_id.toString() != req.user.id) {
    res.status(403);
    throw new Error("User not permitted, modifications");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});
//@desc : Delete contacts
//@routes : DELETE /api/contact/:id
//@access : private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not FOund!");
  }

  if (contact.user_id.toString() != req.user.id) {
    res.status(403);
    throw new Error("User not permitted, modifications");
  }
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: `Delete contact id: ${req.params.id}` });
});

module.exports = {
  getContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
};

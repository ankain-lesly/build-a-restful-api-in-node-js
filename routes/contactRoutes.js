const express = require("express");
const contactRouter = express.Router();
const validateToken = require("../middleware/tokenHandler.js");

const {
  getContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController.js");

contactRouter.use(validateToken);
contactRouter.route("/").get(getContacts).post(createContact);
contactRouter
  .route("/:id")
  .get(getSingleContact)
  .put(updateContact)
  .delete(deleteContact);

module.exports = contactRouter;

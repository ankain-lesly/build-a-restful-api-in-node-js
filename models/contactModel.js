const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User id required"],
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please add a contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add a contact email address"],
    },
    phone: {
      type: String,
      required: [true, "Please add a contact phone number"],
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;

// models/contact.js
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: false },
  address: { type: String, required: false },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;

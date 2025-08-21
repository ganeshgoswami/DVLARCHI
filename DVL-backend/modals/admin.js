// model/admin.js
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

// This will look for the `adminlogin` collection in the `test` database
const Admin = mongoose.model("adminlogin", adminSchema);

module.exports = { Admin };

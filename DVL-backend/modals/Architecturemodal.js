const mongoose = require("mongoose");

const architectureSchema = new mongoose.Schema({
  formType: { type: String, required: true },
  category: { type: String, required: true },
 images: {
  type: [String],
  required: true,
}, // Image path or URL
  address: { type: String, required: true },
  desc: { type: String },
  Area: { type: String },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Architecturelist = mongoose.model("architecturelist", architectureSchema);

module.exports = { Architecturelist };

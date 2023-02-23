const mongoose = require("mongoose");

const adminschema = mongoose.Schema(
  {
    image: String,
    email: String,
    password: String,
  },
  { versionKey: false }
);

const AdminModel = mongoose.model("admin", adminschema);

module.exports = { AdminModel };

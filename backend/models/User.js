const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: "String" },
    email: { type: "String" },
    password: { type: "String" },
    is_active: { type: "Number" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);

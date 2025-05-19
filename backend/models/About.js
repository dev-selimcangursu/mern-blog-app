const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
  {
    website: { type: String },
    title: { type: String },
    about: { type: String },
    profileImage: { type: String },
    phone: { type: String },
    email: { type: String },
    instagram: { type: String },
    linkedin: { type: String },
    github: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("about", aboutSchema);

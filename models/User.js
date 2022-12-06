const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      maxlength: 50,
      unique: true,
    },
    designation: {
      type: String,
      required: true,
      maxlength: 50,
    },
    phone: {
      type: String,
      required: true,
      maxlength: 10,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);

module.exports = User;

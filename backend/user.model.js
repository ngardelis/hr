// import mongoDB
const mongoose = require("mongoose");

// This schema will be used to create the user model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("UserModel", userSchema);

module.exports = UserModel;







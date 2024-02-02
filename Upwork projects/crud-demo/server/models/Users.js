const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;

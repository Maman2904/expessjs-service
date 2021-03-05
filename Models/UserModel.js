const mongodb = require("mongoose");

const modelUser = new mongodb.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    require: [true, "Email"],
    unique: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
});

const DataUser = mongodb.model("user", modelUser);

module.exports = DataUser;

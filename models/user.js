const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type:String, unique: true},
  password: String,
  auth_key: String,
  questions : [
     {  question_id: Number ,
        score: Number,
        code_time: Number,
        run_time: Number,
        time_dependency: String
    }],
  admin: Boolean
});

const User = mongoose.model("User", userSchema);

module.exports = User;
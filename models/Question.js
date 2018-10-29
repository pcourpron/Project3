const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  text: {
    type: String, 
    unique: true
  }, 
  category: {
    type: String
  },
  scores: {
    type: Array
  },
  codeTime: {
    type: Array
  },
  runTime: {
    type: Array
  },
  bigO: {
    type: Array
  },
  tests: {
    type: Array
  }
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
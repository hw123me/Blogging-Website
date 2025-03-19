const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
  author: String,
  title: String,
  content: String,
  thumbnail: String,
  date: Number,
  like: Number,
  likedby: [String],
});

const PosT = mongoose.model("post", postSchema);
module.exports = PosT;

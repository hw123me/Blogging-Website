const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitSchema = new mongoose.Schema({
  visits: Number,
});

const visits = mongoose.model("visits", visitSchema);

module.exports = visits;

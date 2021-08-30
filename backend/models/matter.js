const mongoose = require("mongoose");

const matterSchema = new mongoose.Schema({
  titulo: String,
  teacherId: {type: mongoose.Schema.ObjectId, ref: "teacher"},
  contenido: String,
  school: String,
  date: { type: Date, default: Date.now },
  dbStatus: { type: Boolean, default: true },
});

const matter = mongoose.model("matter", matterSchema);
module.exports = matter;

const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  titulo: String,
  quantity: String,
  dateIni: Date,
  dateFin: Date,
  matterId: { type: mongoose.Schema.ObjectId, ref: "matter" },
  date: { type: Date, default: Date.now },
  dbStatus: { type: Boolean, default: true },
});

const course = mongoose.model("course", courseSchema);
module.exports = course;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  gbID: {type: String, index: true, unique: true},
  title: { type: String, required: true },
  authors: { type: Array },
  description: String,
  pages: Number,
  genres: Array,
  image: Array,
  link: String,
  date: { type: Date, default: Date.now }
});

// ^^^ mongoose: not as many validators as sequelize!!! have to make customs if you want them...
// not true: look into Schema Types

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
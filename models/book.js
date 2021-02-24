const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: Array, required: true },
  description: String,
  pages: Number,
  categories: Array,
  image: String,
  link: String,
  date: { type: Date, default: Date.now }
});

// ^^^ mongoose: not as many validators as sequelize!!! have to make customs if you want them...

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
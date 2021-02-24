import axios from "axios";
require("dotenv").config();

export default {
  // Gets all books currently saved
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },

// ^^^ API requests to our back-end server
// ===============================================================================================
// vvv API request to Google Books API

  getSearch: function (query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=" + process.env.REACT_APP_API_KEY  );
  }

};

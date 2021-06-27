import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Card from "react-bootstrap/Card";
import Book from "../components/Book";

function Saved() {

  const [savedList, setSavedList] = useState([]);

  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to savedList
  function loadBooks() {
    API.getBooks()
      .then(res => { setSavedList(res.data) })
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(() => loadBooks())
      // .catch((err) => console.log(err));
      .catch((err) => console.log("delete broken"));
  }


  return (

    <div>
      <h1>Saved Books</h1>

      {savedList.map(savedBook => {

        return (
          <div key={savedBook.gbID}>
            <Book {...savedBook} btn={deleteBook(savedBook.gbID)} pagetype="saved"></Book>
            {/* <button onClick={() => deleteBook(_id)}>delete</button> */}
            {/* <button onClick={handleSave} value={gbID}>save</button> */}
          </div>
        );
      })}
    </div>

  );

}
export default Saved;
import React, { useEffect, useState } from "react";
import API from "../utils/API";

function Saved() {

  const [savedList, setSavedList] = useState([]);

  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to savedList
  function loadBooks() {
    API.getBooks()
      .then(res => {setSavedList(res.data)})
      .catch(err => console.log(err));
  };

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
      API.deleteBook(id)
        .then(() => loadBooks())
        .catch((err) => console.log(err));
    }


  return (

    <div>
      <h1>Saved Books</h1>

      {savedList.map(savedBook => {
        const { _id, gbID,
          image,
          title, authors, pages, genres, link, description } = savedBook;
        console.log(_id);
        return (
          <div key={gbID}>

            <hr />

            {image && <img src={image.thumbnail} alt={title} />}
            {/* <p>{title} by {authors.join(", ")}</p> */}
            <p>{title} by {authors}</p>
            <p>pages: {pages} </p>
            {/* <p>genres: {genres.join(", ")}</p> */}
            <p>genres: {genres}</p>
            <a href={link}> Google Books Page</a>
            <button onClick={() => deleteBook(_id)}>delete</button>
            <p>{description}</p>
            {/* <button onClick={handleSave} value={gbID}>save</button> */}
            <hr />

          </div>
        );
      })}
    </div>

  );

}
export default Saved;
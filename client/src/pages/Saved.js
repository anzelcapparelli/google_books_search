import React, { useEffect, useState } from "react";
import API from "../utils/API";

function Saved() {

  const [savedList, setSavedList] = useState([]);

  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    API.getBooks()
      .then(res => {
        setSavedList(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };


  return (

    <div>
      <h1>Saved Books</h1>

      <pre>{savedList}</pre>
      {/* a ternary that checks var length and returns "none saved yet if length falsy" */}
    </div>

  );

}
export default Saved;
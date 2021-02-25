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

    <div></div>

  );

}
export default Saved;
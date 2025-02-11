import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
// ^^^ need for the react-boostrap library to work
import App from './App';
import './index.css';


// ===============================================================

import API from "./utils/API";
require("dotenv").config();

API.getSearch("Winnie the Pooh").then(res=>{
  console.log(res.data.items[0].volumeInfo.imageLinks.thumbnail);
})

// ^^^ temporary reference (will put in components later)
// ===============================================================


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

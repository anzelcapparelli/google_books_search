import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a href="https://books.google.com/" className="navbar-brand" rel="noreferrer" target="_blank"> Google Books</a>
      <NavLink className="navbar-brand" to="/search" activeClassName="active" style={{marginBottom:0}}>
        <h6 style={{marginBottom:0}}>Search</h6>
      </NavLink>
      <NavLink className="navbar-brand" to="/saved" activeClassName="active">
      <h6 style={{marginBottom:0}}>Saved</h6>
      </NavLink>
    </nav>
  );
}

export default Nav;

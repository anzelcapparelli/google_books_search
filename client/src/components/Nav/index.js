import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink className="navbar-brand" to="/search" activeClassName="active">
        Search
      </NavLink>
      <NavLink className="navbar-brand" to="/saved" activeClassName="active">
        Saved
      </NavLink>
    </nav>
  );
}

export default Nav;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './pages/Search';
import Saved from './pages/Saved';
import Nav from './components/Nav'
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron>
          <div style={{ padding: 5, marginLeft: "auto", marginRight: "auto", marginBottom: 20, backgroundColor: "white", width: "fit-content" }}>
            <h1> (React) Google Books Search</h1>
          </div>
          <div style={{ padding: 5, marginLeft: "auto", marginRight: "auto", backgroundColor: "white", width: "fit-content" }}>
            <h2> Search for and Save Books of Interest</h2>
          </div>
        </Jumbotron>
        <Switch>
          <div className="m-3">
            <Route exact path={["/", "/search"]}>
              <Search />
            </Route>
            <Route exact path="/saved">
              <Saved />
            </Route>
          </div>
        </Switch>
      </div>
    </Router >
  );
}

export default App;

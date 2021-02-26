import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Search from './pages/Search';
import Saved from './pages/Saved';
// import Saved from './pages/Saved';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <Switch>
          <Route exact path="/" render={props => (
            <Login
              {...props}
            />
          )} />
          <PrivateRoute exact path="/protected" component={BubblePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

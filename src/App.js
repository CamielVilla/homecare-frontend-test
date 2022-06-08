import './App.css';
import HomePage from "./pages/homepage/HomePage";
import {Route, Switch} from "react-router-dom";
import React from "react";
import LogIn from "./pages/log-in/LogIn";



function App() {
  return (
      <>
          <Switch>
              <Route exact path="/">
                  <HomePage />
              </Route>
              <Route exact path="/login">
                  <LogIn />
              </Route>
          </Switch>
      </>
  );
}

export default App;

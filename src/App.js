import './App.css';
import HomePage from "./pages/homepage/HomePage";
import {BrowserRouter as Router,  Route, Switch} from "react-router-dom";



function App() {
  return (
      <Router>

          <Switch>
              <Route exact path="/">
                  <HomePage />
              </Route>
              <Route exact path="log-in">

              </Route>
          </Switch>
      </Router>
  );
}

export default App;

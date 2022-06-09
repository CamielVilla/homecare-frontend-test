import './App.css';
import React, {useEffect, useState} from "react";
import {Route, Switch, useLocation} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/home/homepage/HomePage";
import LogIn from "./pages/home/log-in/LogIn";
import ContactPage from "./pages/home/contactpage/ContactPage";
import nurse from "./assets/symbols/nurse.png";
import AdminNurses from "./pages/Admin/adminnurses/AdminNurses";
import AdminHome from "./pages/Admin/AdminHome/AdminHome";


function App() {
  let location = useLocation();
  const [url, setUrl] = useState(location.pathname)
  const [navItems, setNavItems] = useState(["home", "login", "contact"]);
  const home = ["home", "login", "contact", "admin"]
  const admin = ["admin", "zorgverleners", "patiënten", "berichten", "home"]

useEffect( () => {
  setUrl(location.pathname)
}, [location.pathname])

useEffect(() => {
  function setNavBarItems(){
    if(location.pathname.includes("home")) {
      setNavItems(home)
    }
    else if(location.pathname.includes("admin")){
      setNavItems(admin)
    }
  }
  setNavBarItems();
},[url]);



  return (
      <>
        <Nav navItems={navItems}/>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/admin">
            <AdminHome />
          </Route>
          <Route exact path="/zorgverleners">
            <AdminNurses />
          </Route>
        </Switch>
        {JSON.stringify(navItems) == JSON.stringify(home) && <img src={nurse} alt="nurse" className="nurse-image" />}
      </>
  );
}

export default App;

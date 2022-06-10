import './App.css';
import React, {useEffect, useState} from "react";
import {Route, Switch, useLocation} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/home/homepage/HomePage";
import LogIn from "./pages/home/log-in/LogIn";
import ContactPage from "./pages/home/contactpage/ContactPage";
import nurse from "./assets/symbols/nurse.png";
import AdminNurses from "./pages/admin/adminnurses/AdminNurses";
import AdminHome from "./pages/admin/adminhome/AdminHome";
import AdminPatients from "./pages/admin/adminpatients/AdminPatients";


function App() {
  let location = useLocation();
  const [url, setUrl] = useState(location.pathname)
  const [navItems, setNavItems] = useState(["home", "login", "contact", "admin"]);
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
          <Route exact path="/patiënten">
            <AdminPatients />
          </Route>
        </Switch>
        {JSON.stringify(navItems) == JSON.stringify(home) && <img src={nurse} alt="nurse" className="nurse-image" />}
      </>
  );
}

export default App;

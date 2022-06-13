import './App.css';
import React, {useEffect, useState, useMemo} from "react";
import {Route, Switch, useLocation, useParams} from "react-router-dom";

import Nav from "./components/Nav/Nav";
import HomePage from "./pages/home/homepage/HomePage";
import LogIn from "./pages/home/log-in/LogIn";
import ContactPage from "./pages/home/contactpage/ContactPage";
import nurse from "./assets/symbols/nurse.png";
import AdminHome from "./pages/admin/adminhome/AdminHome";
import AdminPatients from "./pages/admin/adminpatients/AdminPatients";
import AdminNurses from "./pages/admin/adminnurses/AdminNurses";
import AdminMessages from "./pages/admin/adminmessages/AdminMessages";
import NursesHome from "./pages/nurses/nurseshome/NursesHome";
import NursesPatientFiles from "./pages/nurses/nursespatientfiles/NursesPatientFiles";
import PatientFile from "./components/patientfile/PatientFile";



function App() {
  let location = useLocation();
  const [url, setUrl] = useState(location.pathname)
  const [navItems, setNavItems] = useState(["home", "login", "contact", "admin"])
  const home = ["home", "login", "contact", "admin", "verpleegkundigen"]
  const admin = ["admin", "zorgverleners", "patiënten", "berichten", "home"]
  const nurses= ["home", "profiel", "patiënten-overzicht", "dossier"]
  // const [user, setUser] = useState(null)
  // const { id } = useParams()

  function getProfile(handle) {

  }


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
    else if (location.pathname.includes("verpleegkundigen")){
      setNavItems(nurses)
    }
  }
  setNavBarItems();
},[url]);

  const patientData = [{
    wondName: "Schaafwond",
    location: "Linker knie",
    date: "15-15-1970"

  }]
  const columns = useMemo(
      () => [{
        Header: "Wond",
        accessor: "wondName"
      },{
        Header: "Locatie",
        accessor: "location"
      },{
        Header: "Datum",
        accessor: "date"
      }
      ])


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
          <Route exaxt path="/berichten">
            <AdminMessages />
          </Route>
          <Route exact path={["/verpleegkundigen", "/profiel"]}>
            <NursesHome />
          </Route>
          <Route exact path="/patiënten-overzicht">
            <NursesPatientFiles />
          </Route>
          <Route path="/patiënten/:id" children={<PatientFile />} />
        </Switch>
        {JSON.stringify(navItems) === JSON.stringify(home) && <img src={nurse} alt="nurse" className="nurse-image" />}
        {location.pathname.includes("profiel") && <img src={nurse} alt="nurse" className="nurse-image" />}
      </>
  );
}

export default App;

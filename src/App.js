import './App.css';
import React, {useEffect, useState, useMemo, useContext} from "react";
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
import File from "./components/patientfile/File";
import PatientProfile from "./pages/patients/patientprofile/PatientProfile";
import PatientFile from "./pages/patients/patientfile/PatientFile";
import AddWound from "./pages/Wound/AddWound";
import AddWoundPhoto from "./pages/Wound/AddWoundPhoto";



function App() {
  let location = useLocation();
  const [url, setUrl] = useState(location.pathname)
  const [navItems, setNavItems] = useState(["home", "login", "contact", "admin"])
  const home = ["home", "login", "contact", "admin", "verpleegkundigen", "patiënten"]
  const admin = ["admin", "zorgverleners", "patiënten", "berichten", "home"]
  const nurses= ["home", "profiel", "patiënten-overzicht", "dossier"]
  const patients= ["home", "dossier-overzicht", "profiel" ]
  const [user, setUser] = useState(null)
  const { id } = useParams()

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
    }else if(location.pathname.includes("patiënten")){
      setNavItems(patients)
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
          <Route exaxt path="/berichten">
            <AdminMessages />
          </Route>
          <Route exact path={["/verpleegkundigen", "/profiel"]}>
            <NursesHome />
          </Route>
          <Route exact path="/patiënten-overzicht">
            <NursesPatientFiles />
          </Route>
          <Route exact path="/nieuwe-wond">
            <AddWound />
          </Route>
          <Route exact path="/wond-foto">
            <AddWoundPhoto />
          </Route>
          {/*<Route path="/:id" children={<File />} />*/}
          <Route path="/profiel/:id" children={<PatientProfile />} />
          <Route exact path="/dossier-overzicht">
            <PatientFile />
          </Route>
        </Switch>
        {/*{JSON.stringify(navItems) === JSON.stringify(home) && <img src={nurse} alt="nurse" className="nurse-image" />}*/}
        {/*{location.pathname.includes("profiel") && <img src={nurse} alt="nurse" className="nurse-image" />}*/}
      </>
  );
}

export default App;

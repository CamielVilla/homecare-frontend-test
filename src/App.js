import './App.css';
import React, {useEffect, useState, useMemo, useContext} from "react";
import {Route, Switch, useLocation, useParams} from "react-router-dom";

import Nav from "./components/Nav/Nav";
import HomePage from "./pages/home/homepage/HomePage";
import LogIn from "./pages/home/log-in/LogIn";
import ContactPage from "./pages/home/contactpage/ContactPage";
import nurse from "./assets/symbols/nurse.png";
import AdminHome from "./pages/admin/adminhome/AdminHome";
import PatientsOverview from "./components/patientsoverview/PatientsOverview";
import AddNurses from "./pages/admin/addnurses/AddNurses";
import AdminMessages from "./pages/admin/adminmessages/AdminMessages";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import WoundsToAsses from "./pages/nurses/woundstoassess/WoundsToAsses";
import PatientFile from "./components/patientfile/PatientFile";
import AddWound from "./pages/Wound/AddWound";
import AddWoundPhoto from "./pages/Wound/AddWoundPhoto";
import NursePatientFile from "./pages/nurses/NursePatientFile/NursePatientFile";
import PatientOwnFile from "./pages/patients/patienfile/PatientOwnFile";





function App() {

  return (
      <>
        <Nav />
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
            <AddNurses />
          </Route>
          <Route exact path={["/patiënten", "/patiënten-overzicht"]}>
            <PatientsOverview />
          </Route>
          <Route exaxt path="/berichten">
            <AdminMessages />
          </Route>
          <Route exact path={"/verpleegkundigen"}>
            <ProfilePage />
          </Route>
          <Route exact path="/nieuwe-foto's">
            <WoundsToAsses />
          </Route>
          <Route exact path="/wond-foto">
            <AddWoundPhoto />
          </Route>
          <Route exact path="/profiel">
            <ProfilePage />
          </Route>
          <Route path="/nieuwe-wond/:id">
            <AddWound />
          </Route>
          <Route path="/dossier-overzicht/">
            <PatientOwnFile />
          </Route>
          <Route path="/:id/" children={<NursePatientFile />} />

        </Switch>
        {/*{JSON.stringify(navItems) === JSON.stringify(home) && <img src={nurse} alt="nurse" className="nurse-image" />}*/}
        {/*{location.pathname.includes("profiel") && <img src={nurse} alt="nurse" className="nurse-image" />}*/}
      </>
  );
}

export default App;

import React, {createContext, useState} from "react";

export const NavContext = createContext({})

function NavContextProvider({children}){
    const [navItems, setNavItems] = useState(["home", "login", "contact", "admin"])
    const home = ["home", "login", "contact", "admin", "verpleegkundigen", "patiënten"]
    const admin = ["admin", "zorgverleners", "patiënten", "berichten", "home"]
    const nurses= ["home", "profiel", "patiënten-overzicht", "dossier"]
    const patients= ["home", "dossier-overzicht", "profiel" ]

    function setAdminNavBar(){
        setNavItems(admin)
    }

    const data ={
        navItems: navItems,
        setAdminNavBarFunction: setAdminNavBar,
    }

    return(
        <NavContext.Provider value={data}>
            {children}
        </NavContext.Provider>
    )
}

export default NavContextProvider;
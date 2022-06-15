import React, {createContext, useState} from "react";

export const AuthContext = createContext({})

function AuthContextProvider({children}){

const [loggedIn, setLoggedIn] = useState(false);


function logOut () {
    setLoggedIn(false)
    console.log("logged out")
}
function logIn (){
    setLoggedIn(true)
    console.log("logged in")
}

    const data = {
        loggedIn: loggedIn,
        logOutFunction: logOut,
        logInFunction: logIn,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
import React, {createContext, useEffect, useState, useContext} from "react";
import {useHistory} from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";


export const AuthContext = createContext({})

function AuthContextProvider({children}) {

    const [auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });

    const history = useHistory();

useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
        async function getUserData(){
            const decodedToken = jwtDecode(token);
            try{
                const result = await axios.get(`http://localhost:8080/users/${decodedToken.jti}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                toggleAuth( {
                    isAuth: true,
                    user: {
                        id:result.data.id,
                        email: result.data.email,
                        role: result.data.role,
                        name: result.data.name
                    },
                    status: "done",
                })
            }   catch(e) {
                toggleAuth({
                    ...auth,
                    status: 'error',
                });
                console.error(e);
            }
        }
        getUserData();
    } else {
        toggleAuth({
            ...auth,
            status: 'done',
        });
    }
}, []);

    function logIn(token) {
        const decodedToken = jwtDecode(token)
        console.log(decodedToken);
        localStorage.setItem('token', token);
        toggleAuth({
            isAuth: true,
            user: {
                id: decodedToken.jti,
                role: decodedToken.aud,
            }
        })

        getData();

        async function getData() {
            try {
                const result = await axios.get(`http://localhost:8080/users/${decodedToken.jti}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                toggleAuth({
                    ...auth,
                    isAuth: true,

                    user: {
                        role: result.data.role,
                        name: result.data.name,
                        id: result.data.id,
                        email: result.data.email,
                    },
                    status: "done",
                })
            } catch (e) {
                console.error(e)
            }
        }

        if(decodedToken){
            if    (decodedToken.aud === 'ADMIN'){
                history.push("/admin")
            }else if(decodedToken.aud === 'NURSE'){
                history.push("/verpleegkundigen")
            }else if(decodedToken.aud === 'PATIENT'){
                history.push("/dossier-overzicht")
            }
        }
    }




    function logOut () {
        toggleAuth({
            isAuth: false,
            user: null,
            status: "done",
        })
        history.push("/home");
        localStorage.clear();
        console.log("logged out");
    }

    const data = {
        isAuth: auth.isAuth,
        user: auth.user,
        logOut: logOut,
        logIn: logIn,
    }


    return (
        <AuthContext.Provider value={data}>
            {auth.status === "done" ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
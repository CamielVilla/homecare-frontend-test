import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import AuthContextProvider, {AuthContext} from "./components/Context/AuthContext";
import NavContextProvider from "./components/Context/NavContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <React.StrictMode>
            <NavContextProvider>
                <AuthContextProvider>
                     <App />
                 </AuthContextProvider>
            </NavContextProvider>
        </React.StrictMode>
    </Router>
);
reportWebVitals();

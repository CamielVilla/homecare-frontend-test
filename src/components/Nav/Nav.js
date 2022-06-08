import React from "react";
import './Nav.css';

function Nav ({children}) {
    return (

        <nav className="nav">
            <div className="nav-container">
            <ul>
                {children}
            </ul>
            </div>
        </nav>

    )
}

export default Nav;
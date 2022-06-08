import React from "react";
import './Nav.css';

function Nav ({children}) {
    return (

        <nav className="nav">
            <ul>
                {children}
            </ul>
        </nav>

    )
}

export default Nav;
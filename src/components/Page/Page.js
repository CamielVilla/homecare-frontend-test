import React from "react";
import "./Page.css";

function Page({children}) {
    return(
        <section className="page">
            <div className="page-container">
                {children}
            </div>
        </section>
    )
}

export default Page;
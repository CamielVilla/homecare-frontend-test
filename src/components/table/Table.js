import React from "react";
import "./Table.css"


function Table ({children, className, title}){

    return(
<div>
    <h1>{title}</h1>
    <table className={className}>
            {children}
    </table>

</div>
    )
}
export default Table
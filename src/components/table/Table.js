import React from "react";
import "./Table.css"


function Table ({children, className}){

    return(
<div>
    <table className={className}>
        <tr>
            <th>Naam wond</th>
            <th>Locatie</th>
            <th>Datum</th>
            <th>Foto</th>
            <th>Beoordeling</th>
        </tr>
            {children}
    </table>

</div>
    )
}
export default Table
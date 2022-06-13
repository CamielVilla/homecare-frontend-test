import React from "react";


function Table ({name, location, date, children}){

    return(
<div>
    <table>
        <tr>
            <th>Naam wond</th>
            <th>Locatie</th>
            <th>Datum</th>
        </tr>
        <tr>
            {children}
        </tr>
    </table>

</div>
    )
}
export default Table
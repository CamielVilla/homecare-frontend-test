import React, {useEffect, useState} from "react";
import "./PatientFile.css";
import Page from "../Page/Page";
import Table from "../table/Table";
import Button from "../Button/Button";
import RadioInput from "../Form/RadioInput";
import woundOne from "../../assets/symbols/Schermafbeelding 2022-05-04 om 11.43 1.png";
import woundTwo from "../../assets/symbols/wond2.jpeg"
import Form from "../Form/Form";
import TextAreaInput from "../Form/TextAreaInput";
import { useForm } from "react-hook-form";
import WoundExamination from "../woundExamination/WoundExamination";
import {upload} from "@testing-library/user-event/dist/upload";
import {render} from "react-dom";


function PatientFile(){
const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const woundsData = [
        {
            examined: false,
            woundId: 1,
            name: "Schaafwond",
            location: "Linker knie",
            date: "15-15-2022",
            image: <img src={woundOne}/>,
            examinationId: 1
    }
        ,
        {
                examined: false,
                woundId: 1,
                name: "Schaafwond",
                location: "Rechter knie",
                date: "16-15-2022",
                image: <img src={woundTwo}/>,
                examinationId: 2
            }
        ];

    const [wounds, setWounds] = useState(woundsData)


const click = index => e => {
    let newArr = [...wounds]; // copying the old datas array
    newArr[index].examined = true;
    setWounds(newArr)
    console.log(newArr)
        forceUpdate();
    }

function onFormSubmit () {

}




    return(
<Page>
            <h1>Dossier van J. Pieters</h1>
            <div className="patient-wound-container">
                <h2>Overzicht van wonden</h2>
                <RadioInput checked="checked" htmlFor="woundOne" woundName="Schaafwond linker knie" />
                <RadioInput htmlFor="woundOne" woundName="Steekwond buik" />
                <Button buttonType="button">Voeg nieuwe wond toe</Button>
            </div>
            <div className="table-container">
            <Table className="photo-table">
                {
                    woundsData.map((wound, index) => {
                       return <tr key={wound.examinationId}>
                                <td>{wound.name}</td>
                                <td>{wound.location}</td>
                                <td>{wound.date}</td>
                                <td>{wound.image}</td>
                                <td>
                                    {!wound.examined
                                        ?<WoundExamination
                                            handleClick={click(index)}
                                        className="examine-container"
                                        name={wound.examinationId}
                                        date={wound.date}
                                        onFormSubmit={onFormSubmit}
                                        placeHolder={"Beoordeel wond"}/>
                                        :<p>bem</p>}
                                </td>
                       </tr>
                    })}
            </Table>

            </div>
    <div className="treatment-plan-container">
        <h2>Behandplan</h2>
        <p>tweemaal daags spoelen</p>
    </div>

</Page>

    )
}

export default PatientFile;
import React, {useState} from "react";
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


function PatientFile(){

    const [isExamined, setIsExamined] = useState(false);
//
// let isExamined = false;
// function handleClick(){
//     isExamined = true
// }

    function onFormSubmit(data){
        console.log(data)
        setIsExamined(true)
    }

    const woundData = [
       {
        name: "Schaafwond",
        location: "Linker knie",
        date: "15-15-2022",
        image: <img src={woundOne}/>,
        examined: ""
        },
      {
            name: "Schaafwond",
            location: "Rechter knie",
            date: "16-15-2022",
            image: <img src={woundTwo}/>,
            examined: ""
        }
    ];




    return(
<Page>
            <h1>Dossier van J. Pieters</h1>
            <div className="patient-wound-container">
                <h2>Overzicht van wonden</h2>
                <RadioInput checked="checked" htmlFor="woundOne" woundName="Schaafwond linker knie" />
                <RadioInput htmlFor="woundOne" woundName="Steekwond buik" />
                <Button buttonType="button" >Voeg nieuwe wond toe</Button>
            </div>
            <div className="table-container">
            <Table className="photo-table">
                    {woundData.map((upload) => {
                       return <tr key={upload.date}>
                                <td>{upload.name}</td>
                                <td>{upload.location}</td>
                                <td>{upload.date}</td>
                                <td>{upload.image}</td>
                                <td>{!isExamined
                                    ? <WoundExamination
                                        date={upload.date}
                                        onFormSubmit={onFormSubmit}
                                        placeHolder={"Beoordeel wond"}/>
                                    : <p>beoordeling</p>

                                }
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
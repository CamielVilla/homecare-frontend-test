import React from "react";
import Form from "../Form/Form";
import TextAreaInput from "../Form/TextAreaInput";
import Button from "../Button/Button";
import {useForm} from "react-hook-form";

function WoundExamination ({date, placeHolder, onFormSubmit}){
    const { register, handleSubmit, formState: { errors} } = useForm();

    return (
        <Form  handleSubmit={handleSubmit(onFormSubmit)}>
            <TextAreaInput
                htmlFor={date}
                placeholder={placeHolder}
                fieldName={date}
                register={register}
                errors={errors}
                minimLength={3}
                maximLength={50}
                isRequired={true}
                cols={20}
                rows={5}
            />
            <Button buttonType="submit">Beoordeel wond</Button>
        </Form>
    )
}

export default WoundExamination;
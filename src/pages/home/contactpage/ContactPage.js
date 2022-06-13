import "./ContactPage.css"
import Button from "../../../components/Button/Button";
import { useForm} from "react-hook-form";
import Form from "../../../components/Form/Form";
import TextInput from "../../../components/Form/TextInput";
import React from "react";
import TextAreaInput from "../../../components/Form/TextAreaInput";

function ContactPage (){
    const { register, handleSubmit, formState: { errors} } = useForm();

    function onFormSubmit(data) {
        console.log(data)
    }

    return(

        <section className="contact-page">
            <div className="contact-page-container">
                <div className="contact-form-container">
                    <Form
                        handleSubmit={handleSubmit(onFormSubmit)}
                        title="Stel hier uw vraag"
                    >
                        <TextInput
                            htmlFor="contact-name"
                            type="text"
                            placeholder="Naam"
                            fieldName="contactName"
                            register={register}
                            errors={errors}
                            minimLength={3}
                            maximLength={50}
                            isRequired={true}
                        />
                        <TextInput
                            htmlFor="contact-email"
                            type="email"
                            placeholder="email adres"
                            fieldName="contactEmail"
                            register={register}
                            errors={errors}
                            minimLength={3}
                            maximLength={50}
                            isRequired={true}
                        />
                        <TextAreaInput
                            htmlFor="contact-question"
                            placeholder="Stel hier uw vraag"
                            fieldName="contactQuestion"
                            register={register}
                            errors={errors}
                            minimLength={3}
                            maximLength={100}
                            isRequired={true}
                            cols={40}
                            rows={10}
                        />
                        <div className="button-container-login">
                            <Button buttonType="reset">Reset</Button>
                            <Button buttonType="submit">Verzend</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    )
}
export default ContactPage;
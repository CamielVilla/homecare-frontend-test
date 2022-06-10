import "./ContactPage.css"
import Button from "../../../components/Button/Button";
import { useForm} from "react-hook-form";
import Form from "../../../components/Form/Form";
import FormInput from "../../../components/Form/FormInput";
import React from "react";

function ContactPage (){
    const { register, handleSubmit, formState: { errors} } = useForm();

    function onFormSubmit(data) {
        console.log(data)
    }

    return(

        <section className="contact-page">
            <div className="contact-page-container">
                <div className="form-container">
                    <Form
                        handleSubmit={handleSubmit(onFormSubmit)}
                        title="Stel hier uw vraag"
                    >
                        <FormInput
                            htmlFor="contact-name"
                            type="text"
                            placeholder="Naam"
                            fieldName="contactName"
                            register={register}
                            errors={errors}
                            minimLength={3}
                            maximLength={100}
                            isRequired={true}
                        />
                        <FormInput
                            htmlFor="contact-email"
                            type="email"
                            placeholder="email adres"
                            fieldName="contactEmail"
                            register={register}
                            errors={errors}
                            minimLength={3}
                            maximLength={100}
                            isRequired={true}
                        />
                        <label htmlFor="contact-question">
                             <textarea
                                cols="40"
                                rows="10"
                                placeholder="vraag"
                                id="contact-question"
                                {...register("textarea", {
                                    required: "veld is verplicht"
                                })}
                             />
                            <p> {
                                errors.textarea && errors.textarea.message
                            } </p>
                        </label>

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
import "./ContactPage.css"
import Button from "../../../components/Button/Button";
import { useForm} from "react-hook-form";

function ContactPage (){
    const { register, handleSubmit, formState: { errors} } = useForm();

    function onFormSubmit(data) {
    }

    return(
        <section className="contact-page">
            <div className="contact-container">
                <div className="contact-form-container">
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <h2>Contactformulier</h2>
                        <label htmlFor="details-name">
                        <input
                        type="text"
                        placeholder="naam"
                        id="details-name"
                        className="name"
                        {...register("name",  {
                            required: "Naam is verplicht",
                            minLength: {
                                value: 3,
                                message: "Naam moet mininmaal 3 karakters bevatten"
                            }
                        })}
                        />
                            {errors.name &&  <p>{errors.name.message}</p>}
                        </label>
                        <label htmlFor="details-email">
                        <input
                        type="email"
                        placeholder="email adres"
                        {...register("email", {
                            required: "Email is verplicht"
                        })}
                        className="contact-email-adres"
                        id="details-email"
                        />
                            {errors.email &&  <p>{errors.email.message}</p>}
                        </label>
                        <label htmlFor="details-question">
                        <textarea
                            placeholder="stel hier uw vraag"
                            id="details-question"
                            {...register("question", {
                                required: "Vraag is verplicht",
                                maxLength: {
                                    value: 100,
                                    message: "Vraag mag maximaal 100 karakters bevatten"
                                }
                            })}
                            className="question"
                            cols="42"
                            rows="8"
                        />
                            {errors.question &&  <p>{errors.question.message}</p>}
                        </label>
                        <div className="button-container-contact">
                        <Button
                            buttonType="reset"
                        >
                            Reset
                        </Button>
                        <Button
                            buttonType="submit"
                        >
                            verzend
                        </Button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    )
}
export default ContactPage;
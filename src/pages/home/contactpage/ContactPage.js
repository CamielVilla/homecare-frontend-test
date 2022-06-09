import "./ContactPage.css"
import Button from "../../../components/Button/Button";
import { useForm} from "react-hook-form";

function ContactPage (){
    const { register, handleSubmit } = useForm();

    function onFormSubmit() {

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
                        {...register("name")}
                        />
                        </label>
                        <label htmlFor="details-email">
                        <input
                        type="email"
                        placeholder="email adres"
                        {...register("email")}
                        className="contact-email-adres"
                        id="details-email"
                        />
                        </label>
                        <label htmlFor="details-question">
                        <textarea
                            placeholder="stel hier uw vraag"
                            {...register("question")}
                            className="question"
                            cols="42"
                            rows="8"
                        ></textarea>
                        </label>
                        <div className="button-container">
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
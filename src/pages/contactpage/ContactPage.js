import "./ContactPage.css"
import Button from "../../components/Button/Button";

function ContactPage (){
    function clickHandler () {

    }

    return(
        <section className="contact-page">
            <div className="contact-container">
                <div className="contact-form-container">
                    <form>
                        <h2>Contactformulier</h2>
                        <input
                        type="text"
                        placeholder="naam"
                        name="name"
                        className="name"
                        />
                        <input
                        type="email"
                        placeholder="email adres"
                        name="email-adres"
                        className="contact-email-adres"
                        />
                        <input
                            type="text"
                            placeholder="stel hier uw vraag"
                            name="question"
                            className="question"
                            height="500"
                        />
                    </form>
                    <Button
                        buttonType="submit"
                        handleClick={clickHandler}
                    >
                        verzend
                    </Button>
                </div>
            </div>
        </section>
    )
}
export default ContactPage;
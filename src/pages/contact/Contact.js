
import ContactForm from "./ContactForm"
import "./contact.css"
import contactImage from "./assets/storyImage.jpg"

const Contact = () => {
    return(
        <div>
            <div className="mt-5 mb-5 contactContainer px-5 pb-5">

                <div className="contactImage">
                    <img src={contactImage} />
                </div>
                <div><ContactForm /></div>      
            </div>
            
        </div>
    )
}


export default Contact
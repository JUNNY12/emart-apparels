import AboutHeader from "./About-Header"
import AboutParagraph from "./About-Paragraph"
import AboutImage from "./About-Image"
import "./about.css"




const About = () => {
    return(

        <div>
            <div>
                <AboutHeader />
            </div>

            <div>
                <AboutImage />    
            </div>

            <div>
                <AboutParagraph />
            </div>
        </div>
    )
}

export default About
import Nav from "../../components/nav/Nav"
import Footer from "../../components/footer/Footer"
import { Container, Row, Col } from "react-bootstrap"
import ContactForm from "./ContactForm"
import "./contact.css"
import contactImage from "./assets/storyImage.jpg"

const Contact = () => {
    return(
        <div>
            <div><Nav /></div>
            <div className="mt-5 mb-5">
                <Container>
                    <Row>
                        <Col>
                            <div className="contactImage">
                                <img src={contactImage} />
                            </div>
                        </Col>

                        <Col>
                            <div><ContactForm /></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div><Footer /></div>
        </div>
    )
}


export default Contact
import "./footer.css"
import {Container, Row, Col, Form} from "react-bootstrap"
import {BsFacebook,BsTwitter,BsInstagram} from "react-icons/bs"


const Footer = () => {

    const date = new Date()
    const now = date.getFullYear()


    return (
        <div>
            <footer className="text-center">
                <Container >
                    <Row>
                        <Col sm={12}  md={6} lg={3} className="mb-3">
                            <div className="footerHeader fs-2">
                               Address
                            </div>

                            <div>
                                 ed ut perspiciatis unde omnis iste
                                 ed ut perspiciatis unde omnis iste
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={3} className="mb-3">
                            <div className="footerHeader fs-2">
                              Contact
                            </div>

                            <div >
                                 ed ut perspiciatis unde omnis iste
                                 ed ut perspiciatis unde omnis iste
                            </div>
                        </Col>

                        <Col sm={12}  md={6} lg={3}>
                            <div >
                                <div className="footerHeader fs-2">FAQ</div>
                                <div>
                                    <a href="" className="faqLink">  
                                        Shipping and Return Policy
                                    </a>
                                </div>

                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={3}>
                            <div  className="footerHeader fs-2">
                               Subscribe To Our Newsletter
                            </div>

                            <div>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="email" required placeholder="Your Email Address" className="subscribeInput" />
                                    </Form.Group>
                                </Form>
                            </div>
                        </Col>
                    </Row>

                    <div className="footerIconWrapper mb-3 flex justify-content-center align-items-center">
                        <div className="footerIcon">
                                <BsFacebook />  
                        </div>
                        <div className="footerIcon">
                            <BsInstagram />
                        </div>
                        <div className="footerIcon">
                                <BsTwitter />
                        </div>
                    </div>

                    <div className="fw-bold fs-4">
                        <div>
                            <span className="me-2">Emart-Apparels</span>
                            <span className="me-2">&copy;</span>
                            <span className="me-1">{now},</span>
                            <span>All right Reserved.</span>
                        </div>
                    </div>
    
                </Container>
            </footer>
        </div>
    ) 
}

export default Footer
import "./footer.css"
import {Container, Row, Col, Form} from "react-bootstrap"
import {BsFacebook,BsTwitter,BsInstagram} from "react-icons/bs"


const Footer = () => {
    return (
        <div>
            <footer>
                <Container >
                    <Row>
                        <Col>
                            <div className="footerHeader">
                               Address
                            </div>

                            <div>
                                 ed ut perspiciatis unde omnis iste
                            </div>
                        </Col>

                        <Col>
                            <div className="footerHeader">
                              Contact
                            </div>

                            <div >
                                 ed ut perspiciatis unde omnis iste
                            </div>
                        </Col>

                        <Col>
                            <div >
                                <div className="footerHeader">FAQ</div>
                                <div>
                                    <a href="" className="faqLink">  
                                        Shipping and Return Policy
                                    </a>
                                </div>

                            </div>
                        </Col>

                        <Col>
                            <div  className="footerHeader">
                               Subscribe To Our Newsletter
                            </div>

                            <div>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>*</Form.Label>
                                        <Form.Control type="email" placeholder="Your Email Address" className="subscribeInput" />
                                    </Form.Group>

                                    <button className="subscribeBtn" type="submit">
                                        Submit
                                    </button>
                                </Form>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="footerIconWrapper">
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
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    ) 
}

export default Footer
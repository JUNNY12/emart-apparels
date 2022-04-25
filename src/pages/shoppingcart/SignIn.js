import { Container, Row , Col } from "react-bootstrap"
import Nav from "../../components/nav/Nav"
import Header from "./ShoppingCart-header"
import SignInForm from "../../components/signinform/SignInForm"
import Footer from "../../components/footer/Footer"


const SignIn = () => {
    return(
        <div>
            <div><Nav /></div>
            <div><Header /></div>
            <Container className="mb-5">
                <Row>
                    <Col>
                        <div>
                            <h1> Join us Or Sign In</h1>
                            <h6 className="mb-3">Store / Sign In</h6>

                            <p className="trackPara">
                                Keep track of your next orders, expedite checkout, 
                                and sync your favorites. Simply enter your email address, 
                                and we'll give you a unique link to automatically sign you in.
                            </p>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <SignInForm />
                        </div>
                    </Col>
                </Row>
            </Container>

            <div><Footer /></div>
        </div>
    )
}


export default SignIn
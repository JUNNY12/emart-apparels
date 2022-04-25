import Nav from "../../components/nav/Nav"
import Header from "./ShoppingCart-header"
import { Container, Row , Col } from "react-bootstrap"
import Footer from "../../components/footer/Footer"
import SignIn from "../../components/signinform/SignInForm"


const TrackOrders = () => {
    return(
        <div>
            <Nav />
            <Header />

            <div className="p-5">
                <Container>
                    <Row>
                        <Col>
                           <div>
                               <h1>
                                   Join us Or Sign In
                               </h1>

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
                                <SignIn />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div><Footer /></div>
        </div>
    )
}


export default TrackOrders
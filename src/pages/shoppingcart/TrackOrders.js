import { Container, Row , Col } from "react-bootstrap"
import SignIn from "../../components/forms/SignInForm"


const TrackOrders = () => {
    return(
        <div>

            <div className="p-5">
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                           <div>
                               <h1>
                                   Join us Or Sign In
                               </h1>

                               <h6 className="mb-3">Store / Sign In</h6>

                               <p className="">
                                    Keep track of your next orders, expedite checkout, 
                                    and sync your favorites. Simply enter your email address, 
                                    and we'll give you a unique link to automatically sign you in.
                               </p>
                           </div>
                        </Col>

                        <Col sm={12} md={6}>
                            <div>
                                <SignIn />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

           
        </div>
    )
}


export default TrackOrders
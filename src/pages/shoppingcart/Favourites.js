import Nav from "../../components/nav/Nav"
import Header from "./ShoppingCart-header"
import Footer from "../../components/footer/Footer"

import { Container, Row, Col } from "react-bootstrap"


const Favorite = () => {
    return(
        <div>
            <div><Nav /></div>
            <div><Header /></div>

            <Container className="mb-5">
                <Row>
                    <Col>
                        <div>
                            <h1>My Favorites</h1>
                            <h6 className="mb-3">Store / Favorites</h6>
                            <p>
                                You haven't add any Favorite item yet !!!
                            </p>

                        </div>
                    </Col>
                </Row>
            </Container>

            <div>
                <Footer />
            </div>

        </div>
    )
}



export default Favorite
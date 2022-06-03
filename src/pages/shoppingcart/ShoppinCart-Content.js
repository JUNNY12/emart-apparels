import { Container, Row, Col } from "react-bootstrap"
import {Link} from "react-router-dom"


const ShoppingCartContent = () => {
    return (
        <div className="mb-5">
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h1>Shopping Cart</h1>
                            <h6>Store / Shopping cart</h6>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="text-center">
                            <h3 className="fs-5 mb-4">Your Shopping Cart is Empty</h3>

                            <div className="mb-3">
                                <Link to="/shop">
                                     <button className="browseBtn">Browse Store</button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container> 
        </div>
    )
}


export default ShoppingCartContent
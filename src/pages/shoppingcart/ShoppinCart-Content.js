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
                            <h6>Shop / Shopping cart</h6>
                        </div>
                    </Col>
                </Row>
            </Container> 
        </div>
    )
}


export default ShoppingCartContent
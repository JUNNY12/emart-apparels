import { Card } from "react-bootstrap";



const ProductComponent= (props) => {
    return(
        <div className="productCard mb-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.eachItem.image} />
                <Card.Body>
                    <Card.Title className="text-center">{props.eachItem.description}</Card.Title>
                    <Card.Text className="text-center fw-bold fs-4">
                       <span>$</span> <span>{props.eachItem.price}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductComponent
import { Card } from "react-bootstrap";




const ShoeComponent= (props) => {
    return(
        <div className="productCard mb-4">

           {props.item.isShoe &&
            <Card>
                <Card.Img style={{height:'18rem'}} variant="top" src={props.item.image} />
                <Card.Body>
                    <Card.Title className="text-center">{props.item.description}</Card.Title>
                    <Card.Text className="text-center fw-bold fs-4">
                    <span>$</span> <span>{props.item.price}</span>
                    </Card.Text>
               </Card.Body>
            </Card>}

        </div>
    )
}

export default ShoeComponent
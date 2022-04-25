import { Card } from "react-bootstrap";




const AccessoriesComponent= (props) => {
    return(
        <div className="productCard mb-4">

           {props.item.isAccessories && 
            <Card style= {{ width: '15rem' }}>
                <Card.Img variant="top" src={props.item.image} />
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

export default AccessoriesComponent
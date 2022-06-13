import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";




const ClothComponent= (props) => {
    return(
        <div className="productCard mb-4">

           {props.item.isCloth &&
            <Card>
                <Card.Img style={{height:'18rem'}} variant="top" src={props.item.image} />
                <Card.Body>
                    <Card.Title className="text-center">{props.item.description}</Card.Title>
                    <Card.Text className="text-center fw-bold fs-4">
                    <span>$</span> <span>{props.item.price}</span>
                    </Card.Text>
                    <Link to={`/shop/${props.item.id}`}>
                        <div className="text-center">
                            <button className="moreInfoBtn">
                                <span className="me-1 p-2 "> More Info</span>
                                <span className="me-1"><i class="fa-solid fa-circle-info"></i></span>
                            </button>
                        </div>
                    </Link>
               </Card.Body>
            </Card>}

        </div>
    )
}

export default ClothComponent
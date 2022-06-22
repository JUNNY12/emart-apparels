import { Card } from "react-bootstrap";
import {Link} from "react-router-dom"




const AccessoriesComponent= (props) => {
    return(
        <div className="productCard mb-4">

            <Card >
                <Card.Img style={{height:'18rem'}} variant="top" src={props.accessory.image} />
                <Card.Body>
                    <Card.Title className="text-center">{props.accessory.description}</Card.Title>
                    <Card.Text className="text-center fw-bold fs-4">
                    <span>$</span> <span>{props.accessory.price}</span>
                    </Card.Text>

                    <Link to={`/shop/${props.accessory.id}`}>
                        <div className="text-center">
                            <button className="moreInfoBtn">
                                <span className="me-1 p-2 "> More Info</span>
                                <span className="me-1"><i class="fa-solid fa-circle-info"></i></span>
                            </button>
                        </div>
                    </Link>
               </Card.Body>
            </Card>

        </div>
    )
}

export default AccessoriesComponent
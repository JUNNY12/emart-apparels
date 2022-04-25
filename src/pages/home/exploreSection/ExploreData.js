import { Container, Row, Col } from "react-bootstrap"



const ExploreData = (props) => {

    return(
        <div>
             <Container>
                <Row>
                    <Col>
                        <div className="exploreWrapper">
                            <img src={props.eachImage.image} />
                            <div className="btnWrapper">
                                 <button className="btnExplore">{props.eachImage.description}</button>
                             </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ExploreData
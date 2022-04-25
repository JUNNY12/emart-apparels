import { Container, Row , Col } from "react-bootstrap"
import storyImage from "../assets/storyImage.jpg"




const StorySection = () => {
    return(
        <div className="mb-5">
            <Container>
                <Row>
                    <Col>
                       <h5 className="">OUR STORY</h5>
                        <div className="storyText mt-4">
                            <h2 className="mb-5">It all boils down to what they enjoy the most...</h2>
                            <p className="mb-5">
                                We are a men's apparel and accessories
                                boutique brand and online retailer. 
                                Our objective is to help men look good. 
                                We are here to make every man feel special in what he wears.
                                After all, our ultimate purpose is to make the world a better place.
                            </p>

                            <button className="btnDiscover">DISCOVER</button>
                        </div>
                    </Col>

                    <Col>
                        <div className="storyImage">
                            <img src={storyImage} />
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}


export default StorySection
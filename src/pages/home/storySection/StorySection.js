import { Container, Row , Col } from "react-bootstrap"
import storyImage from "../assets/storyImage.jpg"




const StorySection = () => {
    return(
        <div className="mb-5  px-5">
        
        <div className="storySection">
            <div className="storyText mb-5">
            <h1 className="text-center fw-bold"> Our Story</h1>
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
        
            <div className="storyImage">
                <img src={storyImage} />
            </div>
        
        </div>

        </div>
    )
}


export default StorySection
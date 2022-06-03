import "./hero.css"
import { Container,Row, Col } from "react-bootstrap"
import heroImage from "../assets/hero.jpg"


const Hero = () => {
    return(
        <div className="hero mb-5 px-5">

        <div className="heroTextWrapper">
            <h1 className="mt-5">Shop Together</h1>

            <p className="heroPara mt-4"> 
                We want you to feel secure, cherished, and liberated.
                Our organic and fairtrade clothing ensures that you look good.
            </p>

            <div>
                    <button className="viewMore mt-5">View More</button>
            </div>
        </div>
    
        <div className="heroWrapper">
            <img src={heroImage}/>
        </div>
        
                
        </div>
    )
}


export default Hero
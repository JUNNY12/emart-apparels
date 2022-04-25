import cloth from "./assets/cloths.jpg"
import image3 from "./assets/image3.jpg"
import storyImage from "./assets/storyImage.jpg"

const AboutImage = () => {
    return(
        <div className="aboutImage" >
            <div className="aboutWrapper">
                <img src={cloth}/>
            </div>

            <div className="aboutWrapper">
                <img src ={image3}/>
            </div>

            <div className="aboutWrapper"> 
                <img src ={storyImage}/>
            </div>
        </div>
    )
}

export default AboutImage
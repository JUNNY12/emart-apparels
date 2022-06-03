import { Link } from "react-router-dom"

const ExploreComponent = (props) => {

    return(
        <div>
            <div className="exploreWrapper mb-5">
                <img src={props.eachImage.image} />
                <div className="btnWrapper">
                <Link to={props.eachImage.url}>
                      <button className="btnExplore">{props.eachImage.description}</button>
                </Link>     
                </div>
            </div>
        </div>
    )
}

export default ExploreComponent
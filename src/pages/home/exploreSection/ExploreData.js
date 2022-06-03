



const ExploreData = (props) => {

    return(
        <div>
            <div className="exploreWrapper mb-5">
                <img src={props.eachImage.image} />
                <div className="btnWrapper">
                        <button className="btnExplore">{props.eachImage.description}</button>
                    </div>
            </div>
        </div>
    )
}

export default ExploreData
import ProductData from "../../ProductData"
import InsightComponent from "./InsightComponent"





const InsightContent = () => {

    const Items = ProductData.map((item) => {
        return  <InsightComponent 
        key={item.id}
        item={item}

        />
    })
    return(
        <div>

            <div className="my-5 px-3 text-center insightHeader">
                <h1>Take a peek at what we've discovered...</h1>
                <h6>Take a look at the inspiring gallery we put together from our community.</h6>
            </div>

            <div  className="insightContainer px-5 mb-5">{Items}</div>

        </div>
    )
}

export default InsightContent
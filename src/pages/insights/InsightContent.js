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

            <div className="my-5 text-center">
                <h1>Take a peek at what we've discovered...</h1>
                <h6>Take a look at the inspiring gallery we put together from our community.</h6>
            </div>

            <div  className="insightContainer">{Items}</div>

        </div>
    )
}

export default InsightContent
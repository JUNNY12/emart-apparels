import ProductData from "../../ProductData";
import ProductComponent from "./ProductComponent";

const FeatureProducts = () => {


    const ProductItem = ProductData.map((eachItem) => {
        return <ProductComponent 
        key ={eachItem.id}
        eachItem={eachItem}
        />
    })
    return(
        <div>

            <div>
                <h1 className="text-center">Featured Product</h1>
            </div>

            <div className="featuredProductContainer">
                {ProductItem}
            </div>

        </div>
    )
}

export default FeatureProducts
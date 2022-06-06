import ProductData from "../../ProductData";
import ProductComponent from "./ProductComponent";


const FeatureProducts = () => {


    const ProductItem = ProductData.map((item) => {
        return <ProductComponent 
        key ={item.id}
        item={item}
        />
    })
    return(
        <div>

            <div>
                <h1 className="text-center mb-3">Featured Product</h1>
            </div>

            <div className="featuredProductContainer px-5 pb-5">
                {ProductItem}
            </div>

        </div>
    )
}

export default FeatureProducts
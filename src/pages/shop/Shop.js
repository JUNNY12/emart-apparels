import Header from "../shoppingcart/ShoppingCart-header"
import ShoppingCartNav from "../shoppingcart/ShoppingCart-Nav"
import "./shop.css"
import ProductNavigation from "./ProductNavigation"
import FeatureProducts from "./FeaturedProducts"


const Shop = () => {
    return (
        <div>
            <div><Header /></div>
            <div><ShoppingCartNav /></div>
            <div><ProductNavigation /></div>
            <div><FeatureProducts /></div>    
        </div>
    )
}


export default Shop
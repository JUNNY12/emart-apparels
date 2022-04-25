import Nav from "../../components/nav/Nav"
import Footer from "../../components/footer/Footer"
import Header from "../shoppingcart/ShoppingCart-header"
import ShoppingCartNav from "../shoppingcart/ShoppingCart-Nav"
import "./shop.css"
import ProductNavigation from "./ProductNavigation"
import FeatureProducts from "./FeaturedProducts"


const Shop = () => {
    return (
        <div>
            <div><Nav /></div>
            <div><Header /></div>
            <div><ShoppingCartNav /></div>

            <div><ProductNavigation /></div>
            <div><FeatureProducts /></div>    
            <div><Footer /></div>
        </div>
    )
}


export default Shop
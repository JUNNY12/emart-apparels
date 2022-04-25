import Nav from "../../components/nav/Nav"
import Footer from "../../components/footer/Footer"
import Header from "./ShoppingCart-header"
import ShoppingCartNav from "./ShoppingCart-Nav"
import ShoppingCartContent from "./ShoppinCart-Content"
import "./shoppingCart.css"




const ShoppingCart = () => {
    return(
        <div>
            <div><Nav /></div>
            <div><Header/></div>
            <div><ShoppingCartNav /></div>
            <ShoppingCartContent />
            <div><Footer /></div>
        </div>
    )
}


export default ShoppingCart
import Nav from "../../components/nav/Nav"
import Header from "../shoppingcart/ShoppingCart-header"
import ShoppingCartNav from "../shoppingcart/ShoppingCart-Nav"
import Footer from "../../components/footer/Footer"
import ClothContent from "./ClothContent"





const Clothes = () => {
    return(
        <div>
            <div><Nav /></div>
            <div><Header /></div>
            <div><ShoppingCartNav /></div>
            <div><ClothContent /></div>
            <div><Footer /></div>
        </div>
    )
}


export default Clothes
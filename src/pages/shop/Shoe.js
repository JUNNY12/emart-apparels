import Nav from "../../components/nav/Nav"
import ShoppingCartNav from "../shoppingcart/ShoppingCart-Nav"
import Header from "../shoppingcart/ShoppingCart-header"
import Footer from "../../components/footer/Footer"
import ShoeContent from "./ShoeContent"









const Shoes = () => {

    return(
        <div>
            <div><Nav /></div>
            <div><Header /></div>
            <div> <ShoppingCartNav /></div>
            <div><ShoeContent /></div>
          
            <div><Footer /></div>
        </div>
    )
}


export default Shoes
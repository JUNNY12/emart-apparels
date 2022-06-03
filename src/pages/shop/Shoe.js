import ShoppingCartNav from "../shoppingcart/ShoppingCart-Nav"
import Header from "../shoppingcart/ShoppingCart-header"
import ShoeContent from "./ShoeContent"









const Shoes = () => {

    return(
        <div>
            <div><Header /></div>
            <div> <ShoppingCartNav /></div>
            <div><ShoeContent /></div>
        </div>
    )
}


export default Shoes
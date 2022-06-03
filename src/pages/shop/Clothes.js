import Header from "../shoppingcart/ShoppingCart-header"
import ShoppingCartNav from "../shoppingcart/ShoppingCart-Nav"
import ClothContent from "./ClothContent"



const Clothes = () => {
    return(
        <div>
            <div><Header /></div>
            <div><ShoppingCartNav /></div>
            <div><ClothContent /></div>
        </div>
    )
}


export default Clothes
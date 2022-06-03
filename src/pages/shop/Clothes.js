import Header from "../../components/shoppingCartNav/ShoppingCart-header"
import ShoppingCartNav from "../../components/shoppingCartNav/ShoppingCart-Nav"
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
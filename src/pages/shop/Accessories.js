import Header from "../../components/shoppingCartNav/ShoppingCart-header"
import ShoppingCartNav from "../../components/shoppingCartNav/ShoppingCart-Nav"
import AccessoriesContent from "./AccessoriesContent"




const Accessories = () => {
    return(
        <div>
            <div><Header /></div>
            <div><ShoppingCartNav /></div>
            <div><AccessoriesContent /></div>
        </div>
    )
}


export default Accessories
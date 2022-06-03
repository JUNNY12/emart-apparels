import ShoppingCartNav from "../../components/shoppingCartNav/ShoppingCart-Nav"
import Header from "../../components/shoppingCartNav/ShoppingCart-header"
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
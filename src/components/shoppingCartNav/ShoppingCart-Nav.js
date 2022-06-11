import { Link } from "react-router-dom"
import Profile from "../profile/Profile"
import { useCart } from "react-use-cart"




const ShoppingCartNav = () => {
    const{
        totalUniqueItems,
        } = useCart()
    
    return(
        <div className="mt-5 px-3">
            <nav >
                <ul className="shoppingNav py-2">
                    <Link to="/shop/trackorders">
                        <li className="text-center">
                            <div className="shoppingIcon"><i class="fa-solid fa-truck"></i></div>
                            <div className="hideText">Track Orders</div>
                        </li>
                    </Link>

                    <Link to="/shop/favorite">
                        <li className="text-center">
                            <div className="shoppingIcon"><i class="fa-solid fa-heart"></i></div>
                            <div className="hideText">Favorite</div>
                        </li>
                    </Link>

                   <Link to="/shop/cart">
                       <li className="text-center">
                            <div className="shoppingIcon">
                                <span><i class="fa-solid fa-cart-shopping"></i></span>
                                <span className="fs-6">({totalUniqueItems})</span>
                            </div>
                            <div > 
                                <span className="hideText"> Shopping Cart</span>
                            </div>
                        </li>
                   </Link>

                   <div><Profile /></div>

                </ul>
            </nav>

        </div>
    )
}

export default ShoppingCartNav
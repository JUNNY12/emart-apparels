import { Link } from "react-router-dom"




const ShoppingCartNav = () => {
    return(
        <div className="mt-5">
            <nav >
                <ul className="shoppingNav">
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
                            <div className="shoppingIcon"><i class="fa-solid fa-cart-shopping"></i></div>
                            <div className="hideText"> 
                                <span> Shopping Cart</span>
                                <span>(0)</span>
                            </div>
                        </li>
                   </Link>

                    <Link to="/shop/signin">
                        <li className="text-center">
                            <div className="shoppingIcon"><i class="fa-solid fa-user"></i></div>
                            <div className="hideText">Sign In</div>
                        </li>
                    </Link>
                </ul>
            </nav>

        </div>
    )
}

export default ShoppingCartNav
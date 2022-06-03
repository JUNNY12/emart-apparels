import { Link } from "react-router-dom"




const ShoppingCartNav = () => {
    return(
        <div className="mt-5">
            <nav >
                <ul className="shoppingNav">
                    <Link to="/trackorders">
                        <li className="text-center">
                            <div className="shoppingIcon"><i class="fa-solid fa-truck"></i></div>
                            <div className="hideText">Track Orders</div>
                        </li>
                    </Link>

                    <Link to="/favorite">
                        <li className="text-center">
                            <div className="shoppingIcon"><i class="fa-solid fa-heart"></i></div>
                            <div className="hideText">Favorite</div>
                        </li>
                    </Link>

                   <Link to="/cart">
                       <li className="text-center">
                            <div className="shoppingIcon"><i class="fa-solid fa-cart-shopping"></i></div>
                            <div className="hideText"> Shopping Cart</div>
                        </li>
                   </Link>

                    <Link to="/signin">
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
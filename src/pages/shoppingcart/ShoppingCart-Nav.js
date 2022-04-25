




const ShoppingCartNav = () => {
    return(
        <div className="mt-5">
            <nav >
                <ul className="shoppingNav">
                    <a href="/trackorders">
                        <li className="text-center">
                            <div><i class="fa-solid fa-truck"></i></div>
                            <div>Track Orders</div>
                        </li>
                    </a>

                    <a href="/favorite">
                        <li className="text-center">
                            <div><i class="fa-solid fa-heart"></i></div>
                            <div>Favorite</div>
                        </li>
                    </a>

                   <a href="/cart">
                       <li className="text-center">
                            <div><i class="fa-solid fa-cart-shopping"></i></div>
                            <div> Shopping Cart</div>
                        </li>
                   </a>
                    <a href="/signin">
                        <li className="text-center">
                            <div><i class="fa-solid fa-user"></i></div>
                            <div>Sign In</div>
                        </li>
                    </a>
                </ul>
            </nav>

        </div>
    )
}

export default ShoppingCartNav
import "./nav.css"



const Nav = () => {
    return (
        <div>
            <nav className="navStyle">
                <div className="logoName">
                    <h1>Emart-Apparels</h1>
                </div>

                <ul className="navList">
                    <a href="/" className="navLink">
                        <li>HOME</li>
                    </a>

                    <a href="/shop" className="navLink">
                        <li>SHOP</li>
                    </a>

                    <a href="/about" className="navLink">
                        <li>ABOUT</li>
                    </a>

                    <a href="/insights" className="navLink">
                        <li>INSIGHTS</li>
                    </a>

                    <a href="/contact" className="navLink">
                        <li>CONTACT</li>
                    </a>

                    <a href="/cart" className="navLink">
                        <li>
                            <span className="me-1">SHOPPING CART</span>
                            <span className="me-2"><i class="fa-solid fa-cart-shopping"></i></span>
                            <span>(0)</span>
                        </li>
                    </a>

                </ul>
            </nav>
        </div>
    )
}


export default Nav
import "./nav.css"

import { useState } from "react"



const Nav = () => {

    const [isOpen, setIsOpen] = useState(true)



    const toggleNavBar = () => {
        setIsOpen(prevState => !prevState)
    }

    return (
        <div>
            <nav className="navStyle">
                <div className="logoName">
                    <h1>Emart-Apparels</h1>
                </div>

                <ul className={isOpen? "navList" : "showNav"}>
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

                <div className="menuIcon" onClick={toggleNavBar}>
                     <i class="fa-solid fa-bars"></i>
                </div>
            </nav>
        </div>
    )
}


export default Nav
import "./nav.css"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"




const Nav = () => {

    const [isOpen, setIsOpen] = useState(true)
    const {pathname} = useLocation()

    useEffect(()=>{
        setIsOpen(true)
    }, [pathname])

    const ToggleNavBar = () => {
            setIsOpen(prevState => !prevState)
    }

    return (
        <div>
            <nav className="navStyle">
                <div className="logoName">
                    <h1>Emart-Apparels</h1>
                </div>

                <ul className={isOpen? "navList" : "showNav"}>
                   
                        <li className="navLink">
                            <NavLink to="/" 
                            className={({isActive}) => (isActive? "link active" : "link")} 
                            >
                            HOME
                            </NavLink>
                        </li>

                        <li className="navLink">
                            <NavLink to="/about" className="link">
                                ABOUT
                            </NavLink>
                        </li>

                        <li className="navLink">
                            <NavLink to="/insights" className="link">
                                INSIGHTS
                            </NavLink>
                        </li>

                        <li className="navLink">
                            <NavLink to="/contact" 
                             className={({isActive}) => (isActive? "link active" : "link")}
                            >
                                CONTACT
                            </NavLink>
                        </li>
                    
                        <li className="navLink">
                            <NavLink to="/shop"
                            className={({isActive}) => (isActive? "link active" : "link")} 
                            >
                            SHOP
                            </NavLink>
                        </li>

                </ul>

                <div className="menuIcon" onClick={ToggleNavBar}>
                     <i class="fa-solid fa-bars"></i>
                </div>
            </nav>
        </div>
    )
}


export default Nav
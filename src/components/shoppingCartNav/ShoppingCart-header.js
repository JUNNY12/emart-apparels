import { useState } from "react"

const Header = () => {

    const getUsername = JSON.parse(localStorage.getItem("userDetails"))
    
    return(
        <div>
           
            <div className="shoppingCartHeader text-center mb-5 mt-5 px-2">

                <div className="welcomeMessage fst-italic fw-bold mb-4">
                    <h5>Welcome On Board {getUsername.username}</h5>
                </div>

                <h1 className="mb-3">
                     You didn't come this far to stop here.
                </h1>

                <h6>Explore Our Range of Men Clothings, Shoes and Accessories</h6>
            </div>
        </div>
    )
}

export default Header
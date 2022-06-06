import shoes from "./assets/shoes.jpg"
import cloths from "./assets/cloths.jpg"
import accessories from "./assets/accessories.jpg"
import { Link } from "react-router-dom"


const ProductNavigation = () => {


    return(
        <div className="productNav">
            
            <div className="productNavWrapper mb-4">
                <img src = {cloths}/>

                <Link to="/shop/clothes">
                    <button className="productBtn">
                        CLOTHES
                    </button>
                </Link>
    
            </div>

            <div className="productNavWrapper mb-4">
                <img src = {shoes}/>
                <Link to="/shop/shoes">
                    
                    <button className="productBtn">
                        SHOES
                    </button>
                
                </Link>
            </div>

            <div className="productNavWrapper mb-4">
                <img src = {accessories}/>
               <Link to="/shop/accessories">
                    <button className="productBtn">
                        ACCESSORIES
                    </button>
               </Link>
            </div>
        </div>
    )
}

export default ProductNavigation
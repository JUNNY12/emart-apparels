import shoes from "./assets/shoes.jpg"
import cloths from "./assets/cloths.jpg"
import accessories from "./assets/accessories.jpg"


const ProductNavigation = () => {


    return(
        <div className="productNav">
            
            <div className="productNavWrapper">
                <img src = {cloths}/>
                <a href="/clothes">
                    <button className="productBtn">
                        CLOTHES
                    </button>
                </a>
            </div>

            <div className="productNavWrapper">
                <img src = {shoes}/>
                <a href="/shoes">
                    <button className="productBtn">
                        SHOES
                    </button>
                </a>
            </div>

            <div className="productNavWrapper">
                <img src = {accessories}/>
               <a href="/accessories">
                    <button className="productBtn">
                        ACCESSORIES
                    </button>
               </a>
            </div>
        </div>
    )
}

export default ProductNavigation
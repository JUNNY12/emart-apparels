
import ProductData from "../../ProductData"
import ShoeComponent from "./ShoeComponent"




const ShoeContent = () => {

    const shoeItems = ProductData.map((item) => {
        return  <ShoeComponent 
          key ={item.id}
          item={item}
          />
      })

    return(
        <div className="shoeContent mb-5">
            <div className="px-5 mb-3">
                 <h1>Shoes</h1>
                <h6 className="mb-3">Shop / Shoes</h6>

                 <p>
                     We are always on the lookout for fashionable, 
                     high-quality Shoes for you that is also reasonably priced.
                </p>
            </div>
                
            <div className="shoeContainer px-5">
                {shoeItems}
            </div>
                  
        </div>
    )
}

export default ShoeContent
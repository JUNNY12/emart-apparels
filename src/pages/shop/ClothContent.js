
import ProductData from "../../ProductData"
import ClothComponent from "./ClothComponent"




const ClothContent = () => {

    const clothItems = ProductData.map((item) => {
        return  <ClothComponent 
          key ={item.id}
          item={item}
          />
      })
      

    return(
        <div className="clothContent">
            <div className="px-5">
                 <h1>Clothes</h1>
                <h6 className="mb-3">Store / Clothes</h6>

                 <p>
                     We are always on the lookout for fashionable, 
                     high-quality Shoes for you that is also reasonably priced.
                </p>
            </div>
                
            <div className="clothContainer px-5 pt-3">
                {clothItems}
            </div>
                  
        </div>
    )
}

export default ClothContent
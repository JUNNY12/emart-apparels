
import ProductData from "../../ProductData"
import AccessoriesComponent from "./AccessoriesComponent"




const AccessoriesContent = () => {

    const accessoriesItems = ProductData.map((item) => {
        return  <AccessoriesComponent 
          key ={item.id}
          item={item}
          />
      })

    return(
        <div className="accessoriesContent">
            <div>
                 <h1>Clothes</h1>
                <h6 className="mb-3">Store / Accessories</h6>

                 <p>
                     We are always on the lookout for fashionable, 
                     high-quality Shoes for you that is also reasonably priced.
                </p>
            </div>
                
            <div className="accessoriesContainer">
                {accessoriesItems}
            </div>
                  
        </div>
    )
}

export default AccessoriesContent
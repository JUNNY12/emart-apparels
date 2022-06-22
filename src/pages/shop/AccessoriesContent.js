
import ProductData from "../../ProductData"
import AccessoriesComponent from "./AccessoriesComponent"




const AccessoriesContent = () => {

    const accessoriesItems = ProductData.filter(accessory => accessory?.isAccessories === true).map((accessory) =>{
        return  <AccessoriesComponent 
        key ={accessory.id}
        accessory={accessory}
        />

    })

    return(
        <div className="accessoriesContent">
            <div className="px-5 mb-3">
                 <h1>Clothes</h1>
                <h6 className="mb-3">Shop / Accessories</h6>

                 <p>
                     We are always on the lookout for fashionable, 
                     high-quality Shoes for you that is also reasonably priced.
                </p>
            </div>
                
            <div className="accessoriesContainer px-5">
                {accessoriesItems}
            </div>
                  
        </div>
    )
}

export default AccessoriesContent
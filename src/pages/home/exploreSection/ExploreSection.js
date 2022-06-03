import { ExploreDataSection } from "../Data"

import ExploreComponent from "./ExploreComponent"


const Explore = () => {

    const exploreImage = ExploreDataSection.map((eachImage) =>{
        return <ExploreComponent
        key={eachImage.id}
        eachImage={eachImage}
        />
    })

    return (
        <div className="mb-3 px-5">
            <div className="text-center"> 
                <h2>Explore All Your Needs</h2>

                <p>
                    Our store has something for everyone,
                    from Shoes, clothings and accessories.
                </p>
            </div>

           <div>
                 <div className="exploreImageContainer mb-5">
                     {exploreImage}
                </div>

           </div>
                 

        </div>
    )
}

export default Explore
import { GalleryDataSection } from "../Data";
import GalleryData from "./GalleryData";
import { Link } from "react-router-dom";





const HomeGallery = () => {

    const galleryItems = GalleryDataSection.map((item) => {
        return <GalleryData 
         key={item.id}
         item={item}
        />
    })
    
    return(
        <div className="mb-5">
            <div>
                <h2 className="text-center mb-3">A glimpse behind the scenes at our inspired gallery...</h2>
            </div>
            <div className="galleryWrapper px-5 mb-4">{galleryItems}</div>

            <div className="text-center">
                <Link to="/insights">
                     <button className="btnDiscover fw-bold">Discover More</button>
                </Link>
            </div>
        </div>
    )
}

export default HomeGallery
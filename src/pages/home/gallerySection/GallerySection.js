import { GalleryDataSection } from "../Data";
import GalleryData from "./GalleryData";





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
                <button className="btnDiscover fw-bold">Discover More</button>
            </div>
        </div>
    )
}

export default HomeGallery
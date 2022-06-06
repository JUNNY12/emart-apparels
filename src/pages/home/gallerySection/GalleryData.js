

const GalleryData = (props) => {
    return (
        <div>
            <div className="galleryContainer mb-5">
                <img src={props.galleryItem.image} />
            </div>
        </div>
    )
}

export default GalleryData


const GalleryData = (props) => {
    return (
        <div>
            <div className="galleryContainer mb-5">
                <img src={props.item.image} />
            </div>
        </div>
    )
}

export default GalleryData
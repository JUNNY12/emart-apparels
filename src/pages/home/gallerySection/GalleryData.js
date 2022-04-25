

const GalleryData = (props) => {
    return (
        <div>
            <div className="galleryContainer">
                <img src={props.item.image} />
            </div>
        </div>
    )
}

export default GalleryData
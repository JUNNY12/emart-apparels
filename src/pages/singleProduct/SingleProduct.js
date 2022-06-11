import "./singleProduct.css"
import ProductData from "../../ProductData"
import { Link, useLocation } from "react-router-dom"
import {useCart } from "react-use-cart";



const SingleProduct = () => {

    const location = useLocation()
    const itemId= location.pathname.split("/")[2]

    const items= ProductData.find((item) => {
      return item.id === Number(itemId)
    })

    const {image , price, description} = items

    const {addItem} = useCart()

  return (
    <div className='singleProduct px-5 pb-5 mt-5'>
       <div className="singleImageContainer">
           <img src={image} />
       </div>

        <div>
          <div className="fw-bold fs-3">{description}</div>
          
          <h2 className="fw-bold mb-4">
            <span>$</span>
            <span>{price}</span>
          </h2>

          <div>
            <button className="addToCartBtn p-2 fw-bold" onClick={()=> addItem(items)}>Add To Cart</button>
          </div>

          <div className="my-4">
            <div className="fw-bold fs-3">Save This Product For Later</div>
            <button className="favoriteBtn p-2">
              <span className="me-2"><i class="fa-solid fa-heart"></i></span>
              <span>Favorite</span>
            </button>
          </div>

          <div className="mb-4">
            <div className="fw-bold fs-5 mb-2">Share this Product with Your Friend</div>
            <div className="shareIcons fw-bold fs-2">
                <div><i class="fa-brands fa-facebook"></i></div>
                <div><i class="fa-brands fa-instagram"></i></div>
                <div><i class="fa-brands fa-twitter"></i></div>
            </div>
          </div>

          <Link to={`/shop`}>
            <button className="backBtn p-2">
              <span><i class="fa-solid fa-arrow-left"></i></span>
              <span> Back to Shop</span>
              </button>
          </Link>
        </div>
        
    </div>
  )
}

export default SingleProduct
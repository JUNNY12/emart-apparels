import "./pageNotFound.css"
import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className='pageNotFound'>
        <h1>404 ERROR</h1>
        <h2>PAGE NOT FOUND</h2>

        <Link to={`/`}>
          <button className="backHome p-2 mt-5">
            <span><i class="fa-solid fa-arrow-left"></i></span>
            <span> Back Home</span>
            </button>
        </Link>
    </div>
  )
}

export default PageNotFound
import placeholder from "../../assets/placeholder.png"
import "./profile.css"

const Profile = () => {
  return (
    <div className="profileContainer">
        <div className="wrapProfile">

           <div className="me-2 hideText ">
                <span className="me-2 ">Profile</span>
                <span className=""><i class="fa-solid fa-caret-down"></i></span>
            </div>

            <div className="me-2">
                <i class="fa-solid fa-user"></i>
            </div>

          
        </div>


        {/* <div className="profileBox">
            <div>View Profile</div>
            <div>Sign Out</div>
        </div> */}
    </div>
  )
}

export default Profile
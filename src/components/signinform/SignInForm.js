import "./signinform.css"
import { Link } from "react-router-dom"


const SignInForm = () => {
    return (
        <div className="signInForm">

            <div className="text-center fs-1 fw-bold">SIGN IN</div>
            <form>

            <div>
                <label htmlFor="username">UserName</label> <br />
                <input type="text" id="username" required class="inputs"/>
            </div>

            <div>
                <label htmlFor='password'>Password</label> <br />
                <input type="password" id="password" required class="inputs" />
            </div>

            <div className="text-center">
                <span className="me-2 fst-italic fw-bold fs-6">Dont have an Account Yet?</span>
                <span className="fw-bold fs-4">
                    <Link to={`/signUp`} className="signUpLink">Sign Up</Link>
                </span>
            </div>



            </form>
        </div>
    )
}


export default SignInForm
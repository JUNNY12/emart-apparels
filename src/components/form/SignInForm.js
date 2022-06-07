import "./signinform.css"
import { Link, useNavigate} from "react-router-dom"
import { useState } from "react"








const SignInForm = ({setUser}) => {

    const [signInData, setSignInData] = useState(
        {
            signInUsername:"",
            signInPassword:"",
        }
    )

    const navigate = useNavigate()

    const [errorMessage, setErrorMessage] = useState("")

    const handleSignInDataChange = (event) => {
       event.preventDefault()
       const {name, value} = event.target

       setSignInData(prevData => {
           return {
               ...prevData,
               [name]:value
           }
       })
    }

    const handleSignInSubmit = (event) => {
        event.preventDefault()

        let details = JSON.parse(localStorage.getItem("userDetails"))
        const {username, password} = details;

        setUser({username:username, password:password})

        if(signInData.username !== username && signInData.signInPassword !== password)
        {
            setErrorMessage("Username or Password is not Correct!!!")
        }
        else{
            navigate("/shop")
        }

    };


    return (
        <div className="signInForm">
            <div className="text-center error fw-bold fst-italic">{errorMessage}</div>

            <div className="text-center fs-1 fw-bold">SIGN IN</div>
            <form onSubmit={handleSignInSubmit}>

            <div>
                <label htmlFor="username">UserName</label> <br />
                <input
                 type="text"
                 id="username" 
                 required 
                 class="inputs"
                 name="signInUsername"
                 value={signInData.signInUsername}
                 onChange={handleSignInDataChange}
                 />
            </div>

            <div>
                <label htmlFor='password'>Password</label> <br />
                <input 
                type="password"
                id="password" 
                required 
                class="inputs"
                name="signInPassword"
                value={signInData.signInPassword}
                onChange={handleSignInDataChange}
                />
            </div>

            <button class="signIn">Sign In</button>

            <div className="text-center">
                <span className="me-2 fst-italic fw-bold fs-6">Don't have an Account Yet?</span>
                <span className="fw-bold fs-4">
                    <Link to={`/signUp`} className="signUpLink">Sign Up</Link>
                </span>
            </div>



            </form>
        </div>
    )
}


export default SignInForm

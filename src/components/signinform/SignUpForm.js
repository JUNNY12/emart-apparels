import "./signUpForm.css"
import { Link } from "react-router-dom"




const SignUpForm = () => {
  return (
    <div className='signUpForm'>

        <div className='text-center fw-bold fs-1'>SIGN UP</div>

        <form action="">

            <div>
                <label htmlFor="username">UserName</label> <br />
                <input type="text" id="username" required class="inputs"/>
            </div>

            <div class="groupedInputs">

                <div>
                    <label htmlFor="firstName">First Name</label> <br />
                    <input type="text" id="firstName" required class="inputs"/>
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label> <br />
                    <input type="text" id="lastName" required class="inputs" />
                </div>

            </div>

            <div class="groupedInputs">

                <div>
                    <label htmlFor="phoneNumber">Phone Number</label> <br />
                    <input type="number" id="phoneNumber" required class="inputs" />
                </div>

                <div>
                    <label htmlFor="email">Email</label> <br />
                    <input type="email" id="email" required class="inputs" />
                </div>

            </div>

            <div class="groupedInputs">

                <div>
                    <label htmlFor='password'>Password</label> <br />
                    <input type="password" id="password" required class="inputs" />
                </div>

                <div>
                    <label htmlFor='confirmPassword'>Confirm Password</label> <br />
                    <input type="email" id="confrimPassword" required class="inputs" />
                </div>

            </div>

            <div className="text-center mb-3">
                <span className="me-2 fst-italic fw-bold fs-6">Already a memeber?</span>

                <span className="fw-bold fs-4">
                    <Link to={`/signIn`} className="signInLink">
                        Sign In
                    </Link>
                </span>
            </div>

            <button class="signUp">Sign Up</button>
        </form>

        
       
    </div>
  )
}

export default SignUpForm
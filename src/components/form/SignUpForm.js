import "./signUpForm.css"
import { Link } from "react-router-dom"
import { useState } from "react"






const SignUpForm = () => {

    const [successMessage, setSuccessMessage] = useState("")
    const [passwordError, setPasswordError] =useState("")

    const[formData, setFormData] = useState(
        {
            username:"",
            firstname:"",
            lastname:"",
            phonenumber:"",
            email:"",
            password:"",
            confirmpassword:""
         }
    )

    const handleChange= (event) => {
        event.preventDefault();
        const {name, value} = event.target;

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]:value
            }
        })
        
    }



    const handleSubmit = (event) => {
        event.preventDefault()
        if(formData.password !== formData.confirmpassword){
            setPasswordError("Password Does Not Match")
        }
        else{
            setSuccessMessage("Your Signing Up was Sucessful. You can Proceed To Sign In")
            setPasswordError("")
        }

      
      
        setFormData({
            username:"",
            firstname:"",
            lastname:"",
            phonenumber:"",
            email:"",
            password:"",
            confirmpassword:""
        })
        localStorage.setItem("userDetails", JSON.stringify({...formData}))
    
    }

  return (
    <div className='signUpForm'>
        <div className='text-center fw-bold fs-1'>SIGN UP</div>

        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor="username">UserName</label> <br />
                <input 
                type="text"
                 id="username" 
                 name="username" 
                 required 
                 class="inputs"
                 value={formData.username}
                 onChange={handleChange}
                 />
            </div>

            <div class="groupedInputs">

                <div>
                    <label htmlFor="firstName">First Name</label> <br />
                    <input 
                    type="text" 
                    id="firstName" 
                    name="firstname" 
                    required
                    class="inputs"
                    value={formData.firstname}
                    onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label> <br />
                    <input 
                    type="text"
                    id="lastName" 
                    name="lastname" 
                    required
                    class="inputs" 
                    value={formData.lastname}
                    onChange={handleChange}
                    />
                </div>

            </div>

            <div class="groupedInputs">

                <div>
                    <label htmlFor="phoneNumber">Phone Number</label> <br />
                    <input
                     type="number"
                     id="phoneNumber"
                     name="phonenumber"
                     required 
                     class="inputs" 
                     value={formData.phonenumber}
                     onChange={handleChange}
                     />
                </div>

                <div>
                    <label htmlFor="email">Email</label> <br />
                    <input 
                    type="email"
                    id="email" 
                    name="email"
                    required 
                    class="inputs"
                    value={formData.email}
                    onChange={handleChange}
                    />
                </div>

            </div>

            <div class="groupedInputs">

                <div>
                    <label htmlFor='password'>Password</label> <br />
                    <input 
                    type="password"
                    name="password" 
                    id="password"
                    required 
                    class="inputs" 
                    value={formData.password}
                    onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor='confirmPassword'>Confirm Password</label> <br />
                    <input 
                    type="password"
                    name="confirmpassword"
                    id="confrimPassword"
                    required 
                    class="inputs" 
                    value={formData.confirmpassword}
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-2 passwordError">{passwordError}</div>

            </div>

            <button class="signUp mb-3">Sign Up</button>

            <div className="text-center mb-3">
                <span className="me-2 fst-italic fw-bold fs-6">Already a memeber?</span>

                <span className="fw-bold fs-6">
                    <Link to={`/signIn`} className="signInLink">
                        Sign In
                    </Link>
                </span>
            </div>

            <div className="text-center fw-bold fst-italic success mt-2">{successMessage}</div>
        </form>

        
       
    </div>
  )
}

export default SignUpForm
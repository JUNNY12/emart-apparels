import { Form } from "react-bootstrap";
import "./signinform.css"


const SignInForm = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" className="signInput" />
                </Form.Group>

                <button  type="submit" className="signInBtn my-3 fw-bold">
                   Get Sign-In Link
                </button>
            </Form>

            <div>
                <p>
                  If you don't already have an account, one will be created for you.
                </p>
            </div>
        </div>
    )
}


export default SignInForm
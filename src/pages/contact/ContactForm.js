import { Form, FloatingLabel } from "react-bootstrap";



const ContactForm = () => {
    return (
        <div className="mt-3">
            <div>
                <h1 className="mb-4">Get In Touch With US</h1>
            </div>

            <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Your First Name" className="formInput"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Last Name </Form.Label>
                    <Form.Control type="text" placeholder="Your Last Name" className="formInput" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Your Email" className="formInput" />
                </Form.Group>

         
                <FloatingLabel controlId="floatingInput" label="Message" className="mb-3">
                    <Form.Control type="text" className="formInput" />
                </FloatingLabel>
                
                <button className="submitContactBtn" type="submit">
                    Submit
                </button>
            </Form>
            </div>
        </div>
    )
}

export default ContactForm
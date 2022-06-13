import { Form, FloatingLabel } from "react-bootstrap";
import { useState } from "react";



const ContactForm = () => {

    const[contactFormData, setContactFormData] = useState(
        {
        contactfirstname:"",
        contactlastname:"",
        contactemail:"",
        contactmessage:""
        }
    )

    const[submitMessage, setSubmitMessage] = useState("")
    const[errorSubmit, setErrorSubmit] = useState("")

    const handleContactFormChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target

        setContactFormData(prevContactData => {
            return {
                ...prevContactData,
                [name]:value
            }
        })
    }

    const handleContactFormSubmit = (event) => {
        event.preventDefault()

        if(
           contactFormData.contactfirstname ==="" 
           && contactFormData.contactlastname ===""
           && contactFormData.contactemail==="" 
           && contactFormData.contactmessage === "")
           {
            setErrorSubmit("All input field must be filled!!!")
        }

        else{
            setSubmitMessage("Your Message Has been Sent. We will contact you Shortly. Thank You")
        }

        setContactFormData( 
             {
            contactfirstname:"",
            contactlastname:"",
            contactemail:"",
            contactmessage:""
            }
            )
            
        console.log(contactFormData)
    }


    return (
        <div className="mt-3">
            <div>
                <h1 className="mb-4 fs-3 text-center">Get In Touch With US</h1>
            </div>

            <div>
            <Form onSubmit={handleContactFormSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                    type="text"
                    placeholder="Your First Name" 
                    className="formInput"
                    name="contactfirstname"
                    value={contactFormData.contactfirstname}
                    onChange={handleContactFormChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Last Name </Form.Label>
                    <Form.Control
                    type="text" 
                    placeholder="Your Last Name" 
                    className="formInput"
                    name="contactlastname"
                    value={contactFormData.contactlastname}
                    onChange={handleContactFormChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                     type="email" 
                     placeholder="Your Email"
                     className="formInput" 
                     name="contactemail"
                     onChange={handleContactFormChange}
                     value={contactFormData.contactemail}
                      />
                </Form.Group>

         
                <FloatingLabel controlId="floatingInput" label="Message" className="mb-3">
                    <Form.Control 
                    type="text"
                    className="formInput" 
                    name="contactmessage"
                    value={contactFormData.contactmessage}
                    onChange={handleContactFormChange}
                    />
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
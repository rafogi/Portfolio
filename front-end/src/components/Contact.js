import React, { useState } from 'react'
import emailjs from "emailjs-com";
import "./Contact.css";
import Modal from './Modal'
import { Spring } from 'react-spring/renderprops';

function Contact() {
  const [isOpen, setIsOpen] = useState(false)
  function sendEmail(e) {
    e.preventDefault();
emailjs.sendForm(process.env.REACT_APP_SERVICE, 'template_swezulm', e.target, process.env.REACT_APP_EMAIL)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    setIsOpen(true)
    e.target.reset()
}

  return(
    <Spring 
    from={{opacity:0, marginTop:-500}}
    to={{opacity:1,marginTop:-0}}
    > 
    {props => (
    <div style={props} className="cont-page">
      <h1 className="cont-title">Contact Me</h1>

        <div className="Contact" >
        <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name" required={true}/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="email" required={true}/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" required={true}/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <button type="submit" className="btn btn-info">Send Message</button>
                    </div>
                    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                      Thank you! I will get back to you Soon!
                    </Modal>
                </div>
            </form>
        </div>

    </div>
        )}
        </Spring> 
)
}

export default Contact;
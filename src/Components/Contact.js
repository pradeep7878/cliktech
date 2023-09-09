import React from 'react';
import '../Css/Contact.css';
import contactus from '../Images/contactus.webp';

const Contact = () => {
    return(
        <>
<section id="contact-section">
    <div className="container-fluid">
        <div className="contact reveal">
            <h1>Contact Us</h1>
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                    <img src={contactus} alt="contact" className="img-fluid" />
                    
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <form>
                        <input className="form-control" type="text" placeholder="Enter Your Name" />
                        <input className="form-control" type="email" placeholder="Enter your Email" />
                        <textarea rows="3" placeholder="Enter Your Message" className="form-control"></textarea>
                        <button className="btn btn-success">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>


        </>
    )
}

export default Contact;
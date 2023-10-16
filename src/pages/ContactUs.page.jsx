import React from 'react';
import contactImageSrc from "../assets/images/contact.png";

const ContactUsPage = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 bg-primary text-warning p-2 rounded">
                    <h3>Contact Us</h3>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                   <div className="mt-5">
                       <h3 className="text-primary">How to contact us</h3>
                       <h5>+98 912 555 5555</h5>
                       <h5>+21 22 22 22 22</h5>
                       <h5>test@cryptoweb.com</h5>
                   </div>
                    <div className="mt-3">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="button" className="btn btn-outline-warning">Submit</button>
                    </div>
                </div>
                <div className="col-md-6 mt-5 text-center">
                    <img src={contactImageSrc} alt="about" className="img-fluid about-img" />
                </div>
            </div>

        </div>
    );
};

export default ContactUsPage;
import React from 'react';
import aboutImg from '../assets/images/about.png';

const AboutUsPage = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 bg-primary text-warning p-2 rounded">
                    <h3>About Us</h3>
                </div>
            </div>
        <div className="row align-items-center">
            <div className="col-md-6">
                <p className="text-start ">Lorem Ipsum is a placeholder text commonly used in the design and typesetting industry. It is used to fill the space in a document or a webpage before the actual content is available. The text is derived from Latin literature and consists of nonsensical words and phrases.
                Lorem Ipsum is a placeholder text commonly used in the design and typesetting industry. It is used to fill the space in a document or a webpage before the actual content is available. The text is derived from Latin literature and consists of nonsensical words and phrases.
                    Lorem Ipsum is a placeholder text commonly used in the design and typesetting industry. It is used to fill the space in a document or a webpage before the actual content is available. The text is derived from Latin literature and consists of nonsensical words and phrases.</p>
            </div>
            <div className="col-md-6 text-center">
                <img src={aboutImg} alt="about" className="img-fluid about-img" />
            </div>
        </div>

        </div>
    );
};

export default AboutUsPage;
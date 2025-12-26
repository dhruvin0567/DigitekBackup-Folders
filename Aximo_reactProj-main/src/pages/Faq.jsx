import React, { useState } from 'react';
import Header from './Header';

// const Accordion = () => {
//     const [activeIndex, setActiveIndex] = useState(null);

//     const handleToggle = (index) => {
//         setActiveIndex(activeIndex === index ? null : index);
//     };



function Faq({ multiple = false }) {




    const [activeIndex, setActiveIndex] = useState(0);  // Set initial activeIndex to 0

    const handleToggle = (index) => {
        if (multiple) {
            setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
        } else {
            setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
        }
    };





    return (
        <div>

            <div className="aximo-preloader-wrap">
                <div className="aximo-preloader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <Header />


            <div className="aximo-breadcrumb">
                <div className="container">
                    <h1 className="post__title">FAQs</h1>
                    <nav className="breadcrumbs">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li aria-current="page"> FAQs</li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* End breadcrumb */}

            <div className="section aximo-section-padding3">
                <div className="container">
                    <div className="aximo-section-title center">
                        <h2>
                            <span className="aximo-title-animation">
                                These FAQs help
                                <span className="aximo-title-icon">
                                    <img src="assets/images/v1/star2.png" alt="" />
                                </span>
                            </span>
                            clients learn about us
                        </h2>
                    </div>
                    <div className="aximo-accordion-wrap wow fadeInUpX" data-wow-delay="0.1s" id="aximo-accordion">
                        <div className={`aximo-accordion-item ${activeIndex === 0 ? 'open' : ''}`}>
                            <div className="aximo-accordion-header" onClick={() => handleToggle(0)}>
                                <h3>What services does your design agency offer?</h3>
                            </div>
                            <div className={`aximo-accordion-body ${activeIndex === 0 ? 'show' : ''}`}>
                                <p>Clients often seek to understand the range of design services an agency provides, such as graphic design, web design, branding, and more. We offer a wide range of design services, including graphic design, web design, branding, UI/UX design, and more.</p>
                            </div>
                        </div>

                        <div className={`aximo-accordion-item ${activeIndex === 1 ? 'open' : ''}`}>
                            <div className="aximo-accordion-header" onClick={() => handleToggle(1)}>
                                <h3>What industries or types of clients do you typically work with?</h3>
                            </div>
                            <div className={`aximo-accordion-body ${activeIndex === 1 ? 'show' : ''}`}>
                                <p>This question helps potential clients determine if the agency has experience in their specific industry or with similar projects. Our agency stands out due to our creative expertise, attention to detail, and commitment to delivering designs that not only look great.</p>
                            </div>
                        </div>

                        <div className={`aximo-accordion-item ${activeIndex === 2 ? 'open' : ''}`}>
                            <div className="aximo-accordion-header" onClick={() => handleToggle(2)}>
                                <h3>Can you provide examples of your previous work/portfolio?</h3>
                            </div>
                            <div className={`aximo-accordion-body ${activeIndex === 2 ? 'show' : ''}`}>
                                <p>Yes, we're proud to showcase a portfolio of our previous projects. You can find examples of our work on our website or request a tailored portfolio relevant to your needs. Clients often want to see examples of the agency's previous projects to assess the quality and style.</p>
                            </div>
                        </div>

                        <div className={`aximo-accordion-item ${activeIndex === 3 ? 'open' : ''}`}>
                            <div className="aximo-accordion-header" onClick={() => handleToggle(3)}>
                                <h3>What is your design process like?</h3>
                            </div>
                            <div className={`aximo-accordion-body ${activeIndex === 3 ? 'show' : ''}`}>
                                <p>Explaining the design agency's process from initial concept to final delivery helps clients understand what to expect.</p>
                            </div>
                        </div>

                        <div className={`aximo-accordion-item ${activeIndex === 4 ? 'open' : ''}`}>
                            <div className="aximo-accordion-header" onClick={() => handleToggle(4)}>
                                <h3>How do you handle revisions and feedback during a project?</h3>
                            </div>
                            <div className={`aximo-accordion-body ${activeIndex === 4 ? 'show' : ''}`}>
                                <p>Clients are interested in knowing how the agency manages feedback and makes revisions to ensure the final design meets their expectations. We value client feedback and work closely with you to make sure you're happy with the final design.</p>
                            </div>
                        </div>

                        <div className={`aximo-accordion-item ${activeIndex === 5 ? 'open' : ''}`}>
                            <div className="aximo-accordion-header" onClick={() => handleToggle(5)}>
                                <h3>Do you offer ongoing support after project completion?</h3>
                            </div>
                            <div className={`aximo-accordion-body ${activeIndex === 5 ? 'show' : ''}`}>
                                <p>Yes, we offer ongoing support, maintenance, and updates as needed, ensuring that your design assets and projects remain up to date and functional. Some clients may have urgent projects, so it's important to communicate if the agency can accommodate rush orders.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End section */}

            {/* Footer  */}
            <footer className="aximo-footer-section dark-bg">
                <div className="container">
                    <div className="aximo-footer-top aximo-section-padding">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="aximo-default-content light position-relative">
                                    <h2>
                                        <span className="aximo-title-animation">
                                            Let's start a
                                            <span className="aximo-title-icon">
                                                <img src="assets/images/v1/star2.png" alt="" />
                                            </span>
                                        </span>
                                        project together
                                    </h2>
                                    <p>We work closely with our clients to understand their objectives, target audience, and unique needs. We use our creative skills to translate these requirements and practical design solutions.</p>
                                    <div className="aximo-info-wrap">
                                        <div className="aximo-info">
                                            <ul>
                                                <li>Give us a call:</li>
                                                <li><a href=" ">(123) 456-7890</a></li>
                                            </ul>
                                        </div>
                                        <div className="aximo-info">
                                            <ul>
                                                <li>Send us an email:</li>
                                                <li><a href=" ">info@mthemeus.com</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="aximo-social-icon social-large">
                                        <ul>
                                            <li>
                                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                                    <i className="icon-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                                                    <i className="icon-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                                    <i className="icon-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                                    <i className="icon-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="aximo-hero-shape aximo-footer-shape">
                                        <img src="assets/images/v1/shape1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="aximo-form-wrap">
                                    <h4>Send us a message</h4>
                                    <form action="#">
                                        <div className="aximo-form-field">
                                            <input type="text" placeholder="Your name" />
                                        </div>
                                        <div className="aximo-form-field">
                                            <input type="email" placeholder="Your email address" />
                                        </div>
                                        <div className="aximo-form-field">
                                            <input type="text" placeholder="+088-234-6849" />
                                        </div>
                                        <div className="aximo-form-field">
                                            <textarea name="textarea" placeholder="Write your message here..." defaultValue={""} />
                                        </div>
                                        <button id="aximo-submit-btn" type="submit">Send message <span><img src="assets/images/icon/arrow-right3.svg" alt="" /></span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aximo-footer-bottom">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="aximo-footer-logo">
                                    <a href='/'>
                                        <img src="assets/images/logo/logo-white.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="aximo-copywright one">
                                    <p> © Copyright 2024, All Rights Reserved by Mthemeus</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>




        </div>
    )
}

export default Faq
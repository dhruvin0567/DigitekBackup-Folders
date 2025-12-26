import React from 'react'
import Header from './Header'



function Contact() {
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
                    <h1 className="post__title">Contact Us</h1>
                    <nav className="breadcrumbs">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li aria-current="page"> Contact Us</li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* End breadcrumb */}

            <div className="section aximo-section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="aximo-section-title">
                                <h2>
                                    <span className="aximo-title-animation">
                                        Contact us for a
                                        <span className="aximo-title-icon">
                                            <img src="assets/images/v1/star2.png" alt="" />
                                        </span>
                                    </span>
                                    personal experience
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 order-lg-2">
                            <div className="aximo-contact-thumb wow fadeInRight" data-wow-delay="0.1s">
                                <img src="assets/images/contact/contact-thumb.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="aximo-main-form">
                                <form action="#">
                                    <div className="aximo-main-field">
                                        <label>Your name</label>
                                        <input type="text" />
                                    </div>
                                    <div className="aximo-main-field">
                                        <label>Email Address</label>
                                        <input type="email" />
                                    </div>
                                    <div className="aximo-main-field">
                                        <label>Phone No</label>
                                        <input type="text" />
                                    </div>
                                    <div className="aximo-main-field">
                                        <label>Write your message here...</label>
                                        <textarea name="textarea" defaultValue={""} />
                                    </div>
                                    <button id="aximo-main-btn" type="submit">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End section */}

            <div className="aximo-contact-info-section">
                <div className="container">
                    <div className="aximo-contact-info-title">
                        <h2>
                            <span className="aximo-title-animation">
                                Contact Information
                                <span className="aximo-title-icon">
                                    <img src="assets/images/v1/star2.png" alt="" />
                                </span>
                            </span>
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <a href>
                                <div className="aximo-contact-info-box wow fadeInUpX" data-wow-delay="0.1s">
                                    <div className="aximo-contact-info-icon">
                                        <img src="assets/images/icon/call2.svg" alt="" />
                                    </div>
                                    <div className="aximo-contact-info-data">
                                        <div className="aximo-info">
                                            <ul>
                                                <li><a href=" "><span>Call us</span></a></li>
                                                <li><a href=" ">+088-234-6532-789</a></li>
                                                <li><a href=" ">+088-456-3217-005</a></li>
                                            </ul>
                                        </div>


                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <a href>
                                <div className="aximo-contact-info-box wow fadeInUpX" data-wow-delay="0.2s">
                                    <div className="aximo-contact-info-icon">
                                        <img src="assets/images/icon/email.svg" alt="" />
                                    </div>
                                    <div className="aximo-contact-info-data">
                                        <div className="aximo-info">
                                            <ul>
                                                <li><a href=" "><span>Call us</span></a></li>
                                                <li><a href=" ">example@gmail.com</a></li>
                                                <li><a href=" ">example@gmail.com</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="aximo-contact-info-box wow fadeInUpX" data-wow-delay="0.3s">
                                <div className="aximo-contact-info-icon">
                                    <img src="assets/images/icon/map.svg" alt="" />
                                </div>
                                <div className="aximo-contact-info-data">
                                    <div className="aximo-info">
                                        <ul>
                                            <li><a href=" "><span>Office address</span></a></li>
                                            <li><a href=" ">4132 Thornridge City, New York.</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end section */}

            <div className="section">
                <div className="container">
                    <div className="aximo-map-wrap">
                        <div id="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48460.451378723934!2d-74.02306991895321!3d40.612716789864926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2451e05beaac7%3A0x709cb9e96aeb0eab!2sFugu%20Sushi!5e0!3m2!1sen!2sin!4v1738932036232!5m2!1sen!2sin"
                                width="100%"
                                height="580px"
                                style={{ borderRadius: "25px" }}
                                title="Google Maps - Fugu Sushi Location"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* end section */}

            <div className="section aximo-section-padding">
                <div className="container">
                    <div className="aximo-section-title center">
                        <h2>
                            These FAQs help
                            <span className="aximo-title-animation">
                                clients learn about us
                                <span className="aximo-title-icon">
                                    <img src="assets/images/v1/star2.png" alt="" />
                                </span>
                            </span>
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="aximo-accordion-normal-wrap responsive-margin">
                                <div className="aximo-accordion-normal-item">
                                    <div className="aximo-accordion-normal-icon">
                                        <img src="assets/images/icon/question.svg" alt="" />
                                    </div>
                                    <div className="aximo-accordion-normal-data">
                                        <h3>What services does agency offer?</h3>
                                        <p>Clients often seek to understand the range of design services an agency provides, such as graphic design, web design, branding.</p>
                                    </div>
                                </div>
                                <div className="aximo-accordion-normal-item">
                                    <div className="aximo-accordion-normal-icon">
                                        <img src="assets/images/icon/question.svg" alt="" />
                                    </div>
                                    <div className="aximo-accordion-normal-data">
                                        <h3>What is your design process like?</h3>
                                        <p>Explaining the design agency's process from initial concept to final delivery helps clients understand what to expect.</p>
                                    </div>
                                </div>
                                <div className="aximo-accordion-normal-item">
                                    <div className="aximo-accordion-normal-icon">
                                        <img src="assets/images/icon/question.svg" alt="" />
                                    </div>
                                    <div className="aximo-accordion-normal-data">
                                        <h3>How much does design work cost?</h3>
                                        <p>The cost of our design services varies depending on the scope of the project. We provide customized quotes after discussing requirements.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-accordion-normal-wrap">
                                <div className="aximo-accordion-normal-item">
                                    <div className="aximo-accordion-normal-icon">
                                        <img src="assets/images/icon/question.svg" alt="" />
                                    </div>
                                    <div className="aximo-accordion-normal-data">
                                        <h3>What's your design process like?</h3>
                                        <p>Our design process typically involves discovery, concept development, design, revisions based on feedback, and finalization.</p>
                                    </div>
                                </div>
                                <div className="aximo-accordion-normal-item">
                                    <div className="aximo-accordion-normal-icon">
                                        <img src="assets/images/icon/question.svg" alt="" />
                                    </div>
                                    <div className="aximo-accordion-normal-data">
                                        <h3>How do you handle user feedback?</h3>
                                        <p>We value client feedback and work closely with you to make sure user happy with the final design. We offer a specific number of revisions.</p>
                                    </div>
                                </div>
                                <div className="aximo-accordion-normal-item">
                                    <div className="aximo-accordion-normal-icon">
                                        <img src="assets/images/icon/question.svg" alt="" />
                                    </div>
                                    <div className="aximo-accordion-normal-data">
                                        <h3>Can we see samples of your work?</h3>
                                        <p>Yes, we're proud to showcase a portfolio of our previous projects. You can find examples of our work on our website or view our portfolio.</p>
                                    </div>
                                </div>
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

export default Contact
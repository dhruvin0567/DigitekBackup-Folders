import React from 'react'
import Header from './Header'

function Error404() {
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

            <div className="section">
                <div className="container">
                    <div className="aximo-errors-wrap">
                        <div className="aximo-errors-thumb">
                            <img src="assets/images/about/404.png" alt="" />
                        </div>
                        <div className="aximo-errors-title">
                            <h2>
                                We can’t find the page
                                <span className="aximo-title-animation">
                                    you are looking for
                                    <span className="aximo-title-icon">
                                        <img src="assets/images/v1/star2.png" alt="" />
                                    </span>
                                </span>
                            </h2>
                        </div>
                        <a className="aximo-errors-btn wow fadeInUpX" data-wow-delay="0.1s" href="/">Return to homepage <span><img src="assets/images/icon/arrow-right.svg" alt="" /></span></a>
                    </div>
                </div>
            </div>
            {/* End section */}

            <div>
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

        </div>
    )
}

export default Error404
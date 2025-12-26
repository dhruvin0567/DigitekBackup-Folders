import React from 'react'
import Header from './Header'

function Singleportfolio() {
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
                    <h1 className="post__title">Portfolio Details</h1>
                    <nav className="breadcrumbs">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li aria-current="page"> Portfolio Details</li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* End breadcrumb */}


            <div className="aximo-project-single-section">
                <div className="container">
                    <div className="aximo-project-single-thumb wow fadeInUpX" data-wow-delay="0.1s">
                        <img src="assets/images/portfolio/p_single.png" alt="" />
                    </div>
                    <div className="aximo-project-info-wrap">
                        <div className="aximo-project-info">
                            <h3>Client:</h3>
                            <p>Alfado Company,UK</p>
                        </div>
                        <div className="aximo-project-info">
                            <h3>Date:</h3>
                            <p>June</p>
                        </div>
                        <div className="aximo-project-info">
                            <h3>Duration:</h3>
                            <p>Two Months</p>
                        </div>
                        <div className="aximo-project-info">
                            <h3>Cost:</h3>
                            <p>50k USD</p>
                        </div>
                    </div>
                    <div className="aximo-project-single-wrap">
                        <div className="row">
                            <div className="col-lg-4 order-lg-2">
                                <div className="aximo-project-single-thumb2 wow fadeInRight" data-wow-delay="0.1s">
                                    <img src="assets/images/portfolio/p_single2.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="aximo-default-content m-right-gap">
                                    <h2>
                                        How we initiate and
                                        <span className="aximo-title-animation">
                                            resolve the project
                                            <span className="aximo-title-icon">
                                                <img src="assets/images/v1/star2.png" alt="" />
                                            </span>
                                        </span>
                                    </h2>
                                    <p>The project began when a leading technology identified a market need for an innovative and energy-efficient smart home thermostat.</p>
                                    <div className="aximo-resolve-project-wrap">
                                        <div className="aximo-resolve-project-item">
                                            <h3>1. Concept Development:</h3>
                                            <p>Based on the market research findings, the design team began developing conceptual designs for the smart thermostat. They brainstormed ideas, created mood boards, and explored various design directions.</p>
                                        </div>
                                        <div className="aximo-resolve-project-item">
                                            <h3>2. Manufacturing and Production:</h3>
                                            <p>Once the design was finalized, the project transitioned to the manufacturing phase. Materials, suppliers, and production processes were carefully selected to ensure quality and cost-effectiveness.</p>
                                        </div>
                                        <div className="aximo-resolve-project-item">
                                            <h3>3. Success and Impact:</h3>
                                            <p>The smart home thermostat quickly gained popularity and was well-received in the market. The project was a success, benefiting both the company and the environment.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end section */}


            <div className="section aximo-project-page aximo-section-padding">
                <div className="container">
                    <div className="aximo-section-title center">
                        <h2>
                            Have a wide range of
                            <span className="aximo-title-animation">
                                creative projects
                                <span className="aximo-title-icon">
                                    <img src="assets/images/v1/star2.png" alt="" />
                                </span>
                            </span>
                        </h2>
                    </div>
                </div>
                <div className="swiper aximo-project-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="aximo-project-thumb">
                                <img src="assets/images/portfolio/p_1.png" alt="" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <a href=" ">
                                            <h3>Product Design</h3>
                                        </a>
                                        <p>Developing the look and feel of physical products, aesthetics, and functionality.</p>
                                    </div>
                                    <a className="aximo-project-icon" href=" ">
                                        <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26" stroke="#FDFDE1" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-project-thumb">
                                <img src="assets/images/portfolio/p_2.png" alt="" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <a href=" ">
                                            <h3>Logo and Branding</h3>
                                        </a>
                                        <p>Creating or refreshing a company's logo and developing a cohesive visual identity.</p>
                                    </div>
                                    <a className="aximo-project-icon" href=" ">
                                        <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26" stroke="#FDFDE1" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-project-thumb">
                                <img src="assets/images/portfolio/p_3.png" alt="" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <a href=" ">
                                            <h3>App UI/UX Design</h3>
                                        </a>
                                        <p>Designing the UI/UXe for mobile apps and web applications to ensure usability &amp; engagement.</p>
                                    </div>
                                    <a className="aximo-project-icon" href=" ">
                                        <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26" stroke="#FDFDE1" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-project-thumb">
                                <img src="assets/images/portfolio/p_4.png" alt="" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <a href=" ">
                                            <h3>Packaging Design</h3>
                                        </a>
                                        <p>Creating packaging solutions for products that not only protect attract customers on store.</p>
                                    </div>
                                    <a className="aximo-project-icon" href=" ">
                                        <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26" stroke="#FDFDE1" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-project-thumb">
                                <img src="assets/images/portfolio/p_5.png" alt="" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <a href=" ">
                                            <h3>Environmental Design</h3>
                                        </a>
                                        <p>Designing trade show booths, exhibition spaces, and immersive installations for events and conferences.</p>
                                    </div>
                                    <a className="aximo-project-icon" href=" ">
                                        <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26" stroke="#FDFDE1" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-project-thumb">
                                <img src="assets/images/portfolio/p_6.png" alt="" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <a href=" ">
                                            <h3>Environmental Design</h3>
                                        </a>
                                        <p>Designing trade show booths, exhibition spaces, and immersive installations for events and conferences.</p>
                                    </div>
                                    <a className="aximo-project-icon" href=" ">
                                        <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26" stroke="#FDFDE1" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
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

export default Singleportfolio
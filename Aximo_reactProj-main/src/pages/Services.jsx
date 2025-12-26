import React, { useState } from 'react'
import Header from './Header';

function Services() {




    const [openIndex, setOpenIndex] = useState(0);

    const handleClick = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index)); // Toggle open/close
    };




    const getStyles = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 481 && screenWidth <= 1024) {
            return {
                letterSpacing: '0px', // You can use any px or em value here
            };
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
                    <h1 className="post__title">Our Services</h1>
                    <nav className="breadcrumbs">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li aria-current="page"> Our Services</li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* End breadcrumb */}

            <div className="section aximo-section-padding3">
                <div className="container">
                    <div className="aximo-section-title center">
                        <h2>
                            We provide effective
                            <span className="aximo-title-animation">
                                design solutions
                                <span className="aximo-title-icon">
                                    <img src="assets/images/v1/star2.png" alt="" />
                                </span>
                            </span>
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0s">
                                <div className="aximo-iconbox-icon">
                                    <i className="icon-design-tools" />
                                </div>
                                <div className="aximo-iconbox-data">
                                    <h3>UI/UX Design</h3>
                                    <p>Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products &amp; app.</p>
                                    <a className="aximo-icon" href="single-/Services"><img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.1s">
                                <div className="aximo-iconbox-icon">
                                    <i className="icon-branding" />
                                </div>
                                <div className="aximo-iconbox-data">
                                    <h3>Graphic Design</h3>
                                    <p>Creating visual elements such as logos, branding materials, page layout techniques, brochures, &amp; other marketing collateral.</p>
                                    <a className="aximo-icon" href="single-/Services"><img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.2s">
                                <div className="aximo-iconbox-icon">
                                    <i className="icon-web" />
                                </div>
                                <div className="aximo-iconbox-data">
                                    <h3>Web Design</h3>
                                    <p>Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website.</p>
                                    <a className="aximo-icon" href="single-/Services"><img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.3s">
                                <div className="aximo-iconbox-icon">
                                    <i className="icon-design-thinking" />
                                </div>
                                <div className="aximo-iconbox-data">
                                    <h3>Motion Graphics</h3>
                                    <p>Creating animate graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.</p>
                                    <a className="aximo-icon" href="single-/Services"><img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.4s">
                                <div className="aximo-iconbox-icon">
                                    <i className="icon-layers" />
                                </div>
                                <div className="aximo-iconbox-data">
                                    <h3>Packaging Design</h3>
                                    <p>Creating packaging solutions for products that not only protect them but also attract customers on store shelves.</p>
                                    <a className="aximo-icon" href="single-/Services"><img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.5s">
                                <div className="aximo-iconbox-icon">
                                    <i className="icon-rating-stars-1" />
                                </div>
                                <div className="aximo-iconbox-data">
                                    <h3>Logo and Branding</h3>
                                    <p>Creating or refreshing a company's logo and developing a cohesive visual identity, business card, letterhead, &amp; style guides.</p>
                                    <a className="aximo-icon" href="single-/Services"><img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.6s">
                                <div className="aximo-iconbox-icon">
                                    <i className="icon-chef" />
                                </div>
                                <div className="aximo-iconbox-data">
                                    <h3>Illustration</h3>
                                    <p>Producing custom illustrations for editorial content, books, websites, marketing materials, magazines and more.</p>
                                    <a className="aximo-icon" href="single-/Services"><img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.7s">
                                <div className="aximo-iconbox-icon">
                                    <i className="icon-target-1" />
                                </div>
                                <div className="aximo-iconbox-data">
                                    <h3>Product Design</h3>
                                    <p>Developing the look and feel of physical products, considering ergonomics, aesthetics, and functionality.</p>
                                    <a className="aximo-icon" href="single-/Services"><img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End section */}

            <div className="aximo-auto-slider-section">
                <div className="swiper aximo-auto-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="aximo-auto-slider-item">
                                <h3>Let's create new experiences</h3>
                                <img src="assets/images/v1/star3.png" alt="" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-auto-slider-item">
                                <h3>Let's create new experiences</h3>
                                <img src="assets/images/v1/star3.png" alt="" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-auto-slider-item">
                                <h3>Let's create new experiences</h3>
                                <img src="assets/images/v1/star3.png" alt="" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-auto-slider-item">
                                <h3>Let's create new experiences</h3>
                                <img src="assets/images/v1/star3.png" alt="" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-auto-slider-item">
                                <h3>Let's create new experiences</h3>
                                <img src="assets/images/v1/star3.png" alt="" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-auto-slider-item">
                                <h3>Let's create new experiences</h3>
                                <img src="assets/images/v1/star3.png" alt="" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-auto-slider-item">
                                <h3>Let's create new experiences</h3>
                                <img src="assets/images/v1/star3.png" alt="" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-auto-slider-item">
                                <h3>Let's create new experiences</h3>
                                <img src="assets/images/v1/star3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End section */}

            <div className="section">
                <div className="container">
                    <div className="aximo-faq-wrap">
                        <div className="row">
                            <div className="col-lg-7 d-flex align-items-center">
                                <div className="aximo-default-content">
                                    <h2>
                                        <span className="aximo-title-animation" style={getStyles()}>
                                            Our high-quality
                                            <span className="aximo-title-icon">
                                                <img src="assets/images/v1/star2.png" alt="" />
                                            </span>
                                        </span>
                                        working processes
                                    </h2>
                                    <p>We focus at every stage on effective communication and collaboration between the client and ensuring that the final design meets the client's objectives and expectations.</p>
                                    <p>It is important to note that these are simplified steps, and the actual work process may vary depending on the complexity of the project.</p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="aximo-accordion-wrap wow fadeInUpX" data-wow-delay="0s" id="aximo-accordion">
                                    {/* Accordion Item 1 */}
                                    <div className={`aximo-accordion-item ${openIndex === 0 ? 'open' : ''}`}>
                                        <div className="aximo-accordion-header" onClick={() => handleClick(0)}>
                                            <h3>01/ Project idea</h3>
                                        </div>
                                        {openIndex === 0 && (
                                            <div className="aximo-accordion-body">
                                                <p>The process starts with a detailed discussion with the client to understand their idea &amp; goals.</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Accordion Item 2 */}
                                    <div className={`aximo-accordion-item ${openIndex === 1 ? 'open' : ''}`}>
                                        <div className="aximo-accordion-header" onClick={() => handleClick(1)}>
                                            <h3>02/ Brainstorming</h3>
                                        </div>
                                        {openIndex === 1 && (
                                            <div className="aximo-accordion-body">
                                                <p>Brainstorming is a group creativity technique in which members attempt to find a conclusion.</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Accordion Item 3 */}
                                    <div className={`aximo-accordion-item ${openIndex === 2 ? 'open' : ''}`}>
                                        <div className="aximo-accordion-header" onClick={() => handleClick(2)}>
                                            <h3>03/ Launch</h3>
                                        </div>
                                        {openIndex === 2 && (
                                            <div className="aximo-accordion-body">
                                                <p>The completed design assets or final product are delivered with necessary documentation.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End section */}

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

export default Services
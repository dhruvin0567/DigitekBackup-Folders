import React, { useState } from 'react';
import Header from './Header';
function Pricing() {




    const [isYearly, setIsYearly] = useState(true); // Default is monthly

    // Handler to toggle between monthly and yearly pricing
    const handleToggleChange = () => {
        setIsYearly(prevState => !prevState); // Toggle between true/false
    };

    // Pricing details for each section
    const pricing = [
        { monthly: 299, yearly: 399 },
        { monthly: 499, yearly: 599 },
        { monthly: 299, yearly: 399 }
    ];

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
                    <h1 className="post__title">Pricing Plans</h1>
                    <nav className="breadcrumbs">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li aria-current="page"> Pricing Plans</li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* End breadcrumb */}

            <div className="section aximo-section-padding3">
                <div className="container">
                    <div className="aximo-pricing-title">
                        <h2>
                            Pick from one of our
                            <span className="aximo-title-animation">
                                ready packages
                                <span className="aximo-title-icon">
                                    <img src="assets/images/v1/star2.png" alt="" />
                                </span>
                            </span>
                        </h2>
                    </div>
                    <div className="pricing-btn">
                        <label>Billed monthly</label>
                        <div className="toggle-btn">
                            <input
                                className="form-check-input btn-toggle price-deck-trigger"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                                onChange={handleToggleChange}
                                checked={isYearly}  // If checked, it will be yearly (true), otherwise monthly (false)
                            />
                        </div>
                        <label>Billed annually</label>
                    </div>
                    <div className="row" id="table-price-value" data-pricing-dynamic data-value-active="monthly">
                        <div className="col-xl-4 col-md-6">
                            <div className="aximo-pricing-wrap2 wow fadeInUpX" data-wow-delay="0.1s">
                                <div className="aximo-pricing-header2">
                                    <h5>Web Design Package</h5>
                                </div>
                                <div className="aximo-pricing-price2">
                                    <h2>$</h2>
                                    <h2 className="aximo-price dynamic-value">
                                        {isYearly ? pricing[0].monthly : pricing[0].yearly}{/* Dynamically change the price based on the toggle */}
                                    </h2>
                                </div>
                                <div className="aximo-pricing-description">
                                    <p>Web design packages offered a range of services and features to create websites</p>
                                </div>
                                <div className="aximo-pricing-body2">
                                    <ul>
                                        <li><img src="assets/images/icon/check.svg" alt="" />Consultation &amp; Discovery</li>
                                        <li><img src="assets/images/icon/check.svg" alt="" />Responsive Design</li>
                                        <li><img src="assets/images/icon/check.svg" alt="" />E-commerce Integration</li>
                                        <li><img src="assets/images/icon/check.svg" alt="" />Custom Web Design</li>
                                        <li><img src="assets/images/icon/check.svg" alt="" />Testing and Quality Assurance</li>
                                    </ul>
                                </div>
                                <a className="aximo-pricing-btn2" href>Select the package</a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="aximo-pricing-wrap2 wow fadeInUpX" data-wow-delay="0.2s">
                                <div className="aximo-pricing-header2">
                                    <h5>UX/UI Package</h5>
                                </div>
                                <div className="aximo-pricing-price2">
                                    <h2>$</h2>
                                    <h2 className="aximo-price dynamic-value">
                                        {isYearly ? pricing[1].monthly : pricing[1].yearly} {/* Dynamically change the price based on the toggle */}
                                    </h2>
                                </div>
                                <div className="aximo-pricing-description">
                                    <p>UX/UI package offered a set of services aimed at designing user-friendly UI/UX</p>
                                </div>
                                <div className="aximo-pricing-body2">
                                    <ul>
                                        <li><img src="assets/images/icon/check.svg" alt="" />Information Architecture</li>
                                        <li><img src="assets/images/icon/check.svg" alt="" />Wireframing &amp; Prototyping</li>
                                        <li><img src="assets/images/icon/check.svg" alt="" />Usability Testing</li>
                                        <li><img src="assets/images/icon/check.svg" alt="" />Visual Design &amp; </li>
                                        <li><img src="assets/images/icon/check.svg" alt="" />User Interface (UI) Design</li>
                                    </ul>
                                </div>
                                <a className="aximo-pricing-btn2 active" href>Select the package</a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="aximo-pricing-wrap2 wow fadeInUpX" data-wow-delay="0.3s">
                                <div className="aximo-pricing-header2">
                                    <h5>Branding Package</h5>
                                </div>
                                <div className="aximo-pricing-price2">
                                    <h2>$</h2>
                                    <h2 className="aximo-price dynamic-value">
                                        {isYearly ? pricing[2].monthly : pricing[2].yearly} {/* Dynamically change the price based on the toggle */}
                                    </h2>
                                </div>
                                <div className="aximo-pricing-description">
                                    <p>Branding package typically includes a comprehensive set of brand's identity</p>
                                </div>
                                <div className="aximo-pricing-body2">
                                    <ul>
                                        <li><img src="assets/images/icon/check.svg" alt="" />Brand Guidelines</li>
                                        <li><img src="assets/images/icon/check.svg" alt="" />Stationery &amp; Website Design</li>
                                        <li><img src="assets/images/icon/check.svg" alt="" />Social Media Assets</li>
                                        <li><img src="assets/images/icon/check.svg" alt="" />Signage &amp; Packaging Design</li>
                                        <li><img src="assets/images/icon/check.svg" alt="" />Brand Launch Support</li>
                                    </ul>
                                </div>
                                <a className="aximo-pricing-btn2" href>Select the package</a>
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
                    <div className="aximo-pricing-border">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="aximo-default-content">
                                    <h2>
                                        <span className="aximo-title-animation">
                                            Read our FAQ
                                            <span className="aximo-title-icon">
                                                <img src="assets/images/v1/star2.png" alt="" />
                                            </span>
                                        </span>
                                        for clarification
                                    </h2>
                                    <p>We understand that you considering our services, that's why we’ve curated a collection of frequently asked questions.</p>
                                </div>
                                <a className="aximo-errors-btn contact-us wow fadeInUpX" data-wow-delay="0.1s" href="/Contact">Contact us <span><img src="assets/images/icon/arrow-right.svg" alt="" /></span></a>
                            </div>
                            <div className="col-lg-6">
                                <div className="aximo-accordion-normal-wrap m_top_responsive">
                                    <div className="aximo-accordion-normal-item">
                                        <div className="aximo-accordion-normal-icon">
                                            <img src="assets/images/icon/question.svg" alt="" />
                                        </div>
                                        <div className="aximo-accordion-normal-data">
                                            <h3>Can I buy multiple plans?</h3>
                                            <p>Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.</p>
                                        </div>
                                    </div>
                                    <div className="aximo-accordion-normal-item">
                                        <div className="aximo-accordion-normal-icon">
                                            <img src="assets/images/icon/question.svg" alt="" />
                                        </div>
                                        <div className="aximo-accordion-normal-data">
                                            <h3>What is the cancelation policy?</h3>
                                            <p>The cancellation policy refers to the rules and guidelines established by a business regarding the cancellation of services, products.</p>
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
                        </div>
                    </div>
                </div>
            </div>
            {/* ENd section */}


            <div className="section aximo-section-padding3">
                <div className="container">
                    <div className="aximo-section-title center">
                        <h2>
                            Clients are always
                            <span className="aximo-title-animation">
                                satisfied with us
                                <span className="aximo-title-icon">
                                    <img src="assets/images/v1/star2.png" alt="" />
                                </span>
                            </span>
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="aximo-testimonial-wrap wow fadeInUpX" data-wow-delay="0.1s">
                                <div className="aximo-testimonial-rating">
                                    <ul>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                    </ul>
                                </div>
                                <div className="aximo-testimonial-data">
                                    <h3>Super customer service!</h3>
                                    <p>Excellent customer service and I was really impressed and happy with my purchase especially as it was a last minute order which got to me in time, and when it arrived I was very happy with the design and size and so was the recipient.</p>
                                </div>
                                <div className="aximo-testimonial-author">
                                    <div className="aximo-testimonial-author-thumb">
                                        <img src="assets/images/v1/t_thumb1.png" alt="" />
                                    </div>
                                    <div className="aximo-testimonial-author-data">
                                        <p>William Jack <span>Founder@XYZ</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-testimonial-wrap wow fadeInUpX" data-wow-delay="0.2s">
                                <div className="aximo-testimonial-rating">
                                    <ul>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                    </ul>
                                </div>
                                <div className="aximo-testimonial-data">
                                    <h3>Exceptional creativity and vision</h3>
                                    <p>Working Mthemeus was a game-changer for our brand. Their exceptional creativity &amp; vision breathed new life into our visual. The logo they perfectly captures our essence &amp; has become instantly recognizable. We couldn't be happier the results!</p>
                                </div>
                                <div className="aximo-testimonial-author">
                                    <div className="aximo-testimonial-author-thumb">
                                        <img src="assets/images/v1/t_thumb2.png" alt="" />
                                    </div>
                                    <div className="aximo-testimonial-author-data">
                                        <p>Smith Align <span>Businessman</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-testimonial-wrap wow fadeInUpX" data-wow-delay="0.3s">
                                <div className="aximo-testimonial-rating">
                                    <ul>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                    </ul>
                                </div>
                                <div className="aximo-testimonial-data">
                                    <h3>Innovative and professional</h3>
                                    <p>I can't say enough good things about them. Their team is not only incredibly talented but also highly professional. They listened to our ideas and brought to life in ways we couldn't have imagined. Their innovative approach and dedication to our project.</p>
                                </div>
                                <div className="aximo-testimonial-author">
                                    <div className="aximo-testimonial-author-thumb">
                                        <img src="assets/images/v1/t_thumb3.png" alt="" />
                                    </div>
                                    <div className="aximo-testimonial-author-data">
                                        <p>Milano Joe <span>Creative Director</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-testimonial-wrap wow fadeInUpX" data-wow-delay="0.4s">
                                <div className="aximo-testimonial-rating">
                                    <ul>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                    </ul>
                                </div>
                                <div className="aximo-testimonial-data">
                                    <h3>Transformed our brand</h3>
                                    <p>Our partnership with Mthemeus transformed our brand from ordinary to extraordinary. Their branding expertise and design work elevated our marketing materials to a whole new level. Our customers have taken notice, and boost in brand recognition.</p>
                                </div>
                                <div className="aximo-testimonial-author">
                                    <div className="aximo-testimonial-author-thumb">
                                        <img src="assets/images/v1/t_thumb4.png" alt="" />
                                    </div>
                                    <div className="aximo-testimonial-author-data">
                                        <p>Danial Mark <span>Marketing Director</span></p>
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

export default Pricing
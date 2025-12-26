import React from 'react'

function Home03() {
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

            <header className="site-header aximo-header-section aximo-header3 bg-light3" id="sticky-menu">
                <div className="container">
                    <nav className="navbar site-navbar">
                        {/* Brand Logo*/}
                        <div className="brand-logo">
                            <a href="index.html">
                                <img src="assets/images/logo/logo-dark.svg" alt="" className="light-version-logo" />
                            </a>
                        </div>
                        <div className="menu-block-wrapper">
                            <div className="menu-overlay" />
                            <nav className="menu-block" id="append-menu-header">
                                <div className="mobile-menu-head">
                                    <div className="go-back">
                                        <i className="fa fa-angle-left" />
                                    </div>
                                    <div className="current-menu-title" />
                                    <div className="mobile-menu-close">×</div>
                                </div>
                                <ul className="site-menu-main">
                                    <li className="nav-item nav-item-has-children">
                                        <a href="#" className="nav-link-item drop-trigger">Demo <i className="fas fa-angle-down" /></a>
                                        <ul className="sub-menu" id="submenu-1">
                                            <li className="sub-menu--item">
                                                <a href="index.html">
                                                    <span className="menu-item-text">Design Agency</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-02.html">
                                                    <span className="menu-item-text">Startup Agency</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-03.html">
                                                    <span className="menu-item-text">SEO Agency</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-04.html">
                                                    <span className="menu-item-text">Business Consultation</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-05.html">
                                                    <span className="menu-item-text">Digital Marketing</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-06.html">
                                                    <span className="menu-item-text">Interior Design Agency</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-07.html">
                                                    <span className="menu-item-text">Advertising agency</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="about-us.html" className="nav-link-item">About Us</a>
                                    </li>
                                    <li className="nav-item nav-item-has-children">
                                        <a href="#" className="nav-link-item drop-trigger">Pages <i className="fas fa-angle-down" /></a>
                                        <ul className="sub-menu" id="submenu-2">
                                            <li className="sub-menu--item">
                                                <a href="about-us.html">
                                                    <span className="menu-item-text">About Us</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="pricing.html">
                                                    <span className="menu-item-text">Pricing</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">blog <i className="fas fa-angle-down" /></a>
                                                <ul className="sub-menu shape-none" id="submenu-3">
                                                    <li className="sub-menu--item">
                                                        <a href="blog.html">
                                                            <span className="menu-item-text">Our Blog</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="blog-grid.html">
                                                            <span className="menu-item-text">Blog grid</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="single-blog.html">
                                                            <span className="menu-item-text">blog details</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">Service<i className="fas fa-angle-down" />
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-4">
                                                    <li className="sub-menu--item">
                                                        <a href="service.html">
                                                            <span className="menu-item-text">service</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="single-service.html">
                                                            <span className="menu-item-text">service details</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">Team<i className="fas fa-angle-down" />
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-5">
                                                    <li className="sub-menu--item">
                                                        <a href="team.html">
                                                            <span className="menu-item-text">team</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="single-team.html">
                                                            <span className="menu-item-text">team details</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">Portfolio<i className="fas fa-angle-down" />
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-6">
                                                    <li className="sub-menu--item">
                                                        <a href="portfolio-02.html">
                                                            <span className="menu-item-text">Portfolio One Column</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="portfolio-01.html">
                                                            <span className="menu-item-text">Portfolio Two Column</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="single-portfolio.html">
                                                            <span className="menu-item-text">Single Portfolio</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">Utility<i className="fas fa-angle-down" />
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-7">
                                                    <li className="sub-menu--item">
                                                        <a href="faq.html">
                                                            <span className="menu-item-text">faq</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="errors-404.html">
                                                            <span className="menu-item-text">Error 404</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="testimonial.html">
                                                            <span className="menu-item-text">testimonial</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="coming-soon.html">
                                                            <span className="menu-item-text">Coming Soon</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">Account<i className="fas fa-angle-down" />
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-8">
                                                    <li className="sub-menu--item">
                                                        <a href="sign-up.html">
                                                            <span className="menu-item-text">sign up</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="sign-in.html">
                                                            <span className="menu-item-text">sign in</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="reset-password.html">
                                                            <span className="menu-item-text">reset password</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item nav-item-has-children">
                                        <a href="#" className="nav-link-item drop-trigger">Blog <i className="fas fa-angle-down" /></a>
                                        <ul className="sub-menu" id="submenu-9">
                                            <li className="sub-menu--item">
                                                <a href="blog.html">
                                                    <span className="menu-item-text">blog</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="blog-grid.html">
                                                    <span className="menu-item-text">Blog grid</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="single-blog.html">
                                                    <span className="menu-item-text">blog Details</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="contact-us.html" className="nav-link-item">Contact Us</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
                            <div className="aximo-header-wrap">
                                <div className="aximo-social-icon header-social">
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
                                <a className="aximo-default-btn pill aximo-header-btn yellow-btn" href="contact-us.html">
                                    <span className="aximo-label-up">Talk to an expert</span>
                                    <span className="aximo-label-up">Talk to an expert</span>
                                </a>
                            </div>
                        </div>
                        {/* mobile menu trigger */}
                        <div className="mobile-menu-trigger">
                            <span />
                        </div>
                        {/*/.Mobile Menu Hamburger Ends*/}
                    </nav>
                </div>
            </header>
            {/*End landex-header-section */}

            <div className="aximo-all-section bg-light3">
                <div className="aximo-hero-section3">
                    <div className="container">
                        <div className="row aximo_screenfix_right">
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="aximo-hero-content3">
                                    <p><span>#1 SEO agency for fast-growing companies</span></p>
                                    <h1>
                                        Provides the best ranking experience
                                    </h1>
                                    <p>We work to improve your business visibility within search engines, boost organic traffic to your website and rank for the most valuable keywords.</p>
                                    <div className="aximo-hero-subscription">
                                        <form action="#">
                                            <input type="email" placeholder="Enter your email address" />
                                            <button id="aximo-hero-subscription-btn" type="submit">
                                                <span className="aximo-label-up">Get started</span>
                                                <span className="aximo-label-up">Get started</span>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="aximo-hero-rating">
                                        <ul>
                                            <li><img src="assets/images/v3/star.svg" alt="" /></li>
                                            <li><img src="assets/images/v3/star.svg" alt="" /></li>
                                            <li><img src="assets/images/v3/star.svg" alt="" /></li>
                                            <li><img src="assets/images/v3/star.svg" alt="" /></li>
                                            <li><img src="assets/images/v3/star.svg" alt="" /></li>
                                            <li>4.8/5 stars based on 1K client reviews</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="aximo-hero-thumb3-wrap">
                                    <div className="aximo-hero-thumb3">
                                        <img src="assets/images/v3/hero-thumb.png" alt="" />
                                        <div className="aximo-hero-thumb-shape2">
                                            <img src="assets/images/v3/shape-monitor.png" alt="" />
                                        </div>
                                        <div className="aximo-hero-thumb-shape3">
                                            <img src="assets/images/v3/shape-ayna.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="aximo-hero-thumb-shape1 wow wow fadeInRight" data-wow-delay="0s">
                                        <img src="assets/images/v3/star-shape.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End section */}
                <div className="aximo-counter-section dark-bg">
                    <div id="aximo-counter" />
                    <div className="container">
                        <div className="aximo-counter-title">
                            <p>Our results speak for our ability to succeed</p>
                        </div>
                        <div className="aximo-counter-wrap3">
                            <div className="aximo-counter-data3 wow fadeInUpX" data-wow-delay="0.1s">
                                <h2><em>.</em><span data-percentage={13} className="aximo-counter" />+</h2>
                                <p>Years of experience</p>
                            </div>
                            <div className="aximo-counter-data3 wow fadeInUpX" data-wow-delay="0.2s">
                                <h2><em>.</em><span data-percentage={85} className="aximo-counter" />%</h2>
                                <p>Average Conversion Rate</p>
                            </div>
                            <div className="aximo-counter-data3 wow fadeInUpX" data-wow-delay="0.3s">
                                <h2><em>.</em><span data-percentage={60} className="aximo-counter" />m</h2>
                                <p>Traffic Generated</p>
                            </div>
                            <div className="aximo-counter-data3 wow fadeInUpX" data-wow-delay="0.4s">
                                <h2><em>.</em><span data-percentage={100} className="aximo-counter" />%</h2>
                                <p>Client satisfaction score</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End section */}
                <div className="section aximo-section-padding2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="aximo-content-thumb wow fadeInLeft" data-wow-delay="0.1s">
                                    <img src="assets/images/v3/thumb1.png" alt="" />
                                    <div className="aximo-thumb-shape1">
                                        <img src="assets/images/v3/shape2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 offset-lg-1">
                                <div className="aximo-default-content familjen-grotesk">
                                    <h2>We strive for the best SEO quality</h2>
                                    <p>We are a leading SEO company dedicated to helping brand grow their online presence &amp; achieve higher search engine rankings and improve digital performance. </p>
                                    <p>Whether you're a small local business or a global brand, we tailor our SEO services to meet your unique needs &amp; goals.</p>
                                </div>
                                <div className="aximo-btn-wrap">
                                    <a className="aximo-default-btn pill yellow-btn" href="contact-us.html">
                                        <span className="aximo-label-up">Explore more</span>
                                        <span className="aximo-label-up">Explore more</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End section */}
                <div className="section aximo-section-padding6 overflow-hidden">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 order-lg-1 offset-lg-1">
                                <div className="aximo-content-thumb wow fadeInRight" data-wow-delay="0.2s">
                                    <img src="assets/images/v3/thumb2.png" alt="" />
                                    <div className="aximo-thumb-shape2">
                                        <img src="assets/images/v3/shape1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="aximo-default-content familjen-grotesk">
                                    <h2>Increase revenue with custom SEO</h2>
                                    <p>Our SEO agency will help you reach new audiences, increase your website performance, and accelerate your reputation.</p>
                                    <div className="aximo-list-icon">
                                        <ul>
                                            <li><img src="assets/images/v3/check.svg" alt="" /> On-page optimizing your web pages to improve rankings</li>
                                            <li><img src="assets/images/v3/check.svg" alt="" /> Keyword research to identify relevant search and phrases</li>
                                            <li><img src="assets/images/v3/check.svg" alt="" /> Continuously monitor search engine algorithm changes</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End section */}
                <div className="section aximo-section-padding dark-bg overflow-hidden position-relative">
                    <div className="container">
                        <div className="aximo-section-title center familjen-grotesk light">
                            <h2>
                                Our professional SEO services for you
                            </h2>
                        </div>
                        <div className="aximo-iconbox-column">
                            <div className="aximo-iconbox-wrap3 wow fadeInUpX" data-wow-delay="0.1s">
                                <div className="aximo-iconbox-icon3">
                                    <img src="assets/images/v3/icon1.svg" alt="" />
                                </div>
                                <div className="aximo-iconbox-data3">
                                    <h3>On-Page SEO</h3>
                                    <p>On-page SEO aims to improve users website content and structure to improve its ranking on search engine results pages.</p>
                                    <a className="aximo-service-icon" href="single-service.html"><img src="assets/images/icon/arrow-right4.svg" alt="" /></a>
                                </div>
                            </div>
                            <div className="aximo-iconbox-wrap3 wow fadeInUpX" data-wow-delay="0.2s">
                                <div className="aximo-iconbox-icon3">
                                    <img src="assets/images/v3/icon2.svg" alt="" />
                                </div>
                                <div className="aximo-iconbox-data3">
                                    <h3>Technical SEO</h3>
                                    <p>Technical SEO helps search engines crawl &amp; index a site more effectively. Its performance and accessibility to search engines. </p>
                                    <a className="aximo-service-icon" href="single-service.html"><img src="assets/images/icon/arrow-right4.svg" alt="" /></a>
                                </div>
                            </div>
                            <div className="aximo-iconbox-wrap3 wow fadeInUpX" data-wow-delay="0.3s">
                                <div className="aximo-iconbox-icon3">
                                    <img src="assets/images/v3/icon3.svg" alt="" />
                                </div>
                                <div className="aximo-iconbox-data3">
                                    <h3>Keyword Research</h3>
                                    <p>We perform keyword research to identify the most relevant and high-traffic keywords and phrases for a client's industry.</p>
                                    <a className="aximo-service-icon" href="single-service.html"><img src="assets/images/icon/arrow-right4.svg" alt="" /></a>
                                </div>
                            </div>
                            <div className="aximo-iconbox-wrap3 wow fadeInUpX" data-wow-delay="0.4s">
                                <div className="aximo-iconbox-icon3">
                                    <img src="assets/images/v3/icon4.svg" alt="" />
                                </div>
                                <div className="aximo-iconbox-data3">
                                    <h3>Content Creation</h3>
                                    <p>Content can take many forms, including blog posts, articles, videos, infographics &amp; high-quality and informative content.</p>
                                    <a className="aximo-service-icon" href="single-service.html"><img src="assets/images/icon/arrow-right4.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aximo-iconbox-shape wow fadeInDown" data-wow-delay="0.2s">
                        <img src="assets/images/v3/star-shape-half.png" alt="" />
                    </div>
                </div>
                {/* End section */}
                <div className="section aximo-section-padding2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="aximo-content-thumb-wrap">
                                    <div className="aximo-content-thumb2 wow fadeInUpX" data-wow-delay="0.1s">
                                        <img src="assets/images/v3/thumb3.png" alt="" />
                                    </div>
                                    <div className="aximo-thumb-shape1">
                                        <img src="assets/images/v3/shape3.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 offset-lg-1">
                                <div className="aximo-default-content familjen-grotesk">
                                    <h2>Our simplified &amp; impactful steps</h2>
                                    <p>We will work to understand more about user's business and goals &amp; create a simple step-by-step SEO plan to help them.</p>
                                    <div className="aximo-accordion-wrap aximo-accordion-wrap3">
                                        <div className="aximo-accordion-item open">
                                            <div className="aximo-accordion-header">
                                                <p>Keyword Research and On-Page Optimization</p>
                                            </div>
                                            <div className="aximo-accordion-body">
                                                <p>Start by researching and selecting relevant keywords and phrases that your target audience is likely to use.</p>
                                            </div>
                                        </div>
                                        <div className="aximo-accordion-item">
                                            <div className="aximo-accordion-header">
                                                <p>Off-Page SEO and Link Building</p>
                                            </div>
                                            <div className="aximo-accordion-body">
                                                <p>If your business has a physical presence, optimize your website for local search by claiming.</p>
                                            </div>
                                        </div>
                                        <div className="aximo-accordion-item">
                                            <div className="aximo-accordion-header">
                                                <p>Regular Monitoring and Content Creation</p>
                                            </div>
                                            <div className="aximo-accordion-body">
                                                <p>Regularly monitor your website's performance using tools like Google Analytics &amp; Google Search Console.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End section */}
                <div className="aximo-auto-text-slider-section">
                    <div className="swiper aximo-auto-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="aximo-auto-slider-item">
                                    <h3># Online Marketing</h3>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-auto-slider-item">
                                    <h3># SEO Expert</h3>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-auto-slider-item">
                                    <h3># Content Marketing</h3>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-auto-slider-item">
                                    <h3># Link Building</h3>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-auto-slider-item">
                                    <h3># Digital Strategy</h3>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-auto-slider-item">
                                    <h3># Google Rankings</h3>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-auto-slider-item">
                                    <h3># Online Marketing</h3>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-auto-slider-item">
                                    <h3># SEO Expert</h3>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-auto-slider-item">
                                    <h3># Content Marketing</h3>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-auto-slider-item">
                                    <h3># Link Building</h3>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-auto-slider-item">
                                    <h3># Digital Strategy</h3>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-auto-slider-item">
                                    <h3># Google Rankings</h3>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-auto-slider-item">
                                    <h3># Online Marketing</h3>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-auto-slider-item">
                                    <h3># SEO Expert</h3>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-auto-slider-item">
                                    <h3># Content Marketing</h3>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-auto-slider-item">
                                    <h3># Link Building</h3>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-auto-slider-item">
                                    <h3># Digital Strategy</h3>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-auto-slider-item">
                                    <h3># Google Rankings</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End section */}
                <div className="section aximo-section-padding3 position-relative">
                    <div className="container">
                        <div className="aximo-section-title familjen-grotesk">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h2>Increase revenue with custom SEO</h2>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center justify-content-end">
                                    <div className="aximo-title-btn">
                                        <a className="aximo-default-btn pill yellow-btn" href="team.html">
                                            <span className="aximo-label-up">Meet our team</span>
                                            <span className="aximo-label-up">Meet our team</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-md-6">
                                <div className="aximo-team-wrap2 wow fadeInUpX" data-wow-delay="0.1s">
                                    <div className="aximo-team-thumb2">
                                        <img src="assets/images/team/team5.png" alt="" />
                                    </div>
                                    <div className="aximo-team-data2">
                                        <a href="single-team.html">
                                            <h4>Adrew Smith</h4>
                                        </a>
                                        <p>Senior SEO Manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="aximo-team-wrap2 wow fadeInUpX" data-wow-delay="0.2s">
                                    <div className="aximo-team-thumb2">
                                        <img src="assets/images/team/team6.png" alt="" />
                                    </div>
                                    <div className="aximo-team-data2">
                                        <a href="single-team.html">
                                            <h4>Jones Jack</h4>
                                        </a>
                                        <p>Strategy Director</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="aximo-team-wrap2 wow fadeInUpX" data-wow-delay="0.3s">
                                    <div className="aximo-team-thumb2">
                                        <img src="assets/images/team/team7.png" alt="" />
                                    </div>
                                    <div className="aximo-team-data2">
                                        <a href="single-team.html">
                                            <h4>Marsal Straw</h4>
                                        </a>
                                        <p>SEO Content Writer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aximo-star-shape-half wow fadeInLeft" data-wow-delay="0.2s">
                        <img src="assets/images/v3/star-shape-half2.png" alt="" />
                    </div>
                </div>
                {/* End section */}
                <div className="section aximo-section-padding6">
                    <div className="container">
                        <div className="aximo-section-title center familjen-grotesk">
                            <h2>
                                Increase revenue with custom SEO
                            </h2>
                        </div>
                        <div className="aximo-accordion-wrap aximo-accordion-wrap4">
                            <div className="aximo-accordion-item open">
                                <div className="aximo-accordion-header">
                                    <h3>What is SEO?</h3>
                                </div>
                                <div className="aximo-accordion-body">
                                    <p>SEO, or Search Engine Optimization, is a set of strategies and techniques aimed at improving a website's visibility in search engine results pages (SERPs) to increase organic (non-paid) traffic.</p>
                                </div>
                            </div>
                            <div className="aximo-accordion-item">
                                <div className="aximo-accordion-header">
                                    <h3>Why is SEO important for my website?</h3>
                                </div>
                                <div className="aximo-accordion-body">
                                    <p>SEO is essential because it helps your website rank higher in search results, making it more visible to potential visitors. This can lead to increased organic traffic, better brand exposure, and potential business growth.</p>
                                </div>
                            </div>
                            <div className="aximo-accordion-item">
                                <div className="aximo-accordion-header">
                                    <h3>How long does it take to see results from SEO?</h3>
                                </div>
                                <div className="aximo-accordion-body">
                                    <p>SEO is an ongoing process, and the time it takes to see results can vary based on factors like the competitiveness of your industry and the specific strategies you use. Generally, it can take several months to see significant improvements.</p>
                                </div>
                            </div>
                            <div className="aximo-accordion-item">
                                <div className="aximo-accordion-header">
                                    <h3>How can I improve my website's load speed for SEO?</h3>
                                </div>
                                <div className="aximo-accordion-body">
                                    <p>You can enhance website speed by optimizing images, using content delivery networks (CDNs), reducing unnecessary plugins, and enabling browser caching, among other techniques.</p>
                                </div>
                            </div>
                            <div className="aximo-accordion-item">
                                <div className="aximo-accordion-header">
                                    <h3>How can I track the success of my SEO efforts?</h3>
                                </div>
                                <div className="aximo-accordion-body">
                                    <p>You can track SEO success by using tools like Google Analytics and Google Search Console. Monitor key metrics, such as organic traffic, keyword rankings, click-through rates, and conversion rates.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End section */}
                <div className="section dark-bg aximo-section-padding2 position-relative overflow-hidden">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="aximo-default-content familjen-grotesk light m-right-gap">
                                    <h2>Want to boost your business with our SEO expertise?</h2>
                                    <p>Experienced SEO experts proven strategies &amp; innovative techniques to increase your website's visibility, drive organic traffic, and improve your digital performance and grow your online reach.</p>
                                    <div className="aximo-contact-info">
                                        <h3>Contact us directly:</h3>
                                        <ul>
                                            <li>
                                                <a href>
                                                    <i className="icon-phone" />
                                                    +088-234-6849
                                                </a>
                                            </li>
                                            <li>
                                                <a href>
                                                    <i className="icon-message" />
                                                    example@gmail.com
                                                </a>
                                            </li>
                                            <li>
                                                <a href>
                                                    <i className="icon-map" />
                                                    Haward Street,10203 USA
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="aximo-form-wrap2">
                                    <h3>Send us a message</h3>
                                    <p>Fill out the form and our expert will get back to you with a free analysis and proposal</p>
                                    <form action="#">
                                        <div className="aximo-form-field2">
                                            <input type="text" placeholder="Enter full name" />
                                        </div>
                                        <div className="aximo-form-field2">
                                            <input type="email" placeholder="Enter email address" />
                                        </div>
                                        <div className="aximo-form-field2">
                                            <textarea name="textarea" placeholder="Write us your questions" defaultValue={""} />
                                        </div>
                                        <button id="aximo-submit-btn2" type="submit">
                                            <span className="aximo-label-up">Submit now</span>
                                            <span className="aximo-label-up">Submit now</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aximo-star-shape-half2 wow fadeInUp" data-wow-delay="0.2s">
                        <img src="assets/images/v3/star-shape-half3.png" alt="" />
                    </div>
                </div>
                {/* End section */}
            </div>

            <footer className="aximo-footer-section">
                <div className="container">
                    <div className="aximo-footer-top2">
                        <a href><img src="assets/images/v3/logo-large.svg" alt="" /></a>
                    </div>
                    <div className="aximo-footer-bottom three">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="aximo-copywright three">
                                    <p>©Copyright 2024, All Rights Reserved by Mthemeus</p>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="aximo-footer-menu2">
                                    <ul>
                                        <li><a href>Home</a></li>
                                        <li><a href>About Us</a></li>
                                        <li><a href>Services</a></li>
                                        <li><a href>Projects</a></li>
                                        <li><a href>Pages</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    )
}

export default Home03
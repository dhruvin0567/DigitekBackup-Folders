import React from 'react'

function Home02() {
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

            <header className="site-header site-header--menu-center aximo-header-section aximo-header2 bg-light2" id="sticky-menu">
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
                            <a className="aximo-default-btn aximo-header-btn outline-btn" href="contact-us.html">
                                <span className="aximo-label-up">Hire Us!</span>
                                <span className="aximo-label-up">Hire Us!</span>
                            </a>
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


            <div className="aximo-all-section bg-light2">
                <div className="aximo-hero-section2">
                    <div className="container position-relative">
                        <div className="aximo-hero-content2">
                            <h1>
                                Start your business growth journey with us
                            </h1>
                            <p>We believe in the power of innovation and are passionate about helping startups thrive. As a startup company, we are a dynamic and innovative organization that provides comprehensive support, guidance and resources to early stage startups.</p>
                            <div className="aximo-hero-btn-wrap center">
                                <a className="aximo-default-btn wow fadeInUpX" data-wow-delay="0.1s" href="contact-us.html">
                                    <span className="aximo-label-up">Get In Touch</span>
                                    <span className="aximo-label-up">Get In Touch</span>
                                </a>
                                <a className="aximo-default-btn aximo-default-btn-outline wow fadeInUpX" data-wow-delay="0.2s" href="service.html">
                                    <span className="aximo-label-up">Explore Our Services</span>
                                    <span className="aximo-label-up">Explore Our Services</span>
                                </a>
                            </div>
                        </div>
                        <div className="aximo-hero-shape1">
                            <img src="assets/images/v2/shape1.png" alt="" />
                        </div>
                        <div className="aximo-hero-shape2">
                            <img src="assets/images/v2/shape-star.png" alt="" />
                        </div>
                    </div>
                    <div className="aximo-hero-thumb-wrap">
                        <div className="aximo-hero-thumb-item wow fadeInUpX" data-wow-delay="0s">
                            <img src="assets/images/v2/h-thumb1.png" alt="" />
                        </div>
                        <div className="aximo-hero-thumb-item wow fadeInUpX" data-wow-delay="0.1s">
                            <img src="assets/images/v2/h-thumb2.png" alt="" />
                        </div>
                        <div className="aximo-hero-thumb-item wow fadeInUpX" data-wow-delay="0.2s">
                            <img src="assets/images/v2/h-thumb3.png" alt="" />
                        </div>
                        <div className="aximo-hero-thumb-item wow fadeInUpX" data-wow-delay="0.3s">
                            <img src="assets/images/v2/h-thumb4.png" alt="" />
                        </div>
                        <div className="aximo-hero-thumb-item wow fadeInUpX" data-wow-delay="0.4s">
                            <img src="assets/images/v2/h-thumb5.png" alt="" />
                        </div>
                    </div>
                </div>
                {/* End sction */}
                <div className="aximo-brandlogo-section extra-side-margin">
                    <div className="aximo-brandlogo-title">
                        <p>We’ve helped over 200+ startups grow their business around the world</p>
                    </div>
                    <div className="swiper aximo-auto-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="aximo-brandlogo-item">
                                    <img src="assets/images/v2/b_1.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-brandlogo-item">
                                    <img src="assets/images/v2/b_2.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-brandlogo-item">
                                    <img src="assets/images/v2/b_3.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-brandlogo-item">
                                    <img src="assets/images/v2/b_4.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-brandlogo-item">
                                    <img src="assets/images/v2/b_5.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-brandlogo-item">
                                    <img src="assets/images/v2/b_6.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-brandlogo-item">
                                    <img src="assets/images/v2/b_7.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-brandlogo-item">
                                    <img src="assets/images/v2/b_1.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-brandlogo-item">
                                    <img src="assets/images/v2/b_2.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-brandlogo-item">
                                    <img src="assets/images/v2/b_3.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-brandlogo-item">
                                    <img src="assets/images/v2/b_4.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-brandlogo-item">
                                    <img src="assets/images/v2/b_5.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-brandlogo-item">
                                    <img src="assets/images/v2/b_6.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-brandlogo-item">
                                    <img src="assets/images/v2/b_7.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-brandlogo-item">
                                    <img src="assets/images/v2/b_1.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-brandlogo-item">
                                    <img src="assets/images/v2/b_2.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-brandlogo-item">
                                    <img src="assets/images/v2/b_3.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-brandlogo-item">
                                    <img src="assets/images/v2/b_4.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-brandlogo-item">
                                    <img src="assets/images/v2/b_5.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-brandlogo-item">
                                    <img src="assets/images/v2/b_6.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="aximo-brandlogo-item">
                                    <img src="assets/images/v2/b_7.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end section */}
                <div className="section bg-light2 aximo-section-padding3 position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="aximo-section-title clash-grotesk">
                                    <h2>
                                        Features that set us apart from others
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-md-6">
                                <div className="aximo-iconbox-wrap2 wow fadeInUpX" data-wow-delay="0.1s">
                                    <div className="aximo-iconbox-icon2">
                                        <img src="assets/images/v2/illustrator1.png" alt="" />
                                    </div>
                                    <div className="aximo-iconbox-data2">
                                        <h3>Reduce Uncertainty</h3>
                                        <p>By adopting and implementing strategies, we not only help survive but also thrive in the face of uncertainty.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="aximo-iconbox-wrap2 wow fadeInUpX" data-wow-delay="0.2s">
                                    <div className="aximo-iconbox-data2">
                                        <h3>Innovative Ideas</h3>
                                        <p>Our aim is to disrupt existing industries or create entirely new ones with our talents and innovative business ideas.</p>
                                    </div>
                                    <div className="aximo-iconbox-icon2 bottom">
                                        <img src="assets/images/v2/illustrator2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="aximo-iconbox-wrap2 wow fadeInUpX" data-wow-delay="0.3s">
                                    <div className="aximo-iconbox-icon2">
                                        <img src="assets/images/v2/illustrator3.png" alt="" />
                                    </div>
                                    <div className="aximo-iconbox-data2">
                                        <h3>Growth Focus</h3>
                                        <p>Growth is a central objective for us. We’ve also a strong emphasis on rapid growth and scaling business growth.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aximo-shape">
                        <img src="assets/images/v2/shape2.png" alt="" />
                    </div>
                </div>
                {/* End section */}
                <div className="aximo-about-section bg-orange extra-side-margin">
                    <div id="aximo-counter" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="aximo-thumb" id="rotatetwo">
                                    <img src="assets/images/v2/thumb.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="aximo-default-content clash-grotesk">
                                    <h2>We help empower visionary founders</h2>
                                    <p>We provide comprehensive support, guidance to early stage startups &amp; entrepreneurs. Our mission is to help transform breakthrough ideas into successful and sustainable businesses.</p>
                                </div>
                                <div className="aximo-counter-wrap2">
                                    <div className="aximo-counter-data2">
                                        <h2><span data-percentage={35} className="aximo-counter" />+</h2>
                                        <p>Years of experience</p>
                                    </div>
                                    <div className="aximo-counter-data2">
                                        <h2><span data-percentage={84} className="aximo-counter" />k</h2>
                                        <p>Active monthly users</p>
                                    </div>
                                    <div className="aximo-counter-data2">
                                        <h2><span data-percentage={20} className="aximo-counter" />k</h2>
                                        <p>Project completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End section */}
                <div className="section aximo-section-padding position-relative">
                    <div className="container">
                        <div className="aximo-section-title center clash-grotesk">
                            <h2>
                                Services to increase chances of success
                            </h2>
                        </div>
                    </div>
                    <div className="aximo-increase-shape">
                        <img src="assets/images/v2/shape-star.png" alt="" />
                    </div>
                    <div className="aximo-service-increase-wrap">
                        <div className="aximo-service-increase-row">
                            <div className="aximo-service-increase-item">
                                <img className="swipeimage" src="assets/images/v2/h-thumb1.png" alt="" />
                                <div className="aximo-service-increase-title">
                                    <h3>Product Development:</h3>
                                </div>
                                <div className="aximo-service-increase-body">
                                    <p>We are focused on developing innovative products services. We research and development to create new solutions.</p>
                                </div>
                                <a href="single-service.html" className="aximo-service-increase-icon">
                                    <i className="icon-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="aximo-service-increase-row">
                            <div className="aximo-service-increase-item">
                                <img className="swipeimage" src="assets/images/v2/h-thumb2.png" alt="" />
                                <div className="aximo-service-increase-title">
                                    <h3>Consulting &amp; Advisory:</h3>
                                </div>
                                <div className="aximo-service-increase-body">
                                    <p>Our expertise in various fields, such as management, finance, marketing, or technology, to help businesses solve problems.</p>
                                </div>
                                <a href="single-service.html" className="aximo-service-increase-icon">
                                    <i className="icon-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="aximo-service-increase-row">
                            <div className="aximo-service-increase-item">
                                <img className="swipeimage" src="assets/images/v2/h-thumb3.png" alt="" />
                                <div className="aximo-service-increase-title">
                                    <h3>Investment and Equity:</h3>
                                </div>
                                <div className="aximo-service-increase-body">
                                    <p>We invest in startups or take an equity stake in exchange or direct investment or have their own seed funds to support.</p>
                                </div>
                                <a href="single-service.html" className="aximo-service-increase-icon">
                                    <i className="icon-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="aximo-service-increase-row">
                            <div className="aximo-service-increase-item">
                                <img className="swipeimage" src="assets/images/v2/h-thumb4.png" alt="" />
                                <div className="aximo-service-increase-title">
                                    <h3>Co-Working Spaces:</h3>
                                </div>
                                <div className="aximo-service-increase-body">
                                    <p>We provide co-working spaces or office facilities for startups can work, collaborate, and access essential resources.</p>
                                </div>
                                <a href="single-service.html" className="aximo-service-increase-icon">
                                    <i className="icon-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="aximo-service-increase-row">
                            <div className="aximo-service-increase-item">
                                <img className="swipeimage" src="assets/images/v2/h-thumb5.png" alt="" />
                                <div className="aximo-service-increase-title">
                                    <h3>Legal &amp; Administrative:</h3>
                                </div>
                                <div className="aximo-service-increase-body">
                                    <p>Offer legal and administrative assistance, helping startups with tasks like business registration, intellectual property etc.</p>
                                </div>
                                <a href="single-service.html" className="aximo-service-increase-icon">
                                    <i className="icon-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End section */}
                <div className="aximo-video-section extra-side-margin wow fadeInUpX" data-wow-delay="0s">
                    <img src="assets/images/v2/video-bg.png" alt="" />
                    <a className="aximo-video-popup play-btn-size video-init" href="https://www.youtube.com/watch?v=7e90gBu4pas">
                        <img src="assets/images/v2/play-btn.png" alt="" />
                        <div className="waves wave-1" />
                        <div className="waves wave-2" />
                        <div className="waves wave-3" />
                    </a>
                </div>
                {/* End section */}
                <div className="section aximo-section-padding3 position-relative">
                    <div className="container">
                        <div className="aximo-section-title center clash-grotesk">
                            <h2>
                                Simple pricing plans that save you money
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="aximo-pricing-wrap wow fadeInUpX" data-wow-delay="0.1s">
                                    <div className="aximo-pricing-header">
                                        <img src="assets/images/v2/pricing-icon1.png" alt="" />
                                        <h3>Basic</h3>
                                    </div>
                                    <div className="aximo-pricing-price">
                                        <h2>$19.00</h2>
                                    </div>
                                    <div className="aximo-pricing-body">
                                        <ul>
                                            <li><img src="assets/images/v2/like.svg" alt="" />90 mins session duration</li>
                                            <li><img src="assets/images/v2/like.svg" alt="" />Multiple modes of networking</li>
                                            <li><img src="assets/images/v2/like.svg" alt="" />Live event engagement</li>
                                            <li><img src="assets/images/v2/like.svg" alt="" />Pre-set emails</li>
                                            <li><img src="assets/images/v2/like.svg" alt="" />Real-time data &amp; basic reports</li>
                                        </ul>
                                    </div>
                                    <a className="aximo-default-btn aximo-pricing-btn" href="pricing.html">Purchase It Now</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="aximo-pricing-wrap wow fadeInUpX" data-wow-delay="0.2s">
                                    <div className="aximo-pricing-header">
                                        <img src="assets/images/v2/pricing-icon2.png" alt="" />
                                        <h3>Startup</h3>
                                    </div>
                                    <div className="aximo-pricing-price">
                                        <h2>$29.99</h2>
                                    </div>
                                    <div className="aximo-pricing-body">
                                        <ul>
                                            <li><img src="assets/images/v2/like.svg" alt="" />Advanced networking modes</li>
                                            <li><img src="assets/images/v2/like.svg" alt="" />Unlimited session duration</li>
                                            <li><img src="assets/images/v2/like.svg" alt="" />Custom event branding</li>
                                            <li><img src="assets/images/v2/like.svg" alt="" />Advanced analytics report</li>
                                            <li><img src="assets/images/v2/like.svg" alt="" />Leaderboard &amp; gamification</li>
                                        </ul>
                                    </div>
                                    <a className="aximo-default-btn aximo-pricing-btn active" href="pricing.html">Purchase It Now</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="aximo-pricing-wrap wow fadeInUpX" data-wow-delay="0.3s">
                                    <div className="aximo-pricing-header">
                                        <img src="assets/images/v2/pricing-icon3.png" alt="" />
                                        <h3>Enterprise</h3>
                                    </div>
                                    <div className="aximo-pricing-price">
                                        <h2>$49.99</h2>
                                    </div>
                                    <div className="aximo-pricing-body">
                                        <ul>
                                            <li><img src="assets/images/v2/like.svg" alt="" />Advanced networking modes</li>
                                            <li><img src="assets/images/v2/like.svg" alt="" />Dedicated account manager</li>
                                            <li><img src="assets/images/v2/like.svg" alt="" />3D event experiences</li>
                                            <li><img src="assets/images/v2/like.svg" alt="" />Mobile app &amp; website create</li>
                                            <li><img src="assets/images/v2/like.svg" alt="" />Personalization &amp; branding</li>
                                        </ul>
                                    </div>
                                    <a className="aximo-default-btn aximo-pricing-btn" href="pricing.html">Purchase It Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aximo-pricing-shape">
                        <img src="assets/images/v2/shape3.png" alt="" />
                    </div>
                </div>
                {/* End section */}
                <div className="bg-orange aximo-section-padding extra-side-margin">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="aximo-default-content clash-grotesk aximo-sticky">
                                    <h2>Appreciation from our loving clients</h2>
                                    <p>It's wonderful to hear that our clients appreciate our services! Client appreciation is valuable proof of the quality of our work.</p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="aximo-testimonial-column">
                                    <div className="aximo-testimonial-wrap aximo-testimonial-wrap2">
                                        <div className="aximo-testimonial-rating">
                                            <ul>
                                                <li><img src="assets/images/v2/star.svg" alt="" /></li>
                                                <li><img src="assets/images/v2/star.svg" alt="" /></li>
                                                <li><img src="assets/images/v2/star.svg" alt="" /></li>
                                                <li><img src="assets/images/v2/star.svg" alt="" /></li>
                                                <li><img src="assets/images/v2/star.svg" alt="" /></li>
                                            </ul>
                                        </div>
                                        <div className="aximo-testimonial-data">
                                            <p>"I am impressed with their innovative ideas and forward-thinking approach. They have helped us embrace digital transformation."</p>
                                        </div>
                                        <div className="aximo-testimonial-author">
                                            <div className="aximo-testimonial-author-thumb">
                                                <img src="assets/images/v1/t_thumb1.png" alt="" />
                                            </div>
                                            <div className="aximo-testimonial-author-data">
                                                <p>Smith Align <span>Businessman</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="aximo-testimonial-wrap aximo-testimonial-wrap2">
                                        <div className="aximo-testimonial-rating">
                                            <ul>
                                                <li><img src="assets/images/v2/star.svg" alt="" /></li>
                                                <li><img src="assets/images/v2/star.svg" alt="" /></li>
                                                <li><img src="assets/images/v2/star.svg" alt="" /></li>
                                                <li><img src="assets/images/v2/star.svg" alt="" /></li>
                                                <li><img src="assets/images/v2/star.svg" alt="" /></li>
                                            </ul>
                                        </div>
                                        <div className="aximo-testimonial-data">
                                            <p>"Aximo has been a game-changer for our startup. Their team guided us through the development of a custom software solution perfectly suited us."</p>
                                        </div>
                                        <div className="aximo-testimonial-author">
                                            <div className="aximo-testimonial-author-thumb">
                                                <img src="assets/images/v1/t_thumb2.png" alt="" />
                                            </div>
                                            <div className="aximo-testimonial-author-data">
                                                <p> Willium Joe <span>VP of Marketing</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="aximo-testimonial-wrap aximo-testimonial-wrap2">
                                        <div className="aximo-testimonial-rating">
                                            <ul>
                                                <li><img src="assets/images/v2/star.svg" alt="" /></li>
                                                <li><img src="assets/images/v2/star.svg" alt="" /></li>
                                                <li><img src="assets/images/v2/star.svg" alt="" /></li>
                                                <li><img src="assets/images/v2/star.svg" alt="" /></li>
                                                <li><img src="assets/images/v2/star.svg" alt="" /></li>
                                            </ul>
                                        </div>
                                        <div className="aximo-testimonial-data">
                                            <p>"Their ability to understand our unique needs and provide tailored solutions. Their team is friendly, approachable &amp; always ready to go the extra mile."</p>
                                        </div>
                                        <div className="aximo-testimonial-author">
                                            <div className="aximo-testimonial-author-thumb">
                                                <img src="assets/images/v1/t_thumb3.png" alt="" />
                                            </div>
                                            <div className="aximo-testimonial-author-data">
                                                <p>Adrew Maslo <span>Head of X company</span></p>
                                            </div>
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
                        <div className="aximo-section-title center clash-grotesk">
                            <h2>
                                Ask us if you have doubts or questions
                            </h2>
                        </div>
                        <div className="aximo-accordion-wrap aximo-accordion-wrap2" id="aximo-accordion">
                            <div className="aximo-accordion-column wow fadeInUpX" data-wow-delay=".1s">
                                <div className="aximo-accordion-item open">
                                    <div className="aximo-accordion-header">
                                        <h3>What is vision for the future?</h3>
                                        <div className="aximo-accordion-icon active">
                                            <i className="icon-minus" />
                                        </div>
                                        <div className="aximo-accordion-icon inactive">
                                            <i className="icon-plus" />
                                        </div>
                                    </div>
                                    <div className="aximo-accordion-body">
                                        <p>Our vision is describe your long-term vision or goals. We're committed to explain how your company plans.</p>
                                    </div>
                                </div>
                                <div className="aximo-accordion-item">
                                    <div className="aximo-accordion-header">
                                        <h3>Do you offer free resources?</h3>
                                        <div className="aximo-accordion-icon active">
                                            <i className="icon-minus" />
                                        </div>
                                        <div className="aximo-accordion-icon inactive">
                                            <i className="icon-plus" />
                                        </div>
                                    </div>
                                    <div className="aximo-accordion-body">
                                        <p>Yes, we offer a range of free resources. Check out our [resources page for more information.</p>
                                    </div>
                                </div>
                                <div className="aximo-accordion-item">
                                    <div className="aximo-accordion-header">
                                        <h3>Can help to find investors?</h3>
                                        <div className="aximo-accordion-icon active">
                                            <i className="icon-minus" />
                                        </div>
                                        <div className="aximo-accordion-icon inactive">
                                            <i className="icon-plus" />
                                        </div>
                                    </div>
                                    <div className="aximo-accordion-body">
                                        <p>Yes, we have a strong network of investors and can facilitate introductions. Our expertise in fundraising.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="aximo-accordion-column wow fadeInUpX" data-wow-delay="0.2s">
                                <div className="aximo-accordion-item">
                                    <div className="aximo-accordion-header">
                                        <h3>Is Aximo open to collaborations?</h3>
                                        <div className="aximo-accordion-icon active">
                                            <i className="icon-minus" />
                                        </div>
                                        <div className="aximo-accordion-icon inactive">
                                            <i className="icon-plus" />
                                        </div>
                                    </div>
                                    <div className="aximo-accordion-body">
                                        <p>Absolutely! We're always open to exploring partnership opportunities that align with our mission and benefit both.</p>
                                    </div>
                                </div>
                                <div className="aximo-accordion-item">
                                    <div className="aximo-accordion-header">
                                        <h3>How does pricing work?</h3>
                                        <div className="aximo-accordion-icon active">
                                            <i className="icon-minus" />
                                        </div>
                                        <div className="aximo-accordion-icon inactive">
                                            <i className="icon-plus" />
                                        </div>
                                    </div>
                                    <div className="aximo-accordion-body">
                                        <p>Our pricing model, whether it's subscription-based, equity-based, or project-based.</p>
                                    </div>
                                </div>
                                <div className="aximo-accordion-item">
                                    <div className="aximo-accordion-header">
                                        <h3>How can I get in touch with Aximo?</h3>
                                        <div className="aximo-accordion-icon active">
                                            <i className="icon-minus" />
                                        </div>
                                        <div className="aximo-accordion-icon inactive">
                                            <i className="icon-plus" />
                                        </div>
                                    </div>
                                    <div className="aximo-accordion-body">
                                        <p>By adopting and implementing strategies, we not only help survive but also thrive in the face of uncertainty.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End section */}
                <div className="aximo-cta-section aximo-section-padding extra-side-margin position-relative">
                    <div className="container">
                        <div className="aximo-cta-wrap">
                            <h2>
                                Join us on your path to future success
                            </h2>
                            <a className="aximo-default-btn wow fadeInUpX" data-wow-delay="0s" href="contact-us.html">
                                <span className="aximo-label-up">Contact Us</span>
                                <span className="aximo-label-up">Contact Us</span>
                            </a>
                        </div>
                    </div>
                    <div className="aximo-cta-shape1">
                        <img src="assets/images/v2/shape4.png" alt="" />
                    </div>
                    <div className="aximo-cta-shape2">
                        <img src="assets/images/v2/star.png" alt="" />
                    </div>
                </div>
                {/* End section */}
            </div>

            {/* Footer  */}
            <footer className="aximo-footer-section2" style={{ backgroundImage: 'url(assets/images/v2/footer-bg.png)' }}>
                <div className="container">
                    <div className="aximo-footer-top aximo-section-padding">
                        <div className="row">
                            <div className="col-xl-4 col-lg-12">
                                <div className="aximo-footer-textarea">
                                    <a href>
                                        <img src="assets/images/logo/logo-dark.svg" alt="" />
                                    </a>
                                    <p>We are a branding agency that digitally works to help companies grow. We have a successful track record of working with various organizations.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4">
                                <div className="aximo-footer-menu extar-margin">
                                    <div className="aximo-footer-title">
                                        <p>Special Links</p>
                                    </div>
                                    <ul>
                                        <li><a href>About us</a></li>
                                        <li><a href>Our services</a></li>
                                        <li><a href>Portfolio</a></li>
                                        <li><a href>Blogs</a></li>
                                        <li><a href>Premium member</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4">
                                <div className="aximo-footer-menu">
                                    <div className="aximo-footer-title">
                                        <p>Special Links</p>
                                    </div>
                                    <ul>
                                        <li><a href>About us</a></li>
                                        <li><a href>Our services</a></li>
                                        <li><a href>Portfolio</a></li>
                                        <li><a href>Blogs</a></li>
                                        <li><a href>Premium member</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4">
                                <div className="aximo-subscription">
                                    <div className="aximo-footer-title">
                                        <p>Special Links</p>
                                    </div>
                                    <form action="#">
                                        <input type="email" placeholder="Email Address" />
                                        <button id="aximo-subscription-btn" type="submit">
                                            <span className="aximo-label-up">Subscribe</span>
                                            <span className="aximo-label-up">Subscribe</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aximo-footer-bottom two">
                        <div className="row">
                            <div className="col-lg-6 order-lg-2">
                                <div className="aximo-social-icon2 right">
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
                            </div>
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="aximo-copywright two">
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

export default Home02
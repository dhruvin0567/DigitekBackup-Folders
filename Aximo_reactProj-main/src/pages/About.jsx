import React from 'react'
import Header from './Header'

function AboutUs() {


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
          <h1 className="post__title">About Us</h1>
          <nav className="breadcrumbs">
            <ul>
              <li><a href="/">Home</a></li>
              <li aria-current="page"> About Us</li>
            </ul>
          </nav>
        </div>
      </div>
      {/* End breadcrumb */}

      <div className="section aximo-section-padding">
        <div id="aximo-counter" />
        <div className="container">
          <div className="aximo-section-title">
            <div className="row">
              <div className="col-lg-7">
                <h2>
                  <span className="aximo-title-animation" style={getStyles()}>
                    We make your
                    <span className="aximo-title-icon">
                      <img src="assets/images/v1/star2.png" alt="Star Icon" />

                    </span>
                  </span>
                  business stand out
                </h2>
              </div>
              <div className="col-lg-4 offset-lg-1 d-flex align-items-center">
                <p>We work closely with our clients to know their objectives, target audience, unique needs, and practical
                  design solutions.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="aximo-video-wrap wow fadeInUpX" data-wow-delay="0.1s">
                <img src="assets/images/v1/video-bg.png" alt="Video Background" />


                <a className="aximo-video-popup video-init" href="https://www.youtube.com/watch?v=Vx2aLNgGoAE">
                  <img src="assets/images/v1/play-btn.svg" alt="Play Button" />


                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="aximo-counter-wrap">
                <div className="aximo-counter-data">
                  <h2 className="aximo-counter-number"><span data-percentage={15} className="aximo-counter" />+</h2>
                  <p>Years of experience</p>
                </div>
                <div className="aximo-counter-data">
                  <h2 className="aximo-counter-number"><span data-percentage={120} className="aximo-counter" />k</h2>
                  <p>Successful projects</p>
                </div>
                <div className="aximo-counter-data">
                  <h2 className="aximo-counter-number"><span data-percentage={100} className="aximo-counter" />%</h2>
                  <p>Client satisfaction rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End section */}

      <div className="section aximo-section-padding6">
        <div className="container">
          <div className="aximo-section-title center title-description">
            <h2>
              <span className="aximo-title-animation">
                We think our story is
                <span className="aximo-title-icon">
                  <img src="assets/images/v1/star2.png" alt="Star Icon" />
                </span>
              </span>
              worth sharing with you
            </h2>
            <p>Established in 2008, we began as a small but ambitious team. We understood the importance of creative and
              tech-savvy solutions to help businesses succeed in the ever-changing digital landscape.</p>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="aximo-story-thumb wow fadeInUpX" data-wow-delay="0.1s">
                <img src="assets/images/about/story1.png" alt="story1" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="aximo-story-thumb wow fadeInUpX" data-wow-delay="0.2s">
                <img src="assets/images/about/story2.png" alt="story2" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="aximo-story-thumb wow fadeInUpX" data-wow-delay="0.3s">
                <img src="assets/images/about/story3.png" alt="story3" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="aximo-story-thumb wow fadeInUpX" data-wow-delay="0.4s">
                <img src="assets/images/about/story4.png" alt="story4" />
              </div>
            </div>
          </div>
          <div className="aximo-story-content">
            <div className="row">
              <div className="col-lg-6">
                <h3>Our core vision</h3>
                <p>Empowering businesses to create impactful and visually stunning brand experiences that captivate
                  audiences and drive success in the digital age. </p>
                <p>Our team consists of experienced designers, developers. We have a wide variety of skills and backgrounds,
                  allowing us to tackle projects of all sizes and complexities. We believe in the power of imagination and
                  innovation.</p>
              </div>
              <div className="col-lg-6">
                <h3>Our main mission</h3>
                <p>Our mission is to collaborate with businesses of all sizes, from startups to established brands, to
                  provide innovative and creative design solutions. </p>
                <p>We are committed to creating designs that inspire, connect &amp; our clients in the marketplace. Our focus is
                  on understanding. Our clients' unique needs and delivery designs that not only meet but exceed their
                  expectations.</p>
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
                <img src="assets/images/v1/star3.png" alt="Star Icon" />

              </div>
            </div>
            <div className="swiper-slide">
              <div className="aximo-auto-slider-item">
                <h3>Let's create new experiences</h3>
                <img src="assets/images/v1/star3.png" alt="Star Icon" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="aximo-auto-slider-item">
                <h3>Let's create new experiences</h3>
                <img src="assets/images/v1/star3.png" alt="Star Icon" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="aximo-auto-slider-item">
                <h3>Let's create new experiences</h3>
                <img src="assets/images/v1/star3.png" alt="Star Icon" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="aximo-auto-slider-item">
                <h3>Let's create new experiences</h3>
                <img src="assets/images/v1/star3.png" alt="Star Icon" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="aximo-auto-slider-item">
                <h3>Let's create new experiences</h3>
                <img src="assets/images/v1/star3.png" alt="Star Icon" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="aximo-auto-slider-item">
                <h3>Let's create new experiences</h3>
                <img src="assets/images/v1/star3.png" alt="Star Icon" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="aximo-auto-slider-item">
                <h3>Let's create new experiences</h3>
                <img src="assets/images/v1/star3.png" alt="Star Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End section */}

      <div className="section aximo-section-padding3">
        <div className="container">
          <div className="aximo-section-title center">
            <h2>
              We have a team of
              <span className="aximo-title-animation">
                creative people
                <span className="aximo-title-icon">
                  <img src="assets/images/v1/star2.png" alt="Star Icon" />

                </span>
              </span>
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0s">
                <div className="aximo-team-thumb">
                  <img src="assets/images/team/team1.png" alt="Team Icon" />
                  <div className="aximo-social-icon team-social">
                    <ul>
                      <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                          Twitter
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
                <div className="aximo-team-data">
                  <a href="single-team.html">
                    <h3>Andrew Mark</h3>
                  </a>
                  <p>CEO &amp; Founder</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.1s">
                <div className="aximo-team-thumb">
                  <img src="assets/images/team/team2.png" alt="Team Icon" />
                  <div className="aximo-social-icon team-social">
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
                <div className="aximo-team-data">
                  <a href="single-team.html">
                    <h3>Jack Taylor</h3>
                  </a>
                  <p>Senior Designer</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.2s">
                <div className="aximo-team-thumb">
                  <img src="assets/images/team/team3.png" alt="Team Icon" />
                  <div className="aximo-social-icon team-social">
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
                <div className="aximo-team-data">
                  <a href="single-team.html">
                    <h3>Martine Joy</h3>
                  </a>
                  <p>Project Manager</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.3s">
                <div className="aximo-team-thumb">
                  <img src="assets/images/team/team4.png" alt="Team Icon" />
                  <div className="aximo-social-icon team-social">
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
                <div className="aximo-team-data">
                  <a href="single-team.html">
                    <h3>Adam Straw</h3>
                  </a>
                  <p>Web Developer</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.4s">
                <div className="aximo-team-thumb">
                  <img src="assets/images/team/team5.png" alt="Team Icon" />
                  <div className="aximo-social-icon team-social">
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
                <div className="aximo-team-data">
                  <a href="single-team.html">
                    <h3>William Jack</h3>
                  </a>
                  <p>Creative Director</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.5s">
                <div className="aximo-team-thumb">
                  <img src="assets/images/team/team6.png" alt="Team Icon" />
                  <div className="aximo-social-icon team-social">
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
                <div className="aximo-team-data">
                  <a href="single-team.html">
                    <h3>Alex Tom</h3>
                  </a>
                  <p>UI/UX Designer</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.6s">
                <div className="aximo-team-thumb">
                  <img src="assets/images/team/team7.png" alt="Team Icon" />
                  <div className="aximo-social-icon team-social">
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
                <div className="aximo-team-data">
                  <a href="single-team.html">
                    <h3>Robin Lesser</h3>
                  </a>
                  <p>Chief Executive Officer</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.7s">
                <div className="aximo-team-thumb">
                  <img src="assets/images/team/team8.png" alt="Team Icon" />
                  <div className="aximo-social-icon team-social">
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
                <div className="aximo-team-data">
                  <a href="single-team.html">
                    <h3>Sheikh David</h3>
                  </a>
                  <p>HR Director</p>
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

export default AboutUs
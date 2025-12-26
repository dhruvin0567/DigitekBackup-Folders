import React from 'react'

function Signup() {
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

            <div className="aximo-logo-section">
                <div className="container">
                    <a href="/">
                        <img src="assets/images/logo/logo-white.svg" alt="" />
                    </a>
                </div>
            </div>
            {/* end */}

            <div className="section aximo-section-padding">
                <div className="container">
                    <div className="aximo-account-title">
                        <h2>
                            <span className="aximo-title-animation">
                                Create Account
                                <span className="aximo-title-icon">
                                    <img src="assets/images/v1/star2.png" alt="" />
                                </span>
                            </span>
                        </h2>
                    </div>
                    <div className="aximo-account-wrap wow fadeInUpX" data-wow-delay="0.1s">
                        <form action="#">
                            <div className="aximo-account-field">
                                <label>Enter your full name</label>
                                <input type="text" placeholder="Adam Smith" />
                            </div>
                            <div className="aximo-account-field">
                                <label>Enter email address</label>
                                <input type="email" placeholder="example@gmail.com" />
                            </div>
                            <div className="aximo-account-field">
                                <label>Enter Password</label>
                                <input type="password" placeholder="Enter Password" />
                            </div>
                            <div className="aximo-account-checkbox">
                                <input type="checkbox" id="check" />
                                <label htmlFor="check">I have read and accept the <a href>Terms &amp; Conditions</a> and <a href> Privacy Policy</a> </label>
                            </div>
                            <button id="aximo-account-btn" type="submit">Create account</button>
                            <div className="aximo-or">
                                <p>or</p>
                            </div>
                            <a href="#" className="aximo-connect-login">
                                <img src="assets/images/icon/google.svg" alt="" />
                                Sign up with Google
                            </a>
                            <a href="#" className="aximo-connect-login">
                                <img src="assets/images/icon/facebook.svg" alt="" />
                                Sign up with Facebook
                            </a>
                            <div className="aximo-account-bottom">
                                <p>Already have an account? <a href="/Signin">Log in here</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup
import React, { useState, useEffect } from 'react';

function Header() {




    const [submenuActive, setSubmenuActive] = useState(null);
    const [submenuStack, setSubmenuStack] = useState([]);
    const [submenuTitles, setSubmenuTitles] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Track whether the menu has been opened (to avoid displaying go-back on first load)
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Toggle main menu
    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    // Show submenu logic
    const showSubMenu = (submenuId, title) => {
        setSubmenuStack(prevStack => {
            if (prevStack.includes(submenuId)) {
                // If submenu already in stack, remove it (close it)
                return prevStack.filter(item => item !== submenuId);
            } else {
                // Add submenu to the stack (open it)
                return [...prevStack, submenuId];
            }
        });

        setSubmenuTitles(prevTitles => {
            // Ensure titles update correctly with the current stack
            return prevTitles.includes(title)
                ? prevTitles.filter(item => item !== title)  // Remove if already exists
                : [...prevTitles, title]; // Add title if not present
        });

        // Set the active submenu
        setSubmenuActive(submenuId);

        // Mark that the menu has been opened at least once
        setIsMenuOpened(true);
    };

    // Go back to the previous submenu
    const goBack = () => {
        const newSubmenuStack = [...submenuStack];
        const newSubmenuTitles = [...submenuTitles];

        // Remove last submenu from stack
        newSubmenuStack.pop();
        newSubmenuTitles.pop();

        setSubmenuStack(newSubmenuStack);
        setSubmenuTitles(newSubmenuTitles);

        // Set the active submenu, or null if there are no submenus left
        if (newSubmenuStack.length > 0) {
            setSubmenuActive(newSubmenuStack[newSubmenuStack.length - 1]);
        } else {
            setSubmenuActive(null);
        }
    };

    // Close menu if window size is greater than 991px
    useEffect(() => {
        if (windowWidth > 991 && isMenuOpen) {
            toggleMenu();
        }
    }, [windowWidth, isMenuOpen]);  // Added isMenuOpen as dependency for better control


    useEffect(() => {
        // Function to close the menu if clicked outside of it
        const handleClickOutside = (event) => {
            // Check if the click is outside the menu or the overlay
            if (
                isMenuOpen && // If the menu is open
                !event.target.closest('.menu-block') && // If the click is outside the menu
                !event.target.closest('.menu-overlay') // If the click is outside the overlay
            ) {
                toggleMenu(); // Close the menu
            }
        };

        // Add event listener for click events
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the event listener when the component is unmounted or menu is closed
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);






    return (
        <div>



            <header className="site-header aximo-header-section aximo-header1 dark-bg" id="sticky-menu">
                <div className="container">
                    <nav className="navbar site-navbar">
                        {/* Brand Logo*/}
                        <div className="brand-logo">
                            <a href="/">
                                <img src="assets/images/logo/logo-white.svg" alt="" className="light-version-logo" />
                            </a>
                        </div>
                        <div className="menu-block-wrapper">
                            <div className="menu-overlay" onClick={toggleMenu} />
                            <nav className={`menu-block ${isMenuOpen ? 'active' : ''}`} id="append-menu-header">

                                <div className={`mobile-menu-head ${isMenuOpen ? 'active' : ''}`}>
                                    {/* Conditionally render the Go Back button */}
                                    {submenuStack.length > 0 && (
                                        <div className="go-back" onClick={goBack}>
                                            <i className="fa fa-angle-left" />
                                        </div>
                                    )}

                                    {/* Conditionally render the current menu title */}
                                    <div className="current-menu-title">
                                        {submenuTitles.length > 0 ? submenuTitles[submenuTitles.length - 1] : ' '}
                                    </div>

                                    {/* Close button for the mobile menu */}
                                    <div className="mobile-menu-close" onClick={toggleMenu}> × </div>
                                </div>


                                <ul className={`site-menu-main ${isMenuOpen ? 'active' : ''}`}>

                                    <li className="nav-item nav-item-has-children" onClick={() => showSubMenu('submenu1', 'Demo')}>
                                        <a href=" #" className="nav-link-item drop-trigger">
                                            Demo <i className="fas fa-angle-down" />
                                        </a>

                                        {/* Submenu */}
                                        <ul className={`sub-menu ${submenuStack.includes('submenu1') ? 'active' : ''}`} id="submenu-1">
                                            <li className="sub-menu--item">
                                                <a href=" #">
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
                                                    <span className="menu-item-text">Advertising Agency</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/About" className="nav-link-item">About Us</a>
                                    </li>

                                    <li className="nav-item nav-item-has-children" onClick={(e) => {
                                        // Prevent go back if clicking a submenu (this avoids the goBack logic being triggered)
                                        e.stopPropagation();
                                        showSubMenu('submenu2', 'Pages');
                                    }}>
                                        <a href=" #" className="nav-link-item drop-trigger" aria-expanded={submenuActive === 'submenu2' ? 'true' : 'false'} aria-controls="submenu-2">
                                            Pages <i className="fas fa-angle-down" />
                                        </a>
                                        {/* Submenu */}
                                        <ul className={`sub-menu ${submenuStack.includes('submenu2') ? 'active' : ''}`} id="submenu-2">
                                            <li className="sub-menu--item">
                                                <a href="/About">
                                                    <span className="menu-item-text">About Us</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="/Pricing">
                                                    <span className="menu-item-text">Pricing</span>
                                                </a>
                                            </li>
                                            {/* Nested Submenu 1: Blog */}
                                            <li className="sub-menu--item nav-item-has-children" onClick={(e) => {
                                                e.stopPropagation();
                                                showSubMenu('submenu3', 'Blog');
                                            }}>
                                                <a href=" #" className="drop-trigger">
                                                    Blog <i className="fas fa-angle-down" />
                                                </a>
                                                <ul className={`sub-menu shape-none ${submenuStack.includes('submenu3') ? 'active' : ''}`} id="submenu-3">
                                                    <li className="sub-menu--item">
                                                        <a href="/Blog">
                                                            <span className="menu-item-text">Our Blog</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="/Bloggrid">
                                                            <span className="menu-item-text">Blog Grid</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="/Blog/Details">
                                                            <span className="menu-item-text">Blog Details</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            {/* Nested Submenu 2: Service */}
                                            <li className="sub-menu--item nav-item-has-children" onClick={(e) => {
                                                e.stopPropagation();
                                                showSubMenu('submenu4', 'Service');
                                            }}>
                                                <a href=" #" className="drop-trigger">
                                                    Service <i className="fas fa-angle-down" />
                                                </a>
                                                <ul className={`sub-menu shape-none ${submenuStack.includes('submenu4') ? 'active' : ''}`} id="submenu-4">
                                                    <li className="sub-menu--item">
                                                        <a href="/Services">
                                                            <span className="menu-item-text">Services</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="/Services/Details">
                                                            <span className="menu-item-text">Service Details</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            {/* Nested Submenu 3: Team */}
                                            <li className="sub-menu--item nav-item-has-children" onClick={(e) => {
                                                e.stopPropagation();
                                                showSubMenu('submenu5', 'Team');
                                            }}>
                                                <a href=" #" className="drop-trigger">
                                                    Team <i className="fas fa-angle-down" />
                                                </a>
                                                <ul className={`sub-menu shape-none ${submenuStack.includes('submenu5') ? 'active' : ''}`} id="submenu-5">
                                                    <li className="sub-menu--item">
                                                        <a href="/Team">
                                                            <span className="menu-item-text">Team</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="/Team/Details">
                                                            <span className="menu-item-text">Team Details</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            {/* Nested Submenu 4: Portfolio */}
                                            <li className="sub-menu--item nav-item-has-children" onClick={(e) => {
                                                e.stopPropagation();
                                                showSubMenu('submenu6', 'Portfolio');
                                            }}>
                                                <a href=" #" className="drop-trigger">
                                                    Portfolio <i className="fas fa-angle-down" />
                                                </a>
                                                <ul className={`sub-menu shape-none ${submenuStack.includes('submenu6') ? 'active' : ''}`} id="submenu-6">
                                                    <li className="sub-menu--item">
                                                        <a href="/Portfolio/OneColumn">
                                                            <span className="menu-item-text">Portfolio One Column</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="/Portfolio/TwoColumn">
                                                            <span className="menu-item-text">Portfolio Two Column</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="/Singleportfolio">
                                                            <span className="menu-item-text">Single Portfolio</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            {/* Nested Submenu 5: Utility */}
                                            <li className="sub-menu--item nav-item-has-children" onClick={(e) => {
                                                e.stopPropagation();
                                                showSubMenu('submenu7', 'Utility');
                                            }}>
                                                <a href=" #" className="drop-trigger">
                                                    Utility <i className="fas fa-angle-down" />
                                                </a>
                                                <ul className={`sub-menu shape-none ${submenuStack.includes('submenu7') ? 'active' : ''}`} id="submenu-7">
                                                    <li className="sub-menu--item">
                                                        <a href="/Faq">
                                                            <span className="menu-item-text">FAQ</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="/Error404">
                                                            <span className="menu-item-text">Error 404</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="/Testimonial">
                                                            <span className="menu-item-text">Testimonial</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="/ComingSoon">
                                                            <span className="menu-item-text">Coming Soon</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            {/* Nested Submenu 6: Account */}
                                            <li className="sub-menu--item nav-item-has-children" onClick={(e) => {
                                                e.stopPropagation();
                                                showSubMenu('submenu8', 'Account');
                                            }}>
                                                <a href=" #" className="drop-trigger">
                                                    Account <i className="fas fa-angle-down" />
                                                </a>
                                                <ul className={`sub-menu shape-none ${submenuStack.includes('submenu8') ? 'active' : ''}`} id="submenu-8">
                                                    <li className="sub-menu--item">
                                                        <a href="/Signup">
                                                            <span className="menu-item-text">Sign Up</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="/Signin">
                                                            <span className="menu-item-text">Sign In</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="/ResetPassword">
                                                            <span className="menu-item-text">Reset Password</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>


                                    <li className="nav-item nav-item-has-children" onClick={() => showSubMenu('submenu9', 'Blog')}>
                                        <a href=" #" className="nav-link-item drop-trigger">Blog <i className="fas fa-angle-down" /></a>

                                        {/* Submenu */}
                                        <ul className={`sub-menu ${submenuStack.includes('submenu9') ? 'active' : ''}`} id="submenu-9">
                                            <li className="sub-menu--item">
                                                <a href="/Blog">
                                                    <span className="menu-item-text">blog</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="/Bloggrid">
                                                    <span className="menu-item-text">Blog grid</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="single-/Blog">
                                                    <span className="menu-item-text">blog Details</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/Contact" className="nav-link-item">Contact Us</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
                            <a className="aximo-default-btn pill aximo-header-btn" href="/Contact">
                                Contact Us
                            </a>
                        </div>
                        {/* mobile menu trigger */}
                        <div className="mobile-menu-trigger light" onClick={toggleMenu}>
                            <span />
                        </div>
                        {/*/.Mobile Menu Hamburger Ends*/}
                    </nav>
                </div>
            </header>
            {/*End landex - header - section-- >*/}





        </div>
    )
}

export default Header
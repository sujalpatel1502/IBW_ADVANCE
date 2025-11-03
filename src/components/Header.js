'use client';

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <style jsx>{`
        /* Override dark variable for header mobile view */
        :global(.navbar) {
          --dark: transparent !important;
        }
        
        @media (max-width: 991px) {
          :global(.navbar) {
            --dark: transparent !important;
          }
        }
      `}</style>
      <header>
        <nav className={`navbar mobile-sidenav navbar-sticky navbar-default validnavs nav-full-width navbar-fixed ${isClient && isSticky ? 'sticked' : ''}`}>
          <div className="container-full d-flex justify-content-between align-items-center">
            
            {/* Start Header Navigation */}
            <div className="col-xl-2 col-lg-3">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">
                  <img src="/logo-light.png" className="logo" alt="IBW Logo" />
                  <img src="/logo.png" className="logo-dark" alt="IBW Logo" />
                </a>
              </div>
            </div>
            {/* End Header Navigation */}

            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="col-xl-7 col-lg-6">
              <div className="collapse navbar-collapse" id="navbar-menu">
                <div className="left-info">
                  <p><strong>Contact</strong> <a href="mailto:info@instabizweb.com">info@instabizweb.com</a></p>
                </div>
                <div className="right-info">
                  <ul>
                    <li><a href="https://www.facebook.com/profile.php?id=61578562181866" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com/insta_biz_web/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://x.com/instabizweb" target="_blank" rel="noopener noreferrer"><img src="/icon/twitter.png" alt="Image Not Found" /></a></li>
                    <li><a href="https://www.linkedin.com/company/insta-biz-web/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="attr-right">
              {/* Start Atribute Navigation */}
              <div className="attr-nav flex">
                <ul>
                  <li className="side-menu">
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleMenu(); }}>
                      <strong>MENU </strong>
                      <div className="line">
                        <span className="bar-1"></span>
                        <span className="bar-2"></span>
                        <span className="bar-3"></span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              {/* End Atribute Navigation */}

              <div className="col-lg-2">
                {/* Start Side Menu */}
                <div className={`side ${isMenuOpen ? 'on' : ''}`}>
                  <a href="#" className="close-side" onClick={(e) => { e.preventDefault(); closeMenu(); }}>
                    Close <i className="fas fa-times"></i>
                  </a>
                  <div className="widget">
                    <div className="logo">
                      <a href="/"><img src="/logo-light.png" alt="IBW Logo" /></a>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-7 col-lg-7">
                        <div className="side-navbar-inner">
                          <div className="simple-menu">
                            <ul className="simple-menu-list">
                              <li>
                                <a href="/">Home</a>
                              </li>
                              <li><a href="/services">Services</a></li>
                              <li><a href="/about-us">About Us</a></li>
                              <li><a href="/portfolio">Portfolio</a></li>
                              <li><a href="/blogs">Blogs</a></li>
                              <li><a href="/contact-us">Contact</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 offset-xl-1 col-lg-4 offset-lg-1">
                        <div className="side-widgets">
                          <div className="widget address">
                            <div>
                              <ul>
                                <li>
                                  <div className="content">
                                    <p>Address</p> 
                                    <strong>Ahmedabad Gujarat, India - 382424</strong>
                                  </div>
                                </li>
                                <li>
                                  <div className="content">
                                    <p>Email</p> 
                                    <strong>info@instabizweb.com</strong>
                                  </div>
                                </li>
                                <li>
                                  <div className="content">
                                    <p>Contact</p> 
                                    <strong>+91 98981 24987</strong>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="widget newsletter">
                            <h4 className="title">Get Subscribed!</h4>
                            <form action="#">
                              <div className="input-group stylish-input-group">
                                <input type="email" placeholder="Enter your e-mail" className="form-control" name="email" />
                                <span className="input-group-addon">
                                  <button type="submit">
                                    <i className="fas fa-arrow-right"></i>
                                  </button>  
                                </span>
                              </div>
                            </form>
                          </div>
                          <div className="widget social">
                            <ul className="link">
                              <li><a href="https://www.facebook.com/profile.php?id=61578562181866" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                              <li><a href="https://www.instagram.com/insta_biz_web/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                              <li><a href="https://x.com/instabizweb" target="_blank" rel="noopener noreferrer"><img src="/icon/twitter.png" alt="Image Not Found" /></a></li>
                              <li><a href="https://www.linkedin.com/company/insta-biz-web/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Side Menu */}
              </div>
            </div>
            {/* Main Nav */}

          </div>  
          {/* Overlay screen for menu */}
          <div className={`overlay-screen ${isMenuOpen ? 'opened' : ''}`} onClick={closeMenu}></div>
          {/* End Overlay screen for menu */} 
        </nav>
        {/* End Navigation */}
      </header>
    </>
  );
};

export default Header;

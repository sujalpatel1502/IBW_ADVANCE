'use client';

import React from 'react';

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`side ${isOpen ? 'on' : ''}`}>
      
      {/* Close Button */}
      <a
        href="#"
        className="close-side"
        title="Close Menu"
        onClick={(e) => {
          e.preventDefault();
          onClose();
        }}
      >
        Close <i className="fas fa-times"></i>
      </a>

      {/* Logo */}
      <div className="widget">
        <div className="logo">
          <a href="/" title="Instabiz Web Home">
            <img
              src="/assets/logo.png"
              alt="Instabiz Web Logo"
              title="Instabiz Web Logo"
            />
          </a>
        </div>
      </div>

      <div className="container">
        <div className="row">

          {/* Menu */}
          <div className="col-xl-7 col-lg-7">
            <div className="side-navbar-inner">
              <div className="simple-menu">
                <ul className="simple-menu-list">

                  <li>
                    <a href="/" title="Home">Home</a>
                    <i className="fas fa-plus"></i>
                    <ul className="sub-menu">
                      <li><a href="/" title="Home Main">Home Main</a></li>
                      <li><a href="/modern-agency" title="Modern Agency">Modern Agency</a></li>
                      <li><a href="/creative-agency" title="Creative Agency">Creative Agency</a></li>
                      <li><a href="/startup-agency" title="Startup Agency">Startup Agency</a></li>
                      <li><a href="/digital-agency" title="Digital Agency">Digital Agency</a></li>
                      <li><a href="/modern-startup" title="Modern Startup">Modern Startup</a></li>
                      <li><a href="/design-studio" title="Design Studio">Design Studio</a></li>

                      <li className="menu-dropdown">
                        <a href="#" title="Light Version">Light Version</a>
                        <i className="fas fa-plus"></i>
                        <ul className="sub-menu">
                          <li><a href="/light-home" title="Light Home Main">Home Main</a></li>
                          <li><a href="/light-modern" title="Light Modern Agency">Modern Agency</a></li>
                          <li><a href="/light-creative" title="Light Creative Agency">Creative Agency</a></li>
                          <li><a href="/light-startup" title="Light Startup Agency">Startup Agency</a></li>
                        </ul>
                      </li>

                    </ul>
                  </li>

                  <li><a href="/portfolio" title="Portfolio">Portfolio</a></li>
                  <li><a href="/services" title="Services">Services</a></li>
                  <li><a href="/about-us" title="About Instabiz Web">About</a></li>
                  <li><a href="/contact-us" title="Contact Instabiz Web">Contact</a></li>

                </ul>
              </div>
            </div>
          </div>

          {/* Side Widgets */}
          <div className="col-xl-4 offset-xl-1 col-lg-4 offset-lg-1">
            <div className="side-widgets">

              {/* Address */}
              <div className="widget address">
                <ul>
                  <li>
                    <div className="content">
                      <p>Address</p>
                      <strong>Ahmedabad, Gujarat, India - 382424</strong>
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

              {/* Newsletter */}
              <div className="widget newsletter">
                <h4 className="title">Get Subscribed!</h4>
                <form action="#">
                  <div className="input-group stylish-input-group">
                    <input
                      type="email"
                      placeholder="Enter your e-mail"
                      className="form-control"
                      name="email"
                      title="Enter your email"
                    />
                    <span className="input-group-addon">
                      <button type="submit" title="Subscribe">
                        <i className="fas fa-arrow-right"></i>
                      </button>
                    </span>
                  </div>
                </form>
              </div>

              {/* Social Icons */}
              <div className="widget social">
                <ul className="link">
                  <li>
                    <a href="https://www.facebook.com/instabizweb" target="_blank" rel="noopener noreferrer" title="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://x.com/instabizweb" target="_blank" rel="noopener noreferrer" title="Twitter">
                      <img src="/icon/twitter.png" alt="Twitter Icon" title="Twitter" />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/company/instabizweb" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#" title="Behance">
                      <i className="fab fa-behance"></i>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SideMenu;

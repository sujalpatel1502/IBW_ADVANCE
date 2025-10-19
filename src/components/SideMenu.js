'use client';

import React from 'react';

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`side ${isOpen ? 'on' : ''}`}>
      <a href="#" className="close-side" onClick={(e) => { e.preventDefault(); onClose(); }}>
        Close <i className="fas fa-times"></i>
      </a>
      <div className="widget">
        <div className="logo">
          <a href="/"><img src="/logo-light.png" alt="Logo" /></a>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="side-navbar-inner">
              <div className="simple-menu">
                <ul className="simple-menu-list">
                  <li>
                    <a href="#">Home </a>
                    <i className="fas fa-plus"></i>
                    <ul className="sub-menu">
                      <li><a href="/">Home Main</a></li>
                      <li><a href="/modern-agency">Modern Agency</a></li>
                      <li><a href="/creative-agency">Creative Agency</a></li>
                      <li><a href="/startup-agency">Startup Agency</a></li>
                      <li><a href="/digital-agency">Digital Agency</a></li>
                      <li><a href="/modern-startup">Modern Startup</a></li>
                      <li><a href="/design-studio">Design Studio</a></li>
                      <li className="menu-dropdown">
                        <a href="#">Light Version</a>
                        <i className="fas fa-plus"></i>
                        <ul className="sub-menu">
                          <li><a href="/light-home">Home Main</a></li>
                          <li><a href="/light-modern">Modern Agency</a></li>
                          <li><a href="/light-creative">Creative Agency</a></li>
                          <li><a href="/light-startup">Startup Agency</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="/portfolio">Portfolio</a></li>
                  <li><a href="/services">Services </a></li>
                  <li><a href="/about">About</a> </li>
                  <li><a href="/contact">Contact</a></li>
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
                        <strong>California, TX 70240</strong>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <p>Email</p> 
                        <strong>support@ibw.com</strong>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <p>Contact</p> 
                        <strong>+44-20-7328-4499</strong>
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
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><img src="/icon/twitter.png" alt="Image Not Found" /></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i className="fab fa-behance"></i></a></li>
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

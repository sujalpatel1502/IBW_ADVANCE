'use client';

import React, { useEffect } from 'react';
import { initNavigation } from '../../utils/navigation';
import { initMouseCursor } from '../../utils/mouseCursor';
import { initSmoothScroll } from '../../utils/smoothScroll';
import Header from '../../components/Header';
import FooterSection from '../../components/FooterSection';

const ContactUsPage = () => {
  useEffect(() => {
    initNavigation();
    initMouseCursor();
    initSmoothScroll();
    
    // Hide preloader when page loads
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        document.body.classList.add('loaded');
      }, 1000);
    }
  }, []);

  return (
    <div className="bg-dark">
      {/* Mouse Following Dot */}
      <div className="cursor"></div>
      
      {/* Preloader */}
      <div id="preloader">
        <div className="dixor-loader-wrap">
          <div className="dixor-loader-inner">
            <div className="dixor-loader">
              <span className="dixor-loader-item"></span>
              <span className="dixor-loader-item"></span>
              <span className="dixor-loader-item"></span>
              <span className="dixor-loader-item"></span>
              <span className="dixor-loader-item"></span>
              <span className="dixor-loader-item"></span>
              <span className="dixor-loader-item"></span>
              <span className="dixor-loader-item"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="smooth-scroll-container">
        {/* Header */}
        <Header />
        
        {/* Start Breadcrumb */}
        <div className="breadcrumb-area text-center" style={{backgroundImage: 'url(/shape/10.jpg)'}}>
          <div className="light-banner-active bg-gray bg-cover" style={{backgroundImage: 'url(/shape/6.jpg)'}}></div>
                <div className="mt-20 breadcrumb-content">
                  <h1>Get In Touch</h1>
          </div>
        </div>
        {/* End Breadcrumb */}

        {/* Start Contact Us */}
        <div className="contact-area relative">
          <div className="container">
            <div className="contact-style-one-items">
              <div className="row">
                <div className="col-tact-stye-one col-lg-4">
                  <div className="contact-style-one-info">
                    <ul className="contact-address">
                      <li>
                        <a className="phone-link" href="tel:+919876543210"><i className="fas fa-user-headset"></i> +91 98765 43210</a>
                      </li>
                      <li>
                        <div className="info">
                          <h4>Location</h4>
                          <p>
                            Insta Biz Web, IT Solutions Hub<br />Ahmedabad, Gujarat, India - 380001
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="info">
                          <h4>Official Email</h4>
                          <a href="mailto:info@instabizweb.com">info@instabizweb.com</a>
                        </div>
                      </li>
                      <li>
                        <div className="info">
                          <h4>Working Hours</h4>
                          <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                        </div>
                      </li>
                      <li>
                        <div className="info">
                          <ul className="social-link">
                            <li>
                              <a className="facebook" href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                              <a className="twitter" href="#" target="_blank"><img src="/icon/twitter-dark.png" alt="Image Not Found" /></a>
                            </li>
                            <li>
                              <a className="linkedin" href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-tact-stye-one col-lg-7 offset-lg-1">
                  <div className="contact-form-style-one">
                    <h4 className="sub-title">Have Questions?</h4>
                    <h2 className="title">Send us a Message</h2>
                    <form action="#" method="POST" className="contact-form contact-form">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input className="form-control" id="name" name="name" placeholder="Name" type="text" />
                            <span className="alert-error"></span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="form-control" id="email" name="email" placeholder="Email*" type="email" />
                            <span className="alert-error"></span>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" />
                            <span className="alert-error"></span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group comments">
                            <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About Project *"></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <button type="submit" name="submit" id="submit">
                            <i className="fa fa-paper-plane"></i> Get in Touch
                          </button>
                        </div>
                      </div>
                      {/* Alert Message */}
                      <div className="col-lg-12 alert-notification">
                        <div id="message" className="alert-msg"></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Contact */}

        {/* Start Map */}
        <div className="maps-area bg-gray overflow-hidden">
          <div className="google-maps">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.935195824757!2d72.5809!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
              width="100%" 
              height="450" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* End Map */}

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
};

export default ContactUsPage;

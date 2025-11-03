import React from 'react';

const FooterSection = () => {
  return (
    <footer>
      <div className="footer-box">
        <div className="container">
          <div className="f-items">
            <div className="row">
              {/* Single Item */}
              <div className="col-lg-6 footer-item about pr-120 pr-md-15 pr-xs-15">
                <div className="top">
                  <h2>Get Support?</h2>
                  <a className="quick-btn" href="mailto:info@instabizweb.com">
                    <i className="fas fa-long-arrow-right"></i>
                  </a>
                </div>
                <ul className="address-list">
                  <li>
                    <h4>Ahmedabad</h4>
                    <p>
                      Insta Biz Web, IT Solutions Hub, Gujarat, India - 380001
                    </p>
                  </li>
                  <li>
                    <h4>Mumbai</h4>
                    <p>
                      Business Center, Maharashtra, India - 400001
                    </p>
                  </li>
                </ul>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-lg-5 offset-lg-1 footer-item">
                <h4 className="widget-title">Useful Link</h4>
                <ul className="useful-link">
                  <li><a href="#about">About Us</a></li>
                  <li><a href="/portfolio">Portfolio</a></li>
                  <li><a href="/contact-us">Contact</a></li>
                  <li><a href="#faq">FAQS</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#terms">Term & Conditions</a></li>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#careers">Careers</a></li>
                  <li><a href="#help">Help Desk</a></li>
                  <li><a href="#profile">Profile</a></li>
                </ul>
                <form className="newsletter style-two" action="#">
                  <input type="email" placeholder="Your Email" className="form-control" name="email" />
                  <button type="submit">
                    <img src="/icon/arrow-right-two.png" alt="Image Not Found" />
                  </button>  
                </form>
              </div>
              {/* End Single Item */}
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ul className="footer-social">
                  <li><a href="https://www.facebook.com/profile.php?id=61578562181866" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://www.instagram.com/insta_biz_web/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="https://x.com/instabizweb" target="_blank" rel="noopener noreferrer"><img src="/icon/twitter.png" alt="Image Not Found" /></a></li>
                  <li><a href="https://www.linkedin.com/company/insta-biz-web/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
              <div className="col-lg-6 text-end">
                <p>
                  Copyright &copy; 2024 Insta Biz Web. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Footer Bottom */}
      </div>
    </footer>
  );
};

export default FooterSection;

import React from 'react';

const FooterSection = () => {
  return (
    <footer>
      {/* 🔥 Footer Schema (SEO Boost) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "InstaBiz Web",
            url: "https://www.instabizweb.com",
            logo: "https://www.instabizweb.com/assets/logo.png",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ahmedabad",
              addressRegion: "Gujarat",
              postalCode: "382424",
              addressCountry: "IN",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91-9898124987",
                contactType: "Customer Support",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"]
              }
            ],
            sameAs: [
              "https://www.facebook.com/profile.php?id=61578562181866",
              "https://www.instagram.com/insta_biz_web/",
              "https://x.com/instabizweb",
              "https://www.linkedin.com/company/insta-biz-web/"
            ]
          })
        }}
      />

      <div className="footer-box">
        <div className="container">
          <div className="f-items">
            <div className="row">

              {/* Support Block */}
              <div className="col-lg-6 footer-item about pr-120 pr-md-15 pr-xs-15">
                <div className="top">
                  <h2>Get Support?</h2>
                  <a 
                    className="quick-btn" 
                    href="mailto:info@instabizweb.com"
                    title="Email Support"
                  >
                    <i aria-hidden="true" className="fas fa-long-arrow-right"></i>
                  </a>
                </div>

                <ul className="address-list">
                  <li>
                    <h4 title="Instabiz Web Office Location">Ahmedabad</h4>
                    <p>
                      Insta Biz Web, Gujarat, India - 382424<br />
                      <a href="tel:+919898124987" title="Call Instabiz Web">
                        +91 98981 24987
                      </a>
                    </p>
                  </li>
                </ul>
              </div>

              {/* Useful Links */}
              <div className="col-lg-5 offset-lg-1 footer-item">
                <h4 className="widget-title">Useful Links</h4>

                <ul className="useful-link">
                  <li><a href="/about-us" title="About Instabiz Web">About Us</a></li>
                  <li><a href="/portfolio" title="Our Portfolio">Portfolio</a></li>
                  <li><a href="/services" title="Our Services">Services</a></li>
                  <li><a href="/blogs" title="Read Our Blogs">Blogs</a></li>
                  <li><a href="/contact-us" title="Contact Instabiz Web">Contact</a></li>
                  <li><a href="/privacy-policy" title="Privacy Policy">Privacy Policy</a></li>
                  <li><a href="/terms-and-conditions" title="Terms and Conditions">Terms & Conditions</a></li>
                  <li><a href="/refund-policy" title="Refund Policy">Refund Policy</a></li>
                </ul>

                {/* Newsletter */}
                <form className="newsletter style-two" action="#">
                  <label 
                    htmlFor="footerEmail"
                    className="visually-hidden"
                  >
                    Enter your email to subscribe
                  </label>

                  <input 
                    id="footerEmail"
                    type="email" 
                    placeholder="Your Email" 
                    className="form-control" 
                    name="email"
                  />

                  <button type="submit" title="Subscribe to Newsletter">
                    <img 
                      src="/icon/arrow-right-two.png" 
                      alt="Submit Button Icon" 
                      title="Subscribe"
                      loading="lazy"
                    />
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">

              {/* Social Links */}
              <div className="col-lg-6">
                <ul className="footer-social">

                  <li>
                    <a 
                      href="https://www.facebook.com/profile.php?id=61578562181866" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Facebook Page"
                      title="Follow us on Facebook"
                    >
                      <i aria-hidden="true" className="fab fa-facebook-f"></i>
                    </a>
                  </li>

                  <li>
                    <a 
                      href="https://www.instagram.com/insta_biz_web/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Instagram Page"
                      title="Follow us on Instagram"
                    >
                      <i aria-hidden="true" className="fab fa-instagram"></i>
                    </a>
                  </li>

                  <li>
                    <a 
                      href="https://x.com/instabizweb" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Twitter Profile"
                      title="Follow us on Twitter/X"
                    >
                      <img 
                        src="/icon/twitter.png" 
                        alt="Twitter Icon" 
                        title="Twitter"
                        loading="lazy"
                      />
                    </a>
                  </li>

                  <li>
                    <a 
                      href="https://www.linkedin.com/company/insta-biz-web/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Page"
                      title="Follow us on LinkedIn"
                    >
                      <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                    </a>
                  </li>

                </ul>
              </div>

              <div className="col-lg-6 text-end">
                <p>
                  © {new Date().getFullYear()} Insta Biz Web. All Rights Reserved.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;

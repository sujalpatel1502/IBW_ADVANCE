import React from 'react';

const ServicesSection = () => {
  return (
    <div className="services-style-six-area default-padding blurry-shape-left">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="service-style-six-info">
              <h4 className="sub-title">Services We Offer</h4>
              <h2 className="title split-text">Turn Information Into Actionable Insights</h2>
              <a href="/services" className="btn-circle mt-20">
                <div className="button-content">
                  <span><img src="/icon/arrow-long-right.png" alt="Image Not Found" /></span> <strong>All Services</strong>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-7">
            <div className="service-style-six-items item-move-top-items">
              <ul>
                <li className="item-move-top-item" style={{backgroundImage: 'url(/shape/5.png)'}}>
                  <div className="icon">
                    <img src="/icon/10.png" alt="Icon" />
                  </div>
                  <div className="details">
                    <div className="item-title">
                      <span>Marketing</span>
                      <h3><a href="/services">Social Media Marketing</a></h3>
                    </div>
                    <p>
                      Facebook Ads management, WhatsApp broadcasting, content creation, and complete social media handling across all platforms.
                    </p>
                    <span>01</span>
                  </div>
                </li>
                <li className="item-move-top-item" style={{backgroundImage: 'url(/shape/5.png)'}}>
                  <div className="icon">
                    <img src="/icon/9.png" alt="Icon" />
                  </div>
                  <div className="details">
                    <div className="item-title">
                      <span>Development</span>
                      <h3><a href="/services">Website & App Development</a></h3>
                    </div>
                    <p>
                      Responsive websites and feature-rich mobile applications built with modern technologies to deliver exceptional user experiences.
                    </p>
                    <span>02</span>
                  </div>
                </li>
                <li className="item-move-top-item" style={{backgroundImage: 'url(/shape/5.png)'}}>
                  <div className="icon">
                    <img src="/icon/11.png" alt="Icon" />
                  </div>
                  <div className="details">
                    <div className="item-title">
                      <span>Innovation</span>
                      <h3><a href="/services">AI Products & Automation</a></h3>
                    </div>
                    <p>
                      Process automation, intelligent chatbots, predictive analytics, machine learning models, and custom AI solutions for your business.
                    </p>
                    <span>03</span>
                  </div>
                </li>
                <li className="item-move-top-item" style={{backgroundImage: 'url(/shape/5.png)'}}>
                  <div className="icon">
                    <img src="/icon/12.png" alt="Icon" />
                  </div>
                  <div className="details">
                    <div className="item-title">
                      <span>Management</span>
                      <h3><a href="/services">CRM Solutions</a></h3>
                    </div>
                    <p>
                      Odoo ERP implementation, custom CRM development, and integration services to optimize your sales, marketing, and customer workflows.
                    </p>
                    <span>04</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
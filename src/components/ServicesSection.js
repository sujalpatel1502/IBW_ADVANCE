import React from "react";

const ServicesSection = () => {
  return (
    <div className="services-style-six-area default-padding blurry-shape-left">
      <div className="container">
        {/* SEO Heading + Intro Text */}
        <h2 style={{ position: "absolute", left: "-9999px" }}>
          Our Services - Web Development, App Development, AI Automation &
          Digital Marketing
        </h2>

        <p style={{ position: "absolute", left: "-9999px", top: "30px" }}>
          Instabiz Web provides web development, mobile app development, AI
          solutions, CRM development and social media marketing services for
          businesses in Ahmedabad and across India.
        </p>

        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="service-style-six-info">
              <h2 className="sub-title">Services We Offer</h2>
              <h2 className="title split-text">
                Turn Information Into Actionable Insights
              </h2>
              <a
                href="/services"
                className="btn-circle mt-20"
                title="View All Services"
              >
                <div className="button-content">
                  <span>
                    <img
                      src="/icon/arrow-long-right.png"
                      alt="Arrow Icon"
                      title="Arrow Icon"
                    />
                  </span>{" "}
                  <strong>All Services</strong>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-7">
            <div className="service-style-six-items item-move-top-items">
              <ul>
                <li
                  className="item-move-top-item"
                  style={{ backgroundImage: "url(/shape/5.png)" }}
                >
                  <div className="icon">
                    <img
                      src="/icon/10.png"
                      alt="Social Media Marketing Icon"
                      title="Social Media Marketing Icon"
                    />
                  </div>
                  <div className="details">
                    <div className="item-title">
                      <span>Marketing</span>
                      <h3>
                        <a
                          href="/services"
                          title="Social Media Marketing Services"
                        >
                          Social Media Marketing
                        </a>
                      </h3>
                    </div>
                    <p>
                      Facebook Ads management, WhatsApp broadcasting, content
                      creation, and complete social media handling across all
                      platforms.
                    </p>
                    <span>01</span>
                  </div>
                </li>
                <li
                  className="item-move-top-item"
                  style={{ backgroundImage: "url(/shape/5.png)" }}
                >
                  <div className="icon">
                    <img
                      src="/icon/9.png"
                      alt="Web & App Development Icon"
                      title="Web & App Development Icon"
                    />
                  </div>
                  <div className="details">
                    <div className="item-title">
                      <span>Development</span>
                      <h3>
                        <a
                          href="/services"
                          title="Website & App Development Services"
                        >
                          Website & App Development
                        </a>
                      </h3>
                    </div>
                    <p>
                      Responsive websites and feature-rich mobile applications
                      built with modern technologies to deliver exceptional user
                      experiences.
                    </p>
                    <span>02</span>
                  </div>
                </li>
                <li
                  className="item-move-top-item"
                  style={{ backgroundImage: "url(/shape/5.png)" }}
                >
                  <div className="icon">
                    <img
                      src="/icon/11.png"
                      alt="AI Automation Icon"
                      title="AI Automation Icon"
                    />
                  </div>
                  <div className="details">
                    <div className="item-title">
                      <span>Innovation</span>
                      <h3>
                        <a href="/services" title="AI Automation Services">
                          AI Products & Automation
                        </a>
                      </h3>
                    </div>
                    <p>
                      Process automation, intelligent chatbots, predictive
                      analytics, machine learning models, and custom AI
                      solutions for your business.
                    </p>
                    <span>03</span>
                  </div>
                </li>
                <li
                  className="item-move-top-item"
                  style={{ backgroundImage: "url(/shape/5.png)" }}
                >
                  <div className="icon">
                    <img src="/icon/12.png" alt="Icon" />
                  </div>
                  <div className="details">
                    <div className="item-title">
                      <span>Management</span>
                      <h3>
                        <a href="/services" title="CRM & Odoo Solutions">
                          CRM Solutions
                        </a>
                      </h3>
                    </div>
                    <p>
                      Odoo ERP implementation, custom CRM development, and
                      integration services to optimize your sales, marketing,
                      and customer workflows.
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

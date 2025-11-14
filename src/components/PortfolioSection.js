import React from "react";
import { ArrowRight } from "lucide-react";

const PortfolioSection = () => {
  const handleSeeDetails = (url, e) => {
    e.preventDefault();
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="portfolio-style-three-area default-padding">
      {/* 🔥 Hidden SEO Heading */}
      <h2
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        Portfolio - Mobile App Development, Website Development, AI Automation
        Tools, CRM Solutions & Browser Extensions
      </h2>

      <style jsx>{`
        @media (min-width: 768px) {
          .portfolio-style-three-item h2 {
            left: 0 !important;
            margin-bottom: 20px !important;
          }
          .portfolio-style-three-item .date {
            left: 0 !important;
            padding-left: 0 !important;
          }
          .portfolio-style-three-item .btn-animation {
            margin-left: 0 !important;
          }
        }
        @media (max-width: 767px) {
          .portfolio-style-three-item h2 {
            font-size: 28px !important;
            line-height: 1.2 !important;
            word-break: break-word;
          }
          .portfolio-style-three-item h2 strong {
            display: inline;
          }
        }
      `}</style>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 offset-lg-3">
            <div className="site-heading text-center">
              <h4 className="sub-title">Popular Projects</h4>
              <h2 className="title split-text">Featured Works</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="portfolio-style-three-items">
          {/* Chennai Cabs */}
          <div className="portfolio-style-three-item">
            <div className="row align-center">
              <div className="col-lg-7">
                <img
                  src="/portfolio/chennai-cabs.jpg"
                  alt="Chennai Cabs Mobile Application"
                  title="Chennai Cabs Mobile Application - Taxi Booking App"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-5">
                <div className="date">Mobile Application</div>
                <h2>
                  <a 
                  href="https://play.google.com/store/apps/details?id=com.cabs.chennaicabs&hl=en"  
                  title="Chennai Cabs Mobile App Project"
                  alt="Chennai Cabs Mobile Application" 
                  >
                    Chennai <strong>Cabs</strong>
                  </a>
                </h2>
                <p
                  style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}
                >
                  A ride-sharing application similar to Uber and Ola. Features
                  10K+ downloads with 4-5K active users and drivers on the
                  platform.
                </p>
                <a
                  className="btn-animation mt-10"
                  href="https://play.google.com/store/apps/details?id=com.cabs.chennaicabs&hl=en"
                  title="Chennai Cabs Mobile App Project"
                  onClick={(e) =>
                    handleSeeDetails(
                      "https://play.google.com/store/apps/details?id=com.cabs.chennaicabs&hl=en",
                      e
                    )
                  }
                >
                  <ArrowRight size={15} />
                  <span>See Details</span>
                </a>
              </div>
            </div>
          </div>
          {/* Blutec Ping */}
          <div className="portfolio-style-three-item">
            <div className="row align-center">
              <div className="col-lg-7">
                <img
                  src="/portfolio/blutec-ping.jpg"
                  alt="Blutec Ping WhatsApp Automation"
                   title="Blutec Ping - WhatsApp Automation Platform"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-5">
                <div className="date">Automation Tool</div>
                <h2>
                  <a 
                    href="https://ping.blutec.ai/"
                    title="Blutec Ping Automation Tool Project"
                    onClick={(e) => handleSeeDetails('https://ping.blutec.ai/', e)}
                  >
                    Blutec <strong>Ping</strong>
                  </a>
                </h2>
                <p
                  style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}
                >
                  WhatsApp automation platform for broadcasting messages, AI
                  chatbots, and comprehensive messaging solutions to streamline
                  communication.
                </p>
                <a
                  className="btn-animation mt-10"
                  href="https://ping.blutec.ai/"
                  onClick={(e) =>
                    handleSeeDetails("https://ping.blutec.ai/", e)
                  }
                >
                  <ArrowRight size={15} />
                  <span>See Details</span>
                </a>
              </div>
            </div>
          </div>
          {/* Odoo CRM */}
          <div className="portfolio-style-three-item">
            <div className="row align-center">
              
              <div className="col-lg-7">
                <img 
                  src="/portfolio/odoo-crm.jpg" 
                  alt="Odoo CRM Custom Solutions" 
                  title="Odoo CRM – Custom CRM Solutions"
                  loading="lazy"
                />
              </div>

              <div className="col-lg-5">
                <div className="date">CRM Solution</div>
                 <h2>
                  <a href="/services" title="Odoo CRM Custom Project">
                    Odoo <strong>CRM</strong>
                  </a>
                </h2>
                <p
                  style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}
                >
                  Complete CRM solution built on Odoo platform. We can build any
                  custom CRM tailored to your business needs and requirements.
                </p>
                 <a 
                  className="btn-animation mt-10" 
                  href="/services"
                  title="Learn more about CRM Solutions"
                >
                  <ArrowRight size={15} />
                  <span>See Details</span>
                </a>
              </div>
            </div>
          </div>
          {/* Blutec Scout */}
          <div className="portfolio-style-three-item">
            <div className="row align-center">


               <div className="col-lg-7">
                <img 
                  src="/portfolio/blutec-scout.jpg" 
                  alt="Blutec Scout Chrome Extension" 
                  title="Blutec Scout - Chrome Extension for Email Scraping"
                  loading="lazy"
                />
              </div>



              <div className="col-lg-5">
                <div className="date">Browser Extension</div>
                 <h2>
                  <a 
                    href="https://scout.blutec.ai/"
                    title="Blutec Scout Chrome Extension Project"
                    onClick={(e) => handleSeeDetails('https://scout.blutec.ai/', e)}
                  >
                    Blutec <strong>Scout</strong>
                  </a>
                </h2>

                 <p style={{marginTop: '20px', marginBottom: '20px', fontSize: '16px', lineHeight: '1.6'}}>
                  A powerful scraping extension that extracts Google SERP data and verified emails for lead generation & market research.
                </p>
                <a
                  className="btn-animation mt-10"
                  href="https://scout.blutec.ai/"
                  title="View Blutec Scout Chrome Extension"
                  onClick={(e) =>
                    handleSeeDetails("https://scout.blutec.ai/", e)
                  }
                >
                  <ArrowRight size={15} />
                  <span>See Details</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;

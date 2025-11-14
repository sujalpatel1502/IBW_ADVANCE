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
                  alt="Chennai Cabs Application"
                />
              </div>
              <div className="col-lg-5">
                <div className="date">Mobile Application</div>
                <h2>
                  <a href="#projects">
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
                />
              </div>
              <div className="col-lg-5">
                <div className="date">Automation Tool</div>
                <h2>
                  <a href="#projects">
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
                <img src="/portfolio/odoo-crm.jpg" alt="Odoo CRM Solutions" />
              </div>
              <div className="col-lg-5">
                <div className="date">CRM Solution</div>
                <h2>
                  <a href="#projects">
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
                <a className="btn-animation mt-10" href="#projects">
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
                  alt="Blutec Scout Extension"
                />
              </div>
              <div className="col-lg-5">
                <div className="date">Browser Extension</div>
                <h2>
                  <a href="#projects">
                    Blutec <strong>Scout</strong>
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
                  Browser extension that helps users scrape Google data and
                  extract verified emails efficiently for lead generation and
                  research.
                </p>
                <a
                  className="btn-animation mt-10"
                  href="https://scout.blutec.ai/"
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

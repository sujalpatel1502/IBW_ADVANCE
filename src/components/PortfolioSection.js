import React from 'react';
import { ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  return (
    <div className="portfolio-style-three-area default-padding">
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
          {/* Single Item */}
          <div className="portfolio-style-three-item">
            <div className="row align-center">
              <div className="col-lg-7">
                <img src="/portfolio/7.jpg" alt="Image Not Found" />
              </div>
              <div className="col-lg-5">
                <div className="date">February 18, 2024</div>
                <h2><a href="#projects">Market <strong>Branding</strong></a></h2>
                <a className="btn-animation mt-10" href="#projects">
                  <ArrowRight size={15} />
                  <span>See Details</span>
                </a>
              </div>
            </div>
          </div>
          {/* Single Item */}
          {/* Single Item */}
          <div className="portfolio-style-three-item">
            <div className="row align-center">
              <div className="col-lg-7">
                <img src="/portfolio/8.jpg" alt="Image Not Found" />
              </div>
              <div className="col-lg-5">
                <div className="date">January 15, 2024</div>
                <h2><a href="#projects">Motion <strong>Graphics</strong></a></h2>
                <a className="btn-animation mt-10" href="#projects">
                  <ArrowRight size={10} />
                  <span>See Details</span>
                </a>
              </div>
            </div>
          </div>
          {/* Single Item */}
          {/* Single Item */}
          <div className="portfolio-style-three-item">
            <div className="row align-center">
              <div className="col-lg-7">
                <img src="/portfolio/9.jpg" alt="Image Not Found" />
              </div>
              <div className="col-lg-5">
                <div className="date">August 24, 2024</div>
                <h2><a href="#projects">Creative <strong>Design</strong></a></h2>
                <a className="btn-animation mt-10" href="#projects">
                  <ArrowRight size={10} />
                  <span>See Details</span>
                </a>
              </div>
            </div>
          </div>
          {/* Single Item */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;

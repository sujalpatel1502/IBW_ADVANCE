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
                    <img src="/icon/9.png" alt="Icon" />
                  </div>
                  <div className="details">
                    <div className="item-title">
                      <span>Connection</span>
                      <h3><a href="/services">Perfect UI/UX Designing</a></h3>
                    </div>
                    <p>
                      Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new.
                    </p>
                    <span>01</span>
                  </div>
                </li>
                <li className="item-move-top-item" style={{backgroundImage: 'url(/shape/5.png)'}}>
                  <div className="icon">
                    <img src="/icon/10.png" alt="Icon" />
                  </div>
                  <div className="details">
                    <div className="item-title">
                      <span>Collaboration</span>
                      <h3><a href="/services">Social Media Marketing</a></h3>
                    </div>
                    <p>
                      Regular indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new.
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
                      <span>Innovations</span>
                      <h3><a href="/services">Branding & Stationery</a></h3>
                    </div>
                    <p>
                      Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new.
                    </p>
                    <span>03</span>
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
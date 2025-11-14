import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="banner-style-one-area bg-cover" style={{backgroundImage: 'url(/shape/3.jpg)'}}>

      {/* Hidden SEO H2 for Google */}
      <h2 style={{ position: "absolute", left: "-9999px", top: "0" }}>
        AI-Powered Web Development, App Development & Digital Innovation in Ahmedabad
      </h2>

      {/* SEO Intro Paragraph */}
      <p style={{ position: "absolute", left: "-9999px", top: "30px" }}>
        Instabiz Web builds AI-powered websites, mobile apps, CRM systems and digital automation 
        solutions. We help startups and businesses grow through modern design, fast development, 
        and smart digital marketing — based in Ahmedabad, Gujarat.
      </p>

      <div className="light-banner-active bg-gray bg-cover" style={{backgroundImage: 'url(/shape/8.jpg)'}}></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <div className="banner-style-one-heading">
              <div className="banner-title">
                <h2 className="title-left split-text">Digital</h2>
                <h2 className="title-right split-text">Innovation</h2>
              </div>
              <div className="thumb wow fadeInRight">
                <img className="regular-img" src="/illustration/5.png"  alt="Instabiz Web Illustration" title="Instabiz Web Creative Illustration"/>
                <img className="light-img" src="/illustration/8.png" alt="Instabiz Web Illustration Light Mode" title="Instabiz Web Illustration Light"/>
              </div>
            </div>
          </div>
          <div className="col-xl-4 offset-xl-1">
            <div className="banner-style-one-info wow fadeInUp" data-wow-delay="1s" data-wow-duration="0.6s">
              <div className="top-info">
                <h4>Based In Ahmedabad</h4>
                <p>
                  Gujarat, India - 382424
                </p>
              </div>
              <div className="bottom">
                <p>
                  We deliver cutting-edge IT solutions including CRM systems, mobile app development, web development, and AI-powered projects. Our expert team transforms your business ideas into innovative digital solutions that drive growth and efficiency.
                </p>
                <a href="#projects" className="btn-style-two mt-30">
                  <ArrowRight size={1} /> Our <br /> Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

'use client';

import React, { useEffect } from 'react';
import { initNavigation } from '../utils/navigation';
import { initMouseCursor } from '../utils/mouseCursor';
import { initSmoothScroll } from '../utils/smoothScroll';
import { initServicesAnimation } from '../utils/servicesAnimation';
import { initPortfolioAnimation } from '../utils/portfolioAnimation';
import { initTestimonialAnimation } from '../utils/testimonialAnimation';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialSection from '../components/TestimonialSection';
import FooterSection from '../components/FooterSection';

const HomePage = () => {
  useEffect(() => {
    initNavigation();
    initMouseCursor();
    initSmoothScroll();
    initServicesAnimation();
    initPortfolioAnimation();
    initTestimonialAnimation();
    
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
            {/* Hero Section */}
            <HeroSection />
            
            {/* Services Section */}
            <ServicesSection />
            
            {/* Portfolio Section */}
            <PortfolioSection />
            
            {/* Testimonial Section */}
            <TestimonialSection />
            
            {/* Footer Section */}
            <FooterSection />
          </div>
        </div>
      );
    };

export default HomePage;
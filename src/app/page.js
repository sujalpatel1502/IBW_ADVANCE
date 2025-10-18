'use client';

import React, { useEffect } from 'react';
import { initNavigation } from '../utils/navigation';
import HeroSection from '../components/HeroSection';
import BrandMarquee from '../components/BrandMarquee';

const HomePage = () => {
  useEffect(() => {
    initNavigation();
    
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

        {/* Brand Marquee */}
        <BrandMarquee />
      </div>
    </div>
  );
};

export default HomePage;
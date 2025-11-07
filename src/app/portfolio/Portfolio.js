'use client';

import React, { useEffect } from 'react';
import FooterSection from '../../components/FooterSection';

const PortfolioPage = () => {
  const handleProjectClick = (url, e) => {
    e.preventDefault();
    if (url && url !== '#projects') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  useEffect(() => {
    // Ensure we're on the client side
    if (typeof window === 'undefined') return;
    
    // Hide preloader after page loads
    const hidePreloader = () => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }
    };

    // Hide preloader after a short delay
    setTimeout(hidePreloader, 1000);

    // Initialize animations and effects
    const initAnimations = () => {
      // Add scroll animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);

      // Observe portfolio items
      const portfolioItems = document.querySelectorAll('.portfolio-style-six');
      portfolioItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
      });
    };

    // Initialize counter animation
    const initCounter = () => {
        const timer = document.querySelector('.timer');
        if (timer) {
          let count = 0;
          const target = 100;
          const increment = target / 100;
        
        const updateCounter = () => {
          if (count < target) {
            count += increment;
            timer.textContent = Math.floor(count);
            requestAnimationFrame(updateCounter);
          } else {
            timer.textContent = target;
          }
        };
        
        setTimeout(updateCounter, 1000);
      }
    };

    initAnimations();
    initCounter();
  }, []);

  const portfolioItems = [
    {
      id: 1,
      image: '/portfolio/chennai-cabs.jpg',
      title: 'Chennai Cabs',
      description: 'Ride-sharing mobile app with 10K+ downloads and 4-5K active users and drivers.',
      tag: 'Mobile Application',
      date: 'Mobile Application',
      url: 'https://play.google.com/store/apps/details?id=com.cabs.chennaicabs&hl=en'
    },
    {
      id: 2,
      image: '/portfolio/blutec-ping.jpg',
      title: 'Blutec Ping',
      description: 'WhatsApp automation platform with broadcasting, AI chatbots, and messaging solutions.',
      tag: 'Automation Tool',
      date: 'Automation Tool',
      url: 'https://ping.blutec.ai/'
    },
    {
      id: 3,
      image: '/portfolio/odoo-crm.jpg',
      title: 'Odoo CRM',
      description: 'Complete CRM solution on Odoo platform with custom features for business needs.',
      tag: 'CRM Solution',
      date: 'CRM Solution',
      url: '#projects'
    },
    {
      id: 4,
      image: '/portfolio/blutec-scout.jpg',
      title: 'Blutec Scout',
      description: 'Browser extension for scraping Google data and extracting verified emails for lead generation.',
      tag: 'Browser Extension',
      date: 'Browser Extension',
      url: 'https://scout.blutec.ai/'
    },
    {
      id: 5,
      image: '/portfolio/sarvam-art.jpg',
      title: 'Sarvam Art',
      description: 'Student management system for coaching centers and classes to manage students, courses, and schedules efficiently.',
      tag: 'Web Application',
      date: 'Web Application',
      url: 'https://sarvam-art.instabizweb.com/'
    },
    {
      id: 6,
      image: '/portfolio/acolyte-living.jpg',
      title: 'Acolyte Living',
      description: 'UK-based student accommodation platform connecting thousands of international students with their perfect home.',
      tag: 'Web Application',
      date: 'Web Application',
      url: 'https://acolyteliving.com/'
    },
    {
      id: 7,
      image: '/portfolio/rental-management.jpg',
      title: 'Rental Management System',
      description: 'Desktop application for wedding clothing rental shops with offline functionality for seamless operations.',
      tag: 'Desktop Application',
      date: 'Desktop Application',
      url: '#projects'
    },
    {
      id: 8,
      image: '/portfolio/social-media-marketing.jpg',
      title: 'Social Media Marketing',
      description: 'Comprehensive social media management, ads, and lead generation services for 20+ clients across various industries.',
      tag: 'Marketing Service',
      date: 'Marketing Service',
      url: '#projects'
    }
  ];

  return (
    <div>
      {/* Start Preloader */}
      <div id="preloader">
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
      {/* preloader end */}
      
      <div className="smooth-scroll-container">
        {/* Start Banner */}
        <div className="banner-style-thirteen-area">
          <video className="regular-video" muted loop autoPlay src="/video/waves-2.mp4"></video>
          <video className="light-video" muted loop autoPlay src="/video/waves-3.mp4"></video>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-style-thriteen-content">
                  <div className="top-info">
                    <h2>Our <strong>Portfolio</strong></h2>
                    <p>
                      Explore our portfolio showcasing innovative IT services, AI-powered solutions, intelligent automation systems, and successful social media marketing campaigns. We deliver cutting-edge technology solutions that transform businesses and drive measurable results.
                    </p>
                  </div>
                  <div className="bottom-info">
                    <div className="card-style-three">
                      <div className="fun-fact">
                        <div className="counter">
                          <div className="timer">100</div>
                          <div className="operator">+</div>
                        </div>
                       
                        <p>
                          Total number of projects completed successfully
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Banner */}

        {/* Start Portfolio */}
        <div className="portfolio-style-six-area default-padding bg-gray">
          <div className="container">
            <div className="portfolio-style-six-items title-animation">
              <div className="portfolio-style-six-items">
                <div className="row gutter-xl">
                  {portfolioItems.map((item, index) => (
                    <div key={item.id} className="col-lg-6 portfolio-style-six-item">
                      <div className="portfolio-style-six wow fadeInUp" data-wow-delay={`${index * 300}ms`}>
                        <div className="thumb">
                          <img src={item.image} alt={item.title} />
                          <div className="bottom">
                            <div className="tags">{item.tag}</div>
                            <div className="marker"></div>
                            <div className="date">{item.date}</div>
                          </div>
                        </div>
                        <div className="info">
                          <a 
                            className="arrow-circle-btn" 
                            href={item.url} 
                            onClick={(e) => handleProjectClick(item.url, e)}
                          >
                            <img src="/icon/arrow-three.png" alt="Arrow" />
                          </a>
                          <div className="overlay">
                            <h2>
                              <a 
                                href={item.url} 
                                onClick={(e) => handleProjectClick(item.url, e)}
                              >
                                {item.title}
                              </a>
                            </h2>
                            <p style={{marginTop: '10px', fontSize: '14px', lineHeight: '1.5', opacity: '0.9'}}>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="text-center">
                      <a className="btn-round-animation dark mt-120" href="/contact-us">Load More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio */}
      </div>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default PortfolioPage;
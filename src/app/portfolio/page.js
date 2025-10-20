'use client';

import React, { useEffect, useState } from 'react';
import { safeBodyClass } from '../../utils/safeBodyClass';
import FooterSection from '../../components/FooterSection';

const PortfolioPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        const target = 56;
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
      image: '/portfolio/55.jpg',
      title: 'Photo shooting & creative product editing',
      tag: 'Marketing',
      date: 'February 18, 2025'
    },
    {
      id: 2,
      image: '/portfolio/54.jpg',
      title: 'Blue business mockup cards color standard',
      tag: 'Technology',
      date: 'June 15, 2025'
    },
    {
      id: 3,
      image: '/portfolio/56.jpg',
      title: 'Simple black & white interface design',
      tag: 'Branding',
      date: 'March 24, 2025'
    },
    {
      id: 4,
      image: '/portfolio/57.jpg',
      title: 'Quality in digital standard fact mockup',
      tag: 'Business',
      date: 'April 23, 2025'
    },
    {
      id: 5,
      image: '/portfolio/58.jpg',
      title: 'Photo shooting & creative product editing',
      tag: 'Technology',
      date: 'June 15, 2025'
    },
    {
      id: 6,
      image: '/portfolio/59.jpg',
      title: 'Blue business mockup cards color standard',
      tag: 'Technology',
      date: 'June 15, 2025'
    }
  ];

  const openModal = () => {
    setIsModalOpen(true);
    safeBodyClass.setStyle('overflow', 'hidden');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    safeBodyClass.setStyle('overflow', 'auto');
  };

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
                      Discover our creative journey through innovative design solutions and successful projects. We specialize in delivering exceptional digital experiences that drive results and exceed client expectations.
                    </p>
                  </div>
                  <div className="bottom-info">
                    <div className="card-style-three">
                      <div className="fun-fact">
                        <div className="counter">
                          <div className="timer">56</div>
                          <div className="operator">K</div>
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
                          <a className="arrow-circle-btn" href="#" onClick={(e) => { e.preventDefault(); openModal(); }}>
                            <img src="/icon/arrow-three.png" alt="Arrow" />
                          </a>
                          <div className="overlay">
                            <h2><a href="#" onClick={(e) => { e.preventDefault(); openModal(); }}>{item.title}</a></h2>
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

        {/* Portfolio Modal */}
        {isModalOpen && (
          <div className="popup-single-modal modal fade show" style={{display: 'block'}}>
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="modal-header">
                    <button 
                      type="button" 
                      className="btn-close" 
                      onClick={closeModal}
                      aria-label="Close"
                    ></button>
                  </div>

                  <div className="project-details-items default-padding">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="project-details-thumb">
                            <img src="/portfolio/55.jpg" alt="Project Details" />
                          </div>
                        </div>
                        <div className="col-lg-10 offset-lg-1">
                          <div className="project-details-main-info">
                            <div className="project-single-tags">
                              <a href="#">Marketing</a>
                              <a href="#">Design</a>
                            </div>
                            <h2 className="title">Photo shooting & creative product editing</h2>
                            <div className="project-author-details mt-35">
                              <ul>
                                <li>
                                  <div className="left-info">
                                    <h3>Client</h3>
                                  </div>
                                  <div className="right-info">
                                    <h3>IBW Solutions</h3>
                                  </div>
                                </li>
                                <li>
                                  <div className="left-info">
                                    <h3>Disciplines Used</h3>
                                  </div>
                                  <div className="right-info">
                                    <p className="project-inner-tag">
                                      Photography <br /> Product Design <br /> Creative Editing <br /> Marketing
                                    </p>
                                  </div>
                                </li>
                                <li>
                                  <div className="left-info">
                                    <h3>Project Details</h3>
                                  </div>
                                  <div className="right-info">
                                    <p>
                                      We specialize in creating stunning product photography and creative editing solutions. 
                                      Our approach combines professional photography techniques with advanced editing skills 
                                      to deliver exceptional results that drive sales and engagement.
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Overlay */}
        {isModalOpen && (
          <div 
            className="modal-backdrop fade show" 
            onClick={closeModal}
            style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1040}}
          ></div>
        )}
      </div>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default PortfolioPage;
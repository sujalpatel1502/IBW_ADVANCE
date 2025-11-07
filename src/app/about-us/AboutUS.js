'use client';

import React, { useEffect, useState, useRef } from 'react';
import FooterSection from '../../components/FooterSection';
import TestimonialSection from '../../components/TestimonialSection';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const swiperInstancesRef = useRef({});

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

    // Initialize counter animation (same as services page)
    const initCounterAnimation = () => {
      const counters = document.querySelectorAll('.timer, .count-num');
      
      counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const duration = 2000; // 2 seconds
        
        // Use GSAP if available, otherwise use simple animation
        if (window.gsap) {
          window.gsap.fromTo(counter, 
            { textContent: 0 },
            {
              textContent: target,
              duration: duration / 1000,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: counter,
                start: "top 80%",
                toggleActions: "play none none reverse"
              },
              onUpdate: function() {
                counter.textContent = Math.ceil(this.targets()[0].textContent);
              }
            }
          );
        } else {
          // Fallback animation without GSAP
          let start = 0;
          const increment = target / (duration / 16); // 60fps
          
          const animate = () => {
            start += increment;
            if (start < target) {
              counter.textContent = Math.ceil(start);
              requestAnimationFrame(animate);
            } else {
              counter.textContent = target;
            }
          };
          
          // Start animation when element is in view
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                animate();
                observer.unobserve(entry.target);
              }
            });
          });
          
          observer.observe(counter);
        }
      });
    };

    // Initialize GSAP ScrollTrigger for text animation
    const initTextScrollAnimation = () => {
      // Check if GSAP and ScrollTrigger are available
      if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
        window.gsap.registerPlugin(window.ScrollTrigger);
        
        const textElements = window.gsap.utils.toArray('.text');
        textElements.forEach(text => {
          window.gsap.to(text, {
            backgroundSize: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: text,
              start: 'center 100%',
              end: 'center 50%',
              scrub: true,
            },
          });
        });
      }
    };

    // Initialize counter animation after a short delay
    setTimeout(initCounterAnimation, 500);
    
    // Initialize text animation after a short delay to ensure GSAP is loaded
    setTimeout(initTextScrollAnimation, 100);
    
    // Initialize Partner Slider
    const initPartnerSlider = () => {
      if (window.Swiper) {
        new window.Swiper('.partnerSwiper', {
          slidesPerView: 'auto',
          spaceBetween: 20,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          },
        });
      }
    };
    
    // Initialize slider after a short delay
    setTimeout(initPartnerSlider, 200);
    
    // Initialize Team Swipers
    const initTeamSwipers = () => {
      if (window.Swiper) {
        // Founder swiper (1 slide)
        const founderSwiper = new window.Swiper('.teamSwiper1', {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: false,
          autoplay: false,
          centeredSlides: true,
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          },
        });
        swiperInstancesRef.current.teamSwiper1 = founderSwiper;
        
        // Founding Team swiper (2 slides with infinite loop - faster, 6 co-founders)
        const teamSwiper2 = new window.Swiper('.teamSwiper2', {
          slidesPerView: 2,
          spaceBetween: 20,
          loop: true,
          autoplay: {
            delay: 1500,
            disableOnInteraction: false,
          },
          speed: 800,
          breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          },
        });
        swiperInstancesRef.current.teamSwiper2 = teamSwiper2;
      }
    };
    
    // Initialize team swipers after a short delay
    setTimeout(initTeamSwipers, 300);
  }, []);

  // Restart autoplay when tab changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const restartAutoplay = () => {
      // Stop autoplay first
      if (swiperInstancesRef.current.teamSwiper2) {
        swiperInstancesRef.current.teamSwiper2.autoplay.stop();
      }
      
      // Small delay to ensure swiper is visible, then start the active one
      setTimeout(() => {
        if (activeTab === 'tab2' && swiperInstancesRef.current.teamSwiper2) {
          swiperInstancesRef.current.teamSwiper2.autoplay.start();
        }
      }, 150);
    };
    
    restartAutoplay();
  }, [activeTab]);

  const teamMembers = {
    tab1: [
      { name: 'Mukund Pasi', position: 'Founder', image: '/team/mukund.png' }
    ],
    tab2: [
      { name: 'Harshil Sarariya', position: 'Co-Founder', image: '/team/harshil.png' },
      { name: 'Miraj Soliya', position: 'Co-Founder', image: '/team/miraj.png' },
      { name: 'Sujal Patel', position: 'Co-Founder', image: '/team/sujal.png' },
      { name: 'Neel Soni', position: 'Co-Founder', image: '/team/neel.png' },
      { name: 'Gaurav Teli', position: 'Co-Founder', image: '/team/gaurav.png' },
      { name: 'Dhaval Chavda', position: 'Co-Founder', image: '/team/dhaval.png' }
    ]
  };

  const partners = [
    { category: 'AI Platform', name: 'BluTec', image: '/brand/blutec.png' },
    { category: 'Healthcare', name: 'Carefix', image: '/brand/carefix.png' },
    { category: 'Fintech', name: 'Cashflex', image: '/brand/cashflex.png' },
    { category: 'Transportation', name: 'Chennai Cabs', image: '/brand/chennai-cabs.png' },
    { category: 'Real Estate', name: 'Estate Rent', image: '/brand/estate-rent.png' },
    { category: 'B2B', name: 'Kabadi King', image: '/brand/kabaddi-king.png' },
    { category: 'Education', name: 'Sarvam Art', image: '/brand/serverm-art.png' }
  ];

  return (
    <div className="bg-dark">
      <style jsx>{`
        .text-scroll-animation .text {
          width: 100%;
          color: rgb(255, 255, 255, 0.2);
          background: linear-gradient(to right, var(--white), var(--white)) no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          background-size: 0%;
          transition: background-size cubic-bezier(.1,.5,.5,1) 0.5s;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          position: relative;
        }
        
        .text-scroll-animation p.text {
          color: rgb(255, 255, 255, 0.2);
          background: linear-gradient(to right, var(--white), var(--white)) no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          background-size: 0%;
          transition: background-size cubic-bezier(.1,.5,.5,1) 0.5s;
        }
        
        @media screen and (max-width: 1023px) {
          .text-scroll-animation .text {
            background: transparent;
            color: var(--white) !important;
          }
          
          .text-scroll-animation p.text {
            color: #cccccc !important;
          }
        }
        
        /* Mobile About Us Optimizations */
        @media (max-width: 767px) {
          /* Hide fun factor section on mobile */
          .fun-factor-circle-area {
            display: none !important;
          }
          
          /* Hide image on mobile */
          .thumb-style-four {
            display: none !important;
          }
        }
        
        /* Partner Section Styling */
        .partner-style-two-area {
          height: 90vh;
          min-height: 90vh;
          display: flex;
          align-items: center;
        }
        
        .partner-style-two-area .sub-title {
          background: rgba(3, 191, 180, 0.3);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: inline-block;
          margin-bottom: 20px;
        }
        
        .partner-style-two-area .title {
          color: white;
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        
        .partner-style-two-area p {
          color: #cccccc;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 30px;
        }
        
        .partner-two-thumb {
          height: 100%;
          display: flex;
          align-items: center;
        }
        
        .partner-two-thumb img {
          height: 100%;
          max-height: 500px;
          width: 100%;
          object-fit: cover;
          border-radius: 15px;
        }
        
        .partner-slider {
          position: relative;
          overflow: visible;
          padding: 60px 0 20px 0;
        }
        
        .partner-slider .swiper-wrapper {
          display: flex;
          margin-top: 20px;
        }
        
        .partner-slider .swiper-slide {
          flex-shrink: 0;
          width: 300px;
        }
        
        .partner-two-item {
          background: #1a1a1a;
          border: 1px solid #333;
          border-radius: 15px;
          padding: 25px;
          text-align: center;
          transition: all 0.3s ease;
          height: 100%;
          margin-right: 20px;
          margin-bottom: 20px;
        }
        
        .partner-two-item:hover {
          transform: translateY(-5px);
          border-color: rgb(3, 191, 180);
          box-shadow: 0 10px 30px rgba(3, 191, 180, 0.3);
        }
        
        .partner-two-item h5 {
          color: #cccccc;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }
        
        .partner-two-item img {
          max-height: 120px;
          max-width: 280px;
          width: auto;
          height: auto;
          margin-bottom: 20px;
          filter: brightness(0) invert(1);
          transition: all 0.3s ease;
          object-fit: contain;
        }
        
        .partner-two-item:hover img {
          filter: brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(200deg);
        }
        
        .partner-two-item h4 {
          color: #cccccc;
          font-size: 16px;
          font-weight: 600;
          margin: 0;
          background: rgba(3, 191, 180, 0.3);
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          display: inline-block;
        }
        
        @media (max-width: 991px) {
          .partner-style-two-area {
            height: auto;
            min-height: auto;
            padding: 60px 0;
          }
          
          .partner-style-two-area .title {
            font-size: 28px;
          }
          
          .partner-two-item {
            margin-bottom: 20px;
            margin-right: 0;
          }
          
          .partner-slider .swiper-slide {
            width: 100%;
          }
          
          .partner-two-thumb img {
            max-height: 300px;
            height: auto;
          }
        }
        
        /* Mobile Team Cards Styling */
        @media (max-width: 767px) {
          .team-style-one-item {
            margin-bottom: 20px;
          }
          
          .team-style-one-item .thumb img {
            height: 180px !important;
          }
          
          .team-style-one-item .info {
            padding: 15px !important;
          }
          
          .team-style-one-item .info h4 {
            font-size: 16px !important;
            margin-bottom: 3px !important;
          }
          
          .team-style-one-item .info span {
            font-size: 13px !important;
          }
          
          /* Mobile Tab Buttons Styling */
          .team-style-one-items .nav-tabs li.nav-item .nav-link {
            padding: 10px 14px !important;
            margin-top: 10px !important;
          }
          
          .team-style-one-items .nav-tabs li.nav-item .nav-link strong {
            font-size: 18px !important;
            margin-bottom: 4px !important;
          }
          
          .team-style-one-items .nav-tabs li.nav-item .nav-link span {
            font-size: 14px !important;
          }
          
          .team-style-one-items .nav-tabs li.nav-item:first-child .nav-link {
            margin-top: 0 !important;
          }
        }
        
        /* Founder Single Card Styling */
        .teamSwiper1 .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .teamSwiper1 .team-style-one-item {
          margin: 0 auto;
          max-width: 400px;
          width: 100%;
        }
        
        @media (max-width: 767px) {
          .teamSwiper1 .team-style-one-item {
            max-width: 300px;
          }
        }
        
        /* Team Member Images */
        .team-style-one-item .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }
        
        /* Co-Founders Layout */
        .teamSwiper2 .swiper-wrapper,
        .teamSwiper3 .swiper-wrapper {
          display: flex;
          align-items: stretch;
        }
        
        .teamSwiper2 .team-style-one-item,
        .teamSwiper3 .team-style-one-item {
          height: 100%;
        }
        
        /* Ensure images don't get cut off */
        .team-style-one-item .thumb {
          overflow: hidden;
        }
        
        .team-style-one-item .thumb img {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
        }
      `}</style>
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
        {/* Start Breadcrumb */}
        <div className="breadcrumb-area text-center" style={{backgroundImage: 'url(/shape/10.jpg)', padding: '60px 0'}}>
          <div className="light-banner-active bg-gray bg-cover" style={{backgroundImage: 'url(/shape/6.jpg)'}}></div>
          <div className="breadcrumb-content">
            <h1>About Us</h1>
          </div>
        </div>
        {/* End Breadcrumb */}

        {/* Start About */}
        <div className="about-style-six-area default-padding bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-5">
                <div className="thumb-style-four">
                  <img src="/thumb/2.jpg" alt="Image Not Found" />
                </div>
              </div>
              <div className="col-xl-6 offset-xl-1 col-lg-7">
                <div className="about-style-six-info text-scroll-animation">
                  <div className="info">
                    <div className="d-flex">
                      <a href="#"><img src="/icon/arrow.png" alt="Image Not Found" /></a>
                      <h2 className="title text">Best creative & automation agency</h2>
                    </div>
                    <p className="text">
                      We specialize in delivering cutting-edge IT services, innovative AI tools, intelligent automation solutions, and comprehensive social media marketing strategies. Our expertise helps businesses streamline operations, enhance productivity, and achieve digital transformation goals with modern technology solutions.
                    </p>
                  </div>
                  <ul className="service-list">
                    <li>
                      <a href="#">
                        <div className="icon">
                          <i className="fas fa-long-arrow-right"></i>
                        </div>
                        <span>01</span>
                        IT Services
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="icon">
                          <i className="fas fa-long-arrow-right"></i>
                        </div>
                        <span>02</span>
                        AI Tools
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="icon">
                          <i className="fas fa-long-arrow-right"></i>
                        </div>
                        <span>03</span>
                        Automations
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="icon">
                          <i className="fas fa-long-arrow-right"></i>
                        </div>
                        <span>04</span>
                        Social Media Marketing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About */}

        {/* Start Fun Factor */}
        <div className="fun-factor-circle-area bg-gray default-padding-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="fun-fact-circle-lists">
                  {/* Single item */}
                  <div className="fun-fact wow fadeInDown">
                    <div className="counter">
                      <div className="timer">60</div>
                      <div className="operator">+</div>
                    </div>
                    <span className="medium">World Customer</span>
                  </div>
                  {/* End Single item */}
                  {/* Single item */}
                  <div className="fun-fact wow fadeInUp" data-wow-duration="0.5s">
                    <div className="counter">
                      <div className="timer">98</div>
                      <div className="operator">%</div>
                    </div>
                    <span className="medium">Positive Rating</span>
                  </div>
                  {/* End Single item */}
                  {/* Single item */}
                  <div className="fun-fact wow fadeInDown">
                    <div className="counter">
                      <div className="timer">2</div>
                      <div className="operator">+</div>
                    </div>
                    <span className="medium">Total Branch</span>
                  </div>
                  {/* End Single item */}
                  {/* Single item */}
                  <div className="fun-fact wow fadeInUp" data-wow-duration="0.5s">
                    <div className="counter">
                      <div className="timer">5</div>
                    </div>
                    <span className="medium">Years experience</span>
                  </div>
                  {/* End Single item */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Fun Factor */}

        {/* Start Partner Area */}
        <div className="partner-style-two-area default-padding overflow-hidden blurry-shape-right" style={{backgroundColor: '#000000'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pr-110 pr-md-15 pr-xs-15">
                <div className="partner-two-thumb">
                  <img src="/thumb/15.jpg" alt="Image Not Found" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="brand-style-two-items">
                  <h4 className="sub-title">Networks</h4>
                  <h2 className="title">Our Networks</h2>
                  <p>
                    We are proud to work with leading brands across various industries including AI platforms, healthcare, fintech, transportation, real estate, and education. Our partners trust us for innovative app development, custom CRM solutions, AI automation tools, and comprehensive digital transformation services that drive their business growth.
                  </p>
                  <div className="partner-slider mt-40">
                    <div className="swiper partnerSwiper">
                      <div className="swiper-wrapper">
                        {partners.map((partner, index) => (
                          <div key={index} className="swiper-slide">
                            <div className="partner-two-item">
                              <h5>{partner.category}</h5>
                              <img src={partner.image} alt="Image Not Found" />
                              <h4>{partner.name}</h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Partner */}

        {/* Start Team */}
        <div className="team-style-one-area relative overflow-hidden default-padding-bottom bg-gray">
          <div className="team-style-one-heading">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 text-center">
                  <div className="site-heading">
                    <h4 className="sub-title">Team members</h4>
                    <h2 className="title split-text">Turn Information Into Actionable Insights</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="team-style-one-items">
              <div className="row">
                <div className="col-xl-4">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button 
                        className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
                        onClick={() => setActiveTab('tab1')}
                        type="button"
                      >
                        <strong>Founder</strong>
                        <span>Leadership</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button 
                        className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
                        onClick={() => setActiveTab('tab2')}
                        type="button"
                      >
                        <strong>Founding Team</strong>
                        <span>Co-Founders</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-7 offset-xl-1">
                  <div className="tab-content">
                    <div className={`tab-pane fade ${activeTab === 'tab1' ? 'show active' : ''}`}>
                      <div className="team-style-one-carousel swiper teamSwiper1">
                        <div className="swiper-wrapper">
                          {teamMembers.tab1.map((member, index) => (
                            <div key={index} className="swiper-slide">
                              <div className="team-style-one-item">
                                <div className="thumb">
                                  <img src={member.image} alt="Image Not Found" />
                                </div>
                                <div className="info">
                                  <h4><a href="#">{member.name}</a></h4>
                                  <span>{member.position}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'tab2' ? 'show active' : ''}`}>
                      <div className="team-style-one-carousel swiper teamSwiper2">
                        <div className="swiper-wrapper">
                          {teamMembers.tab2.map((member, index) => (
                            <div key={index} className="swiper-slide">
                              <div className="team-style-one-item">
                                <div className="thumb">
                                  <img src={member.image} alt="Image Not Found" />
                                </div>
                                <div className="info">
                                  <h4><a href="#">{member.name}</a></h4>
                                  <span>{member.position}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Team */}

       
      </div>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default AboutUs;

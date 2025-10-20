'use client';

import React, { useEffect } from 'react';
import { initNavigation } from '../../utils/navigation';
import { initMouseCursor } from '../../utils/mouseCursor';
import { initSmoothScroll } from '../../utils/smoothScroll';
import Header from '../../components/Header';
import { safeBodyClass } from '../../utils/safeBodyClass';
import FooterSection from '../../components/FooterSection';

const ServicesPage = () => {
  useEffect(() => {
    // Ensure we're on the client side
    if (typeof window === 'undefined') return;
    
    initNavigation();
    initMouseCursor();
    initSmoothScroll();
    
    // Initialize counter animation
    const initCounterAnimation = () => {
      const counters = document.querySelectorAll('.timer, .count-num');
      
      counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const duration = 2000; // 2 seconds
        
        // Use GSAP if available, otherwise use simple animation
        if (typeof window !== 'undefined' && window.gsap) {
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
    
    // Initialize counter animation after a short delay
    setTimeout(initCounterAnimation, 500);
    
    
    // Hide preloader when page loads
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        safeBodyClass.add('loaded');
      }, 1000);
    }
  }, []);

  return (
    <div className="bg-dark">
      {/* Force override blue background with inline styles */}
      <style jsx global>{`
        .services-style-one-item {
          background: #1d1d1d !important;
          margin-bottom: 30px !important;
        }
        .services-style-one-area .row {
          margin: 0 -20px !important;
        }
        .services-style-one-area .single-item {
          padding: 0 10px !important;
        }
        .services-style-one-area {
          background: #130f12 !important;
        }
        .breadcrumb-area {
          background-image: url('/shape/10.jpg') !important;
          background-size: cover !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
        }
        .fun-factor-circle-area {
          background: #130f12 !important;
        }
        
        /* Mobile Fun Factor - Hide on mobile */
        @media (max-width: 767px) {
          .fun-factor-circle-area {
            display: none !important;
          }
        }
        .clients-area {
          background: #130f12 !important;
        }
        
        /* Mobile Clients - 2 cards per row */
        @media (max-width: 767px) {
          .client-style-one-items {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 0 !important;
            padding: 0 !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            border-radius: 10px !important;
            overflow: hidden !important;
          }
          
          .client-style-one-item {
            width: 100% !important;
            margin: 0 !important;
            padding: 20px 15px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            min-height: 80px !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            border-right: none !important;
            border-bottom: none !important;
            position: relative !important;
          }
          
          /* Fix borders for grid layout */
          .client-style-one-item:nth-child(odd) {
            border-right: 1px solid rgba(255, 255, 255, 0.1) !important;
          }
          
          .client-style-one-item:nth-child(n+3) {
            border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
          }
          
          .client-style-one-item:nth-child(n+5) {
            border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
          }
          
          .client-style-one-item:nth-child(n+7) {
            border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
          }
          
          .client-style-one-item img {
            max-width: 80px !important;
            max-height: 40px !important;
            object-fit: contain !important;
          }
          
          .client-style-one-item .fun-fact {
            text-align: center !important;
          }
          
          .client-style-one-item .fun-fact .counter {
            font-size: 18px !important;
          }
          
          .client-style-one-item .fun-fact .count-num {
            font-size: 18px !important;
          }
          
          .client-style-one-item .fun-fact .operator {
            font-size: 14px !important;
          }
          
          .client-style-one-item .fun-fact span.medium {
            font-size: 10px !important;
            margin-top: 5px !important;
          }
          
          .client-style-one-item a {
            font-size: 12px !important;
            padding: 8px 12px !important;
            text-align: center !important;
          }
        }
        .pricing-style-one-area {
          background: #130f12 !important;
        }
        /* Fix button arrow centering and hover states */
        .services-style-one-item .btn-full i {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          height: 45px !important;
          width: 45px !important;
          line-height: 1 !important;
          text-align: center !important;
          border-radius: 50% !important;
          transform: rotate(-45deg) !important;
          font-size: 16px !important;
          transition: all 0.35s ease-in-out !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          background: transparent !important;
        }
        .services-style-one-item:hover .btn-full i {
          background: white !important;
          color: #333 !important;
          border-color: white !important;
        }
      `}</style>
      
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
        {/* Header */}
        <Header />
        
        {/* Start Breadcrumb and Services Container */}
        <div className="services-style-one-area default-padding-bottom">
          {/* Breadcrumb Section with Background Image */}
          <div className="breadcrumb-area text-center" style={{backgroundImage: 'url(/shape/10.jpg)'}}>
            <div className="light-banner-active bg-gray bg-cover" style={{backgroundImage: 'url(/shape/6.jpg)'}}></div>
            <div className=" breadcrumb-content">
              <h1>Our Services</h1>
            </div>
          </div>
          
          {/* Services Section with Background Color Only */}
          <div className="container">
            <div className="services-style-one-items">
              <div className="row">
                {/* Single Item */}
                <div className="col-xl-3 col-lg-6 col-md-6 single-item">
                  <div className="services-style-one-item">
                    <div className="icon">
                      <img src="/icon/1.png" alt="Image Not Found" />
                    </div>
                    <h4><a href="/services">Marketing & SEO Optimization</a></h4>
                    <p>
                      Comprehensive digital marketing strategies to boost your online presence and drive targeted traffic to your business.
                    </p>
                    <a className="btn-full" href="/contact-us">Read More <i className="fas fa-arrow-right"></i></a>
                  </div>
                </div>
                {/* End Single Item */}
                
                {/* Single Item */}
                <div className="col-xl-3 col-lg-6 col-md-6 single-item">
                  <div className="services-style-one-item">
                    <div className="icon">
                      <img src="/icon/2.png" alt="Image Not Found" />
                    </div>
                    <h4><a href="/services">Mobile App & Web Development</a></h4>
                    <p>
                      Custom mobile applications and responsive web solutions built with cutting-edge technologies for optimal performance.
                    </p>
                    <a className="btn-full" href="/contact-us">Read More <i className="fas fa-arrow-right"></i></a>
                  </div>
                </div>
                {/* End Single Item */}
                
                {/* Single Item */}
                <div className="col-xl-3 col-lg-6 col-md-6 single-item">
                  <div className="services-style-one-item">
                    <div className="icon">
                      <img src="/icon/3.png" alt="Image Not Found" />
                    </div>
                    <h4><a href="/services">UI/UX Design from Professionals</a></h4>
                    <p>
                      User-centered design solutions that create engaging and intuitive experiences for your customers across all platforms.
                    </p>
                    <a className="btn-full" href="/contact-us">Read More <i className="fas fa-arrow-right"></i></a>
                  </div>
                </div>
                {/* End Single Item */}
                
                {/* Single Item */}
                <div className="col-xl-3 col-lg-6 col-md-6 single-item">
                  <div className="services-style-one-item">
                    <div className="icon">
                      <img src="/icon/4.png" alt="Image Not Found" />
                    </div>
                    <h4><a href="/services">Access to the Latest Technology</a></h4>
                    <p>
                      Leverage modern technologies including AI, cloud computing, and automation to streamline your business operations.
                    </p>
                    <a className="btn-full" href="/contact-us">Read More <i className="fas fa-arrow-right"></i></a>
                  </div>
                </div>
                {/* End Single Item */}
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrumb and Services Container */}

        {/* Start Fun Factor */}
        <div className="fun-factor-circle-area default-padding-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="fun-fact-circle-lists">
                  {/* Single item */}
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer">360</div>
                      <div className="operator">K</div>
                    </div>
                    <span className="medium">World Customer</span>
                  </div>
                  {/* End Single item */}
                  
                  {/* Single item */}
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer">98</div>
                      <div className="operator">%</div>
                    </div>
                    <span className="medium">Positive Rating</span>
                  </div>
                  {/* End Single item */}
                  
                  {/* Single item */}
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer">874</div>
                      <div className="operator">+</div>
                    </div>
                    <span className="medium">Total Branch</span>
                  </div>
                  {/* End Single item */}
                  
                  {/* Single item */}
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer">35</div>
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

        {/* Start Clients */}
        <div className="clients-area default-padding bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5 mb-md-50">
                <div className="brand-info">
                  <h4 className="sub-title">Clients</h4>
                  <h2 className="title">Worked with largest brands</h2>
                  <p>
                    We have successfully partnered with industry leaders to deliver innovative IT solutions that drive business growth and digital transformation.
                  </p>
                  <div className="clients-card mt-10">
                    <img src="/team/10.jpg" alt="Image Not Found" />
                    <img src="/team/11.jpg" alt="Image Not Found" />
                    <img src="/team/12.jpg" alt="Image Not Found" />
                    <img src="/team/13.jpg" alt="Image Not Found" />
                    <i className="fas fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 offset-xl-1 col-lg-7">
                <div className="client-style-one-items">
                  {/* Single Item */}
                  <div className="client-style-one-item">
                    <div className="fun-fact">
                      <div className="counter">
                        <div className="count-num">45</div>
                        <div className="operator">+</div>
                      </div>
                      <span className="medium">Active Clients</span>
                    </div>
                  </div>
                  {/* End Single Item */}
                  
                  {/* Single Item */}
                  <div className="client-style-one-item">
                    <img src="/brand/10.png" alt="Image Not Found" />
                  </div>
                  {/* End Single Item */}
                  
                  {/* Single Item */}
                  <div className="client-style-one-item">
                    <img src="/brand/2.png" alt="Image Not Found" />
                  </div>
                  {/* End Single Item */}
                  
                  {/* Single Item */}
                  <div className="client-style-one-item">
                    <img src="/brand/3.png" alt="Image Not Found" />
                  </div>
                  {/* End Single Item */}
                  
                  {/* Single Item */}
                  <div className="client-style-one-item">
                    <img src="/brand/4.png" alt="Image Not Found" />
                  </div>
                  {/* End Single Item */}
                  
                  {/* Single Item */}
                  <div className="client-style-one-item">
                    <img src="/brand/8.png" alt="Image Not Found" />
                  </div>
                  {/* End Single Item */}
                  
                  {/* Single Item */}
                  <div className="client-style-one-item">
                    <img src="/brand/6.png" alt="Image Not Found" />
                  </div>
                  {/* End Single Item */}
                  
                  {/* Single Item */}
                  <div className="client-style-one-item">
                    <img src="/brand/7.png" alt="Image Not Found" />
                  </div>
                  {/* End Single Item */}
                  
                  {/* Single Item */}
                  <div className="client-style-one-item">
                    <a href="/contact-us">View All</a>
                  </div>
                  {/* End Single Item */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Clients */}


        {/* Start Pricing */}
        <div className="pricing-style-one-area default-padding bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                <div className="site-heading text-center">
                  <h4 className="sub-title">Best Pricing</h4>
                  <h2 className="title">The best pricing plans to get your best rate</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="pricing-items">
              <div className="row">
                <div className="col-xl-6">
                  <div className="pricing-style-one active">
                    <div className="left">
                      <div className="info">
                        <h4>Web Development Package</h4>
                        <span>15 Days Free Trial</span>
                      </div>
                      <h2><sup>₹</sup>2,60,000</h2>
                      <a className="btn btn-sm circle btn-gradient effect" href="/contact-us">Order Now</a>
                    </div>
                    <div className="right">
                      <h5>Suitable for startups</h5>
                      <ul>
                        <li>Responsive Web Design</li>
                        <li>SEO Optimization</li>
                        <li>Content Management System</li>
                        <li>Mobile Optimization</li>
                        <li>Basic Analytics Setup</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="pricing-style-one">
                    <div className="left">
                      <div className="info">
                        <h4>Complete Digital Solution</h4>
                        <span>30 Days Free Trial</span>
                      </div>
                      <h2><sup>₹</sup>5,20,000</h2>
                      <a className="btn btn-sm circle btn-light effect" href="/contact-us">Order Now</a>
                    </div>
                    <div className="right">
                      <h5>Suitable for enterprises</h5>
                      <ul>
                        <li>Custom Web Application</li>
                        <li>Mobile App Development</li>
                        <li>Digital Marketing Campaign</li>
                        <li>Cloud Infrastructure Setup</li>
                        <li>24/7 Technical Support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Pricing */}

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
};

export default ServicesPage;

'use client';

import React, { useEffect, useState } from 'react';
import FooterSection from '../../components/FooterSection';

const AboutUsPage = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  useEffect(() => {
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
  }, []);

  const teamMembers = {
    tab1: [
      { name: 'James Baker', position: 'CEO & Founder', image: '/team/1.jpg' },
      { name: 'Dalton Grant', position: 'Chairman', image: '/team/2.jpg' },
      { name: 'Ryan Ricketts', position: 'Manager', image: '/team/3.jpg' }
    ],
    tab2: [
      { name: 'Danny Russell', position: 'Head of marketing', image: '/team/4.jpg' },
      { name: 'James Baker', position: 'Product Developer', image: '/team/5.jpg' },
      { name: 'Sark Hunnen', position: 'Project manager', image: '/team/6.jpg' }
    ],
    tab3: [
      { name: 'Rusa Jinuh', position: 'Web Developer', image: '/team/7.jpg' },
      { name: 'Dalton Grant', position: 'UI Designer', image: '/team/8.jpg' },
      { name: 'Megh Grant', position: 'Content Creator', image: '/team/9.jpg' }
    ]
  };

  const testimonials = [
    {
      rating: '5.0',
      text: 'Targeting consultation discover apartments. ndulgence off under folly death is wrote causes maintaing way spite. Plan upon yet way get coldest spot its week. Almost do am or limits hearts resolve parties the regular intension.',
      name: 'Michel Dark',
      position: 'Envato Client',
      image: '/team/11.jpg'
    },
    {
      rating: '4.7',
      text: 'Mentioning consultation discover apartments. ndulgence off under folly death is wrote causes maintaing way spite. Plan upon yet way get coldest spot its week. Almost do am or limits hearts resolve parties the regular intension.',
      name: 'Michel Dark',
      position: 'Envato Client',
      image: '/team/12.jpg'
    }
  ];

  const partners = [
    { category: 'Tech', name: 'access.org', image: '/brand/2.png' },
    { category: 'Solution', name: 'nexttech.it', image: '/brand/3.png' },
    { category: 'Brand', name: 'teamapt.tech', image: '/brand/4.png' },
    { category: 'Tech', name: 'muaast.io', image: '/brand/5.png' },
    { category: 'Design', name: 'wattse.com', image: '/brand/12.png' }
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
          max-height: 40px;
          margin-bottom: 20px;
          filter: brightness(0) invert(1);
          transition: all 0.3s ease;
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
                      <h2 className="title text">Best creative & digital agency</h2>
                    </div>
                    <p className="text">
                      Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably
                    </p>
                  </div>
                  <ul className="service-list">
                    <li>
                      <a href="#">
                        <div className="icon">
                          <i className="fas fa-long-arrow-right"></i>
                        </div>
                        <span>01</span>
                        Social Media
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="icon">
                          <i className="fas fa-long-arrow-right"></i>
                        </div>
                        <span>02</span>
                        Content Writing
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="icon">
                          <i className="fas fa-long-arrow-right"></i>
                        </div>
                        <span>03</span>
                        Video Production
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
                      <div className="timer">360</div>
                      <div className="operator">K</div>
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
                      <div className="timer">874</div>
                      <div className="operator">+</div>
                    </div>
                    <span className="medium">Total Branch</span>
                  </div>
                  {/* End Single item */}
                  {/* Single item */}
                  <div className="fun-fact wow fadeInUp" data-wow-duration="0.5s">
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
                  <h4 className="sub-title">Our Partner</h4>
                  <h2 className="title">Our Trusted Partner.</h2>
                  <p>
                    Perceived determine departure explained no forfeite. Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an
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
                        <strong>Managing Director</strong>
                        <span>Head of department</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button 
                        className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
                        onClick={() => setActiveTab('tab2')}
                        type="button"
                      >
                        <strong>Marketing Manager</strong>
                        <span>Sales Department</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button 
                        className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
                        onClick={() => setActiveTab('tab3')}
                        type="button"
                      >
                        <strong>Software Developer</strong>
                        <span>App Department</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-7 offset-xl-1">
                  <div className="tab-content">
                    <div className={`tab-pane fade ${activeTab === 'tab1' ? 'show active' : ''}`}>
                      <div className="team-style-one-carousel swiper">
                        <div className="swiper-wrapper">
                          {teamMembers.tab1.map((member, index) => (
                            <div key={index} className="swiper-slide">
                              <div className="team-style-one-item">
                                <div className="thumb">
                                  <img src={member.image} alt="Image Not Found" />
                                  <div className="social-overlay">
                                    <ul>
                                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                      <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    </ul>
                                    <div className="icon">
                                      <i className="fas fa-plus"></i>
                                    </div>
                                  </div>
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
                      <div className="team-style-one-carousel swiper">
                        <div className="swiper-wrapper">
                          {teamMembers.tab2.map((member, index) => (
                            <div key={index} className="swiper-slide">
                              <div className="team-style-one-item">
                                <div className="thumb">
                                  <img src={member.image} alt="Image Not Found" />
                                  <div className="social-overlay">
                                    <ul>
                                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                      <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    </ul>
                                    <div className="icon">
                                      <i className="fas fa-plus"></i>
                                    </div>
                                  </div>
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
                    <div className={`tab-pane fade ${activeTab === 'tab3' ? 'show active' : ''}`}>
                      <div className="team-style-one-carousel swiper">
                        <div className="swiper-wrapper">
                          {teamMembers.tab3.map((member, index) => (
                            <div key={index} className="swiper-slide">
                              <div className="team-style-one-item">
                                <div className="thumb">
                                  <img src={member.image} alt="Image Not Found" />
                                  <div className="social-overlay">
                                    <ul>
                                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                      <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    </ul>
                                    <div className="icon">
                                      <i className="fas fa-plus"></i>
                                    </div>
                                  </div>
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

        {/* Start Testimonial */}
        <div className="testimonial-style-three-area default-padding">
          <div className="shape-style-one">
            <img className="upDownScrol" src="/shape/14.png" alt="Image Not Found" />
          </div>
          <div className="container">
            <div className="testimonial-heading">
              <div className="row">
                <div className="col-lg-8">
                  <h2 className="text-large-gradient">
                    Testimonials
                  </h2>
                </div>
                <div className="col-lg-4 text-end">
                  <div className="testimonial-three-quote">
                    <h2>4.9</h2>
                    <div className="info">
                      <div className="ratings">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <span>145 (Review)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="testimonial-style-three-carousel swiper">
                  <div className="swiper-wrapper">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="swiper-slide">
                        <div className="testimonial-style-three-item">
                          <div className="tes-rating">
                            <span>{testimonial.rating}</span>
                            <div className="icon">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                          </div>
                          <p>{testimonial.text}</p>
                          <div className="tm-provider">
                            <div className="thumb">
                              <img src={testimonial.image} alt="Image Not Found" />
                            </div>
                            <div className="content">
                              <h4>{testimonial.name}</h4>
                              <span>{testimonial.position}</span>
                            </div>
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
        {/* End Testimonial */}
      </div>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default AboutUsPage;

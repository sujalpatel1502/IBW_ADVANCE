import React from 'react';

const TestimonialSection = () => {
  return (
    <>
     <h2 
        style={{ position: "absolute", left: "-9999px" }}
      >
        Client Testimonials – AI Automation, Web Development, CRM Solutions & App Development
      </h2>

      <p 
        style={{ position: "absolute", left: "-9999px", top: "30px" }}
      >
        Read real testimonials from businesses who worked with Instabiz Web for mobile app development, AI automation, CRM development, 
        WhatsApp automation and custom web development projects.
      </p>
      <style jsx>{`
        /* User Icon Styling */
        .tm-provider .user-icon {
          width: 50px;
          height: 50px;
          margin-right: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          color: var(--color-primary);
        }
        
        .bg-dark .tm-provider .user-icon {
          color: var(--white);
        }
        
        /* Mobile Testimonial Cards Styling */
        @media (max-width: 767px) {
          .testimonial-style-three-item {
            padding: 20px !important;
            margin-bottom: 20px !important;
          }
          
          .testimonial-style-three-item p {
            font-size: 14px !important;
            line-height: 1.5 !important;
            margin-bottom: 15px !important;
          }
          
          .tes-rating {
            margin-bottom: 15px !important;
          }
          
          .tes-rating span {
            font-size: 16px !important;
          }
          
          .tes-rating .icon i {
            font-size: 12px !important;
          }
          
          .tm-provider {
            flex-direction: row !important;
            align-items: center !important;
          }
          
          .tm-provider .user-icon {
            width: 40px !important;
            height: 40px !important;
            margin-right: 12px !important;
            margin-bottom: 0 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            font-size: 24px !important;
            color: var(--color-primary) !important;
          }
          
          .tm-provider h4 {
            font-size: 14px !important;
            margin-bottom: 2px !important;
          }
          
          .tm-provider span {
            font-size: 12px !important;
          }
          
          .testimonial-heading h2 {
            font-size: 36px !important;
          }
          
          .testimonial-heading {
            margin-bottom: 30px !important;
          }
          
          .testimonial-style-three-area {
            padding: 40px 0 !important;
          }
          
          .testimonial-style-three-carousel {
            margin-top: 20px !important;
          }
          
          .testimonial-three-quote {
            transform: scale(0.8) !important;
            margin-bottom: 20px !important;
          }
          
          .testimonial-three-quote h2 {
            font-size: 18px !important;
          }
          
          .testimonial-three-quote .info span {
            font-size: 12px !important;
          }
          
          .testimonial-three-quote .ratings i {
            font-size: 10px !important;
          }
        }
      `}</style>
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
                {/* Single Item - BluTec */}
                <div className="swiper-slide">
                  <div className="testimonial-style-three-item">
                    <div className="tes-rating">
                      <span>5.0</span>
                      <div className="icon">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p>
                      IBW transformed our AI automation platform with cutting-edge solutions. Their expertise in AI tools and automation helped us scale efficiently. The team delivered exceptional results that exceeded our expectations.
                    </p>
                    <div className="tm-provider">
                      <div className="user-icon">
                        <i className="fas fa-user-circle"></i>
                      </div>
                      <div>
                        <h4>Rahul Shah</h4>
                        <span>BluTec AI - CTO</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}

                {/* Single Item - Carefix */}
                <div className="swiper-slide">
                  <div className="testimonial-style-three-item">
                    <div className="tes-rating">
                      <span>5.0</span>
                      <div className="icon">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p>
                      IBW developed a comprehensive healthcare management system for us. Their attention to detail and understanding of healthcare workflows made a significant impact on our patient care services.
                    </p>
                    <div className="tm-provider">
                      <div className="user-icon">
                        <i className="fas fa-user-circle"></i>
                      </div>
                      <div>
                        <h4>Dr. Arjun Mehta</h4>
                        <span>Carefix - CEO</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}

                {/* Single Item - Cashflex */}
                <div className="swiper-slide">
                  <div className="testimonial-style-three-item">
                    <div className="tes-rating">
                      <span>4.9</span>
                      <div className="icon">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p>
                      Working with IBW on our fintech platform was seamless. They delivered a robust payment solution that handles high transaction volumes. Their technical expertise and professional approach are unmatched.
                    </p>
                    <div className="tm-provider">
                      <div className="user-icon">
                        <i className="fas fa-user-circle"></i>
                      </div>
                      <div>
                        <h4>Rajesh Kumar</h4>
                        <span>Cashflex - CTO</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}

                {/* Single Item - Chennai Cabs */}
                <div className="swiper-slide">
                  <div className="testimonial-style-three-item">
                    <div className="tes-rating">
                      <span>5.0</span>
                      <div className="icon">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p>
                      IBW built our ride-hailing app that now has 10K+ downloads and 4-5K active users. Their mobile app development skills and understanding of transportation tech helped us create a successful platform.
                    </p>
                    <div className="tm-provider">
                      <div className="user-icon">
                        <i className="fas fa-user-circle"></i>
                      </div>
                      <div>
                        <h4>Vikram Singh</h4>
                        <span>Chennai Cabs - Co-Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}

                {/* Single Item - Estate Rent */}
                <div className="swiper-slide">
                  <div className="testimonial-style-three-item">
                    <div className="tes-rating">
                      <span>4.9</span>
                      <div className="icon">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p>
                      IBW developed our real estate platform that manages property listings efficiently. Their web development expertise and modern design approach helped us create an excellent user experience for our clients.
                    </p>
                    <div className="tm-provider">
                      <div className="user-icon">
                        <i className="fas fa-user-circle"></i>
                      </div>
                      <div>
                        <h4>Neha Desai</h4>
                        <span>Estate Rent - Director</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}

                {/* Single Item - Kabadi King */}
                <div className="swiper-slide">
                  <div className="testimonial-style-three-item">
                    <div className="tes-rating">
                      <span>5.0</span>
                      <div className="icon">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p>
                      IBW helped us build our B2B platform with excellent automation tools. Their CRM solutions and custom development helped streamline our business operations. Highly professional team with great communication.
                    </p>
                    <div className="tm-provider">
                      <div className="user-icon">
                        <i className="fas fa-user-circle"></i>
                      </div>
                      <div>
                        <h4>Amit Joshi</h4>
                        <span>Kabadi King - Managing Director</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}

                {/* Single Item - Sarvam Art */}
                <div className="swiper-slide">
                  <div className="testimonial-style-three-item">
                    <div className="tes-rating">
                      <span>5.0</span>
                      <div className="icon">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p>
                      IBW developed our student management system that transformed how we manage coaching centers. The Odoo CRM implementation was flawless, and their ongoing support has been exceptional. Highly recommended!
                    </p>
                    <div className="tm-provider">
                      <div className="user-icon">
                        <i className="fas fa-user-circle"></i>
                      </div>
                      <div>
                        <h4>Priya Reddy</h4>
                        <span>Sarvam Art - Principal</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
              </div>

              {/* Navigation */}
              <div className="testimonial-control">
                <div className="swiper-pagination"></div>
                <div className="swiper-nav-left">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TestimonialSection;
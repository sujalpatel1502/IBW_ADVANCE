import React from 'react';

const TestimonialSection = () => {
  return (
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
                {/* Single Item */}
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
                      IBW delivered exceptional results for our digital transformation project. Their team's expertise in modern technologies and attention to detail exceeded our expectations. The project was completed on time and within budget.
                    </p>
                    <div className="tm-provider">
                      <img src="/team/11.jpg" alt="Image Not Found" />
                      <div>
                        <h4>Sarah Johnson</h4>
                        <span>Tech Startup CEO</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}

                {/* Single Item */}
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
                      Working with IBW has been a game-changer for our business. Their innovative solutions and professional approach helped us streamline our operations and improve our customer experience significantly.
                    </p>
                    <div className="tm-provider">
                      <img src="/team/12.jpg" alt="Image Not Found" />
                      <div>
                        <h4>Michael Chen</h4>
                        <span>Enterprise Solutions Director</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}

                {/* Single Item */}
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
                      IBW's team demonstrated outstanding technical skills and creativity in developing our custom software solution. Their communication throughout the project was excellent, and the final product exceeded our requirements.
                    </p>
                    <div className="tm-provider">
                      <img src="/team/11.jpg" alt="Image Not Found" />
                      <div>
                        <h4>Emily Rodriguez</h4>
                        <span>Product Manager</span>
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
  );
};

export default TestimonialSection;

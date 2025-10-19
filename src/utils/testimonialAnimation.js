import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initTestimonialAnimation = () => {
  // Initialize Swiper for testimonials
  if (typeof window !== 'undefined' && window.Swiper) {
    const testimonialSwiper = new window.Swiper('.testimonial-style-three-carousel', {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.testimonial-control .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.testimonial-control .swiper-button-next',
        prevEl: '.testimonial-control .swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }

  // Shape animation
  const upDownScroll = document.querySelector('.upDownScrol');
  if (upDownScroll) {
    gsap.to(upDownScroll, {
      y: -20,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });
  }

  // Testimonial items animation
  const testimonialItems = document.querySelectorAll('.testimonial-style-three-item');
  testimonialItems.forEach((item, index) => {
    gsap.fromTo(item, 
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Rating animation
  const ratings = document.querySelectorAll('.tes-rating .icon i');
  ratings.forEach((star, index) => {
    gsap.fromTo(star,
      {
        scale: 0,
        rotation: 180,
      },
      {
        scale: 1,
        rotation: 0,
        duration: 0.5,
        delay: index * 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: star.closest('.testimonial-style-three-item'),
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};

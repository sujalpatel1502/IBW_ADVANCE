// Enhanced Smooth Scrolling Implementation - Based on index-6.html
import { gsap } from 'gsap';

export const initSmoothScroll = () => {
  const width = window.innerWidth;
  
  // Only enable smooth scrolling on desktop
  if (width > 1023) {
    // Add smooth scrolling CSS
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      .smooth-scroll-container {
        scroll-behavior: smooth;
      }
      
      /* Custom smooth scroll for better performance */
      @media (prefers-reduced-motion: no-preference) {
        html {
          scroll-behavior: smooth;
        }
      }
    `;
    document.head.appendChild(style);
    
    // Enhanced smooth scrolling for anchor links with GSAP
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        
        // Skip if href is external URL or mailto link
        if (targetId && (targetId.startsWith('http://') || targetId.startsWith('https://') || targetId.startsWith('mailto:'))) {
          return; // Allow default behavior for external links
        }
        
        // Only handle valid selectors (not just "#")
        if (targetId && targetId !== '#' && targetId.startsWith('#')) {
          e.preventDefault();
          
          try {
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
              const headerHeight = 80; // Account for fixed header
              const targetPosition = targetElement.offsetTop - headerHeight;
              
              // Use native smooth scroll with GSAP easing
              window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
              });
            }
          } catch (error) {
            console.warn('Invalid selector:', targetId);
          }
        }
      });
    });
    
    // Add basic scroll-triggered animations
    const animatedElements = document.querySelectorAll('.wow, [data-wow-delay], [data-wow-duration]');
    
    animatedElements.forEach((element, index) => {
      gsap.fromTo(element, 
        { 
          opacity: 0, 
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out"
        }
      );
    });
  }
};

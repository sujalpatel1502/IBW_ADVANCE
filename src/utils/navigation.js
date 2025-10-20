// Navigation JavaScript functionality
// Based on validnavs.js

import { safeBodyClass } from './safeBodyClass';

export const initializeNavigation = () => {
  // Simple menu functionality
  const simpleMenuItems = document.querySelectorAll('.simple-menu-list > li');
  
  simpleMenuItems.forEach(item => {
    const link = item.querySelector('a');
    const icon = item.querySelector('i');
    const subMenu = item.querySelector('.sub-menu');
    
    if (subMenu) {
      // Add click event to toggle submenu
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Close other open submenus
        simpleMenuItems.forEach(otherItem => {
          if (otherItem !== item) {
            const otherSubMenu = otherItem.querySelector('.sub-menu');
            const otherIcon = otherItem.querySelector('i');
            if (otherSubMenu) {
              otherSubMenu.style.display = 'none';
              otherIcon.style.transform = 'rotate(0deg)';
            }
          }
        });
        
        // Toggle current submenu
        if (subMenu.style.display === 'block') {
          subMenu.style.display = 'none';
          icon.style.transform = 'rotate(0deg)';
        } else {
          subMenu.style.display = 'block';
          icon.style.transform = 'rotate(45deg)';
        }
      });
    }
  });

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerHeight = document.querySelector('.navbar')?.offsetHeight || 0;
          const targetPosition = target.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Close side menu when clicking outside
  const overlay = document.querySelector('.overlay-screen');
  const sideMenu = document.querySelector('.side');
  
  if (overlay && sideMenu) {
    overlay.addEventListener('click', () => {
      sideMenu.classList.remove('on');
      overlay.classList.remove('opened');
      safeBodyClass.remove('on-side');
    });
  }

  // Handle window resize
  window.addEventListener('resize', () => {
    // Close mobile menu on desktop
    if (window.innerWidth > 1023) {
      const sideMenu = document.querySelector('.side');
      const overlay = document.querySelector('.overlay-screen');
      if (sideMenu && overlay) {
        sideMenu.classList.remove('on');
        overlay.classList.remove('opened');
        safeBodyClass.remove('on-side');
      }
    }
  });

  // Newsletter form handling
  const newsletterForm = document.querySelector('.widget.newsletter form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]').value;
      
      if (email) {
        // Here you would typically send the email to your backend
        console.log('Newsletter subscription:', email);
        alert('Thank you for subscribing!');
        newsletterForm.reset();
      }
    });
  }
};

// Initialize navigation when DOM is loaded
export const initNavigation = () => {
  if (typeof window !== 'undefined') {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeNavigation);
    } else {
      initializeNavigation();
    }
  }
};

// Export for use in components
export default {
  initializeNavigation,
  initNavigation
};

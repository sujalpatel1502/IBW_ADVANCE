// Portfolio Scroll Animation Implementation
export const initPortfolioAnimation = () => {
  // Wait for GSAP to be available
  if (typeof window === 'undefined' || !window.gsap || !window.ScrollTrigger) {
    setTimeout(initPortfolioAnimation, 100);
    return;
  }

  const { gsap, ScrollTrigger } = window;
  
  // Register ScrollTrigger plugin with GSAP
  gsap.registerPlugin(ScrollTrigger);

  const portfolioItems = document.querySelector(".portfolio-style-three-items");
  
  if (portfolioItems) {
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function() {
        let pbmitpanels = gsap.utils.toArray(".portfolio-style-three-item");
        const spacer = 0;

        let pbmitheight = pbmitpanels[0].offsetHeight + 30;
        pbmitpanels.forEach((pbmitpanel, i) => {
          // This is for padding between item
          gsap.set(pbmitpanel, {
            top: i * 0
          });
          
          const tween = gsap.to(pbmitpanel, {
            scrollTrigger: {
              trigger: pbmitpanel,
              start: () => `top bottom-=100`,
              end: () => `top top+=0`,
              scrub: true,
              invalidateOnRefresh: true
            },
            ease: "none",
            // This is for scaling outside 
            scale: () => 1 - (pbmitpanels.length - i) * 0.025
          });
          
          ScrollTrigger.create({
            trigger: pbmitpanel,
            start: () => "top 140px",
            endTrigger: '.portfolio-style-three-items',
            end: `bottom top+=${pbmitheight + (pbmitpanels.length * spacer)}`,
            pin: true,
            pinSpacing: false,
          });
        });
      },
      "(max-width:1025px)": function() {
        // Mobile stacking animation
        let pbmitpanels = gsap.utils.toArray(".portfolio-style-three-item");
        const spacer = 0;

        let pbmitheight = pbmitpanels[0].offsetHeight + 60; // Smaller spacing for mobile
        pbmitpanels.forEach((pbmitpanel, i) => {
          // This is for padding between item
          gsap.set(pbmitpanel, {
            top: i * 0
          });
          
          const tween = gsap.to(pbmitpanel, {
            scrollTrigger: {
              trigger: pbmitpanel,
              start: () => `top bottom-=50`, // Smaller offset for mobile
              end: () => `top top+=0`,
              scrub: true,
              invalidateOnRefresh: true
            },
            ease: "none",
            // This is for scaling outside - smaller scale for mobile
            scale: () => 1 - (pbmitpanels.length - i) * 0.015
          });
          
          ScrollTrigger.create({
            trigger: pbmitpanel,
            start: () => "top 80px", // Smaller start point for mobile
            endTrigger: '.portfolio-style-three-items',
            end: `bottom top+=${pbmitheight + (pbmitpanels.length * spacer)}`,
            pin: true,
            pinSpacing: false,
          });
        });
      }
    });
  }
};

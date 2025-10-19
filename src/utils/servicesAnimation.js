// Services Scroll Animation Implementation
export const initServicesAnimation = () => {
  // Wait for GSAP to be available
  if (typeof window === 'undefined' || !window.gsap || !window.ScrollTrigger) {
    setTimeout(initServicesAnimation, 100);
    return;
  }

  const { gsap, ScrollTrigger } = window;
  
  // Register ScrollTrigger plugin with GSAP
  gsap.registerPlugin(ScrollTrigger);
  
  const itemMoveTop = document.querySelector(".item-move-top-items");
  
  if (itemMoveTop) {
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function() {
        let pbmitpanels = gsap.utils.toArray(".item-move-top-item");
        const spacer = 0;

        let pbmitheight = pbmitpanels[0].offsetHeight + 120;
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
            scale: () => 1 - (pbmitpanels.length - i) * 0.0
          });
          
          ScrollTrigger.create({
            trigger: pbmitpanel,
            start: () => "top 140px",
            endTrigger: '.item-move-top-items',
            end: `bottom top+=${pbmitheight + (pbmitpanels.length * spacer)}`,
            pin: true,
            pinSpacing: false,
          });
        });
      },
      "(max-width:1025px)": function() {
        ScrollTrigger.getAll().forEach(pbmitpanels => pbmitpanels.kill(true));
      }
    });
  }
};

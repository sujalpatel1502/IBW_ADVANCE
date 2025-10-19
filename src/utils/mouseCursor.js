// Simple Mouse Cursor Implementation - Single Dot
import { gsap } from 'gsap';

export const initMouseCursor = () => {
  const cursor = document.querySelector(".cursor");
  
  if (!cursor) return;
  
  // Only enable on desktop
  if (window.innerWidth <= 1023) return;
  
  let posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

  // GSAP animation loop for smooth following
  gsap.to({}, 0.02, {
    repeat: -1,
    onRepeat: function() {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      gsap.set(cursor, {
        css: {
          left: posX,
          top: posY
        }
      });
    }
  });

  // Mouse move event
  document.addEventListener("mousemove", (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });
};

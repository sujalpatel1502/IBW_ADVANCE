// Safe body class management for hydration
export const safeBodyClass = {
  add: (className) => {
    if (typeof window !== 'undefined') {
      document.body.classList.add(className);
    }
  },
  remove: (className) => {
    if (typeof window !== 'undefined') {
      document.body.classList.remove(className);
    }
  },
  toggle: (className) => {
    if (typeof window !== 'undefined') {
      document.body.classList.toggle(className);
    }
  },
  setStyle: (property, value) => {
    if (typeof window !== 'undefined') {
      document.body.style[property] = value;
    }
  }
};

# IBW - IT Solutions Website

A modern Next.js website with a professional navigation system based on the Dixor template.

## Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with Header component
│   ├── page.js           # Home page with banner and services
│   └── globals.css       # Global styles and CSS variables
├── components/
│   ├── Header.js         # Main navigation header
│   └── SideMenu.js       # Mobile side navigation menu
├── styles/
│   ├── navigation.css    # Navigation-specific styles
│   └── page.css          # Page content styles
└── utils/
    └── navigation.js     # Navigation JavaScript functionality
```

## Features

### Navigation System
- **Responsive Header**: Fixed navigation with logo and contact info
- **Mobile Side Menu**: Slide-out navigation for mobile devices
- **Sticky Navigation**: Header becomes sticky on scroll
- **Smooth Animations**: CSS transitions and hover effects

### Components

#### Header Component (`/src/components/Header.js`)
- Logo display with light/dark variants
- Contact information display
- Social media links
- Mobile menu toggle button
- Responsive design

#### SideMenu Component (`/src/components/SideMenu.js`)
- Slide-out navigation menu
- Multi-level menu structure
- Newsletter subscription form
- Contact information widget
- Social media links

### Styling

#### Navigation CSS (`/src/styles/navigation.css`)
- Complete navigation styling
- Responsive breakpoints
- Dark theme support
- Animation effects
- Mobile-first approach

#### Page CSS (`/src/styles/page.css`)
- Banner section styling
- Services grid layout
- Preloader animations
- Utility classes
- Responsive design

### JavaScript Functionality (`/src/utils/navigation.js`)
- Menu toggle functionality
- Submenu accordion behavior
- Smooth scrolling
- Newsletter form handling
- Responsive behavior

## Usage

The navigation system is automatically initialized when the page loads. The Header component is included in the root layout, so it appears on all pages.

### Key Features:
1. **Mobile-First Design**: Responsive navigation that works on all devices
2. **Modern UI**: Clean, professional design based on the Dixor template
3. **Accessibility**: Proper ARIA labels and keyboard navigation
4. **Performance**: Optimized CSS and JavaScript
5. **Customizable**: Easy to modify colors, fonts, and layout

## Customization

### Colors
Modify the CSS variables in `globals.css`:
```css
:root {
  --color-primary: #007bff;
  --color-dark: #1a1a1a;
  --color-white: #ffffff;
  /* ... other variables */
}
```

### Menu Items
Update the menu structure in `SideMenu.js`:
```jsx
<ul className="simple-menu-list">
  <li>
    <a href="#">Your Menu Item</a>
    <i className="fas fa-plus"></i>
    <ul className="sub-menu">
      <li><a href="/sub-item">Sub Item</a></li>
    </ul>
  </li>
</ul>
```

### Logo
Replace the logo images in the `public` folder:
- `logo-light.png` - Light version for dark backgrounds
- `logo.png` - Dark version for light backgrounds

## Dependencies

- Next.js 14+
- React 18+
- Font Awesome icons (CDN recommended)

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Development

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)

## Production Build

1. Build the project: `npm run build`
2. Start production server: `npm start`

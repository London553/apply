# Quick Start Guide

## Installation

1. **Open terminal in the MY_Startup folder**

2. **Install dependencies:**
```bash
npm install
```

This will download and install:
- React and ReactDOM
- Tailwind CSS
- Vite (build tool)
- PostCSS and Autoprefixer

## Development

**Start the development server:**
```bash
npm run dev
```

The website will automatically open at `http://localhost:3000`

Any changes you make to files will automatically refresh in the browser.

## Project Layout

- **Calculator** at the top of the page - main feature
- **Hero section** with floating statistics
- **Why Us section** highlighting brand values
- **Footer** with links
- **Modal** that appears when calculator is submitted

## Customization Tips

### Change Colors
Edit `tailwind.config.js` and modify the `colors` section

### Change Pricing
Edit `src/components/Calculator.jsx`:
```javascript
const BASE_PRICE = 20
const JOB_PRICE = 8
const OPPORTUNITY_PRICE = 12
```

### Change Jotform Link
Edit `src/components/Modal.jsx`:
```javascript
const jotformLink = 'YOUR_NEW_JOTFORM_URL'
```

### Update Brand Name
Edit `src/components/Navbar.jsx` and other components

## Building for Production

```bash
npm run build
```

This creates a `dist` folder with optimized, minified files ready to deploy.

## Deployment Options

### Netlify (Recommended)
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run: `netlify deploy --prod --dir=dist`

### Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`

### GitHub Pages
1. Update `vite.config.js` base path
2. Run: `npm run build`
3. Deploy the `dist` folder

## Need Help?

- Check React docs: https://react.dev
- Check Tailwind docs: https://tailwindcss.com
- Check Vite docs: https://vitejs.dev

Enjoy building! 🚀

# Elegance Salon - A Modern Unisex Salon Website

A visually stunning, modern website design for a unisex salon featuring high-quality imagery and intuitive navigation with React and Tailwind CSS.

## Features

- **Modern Design**: Clean, sophisticated aesthetic with intuitive navigation
- **Responsive Layout**: Fully responsive design that works on all devices
- **Section-Based Structure**: Well-organized sections including:
  - Home with captivating hero image
  - About Us with salon story and philosophy
  - Services featuring salon offerings with beautiful imagery
  - Experts/Team section showcasing salon professionals
  - Testimonials with client reviews
  - Contact section with form and location map

## Technology Stack

- **React**: For building the user interface
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For styling
- **Framer Motion**: For animations
- **ShadCN UI**: For UI components
- **React Query**: For data fetching
- **React Hook Form**: For form handling

## Deployment

### Frontend-Only Deployment to Netlify

To deploy just the frontend portion to Netlify:

1. **Prepare for deployment**:
   ```bash
   # No preparation needed - configuration files are already set up
   ```

2. **Deploy via Netlify Dashboard**:
   - Connect your repository to Netlify
   - Use these build settings:
     - Build command: `node build-frontend.js`
     - Publish directory: `dist`

3. **Deploy via Netlify CLI**:
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Login to Netlify
   netlify login
   
   # Initialize Netlify in your project
   netlify init
   
   # Deploy your site
   netlify deploy --prod
   ```

## License

MIT
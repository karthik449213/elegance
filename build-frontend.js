// Simple script to build just the frontend for Netlify deployment
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Define paths
const distDir = path.resolve('./dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Build the frontend with Vite
console.log('Building frontend with Vite...');
execSync('npx vite build --config frontend-vite.config.ts', { stdio: 'inherit' });

// Copy the _redirects file for Netlify
console.log('Copying Netlify configuration files...');
const redirectsContent = '/*  /index.html  200';
fs.writeFileSync(path.join(distDir, '_redirects'), redirectsContent);

// Add a basic robots.txt
const robotsContent = 'User-agent: *\nAllow: /';
fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsContent);

console.log('Frontend build completed successfully!');
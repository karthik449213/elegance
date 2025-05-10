// This file configures the Express app for production deployment on Netlify

import { Express } from 'express';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function setupNetlifyDeployment(app: Express) {
  // Serve the static files from the dist directory
  app.use(express.static(path.join(__dirname, '../dist')));

  // For all routes not matched by the API, serve the SPA
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}
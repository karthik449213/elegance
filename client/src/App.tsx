import { useState, useEffect } from "react";
import { Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

function Router() {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="*" component={NotFound} />
    </>
  );
}

function App() {
  // Add metadata to the document head
  useEffect(() => {
    document.title = "Elegance | Luxury Unisex Salon";

    // Create meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Experience luxury at Elegance Salon. We offer premium hair and beauty services including haircuts, coloring, treatments, and styling in a welcoming environment.';
    document.head.appendChild(metaDescription);

    // OpenGraph tags for better social sharing
    const ogTags = [
      { property: 'og:title', content: 'Elegance | Luxury Unisex Salon' },
      { property: 'og:description', content: 'Experience premium hair and beauty services at Elegance Salon. Book your appointment today for a transformative experience.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
    ];

    ogTags.forEach(tag => {
      const metaTag = document.createElement('meta');
      metaTag.setAttribute('property', tag.property);
      metaTag.setAttribute('content', tag.content);
      document.head.appendChild(metaTag);
    });

    // Import Google Fonts dynamically
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap';
    document.head.appendChild(link);

    // Import Font Awesome
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesome);

    return () => {
      document.head.removeChild(metaDescription);
      ogTags.forEach(tag => {
        const element = document.querySelector(`meta[property="${tag.property}"]`);
        if (element) document.head.removeChild(element);
      });
      document.head.removeChild(link);
      document.head.removeChild(fontAwesome);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

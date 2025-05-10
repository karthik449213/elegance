import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experts from "@/components/Experts";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection("contact");
    }
  };

  // Set up intersection observers to detect which section is in view
  useEffect(() => {
    const sections = ["home", "about", "services", "experts", "testimonials", "contact"];
    
    const observers = sections.map((sectionId) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveSection(sectionId);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: "-80px 0px -20% 0px", // Account for navbar height
        }
      );

      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }

      return { id: sectionId, observer };
    });

    return () => {
      observers.forEach(({ id, observer }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
      <Hero onActionClick={handleScrollToContact} />
      <About />
      <Services onBookNowClick={handleScrollToContact} />
      <Experts />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

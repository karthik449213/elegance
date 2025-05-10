import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { salonTestimonials } from "@/data/salonData";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  // Set up automatic slideshow
  useEffect(() => {
    startSlideInterval();
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [currentIndex]);

  const startSlideInterval = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    slideInterval.current = setInterval(() => {
      goToSlide((currentIndex + 1) % salonTestimonials.length);
    }, 5000);
  };

  const pauseSlideInterval = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = null;
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? salonTestimonials.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % salonTestimonials.length;
    goToSlide(newIndex);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-800 section-title">
            Client Testimonials
          </h2>
          <p className="mt-4 text-lg text-neutral-800 max-w-2xl mx-auto">
            Read what our satisfied clients have to say about their experiences
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={pauseSlideInterval}
          onMouseLeave={startSlideInterval}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {salonTestimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="testimonial-card w-full flex-shrink-0 px-4">
                  <motion.div 
                    className="bg-[hsl(0,0%,97%)] rounded-lg shadow-lg p-8 relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-4xl text-[hsl(51,100%,50%)]">
                      <i className="fas fa-quote-left"></i>
                    </div>
                    <p className="mt-6 text-neutral-800 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-neutral-800">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-[hsl(350,28%,45%)]">{testimonial.status}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-neutral-800 hover:text-teal-dark focus:outline-none"
            onClick={handlePrev}
          >
            <ChevronLeft />
          </button>
          <button
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-neutral-800 hover:text-teal-dark focus:outline-none"
            onClick={handleNext}
          >
            <ChevronRight />
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {salonTestimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-[hsl(51,100%,50%)]" : "bg-neutral-300"
                }`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

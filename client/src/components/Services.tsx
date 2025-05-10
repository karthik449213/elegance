import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { salonServices } from "@/data/salonData";

interface ServicesProps {
  onBookNowClick: () => void;
}

const Services = ({ onBookNowClick }: ServicesProps) => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-800 section-title">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-neutral-800 max-w-2xl mx-auto">
            Discover our comprehensive range of premium beauty services
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {salonServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card overflow-hidden rounded-lg shadow-lg relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="service-info absolute inset-0 bg-neutral-800 bg-opacity-75 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-2xl font-display font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white mb-4">{service.description}</p>
                <Button
                  className="w-full py-2 bg-[hsl(51,100%,50%)] text-neutral-800 font-bold rounded hover:bg-opacity-90 transition"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            onClick={onBookNowClick}
            className="px-8 py-4 bg-[hsl(177,55%,22%)] text-white font-bold rounded-md hover:bg-opacity-90 transition transform hover:scale-105 shadow-lg"
          >
            Book Your Service Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

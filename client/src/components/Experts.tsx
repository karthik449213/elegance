import { motion } from "framer-motion";
import { salonExperts } from "@/data/salonData";

const Experts = () => {
  return (
    <section id="experts" className="py-20 bg-[hsl(0,0%,97%)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-800 section-title">
            Meet Our Experts
          </h2>
          <p className="mt-4 text-lg text-neutral-800 max-w-2xl mx-auto">
            Our talented team of professionals dedicated to bringing out your best
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {salonExperts.map((expert, index) => (
            <motion.div
              key={expert.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={expert.image}
                alt={`${expert.name} - ${expert.role}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-neutral-800">
                  {expert.name}
                </h3>
                <p className="text-[hsl(350,28%,45%)] font-medium mb-3">{expert.role}</p>
                <p className="text-neutral-800 text-sm mb-4">{expert.bio}</p>
                <div className="flex space-x-3">
                  {expert.socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      className="text-neutral-800 hover:text-teal-dark transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;

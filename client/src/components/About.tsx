import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[hsl(0,0%,97%)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-800 section-title">
            About Us
          </h2>
          <p className="mt-4 text-lg text-neutral-800 max-w-2xl mx-auto">
            Discover our story, philosophy, and commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-display font-semibold" style={{ color: "hsl(177, 55%, 22%)" }}>
                Our Story
              </h3>
              <p className="text-neutral-800">
                Founded in 2010, Elegance has grown from a small local salon to a premium
                destination for those seeking exceptional beauty services. Our journey
                has been driven by passion, creativity, and dedication to our craft.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-display font-semibold" style={{ color: "hsl(177, 55%, 22%)" }}>
                Our Philosophy
              </h3>
              <p className="text-neutral-800">
                We believe that beauty is unique to each individual. Our approach
                combines technical excellence with personalized care, ensuring that
                every client leaves feeling confident and rejuvenated.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-display font-semibold" style={{ color: "hsl(177, 55%, 22%)" }}>
                Our Promise
              </h3>
              <p className="text-neutral-800">
                At Elegance, we promise an exceptional experience from the moment
                you walk in. Using only premium products and continuous education
                for our stylists, we guarantee results that exceed expectations.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                alt: "Elegant Salon Reception",
                delay: 0
              },
              {
                src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                alt: "Modern Salon Interior",
                delay: 0.2
              },
              {
                src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                alt: "Salon Relaxation Area",
                delay: 0.4
              },
              {
                src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                alt: "Premium Salon Products",
                delay: 0.6
              }
            ].map((image, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: image.delay }}
                viewport={{ once: true }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

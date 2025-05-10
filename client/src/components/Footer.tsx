import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() !== "") {
      // Here we would normally submit to an API
      console.log("Subscribed with email:", email);
      setIsSubscribed(true);
      setEmail("");

      // Reset the subscription status after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-[hsl(177,55%,22%)] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-display font-semibold mb-4"
            >
              Elegance
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              Your destination for premium hair and beauty services in a
              luxurious setting.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              <a
                href="#"
                className="text-white hover:text-[hsl(51,100%,50%)] transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-[hsl(51,100%,50%)] transition"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-[hsl(51,100%,50%)] transition"
              >
                <i className="fab fa-pinterest"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-[hsl(51,100%,50%)] transition"
              >
                <i className="fab fa-tiktok"></i>
              </a>
            </motion.div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl font-display font-semibold mb-4"
            >
              Quick Links
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              {["Home", "About Us", "Services", "Our Team", "Testimonials", "Contact"].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="hover:text-[hsl(51,100%,50%)] transition"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </motion.ul>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-xl font-display font-semibold mb-4"
            >
              Newsletter
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              Subscribe to receive updates on promotions, new services, and
              beauty tips.
            </motion.p>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-neutral-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-[hsl(51,100%,50%)] text-neutral-800 font-bold px-4 py-2 rounded-r-md hover:bg-opacity-90 transition"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </motion.form>
            {isSubscribed && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm mt-2 text-[hsl(51,100%,50%)]"
              >
                Thank you for subscribing!
              </motion.p>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-white border-opacity-20 text-center text-sm"
        >
          <p>&copy; {new Date().getFullYear()} Elegance Salon. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

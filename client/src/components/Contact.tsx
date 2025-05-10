import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  service: z.string({ required_error: "Please select a service" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // We would normally submit to an API here
      console.log(values);
      
      // Show success toast
      toast({
        title: "Form Submitted",
        description: "Thank you! Your message has been sent.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your form.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[hsl(0,0%,97%)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-800 section-title">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-neutral-800 max-w-2xl mx-auto">
            Book your appointment or reach out with any questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-neutral-800 font-semibold mb-2">
                        Your Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full px-4 py-3 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-dark"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-neutral-800 font-semibold mb-2">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="w-full px-4 py-3 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-dark"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-neutral-800 font-semibold mb-2">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="tel"
                          className="w-full px-4 py-3 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-dark"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-neutral-800 font-semibold mb-2">
                        Service Interested In
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-dark">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="haircut">Haircut & Styling</SelectItem>
                          <SelectItem value="coloring">Hair Coloring</SelectItem>
                          <SelectItem value="treatments">Hair Treatments</SelectItem>
                          <SelectItem value="extensions">Extensions & Texturing</SelectItem>
                          <SelectItem value="bridal">Bridal & Special Events</SelectItem>
                          <SelectItem value="makeup">Makeup & Beauty</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-neutral-800 font-semibold mb-2">
                        Your Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={4}
                          className="w-full px-4 py-3 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-dark"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[hsl(177,55%,22%)] text-white font-bold rounded-md hover:bg-opacity-90 transition transform hover:scale-105"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
              <div className="h-64 relative">
                {/* Google Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095899603!2d-73.98823492404019!3d40.74127397124259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689293087800!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-display font-semibold text-neutral-800 mb-4">
                  Salon Location
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-[hsl(350,28%,45%)] mr-4 mt-1">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <p className="text-neutral-800">
                      123 Fashion Avenue, <br />
                      New York, NY 10001
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="text-[hsl(350,28%,45%)] mr-4 mt-1">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <p className="text-neutral-800">(212) 555-1234</p>
                  </div>

                  <div className="flex items-start">
                    <div className="text-[hsl(350,28%,45%)] mr-4 mt-1">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <p className="text-neutral-800">info@elegancesalon.com</p>
                  </div>

                  <div className="flex items-start">
                    <div className="text-[hsl(350,28%,45%)] mr-4 mt-1">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <p className="text-neutral-800 font-semibold">
                        Hours of Operation:
                      </p>
                      <p className="text-neutral-800">
                        Monday - Friday: 9:00 AM - 8:00 PM
                      </p>
                      <p className="text-neutral-800">
                        Saturday: 9:00 AM - 7:00 PM
                      </p>
                      <p className="text-neutral-800">
                        Sunday: 10:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-display font-semibold text-neutral-800 mb-2">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-neutral-800 hover:text-teal-dark transition text-xl"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="#"
                      className="text-neutral-800 hover:text-teal-dark transition text-xl"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="text-neutral-800 hover:text-teal-dark transition text-xl"
                    >
                      <i className="fab fa-pinterest"></i>
                    </a>
                    <a
                      href="#"
                      className="text-neutral-800 hover:text-teal-dark transition text-xl"
                    >
                      <i className="fab fa-tiktok"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

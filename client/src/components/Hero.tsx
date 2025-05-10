import { Button } from "@/components/ui/button";

interface HeroProps {
  onActionClick: () => void;
}

const Hero = ({ onActionClick }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury Salon Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-800 bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
          Experience Luxury <br /> at Elegance Salon
        </h1>
        <p className="text-xl text-white mb-8 max-w-xl mx-auto">
          Where beauty meets expertise for a transformative experience
        </p>
        <Button
          onClick={onActionClick}
          className="px-8 py-6 bg-[hsl(51,100%,50%)] text-neutral-800 font-bold rounded-md hover:bg-opacity-90 transition transform hover:scale-105 shadow-lg"
        >
          Book an Appointment
        </Button>
      </div>
    </section>
  );
};

export default Hero;

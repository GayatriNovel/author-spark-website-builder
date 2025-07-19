import { Button } from "@/components/ui/button";
import heroImage from "@/assets/author-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Sarah 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Mitchell</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90 font-light">
            Bestselling Author & Storyteller
          </p>
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Crafting compelling narratives that explore the depths of human emotion, 
            love, and resilience. Join thousands of readers on unforgettable journeys.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="literary" size="lg" className="min-w-[200px]">
              Explore My Books
            </Button>
            <Button variant="elegant" size="lg" className="min-w-[200px]">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
import { Button } from "@/components/ui/button";
import { ArrowDown, Heart, Leaf, Newspaper } from "lucide-react";
import heroImage from "@/assets/hero-harvest.jpg";
import { useEffect } from "react";
import confetti from "canvas-confetti";

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('harvest-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Confetti celebration on first visit (once per session)
  useEffect(() => {
    const shown = sessionStorage.getItem("confettiShown");
    if (shown) return;
    const duration = 2000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 90,
        spread: 75,
        origin: { x: Math.random() * 0.4 + 0.3, y: 0 },
        drift: 0,
        gravity: 1.2,
        ticks: 200,
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
    sessionStorage.setItem("confettiShown", "1");
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Community harvesting fresh produce"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm font-medium mb-8">
            <Leaf className="w-4 h-4" />
            Turning backyard surplus into community support
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Harvesting
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Sustainability
            </span>
            Project
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
            Reducing food waste, building stronger communities, and delivering fresh, 
            homegrown produce to those in need—one harvest at a time.
          </p>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToForm}
              className="group"
            >
              Schedule a Harvest
              <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              onClick={() => {
                const howItWorksSection = document.getElementById('how-it-works');
                howItWorksSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">1729 lbs</div>
              <div className="text-white/80 text-sm">Fresh Produce Donated</div>
            </div>
            
            <a
              href="https://www.losaltosonline.com/schools/los-altos-teens-reducing-food-waste-by-collecting-produce-for-hope-s-corner/article_4fc53a04-011d-4a0a-a7e4-d9ed0e0b79b9.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read our feature in the Los Altos Town Crier"
              className="block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/50"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-colors">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mx-auto mb-4">
                  <Newspaper className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2 text-center">Featured</div>
                <div className="text-white/80 text-sm text-center">Los Altos Town Crier</div>
              </div>
            </a>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-full mx-auto mb-4">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">Zero</div>
              <div className="text-white/80 text-sm">Food Waste Goal</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;

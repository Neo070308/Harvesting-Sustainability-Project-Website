import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              How It Works
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn about our simple 4-step process to turn surplus produce into community support.
            </p>
          </div>
        </div>
        <HowItWorks />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
          <Button 
            variant="hero" 
            size="lg" 
            className="group"
            onClick={() => window.location.href = '/#harvest-form'}
          >
            Schedule Your First Harvest
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
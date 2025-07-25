import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Target, ArrowRight } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            To reduce food waste, build a stronger community, and deliver fresh, 
            homegrown produce to those in need, one harvest at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Reduce Waste</h3>
              <p className="text-muted-foreground">
                Transform surplus produce from home gardens into valuable resources for our community.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Build Community</h3>
              <p className="text-muted-foreground">
                Connect neighbors and volunteers through meaningful acts of sharing and giving.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Feed Families</h3>
              <p className="text-muted-foreground">
                Deliver fresh, nutritious produce to Hope's Corner and other local food assistance programs.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            variant="default" 
            size="lg" 
            className="group"
            onClick={() => window.location.href = '/about'}
          >
            Learn More About Our Impact
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Mission;
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Truck, Heart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      number: "01",
      title: "Schedule a Harvest",
      description: "Home growers with extra fruits and veggies simply let us know through our easy scheduling form.",
      color: "text-primary"
    },
    {
      icon: Users,
      number: "02", 
      title: "Mobile Harvesters Coordinate",
      description: "Our volunteer-based Mobile Harvesters coordinate a convenient time with you.",
      color: "text-secondary"
    },
    {
      icon: Truck,
      number: "03",
      title: "We Harvest & Transport",
      description: "We carefully harvest your surplus produce and transport it with care and respect.",
      color: "text-accent"
    },
    {
      icon: Heart,
      number: "04",
      title: "Deliver to Community",
      description: "Fresh produce is delivered to Hope's Corner and other local soup kitchens serving those in need.",
      color: "text-destructive"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Simple Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            It's that simple—and that impactful. Four easy steps to turn your surplus into community support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="relative group hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${step.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Connection Lines for Desktop */}
        <div className="hidden lg:block relative mt-8">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent transform -translate-y-20"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
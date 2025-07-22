import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Calendar, 
  Handshake, 
  Share2, 
  ArrowRight, 
  Heart,
  Truck,
  Coffee
} from "lucide-react";

const GetInvolved = () => {
  const ways = [
    {
      icon: Calendar,
      title: "Schedule a Harvest",
      description: "Have extra produce? Let us come harvest it for you!",
      action: "Schedule Now",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Users,
      title: "Become a Harvester",
      description: "Join our volunteer team and help collect surplus produce.",
      action: "Join Us",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Handshake,
      title: "Partner with Us",
      description: "Run a soup kitchen or food program? Let's work together!",
      action: "Partner Up",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Share2,
      title: "Spread the Word",
      description: "Help us reach more people by sharing our mission.",
      action: "Share",
      color: "text-pink-600",
      bgColor: "bg-pink-100"
    }
  ];

  const roles = [
    {
      icon: Truck,
      title: "Mobile Harvester",
      description: "Visit homes to collect surplus produce",
      commitment: "2-4 hours/week"
    },
    {
      icon: Heart,
      title: "Community Coordinator",
      description: "Help organize and schedule harvests",
      commitment: "3-5 hours/week"
    },
    {
      icon: Coffee,
      title: "Social Media Helper",
      description: "Share our impact and recruit volunteers",
      commitment: "1-2 hours/week"
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Join the Movement
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Get Involved!
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              There are many ways to support our mission. Whether you have produce to share, 
              time to volunteer, or want to spread awareness—we'd love your help!
            </p>
          </div>

          {/* Main Ways to Get Involved */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {ways.map((way, index) => {
              const IconComponent = way.icon;
              return (
                <Card key={index} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${way.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`w-8 h-8 ${way.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{way.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {way.description}
                    </p>
                    <Button variant="outline" size="sm" className="group">
                      {way.action}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Volunteer Roles Section */}
          <div className="bg-background rounded-xl p-8 shadow-soft">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Volunteer Opportunities</h3>
              <p className="text-muted-foreground">
                Choose a role that fits your schedule and interests
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {roles.map((role, index) => {
                const IconComponent = role.icon;
                return (
                  <div key={index} className="text-center p-6 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{role.title}</h4>
                    <p className="text-muted-foreground text-sm mb-3">{role.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {role.commitment}
                    </Badge>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <Button variant="cta" size="lg" className="group">
                Apply to Volunteer
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Contact us at mobile.harvesters650@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
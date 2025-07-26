import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GetInvolved from "@/components/GetInvolved";
import VolunteerForm from "@/components/VolunteerForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Clock, Award } from "lucide-react";

const Volunteer = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Make a Difference",
      description: "Directly impact families in need while reducing food waste in your community."
    },
    {
      icon: Users,
      title: "Meet Like-Minded People",
      description: "Connect with passionate volunteers who share your values and commitment."
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Choose volunteer opportunities that fit your availability and lifestyle."
    },
    {
      icon: Award,
      title: "Personal Growth",
      description: "Develop new skills while contributing to meaningful community change."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Get Involved
            </h1>
            <p className="text-xl text-muted-foreground">
              Join our community of volunteers making a real difference in the fight against hunger and food waste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        
        <VolunteerForm />
      </main>
      <Footer />
    </div>
  );
};

export default Volunteer;
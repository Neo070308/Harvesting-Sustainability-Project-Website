import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Leaf } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8 text-center">About Us</h1>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Harvesting Sustainability is a community-driven initiative that connects home gardeners 
                with local food assistance programs to reduce waste and fight hunger.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Founded on the belief that no fresh produce should go to waste while families in our 
                community face food insecurity, we've created a simple yet powerful system that turns 
                surplus garden harvests into hope for those in need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardContent className="p-8">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                  <p className="text-muted-foreground">
                    Compassion, community, and sustainability guide everything we do.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Our Team</h3>
                  <p className="text-muted-foreground">
                    Dedicated volunteers passionate about making a difference in our community.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <Leaf className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Our Impact</h3>
                  <p className="text-muted-foreground">
                    Every harvest brings us closer to a more sustainable and caring community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
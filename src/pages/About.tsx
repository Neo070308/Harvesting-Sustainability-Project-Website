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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">About Our Project</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The Harvesting Sustainability Project is run by a dedicated team of high school volunteers 
                who are passionate about reducing food waste and supporting our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img
                  src="https://static.wixstatic.com/media/828f0f_27570f671a184f1ebb5931afbeb72291~mv2.jpg/v1/fill/w_347,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5431_JPG.jpg"
                  alt="Harvesting team in action"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The Harvesting Sustainability Project is a community-based initiative dedicated to reducing food waste 
                    and fighting hunger—one backyard harvest at a time. In many neighborhoods, home gardeners grow more 
                    fruits and vegetables than they can use. Rather than letting that fresh produce go to waste, we collect 
                    it and deliver it directly to local soup kitchens that serve those in need.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We make it simple: donors let us know when they have extra produce, and our team of volunteer Mobile 
                    Harvesters picks it and delivers it where it's needed most. No effort required—just meaningful impact.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Our Partnership</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We proudly partner with <a href="https://www.hopes-corner.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Hope's Corner</a>, 
                    a local soup kitchen in Mountain View, and donate all of our produce directly to their kitchen. 
                    Together, we're working to ensure that no good food goes to waste—and that everyone in our community 
                    has access to fresh, healthy meals.
                  </p>
                </div>

                <div className="bg-gradient-subtle rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 text-center">Our Goal</h3>
                  <p className="text-center text-muted-foreground mb-4">
                    Turn abundance into impact - one harvest at a time.
                  </p>
                  <div className="text-center">
                    <a
                      href="mailto:mobile.harvesters650@gmail.com"
                      className="text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      <Heart className="w-4 h-4 inline mr-2" />
                      mobile.harvesters650@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <h3 className="text-xl font-semibold mb-4">Our Volunteers</h3>
                  <p className="text-muted-foreground">
                    High school students passionate about making a difference in our community.
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
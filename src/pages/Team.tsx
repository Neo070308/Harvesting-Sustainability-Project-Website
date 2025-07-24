import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Users, Heart, Leaf } from "lucide-react";

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our dedicated volunteer Mobile Harvesters are high school students passionate about 
                making a positive impact in our community through food sustainability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Our Mobile Harvesters</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We are a team of high school volunteers who believe in turning backyard surplus into community support. 
                  Our Mobile Harvesters coordinate with local gardeners, carefully collect excess produce, and deliver 
                  it to those who need it most.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Each volunteer brings their own passion for sustainability and community service, working together 
                  to create meaningful change one harvest at a time.
                </p>
                <div className="bg-gradient-subtle rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Want to Join Our Team?</h3>
                  <p className="text-muted-foreground mb-4">
                    We're always looking for dedicated high school volunteers to join our Mobile Harvester team.
                  </p>
                  <a
                    href="/volunteer"
                    className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Become a Mobile Harvester
                  </a>
                </div>
              </div>
              <div>
                <img
                  src="https://static.wixstatic.com/media/828f0f_27570f671a184f1ebb5931afbeb72291~mv2.jpg/v1/fill/w_347,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5431_JPG.jpg"
                  alt="Mobile Harvesters team in action"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Volunteer-Driven</h3>
                  <p className="text-muted-foreground">
                    Our entire operation is powered by passionate high school volunteers who donate their time and energy.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Community-Focused</h3>
                  <p className="text-muted-foreground">
                    Every harvest brings us closer to our neighbors and strengthens our local community bonds.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Impact-Oriented</h3>
                  <p className="text-muted-foreground">
                    We measure our success by the pounds of produce rescued and families served.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 text-center bg-gradient-subtle rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Contact Our Team</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Have questions about our work or want to get involved? We'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:mobile.harvesters650@gmail.com"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <Mail className="w-5 h-5" />
                  mobile.harvesters650@gmail.com
                </a>
                <a
                  href="https://www.instagram.com/mobile.harvesters/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <span>📱</span>
                  @mobile.harvesters
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
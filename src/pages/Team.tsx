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
              <h1 className="text-4xl font-bold text-foreground mb-4">The Mobile Harvesters</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet the dedicated team of high school students who founded and lead the Harvesting Sustainability Project.
              </p>
            </div>

            {/* Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Ariv Diggi */}
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <img
                      src="https://static.wixstatic.com/media/828f0f_aa7469d99dc74883b942a6a230eff11b~mv2.png/v1/crop/x_0,y_1278,w_4284,h_3157/fill/w_456,h_336,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_2718_HEIC.png"
                      alt="Ariv Diggi"
                      className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Ariv Diggi</h3>
                  <p className="text-sm text-muted-foreground mb-4">Founder & Project Leader</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Junior at Mountain View High School, student-athlete, and STEM educator. 
                    Ariv founded this initiative after noticing abundant fruit trees in his neighborhood 
                    going unharvested while people lack access to fresh food.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    When not organizing harvests, you'll find him on the basketball court or teaching 
                    STEM to elementary students as Chapter President of STEM Together Mountain View.
                  </p>
                  <a
                    href="https://www.instagram.com/ariv_diggi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                  >
                    <span>📱</span>
                    @ariv_diggi
                  </a>
                </CardContent>
              </Card>

              {/* Connor Kao */}
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <img
                      src="https://static.wixstatic.com/media/828f0f_0823e7121aff4a48bfd1daee7ccec5f1~mv2.jpg/v1/crop/x_0,y_113,w_359,h_265/fill/w_456,h_336,al_c,lg_1,q_80,enc_avif,quality_auto/Screenshot%202025-07-13%20at%209_35_edited.jpg"
                      alt="Connor Kao"
                      className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Connor Kao</h3>
                  <p className="text-sm text-muted-foreground mb-4">Creative Director & Operations</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Senior at Mountain View High School and passionate creator. Connor brings fresh ideas 
                    to life through business innovation, murals, and speeches. His love for teamwork 
                    shines through both soccer and Mobile Harvesters.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    His inspiration came from childhood memories of picking persimmons from their backyard 
                    tree and realizing how to turn waste into purpose.
                  </p>
                  <a
                    href="https://www.instagram.com/connorlkao/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                  >
                    <span>📱</span>
                    @connorlkao
                  </a>
                </CardContent>
              </Card>

              {/* Noah Shahraz */}
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <img
                      src="https://static.wixstatic.com/media/828f0f_b4627b04f58e4dc5ad39d38d07ef7778~mv2.jpg/v1/crop/x_0,y_560,w_2223,h_1638/fill/w_456,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8423_edited.jpg"
                      alt="Noah Shahraz"
                      className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Noah Shahraz</h3>
                  <p className="text-sm text-muted-foreground mb-4">Community Outreach & Education</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Senior at Mountain View High School and student-athlete. Noah's early memories 
                    of picking grapefruit with his mom sparked his awareness of food waste and 
                    the opportunity to build community connections.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Whether on the basketball court, coaching younger players, or tutoring students, 
                    Noah is always looking for ways to make a lasting impact.
                  </p>
                  <a
                    href="https://www.instagram.com/noah.shahraz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                  >
                    <span>📱</span>
                    @noah.shahraz
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Join Our Team Section */}
            <div className="bg-gradient-subtle rounded-xl p-8 mb-16">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-4">Want to Join Our Team?</h3>
                <p className="text-muted-foreground mb-6">
                  We're always looking for dedicated high school volunteers to join our Mobile Harvester team 
                  and help us expand our impact in the community.
                </p>
                <a
                  href="/volunteer"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
                >
                  Become a Mobile Harvester
                </a>
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
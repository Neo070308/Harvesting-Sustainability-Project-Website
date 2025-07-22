import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      bio: "Sarah founded Harvesting Sustainability with a vision to connect communities through food sharing. With over 10 years in nonprofit management, she leads our mission to reduce food waste and fight hunger.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      email: "sarah@harvestingsustainability.org",
      linkedin: "https://linkedin.com/in/sarahjohnson"
    },
    {
      name: "Michael Chen",
      role: "Program Coordinator",
      bio: "Michael coordinates our harvest collection and distribution programs. His background in logistics and passion for sustainable living help ensure fresh produce reaches families efficiently.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      email: "michael@harvestingsustainability.org",
      linkedin: "https://linkedin.com/in/michaelchen"
    },
    {
      name: "Emily Rodriguez",
      role: "Community Outreach Manager",
      bio: "Emily builds relationships with local gardeners and food assistance programs. She organizes volunteer training and community events that strengthen our network of partners.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      email: "emily@harvestingsustainability.org",
      linkedin: "https://linkedin.com/in/emilyrodriguez"
    },
    {
      name: "David Thompson",
      role: "Operations Manager",
      bio: "David ensures our operations run smoothly from harvest collection to final delivery. His expertise in supply chain management helps us maximize the impact of every donated pound of produce.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      email: "david@harvestingsustainability.org",
      linkedin: "https://linkedin.com/in/davidthompson"
    },
    {
      name: "Lisa Park",
      role: "Volunteer Coordinator",
      bio: "Lisa manages our amazing team of volunteers and organizes training programs. Her enthusiasm for community service inspires others to join our mission of creating positive change.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      email: "lisa@harvestingsustainability.org",
      linkedin: "https://linkedin.com/in/lisapark"
    },
    {
      name: "James Wilson",
      role: "Technology Director",
      bio: "James develops and maintains our digital platforms that connect gardeners with families in need. His innovative solutions help streamline our operations and increase our community impact.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      email: "james@harvestingsustainability.org",
      linkedin: "https://linkedin.com/in/jameswilson"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our dedicated team works tirelessly to connect communities, reduce food waste, 
                and ensure fresh produce reaches families who need it most.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-square w-full">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="flex items-center space-x-3">
                        <a
                          href={`mailto:${member.email}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
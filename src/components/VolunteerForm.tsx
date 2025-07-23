import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const VolunteerForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest! We'll contact you soon with next steps.",
    });
  };

  return (
    <section id="volunteer-form" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Volunteer Application</CardTitle>
              <p className="text-center text-muted-foreground">
                Join our team of dedicated volunteers making a difference in the community!
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Mountain View, CA" />
                </div>

                <div>
                  <Label htmlFor="role">Preferred Volunteer Role</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mobile-harvester">Mobile Harvester</SelectItem>
                      <SelectItem value="community-coordinator">Community Coordinator</SelectItem>
                      <SelectItem value="social-media">Social Media Helper</SelectItem>
                      <SelectItem value="flexible">I'm flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Availability (check all that apply)</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                      <div key={day} className="flex items-center space-x-2">
                        <Checkbox id={day.toLowerCase()} />
                        <Label htmlFor={day.toLowerCase()} className="text-sm">{day}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience">Relevant Experience (optional)</Label>
                  <Textarea
                    id="experience"
                    placeholder="Tell us about any volunteer experience, gardening knowledge, or other relevant skills..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="motivation">Why do you want to volunteer with us?</Label>
                  <Textarea
                    id="motivation"
                    placeholder="Share what motivates you to join our mission..."
                    rows={3}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to undergo a background check if required and commit to the volunteer responsibilities
                  </Label>
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full">
                  Submit Application
                </Button>
                
                <p className="text-center text-sm text-muted-foreground">
                  Questions? Contact us at mobile.harvesters650@gmail.com
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm;
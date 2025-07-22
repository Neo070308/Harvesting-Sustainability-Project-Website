import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock, MapPin, Phone } from "lucide-react";

const HarvestForm = () => {
  return (
    <section id="harvest-form" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Get Started
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Schedule a Harvest
            </h2>
            <p className="text-xl text-muted-foreground">
              Have extra fruits and vegetables? Fill out this form to schedule a time when we can come harvest your produce!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>Request a Harvest</span>
                    <ExternalLink className="w-5 h-5 text-muted-foreground" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/30 rounded-lg p-6 mb-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      This form will open in a new window. All fields marked with * are required.
                    </p>
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSdXpCHXyhGUdI3rkbZgifvtyBTdT9OLA060sk-qhUq8WvOY9w/viewform?embedded=true"
                      width="100%"
                      height="800"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      className="rounded-lg"
                      title="Harvest Request Form"
                    >
                      Loading…
                    </iframe>
                  </div>
                  
                  <div className="text-center">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdXpCHXyhGUdI3rkbZgifvtyBTdT9OLA060sk-qhUq8WvOY9w/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      Open form in new window
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Quick Response</h4>
                      <p className="text-sm text-muted-foreground">We'll contact you within 24 hours to confirm details.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Convenient Pickup</h4>
                      <p className="text-sm text-muted-foreground">Our volunteers come to you at your preferred time.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Stay Connected</h4>
                      <p className="text-sm text-muted-foreground">Get updates on your donation's impact in the community.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Contact Info</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Email:</strong></p>
                    <p className="text-muted-foreground">mobile.harvesters650@gmail.com</p>
                    
                    <p className="pt-2"><strong>Service Area:</strong></p>
                    <p className="text-muted-foreground">Mountain View & surrounding areas</p>
                    
                    <p className="pt-2"><strong>Pickup Times:</strong></p>
                    <p className="text-muted-foreground">9 AM - 5 PM, 7 days a week</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HarvestForm;
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria González",
      role: "Home Gardener",
      location: "Mountain View, CA",
      content: "I used to feel guilty throwing away excess tomatoes and zucchini from my garden. Now I know they're feeding families in need. The volunteers are wonderful and made the whole process so easy!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Chen",
      role: "Volunteer Harvester",
      location: "Palo Alto, CA",
      content: "Being part of this initiative has been incredibly rewarding. Every weekend, I help collect fresh produce and see the direct impact on our community. It's amazing how much difference we can make together.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Hope's Corner Staff",
      role: "Partner Organization",
      location: "Mountain View, CA",
      content: "The fresh produce from Harvesting Sustainability has been a game-changer for our kitchen. Our guests love the variety and quality of fruits and vegetables. This partnership truly makes a difference.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Community Voices
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              What Our Community Says
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from the amazing people who make our mission possible—from generous gardeners 
              to dedicated volunteers and our partner organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-8 h-8 text-primary/30" />
                    <div className="flex items-center gap-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/10"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-primary/5 rounded-lg p-8 border border-primary/10">
              <h3 className="text-xl font-semibold mb-4">Want to Share Your Experience?</h3>
              <p className="text-muted-foreground mb-6">
                We'd love to hear how Harvesting Sustainability has impacted you or your community. 
                Your story could inspire others to join our mission!
              </p>
              <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80 transition-colors">
                📧 Share Your Story: mobile.harvesters650@gmail.com
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;